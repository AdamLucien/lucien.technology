import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { formatDateShort } from "@/lib/format";
import { getOrgScope, requirePortalSession } from "@/lib/portal";
import { StatusBadge } from "@/components/portal/StatusBadge";
import {
  getEngagementStageBadge,
  getEngagementStatusBadge,
  getMetaBadge,
} from "@/lib/status-badges";

export default async function EngagementListPage() {
  const session = await requirePortalSession();
  const scope = getOrgScope(session.user.role, session.user.orgId);

  const engagements = await prisma.engagement.findMany({
    where: scope,
    orderBy: { updatedAt: "desc" },
  });

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <p className="text-xs uppercase tracking-[0.3em] text-slate">
          Engagements
        </p>
        <h1 className="text-2xl font-semibold text-ash">Active engagements</h1>
        <p className="text-sm text-muted">
          Each engagement reflects a scoped delivery with stage and status
          tracking.
        </p>
      </div>

      {engagements.length === 0 ? (
        <div className="rounded-2xl border border-line/80 bg-soft p-6 text-sm text-muted">
          No engagements yet. Once a scope request is converted, it will appear
          here.
        </div>
      ) : (
        <div className="space-y-3">
          {engagements.map((engagement) => (
            <Link
              key={engagement.id}
              href={`/portal/engagements/${engagement.id}`}
              className="card-animate flex flex-col gap-3 rounded-2xl border border-line/80 bg-soft p-5 transition hover:border-slate md:flex-row md:items-center md:justify-between"
            >
              <div>
                <div className="text-lg font-semibold text-ash">
                  {engagement.title}
                </div>
                <div className="text-xs text-slate">
                  {engagement.serviceSlug ?? "General engagement"}
                </div>
              </div>
              <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.2em]">
                <StatusBadge {...getEngagementStageBadge(engagement.stage)} />
                <StatusBadge {...getEngagementStatusBadge(engagement.status)} />
                <StatusBadge
                  {...getMetaBadge(`Updated ${formatDateShort(engagement.updatedAt)}`)}
                />
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
