import { notFound, redirect } from "next/navigation";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { formatDateShort } from "@/lib/format";
import { requireLucienStaff, requirePortalSession } from "@/lib/portal";
import { createNotifications } from "@/lib/notifications";
import { logAuditEvent } from "@/lib/audit";
import { StatusBadge } from "@/components/portal/StatusBadge";
import {
  getAccessBadge,
  getScopeStatusBadge,
  getMetaBadge,
  getStaffingBadge,
  getSkillsGapBadge,
} from "@/lib/status-badges";
import { updateStaffingIntentFromScope } from "@/lib/talent/staffing";
import { roleGroups } from "@/lib/talent/taxonomy";

const statusOptions = ["draft", "sent", "approved", "rejected"] as const;

const parseDeliverables = (value: string) =>
  value
    .split("\n")
    .map((item) => item.trim())
    .filter(Boolean);

export default async function ScopeDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const session = await requirePortalSession();
  const isStaff =
    session.user.role === "lucien_admin" ||
    session.user.role === "lucien_operator";

  const scopeProposal = await prisma.scopeProposal.findFirst({
    where: isStaff
      ? { id }
      : { id, orgId: session.user.orgId },
    include: { inquiry: true, engagement: true },
  });

  if (!scopeProposal) {
    notFound();
  }

  const proposalId = scopeProposal.id;
  const proposalOrgId = scopeProposal.orgId;
  const sentAtCurrent = scopeProposal.sentAt;
  const approvedAtCurrent = scopeProposal.approvedAt;
  const rejectedAtCurrent = scopeProposal.rejectedAt;
  const scopeLocked = ["approved", "rejected"].includes(scopeProposal.status);

  const staffingIntent = await prisma.staffingIntent.findFirst({
    where: { scopeProposalId: id },
    orderBy: { createdAt: "desc" },
  });

  const staffingRoles = Array.isArray(staffingIntent?.rolesJson)
    ? staffingIntent?.rolesJson
    : [];
  const staffingSkills =
    (staffingIntent?.requirementsJson as { skills?: Array<{ skillId: string; must: boolean }> })
      ?.skills ?? [];
  const missingMustSkills = staffingSkills.filter((skill) => skill.must).map((skill) => skill.skillId);
  const staffingBadge = getStaffingBadge(
    staffingIntent ? { state: staffingIntent.state } : null,
    {
      hasRolesDefined: staffingRoles.length > 0,
      fulfilled: staffingIntent?.state === "FULFILLED",
    },
  );

  const deliverables = Array.isArray(scopeProposal.deliverablesJson)
    ? scopeProposal.deliverablesJson.filter(
        (item): item is string => typeof item === "string",
      )
    : [];

  async function updateScope(formData: FormData) {
    "use server";

    const session = await requirePortalSession();
    requireLucienStaff(session.user.role);

    const schema = z.object({
      title: z.string().min(2),
      fixedPriceEUR: z.coerce.number().int().min(1000),
      scopeSummary: z.string().min(10),
      deliverables: z.string().min(2),
      status: z.enum(statusOptions),
    });

    const parsed = schema.parse({
      title: formData.get("title"),
      fixedPriceEUR: formData.get("fixedPriceEUR"),
      scopeSummary: formData.get("scopeSummary"),
      deliverables: formData.get("deliverables"),
      status: formData.get("status"),
    });

    const deliverablesList = parseDeliverables(parsed.deliverables);

    const updated = await prisma.scopeProposal.update({
      where: { id: proposalId },
      data: {
        title: parsed.title,
        fixedPriceEUR: parsed.fixedPriceEUR,
        scopeSummary: parsed.scopeSummary,
        deliverablesJson: deliverablesList,
        status: parsed.status,
        sentAt: parsed.status === "sent" ? new Date() : sentAtCurrent,
        approvedAt: parsed.status === "approved" ? new Date() : approvedAtCurrent,
        rejectedAt: parsed.status === "rejected" ? new Date() : rejectedAtCurrent,
      },
    });

    await updateStaffingIntentFromScope({
      orgId: updated.orgId,
      inquiryId: updated.inquiryId,
      scopeProposalId: updated.id,
      serviceSlug: scopeProposal.engagement?.serviceSlug ?? scopeProposal.inquiry?.serviceSlug ?? null,
      deliverables: deliverablesList,
    });

    await logAuditEvent({
      orgId: updated.orgId,
      userId: session.user.id,
      action: "scope_updated",
      resourceType: "scope",
      resourceId: updated.id,
    });

    if (parsed.status === "sent") {
      await createNotifications({
        orgId: updated.orgId,
        recipientRoles: ["org_admin", "org_user"],
        recipientOrgId: updated.orgId,
        type: "scope_sent",
        title: "Scope proposal sent",
        body: `${updated.title} is ready for review.`,
        entityType: "scope",
        entityId: updated.id,
      });
    }

    redirect(`/portal/scopes/${proposalId}`);
  }

  async function addRoleRequirement(formData: FormData) {
    "use server";
    const session = await requirePortalSession();
    requireLucienStaff(session.user.role);

    const roleId = String(formData.get("roleId") || "");
    const countRaw = Number(formData.get("count") || 1);
    const count = Number.isFinite(countRaw) && countRaw > 0 ? countRaw : 1;
    if (!roleId) return;

    let intent = await prisma.staffingIntent.findFirst({
      where: { scopeProposalId: proposalId },
      orderBy: { createdAt: "desc" },
    });

    if (!intent) {
      intent = await updateStaffingIntentFromScope({
        orgId: scopeProposal.orgId,
        inquiryId: scopeProposal.inquiryId,
        scopeProposalId: scopeProposal.id,
        serviceSlug: scopeProposal.engagement?.serviceSlug ?? scopeProposal.inquiry?.serviceSlug ?? null,
        deliverables,
      });
    }

    const roles = Array.isArray(intent.rolesJson) ? intent.rolesJson : [];
    const existing = roles.find((role: any) => role.roleId === roleId);
    if (existing) {
      existing.count = count;
    } else {
      roles.push({ roleId, count });
    }

    await prisma.staffingIntent.update({
      where: { id: intent.id },
      data: { rolesJson: roles },
    });

    redirect(`/portal/scopes/${proposalId}`);
  }

  async function approveScope(formData: FormData) {
    "use server";

    const session = await requirePortalSession();

    const schema = z.object({
      note: z.string().max(240).optional().nullable(),
    });

    const parsed = schema.parse({
      note: formData.get("note"),
    });

    if (proposalOrgId !== session.user.orgId) {
      notFound();
    }

    const updated = await prisma.scopeProposal.update({
      where: { id: proposalId },
      data: {
        status: "approved",
        clientNote: parsed.note || null,
        approvedAt: new Date(),
      },
    });

    await createNotifications({
      orgId: updated.orgId,
      recipientRoles: ["lucien_admin", "lucien_operator"],
      type: "scope_approved",
      title: "Scope approved",
      body: `${updated.title} was approved by the client.`,
      entityType: "scope",
      entityId: updated.id,
    });

    await logAuditEvent({
      orgId: updated.orgId,
      userId: session.user.id,
      action: "scope_approved",
      resourceType: "scope",
      resourceId: updated.id,
    });

    redirect(`/portal/scopes/${proposalId}`);
  }

  async function rejectScope(formData: FormData) {
    "use server";

    const session = await requirePortalSession();
    const schema = z.object({
      note: z.string().max(240).optional().nullable(),
    });

    const parsed = schema.parse({
      note: formData.get("note"),
    });

    if (proposalOrgId !== session.user.orgId) {
      notFound();
    }

    const updated = await prisma.scopeProposal.update({
      where: { id: proposalId },
      data: {
        status: "rejected",
        clientNote: parsed.note || null,
        rejectedAt: new Date(),
      },
    });

    await createNotifications({
      orgId: updated.orgId,
      recipientRoles: ["lucien_admin", "lucien_operator"],
      type: "scope_rejected",
      title: "Scope rejected",
      body: `${updated.title} was rejected by the client.`,
      entityType: "scope",
      entityId: updated.id,
    });

    await logAuditEvent({
      orgId: updated.orgId,
      userId: session.user.id,
      action: "scope_rejected",
      resourceType: "scope",
      resourceId: updated.id,
    });

    redirect(`/portal/scopes/${proposalId}`);
  }

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <p className="text-xs uppercase tracking-[0.3em] text-slate">
          Scope proposal
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <h1 className="text-2xl font-semibold text-ash">
            {scopeProposal.title}
          </h1>
          {scopeLocked && <StatusBadge {...getAccessBadge("Locked")} />}
        </div>
        <p className="flex flex-wrap items-center gap-2 text-sm text-muted">
          <span>Status:</span>
          <StatusBadge {...getScopeStatusBadge(scopeProposal.status)} />
          <StatusBadge {...staffingBadge} />
          <StatusBadge
            {...getMetaBadge(`Created ${formatDateShort(scopeProposal.createdAt)}`)}
          />
        </p>
      </div>

      <section className="rounded-2xl border border-line/80 bg-soft p-6">
        <h2 className="text-sm uppercase tracking-[0.2em] text-slate">
          Scope summary
        </h2>
        <p className="mt-3 text-sm text-muted">{scopeProposal.scopeSummary}</p>
        <div className="mt-4 text-sm text-muted">
          Fixed price: €{scopeProposal.fixedPriceEUR.toLocaleString("en-US")}
        </div>
        <ul className="mt-4 space-y-2 text-sm text-muted">
          {deliverables.map((item, index) => (
            <li key={`${item}-${index}`} className="flex gap-2">
              <span className="mt-1 h-2 w-2 rounded-full bg-slate" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="rounded-2xl border border-line/80 bg-soft p-6 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h2 className="text-sm uppercase tracking-[0.2em] text-slate">
            Staffing requirements
          </h2>
          <div className="flex flex-wrap gap-2">
            <StatusBadge {...staffingBadge} />
            <StatusBadge {...getSkillsGapBadge(missingMustSkills)} />
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2 text-sm text-muted">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-slate">Roles</div>
            {staffingRoles.length === 0 ? (
              <p className="mt-2 text-xs text-muted">No roles defined yet.</p>
            ) : (
              <div className="mt-2 space-y-1">
                {(staffingRoles as Array<{ roleId?: string; count?: number }>).map(
                  (role) => (
                    <div key={role.roleId ?? Math.random()}>
                      {role.roleId} · {role.count ?? 1}
                    </div>
                  ),
                )}
              </div>
            )}
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-slate">Skills</div>
            <div className="mt-2 flex flex-wrap gap-2 text-xs">
              {staffingSkills.length === 0 ? (
                <span className="text-xs text-muted">No skills inferred.</span>
              ) : (
                staffingSkills.map((skill) => (
                  <StatusBadge
                    key={skill.skillId}
                    label={skill.skillId}
                    tone={skill.must ? "warning" : "neutral"}
                    variant="soft"
                  />
                ))
              )}
            </div>
          </div>
        </div>

        {isStaff && (
          <form action={addRoleRequirement} className="grid gap-3 md:grid-cols-3">
            <label className="space-y-2 text-xs uppercase tracking-[0.2em] text-slate">
              Role
              <select
                name="roleId"
                className="w-full rounded-xl border border-line bg-ink px-3 py-2 text-sm text-ash"
                defaultValue=""
              >
                <option value="">Select role</option>
                {roleGroups.flatMap((group) =>
                  group.roles.map((role) => (
                    <option key={role.id} value={role.id}>
                      {role.id}
                    </option>
                  )),
                )}
              </select>
            </label>
            <label className="space-y-2 text-xs uppercase tracking-[0.2em] text-slate">
              Count
              <input
                name="count"
                type="number"
                min={1}
                defaultValue={1}
                className="w-full rounded-xl border border-line bg-ink px-3 py-2 text-sm text-ash"
              />
            </label>
            <div className="flex items-end">
              <button
                type="submit"
                className="btn-animate btn-secondary rounded-full px-4 py-2 text-[0.6rem] uppercase tracking-[0.2em]"
              >
                Add role
              </button>
            </div>
          </form>
        )}
      </section>

      {isStaff ? (
        <section className="rounded-2xl border border-line/80 bg-soft p-6">
          <h2 className="text-sm uppercase tracking-[0.2em] text-slate">
            Update proposal
          </h2>
          <form action={updateScope} className="mt-4 grid gap-4">
            <label className="space-y-2 text-sm text-slate">
              Title
              <input
                name="title"
                defaultValue={scopeProposal.title}
                className="w-full rounded-xl border border-line bg-ink px-4 py-2 text-ash"
              />
            </label>
            <label className="space-y-2 text-sm text-slate">
              Fixed price (EUR)
              <input
                type="number"
                name="fixedPriceEUR"
                defaultValue={scopeProposal.fixedPriceEUR}
                className="w-full rounded-xl border border-line bg-ink px-4 py-2 text-ash"
              />
            </label>
            <label className="space-y-2 text-sm text-slate">
              Scope summary
              <textarea
                name="scopeSummary"
                defaultValue={scopeProposal.scopeSummary}
                rows={4}
                className="w-full rounded-xl border border-line bg-ink px-4 py-2 text-ash"
              />
            </label>
            <label className="space-y-2 text-sm text-slate">
              Deliverables (one per line)
              <textarea
                name="deliverables"
                defaultValue={deliverables.join("\n")}
                rows={4}
                className="w-full rounded-xl border border-line bg-ink px-4 py-2 text-ash"
              />
            </label>
            <label className="space-y-2 text-sm text-slate">
              Status
              <select
                name="status"
                defaultValue={scopeProposal.status}
                className="w-full rounded-xl border border-line bg-ink px-4 py-2 text-ash"
              >
                {statusOptions.map((status) => (
                  <option key={status} value={status}>
                    {status}
                  </option>
                ))}
              </select>
            </label>
            <button
              type="submit"
              className="btn-animate btn-primary rounded-full px-6 py-2 text-xs uppercase tracking-[0.2em]"
            >
              Save proposal
            </button>
          </form>
        </section>
      ) : (
        <section className="rounded-2xl border border-line/80 bg-soft p-6">
          <h2 className="text-sm uppercase tracking-[0.2em] text-slate">
            Client decision
          </h2>
          {scopeProposal.status === "approved" ? (
            <p className="mt-3 text-sm text-muted">
              Approved. We will follow up with next steps.
            </p>
          ) : scopeProposal.status === "rejected" ? (
            <p className="mt-3 text-sm text-muted">
              Rejected. We will follow up to align on changes.
            </p>
          ) : (
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <form action={approveScope} className="space-y-2">
                <input
                  name="note"
                  placeholder="Approval note (optional)"
                  maxLength={240}
                  className="w-full rounded-xl border border-line bg-ink px-4 py-2 text-ash"
                />
                <button
                  type="submit"
                  className="btn-animate btn-primary w-full rounded-full px-4 py-2 text-xs uppercase tracking-[0.2em]"
                >
                  Approve scope
                </button>
              </form>
              <form action={rejectScope} className="space-y-2">
                <input
                  name="note"
                  placeholder="Rejection note (optional)"
                  maxLength={240}
                  className="w-full rounded-xl border border-line bg-ink px-4 py-2 text-ash"
                />
                <button
                  type="submit"
                  className="btn-animate btn-secondary w-full rounded-full px-4 py-2 text-xs uppercase tracking-[0.2em]"
                >
                  Reject scope
                </button>
              </form>
            </div>
          )}
        </section>
      )}
    </div>
  );
}
