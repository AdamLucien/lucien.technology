import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { requireLucienStaff, requirePortalSession } from "@/lib/portal";
import { runMatchingForIntent } from "@/lib/talent/match";
import { getRoleLabel } from "@/lib/talent/labels";
import { getStaffingSummaryForEngagement } from "@/lib/talent/staffing";
import { logAuditEvent } from "@/lib/audit";
import { StatusBadge } from "@/components/portal/StatusBadge";
import { getSkillsGapBadge, getStaffingBadge } from "@/lib/status-badges";
import type { StaffingRoleRequirement } from "@/lib/talent/staffing";

type SkillRequirement = { skillId: string; must: boolean };

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" && value !== null;

const isSkillRequirement = (value: unknown): value is SkillRequirement =>
  isRecord(value) &&
  typeof value.skillId === "string" &&
  typeof value.must === "boolean";

const readSkills = (value: unknown): SkillRequirement[] => {
  if (!isRecord(value)) return [];
  const skills = value.skills;
  if (!Array.isArray(skills)) return [];
  return skills.filter(isSkillRequirement);
};

const readMissingMustSkills = (value: unknown): string[] => {
  if (!isRecord(value)) return [];
  const missing = value.missingMustSkillIds;
  if (!Array.isArray(missing)) return [];
  return missing.filter((item): item is string => typeof item === "string");
};

async function runMatching(formData: FormData) {
  "use server";
  const session = await requirePortalSession();
  requireLucienStaff(session.user.role);

  const intentId = String(formData.get("intentId") || "");
  if (!intentId || !session.user.orgId) return;

  await runMatchingForIntent(intentId, session.user.orgId);
}

async function assignMatch(formData: FormData) {
  "use server";
  const session = await requirePortalSession();
  requireLucienStaff(session.user.role);

  const matchId = String(formData.get("matchId") || "");
  const roleId = String(formData.get("roleId") || "");
  const allocationPct = Number(formData.get("allocationPct") || 100);

  if (!matchId || !roleId) return;

  const match = await prisma.talentMatch.findUnique({
    where: { id: matchId },
    include: {
      talentProfile: true,
      staffingIntent: true,
    },
  });

  if (!match?.staffingIntent.engagementId) return;

  const roleLabel = getRoleLabel(roleId);

  const assignment = await prisma.talentAssignment.create({
    data: {
      profileId: match.talentProfileId,
      engagementId: match.staffingIntent.engagementId,
      roleId,
      roleLabel,
      allocationPct: Number.isFinite(allocationPct) ? allocationPct : 100,
      sharedWithClient: true,
    },
  });

  await prisma.talentMatch.update({
    where: { id: match.id },
    data: { status: "HIRED" },
  });

  if (match.talentProfile.email) {
    const user = await prisma.user.findFirst({
      where: { email: match.talentProfile.email },
    });
    if (user) {
      await prisma.engagementMember.create({
        data: {
          orgId: match.staffingIntent.orgId,
          engagementId: match.staffingIntent.engagementId,
          userId: user.id,
          roleTitle: roleLabel,
          allocationHours: null,
          clientVisible: true,
        },
      });
    }
  }

  const summaries = await getStaffingSummaryForEngagement(
    match.staffingIntent.engagementId,
  );
  const summary = summaries.find((item) => item.intentId === match.staffingIntentId);
  if (summary?.missingCounts && Object.values(summary.missingCounts).every((v) => v === 0)) {
    await prisma.staffingIntent.update({
      where: { id: match.staffingIntentId },
      data: { state: "FULFILLED" },
    });
  }

  await logAuditEvent({
    orgId: match.staffingIntent.orgId,
    userId: session.user.id,
    action: "talent_assigned",
    resourceType: "talent_assignment",
    resourceId: assignment.id,
    meta: { intentId: match.staffingIntentId },
  });
}

