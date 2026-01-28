import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { getServerAuthSession } from "@/lib/auth";
import { logAuditEvent } from "@/lib/audit";
import { createNotifications } from "@/lib/notifications";

const billingSchema = z.object({
  engagementId: z.string().min(1),
  procurementRef: z.string().optional().nullable(),
  purchaseOrderRef: z.string().optional().nullable(),
  costCenter: z.string().optional().nullable(),
});

export async function PATCH(request: Request) {
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
  const parsed = billingSchema.safeParse(payload);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }

  const engagement = await prisma.engagement.update({
    where: { id: parsed.data.engagementId },
    data: {
      procurementRef: parsed.data.procurementRef ?? null,
      purchaseOrderRef: parsed.data.purchaseOrderRef ?? null,
      costCenter: parsed.data.costCenter ?? null,
    },
  });

  await logAuditEvent({
    orgId: engagement.orgId,
    userId: session.user.id,
    action: "billing_metadata_updated",
    resourceType: "engagement",
    resourceId: engagement.id,
  });

  await createNotifications({
    orgId: engagement.orgId,
    recipientRoles: ["org_admin", "org_user"],
    recipientOrgId: engagement.orgId,
    type: "billing_updated",
    title: "Billing metadata updated",
    body: `Commercial metadata updated for ${engagement.title}.`,
    entityType: "engagement",
    entityId: engagement.id,
  });

  return NextResponse.json({ ok: true, item: engagement });
}
