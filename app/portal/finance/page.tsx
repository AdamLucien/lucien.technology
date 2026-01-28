import { redirect } from "next/navigation";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { formatDateShort } from "@/lib/format";
import { requireLucienStaff, requirePortalSession } from "@/lib/portal";
import { logAuditEvent } from "@/lib/audit";
import { createNotifications } from "@/lib/notifications";
import { StatusBadge } from "@/components/portal/StatusBadge";
import { getAccessBadge, getInvoiceStatusBadge, getMetaBadge } from "@/lib/status-badges";

const parseDate = (value?: string | null) => {
  if (!value) return null;
  const parsed = new Date(value);
  return Number.isNaN(parsed.getTime()) ? null : parsed;
};

export default async function FinancePage() {
  const session = await requirePortalSession();
  requireLucienStaff(session.user.role);

  const [engagements, invoices] = await Promise.all([
    prisma.engagement.findMany({
      orderBy: { updatedAt: "desc" },
      select: { id: true, title: true, orgId: true, purchaseOrderRef: true },
    }),
    prisma.invoice.findMany({
      orderBy: { createdAt: "desc" },
      include: { engagement: true },
    }),
  ]);

  async function createInvoice(formData: FormData) {
    "use server";

    const session = await requirePortalSession();
    requireLucienStaff(session.user.role);

    const schema = z.object({
      engagementId: z.string().min(1),
      invoiceNumber: z.string().optional().nullable(),
      issueDate: z.string().optional().nullable(),
      dueDate: z.string().optional().nullable(),
      referencePO: z.string().optional().nullable(),
      amountEUR: z.string().optional().nullable(),
    });

    const parsed = schema.parse({
      engagementId: formData.get("engagementId"),
      invoiceNumber: formData.get("invoiceNumber"),
      issueDate: formData.get("issueDate"),
      dueDate: formData.get("dueDate"),
      referencePO: formData.get("referencePO"),
      amountEUR: formData.get("amountEUR"),
    });

    const engagement = await prisma.engagement.findUnique({
      where: { id: parsed.engagementId },
    });

    if (!engagement) {
      return;
    }

    const amountEUR = parsed.amountEUR
      ? Number.parseInt(parsed.amountEUR, 10)
      : null;

    const invoice = await prisma.invoice.create({
      data: {
        orgId: engagement.orgId,
        engagementId: engagement.id,
        invoiceNumber: parsed.invoiceNumber ?? null,
        issueDate: parseDate(parsed.issueDate),
        dueDate: parseDate(parsed.dueDate),
        referencePO: parsed.referencePO ?? engagement.purchaseOrderRef ?? null,
        currency: "EUR",
        amountEUR,
      },
    });

    await logAuditEvent({
      orgId: engagement.orgId,
      userId: session.user.id,
      action: "invoice_created",
      resourceType: "invoice",
      resourceId: invoice.id,
    });

    await createNotifications({
      orgId: engagement.orgId,
      recipientRoles: ["org_admin", "org_user"],
      recipientOrgId: engagement.orgId,
      type: "invoice_created",
      title: "Invoice issued",
      body: `Invoice ${invoice.invoiceNumber ?? invoice.id} issued for ${engagement.title}.`,
      entityType: "invoice",
      entityId: invoice.id,
    });

    redirect("/portal/finance");
  }

  async function markInvoicePaid(formData: FormData) {
    "use server";

    const session = await requirePortalSession();
    requireLucienStaff(session.user.role);

    const schema = z.object({
      invoiceId: z.string().min(1),
    });

    const parsed = schema.parse({
      invoiceId: formData.get("invoiceId"),
    });

    const invoice = await prisma.invoice.update({
      where: { id: parsed.invoiceId },
      data: { paidAt: new Date() },
    });

    await logAuditEvent({
      orgId: invoice.orgId,
      userId: session.user.id,
      action: "invoice_paid",
      resourceType: "invoice",
      resourceId: invoice.id,
    });

    await createNotifications({
      orgId: invoice.orgId,
      recipientRoles: ["org_admin", "org_user"],
      recipientOrgId: invoice.orgId,
      type: "invoice_paid",
      title: "Invoice marked paid",
      body: `Invoice ${invoice.invoiceNumber ?? invoice.id} marked as paid.`,
      entityType: "invoice",
      entityId: invoice.id,
    });

    redirect("/portal/finance");
  }

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <p className="text-xs uppercase tracking-[0.3em] text-slate">Finance</p>
        <h1 className="text-2xl font-semibold text-ash">Invoices</h1>
        <p className="text-sm text-muted">
          Create and update invoices tied to engagements and procurement
          references.
        </p>
      </div>

      <form
        action={createInvoice}
        className="rounded-2xl border border-line/80 bg-soft p-6 space-y-4"
      >
        <h2 className="text-sm uppercase tracking-[0.2em] text-slate">
          Issue invoice
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <label className="space-y-2 text-sm text-slate">
            Engagement
            <select
              name="engagementId"
              required
              className="w-full rounded-xl border border-line bg-ink px-4 py-2 text-ash"
            >
              <option value="">Select engagement</option>
              {engagements.map((engagement) => (
                <option key={engagement.id} value={engagement.id}>
                  {engagement.title}
                </option>
              ))}
            </select>
          </label>
          <label className="space-y-2 text-sm text-slate">
            Invoice number
            <input
              name="invoiceNumber"
              className="w-full rounded-xl border border-line bg-ink px-4 py-2 text-ash"
            />
          </label>
          <label className="space-y-2 text-sm text-slate">
            Issue date
            <input
              name="issueDate"
              type="date"
              className="w-full rounded-xl border border-line bg-ink px-4 py-2 text-ash"
            />
          </label>
          <label className="space-y-2 text-sm text-slate">
            Due date
            <input
              name="dueDate"
              type="date"
              className="w-full rounded-xl border border-line bg-ink px-4 py-2 text-ash"
            />
          </label>
          <label className="space-y-2 text-sm text-slate">
            Reference PO
            <input
              name="referencePO"
              className="w-full rounded-xl border border-line bg-ink px-4 py-2 text-ash"
            />
          </label>
          <label className="space-y-2 text-sm text-slate">
            Amount (EUR)
            <input
              name="amountEUR"
              type="number"
              className="w-full rounded-xl border border-line bg-ink px-4 py-2 text-ash"
            />
          </label>
        </div>
        <button
          type="submit"
          className="btn-animate btn-primary rounded-full px-6 py-2 text-xs uppercase tracking-[0.2em]"
        >
          Create invoice
        </button>
      </form>

      <div className="rounded-2xl border border-line/80 bg-soft p-6">
        <h2 className="text-sm uppercase tracking-[0.2em] text-slate">
          Issued invoices
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
                  {invoice.engagement?.title ?? "Engagement"} · Issued{" "}
                  {invoice.issueDate ? formatDateShort(invoice.issueDate) : "TBD"}
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
                {!invoice.paidAt && (
                  <form action={markInvoicePaid} className="mt-3">
                    <input type="hidden" name="invoiceId" value={invoice.id} />
                    <button
                      type="submit"
                      className="btn-animate btn-secondary rounded-full px-4 py-2 text-xs uppercase tracking-[0.2em]"
                    >
                      Mark paid
                    </button>
                  </form>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
