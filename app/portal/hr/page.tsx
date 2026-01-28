import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";
import {
  Prisma,
  type DeliveryTaskStatus,
  type EngagementTermStatus,
  type TalentContactStatus,
  type TalentStatus,
} from "@prisma/client";
import { formatDateShort } from "@/lib/format";
import { createNotifications } from "@/lib/notifications";
import { logAuditEvent } from "@/lib/audit";
import { t } from "@/lib/i18n";
import { domainOptions, roleGroups } from "@/lib/talent/taxonomy";
import { StatusBadge } from "@/components/portal/StatusBadge";
import { getOutreachBadge, getStaffingBadge } from "@/lib/status-badges";
import {
  getOrgScope,
  requireLucienStaff,
  requirePortalSession,
} from "@/lib/portal";
import Link from "next/link";

const migrationSteps = [
  "npm run db:migrate",
  "npm run db:seed",
  "npm run db:import (optional: import dev.db)",
];

const talentStatusOptions: TalentStatus[] = [
  "NEW",
  "REVIEWED",
  "APPROVED",
  "ARCHIVED",
];

const talentContactStatusOptions: TalentContactStatus[] = [
  "NOT_CONTACTED",
  "CONTACTED",
  "RESPONDED",
  "ONBOARDED",
];

const isMissingTableError = (error: unknown) => {
  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    return error.code === "P2021" || error.code === "P2022";
  }
  if (error instanceof Error) {
    return (
      error.message.includes("does not exist") ||
      error.message.includes("no such table")
    );
  }
  return false;
};

type EngagementList = Awaited<ReturnType<typeof prisma.engagement.findMany>>;
type EngagementMemberList = Prisma.EngagementMemberGetPayload<{
  include: { user: true; engagement: true };
}>[];
type TimeEntryList = Prisma.TimeEntryGetPayload<{
  include: { user: true; engagement: true };
}>[];
type DeliveryTaskList = Prisma.DeliveryTaskGetPayload<{
  include: { owner: true; engagement: true };
}>[];
type EngagementTermList = Prisma.EngagementTermGetPayload<{
  include: { engagement: true };
}>[];
type UserList = Awaited<ReturnType<typeof prisma.user.findMany>>;
type TalentProfileList = Prisma.TalentProfileGetPayload<{
  include: { _count: { select: { signals: true } } };
}>[];
type TalentProfileDetail = Prisma.TalentProfileGetPayload<{
  include: {
    signals: true;
    assignments: { include: { engagement: true } };
  };
}>;
type StaffingIntentList = Prisma.StaffingIntentGetPayload<{
  include: { inquiry: true; engagement: true; scopeProposal: true };
}>[];

async function createAssignment(formData: FormData) {
  "use server";
  const session = await requirePortalSession();
  const user = await prisma.user.findUnique({ where: { id: session.user.id } });
  requireLucienStaff(user?.role);

  const engagementId = String(formData.get("engagementId") || "");
  const memberUserId = String(formData.get("userId") || "");
  const roleTitle = String(formData.get("roleTitle") || "");
  const allocationRaw = formData.get("allocationHours");
  const allocationHours = allocationRaw ? Number(allocationRaw) : null;
  const rateRaw = formData.get("rateHourly");
  const rateHourly = rateRaw ? Number(rateRaw) : null;
  const startDateRaw = String(formData.get("startDate") || "");
  const endDateRaw = String(formData.get("endDate") || "");
  const clientVisible = formData.get("clientVisible") === "on";

  if (!engagementId || !memberUserId || !roleTitle) {
    return;
  }

  const engagement = await prisma.engagement.findUnique({
    where: { id: engagementId },
  });
  if (!engagement) return;

  const member = await prisma.engagementMember.create({
    data: {
      orgId: engagement.orgId,
      engagementId,
      userId: memberUserId,
      roleTitle,
      allocationHours: Number.isFinite(allocationHours)
        ? allocationHours
        : null,
      rateHourly: Number.isFinite(rateHourly) ? rateHourly : null,
      startDate: startDateRaw ? new Date(startDateRaw) : null,
      endDate: endDateRaw ? new Date(endDateRaw) : null,
      clientVisible,
    },
  });

  await logAuditEvent({
    orgId: engagement.orgId,
    userId: user?.id,
    action: "hr_member_added",
    resourceType: "EngagementMember",
    resourceId: member.id,
    meta: { engagementId },
  });

  await createNotifications({
    orgId: engagement.orgId,
    recipientRoles: ["org_admin"],
    recipientOrgId: engagement.orgId,
    type: "hr",
    title: "Team member added",
    body: "A new HR assignment was recorded for the engagement.",
    entityType: "EngagementMember",
    entityId: member.id,
  });

  revalidatePath("/portal/hr");
}

async function createTimeEntry(formData: FormData) {
  "use server";
  const session = await requirePortalSession();
  const user = await prisma.user.findUnique({ where: { id: session.user.id } });
  requireLucienStaff(user?.role);

  const engagementId = String(formData.get("engagementId") || "");
  const entryUserId = String(formData.get("userId") || "");
  const roleTitle = String(formData.get("roleTitle") || "");
  const hours = Number(formData.get("hours"));
  const entryDateRaw = String(formData.get("entryDate") || "");
  const approved = formData.get("approved") === "on";

  if (!engagementId || !entryUserId || !Number.isFinite(hours)) {
    return;
  }

  const engagement = await prisma.engagement.findUnique({
    where: { id: engagementId },
  });
  if (!engagement) return;

  const entryDate = entryDateRaw ? new Date(entryDateRaw) : new Date();

  const entry = await prisma.timeEntry.create({
    data: {
      orgId: engagement.orgId,
      engagementId,
      userId: entryUserId,
      entryDate,
      hours,
      roleTitle: roleTitle || null,
      note: String(formData.get("note") || "") || null,
      approvedAt: approved ? new Date() : null,
      approvedByUserId: approved ? user?.id ?? null : null,
    },
  });

  await logAuditEvent({
    orgId: engagement.orgId,
    userId: user?.id,
    action: "hr_time_logged",
    resourceType: "TimeEntry",
    resourceId: entry.id,
    meta: { engagementId, hours },
  });

  await createNotifications({
    orgId: engagement.orgId,
    recipientRoles: ["org_admin"],
    recipientOrgId: engagement.orgId,
    type: "hr",
    title: "Time entry logged",
    body: "New HR time entry recorded.",
    entityType: "TimeEntry",
    entityId: entry.id,
  });

  revalidatePath("/portal/hr");
}

