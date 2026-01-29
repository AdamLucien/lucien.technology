import { createTransport } from "nodemailer";
import type { TransportOptions } from "nodemailer";
import { Prisma } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import { getRoleLabel } from "@/lib/talent/labels";

const DEFAULT_COOLDOWN_DAYS = 7;
const DEFAULT_MAX_PER_INTENT = 3;
const DEFAULT_MAX_PER_DAY = 25;

const now = () => new Date();

const getCooldownCutoff = () => {
  const days = Number(process.env.OUTREACH_COOLDOWN_DAYS || DEFAULT_COOLDOWN_DAYS);
  const cutoff = new Date();
  cutoff.setDate(cutoff.getDate() - days);
  return cutoff;
};

const getStartOfDay = () => {
  const start = new Date();
  start.setHours(0, 0, 0, 0);
  return start;
};

const buildEmailPayload = ({
  profileName,
  engagementTitle,
  roleLabel,
}: {
  profileName: string;
  engagementTitle: string;
  roleLabel: string;
}) => ({
  subject: `Opportunity: ${roleLabel} for ${engagementTitle}`,
  text: `Hi ${profileName},\n\nWe have a role open for ${roleLabel} on ${engagementTitle}. Reply if you are open to a quick conversation.\n\nLucien`,
});

export async function runOutreachJob({
  orgId,
  triggeredByUserId,
}: {
  orgId?: string;
  triggeredByUserId?: string | null;
}) {
  const cutoff = getCooldownCutoff();
  const maxPerIntent = Number(process.env.OUTREACH_MAX_PER_INTENT || DEFAULT_MAX_PER_INTENT);
  const maxPerDay = Number(process.env.OUTREACH_MAX_PER_DAY || DEFAULT_MAX_PER_DAY);
  const startOfDay = getStartOfDay();
  const dailyCounts = new Map<string, number>();

  const getDailyCount = async (orgId: string) => {
    if (dailyCounts.has(orgId)) {
      return dailyCounts.get(orgId) ?? 0;
    }
    const count = await prisma.outreachLog.count({
      where: {
        orgId,
        createdAt: { gte: startOfDay },
      },
    });
    dailyCounts.set(orgId, count);
    return count;
  };

  const intents = await prisma.staffingIntent.findMany({
    where: {
      state: "ACTIVE",
      ...(orgId ? { orgId } : {}),
    },
    include: {
      engagement: true,
      matches: {
        where: { status: { in: ["SUGGESTED", "SHORTLISTED"] } },
        orderBy: { score: "desc" },
        take: maxPerIntent,
        include: { talentProfile: true },
      },
    },
  });

  let sent = 0;
  let queued = 0;
  let failed = 0;
  let skipped = 0;

  for (const intent of intents) {
    if (!intent.engagementId || !intent.engagement) continue;
    let dailyCount = await getDailyCount(intent.orgId);
    if (dailyCount >= maxPerDay) {
      skipped += intent.matches.length;
      continue;
    }

    for (const match of intent.matches) {
      if (dailyCount >= maxPerDay) {
        skipped += 1;
        break;
      }
      const profile = match.talentProfile;
      if (profile.optOutAt) continue;

      const recent = await prisma.outreachLog.findFirst({
        where: {
          staffingIntentId: intent.id,
          talentProfileId: profile.id,
          createdAt: { gte: cutoff },
        },
      });

      if (recent) continue;

      const email = profile.email;
      const isPlaceholder = email.endsWith("@scout.local");
      const channel = !isPlaceholder
        ? "EMAIL"
        : profile.linkedInUrl
          ? "LINKEDIN"
          : profile.xingUrl
          ? "XING"
          : "OTHER";

      const roleId = Array.isArray(intent.rolesJson)
        ? (intent.rolesJson as Array<{ roleId?: string }>).find(
            (role) => role && typeof role === "object" && typeof role.roleId === "string",
          )?.roleId
        : undefined;
      const roleLabel = roleId ? getRoleLabel(roleId) : "role";

      const payload = buildEmailPayload({
        profileName: profile.fullName,
        engagementTitle: intent.engagement.title,
        roleLabel,
      });
      const deepLink =
        channel === "LINKEDIN"
          ? profile.linkedInUrl
          : channel === "XING"
            ? profile.xingUrl
            : null;

      const outreach = await prisma.outreachLog.create({
        data: {
          orgId: intent.orgId,
          staffingIntentId: intent.id,
          talentProfileId: profile.id,
          channel,
          status: channel === "EMAIL" ? "QUEUED" : "QUEUED",
          templateKey: "default_outreach",
          payloadJson: {
            ...payload,
            deepLink,
          },
          createdByUserId: triggeredByUserId ?? null,
        },
      });
      dailyCount += 1;
      dailyCounts.set(intent.orgId, dailyCount);

      if (channel === "EMAIL" && !isPlaceholder) {
        const idempotencyKey = `outreach:${intent.id}:${profile.id}:email`;
        let emailJobId: string | null = null;
        try {
          const job = await prisma.emailJob.create({
            data: {
              orgId: intent.orgId,
              toEmail: email,
              templateKey: "default_outreach",
              payloadJson: payload,
              status: "QUEUED",
              idempotencyKey,
              scheduledAt: now(),
            },
          });
          emailJobId = job.id;
          queued += 1;
        } catch (error) {
          if (
            error instanceof Prisma.PrismaClientKnownRequestError &&
            error.code === "P2002"
          ) {
            const existing = await prisma.emailJob.findUnique({
              where: { idempotencyKey },
            });
            if (!existing) {
              skipped += 1;
              continue;
            }
            emailJobId = existing.id;
            if (existing.status === "SENT") {
              await prisma.outreachLog.update({
                where: { id: outreach.id },
                data: { status: "SENT", sentAt: existing.sentAt ?? now() },
              });
              sent += 1;
              continue;
            }
            if (existing.status === "FAILED") {
              await prisma.outreachLog.update({
                where: { id: outreach.id },
                data: { status: "FAILED", error: existing.error ?? "send_failed" },
              });
              failed += 1;
              continue;
            }
          }
          throw error;
        }

        try {
          if (!emailJobId) {
            skipped += 1;
            continue;
          }
          if (!process.env.EMAIL_SERVER) {
            throw new Error("EMAIL_SERVER not configured");
          }
          const transport = createTransport(
            process.env.EMAIL_SERVER as TransportOptions | string,
          );
          await transport.sendMail({
            to: email,
            from: process.env.EMAIL_FROM ?? "ops@lucien.technology",
            subject: payload.subject,
            text: payload.text,
          });
          await prisma.emailJob.update({
            where: { id: emailJobId },
            data: { status: "SENT", sentAt: now() },
          });
          await prisma.outreachLog.update({
            where: { id: outreach.id },
            data: { status: "SENT", sentAt: now() },
          });
          await prisma.talentMatch.update({
            where: { id: match.id },
            data: { status: "CONTACTED" },
          });
          await prisma.talentProfile.update({
            where: { id: profile.id },
            data: { contactStatus: "CONTACTED", lastContactedAt: now() },
          });
          sent += 1;
        } catch (error) {
          const message = error instanceof Error ? error.message : "send_failed";
          if (emailJobId) {
            await prisma.emailJob.update({
              where: { id: emailJobId },
              data: { status: "FAILED", error: message },
            });
          }
          await prisma.outreachLog.update({
            where: { id: outreach.id },
            data: { status: "FAILED", error: message },
          });
          failed += 1;
        }
      } else {
        queued += 1;
      }
    }
  }

  return { ok: true, sent, queued, failed, skipped };
}
