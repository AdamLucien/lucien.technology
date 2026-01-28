import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { formatBytes, formatDateShort } from "@/lib/format";
import { requireLucienStaff, requirePortalSession } from "@/lib/portal";
import { logAuditEvent } from "@/lib/audit";
import { createNotifications } from "@/lib/notifications";
import { DocumentUploader } from "@/components/portal/DocumentUploader";
import { EngagementEditPanel } from "@/components/portal/EngagementEditPanel";
import { ArchiveDocumentButton } from "@/components/portal/ArchiveDocumentButton";
import { StatusBadge } from "@/components/portal/StatusBadge";
import { IconStatic } from "@/components/icons/IconStatic";
import {
  getAccessBadge,
  getOutreachBadge,
  getSkillsGapBadge,
  getStaffingBadge,
} from "@/lib/status-badges";
import { getStaffingSummaryForEngagement } from "@/lib/talent/staffing";

const stageOrder = [
  "triage",
  "scope_pack",
  "sow",
  "delivery",
  "handover",
  "ongoing",
  "closed",
];

const stageLabels: Record<string, string> = {
  triage: "Triage",
  scope_pack: "Scope pack",
  sow: "SOW",
  delivery: "Delivery",
  handover: "Handover",
  ongoing: "Ongoing",
  closed: "Closed",
};

const statusLabels: Record<string, string> = {
  on_track: "On track",
  at_risk: "At risk",
  blocked: "Blocked",
  completed: "Completed",
};

const milestoneStatusLabels: Record<string, string> = {
  planned: "Planned",
  in_progress: "In progress",
  complete: "Complete",
};

const deliverableStatusLabels: Record<string, string> = {
  draft: "Draft",
  review: "In review",
  approved: "Approved",
};

const changeRequestStatusLabels: Record<string, string> = {
  proposed: "Proposed",
  needs_info: "Needs info",
  approved: "Approved",
  rejected: "Rejected",
  implemented: "Implemented",
  cancelled: "Cancelled",
};

const dateOrNull = (value?: string | null) => {
  if (!value) return null;
  const parsed = new Date(value);
  return Number.isNaN(parsed.getTime()) ? null : parsed;
};