export default async function StaffingPage() {
  const session = await requirePortalSession();
  const intents = await prisma.staffingIntent.findMany({
    where:
      session.user.role === "lucien_admin" || session.user.role === "lucien_operator"
        ? {}
        : { orgId: session.user.orgId ?? "" },
    include: {
      inquiry: true,
      engagement: true,
      scopeProposal: true,
      outreachLogs: { select: { id: true, status: true } },
      matches: {
        orderBy: { score: "desc" },
        take: 4,
        include: { talentProfile: true },
      },
    },
    orderBy: { updatedAt: "desc" },
  });

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <p className="text-xs uppercase tracking-[0.3em] text-slate">Staffing</p>
        <h1 className="text-2xl font-semibold text-ash">Staffing intents</h1>
        <p className="text-sm text-muted">
          Track demand, matching, and fulfillment across engagements and inquiries.
        </p>
      </div>

      {intents.length === 0 ? (
        <div className="rounded-2xl border border-line/80 bg-soft p-6 space-y-3 text-sm text-muted">
          <div className="text-ash">No staffing intents yet.</div>
          <p>
            Staffing intents are created automatically when a new inquiry is
            submitted and scoped.
          </p>
          <div className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.2em]">
            <Link
              href="/request-scope"
              className="btn-animate btn-primary rounded-full px-4 py-2 text-[0.6rem]"
            >
              Create inquiry
            </Link>
            <Link
              href="/portal/inquiries"
              className="rounded-full border border-line/80 px-4 py-2 text-[0.6rem] text-ash"
            >
              View inquiries
            </Link>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          {intents.map((intent) => {
            const roles = Array.isArray(intent.rolesJson)
              ? (intent.rolesJson as StaffingRoleRequirement[])
              : [];
            const skills = readSkills(intent.requirementsJson);
            const topMatchMissingSkills = readMissingMustSkills(
              intent.matches[0]?.reasonsJson,
            );
            const hasRolesDefined = roles.length > 0;
            const fulfilled = intent.state === "FULFILLED";
            const outreachCount = intent.outreachLogs.length;
            const hasMatches = intent.matches.length > 0;
            const subject =
              intent.engagement?.title ??
              intent.inquiry?.organization ??
              intent.scopeProposal?.title ??
              "Staffing intent";
            const nextStep =
              intent.state === "DRAFT"
                ? "Define scope and roles."
                : !hasRolesDefined
                  ? "Add roles to the intent."
                  : !hasMatches
                    ? "Run matching."
                    : outreachCount === 0
                      ? "Run outreach."
                      : intent.state === "ACTIVE" && !fulfilled
                        ? "Assign talent."
                        : "Staffing fulfilled.";

            return (
              <div
                key={intent.id}
                className="rounded-2xl border border-line/80 bg-soft p-6 space-y-4"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <div className="text-lg font-semibold text-ash">{subject}</div>
                    <div className="text-xs text-slate">
                      {intent.state} · {roles.length} roles
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.2em]">
                    <StatusBadge
                      {...getStaffingBadge(intent, {
                        hasRolesDefined,
                        fulfilled,
                      })}
                    />
                    <StatusBadge {...getSkillsGapBadge(topMatchMissingSkills)} />
                    {intent.engagementId && (
                      <Link
                        href={`/portal/engagements/${intent.engagementId}`}
                        className="rounded-full border border-line/80 px-3 py-1 text-[0.6rem] text-ash"
                      >
                        Open engagement
                      </Link>
                    )}
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2 text-sm text-muted">
                  <div>
                    <div className="text-xs uppercase tracking-[0.2em] text-slate">
                      Roles required
                    </div>
                    <div className="mt-2 space-y-1">
                      {roles.length === 0 ? (
                        <div className="text-xs text-muted">No roles defined.</div>
                      ) : (
                        roles.map((role) => (
                          <div key={`${intent.id}-${role.roleId}`}>
                            {getRoleLabel(role.roleId)} · {role.count ?? 1}
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-[0.2em] text-slate">
                      Skills required
                    </div>
                    <div className="mt-2 flex flex-wrap gap-2 text-xs">
                      {skills.length === 0 ? (
                        <div className="text-xs text-muted">No skills inferred.</div>
                      ) : (
                        skills.map((skill) => (
                          <StatusBadge
                            key={`${intent.id}-${skill.skillId}`}
                            label={skill.skillId}
                            tone={skill.must ? "warning" : "neutral"}
                            variant="soft"
                          />
                        ))
                      )}
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border border-line/80 bg-ink px-4 py-3 text-xs text-slate">
                  <span className="text-ash">Next step:</span> {nextStep}
                </div>

                <div className="flex flex-wrap gap-3">
                  <form action={runMatching}>
                    <input type="hidden" name="intentId" value={intent.id} />
                    <button
                      type="submit"
                      className="btn-animate btn-secondary rounded-full px-4 py-2 text-[0.6rem] uppercase tracking-[0.2em]"
                    >
                      Run matching
                    </button>
                  </form>
                </div>

                {intent.matches.length > 0 && (
                  <div className="space-y-2 text-sm text-muted">
                    <div className="text-xs uppercase tracking-[0.2em] text-slate">
                      Top matches
                    </div>
                    {intent.matches.map((match) => (
                      <div
                        key={match.id}
                        className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-line/80 bg-ink px-4 py-3"
                      >
                        <div>
                          <div className="text-ash">{match.talentProfile.fullName}</div>
                          <div className="text-xs text-slate">
                            Score {match.score.toFixed(1)} · {match.status}
                          </div>
                        </div>
                        {intent.engagementId && roles.length > 0 && (
                          <form action={assignMatch} className="flex items-center gap-2">
                            <input type="hidden" name="matchId" value={match.id} />
                            <input
                              type="hidden"
                              name="roleId"
                              value={roles[0]?.roleId ?? ""}
                            />
                            <input type="hidden" name="allocationPct" value="100" />
                            <button
                              type="submit"
                              className="btn-animate btn-primary rounded-full px-4 py-2 text-[0.6rem] uppercase tracking-[0.2em]"
                            >
                              Assign
                            </button>
                          </form>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