async function createTask(formData: FormData) {
  "use server";
  const session = await requirePortalSession();
  const user = await prisma.user.findUnique({ where: { id: session.user.id } });
  requireLucienStaff(user?.role);

  const engagementId = String(formData.get("engagementId") || "");
  const title = String(formData.get("title") || "");
  const statusRaw = String(formData.get("status") || "todo");
  const status = ([
    "todo",
    "in_progress",
    "blocked",
    "done",
  ] as DeliveryTaskStatus[]).includes(statusRaw as DeliveryTaskStatus)
    ? (statusRaw as DeliveryTaskStatus)
    : "todo";
  const ownerId = String(formData.get("ownerId") || "");
  const dueDateRaw = String(formData.get("dueDate") || "");

  if (!engagementId || !title) {
    return;
  }

  const engagement = await prisma.engagement.findUnique({
    where: { id: engagementId },
  });
  if (!engagement) return;

  const task = await prisma.deliveryTask.create({
    data: {
      orgId: engagement.orgId,
      engagementId,
      title,
      status,
      ownerId: ownerId || null,
      dueDate: dueDateRaw ? new Date(dueDateRaw) : null,
    },
  });

  await logAuditEvent({
    orgId: engagement.orgId,
    userId: user?.id,
    action: "hr_work_item_created",
    resourceType: "DeliveryTask",
    resourceId: task.id,
    meta: { engagementId },
  });

  await createNotifications({
    orgId: engagement.orgId,
    recipientRoles: ["org_admin"],
    recipientOrgId: engagement.orgId,
    type: "hr",
    title: "Work item added",
    body: "A new HR work item was recorded.",
    entityType: "DeliveryTask",
    entityId: task.id,
  });

  revalidatePath("/portal/hr");
}

async function createTerm(formData: FormData) {
  "use server";
  const session = await requirePortalSession();
  const user = await prisma.user.findUnique({ where: { id: session.user.id } });
  requireLucienStaff(user?.role);

  const engagementId = String(formData.get("engagementId") || "");
  const title = String(formData.get("title") || "");
  const summary = String(formData.get("summary") || "");
  const statusRaw = String(formData.get("status") || "draft");
  const status = ([
    "draft",
    "active",
    "superseded",
  ] as EngagementTermStatus[]).includes(statusRaw as EngagementTermStatus)
    ? (statusRaw as EngagementTermStatus)
    : "draft";
  const effectiveDateRaw = String(formData.get("effectiveDate") || "");
  const endDateRaw = String(formData.get("endDate") || "");

  if (!engagementId || !title || !summary) {
    return;
  }

  const engagement = await prisma.engagement.findUnique({
    where: { id: engagementId },
  });
  if (!engagement) return;

  const term = await prisma.engagementTerm.create({
    data: {
      orgId: engagement.orgId,
      engagementId,
      title,
      summary,
      status,
      effectiveDate: effectiveDateRaw ? new Date(effectiveDateRaw) : null,
      endDate: endDateRaw ? new Date(endDateRaw) : null,
    },
  });

  await logAuditEvent({
    orgId: engagement.orgId,
    userId: user?.id,
    action: "hr_term_added",
    resourceType: "EngagementTerm",
    resourceId: term.id,
    meta: { engagementId },
  });

  await createNotifications({
    orgId: engagement.orgId,
    recipientRoles: ["org_admin"],
    recipientOrgId: engagement.orgId,
    type: "hr",
    title: "Contract term added",
    body: "New HR contract terms were recorded.",
    entityType: "EngagementTerm",
    entityId: term.id,
  });

  revalidatePath("/portal/hr");
}

async function updateTalentProfile(formData: FormData) {
  "use server";
  const session = await requirePortalSession();
  const user = await prisma.user.findUnique({ where: { id: session.user.id } });

  if (user?.role !== "lucien_admin") {
    return;
  }

  const profileId = String(formData.get("profileId") || "");
  const statusRaw = String(formData.get("status") || "");
  const contactStatusRaw = String(formData.get("contactStatus") || "");
  const notesRaw = String(formData.get("notes") || "");

  if (!profileId) return;

  const status = talentStatusOptions.includes(statusRaw as TalentStatus)
    ? (statusRaw as TalentStatus)
    : null;
  const contactStatus = talentContactStatusOptions.includes(
    contactStatusRaw as TalentContactStatus,
  )
    ? (contactStatusRaw as TalentContactStatus)
    : null;
  const notes = notesRaw.trim() ? notesRaw.trim() : null;

  const data: Prisma.TalentProfileUpdateInput = { notes };

  if (status) data.status = status;
  if (contactStatus) {
    data.contactStatus = contactStatus;
    data.lastContactedAt =
      contactStatus === "NOT_CONTACTED" ? null : new Date();
  }

  await prisma.talentProfile.update({
    where: { id: profileId },
    data,
  });

  if (user.orgId) {
    await logAuditEvent({
      orgId: user.orgId,
      userId: user.id,
      action: "talent_profile_updated",
      resourceType: "TalentProfile",
      resourceId: profileId,
      meta: {
        status,
        contactStatus,
      },
    });
  }

  revalidatePath("/portal/hr");
}

type HrPageProps = {
  searchParams?: Record<string, string | string[] | undefined>;
};

