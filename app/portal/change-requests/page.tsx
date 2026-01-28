import Link from "next/link";
import { redirect } from "next/navigation";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { formatDateShort } from "@/lib/format";
import { getOrgScope, requirePortalSession } from "@/lib/portal";
import { logAuditEvent } from "@/lib/audit";
import { createNotifications } from "@/lib/notifications";
import { StatusBadge } from "@/components/portal/StatusBadge";
import {
  getChangeStatusBadge,
  getImpactBadge,
  getMetaBadge,
  getSeverityBadge,
} from "@/lib/status-badges";

export default async function ChangeRequestsPage({
  searchParams,
}: {
  searchParams: Promise<{
    title?: string | string[];
    description?: string | string[];
    editEventId?: string | string[];
  }>;
}) {
  const resolvedSearchParams = await searchParams;
  const prefillTitle = Array.isArray(resolvedSearchParams.title)
    ? resolvedSearchParams.title[0]
    : resolvedSearchParams.title;
  const prefillDescription = Array.isArray(resolvedSearchParams.description)
    ? resolvedSearchParams.description[0]
    : resolvedSearchParams.description;
  const editEventId = Array.isArray(resolvedSearchParams.editEventId)
    ? resolvedSearchParams.editEventId[0]
    : resolvedSearchParams.editEventId;

  const session = await requirePortalSession();
  const scope = getOrgScope(session.user.role, session.user.orgId);
  const isStaff =
    session.user.role === "lucien_admin" ||
    session.user.role === "lucien_operator";

  const [changeRequests, engagements] = await Promise.all([
    prisma.changeRequest.findMany({
      where: scope,
      include: { engagement: true },
      orderBy: { createdAt: "desc" },
    }),
    prisma.engagement.findMany({
      where: scope,
      orderBy: { updatedAt: "desc" },
      select: { id: true, title: true },
    }),
  ]);

  async function createChangeRequest(formData: FormData) {
    "use server";

    const session = await requirePortalSession();
    const scope = getOrgScope(session.user.role, session.user.orgId);
    const isStaff =
      session.user.role === "lucien_admin" ||
      session.user.role === "lucien_operator";

    const schema = z.object({
      engagementId: z.string().min(1),
      title: z.string().min(3),
      description: z.string().min(10),
      impact: z.enum(["scope", "schedule", "cost", "risk"]),
      severity: z.enum(["low", "med", "high"]),
    });

    const parsed = schema.safeParse({
      engagementId: formData.get("engagementId"),
      title: formData.get("title"),
      description: formData.get("description"),
      impact: formData.get("impact"),
      severity: formData.get("severity"),
    });

    if (!parsed.success) {
      return;
    }

    const engagement = await prisma.engagement.findFirst({
      where: { ...scope, id: parsed.data.engagementId },
    });

    if (!engagement) {
      return;
    }

    const changeRequest = await prisma.changeRequest.create({
      data: {
        orgId: engagement.orgId,
        engagementId: engagement.id,
        createdByUserId: session.user.id,
        title: parsed.data.title,
        description: parsed.data.description,
        impact: parsed.data.impact,
        severity: parsed.data.severity,
        status: "proposed",
        requestedAt: new Date(),
      },
    });

    const editEventIdValue = formData.get("editEventId");
    if (typeof editEventIdValue === "string" && editEventIdValue.length > 0) {
      await prisma.editEvent.updateMany({
        where: { id: editEventIdValue, orgId: engagement.orgId },
        data: { linkedChangeRequestId: changeRequest.id },
      });
    }

    await logAuditEvent({
      orgId: engagement.orgId,
      userId: session.user.id,
      action: "change_request_created",
      resourceType: "change_request",
      resourceId: changeRequest.id,
    });

    if (isStaff) {
      await createNotifications({
        orgId: engagement.orgId,
        recipientRoles: ["org_admin", "org_user"],
        recipientOrgId: engagement.orgId,
        type: "change_request_created",
        title: "Change request created",
        body: `Change request submitted: ${changeRequest.title}`,
        entityType: "change_request",
        entityId: changeRequest.id,
      });
    } else {
      await createNotifications({
        orgId: engagement.orgId,
        recipientRoles: ["lucien_admin", "lucien_operator"],
        type: "change_request_created",
        title: "New change request",
        body: `Client submitted: ${changeRequest.title}`,
        entityType: "change_request",
        entityId: changeRequest.id,
      });
    }

    redirect("/portal/change-requests");
  }

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <p className="text-xs uppercase tracking-[0.3em] text-slate">
          Change requests
        </p>
        <h1 className="text-2xl font-semibold text-ash">Scope changes</h1>
        <p className="text-sm text-muted">
          Any changes require a Change Request approval before scope, schedule,
          or cost adjustments are enacted.
        </p>
      </div>

      <form
        action={createChangeRequest}
        className="rounded-2xl border border-line/80 bg-soft p-6 space-y-4"
      >
        <h2 className="text-sm uppercase tracking-[0.2em] text-slate">
          Submit a change request
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <label className="space-y-2 text-sm text-slate">
            Engagement
            <select
              name="engagementId"
              required
              className="w-full rounded-xl border border-line bg-ink px-4 py-2 text-ash"
            >
              <option value="">Select an engagement</option>
              {engagements.map((engagement) => (
                <option key={engagement.id} value={engagement.id}>
                  {engagement.title}
                </option>
              ))}
            </select>
          </label>
          <label className="space-y-2 text-sm text-slate">
            Title
            <input
              name="title"
              required
              minLength={3}
              className="w-full rounded-xl border border-line bg-ink px-4 py-2 text-ash"
              placeholder="Short summary of the change"
              defaultValue={prefillTitle ?? ""}
            />
          </label>
        </div>
        <label className="space-y-2 text-sm text-slate">
          Description
          <textarea
            name="description"
            required
            minLength={10}
            rows={3}
            className="w-full rounded-xl border border-line bg-ink px-4 py-2 text-ash"
            placeholder="Describe the change, drivers, and constraints."
            defaultValue={prefillDescription ?? ""}
          />
        </label>
        {editEventId && (
          <input type="hidden" name="editEventId" value={editEventId} />
        )}
        <div className="grid gap-4 md:grid-cols-2">
          <label className="space-y-2 text-sm text-slate">
            Impact
            <select
              name="impact"
              required
              className="w-full rounded-xl border border-line bg-ink px-4 py-2 text-ash"
            >
              <option value="scope">Scope</option>
              <option value="schedule">Schedule</option>
              <option value="cost">Cost</option>
              <option value="risk">Risk</option>
            </select>
          </label>
          <label className="space-y-2 text-sm text-slate">
            Severity
            <select
              name="severity"
              required
              className="w-full rounded-xl border border-line bg-ink px-4 py-2 text-ash"
            >
              <option value="low">Low</option>
              <option value="med">Medium</option>
              <option value="high">High</option>
            </select>
          </label>
        </div>
        <button
          type="submit"
          className="btn-animate btn-primary rounded-full px-6 py-2 text-xs uppercase tracking-[0.2em]"
        >
          Submit request
        </button>
      </form>

      {changeRequests.length === 0 ? (
        <div className="rounded-2xl border border-line/80 bg-soft p-6 text-sm text-muted">
          No change requests submitted yet.
        </div>
      ) : (
        <div className="space-y-3">
          {changeRequests.map((request) => (
            <Link
              key={request.id}
              href={`/portal/change-requests/${request.id}`}
              className="card-animate flex flex-col gap-3 rounded-2xl border border-line/80 bg-soft p-5 transition hover:border-slate md:flex-row md:items-center md:justify-between"
            >
              <div>
                <div className="text-lg font-semibold text-ash">
                  {request.title}
                </div>
                <div className="text-xs text-slate">
                  {request.engagement?.title ?? "Engagement"}
                </div>
              </div>
              <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.2em]">
                <StatusBadge {...getChangeStatusBadge(request.status)} />
                <StatusBadge {...getImpactBadge(request.impact)} />
                <StatusBadge {...getSeverityBadge(request.severity)} />
                <StatusBadge
                  {...getMetaBadge(formatDateShort(request.createdAt))}
                />
              </div>
            </Link>
          ))}
        </div>
      )}

      {!isStaff && (
        <div className="rounded-2xl border border-line/80 bg-soft p-6 text-sm text-muted">
          For urgent schedule or scope changes, submit a change request and we
          will confirm next steps within two business days.
        </div>
      )}
    </div>
  );
}
