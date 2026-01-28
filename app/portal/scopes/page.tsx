import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { formatDateShort } from "@/lib/format";
import { getOrgScope, requirePortalSession } from "@/lib/portal";
import { StatusBadge } from "@/components/portal/StatusBadge";
import { getScopeStatusBadge, getMetaBadge } from "@/lib/status-badges";

export default async function ScopeListPage() {
  const session = await requirePortalSession();
  const scope = getOrgScope(session.user.role, session.user.orgId);

  const scopes = await prisma.scopeProposal.findMany({
    where: scope,
    orderBy: { createdAt: "desc" },
    include: { inquiry: true, engagement: true },
  });

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <p className="text-xs uppercase tracking-[0.3em] text-slate">Scopes</p>
        <h1 className="text-2xl font-semibold text-ash">Scope proposals</h1>
        <p className="text-sm text-muted">
          Paid scope proposals with fixed pricing and defined deliverables.
        </p>
      </div>

      {scopes.length === 0 ? (
        <div className="rounded-2xl border border-line/80 bg-soft p-6 text-sm text-muted">
          No scope proposals yet.
        </div>
      ) : (
        <div className="space-y-3">
          {scopes.map((scopeItem) => (
            <Link
              key={scopeItem.id}
              href={`/portal/scopes/${scopeItem.id}`}
              className="card-animate flex flex-col gap-3 rounded-2xl border border-line/80 bg-soft p-5 transition hover:border-slate md:flex-row md:items-center md:justify-between"
            >
              <div>
                <div className="text-lg font-semibold text-ash">
                  {scopeItem.title}
                </div>
                <div className="text-xs text-slate">
                  {scopeItem.inquiry?.organization ?? scopeItem.engagement?.title ?? "Scope proposal"}
                </div>
              </div>
              <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.2em]">
                <StatusBadge {...getScopeStatusBadge(scopeItem.status)} />
                <StatusBadge
                  {...getMetaBadge(`€${scopeItem.fixedPriceEUR.toLocaleString("en-US")}`)}
                />
                <StatusBadge
                  {...getMetaBadge(formatDateShort(scopeItem.createdAt))}
                />
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
