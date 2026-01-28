import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { getServerAuthSession } from "@/lib/auth";
import { getOrgScope } from "@/lib/portal";
import { logAuditEvent } from "@/lib/audit";
import { createNotifications } from "@/lib/notifications";

const createSchema = z.object({
  engagementId: z.string().min(1),
  invoiceNumber: z.string().optional().nullable(),
  issueDate: z.string().optional().nullable(),
  dueDate: z.string().optional().nullable(),
  referencePO: z.string().optional().nullable(),
  currency: z.string().optional().nullable(),
  amountEUR: z.number().int().optional().nullable(),
});

const parseDate = (value?: string | null) => {
  if (!value) return null;
  const parsed = new Date(value);
  return Number.isNaN(parsed.getTime()) ? null : parsed;
};

export async function GET() {
  const session = await getServerAuthSession();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const scope = getOrgScope(session.user.role, session.user.orgId);
  const invoices = await prisma.invoice.findMany({
    where: scope,
    orderBy: { createdAt: "desc" },
    include: {
      engagement: { select: { id: true, title: true, procurementRef: true } },
    },
  });

  return NextResponse.json({ ok: true, items: invoices });
}

export async function POST(request: Request) {
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
  const parsed = createSchema.safeParse(payload);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }

  const engagement = await prisma.engagement.findUnique({
    where: { id: parsed.data.engagementId },
  });

  if (!engagement) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  const invoice = await prisma.invoice.create({
    data: {
      orgId: engagement.orgId,
      engagementId: engagement.id,
      invoiceNumber: parsed.data.invoiceNumber ?? null,
      issueDate: parseDate(parsed.data.issueDate),
      dueDate: parseDate(parsed.data.dueDate),
      referencePO: parsed.data.referencePO ?? engagement.purchaseOrderRef ?? null,
      currency: parsed.data.currency ?? "EUR",
      amountEUR: parsed.data.amountEUR ?? null,
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

  return NextResponse.json({ ok: true, item: invoice }, { status: 201 });
}