export default async function EngagementDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const session = await requirePortalSession();
  const isStaff =
    session.user.role === "lucien_admin" ||
    session.user.role === "lucien_operator";

  const engagement = await prisma.engagement.findFirst({
    where: isStaff
      ? { id }
      : {
          id,
          orgId: session.user.orgId,
        },
    include: {
      inquiry: true,
      owner: true,
      documents: { where: { archivedAt: null }, orderBy: { createdAt: "desc" } },
      milestones: { orderBy: { order: "asc" } },
      deliverables: {
        orderBy: { createdAt: "asc" },
        include: { document: true },
      },
      changeRequests: { orderBy: { createdAt: "desc" }, include: { createdBy: true } },
      invoices: { orderBy: { createdAt: "desc" } },
      scopeProposals: { select: { status: true } },
    },
  });

  if (!engagement) {
    notFound();
  }

  const engagementId = engagement.id;
  const engagementOrgId = engagement.orgId;
  const engagementTitle = engagement.title;
  const engagementLocked = Boolean(
    (engagement.procurementRef ||
      engagement.purchaseOrderRef ||
      engagement.costCenter) &&
      (engagement.invoices.some((invoice) => invoice.issueDate || invoice.paidAt) ||
        engagement.scopeProposals.some((scope) => scope.status === "approved")),
  );
  const exportEnabled =
    session.user.role === "lucien_admin" &&
    process.env.ENABLE_DOSSIER_EXPORT === "true";

  const staffUsers = isStaff
    ? await prisma.user.findMany({
        where: { role: { in: ["lucien_admin", "lucien_operator"] } },
        orderBy: { email: "asc" },
      })
    : [];

  const editEvents = await prisma.editEvent.findMany({
    where: {
      orgId: engagementOrgId,
      entityType: "engagement",
      entityId: engagementId,
    },
    orderBy: { createdAt: "desc" },
    take: 10,
    include: { createdBy: true },
  });

  const staffingSummaries = await getStaffingSummaryForEngagement(engagementId);
  const staffingIntent = await prisma.staffingIntent.findFirst({
    where: { engagementId },
    orderBy: { createdAt: "desc" },
  });
  const outreachLogs = staffingIntent
    ? await prisma.outreachLog.findMany({
        where: { staffingIntentId: staffingIntent.id },
        select: { status: true },
      })
    : [];
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

  const summary = staffingSummaries[0];
  const hasRolesDefined = Boolean(summary?.roles?.length);
  const fulfilled =
    summary?.missingCounts
      ? Object.values(summary.missingCounts).every((count) => count === 0)
      : false;
  const missingMustSkills =
    (staffingIntent?.requirementsJson as { skills?: Array<{ skillId: string; must: boolean }> })
      ?.skills?.filter((skill) => skill.must)
      .map((skill) => skill.skillId) ?? [];
  const staffingBadge = getStaffingBadge(
    staffingIntent ? { state: staffingIntent.state } : null,
    {
      hasRolesDefined,
      fulfilled,
    },
  );
  const skillsBadge = getSkillsGapBadge(missingMustSkills);
  const outreachBadge = getOutreachBadge(outreachStats);

  async function updateEngagement(formData: FormData) {
    "use server";

    const session = await requirePortalSession();
    requireLucienStaff(session.user.role);

    const schema = z.object({
      stage: z.enum(["triage", "scope_pack", "sow", "delivery", "handover", "ongoing", "closed"]),
      status: z.enum(["on_track", "at_risk", "blocked", "completed"]),
      startDate: z.string().optional().nullable(),
      targetDate: z.string().optional().nullable(),
      ownerId: z.string().optional().nullable(),
      procurementRef: z.string().optional().nullable(),
      purchaseOrderRef: z.string().optional().nullable(),
      costCenter: z.string().optional().nullable(),
    });

    const parsed = schema.parse({
      stage: formData.get("stage"),
      status: formData.get("status"),
      startDate: formData.get("startDate"),
      targetDate: formData.get("targetDate"),
      ownerId: formData.get("ownerId"),
      procurementRef: formData.get("procurementRef"),
      purchaseOrderRef: formData.get("purchaseOrderRef"),
      costCenter: formData.get("costCenter"),
    });

    await prisma.engagement.update({
      where: { id: engagementId },
      data: {
        stage: parsed.stage,
        status: parsed.status,
        startDate: dateOrNull(parsed.startDate) ?? null,
        targetDate: dateOrNull(parsed.targetDate) ?? null,
        ownerId: parsed.ownerId || null,
        procurementRef: parsed.procurementRef || null,
        purchaseOrderRef: parsed.purchaseOrderRef || null,
        costCenter: parsed.costCenter || null,
      },
    });

    await logAuditEvent({
      orgId: engagementOrgId,
      userId: session.user.id,
      action: "engagement_updated",
      resourceType: "engagement",
      resourceId: engagementId,
    });

    redirect(`/portal/engagements/${engagementId}`);
  }

  async function createMilestone(formData: FormData) {
    "use server";

    const session = await requirePortalSession();
    requireLucienStaff(session.user.role);

    const schema = z.object({
      title: z.string().min(2),
      dueDate: z.string().optional().nullable(),
    });

    const parsed = schema.safeParse({
      title: formData.get("title"),
      dueDate: formData.get("dueDate"),
    });

    if (!parsed.success) {
      return;
    }

    const order = await prisma.milestone.count({
      where: { engagementId },
    });

    await prisma.milestone.create({
      data: {
        orgId: engagementOrgId,
        engagementId,
        title: parsed.data.title,
        dueDate: dateOrNull(parsed.data.dueDate),
        order,
      },
    });

    redirect(`/portal/engagements/${engagementId}`);
  }

  async function updateMilestone(formData: FormData) {
    "use server";

    const session = await requirePortalSession();
    requireLucienStaff(session.user.role);

    const schema = z.object({
      milestoneId: z.string().min(1),
      status: z.enum(["planned", "in_progress", "complete"]),
      dueDate: z.string().optional().nullable(),
    });

    const parsed = schema.parse({
      milestoneId: formData.get("milestoneId"),
      status: formData.get("status"),
      dueDate: formData.get("dueDate"),
    });

    const milestone = await prisma.milestone.findUnique({
      where: { id: parsed.milestoneId },
    });

    if (!milestone || milestone.engagementId !== engagementId) {
      notFound();
    }

    await prisma.milestone.update({
      where: { id: parsed.milestoneId },
      data: {
        status: parsed.status,
        dueDate: dateOrNull(parsed.dueDate),
      },
    });

    redirect(`/portal/engagements/${engagementId}`);
  }

  async function createDeliverable(formData: FormData) {
    "use server";

    const session = await requirePortalSession();
    requireLucienStaff(session.user.role);

    const schema = z.object({
      title: z.string().min(2),
    });

    const parsed = schema.safeParse({
      title: formData.get("title"),
    });

    if (!parsed.success) {
      return;
    }

    await prisma.deliverable.create({
      data: {
        orgId: engagementOrgId,
        engagementId,
        title: parsed.data.title,
      },
    });

    redirect(`/portal/engagements/${engagementId}`);
  }

  async function updateDeliverable(formData: FormData) {
    "use server";

    const session = await requirePortalSession();
    requireLucienStaff(session.user.role);

    const schema = z.object({
      deliverableId: z.string().min(1),
      status: z.enum(["draft", "review", "approved"]),
    });

    const parsed = schema.parse({
      deliverableId: formData.get("deliverableId"),
      status: formData.get("status"),
    });

    const deliverable = await prisma.deliverable.findUnique({
      where: { id: parsed.deliverableId },
    });

    if (!deliverable || deliverable.engagementId !== engagementId) {
      notFound();
    }

    await prisma.deliverable.update({
      where: { id: parsed.deliverableId },
      data: {
        status: parsed.status,
      },
    });

    redirect(`/portal/engagements/${engagementId}`);
  }

  async function approveDeliverable(formData: FormData) {
    "use server";

    const session = await requirePortalSession();
    const schema = z.object({
      deliverableId: z.string().min(1),
      approvalNote: z.string().max(240).optional().nullable(),
    });

    const parsed = schema.parse({
      deliverableId: formData.get("deliverableId"),
      approvalNote: formData.get("approvalNote"),
    });

    const deliverable = await prisma.deliverable.findUnique({
      where: { id: parsed.deliverableId },
    });

    if (!deliverable || deliverable.orgId !== session.user.orgId) {
      notFound();
    }

    await prisma.deliverable.update({
      where: { id: parsed.deliverableId },
      data: {
        status: "approved",
        approvedAt: new Date(),
        approvedById: session.user.id,
        approvalNote: parsed.approvalNote || null,
      },
    });

    await logAuditEvent({
      orgId: deliverable.orgId,
      userId: session.user.id,
      action: "deliverable_approved",
      resourceType: "deliverable",
      resourceId: deliverable.id,
    });

    await createNotifications({
      orgId: deliverable.orgId,
      recipientRoles: ["lucien_admin", "lucien_operator"],
      type: "deliverable_approved",
      title: "Deliverable approved",
      body: `${deliverable.title} was approved by the client.`,
      entityType: "deliverable",
      entityId: deliverable.id,
    });

    redirect(`/portal/engagements/${engagementId}`);
  }

  async function createChangeRequest(formData: FormData) {
    "use server";

    const session = await requirePortalSession();
    const isStaff =
      session.user.role === "lucien_admin" ||
      session.user.role === "lucien_operator";

    const schema = z.object({
      title: z.string().min(3),
      description: z.string().min(10),
      impact: z.enum(["scope", "schedule", "cost", "risk"]),
      severity: z.enum(["low", "med", "high"]),
    });

    const parsed = schema.safeParse({
      title: formData.get("title"),
      description: formData.get("description"),
      impact: formData.get("impact"),
      severity: formData.get("severity"),
    });

    if (!parsed.success) {
      return;
    }

    const changeRequest = await prisma.changeRequest.create({
      data: {
        orgId: engagementOrgId,
        engagementId,
        createdByUserId: session.user.id,
        title: parsed.data.title,
        description: parsed.data.description,
        impact: parsed.data.impact,
        severity: parsed.data.severity,
        status: "proposed",
        requestedAt: new Date(),
      },
    });

    await logAuditEvent({
      orgId: engagementOrgId,
      userId: session.user.id,
      action: "change_request_created",
      resourceType: "change_request",
      resourceId: changeRequest.id,
    });

    if (isStaff) {
      await createNotifications({
        orgId: engagementOrgId,
        recipientRoles: ["org_admin", "org_user"],
        recipientOrgId: engagementOrgId,
        type: "change_request_created",
        title: "Change request created",
        body: `Change request submitted: ${changeRequest.title}`,
        entityType: "change_request",
        entityId: changeRequest.id,
      });
    } else {
      await createNotifications({
        orgId: engagementOrgId,
        recipientRoles: ["lucien_admin", "lucien_operator"],
        type: "change_request_created",
        title: "New change request",
        body: `Client submitted: ${changeRequest.title}`,
        entityType: "change_request",
        entityId: changeRequest.id,
      });
    }

    redirect(`/portal/engagements/${engagementId}`);
  }

  async function decideChangeRequest(formData: FormData) {
    "use server";

    const session = await requirePortalSession();
    requireLucienStaff(session.user.role);

    const schema = z.object({
      changeRequestId: z.string().min(1),
      status: z.enum(["approved", "rejected", "needs_info"]),
      decisionNote: z.string().min(3),
      costDeltaEUR: z.string().optional().nullable(),
      scheduleDeltaDays: z.string().optional().nullable(),
    });

    const parsed = schema.safeParse({
      changeRequestId: formData.get("changeRequestId"),
      status: formData.get("status"),
      decisionNote: formData.get("decisionNote"),
      costDeltaEUR: formData.get("costDeltaEUR"),
      scheduleDeltaDays: formData.get("scheduleDeltaDays"),
    });

    if (!parsed.success) {
      return;
    }

    const costDeltaEUR = parsed.data.costDeltaEUR
      ? Number.parseInt(parsed.data.costDeltaEUR, 10)
      : null;
    const scheduleDeltaDays = parsed.data.scheduleDeltaDays
      ? Number.parseInt(parsed.data.scheduleDeltaDays, 10)
      : null;

    await prisma.changeRequest.update({
      where: { id: parsed.data.changeRequestId },
      data: {
        status: parsed.data.status,
        decisionNote: parsed.data.decisionNote,
        costDeltaEUR,
        scheduleDeltaDays,
        decidedAt: new Date(),
      },
    });

    await logAuditEvent({
      orgId: engagementOrgId,
      userId: session.user.id,
      action: "change_request_decided",
      resourceType: "change_request",
      resourceId: parsed.data.changeRequestId,
      meta: { status: parsed.data.status },
    });

    await createNotifications({
      orgId: engagementOrgId,
      recipientRoles: ["org_admin", "org_user"],
      recipientOrgId: engagementOrgId,
      type: "change_request_decision",
      title: `Change request ${parsed.data.status}`,
      body: `Decision recorded for ${engagementTitle}.`,
      entityType: "change_request",
      entityId: parsed.data.changeRequestId,
    });

    redirect(`/portal/engagements/${engagementId}`);
  }

  async function implementChangeRequest(formData: FormData) {
    "use server";

    const session = await requirePortalSession();
    requireLucienStaff(session.user.role);

    const schema = z.object({
      changeRequestId: z.string().min(1),
    });

    const parsed = schema.parse({
      changeRequestId: formData.get("changeRequestId"),
    });

    await prisma.changeRequest.update({
      where: { id: parsed.changeRequestId },
      data: {
        status: "implemented",
        implementedAt: new Date(),
      },
    });

    await logAuditEvent({
      orgId: engagementOrgId,
      userId: session.user.id,
      action: "change_request_implemented",
      resourceType: "change_request",
      resourceId: parsed.changeRequestId,
    });

    await createNotifications({
      orgId: engagementOrgId,
      recipientRoles: ["org_admin", "org_user"],
      recipientOrgId: engagementOrgId,
      type: "change_request_implemented",
      title: "Change request implemented",
      body: `Implemented for ${engagementTitle}.`,
      entityType: "change_request",
      entityId: parsed.changeRequestId,
    });

    redirect(`/portal/engagements/${engagementId}`);
  }

  async function respondToInfoRequest(formData: FormData) {
    "use server";

    const session = await requirePortalSession();
    if (!session.user.role?.startsWith("org_")) {
      return;
    }

    const schema = z.object({
      changeRequestId: z.string().min(1),
      description: z.string().min(10),
    });

    const parsed = schema.safeParse({
      changeRequestId: formData.get("changeRequestId"),
      description: formData.get("description"),
    });

    if (!parsed.success) {
      return;
    }

    await prisma.changeRequest.update({
      where: { id: parsed.data.changeRequestId },
      data: {
        description: parsed.data.description,
        status: "proposed",
      },
    });

    await logAuditEvent({
      orgId: engagementOrgId,
      userId: session.user.id,
      action: "change_request_updated",
      resourceType: "change_request",
      resourceId: parsed.data.changeRequestId,
    });

    await createNotifications({
      orgId: engagementOrgId,
      recipientRoles: ["lucien_admin", "lucien_operator"],
      type: "change_request_updated",
      title: "Change request updated",
      body: `Client updated for ${engagementTitle}.`,
      entityType: "change_request",
      entityId: parsed.data.changeRequestId,
    });

    redirect(`/portal/engagements/${engagementId}`);
  }
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <p className="text-xs uppercase tracking-[0.3em] text-slate">
          Engagement workspace
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <h1 className="text-2xl font-semibold text-ash">{engagement.title}</h1>
          {engagementLocked && (
            <StatusBadge {...getAccessBadge("Controlled changes only")} />
          )}
          {exportEnabled && (
            <a
              href={`/api/portal/export/engagement/${engagementId}`}
              className="rounded-full border border-line/80 px-3 py-1 text-[0.6rem] uppercase tracking-[0.2em] text-slate hover:border-slate hover:text-ash"
            >
              Export dossier
            </a>
          )}
        </div>
        <p className="text-sm text-muted">
          Service: {engagement.serviceSlug ?? "Custom engagement"}
        </p>
        <div className="mt-3 flex flex-wrap gap-2 text-xs uppercase tracking-[0.2em]">
          <StatusBadge {...staffingBadge} />
          <StatusBadge {...skillsBadge} />
          <StatusBadge {...outreachBadge} />
        </div>
      </div>

      <section className="rounded-2xl border border-line/80 bg-soft p-6">
        <h2 className="text-sm uppercase tracking-[0.2em] text-slate">
          Overview
        </h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <div>
            <div className="text-xs text-slate">Stage</div>
            <div className="text-lg font-semibold text-ash">
              {stageLabels[engagement.stage] ?? engagement.stage}
            </div>
          </div>
          <div>
            <div className="text-xs text-slate">Status</div>
            <div className="text-lg font-semibold text-ash">
              {statusLabels[engagement.status] ?? engagement.status}
            </div>
          </div>
          <div>
            <div className="text-xs text-slate">Next step</div>
            <div className="text-sm text-ash">
              {engagement.stage === "triage"
                ? "Scope pack is being prepared."
                : engagement.stage === "scope_pack"
                  ? "Scope pack review and alignment."
                  : engagement.stage === "sow"
                    ? "SOW confirmation and procurement alignment."
                    : engagement.stage === "delivery"
                      ? "Delivery milestones in progress."
                      : engagement.stage === "handover"
                        ? "Handover and readiness review."
                        : engagement.stage === "ongoing"
                          ? "Ongoing assurance and oversight."
                          : "Engagement complete."}
            </div>
          </div>
        </div>
        <div className="mt-6 flex flex-wrap gap-2">
          {stageOrder.map((stage) => (
            <span
              key={stage}
              className={`rounded-full border px-3 py-1 text-xs uppercase tracking-[0.2em] ${
                stage === engagement.stage
                  ? "border-slate text-ash"
                  : "border-line text-slate"
              }`}
            >
              {stageLabels[stage]}
            </span>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-line/80 bg-soft p-6 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h2 className="text-sm uppercase tracking-[0.2em] text-slate">
            Staffing
          </h2>
          <div className="flex flex-wrap gap-2">
            <StatusBadge {...staffingBadge} />
            <StatusBadge {...outreachBadge} />
          </div>
        </div>
        {summary ? (
          <div className="grid gap-4 md:grid-cols-2 text-sm text-muted">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-slate">Roles</div>
              <div className="mt-2 space-y-1">
                {summary.roles.map((role) => (
                  <div key={role.roleId}>
                    {role.roleId} · {summary.filledCounts[role.roleId] ?? 0}/
                    {role.count}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-slate">Outreach</div>
              <div className="mt-2 text-sm text-ash">
                {outreachStats.sent} sent · {outreachStats.queued} queued ·{" "}
                {outreachStats.replied} replied
              </div>
            </div>
          </div>
        ) : (
          <p className="text-sm text-muted">
            No staffing intent linked to this engagement yet.
          </p>
        )}
      </section>

      <section className="rounded-2xl border border-line/80 bg-soft p-6">
        <div className="flex items-center justify-between">
          <h2 className="text-sm uppercase tracking-[0.2em] text-slate">Edits</h2>
          <span className="text-xs uppercase tracking-[0.2em] text-slate">
            Last 10 changes
          </span>
        </div>
        {editEvents.length === 0 ? (
          <p className="mt-4 text-sm text-muted">
            No recorded edits yet for this engagement.
          </p>
        ) : (
          <div className="mt-4 space-y-3 text-sm text-muted">
            {editEvents.map((event) => (
              <Link
                key={event.id}
                href={`/portal/edits/${event.id}`}
                className="card-animate flex flex-col gap-2 rounded-xl border border-line/80 bg-ink px-4 py-3 transition hover:border-slate md:flex-row md:items-center md:justify-between"
              >
                <div>
                  <div className="text-ash">
                    {event.kind.replace("_", " ")} · {event.entityType}
                  </div>
                  <div className="text-xs text-slate">
                    {formatDateShort(event.createdAt)} ·{" "}
                    {event.createdBy?.email ?? "System"}
                  </div>
                </div>
                <div className="rounded-full border border-line px-3 py-1 text-xs uppercase tracking-[0.2em] text-slate">
                  {event.status.replace("_", " ")}
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>

      <section className="rounded-2xl border border-line/80 bg-soft p-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-sm uppercase tracking-[0.2em] text-slate">
            Commercial
          </h2>
          <EngagementEditPanel
            engagementId={engagementId}
            initialTitle={engagement.title}
            initialOwnerId={engagement.ownerId}
            initialStartDate={
              engagement.startDate
                ? engagement.startDate.toISOString().slice(0, 10)
                : null
            }
            initialTargetDate={
              engagement.targetDate
                ? engagement.targetDate.toISOString().slice(0, 10)
                : null
            }
            initialProcurementRef={engagement.procurementRef}
            initialPurchaseOrderRef={engagement.purchaseOrderRef}
            initialCostCenter={engagement.costCenter}
            ownerOptions={staffUsers.map((user) => ({
              id: user.id,
              label: user.email,
            }))}
            isStaff={isStaff}
          />
        </div>
        <div className="mt-4 grid gap-4 text-sm text-muted md:grid-cols-3">
          <div>
            <div className="text-xs text-slate">Procurement ref</div>
            <div className="text-ash">{engagement.procurementRef ?? "—"}</div>
          </div>
          <div>
            <div className="text-xs text-slate">PO reference</div>
            <div className="text-ash">{engagement.purchaseOrderRef ?? "—"}</div>
          </div>
          <div>
            <div className="text-xs text-slate">Cost center</div>
            <div className="text-ash">{engagement.costCenter ?? "—"}</div>
          </div>
        </div>
        <div className="mt-4 text-xs text-slate">
          Any changes require a Change Request approval before scope, schedule,
          or cost adjustments are enacted.
        </div>
        {engagement.invoices.length > 0 && (
          <div className="mt-4 space-y-2 text-sm text-muted">
            {engagement.invoices.slice(0, 3).map((invoice) => (
              <div
                key={invoice.id}
                className="rounded-xl border border-line/80 bg-ink px-4 py-3"
              >
                <div className="text-ash">
                  {invoice.invoiceNumber ?? "Invoice"} · {invoice.currency}
                  {invoice.amountEUR
                    ? ` ${invoice.amountEUR.toLocaleString("en-GB")}`
                    : ""}
                </div>
                <div className="mt-1 text-xs text-slate">
                  Due {invoice.dueDate ? formatDateShort(invoice.dueDate) : "TBD"} ·{" "}
                  {invoice.paidAt ? "Paid" : "Unpaid"}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {isStaff && (
        <section className="rounded-2xl border border-line/80 bg-soft p-6">
          <h2 className="text-sm uppercase tracking-[0.2em] text-slate">
            Engagement controls
          </h2>
          <form action={updateEngagement} className="mt-4 grid gap-4 md:grid-cols-2">
            <label className="space-y-2 text-sm text-slate">
              Stage
              <select
                name="stage"
                defaultValue={engagement.stage}
                className="w-full rounded-xl border border-line bg-ink px-4 py-2 text-ash"
              >
                {stageOrder.map((stage) => (
                  <option key={stage} value={stage}>
                    {stageLabels[stage]}
                  </option>
                ))}
              </select>
            </label>
            <label className="space-y-2 text-sm text-slate">
              Status
              <select
                name="status"
                defaultValue={engagement.status}
                className="w-full rounded-xl border border-line bg-ink px-4 py-2 text-ash"
              >
                {Object.keys(statusLabels).map((status) => (
                  <option key={status} value={status}>
                    {statusLabels[status]}
                  </option>
                ))}
              </select>
            </label>
            <label className="space-y-2 text-sm text-slate">
              Start date
              <input
                type="date"
                name="startDate"
                defaultValue={
                  engagement.startDate
                    ? engagement.startDate.toISOString().slice(0, 10)
                    : ""
                }
                className="w-full rounded-xl border border-line bg-ink px-4 py-2 text-ash"
              />
            </label>
            <label className="space-y-2 text-sm text-slate">
              Target date
              <input
                type="date"
                name="targetDate"
                defaultValue={
                  engagement.targetDate
                    ? engagement.targetDate.toISOString().slice(0, 10)
                    : ""
                }
                className="w-full rounded-xl border border-line bg-ink px-4 py-2 text-ash"
              />
            </label>
            <label className="space-y-2 text-sm text-slate">
              Owner
              <select
                name="ownerId"
                defaultValue={engagement.ownerId ?? ""}
                className="w-full rounded-xl border border-line bg-ink px-4 py-2 text-ash"
              >
                <option value="">Unassigned</option>
                {staffUsers.map((user) => (
                  <option key={user.id} value={user.id}>
                    {user.email}
                  </option>
                ))}
              </select>
            </label>
            <label className="space-y-2 text-sm text-slate">
              Procurement reference
              <input
                name="procurementRef"
                defaultValue={engagement.procurementRef ?? ""}
                className="w-full rounded-xl border border-line bg-ink px-4 py-2 text-ash"
                placeholder="PO / RFP / internal ref"
              />
            </label>
            <label className="space-y-2 text-sm text-slate">
              Purchase order
              <input
                name="purchaseOrderRef"
                defaultValue={engagement.purchaseOrderRef ?? ""}
                className="w-full rounded-xl border border-line bg-ink px-4 py-2 text-ash"
                placeholder="Client PO reference"
              />
            </label>
            <label className="space-y-2 text-sm text-slate">
              Cost center
              <input
                name="costCenter"
                defaultValue={engagement.costCenter ?? ""}
                className="w-full rounded-xl border border-line bg-ink px-4 py-2 text-ash"
                placeholder="Internal cost center"
              />
            </label>
            <div className="flex items-end">
              <button
                type="submit"
                className="btn-animate btn-primary rounded-full px-6 py-2 text-xs uppercase tracking-[0.2em]"
              >
                Save changes
              </button>
            </div>
          </form>
        </section>
      )}

      <section className="rounded-2xl border border-line/80 bg-soft p-6">
        <div className="flex items-center justify-between">
          <h2 className="text-sm uppercase tracking-[0.2em] text-slate">
            Milestones
          </h2>
          {isStaff && (
            <form action={createMilestone} className="flex flex-wrap gap-2">
              <input
                name="title"
                placeholder="New milestone"
                required
                minLength={2}
                className="rounded-full border border-line bg-ink px-3 py-2 text-xs text-ash"
              />
              <input
                type="date"
                name="dueDate"
                className="rounded-full border border-line bg-ink px-3 py-2 text-xs text-ash"
              />
              <button
                type="submit"
                className="btn-animate btn-secondary rounded-full px-4 py-2 text-xs uppercase tracking-[0.2em]"
              >
                Add
              </button>
            </form>
          )}
        </div>
        {engagement.milestones.length === 0 ? (
          <p className="mt-4 text-sm text-muted">No milestones yet.</p>
        ) : (
          <div className="mt-4 space-y-3 text-sm text-muted">
            {engagement.milestones.map((milestone) => (
              <div
                key={milestone.id}
                className="flex flex-col gap-2 rounded-xl border border-line/80 bg-ink px-4 py-3 md:flex-row md:items-center md:justify-between"
              >
                <div>
                  <div className="text-ash">{milestone.title}</div>
                  <div className="text-xs text-slate">
                    {milestone.dueDate
                      ? `Due ${formatDateShort(milestone.dueDate)}`
                      : "No due date"}
                  </div>
                </div>
                {isStaff ? (
                  <form action={updateMilestone} className="flex flex-wrap gap-2">
                    <input type="hidden" name="milestoneId" value={milestone.id} />
                    <select
                      name="status"
                      defaultValue={milestone.status}
                      className="rounded-full border border-line bg-ink px-3 py-1 text-xs text-ash"
                    >
                      {Object.keys(milestoneStatusLabels).map((status) => (
                        <option key={status} value={status}>
                          {milestoneStatusLabels[status]}
                        </option>
                      ))}
                    </select>
                    <input
                      type="date"
                      name="dueDate"
                      defaultValue={
                        milestone.dueDate
                          ? milestone.dueDate.toISOString().slice(0, 10)
                          : ""
                      }
                      className="rounded-full border border-line bg-ink px-3 py-1 text-xs text-ash"
                    />
                    <button
                      type="submit"
                      className="btn-animate rounded-full border border-line px-3 py-1 text-xs uppercase tracking-[0.2em] text-slate"
                    >
                      Update
                    </button>
                  </form>
                ) : (
                  <span className="text-xs uppercase tracking-[0.2em] text-slate">
                    {milestoneStatusLabels[milestone.status]}
                  </span>
                )}
              </div>
            ))}
          </div>
        )}
      </section>

      <section className="rounded-2xl border border-line/80 bg-soft p-6">
        <div className="flex items-center justify-between">
          <h2 className="text-sm uppercase tracking-[0.2em] text-slate">
            Deliverables
          </h2>
          {isStaff && (
            <form action={createDeliverable} className="flex flex-wrap gap-2">
              <input
                name="title"
                placeholder="New deliverable"
                required
                minLength={2}
                className="rounded-full border border-line bg-ink px-3 py-2 text-xs text-ash"
              />
              <button
                type="submit"
                className="btn-animate btn-secondary rounded-full px-4 py-2 text-xs uppercase tracking-[0.2em]"
              >
                Add
              </button>
            </form>
          )}
        </div>
        {engagement.deliverables.length === 0 ? (
          <p className="mt-4 text-sm text-muted">No deliverables yet.</p>
        ) : (
          <div className="mt-4 space-y-3 text-sm text-muted">
            {engagement.deliverables.map((deliverable) => (
              <div
                key={deliverable.id}
                className="flex flex-col gap-3 rounded-xl border border-line/80 bg-ink px-4 py-3"
              >
                <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                  <div>
                    <div className="text-ash">{deliverable.title}</div>
                    <div className="text-xs text-slate">
                      {deliverable.document?.name ?? "No document attached"}
                    </div>
                  </div>
                  <div className="text-xs uppercase tracking-[0.2em] text-slate">
                    {deliverableStatusLabels[deliverable.status]}
                  </div>
                </div>
                {isStaff ? (
                  <form action={updateDeliverable} className="flex flex-wrap gap-2">
                    <input type="hidden" name="deliverableId" value={deliverable.id} />
                    <select
                      name="status"
                      defaultValue={deliverable.status}
                      className="rounded-full border border-line bg-ink px-3 py-1 text-xs text-ash"
                    >
                      {Object.keys(deliverableStatusLabels).map((status) => (
                        <option key={status} value={status}>
                          {deliverableStatusLabels[status]}
                        </option>
                      ))}
                    </select>
                    <button
                      type="submit"
                      className="btn-animate rounded-full border border-line px-3 py-1 text-xs uppercase tracking-[0.2em] text-slate"
                    >
                      Update
                    </button>
                  </form>
                ) : deliverable.status !== "approved" ? (
                  <form action={approveDeliverable} className="flex flex-col gap-2">
                    <input type="hidden" name="deliverableId" value={deliverable.id} />
                    <input
                      name="approvalNote"
                      placeholder="Approval note (optional)"
                      maxLength={240}
                      className="w-full rounded-full border border-line bg-ink px-3 py-1 text-xs text-ash"
                    />
                    <button
                      type="submit"
                      className="btn-animate btn-primary rounded-full px-4 py-2 text-xs uppercase tracking-[0.2em]"
                    >
                      Approve deliverable
                    </button>
                  </form>
                ) : null}
              </div>
            ))}
          </div>
        )}
      </section>

      <section className="rounded-2xl border border-line/80 bg-soft p-6">
        <div className="flex items-center justify-between">
          <h2 className="text-sm uppercase tracking-[0.2em] text-slate">
            Change Requests
          </h2>
          <Link
            href="/portal/change-requests"
            className="text-xs uppercase tracking-[0.2em] text-slate"
          >
            View all
          </Link>
        </div>
        <form
          action={createChangeRequest}
          className="mt-4 grid gap-3 rounded-2xl border border-line/80 bg-ink/70 p-4"
        >
          <div className="grid gap-3 md:grid-cols-2">
            <input
              name="title"
              placeholder="Change request title"
              required
              minLength={3}
              className="rounded-full border border-line bg-ink px-4 py-2 text-xs text-ash"
            />
            <select
              name="impact"
              className="rounded-full border border-line bg-ink px-4 py-2 text-xs text-ash"
              defaultValue="scope"
            >
              <option value="scope">Scope</option>
              <option value="schedule">Schedule</option>
              <option value="cost">Cost</option>
              <option value="risk">Risk</option>
            </select>
            <select
              name="severity"
              className="rounded-full border border-line bg-ink px-4 py-2 text-xs text-ash"
              defaultValue="med"
            >
              <option value="low">Low</option>
              <option value="med">Medium</option>
              <option value="high">High</option>
            </select>
          </div>
          <textarea
            name="description"
            rows={3}
            required
            minLength={10}
            placeholder="Describe the change, rationale, and constraints."
            className="rounded-2xl border border-line bg-ink px-4 py-2 text-xs text-ash"
          />
          <button
            type="submit"
            className="btn-animate btn-secondary w-fit rounded-full px-4 py-2 text-xs uppercase tracking-[0.2em]"
          >
            Submit request
          </button>
        </form>
        {engagement.changeRequests.length === 0 ? (
          <p className="mt-4 text-sm text-muted">
            No change requests logged for this engagement.
          </p>
        ) : (
          <div className="mt-4 space-y-3 text-sm text-muted">
            {engagement.changeRequests.map((request) => (
              <div
                key={request.id}
                className="rounded-xl border border-line/80 bg-ink px-4 py-3"
              >
                <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                  <div>
                    <div className="text-ash">{request.title}</div>
                    <div className="text-xs text-slate">
                      {changeRequestStatusLabels[request.status]} ·{" "}
                      {request.impact} · {request.severity} ·{" "}
                      {formatDateShort(request.requestedAt)}
                    </div>
                  </div>
                  <Link
                    href={`/portal/change-requests/${request.id}`}
                    className="text-xs uppercase tracking-[0.2em] text-slate"
                  >
                    Detail
                  </Link>
                </div>
                {request.decisionNote && (
                  <p className="mt-3 text-xs text-slate">
                    Decision note: {request.decisionNote}
                  </p>
                )}
                {isStaff && (
                  <form
                    action={decideChangeRequest}
                    className="mt-3 grid gap-2 md:grid-cols-3"
                  >
                    <input
                      type="hidden"
                      name="changeRequestId"
                      value={request.id}
                    />
                    <select
                      name="status"
                      defaultValue={request.status}
                      className="rounded-full border border-line bg-ink px-3 py-1 text-xs text-ash"
                    >
                      <option value="approved">Approve</option>
                      <option value="rejected">Reject</option>
                      <option value="needs_info">Needs info</option>
                    </select>
                    <input
                      name="costDeltaEUR"
                      placeholder="Cost delta (EUR)"
                      className="rounded-full border border-line bg-ink px-3 py-1 text-xs text-ash"
                    />
                    <input
                      name="scheduleDeltaDays"
                      placeholder="Schedule delta (days)"
                      className="rounded-full border border-line bg-ink px-3 py-1 text-xs text-ash"
                    />
                    <textarea
                      name="decisionNote"
                      rows={2}
                      required
                      minLength={3}
                      placeholder="Decision note"
                      className="md:col-span-3 rounded-xl border border-line bg-ink px-3 py-2 text-xs text-ash"
                    />
                    <div className="md:col-span-3 flex flex-wrap gap-2">
                      <button
                        type="submit"
                        className="btn-animate btn-primary rounded-full px-4 py-2 text-xs uppercase tracking-[0.2em]"
                      >
                        Record decision
                      </button>
                      {request.status === "approved" && (
                        <button
                          formAction={implementChangeRequest}
                          className="btn-animate btn-secondary rounded-full px-4 py-2 text-xs uppercase tracking-[0.2em]"
                        >
                          Mark implemented
                        </button>
                      )}
                    </div>
                  </form>
                )}
                {!isStaff && request.status === "needs_info" && (
                  <form
                    action={respondToInfoRequest}
                    className="mt-3 space-y-2"
                  >
                    <input type="hidden" name="changeRequestId" value={request.id} />
                    <textarea
                      name="description"
                      required
                      minLength={10}
                      defaultValue={request.description}
                      rows={3}
                      className="w-full rounded-xl border border-line bg-ink px-3 py-2 text-xs text-ash"
                    />
                    <button
                      type="submit"
                      className="btn-animate btn-secondary rounded-full px-4 py-2 text-xs uppercase tracking-[0.2em]"
                    >
                      Resubmit
                    </button>
                  </form>
                )}
              </div>
            ))}
          </div>
        )}
      </section>

      <section className="rounded-2xl border border-line/80 bg-soft p-6">
        <div className="flex items-center justify-between">
          <h2 className="text-sm uppercase tracking-[0.2em] text-slate">
            Documents
          </h2>
          <Link
            href="/portal/documents"
            className="text-xs uppercase tracking-[0.2em] text-slate"
          >
            View all
          </Link>
        </div>
        {engagement.documents.length === 0 ? (
          <p className="mt-4 text-sm text-muted">
            No documents added yet. Upload deliverables or agreements to share
            with the client.
          </p>
        ) : (
          <div className="mt-4 space-y-3 text-sm text-muted">
            {engagement.documents.map((doc) => (
              <div
                key={doc.id}
                className="flex flex-col gap-2 rounded-xl border border-line/80 bg-ink px-4 py-3 md:flex-row md:items-center md:justify-between"
              >
                <div>
                  <div className="text-ash">{doc.label ?? doc.name}</div>
                  <div className="text-xs text-slate">
                    {doc.category} · {formatBytes(doc.size)}
                  </div>
                </div>
                <div className="flex items-center gap-3 text-xs">
                  <span className="text-slate">
                    {formatDateShort(doc.createdAt)}
                  </span>
                  <Link
                    href={`/api/portal/documents/${doc.id}/download`}
                    className="btn-animate btn-secondary inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs uppercase tracking-[0.2em]"
                  >
                    <IconStatic name="download" size={16} className="text-ash" />
                    Download
                  </Link>
                  {session.user.role === "lucien_admin" && (
                    <ArchiveDocumentButton documentId={doc.id} />
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
        <div className="mt-6">
          {isStaff ? (
            <DocumentUploader engagementId={engagementId} />
          ) : (
            <DocumentUploader
              engagementId={engagementId}
              allowedCategories={["client_input", "evidence"]}
              accept=".pdf,.docx,.png,.jpg,.jpeg"
            />
          )}
        </div>
      </section>
    </div>
  );
}
