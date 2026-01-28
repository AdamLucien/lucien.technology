import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { getServerAuthSession } from "@/lib/auth";
import { logAuditEvent } from "@/lib/audit";
import { createNotifications } from "@/lib/notifications";

const updateSchema = z.object({
  invoiceNumber: z.string().optional().nullable(),
  issueDate: z.string().optional().nullable(),
  dueDate: z.string().optional().nullable(),
  paidAt: z.string().optional().nullable(),
  referencePO: z.string().optional().nullable(),
  currency: z.string().optional().nullable(),
  amountEUR: z.number().int().optional().nullable(),
});

const parseDate = (value?: string | null) => {
  if (!value) return null;
  const parsed = new Date(value);
  return Number.isNaN(parsed.getTime()) ? null : parsed;
};

export async function PATCH(
  request: Request,
  context: { params: Promise<{ id: string }> },
) {
  const session = await getServerAuthSession();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const isStaff =
    session.user.role === "lucien_admin" ||
    session.user.role === "lucien_operator";
  if (!isStaff) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const payload = await request.json();
  const parsed = updateSchema.safeParse(payload);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }

  const { id } = await context.params;
  const invoice = await prisma.invoice.update({
    where: { id },
    data: {
      invoiceNumber: parsed.data.invoiceNumber ?? undefined,
      issueDate: parseDate(parsed.data.issueDate),
      dueDate: parseDate(parsed.data.dueDate),
      paidAt: parseDate(parsed.data.paidAt),
      referencePO: parsed.data.referencePO ?? undefined,
      currency: parsed.data.currency ?? undefined,
      amountEUR: parsed.data.amountEUR ?? undefined,
    },
  });

  await logAuditEvent({
    orgId: invoice.orgId,
    userId: session.user.id,
    action: "invoice_updated",
    resourceType: "invoice",
    resourceId: invoice.id,
  });

  await createNotifications({
    orgId: invoice.orgId,
    recipientRoles: ["org_admin", "org_user"],
    recipientOrgId: invoice.orgId,
    type: "invoice_updated",
    title: "Invoice updated",
    body: `Invoice ${invoice.invoiceNumber ?? invoice.id} updated.`,
    entityType: "invoice",
    entityId: invoice.id,
  });

  return NextResponse.json({ ok: true, item: invoice });
}
