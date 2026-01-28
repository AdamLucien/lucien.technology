import { createTransport } from "nodemailer";
import type { TransportOptions } from "nodemailer";
import { prisma } from "@/lib/prisma";

const DEFAULT_COOLDOWN_DAYS = 7;
const DEFAULT_MAX_PER_INTENT = 3;

const now = () => new Date();

const getCooldownCutoff = () => {
  const days = Number(process.env.OUTREACH_COOLDOWN_DAYS || DEFAULT_COOLDOWN_DAYS);
  const cutoff = new Date();
  cutoff.setDate(cutoff.getDate() - days);
  return cutoff;
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

  for (const intent of intents) {
    if (!intent.engagementId || !intent.engagement) continue;

    for (const match of intent.matches) {
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

      const roleLabel =
        Array.isArray(intent.rolesJson) && intent.rolesJson.length > 0
          ? intent.rolesJson[0].roleId
          : "role";

      const payload = buildEmailPayload({
        profileName: profile.fullName,
        engagementTitle: intent.engagement.title,
        roleLabel,
      });

      const outreach = await prisma.outreachLog.create({
        data: {
          orgId: intent.orgId,
          staffingIntentId: intent.id,
          talentProfileId: profile.id,
          channel,
          status: channel === "EMAIL" ? "QUEUED" : "QUEUED",
          templateKey: "default_outreach",
          payloadJson: payload,
          createdByUserId: triggeredByUserId ?? null,
        },
      });

      if (channel === "EMAIL" && !isPlaceholder) {
        const idempotencyKey = `outreach:${intent.id}:${profile.id}:email`;
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

        queued += 1;

        try {
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
            where: { id: job.id },
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
          await prisma.emailJob.update({
            where: { id: job.id },
            data: { status: "FAILED", error: message },
          });
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

  return { ok: true, sent, queued, failed };
}
