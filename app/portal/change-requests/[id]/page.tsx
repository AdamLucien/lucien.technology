import { notFound, redirect } from "next/navigation";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { formatDateShort } from "@/lib/format";
import { getOrgScope, requireLucienStaff, requirePortalSession } from "@/lib/portal";
import { logAuditEvent } from "@/lib/audit";
import { createNotifications } from "@/lib/notifications";
import { applyDiffSafely } from "@/lib/editing";
import { StatusBadge } from "@/components/portal/StatusBadge";
import {
  getAccessBadge,
  getChangeStatusBadge,
  getImpactBadge,
  getSeverityBadge,
} from "@/lib/status-badges";

export default async function ChangeRequestDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const session = await requirePortalSession();
  const scope = getOrgScope(session.user.role, session.user.orgId);
  const isStaff =
    session.user.role === "lucien_admin" ||
    session.user.role === "lucien_operator";

  const changeRequest = await prisma.changeRequest.findFirst({
    where: { ...scope, id },
    include: {
      engagement: true,
      createdBy: true,
      assignedTo: true,
    },
  });

  if (!changeRequest) {
    notFound();
  }

  const changeRequestId = changeRequest.id;
  const changeRequestOrgId = changeRequest.orgId;
  const changeRequestTitle = changeRequest.title;
  const changeRequestData = changeRequest;
  const changeRequestLocked = changeRequest.status !== "proposed";

  async function decideChangeRequest(formData: FormData) {
    "use server";

    const session = await requirePortalSession();
    requireLucienStaff(session.user.role);

    const schema = z.object({
      status: z.enum(["approved", "rejected", "needs_info"]),
      decisionNote: z.string().min(3),
      costDeltaEUR: z.string().optional().nullable(),
      scheduleDeltaDays: z.string().optional().nullable(),
    });

    const parsed = schema.safeParse({
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
      where: { id: changeRequestId },
      data: {
        status: parsed.data.status,
        decisionNote: parsed.data.decisionNote,
        costDeltaEUR,
        scheduleDeltaDays,
        decidedAt: new Date(),
      },
    });

    await logAuditEvent({
      orgId: changeRequestOrgId,
      userId: session.user.id,
      action: "change_request_decided",
      resourceType: "change_request",
      resourceId: changeRequestId,
      meta: { status: parsed.data.status },
    });

    await createNotifications({
      orgId: changeRequestOrgId,
      recipientRoles: ["org_admin", "org_user"],
      recipientOrgId: changeRequestOrgId,
      type: "change_request_decision",
      title: `Change request ${parsed.data.status}`,
      body: `Decision recorded: ${changeRequestTitle}`,
      entityType: "change_request",
      entityId: changeRequestId,
    });

    redirect(`/portal/change-requests/${changeRequestId}`);
  }

  async function implementChangeRequest() {
    "use server";

    const session = await requirePortalSession();
    requireLucienStaff(session.user.role);

    await prisma.changeRequest.update({
      where: { id: changeRequestId },
      data: {
        status: "implemented",
        implementedAt: new Date(),
      },
    });

    await logAuditEvent({
      orgId: changeRequestOrgId,
      userId: session.user.id,
      action: "change_request_implemented",
      resourceType: "change_request",
      resourceId: changeRequestId,
    });

    await createNotifications({
      orgId: changeRequestOrgId,
      recipientRoles: ["org_admin", "org_user"],
      recipientOrgId: changeRequestOrgId,
      type: "change_request_implemented",
      title: "Change request implemented",
      body: `Implemented: ${changeRequestTitle}`,
      entityType: "change_request",
      entityId: changeRequestId,
    });

    redirect(`/portal/change-requests/${changeRequestId}`);
  }

  async function respondToInfoRequest(formData: FormData) {
    "use server";

    const session = await requirePortalSession();
    if (session.user.role?.startsWith("org_") !== true) {
      return;
    }

    const schema = z.object({
      description: z.string().min(10),
      reason: z.string().min(5),
    });

    const parsed = schema.safeParse({
      description: formData.get("description"),
      reason: formData.get("reason"),
    });

    if (!parsed.success) {
      return;
    }

    const result = await applyDiffSafely({
      entityType: "change_request",
      entityId: changeRequestId,
      diff: [
        {
          field: "description",
          from: changeRequestData.description,
          to: parsed.data.description,
        },
      ],
      session,
      reason: parsed.data.reason,
    });

    if (!result.ok) {
      return;
    }

    await prisma.changeRequest.update({
      where: { id: changeRequestId },
      data: { status: "proposed" },
    });

    await logAuditEvent({
      orgId: changeRequestOrgId,
      userId: session.user.id,
      action: "change_request_updated",
      resourceType: "change_request",
      resourceId: changeRequestId,
    });

    await createNotifications({
      orgId: changeRequestOrgId,
      recipientRoles: ["lucien_admin", "lucien_operator"],
      type: "change_request_updated",
      title: "Change request updated",
      body: `Client updated: ${changeRequestTitle}`,
      entityType: "change_request",
      entityId: changeRequestId,
    });

    redirect(`/portal/change-requests/${changeRequestId}`);
  }

  async function updateChangeRequest(formData: FormData) {
    "use server";

    const session = await requirePortalSession();
    const canEdit = session.user.role?.startsWith("org_") || isStaff;
    if (!canEdit) {
      return;
    }

    const schema = z.object({
      title: z.string().min(3),
      description: z.string().min(10),
      reason: z.string().min(5),
    });

    const parsed = schema.safeParse({
      title: formData.get("title"),
      description: formData.get("description"),
      reason: formData.get("reason"),
    });

    if (!parsed.success) {
      return;
    }

    const diff = [];
    if (parsed.data.title !== changeRequestData.title) {
      diff.push({
        field: "title",
        from: changeRequestData.title,
        to: parsed.data.title,
      });
    }
    if (parsed.data.description !== changeRequestData.description) {
      diff.push({
        field: "description",
        from: changeRequestData.description,
        to: parsed.data.description,
      });
    }

    if (diff.length === 0) {
      return;
    }

    const result = await applyDiffSafely({
      entityType: "change_request",
      entityId: changeRequestId,
      diff,
      session,
      reason: parsed.data.reason,
    });

    if (!result.ok) {
      return;
    }

    redirect(`/portal/change-requests/${changeRequestId}`);
  }

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <p className="text-xs uppercase tracking-[0.3em] text-slate">
          Change request
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <h1 className="text-2xl font-semibold text-ash">
            {changeRequest.title}
          </h1>
          {changeRequestLocked && <StatusBadge {...getAccessBadge("Locked")} />}
        </div>
        <p className="text-sm text-muted">{changeRequest.description}</p>
      </div>

      <div className="rounded-2xl border border-line/80 bg-soft p-6">
        <div className="grid gap-4 md:grid-cols-3">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-slate">
              Status
            </div>
            <div className="mt-2">
              <StatusBadge {...getChangeStatusBadge(changeRequest.status)} />
            </div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-slate">
              Impact / severity
            </div>
            <div className="mt-2 flex flex-wrap gap-2">
              <StatusBadge {...getImpactBadge(changeRequest.impact)} />
              <StatusBadge {...getSeverityBadge(changeRequest.severity)} />
            </div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-slate">
              Engagement
            </div>
            <div className="mt-2 text-ash">
              {changeRequest.engagement?.title ?? "Engagement"}
            </div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-slate">
              Cost delta
            </div>
            <div className="mt-2 text-ash">
              {changeRequest.costDeltaEUR
                ? `€${changeRequest.costDeltaEUR.toLocaleString("en-GB")}`
                : "—"}
            </div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-slate">
              Schedule delta
            </div>
            <div className="mt-2 text-ash">
              {changeRequest.scheduleDeltaDays
                ? `${changeRequest.scheduleDeltaDays} days`
                : "—"}
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-line/80 bg-soft p-6">
        <h2 className="text-sm uppercase tracking-[0.2em] text-slate">
          Timeline
        </h2>
        <div className="mt-4 grid gap-3 text-sm text-muted md:grid-cols-3">
          <div>
            <div className="text-xs text-slate">Requested</div>
            <div className="text-ash">{formatDateShort(changeRequest.requestedAt)}</div>
          </div>
          <div>
            <div className="text-xs text-slate">Decision</div>
            <div className="text-ash">
              {changeRequest.decidedAt ? formatDateShort(changeRequest.decidedAt) : "Pending"}
            </div>
          </div>
          <div>
            <div className="text-xs text-slate">Implemented</div>
            <div className="text-ash">
              {changeRequest.implementedAt
                ? formatDateShort(changeRequest.implementedAt)
                : "Pending"}
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-line/80 bg-soft p-6">
        <h2 className="text-sm uppercase tracking-[0.2em] text-slate">
          Definition of Done
        </h2>
        <ul className="mt-3 space-y-2 text-sm text-muted">
          <li>Acceptance criteria agreed and recorded for the change.</li>
          <li>Scope, schedule, and cost deltas documented (if applicable).</li>
          <li>Implementation reference linked to deliverables or evidence.</li>
          <li>Audit trail updated with decision and completion notes.</li>
        </ul>
      </div>

      {changeRequest.status === "proposed" &&
        session.user.role?.startsWith("org_") && (
          <form
            action={updateChangeRequest}
            className="rounded-2xl border border-line/80 bg-soft p-6 space-y-4"
          >
            <h2 className="text-sm uppercase tracking-[0.2em] text-slate">
              Edit request
            </h2>
            <label className="space-y-2 text-sm text-slate">
              Title
              <input
                name="title"
                required
                minLength={3}
                defaultValue={changeRequest.title}
                className="w-full rounded-xl border border-line bg-ink px-4 py-2 text-ash"
              />
            </label>
            <label className="space-y-2 text-sm text-slate">
              Description
              <textarea
                name="description"
                required
                minLength={10}
                rows={4}
                defaultValue={changeRequest.description}
                className="w-full rounded-xl border border-line bg-ink px-4 py-2 text-ash"
              />
            </label>
            <label className="space-y-2 text-sm text-slate">
              Reason for change
              <textarea
                name="reason"
                required
                minLength={5}
                rows={2}
                className="w-full rounded-xl border border-line bg-ink px-4 py-2 text-ash"
              />
            </label>
            <button
              type="submit"
              className="btn-animate btn-primary rounded-full px-6 py-2 text-xs uppercase tracking-[0.2em]"
            >
              Update request
            </button>
          </form>
        )}

      {changeRequest.status === "needs_info" && session.user.role?.startsWith("org_") && (
        <form
          action={respondToInfoRequest}
          className="rounded-2xl border border-line/80 bg-soft p-6 space-y-4"
        >
          <h2 className="text-sm uppercase tracking-[0.2em] text-slate">
            Provide additional detail
          </h2>
          <textarea
            name="description"
            required
            minLength={10}
            rows={4}
            defaultValue={changeRequest.description}
            className="w-full rounded-xl border border-line bg-ink px-4 py-2 text-ash"
          />
          <label className="space-y-2 text-sm text-slate">
            Reason for change
            <textarea
              name="reason"
              required
              minLength={5}
              rows={2}
              className="w-full rounded-xl border border-line bg-ink px-4 py-2 text-ash"
            />
          </label>
          <button
            type="submit"
            className="btn-animate btn-primary rounded-full px-6 py-2 text-xs uppercase tracking-[0.2em]"
          >
            Resubmit change request
          </button>
        </form>
      )}

      {isStaff && (
        <form
          action={decideChangeRequest}
          className="rounded-2xl border border-line/80 bg-soft p-6 space-y-4"
        >
          <h2 className="text-sm uppercase tracking-[0.2em] text-slate">
            Decision
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            <label className="space-y-2 text-sm text-slate">
              Status
              <select
                name="status"
                defaultValue={changeRequest.status}
                className="w-full rounded-xl border border-line bg-ink px-4 py-2 text-ash"
              >
                <option value="approved">Approve</option>
                <option value="rejected">Reject</option>
                <option value="needs_info">Needs info</option>
              </select>
            </label>
            <label className="space-y-2 text-sm text-slate">
              Cost delta (EUR)
              <input
                name="costDeltaEUR"
                type="number"
                className="w-full rounded-xl border border-line bg-ink px-4 py-2 text-ash"
              />
            </label>
            <label className="space-y-2 text-sm text-slate">
              Schedule delta (days)
              <input
                name="scheduleDeltaDays"
                type="number"
                className="w-full rounded-xl border border-line bg-ink px-4 py-2 text-ash"
              />
            </label>
          </div>
          <label className="space-y-2 text-sm text-slate">
            Decision note
            <textarea
              name="decisionNote"
              required
              minLength={3}
              rows={3}
              className="w-full rounded-xl border border-line bg-ink px-4 py-2 text-ash"
              placeholder="Decision rationale and acceptance criteria."
            />
          </label>
          <div className="flex flex-wrap gap-3">
            <button
              type="submit"
              className="btn-animate btn-primary rounded-full px-6 py-2 text-xs uppercase tracking-[0.2em]"
            >
              Record decision
            </button>
            {changeRequest.status === "approved" && (
              <button
                formAction={implementChangeRequest}
                className="btn-animate btn-secondary rounded-full px-6 py-2 text-xs uppercase tracking-[0.2em]"
              >
                Mark implemented
              </button>
            )}
          </div>
        </form>
      )}
    </div>
  );
}
