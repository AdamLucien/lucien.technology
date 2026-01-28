import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { formatBytes, formatDateShort } from "@/lib/format";
import { getOrgScope, requirePortalSession } from "@/lib/portal";
import { StatusLegend } from "@/components/portal/StatusLegend";

export default async function PortalDashboardPage() {
  const session = await requirePortalSession();
  const scope = getOrgScope(session.user.role, session.user.orgId);

  const [
    engagementCount,
    documentCount,
    recentDocuments,
    recentEvents,
    pendingDeliverables,
    pendingScopes,
    engagementInputs,
  ] = await Promise.all([
    prisma.engagement.count({ where: scope }),
    prisma.document.count({ where: scope }),
    prisma.document.findMany({
      where: scope,
      orderBy: { createdAt: "desc" },
      take: 5,
      include: { engagement: true },
    }),
    prisma.auditEvent.findMany({
      where: scope,
      orderBy: { createdAt: "desc" },
      take: 6,
    }),
    prisma.deliverable.findMany({
      where: { ...scope, status: "review" },
      orderBy: { createdAt: "desc" },
      take: 5,
      include: { engagement: true },
    }),
    prisma.scopeProposal.findMany({
      where: { ...scope, status: "sent" },
      orderBy: { createdAt: "desc" },
      take: 3,
    }),
    prisma.engagement.findMany({
      where: scope,
      include: {
        documents: { where: { category: "client_input" }, select: { id: true } },
      },
    }),
  ]);

  const missingInputs = engagementInputs.filter(
    (engagement) => engagement.documents.length === 0,
  );

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <p className="text-xs uppercase tracking-[0.3em] text-slate">
          Dashboard
        </p>
        <h1 className="text-2xl font-semibold text-ash">Client overview</h1>
        <p className="text-sm text-muted">
          Track engagements, documents, and recent activity in one place.
        </p>
      </div>

      <StatusLegend />

      <div className="grid gap-4 md:grid-cols-3">
        {[
          {
            label: "Active engagements",
            value: engagementCount,
            hint: "Current delivery stages",
            href: "/portal/engagements",
          },
          {
            label: "Documents",
            value: documentCount,
            hint: "NDAs, SOWs, deliverables",
            href: "/portal/documents",
          },
          {
            label: "Recent activity",
            value: recentEvents.length,
            hint: "Latest portal actions",
            href: "/portal/engagements",
          },
        ].map((card) => (
          <Link
            key={card.label}
            href={card.href}
            className="card-animate rounded-2xl border border-line/80 bg-soft p-5 transition hover:border-slate"
          >
            <div className="text-xs uppercase tracking-[0.2em] text-slate">
              {card.label}
            </div>
            <div className="mt-3 text-2xl font-semibold text-ash">
              {card.value}
            </div>
            <p className="mt-2 text-xs text-muted">{card.hint}</p>
          </Link>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-line/80 bg-soft p-6">
          <h2 className="text-sm uppercase tracking-[0.2em] text-slate">
            Recent documents
          </h2>
          {recentDocuments.length === 0 ? (
            <p className="mt-4 text-sm text-muted">
              No documents uploaded yet. Engagement files will appear here once
              added.
            </p>
          ) : (
            <div className="mt-4 space-y-3 text-sm text-muted">
              {recentDocuments.map((doc) => (
                <div
                  key={doc.id}
                  className="flex items-center justify-between gap-4 rounded-xl border border-line/80 bg-ink px-4 py-3"
                >
                  <div>
                    <div className="text-ash">{doc.name}</div>
                    <div className="text-xs text-slate">
                      {doc.engagement?.title ?? "Document"} · {doc.category}
                    </div>
                  </div>
                  <div className="text-xs text-slate">
                    {formatBytes(doc.size)} · {formatDateShort(doc.createdAt)}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="rounded-2xl border border-line/80 bg-soft p-6">
          <h2 className="text-sm uppercase tracking-[0.2em] text-slate">
            Recent activity
          </h2>
          {recentEvents.length === 0 ? (
            <p className="mt-4 text-sm text-muted">
              No activity logged yet. Actions will appear as the portal is used.
            </p>
          ) : (
            <ul className="mt-4 space-y-3 text-sm text-muted">
              {recentEvents.map((event) => (
                <li
                  key={event.id}
                  className="flex items-center justify-between gap-4 rounded-xl border border-line/80 bg-ink px-4 py-3"
                >
                  <div>
                    <div className="text-ash">{event.action}</div>
                    <div className="text-xs text-slate">
                      {event.resourceType}
                    </div>
                  </div>
                  <div className="text-xs text-slate">
                    {formatDateShort(event.createdAt)}
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="rounded-2xl border border-line/80 bg-soft p-6">
        <h2 className="text-sm uppercase tracking-[0.2em] text-slate">
          Action required
        </h2>
        {pendingDeliverables.length === 0 &&
        missingInputs.length === 0 &&
        pendingScopes.length === 0 ? (
          <p className="mt-4 text-sm text-muted">
            No pending approvals or missing inputs right now.
          </p>
        ) : (
          <div className="mt-4 space-y-3 text-sm text-muted">
            {pendingScopes.map((scopeProposal) => (
              <div
                key={scopeProposal.id}
                className="rounded-xl border border-line/80 bg-ink px-4 py-3"
              >
                <div className="text-ash">Review scope proposal</div>
                <div className="text-xs text-slate">
                  Scope proposal {scopeProposal.title ?? "pending"} is ready for review.
                </div>
              </div>
            ))}
            {pendingDeliverables.map((deliverable) => (
              <div
                key={deliverable.id}
                className="rounded-xl border border-line/80 bg-ink px-4 py-3"
              >
                <div className="text-ash">
                  Approval needed: {deliverable.title}
                </div>
                <div className="text-xs text-slate">
                  {deliverable.engagement?.title ?? "Engagement deliverable"}
                </div>
              </div>
            ))}
            {missingInputs.map((engagement) => (
              <div
                key={engagement.id}
                className="rounded-xl border border-line/80 bg-ink px-4 py-3"
              >
                <div className="text-ash">
                  Client input requested for {engagement.title}
                </div>
                <div className="text-xs text-slate">
                  Upload requirements or evidence to proceed.
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