export default async function HrPage({ searchParams }: HrPageProps) {
  const session = await requirePortalSession();
  const scope = getOrgScope(session.user.role, session.user.orgId);
  const isLucienStaff =
    session.user.role === "lucien_admin" || session.user.role === "lucien_operator";
  const isLucienAdmin = session.user.role === "lucien_admin";

  const getSearchParam = (value: string | string[] | undefined) =>
    typeof value === "string" ? value : Array.isArray(value) ? value[0] : undefined;

  const talentStatusParam = getSearchParam(searchParams?.talentStatus);
  const talentDomainParam = getSearchParam(searchParams?.talentDomain);
  const talentStatusFilterRaw = talentStatusOptions.includes(
    talentStatusParam as TalentStatus,
  )
    ? (talentStatusParam as TalentStatus)
    : "all";
  const talentDomainFilterRaw = domainOptions.some(
    (option) => option.id === talentDomainParam,
  )
    ? (talentDomainParam as string)
    : "all";
  const talentId = getSearchParam(searchParams?.talent);
  const talentStatusLabelMap: Record<TalentStatus, string> = {
    NEW: t("portal.hr.talent.status.new"),
    REVIEWED: t("portal.hr.talent.status.reviewed"),
    APPROVED: t("portal.hr.talent.status.approved"),
    ARCHIVED: t("portal.hr.talent.status.archived"),
  };
  const talentContactStatusLabelMap: Record<TalentContactStatus, string> = {
    NOT_CONTACTED: t("portal.hr.talent.contactStatus.not_contacted"),
    CONTACTED: t("portal.hr.talent.contactStatus.contacted"),
    RESPONDED: t("portal.hr.talent.contactStatus.responded"),
    ONBOARDED: t("portal.hr.talent.contactStatus.onboarded"),
  };
  const roleLabelMap = new Map(
    roleGroups.flatMap((group) =>
      group.roles.map((role) => [role.id, t(role.labelKey)]),
    ),
  );
  const domainLabelMap = new Map(
    domainOptions.map((option) => [option.id, t(option.labelKey)]),
  );
  const formatTalentList = (items: string[], map: Map<string, string>) =>
    items.length
      ? items.map((item) => map.get(item) ?? item).join(", ")
      : t("partners.summary.none");

  let engagements: EngagementList = [];
  let members: EngagementMemberList = [];
  let timeEntries: TimeEntryList = [];
  let tasks: DeliveryTaskList = [];
  let terms: EngagementTermList = [];
  let users: UserList = [];
  let talentProfiles: TalentProfileList = [];
  let talentDetail: TalentProfileDetail | null = null;
  let talentMissing = false;
  let staffingIntents: StaffingIntentList = [];
  let outreachLogs: Awaited<ReturnType<typeof prisma.outreachLog.findMany>> = [];
  let emailJobs: Awaited<ReturnType<typeof prisma.emailJob.findMany>> = [];
  let matchQueueCount = 0;
  let talentAssignments: Awaited<ReturnType<typeof prisma.talentAssignment.findMany>> = [];

  try {
    const memberScope = isLucienStaff ? scope : { ...scope, clientVisible: true };
    [
      engagements,
      members,
      timeEntries,
      tasks,
      terms,
      users,
      staffingIntents,
      outreachLogs,
      emailJobs,
      matchQueueCount,
      talentAssignments,
    ] = await Promise.all([
      prisma.engagement.findMany({
        where: scope,
        orderBy: { updatedAt: "desc" },
      }),
      prisma.engagementMember.findMany({
        where: memberScope,
        include: { user: true, engagement: true },
      }),
      prisma.timeEntry.findMany({
        where: scope,
        include: { user: true, engagement: true },
        orderBy: { entryDate: "desc" },
        take: 50,
      }),
      isLucienStaff
        ? prisma.deliveryTask.findMany({
            where: scope,
            include: { owner: true, engagement: true },
            orderBy: { updatedAt: "desc" },
          })
        : Promise.resolve([]),
      isLucienStaff
        ? prisma.engagementTerm.findMany({
            where: scope,
            include: { engagement: true },
            orderBy: { updatedAt: "desc" },
          })
        : Promise.resolve([]),
      isLucienStaff
        ? prisma.user.findMany({
            where: scope,
            orderBy: { name: "asc" },
          })
        : Promise.resolve([]),
      prisma.staffingIntent.findMany({
        where: scope,
        include: { inquiry: true, engagement: true, scopeProposal: true },
        orderBy: { updatedAt: "desc" },
      }),
      prisma.outreachLog.findMany({
        where: scope,
        orderBy: { createdAt: "desc" },
        take: 20,
      }),
      prisma.emailJob.findMany({
        where: scope,
        orderBy: { createdAt: "desc" },
        take: 20,
      }),
      prisma.talentMatch.count({
        where: {
          status: { in: ["SUGGESTED", "SHORTLISTED"] },
          staffingIntent: scope,
        },
      }),
      prisma.talentAssignment.findMany({
        where: scope,
      }),
    ]);
  } catch (error) {
    if (isMissingTableError(error)) {
      if (isLucienStaff) {
        return (
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-[0.3em] text-slate">
                HR oversight
              </p>
              <h1 className="text-2xl font-semibold text-ash">
                HR module isn’t initialized
              </h1>
              <p className="text-sm text-muted">
                The database schema is missing HR tables. Run the migration steps
                below to initialize the module.
              </p>
            </div>
            <div className="surface-card space-y-3 rounded-2xl border border-line/80 bg-soft p-6">
              <div className="text-xs uppercase tracking-[0.2em] text-slate">
                Run migration
              </div>
              <pre className="whitespace-pre-wrap rounded-xl border border-line/80 bg-ink px-4 py-3 text-xs text-ash">
                {migrationSteps.join("\n")}
              </pre>
              <Link
                href="/portal"
                className="btn-animate btn-secondary inline-flex rounded-full px-4 py-2 text-[0.65rem] uppercase tracking-[0.2em]"
              >
                Back to portal
              </Link>
            </div>
          </div>
        );
      }

      return (
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-[0.3em] text-slate">
            HR overview
          </p>
          <h1 className="text-2xl font-semibold text-ash">
            HR data unavailable
          </h1>
          <p className="text-sm text-muted">
            HR data will appear once the portal database is initialized.
          </p>
        </div>
      );
    }
    throw error;
  }

  if (isLucienAdmin) {
    const statusFilter = talentStatusOptions.includes(
      talentStatusFilterRaw as TalentStatus,
    )
      ? (talentStatusFilterRaw as TalentStatus)
      : null;
    const domainFilter = domainOptions.some(
      (option) => option.id === talentDomainFilterRaw,
    )
      ? talentDomainFilterRaw
      : null;

    try {
      talentProfiles = await prisma.talentProfile.findMany({
        where: {
          ...(statusFilter ? { status: statusFilter } : {}),
          ...(domainFilter ? { domains: { has: domainFilter } } : {}),
        },
        include: { _count: { select: { signals: true } } },
        orderBy: { updatedAt: "desc" },
      });

      if (talentId) {
        talentDetail = await prisma.talentProfile.findUnique({
          where: { id: talentId },
          include: {
            signals: { orderBy: { createdAt: "desc" } },
            assignments: {
              include: { engagement: true },
              orderBy: { updatedAt: "desc" },
            },
          },
        });
      }
    } catch (error) {
      if (isMissingTableError(error)) {
        talentMissing = true;
      } else {
        throw error;
      }
    }
  }

  const membersByEngagement = members.reduce<Record<string, typeof members>>(
    (acc, item) => {
      acc[item.engagementId] = acc[item.engagementId] ?? [];
      acc[item.engagementId].push(item);
      return acc;
    },
    {},
  );
  const tasksByEngagement = tasks.reduce<Record<string, typeof tasks>>(
    (acc, item) => {
      acc[item.engagementId] = acc[item.engagementId] ?? [];
      acc[item.engagementId].push(item);
      return acc;
    },
    {},
  );
  const entriesByEngagement = timeEntries.reduce<Record<string, typeof timeEntries>>(
    (acc, item) => {
      acc[item.engagementId] = acc[item.engagementId] ?? [];
      acc[item.engagementId].push(item);
      return acc;
    },
    {},
  );
  const termsByEngagement = terms.reduce<Record<string, typeof terms>>(
    (acc, item) => {
      acc[item.engagementId] = acc[item.engagementId] ?? [];
      acc[item.engagementId].push(item);
      return acc;
    },
    {},
  );

  const engagementSummaries = engagements.map((engagement) => {
    const engagementTasks = tasksByEngagement[engagement.id] ?? [];
    const totalTasks = engagementTasks.length;
    const completedTasks = engagementTasks.filter(
      (task) => task.status === "done",
    ).length;
    const engagementEntries = entriesByEngagement[engagement.id] ?? [];
    const hoursLogged = engagementEntries.reduce(
      (total, entry) => total + entry.hours,
      0,
    );
    return {
      engagement,
      totalTasks,
      completedTasks,
      hoursLogged,
      latestEntryDate: engagementEntries[0]?.entryDate ?? null,
    };
  });

  const labelToRoleId = new Map<string, string>();
  roleLabelMap.forEach((label, roleId) => {
    labelToRoleId.set(label.toLowerCase(), roleId);
  });

  const memberRoleIdsByEngagement = members.reduce<Record<string, string[]>>(
    (acc, item) => {
      const roleId = labelToRoleId.get(item.roleTitle.toLowerCase());
      if (!roleId) return acc;
      acc[item.engagementId] = acc[item.engagementId] ?? [];
      acc[item.engagementId].push(roleId);
      return acc;
    },
    {},
  );

  const assignmentRoleIdsByEngagement = talentAssignments.reduce<Record<string, string[]>>(
    (acc, item) => {
      if (!item.engagementId || !item.roleId) return acc;
      acc[item.engagementId] = acc[item.engagementId] ?? [];
      acc[item.engagementId].push(item.roleId);
      return acc;
    },
    {},
  );

  const staffingSummaries = staffingIntents.map((intent) => {
    const roles = Array.isArray(intent.rolesJson) ? intent.rolesJson : [];
    const engagementId = intent.engagementId ?? "";
    const memberRoles = memberRoleIdsByEngagement[engagementId] ?? [];
    const assignmentRoles = assignmentRoleIdsByEngagement[engagementId] ?? [];
    const filledCounts: Record<string, number> = {};
    const missingCounts: Record<string, number> = {};

    for (const role of roles as Array<{ roleId?: string; count?: number }>) {
      if (!role.roleId) continue;
      const required = role.count ?? 0;
      const filled =
        memberRoles.filter((item) => item === role.roleId).length +
        assignmentRoles.filter((item) => item === role.roleId).length;
      filledCounts[role.roleId] = filled;
      missingCounts[role.roleId] = Math.max(required - filled, 0);
    }

    const hasRolesDefined = roles.length > 0;
    const fulfilled =
      roles.length > 0 &&
      Object.values(missingCounts).every((count) => count === 0);

    return {
      intent,
      roles,
      hasRolesDefined,
      fulfilled,
      missingCounts,
    };
  });

  const outreachStats = outreachLogs.reduce(
    (acc, item) => {
      if (item.status === "QUEUED") acc.queued += 1;
      if (item.status === "SENT") acc.sent += 1;
      if (item.status === "FAILED") acc.failed += 1;
      if (item.status === "REPLIED") acc.replied += 1;
      return acc;
    },
    { queued: 0, sent: 0, failed: 0, replied: 0 },
  );

  const totalIntents = staffingSummaries.length;
  const activeIntents = staffingSummaries.filter(
    (item) => item.intent.state === "ACTIVE",
  ).length;
  const draftIntents = staffingSummaries.filter(
    (item) => item.intent.state === "DRAFT",
  ).length;
  const unfilledIntents = staffingSummaries.filter(
    (item) => item.intent.state === "ACTIVE" && !item.fulfilled,
  ).length;

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <p className="text-xs uppercase tracking-[0.3em] text-slate">
          HR oversight
        </p>
        <h1 className="text-2xl font-semibold text-ash">
          People, time, responsibilities, and engagement terms
        </h1>
        <p className="text-sm text-muted">
          Track staffing, time entries, responsibilities, and engagement terms
          with audit-ready clarity.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {[
          { label: "Staffing intents", value: totalIntents, hint: `${draftIntents} drafts` },
          { label: "Active staffing", value: activeIntents, hint: "Engagement coverage" },
          { label: "Unfilled roles", value: unfilledIntents, hint: "Needs attention" },
        ].map((card) => (
          <div
            key={card.label}
            className="rounded-2xl border border-line/80 bg-soft p-5"
          >
            <div className="text-xs uppercase tracking-[0.2em] text-slate">
              {card.label}
            </div>
            <div className="mt-3 text-2xl font-semibold text-ash">
              {card.value}
            </div>
            <p className="mt-2 text-xs text-muted">{card.hint}</p>
          </div>
        ))}
      </div>

      <div className="rounded-2xl border border-line/80 bg-soft p-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-sm uppercase tracking-[0.2em] text-slate">
            Staffing queue health
          </h2>
          <div className="flex flex-wrap gap-2">
            <StatusBadge {...getOutreachBadge(outreachStats)} />
            <StatusBadge
              label={`${matchQueueCount} matches queued`}
              tone="neutral"
              variant="outline"
            />
            <StatusBadge
              label={`${emailJobs.filter((job) => job.status === "QUEUED").length} emails queued`}
              tone="neutral"
              variant="outline"
            />
          </div>
        </div>
        {staffingSummaries.length === 0 ? (
          <p className="mt-4 text-sm text-muted">
            No staffing intents yet.
          </p>
        ) : (
          <div className="mt-4 space-y-3 text-sm text-muted">
            {staffingSummaries.slice(0, 6).map((item) => {
              const subject =
                item.intent.engagement?.title ??
                item.intent.inquiry?.organization ??
                item.intent.scopeProposal?.title ??
                "Staffing intent";
              return (
                <div
                  key={item.intent.id}
                  className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-line/80 bg-ink px-4 py-3"
                >
                  <div>
                    <div className="text-ash">{subject}</div>
                    <div className="text-xs text-slate">
                      {item.intent.state} · {item.roles.length} roles
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <StatusBadge
                      {...getStaffingBadge(item.intent, {
                        hasRolesDefined: item.roles.length > 0,
                        fulfilled: item.fulfilled,
                      })}
                    />
                    {item.intent.engagementId && (
                      <Link
                        href={`/portal/engagements/${item.intent.engagementId}`}
                        className="rounded-full border border-line/80 px-3 py-1 text-[0.6rem] uppercase tracking-[0.2em] text-ash"
                      >
                        Open
                      </Link>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {isLucienStaff && (
        <div className="grid gap-4 md:grid-cols-2">
          <form
            action={createAssignment}
            className="surface-card space-y-4 rounded-2xl border border-line/80 bg-soft p-6"
          >
            <h2 className="text-sm uppercase tracking-[0.2em] text-slate">
              Assign team member
            </h2>
            <div className="grid gap-3 text-sm text-slate">
              <label className="space-y-2">
                Engagement
                <select
                  name="engagementId"
                  required
                  className="w-full rounded-xl border border-line bg-ink px-3 py-2 text-ash"
                >
                  <option value="">Select engagement</option>
                  {engagements.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.title}
                    </option>
                  ))}
                </select>
              </label>
              <label className="space-y-2">
                Team member
                <select
                  name="userId"
                  required
                  className="w-full rounded-xl border border-line bg-ink px-3 py-2 text-ash"
                >
                  <option value="">Select user</option>
                  {users.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.name || item.email}
                    </option>
                  ))}
                </select>
              </label>
              <label className="space-y-2">
                Role / responsibility
                <input
                  name="roleTitle"
                  required
                  className="w-full rounded-xl border border-line bg-ink px-3 py-2 text-ash"
                />
              </label>
              <label className="space-y-2">
                Hours per week (optional)
                <input
                  type="number"
                  name="allocationHours"
                  min={1}
                  className="w-full rounded-xl border border-line bg-ink px-3 py-2 text-ash"
                />
              </label>
              <label className="space-y-2">
                Hourly rate (optional)
                <input
                  type="number"
                  name="rateHourly"
                  min={0}
                  step="0.01"
                  className="w-full rounded-xl border border-line bg-ink px-3 py-2 text-ash"
                />
              </label>
              <label className="space-y-2">
                Start date (optional)
                <input
                  type="date"
                  name="startDate"
                  className="w-full rounded-xl border border-line bg-ink px-3 py-2 text-ash"
                />
              </label>
              <label className="space-y-2">
                End date (optional)
                <input
                  type="date"
                  name="endDate"
                  className="w-full rounded-xl border border-line bg-ink px-3 py-2 text-ash"
                />
              </label>
              <label className="flex items-center gap-2 text-xs text-slate">
                <input
                  type="checkbox"
                  name="clientVisible"
                  defaultChecked
                  className="h-4 w-4 rounded border border-line bg-ink"
                />
                Visible to client
              </label>
            </div>
            <button
              type="submit"
              className="btn-animate btn-secondary rounded-full px-4 py-2 text-[0.65rem] uppercase tracking-[0.2em]"
            >
              Add assignment
            </button>
          </form>

          <form
            action={createTimeEntry}
            className="surface-card space-y-4 rounded-2xl border border-line/80 bg-soft p-6"
          >
            <h2 className="text-sm uppercase tracking-[0.2em] text-slate">
              Log time entry
            </h2>
            <div className="grid gap-3 text-sm text-slate">
              <label className="space-y-2">
                Engagement
                <select
                  name="engagementId"
                  required
                  className="w-full rounded-xl border border-line bg-ink px-3 py-2 text-ash"
                >
                  <option value="">Select engagement</option>
                  {engagements.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.title}
                    </option>
                  ))}
                </select>
              </label>
              <label className="space-y-2">
                Contributor
                <select
                  name="userId"
                  required
                  className="w-full rounded-xl border border-line bg-ink px-3 py-2 text-ash"
                >
                  <option value="">Select user</option>
                  {users.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.name || item.email}
                    </option>
                  ))}
                </select>
              </label>
              <label className="space-y-2">
                Hours
                <input
                  type="number"
                  step="0.25"
                  name="hours"
                  required
                  className="w-full rounded-xl border border-line bg-ink px-3 py-2 text-ash"
                />
              </label>
              <label className="space-y-2">
                Date
                <input
                  type="date"
                  name="entryDate"
                  className="w-full rounded-xl border border-line bg-ink px-3 py-2 text-ash"
                />
              </label>
              <label className="space-y-2">
                Role context (optional)
                <input
                  name="roleTitle"
                  className="w-full rounded-xl border border-line bg-ink px-3 py-2 text-ash"
                />
              </label>
              <label className="flex items-center gap-2 text-xs text-slate">
                <input
                  type="checkbox"
                  name="approved"
                  defaultChecked
                  className="h-4 w-4 rounded border border-line bg-ink"
                />
                Approved
              </label>
            </div>
            <button
              type="submit"
              className="btn-animate btn-secondary rounded-full px-4 py-2 text-[0.65rem] uppercase tracking-[0.2em]"
            >
              Add time entry
            </button>
          </form>

          <form
            action={createTask}
            className="surface-card space-y-4 rounded-2xl border border-line/80 bg-soft p-6"
          >
            <h2 className="text-sm uppercase tracking-[0.2em] text-slate">
              Add work item
            </h2>
            <div className="grid gap-3 text-sm text-slate">
              <label className="space-y-2">
                Engagement
                <select
                  name="engagementId"
                  required
                  className="w-full rounded-xl border border-line bg-ink px-3 py-2 text-ash"
                >
                  <option value="">Select engagement</option>
                  {engagements.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.title}
                    </option>
                  ))}
                </select>
              </label>
              <label className="space-y-2">
                Task title
                <input
                  name="title"
                  required
                  className="w-full rounded-xl border border-line bg-ink px-3 py-2 text-ash"
                />
              </label>
              <label className="space-y-2">
                Owner (optional)
                <select
                  name="ownerId"
                  className="w-full rounded-xl border border-line bg-ink px-3 py-2 text-ash"
                >
                  <option value="">Unassigned</option>
                  {users.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.name || item.email}
                    </option>
                  ))}
                </select>
              </label>
              <label className="space-y-2">
                Status
                <select
                  name="status"
                  className="w-full rounded-xl border border-line bg-ink px-3 py-2 text-ash"
                >
                  <option value="todo">To do</option>
                  <option value="in_progress">In progress</option>
                  <option value="blocked">Blocked</option>
                  <option value="done">Done</option>
                </select>
              </label>
              <label className="space-y-2">
                Due date (optional)
                <input
                  type="date"
                  name="dueDate"
                  className="w-full rounded-xl border border-line bg-ink px-3 py-2 text-ash"
                />
              </label>
            </div>
            <button
              type="submit"
              className="btn-animate btn-secondary rounded-full px-4 py-2 text-[0.65rem] uppercase tracking-[0.2em]"
            >
              Add work item
            </button>
          </form>

          <form
            action={createTerm}
            className="surface-card space-y-4 rounded-2xl border border-line/80 bg-soft p-6"
          >
            <h2 className="text-sm uppercase tracking-[0.2em] text-slate">
              Add contract terms
            </h2>
            <div className="grid gap-3 text-sm text-slate">
              <label className="space-y-2">
                Engagement
                <select
                  name="engagementId"
                  required
                  className="w-full rounded-xl border border-line bg-ink px-3 py-2 text-ash"
                >
                  <option value="">Select engagement</option>
                  {engagements.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.title}
                    </option>
                  ))}
                </select>
              </label>
              <label className="space-y-2">
                Term title
                <input
                  name="title"
                  required
                  className="w-full rounded-xl border border-line bg-ink px-3 py-2 text-ash"
                />
              </label>
              <label className="space-y-2">
                Summary
                <textarea
                  name="summary"
                  required
                  rows={3}
                  className="w-full rounded-xl border border-line bg-ink px-3 py-2 text-ash"
                />
              </label>
              <label className="space-y-2">
                Status
                <select
                  name="status"
                  className="w-full rounded-xl border border-line bg-ink px-3 py-2 text-ash"
                >
                  <option value="draft">Draft</option>
                  <option value="active">Active</option>
                  <option value="superseded">Superseded</option>
                </select>
              </label>
            </div>
            <button
              type="submit"
              className="btn-animate btn-secondary rounded-full px-4 py-2 text-[0.65rem] uppercase tracking-[0.2em]"
            >
              Add contract term
            </button>
          </form>
        </div>
      )}

      {engagementSummaries.length === 0 ? (
        <div className="surface-card rounded-2xl border border-line/80 bg-soft p-6 text-sm text-muted">
          No HR data yet. Engagement HR records will appear here as they are
          created.
        </div>
      ) : (
        <div className="space-y-4">
          {engagementSummaries.map((summary) => {
            const engagement = summary.engagement;
            const engagementMembers = membersByEngagement[engagement.id] ?? [];
            const engagementTasks = tasksByEngagement[engagement.id] ?? [];
            const engagementEntries = entriesByEngagement[engagement.id] ?? [];
            const engagementTerms = termsByEngagement[engagement.id] ?? [];

            return (
              <div
                key={engagement.id}
                className="surface-card rounded-2xl border border-line/80 bg-soft p-6"
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <div className="text-lg font-semibold text-ash">
                      {engagement.title}
                    </div>
                    <div className="text-xs text-slate">
                      {engagement.serviceSlug ?? "General engagement"}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.2em] text-slate">
                    {isLucienStaff && (
                      <>
                        <span className="rounded-full border border-line px-3 py-1">
                          {engagement.stage.replace("_", " ")}
                        </span>
                        <span className="rounded-full border border-line px-3 py-1">
                          {engagement.status.replace("_", " ")}
                        </span>
                      </>
                    )}
                    {isLucienStaff && (
                      <span className="rounded-full border border-line px-3 py-1">
                        {summary.completedTasks}/{summary.totalTasks || 0} tasks
                      </span>
                    )}
                    <span className="rounded-full border border-line px-3 py-1">
                      {summary.hoursLogged.toFixed(1)}h logged
                    </span>
                  </div>
                </div>

                <div className="mt-6 grid gap-6 md:grid-cols-2">
                  <div className="space-y-3 text-sm text-muted">
                    <h3 className="text-xs uppercase tracking-[0.2em] text-slate">
                      People assigned
                    </h3>
                    {engagementMembers.length === 0 ? (
                      <p>No assignments recorded.</p>
                    ) : (
                      <ul className="space-y-2">
                        {engagementMembers.map((member) => (
                          <li key={member.id}>
                            <span className="text-ash">
                              {member.user.name || member.user.email}
                            </span>{" "}
                            — {member.roleTitle}
                            {member.allocationHours
                              ? ` (${member.allocationHours}h/week)`
                              : ""}
                            {isLucienStaff && member.rateHourly
                              ? ` · €${member.rateHourly}/hr`
                              : ""}
                            {isLucienStaff && (member.startDate || member.endDate)
                              ? ` · ${
                                  member.startDate
                                    ? formatDateShort(member.startDate)
                                    : "Start TBD"
                                } → ${
                                  member.endDate
                                    ? formatDateShort(member.endDate)
                                    : "Ongoing"
                                }`
                              : ""}
                            {isLucienStaff && !member.clientVisible
                              ? " · Internal only"
                              : ""}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                  <div className="space-y-3 text-sm text-muted">
                    <h3 className="text-xs uppercase tracking-[0.2em] text-slate">
                      Time tracking
                    </h3>
                    {isLucienStaff ? (
                      engagementEntries.length === 0 ? (
                        <p>No time entries yet.</p>
                      ) : (
                        <ul className="space-y-2">
                          {engagementEntries.slice(0, 4).map((entry) => (
                            <li key={entry.id}>
                              <span className="text-ash">
                                {entry.user.name || entry.user.email}
                              </span>{" "}
                              — {entry.hours}h on{" "}
                              {formatDateShort(entry.entryDate)}
                              {entry.roleTitle ? ` (${entry.roleTitle})` : ""}
                              {` · ${entry.approvedAt ? "Approved" : "Pending"}`}
                            </li>
                          ))}
                        </ul>
                      )
                    ) : engagementEntries.length === 0 ? (
                      <p>No time entries yet.</p>
                    ) : (
                      <div className="space-y-1">
                        <div>
                          Total hours: {summary.hoursLogged.toFixed(1)}h
                        </div>
                        <div>
                          Latest entry:{" "}
                          {summary.latestEntryDate
                            ? formatDateShort(summary.latestEntryDate)
                            : "—"}
                        </div>
                      </div>
                    )}
                  </div>
                  {isLucienStaff && (
                    <div className="space-y-3 text-sm text-muted">
                      <h3 className="text-xs uppercase tracking-[0.2em] text-slate">
                        Work items
                      </h3>
                      {engagementTasks.length === 0 ? (
                        <p>No work items recorded.</p>
                      ) : (
                        <ul className="space-y-2">
                          {engagementTasks.slice(0, 4).map((task) => (
                            <li key={task.id}>
                              <span className="text-ash">{task.title}</span>{" "}
                              — {task.status.replace("_", " ")}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )}
                  {isLucienStaff && (
                    <div className="space-y-3 text-sm text-muted">
                      <h3 className="text-xs uppercase tracking-[0.2em] text-slate">
                        Contract terms
                      </h3>
                      {engagementTerms.length === 0 ? (
                        <p>No contract terms recorded.</p>
                      ) : (
                        <ul className="space-y-2">
                          {engagementTerms.slice(0, 3).map((term) => (
                            <li key={term.id}>
                              <span className="text-ash">{term.title}</span>{" "}
                              — {term.status}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {isLucienAdmin && (
        <section className="space-y-6 border-t border-line/70 pt-10">
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.3em] text-slate">
              {t("portal.hr.talent.title")}
            </p>
            <p className="text-sm text-muted">{t("portal.hr.talent.subtitle")}</p>
          </div>

          {talentMissing ? (
            <div className="surface-card space-y-3 rounded-2xl border border-line/80 bg-soft p-6">
              <div className="text-xs uppercase tracking-[0.2em] text-slate">
                {t("portal.hr.talent.missing.title")}
              </div>
              <p className="text-sm text-muted">
                {t("portal.hr.talent.missing.body")}
              </p>
              <pre className="whitespace-pre-wrap rounded-xl border border-line/80 bg-ink px-4 py-3 text-xs text-ash">
                {migrationSteps.join("\n")}
              </pre>
              <Link
                href="/portal"
                className="btn-animate btn-secondary inline-flex rounded-full px-4 py-2 text-[0.65rem] uppercase tracking-[0.2em]"
              >
                {t("portal.hr.talent.missing.cta")}
              </Link>
            </div>
          ) : (
            <div className="grid gap-4 md:grid-cols-[1.2fr_0.8fr]">
              <div className="space-y-4">
                <form
                  method="get"
                  className="surface-card grid gap-3 rounded-2xl border border-line/80 bg-soft p-5 text-sm text-slate md:grid-cols-[1fr_1fr_auto] md:items-end"
                >
                  <label className="space-y-2">
                    {t("portal.hr.talent.filters.status")}
                    <select
                      name="talentStatus"
                      defaultValue={talentStatusFilterRaw}
                      className="w-full rounded-xl border border-line bg-ink px-3 py-2 text-ash"
                    >
                      <option value="all">{t("portal.hr.talent.filters.all")}</option>
                      {talentStatusOptions.map((status) => (
                        <option key={status} value={status}>
                          {talentStatusLabelMap[status]}
                        </option>
                      ))}
                    </select>
                  </label>
                  <label className="space-y-2">
                    {t("portal.hr.talent.filters.domain")}
                    <select
                      name="talentDomain"
                      defaultValue={talentDomainFilterRaw}
                      className="w-full rounded-xl border border-line bg-ink px-3 py-2 text-ash"
                    >
                      <option value="all">{t("portal.hr.talent.filters.all")}</option>
                      {domainOptions.map((option) => (
                        <option key={option.id} value={option.id}>
                          {t(option.labelKey)}
                        </option>
                      ))}
                    </select>
                  </label>
                  <button
                    type="submit"
                    className="btn-animate btn-secondary rounded-full px-4 py-2 text-[0.65rem] uppercase tracking-[0.2em]"
                  >
                    {t("portal.hr.talent.filters.apply")}
                  </button>
                </form>

                {talentProfiles.length === 0 ? (
                  <div className="surface-card rounded-2xl border border-line/80 bg-soft p-6 text-sm text-muted">
                    {t("portal.hr.talent.empty")}
                  </div>
                ) : (
                  <div className="space-y-3">
                    {talentProfiles.map((profile) => {
                      const baseParams = new URLSearchParams();
                      if (talentStatusFilterRaw !== "all") {
                        baseParams.set("talentStatus", talentStatusFilterRaw);
                      }
                      if (talentDomainFilterRaw !== "all") {
                        baseParams.set("talentDomain", talentDomainFilterRaw);
                      }
                      baseParams.set("talent", profile.id);

                      return (
                        <Link
                          key={profile.id}
                          href={`?${baseParams.toString()}`}
                          className="card-animate block rounded-2xl border border-line/80 bg-soft p-4"
                        >
                          <div className="flex flex-wrap items-start justify-between gap-3">
                            <div>
                              <div className="text-sm font-semibold text-ash">
                                {profile.fullName}
                              </div>
                              <div className="text-xs text-slate">{profile.email}</div>
                              <div className="mt-1 text-xs text-muted">
                                {roleLabelMap.get(profile.primaryRole) ?? profile.primaryRole}
                              </div>
                            </div>
                            <div className="text-xs uppercase tracking-[0.2em] text-slate">
                              {talentStatusLabelMap[profile.status]}
                            </div>
                          </div>
                          <div className="mt-3 flex flex-wrap gap-3 text-xs text-slate">
                            <span>
                              {t("portal.hr.talent.list.signals")}:{" "}
                              {profile._count.signals}
                            </span>
                            <span>
                              {t("portal.hr.talent.list.last")}:{" "}
                              {formatDateShort(profile.updatedAt)}
                            </span>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>

              <div className="space-y-4">
                {talentDetail ? (
                  <>
                    <div className="surface-card rounded-2xl border border-line/80 bg-soft p-5 text-sm text-muted">
                      <h3 className="text-xs uppercase tracking-[0.2em] text-slate">
                        {t("portal.hr.talent.detail.title")}
                      </h3>
                      <dl className="mt-3 grid gap-3 md:grid-cols-2">
                        <div>
                          <dt className="text-xs uppercase tracking-[0.2em] text-slate">
                            {t("partners.summary.fullName")}
                          </dt>
                          <dd className="text-ash">{talentDetail.fullName}</dd>
                        </div>
                        <div>
                          <dt className="text-xs uppercase tracking-[0.2em] text-slate">
                            {t("partners.summary.email")}
                          </dt>
                          <dd className="text-ash">{talentDetail.email}</dd>
                        </div>
                        <div>
                          <dt className="text-xs uppercase tracking-[0.2em] text-slate">
                            {t("partners.summary.primaryRole")}
                          </dt>
                          <dd className="text-ash">
                            {roleLabelMap.get(talentDetail.primaryRole) ??
                              talentDetail.primaryRole}
                          </dd>
                        </div>
                        <div>
                          <dt className="text-xs uppercase tracking-[0.2em] text-slate">
                            {t("partners.summary.secondaryRoles")}
                          </dt>
                          <dd className="text-ash">
                            {formatTalentList(talentDetail.secondaryRoles, roleLabelMap)}
                          </dd>
                        </div>
                        <div>
                          <dt className="text-xs uppercase tracking-[0.2em] text-slate">
                            {t("partners.summary.domains")}
                          </dt>
                          <dd className="text-ash">
                            {formatTalentList(talentDetail.domains, domainLabelMap)}
                          </dd>
                        </div>
                        <div>
                          <dt className="text-xs uppercase tracking-[0.2em] text-slate">
                            {t("partners.summary.availability")}
                          </dt>
                          <dd className="text-ash">{talentDetail.availabilityWindow}</dd>
                        </div>
                      </dl>
                    </div>

                    <form
                      action={updateTalentProfile}
                      className="surface-card space-y-3 rounded-2xl border border-line/80 bg-soft p-5 text-sm text-slate"
                    >
                      <input type="hidden" name="profileId" value={talentDetail.id} />
                      <label className="space-y-2">
                        {t("portal.hr.talent.detail.status")}
                        <select
                          name="status"
                          defaultValue={talentDetail.status}
                          className="w-full rounded-xl border border-line bg-ink px-3 py-2 text-ash"
                        >
                          {talentStatusOptions.map((status) => (
                            <option key={status} value={status}>
                              {talentStatusLabelMap[status]}
                            </option>
                          ))}
                        </select>
                      </label>
                      <label className="space-y-2">
                        {t("portal.hr.talent.detail.contactStatus")}
                        <select
                          name="contactStatus"
                          defaultValue={talentDetail.contactStatus}
                          className="w-full rounded-xl border border-line bg-ink px-3 py-2 text-ash"
                        >
                          {talentContactStatusOptions.map((status) => (
                            <option key={status} value={status}>
                              {talentContactStatusLabelMap[status]}
                            </option>
                          ))}
                        </select>
                      </label>
                      <label className="space-y-2">
                        {t("portal.hr.talent.detail.notes")}
                        <textarea
                          name="notes"
                          rows={4}
                          defaultValue={talentDetail.notes ?? ""}
                          className="w-full rounded-xl border border-line bg-ink px-3 py-2 text-ash"
                        />
                      </label>
                      <button
                        type="submit"
                        className="btn-animate btn-secondary rounded-full px-4 py-2 text-[0.65rem] uppercase tracking-[0.2em]"
                      >
                        {t("portal.hr.talent.detail.update")}
                      </button>
                    </form>

                    <div className="surface-card space-y-3 rounded-2xl border border-line/80 bg-soft p-5 text-sm text-muted">
                      <h3 className="text-xs uppercase tracking-[0.2em] text-slate">
                        {t("portal.hr.talent.detail.signals")}
                      </h3>
                      {talentDetail.signals.length === 0 ? (
                        <p>{t("portal.hr.talent.detail.noSignals")}</p>
                      ) : (
                        <div className="space-y-3">
                          {talentDetail.signals.map((signal) => (
                            <div
                              key={signal.id}
                              className="rounded-xl border border-line/80 bg-ink px-4 py-3"
                            >
                              <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate">
                                <span>{formatDateShort(signal.createdAt)}</span>
                                <span>{signal.source}</span>
                              </div>
                              <pre className="mt-2 whitespace-pre-wrap text-[0.65rem] text-ash">
                                {JSON.stringify(signal.payloadJson, null, 2)}
                              </pre>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="surface-card space-y-3 rounded-2xl border border-line/80 bg-soft p-5 text-sm text-muted">
                      <h3 className="text-xs uppercase tracking-[0.2em] text-slate">
                        {t("portal.hr.talent.detail.assignments")}
                      </h3>
                      {talentDetail.assignments.length === 0 ? (
                        <p>{t("portal.hr.talent.detail.noAssignments")}</p>
                      ) : (
                        <ul className="space-y-2">
                          {talentDetail.assignments.map((assignment) => (
                            <li key={assignment.id}>
                              <span className="text-ash">{assignment.roleLabel}</span>
                              {assignment.engagement?.title
                                ? ` · ${assignment.engagement.title}`
                                : ""}
                              {` · ${assignment.allocationPct}%`}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </>
                ) : (
                  <div className="surface-card rounded-2xl border border-line/80 bg-soft p-6 text-sm text-muted">
                    {t("portal.hr.talent.detail.empty")}
                  </div>
                )}
              </div>
            </div>
          )}
        </section>
      )}
    </div>
  );
}
