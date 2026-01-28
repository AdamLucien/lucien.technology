import { prisma } from "@/lib/prisma";
import { formatDateShort } from "@/lib/format";
import { getOrgScope, requirePortalSession } from "@/lib/portal";
import { StatusBadge } from "@/components/portal/StatusBadge";
import { getAccessBadge, getInvoiceStatusBadge, getMetaBadge } from "@/lib/status-badges";

export default async function BillingPage() {
  const session = await requirePortalSession();
  const scope = getOrgScope(session.user.role, session.user.orgId);

  const [engagements, invoices] = await Promise.all([
    prisma.engagement.findMany({
      where: scope,
      orderBy: { updatedAt: "desc" },
      select: {
        id: true,
        title: true,
        procurementRef: true,
        purchaseOrderRef: true,
        costCenter: true,
      },
    }),
    prisma.invoice.findMany({
      where: scope,
      orderBy: { createdAt: "desc" },
      include: { engagement: true },
    }),
  ]);

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <p className="text-xs uppercase tracking-[0.3em] text-slate">
          Billing
        </p>
        <h1 className="text-2xl font-semibold text-ash">Commercial summary</h1>
        <p className="text-sm text-muted">
          Procurement references and invoices for your active engagements.
        </p>
      </div>

      <div className="rounded-2xl border border-line/80 bg-soft p-6">
        <h2 className="text-sm uppercase tracking-[0.2em] text-slate">
          Engagement references
        </h2>
        {engagements.length === 0 ? (
          <p className="mt-4 text-sm text-muted">
            No engagements yet. Billing references appear once an engagement is
            active.
          </p>
        ) : (
          <div className="mt-4 space-y-3 text-sm text-muted">
            {engagements.map((engagement) => (
              <div
                key={engagement.id}
                className="rounded-xl border border-line/80 bg-ink px-4 py-3"
              >
                <div className="text-ash">{engagement.title}</div>
                <div className="mt-2 grid gap-2 text-xs text-slate md:grid-cols-3">
                  <span>Procurement ref: {engagement.procurementRef ?? "—"}</span>
                  <span>PO ref: {engagement.purchaseOrderRef ?? "—"}</span>
                  <span>Cost center: {engagement.costCenter ?? "—"}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="rounded-2xl border border-line/80 bg-soft p-6">
        <h2 className="text-sm uppercase tracking-[0.2em] text-slate">
          Invoices
        </h2>
        {invoices.length === 0 ? (
          <p className="mt-4 text-sm text-muted">No invoices issued yet.</p>
        ) : (
          <div className="mt-4 space-y-3 text-sm text-muted">
            {invoices.map((invoice) => (
              <div
                key={invoice.id}
                className="rounded-xl border border-line/80 bg-ink px-4 py-3"
              >
                <div className="flex flex-wrap items-center gap-2 text-ash">
                  <span>
                    {invoice.invoiceNumber ?? "Invoice"} · {invoice.currency}
                    {invoice.amountEUR
                      ? ` ${invoice.amountEUR.toLocaleString("en-GB")}`
                      : ""}
                  </span>
                  {(invoice.issueDate || invoice.paidAt) && (
                    <StatusBadge {...getAccessBadge("Locked")} />
                  )}
                </div>
                <div className="mt-2 text-xs text-slate">
                  {invoice.engagement?.title ?? "Engagement"} · Due{" "}
                  {invoice.dueDate ? formatDateShort(invoice.dueDate) : "TBD"}
                </div>
                <div className="mt-2 text-xs text-slate">
                  <span className="mr-2 inline-flex items-center gap-2">
                    <StatusBadge {...getInvoiceStatusBadge(invoice.paidAt)} />
                  </span>
                  <StatusBadge
                    {...getMetaBadge(
                      `PO ${invoice.referencePO ?? invoice.engagement?.purchaseOrderRef ?? "—"}`,
                    )}
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
