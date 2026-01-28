import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { formatDateShort } from "@/lib/format";
import { getOrgScope, requirePortalSession } from "@/lib/portal";
import { EditEventActions } from "@/components/portal/EditEventActions";

type DiffEntry = { field?: string; from?: unknown; to?: unknown };

export default async function EditEventDetailPage({
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

  const editEvent = await prisma.editEvent.findFirst({
    where: { ...scope, id },
    include: { createdBy: true, linkedChangeRequest: true },
  });

  if (!editEvent) {
    notFound();
  }

  const diff = Array.isArray(editEvent.diffJson)
    ? (editEvent.diffJson as DiffEntry[])
    : [];

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <p className="text-xs uppercase tracking-[0.3em] text-slate">Edit</p>
        <h1 className="text-2xl font-semibold text-ash">
          {editEvent.entityType.replace("_", " ")} ·{" "}
          {editEvent.kind.replace("_", " ")}
        </h1>
        <p className="text-sm text-muted">{editEvent.reason}</p>
      </div>

      <div className="rounded-2xl border border-line/80 bg-soft p-6">
        <div className="grid gap-4 md:grid-cols-3">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-slate">
              Status
            </div>
            <div className="mt-2 text-ash">{editEvent.status}</div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-slate">
              Created
            </div>
            <div className="mt-2 text-ash">
              {formatDateShort(editEvent.createdAt)}
            </div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-slate">
              Requested by
            </div>
            <div className="mt-2 text-ash">
              {editEvent.createdBy?.email ?? "System"}
            </div>
          </div>
        </div>
        {editEvent.linkedChangeRequestId && (
          <div className="mt-4 text-sm text-muted">
            Linked change request:{" "}
            <Link
              href={`/portal/change-requests/${editEvent.linkedChangeRequestId}`}
              className="text-ash underline"
            >
              View change request
            </Link>
          </div>
        )}
      </div>

      <div className="rounded-2xl border border-line/80 bg-soft p-6">
        <h2 className="text-sm uppercase tracking-[0.2em] text-slate">
          Diff
        </h2>
        {diff.length === 0 ? (
          <p className="mt-3 text-sm text-muted">No diff recorded.</p>
        ) : (
          <div className="mt-4 space-y-3 text-sm text-muted">
            {diff.map((entry, index) => (
              <div
                key={`${entry.field ?? "field"}-${index}`}
                className="rounded-xl border border-line/80 bg-ink px-4 py-3"
              >
                <div className="text-xs uppercase tracking-[0.2em] text-slate">
                  {entry.field}
                </div>
                <div className="mt-2 grid gap-2 md:grid-cols-2">
                  <div>
                    <div className="text-xs text-slate">From</div>
                    <div className="text-ash">
                      {entry.from === null || entry.from === undefined
                        ? "—"
                        : String(entry.from)}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-slate">To</div>
                    <div className="text-ash">
                      {entry.to === null || entry.to === undefined
                        ? "—"
                        : String(entry.to)}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <EditEventActions
        editEventId={editEvent.id}
        status={editEvent.status}
        isStaff={isStaff}
      />
    </div>
  );
}
