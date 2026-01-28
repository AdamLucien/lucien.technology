import { NextResponse } from "next/server";
import { z } from "zod";
import { getServerAuthSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { logAuditEvent } from "@/lib/audit";
import { createNotifications } from "@/lib/notifications";

const bodySchema = z.object({
  entityType: z.enum([
    "engagement",
    "scope",
    "change_request",
    "invoice",
    "document",
    "deliverable",
    "milestone",
    "edit_event",
    "notification",
    "audit_event",
    "inquiry",
  ]),
  entityId: z.string().min(1),
  reason: z.string().min(5),
  confirm: z.string().min(1),
});

const confirmationPhrase = "DELETE FOREVER";

export async function POST(request: Request) {
  const session = await getServerAuthSession();
  if (!session?.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  if (session.user.role !== "lucien_admin") {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const payload = await request.json().catch(() => null);
  const parsed = bodySchema.safeParse(payload);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }

  if (parsed.data.confirm !== confirmationPhrase) {
    return NextResponse.json({ error: "Confirmation phrase mismatch" }, { status: 400 });
  }

  const { entityType, entityId, reason } = parsed.data;
  let orgId: string | null = null;

  if (entityType === "engagement") {
    const engagement = await prisma.engagement.findUnique({
      where: { id: entityId },
    });
    if (!engagement) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }
    orgId = engagement.orgId;

    const changeRequests = await prisma.changeRequest.findMany({
      where: { engagementId: entityId },
      select: { id: true },
    });
    const changeRequestIds = changeRequests.map((item) => item.id);

    await prisma.$transaction([
      ...(changeRequestIds.length > 0
        ? [
            prisma.editEvent.deleteMany({
              where: { linkedChangeRequestId: { in: changeRequestIds } },
            }),
            prisma.editEvent.deleteMany({
              where: {
                entityType: "change_request",
                entityId: { in: changeRequestIds },
              },
            }),
            prisma.notification.deleteMany({
              where: {
                entityType: "change_request",
                entityId: { in: changeRequestIds },
              },
            }),
          ]
        : []),
      prisma.changeRequest.deleteMany({ where: { engagementId: entityId } }),
      prisma.editEvent.deleteMany({
        where: { entityType: "engagement", entityId },
      }),
      prisma.notification.deleteMany({
        where: { entityType: "engagement", entityId },
      }),
      prisma.auditEvent.deleteMany({
        where: { resourceType: "engagement", resourceId: entityId },
      }),
      prisma.invoice.deleteMany({ where: { engagementId: entityId } }),
      prisma.scopeProposal.deleteMany({ where: { engagementId: entityId } }),
      prisma.milestone.deleteMany({ where: { engagementId: entityId } }),
      prisma.deliverable.deleteMany({ where: { engagementId: entityId } }),
      prisma.document.deleteMany({ where: { engagementId: entityId } }),
      prisma.engagement.delete({ where: { id: entityId } }),
    ]);
  }

  if (entityType === "scope") {
    const scope = await prisma.scopeProposal.findUnique({
      where: { id: entityId },
    });
    if (!scope) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }
    orgId = scope.orgId;
    await prisma.$transaction([
      prisma.invoice.deleteMany({ where: { scopeProposalId: entityId } }),
      prisma.editEvent.deleteMany({ where: { entityType: "scope", entityId } }),
      prisma.notification.deleteMany({ where: { entityType: "scope", entityId } }),
      prisma.auditEvent.deleteMany({
        where: { resourceType: "scope", resourceId: entityId },
      }),
      prisma.scopeProposal.delete({ where: { id: entityId } }),
    ]);
  }

  if (entityType === "change_request") {
    const changeRequest = await prisma.changeRequest.findUnique({
      where: { id: entityId },
    });
    if (!changeRequest) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }
    orgId = changeRequest.orgId;
    await prisma.$transaction([
      prisma.editEvent.deleteMany({
        where: { linkedChangeRequestId: entityId },
      }),
      prisma.editEvent.deleteMany({
        where: { entityType: "change_request", entityId },
      }),
      prisma.notification.deleteMany({
        where: { entityType: "change_request", entityId },
      }),
      prisma.auditEvent.deleteMany({
        where: { resourceType: "change_request", resourceId: entityId },
      }),
      prisma.changeRequest.delete({ where: { id: entityId } }),
    ]);
  }

  if (entityType === "invoice") {
    const invoice = await prisma.invoice.findUnique({
      where: { id: entityId },
    });
    if (!invoice) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }
    orgId = invoice.orgId;
    await prisma.$transaction([
      prisma.editEvent.deleteMany({
        where: { entityType: "invoice", entityId },
      }),
      prisma.notification.deleteMany({
        where: { entityType: "invoice", entityId },
      }),
      prisma.auditEvent.deleteMany({
        where: { resourceType: "invoice", resourceId: entityId },
      }),
      prisma.invoice.delete({ where: { id: entityId } }),
    ]);
  }

  if (entityType === "document") {
    const document = await prisma.document.findUnique({
      where: { id: entityId },
    });
    if (!document) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }
    orgId = document.orgId;
    await prisma.$transaction([
      prisma.deliverable.updateMany({
        where: { documentId: entityId },
        data: { documentId: null },
      }),
      prisma.editEvent.deleteMany({
        where: { entityType: "document", entityId },
      }),
      prisma.notification.deleteMany({
        where: { entityType: "document", entityId },
      }),
      prisma.auditEvent.deleteMany({
        where: { resourceType: "document", resourceId: entityId },
      }),
      prisma.document.delete({ where: { id: entityId } }),
    ]);
  }

  if (entityType === "deliverable") {
    const deliverable = await prisma.deliverable.findUnique({
      where: { id: entityId },
    });
    if (!deliverable) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }
    orgId = deliverable.orgId;
    await prisma.$transaction([
      prisma.editEvent.deleteMany({
        where: { entityType: "deliverable", entityId },
      }),
      prisma.notification.deleteMany({
        where: { entityType: "deliverable", entityId },
      }),
      prisma.auditEvent.deleteMany({
        where: { resourceType: "deliverable", resourceId: entityId },
      }),
      prisma.deliverable.delete({ where: { id: entityId } }),
    ]);
  }

  if (entityType === "milestone") {
    const milestone = await prisma.milestone.findUnique({
      where: { id: entityId },
    });
    if (!milestone) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }
    orgId = milestone.orgId;
    await prisma.$transaction([
      prisma.editEvent.deleteMany({
        where: { entityType: "milestone", entityId },
      }),
      prisma.notification.deleteMany({
        where: { entityType: "milestone", entityId },
      }),
      prisma.auditEvent.deleteMany({
        where: { resourceType: "milestone", resourceId: entityId },
      }),
      prisma.milestone.delete({ where: { id: entityId } }),
    ]);
  }

  if (entityType === "edit_event") {
    const editEvent = await prisma.editEvent.findUnique({
      where: { id: entityId },
    });
    if (!editEvent) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }
    orgId = editEvent.orgId;
    await prisma.$transaction([
      prisma.notification.deleteMany({
        where: { entityType: "edit_event", entityId },
      }),
      prisma.auditEvent.deleteMany({
        where: { resourceType: "edit_event", resourceId: entityId },
      }),
      prisma.editEvent.delete({ where: { id: entityId } }),
    ]);
  }

  if (entityType === "notification") {
    const notification = await prisma.notification.findUnique({
      where: { id: entityId },
    });
    if (!notification) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }
    orgId = notification.orgId;
    await prisma.$transaction([
      prisma.auditEvent.deleteMany({
        where: { resourceType: "notification", resourceId: entityId },
      }),
      prisma.notification.delete({ where: { id: entityId } }),
    ]);
  }

  if (entityType === "audit_event") {
    const auditEvent = await prisma.auditEvent.findUnique({
      where: { id: entityId },
    });
    if (!auditEvent) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }
    orgId = auditEvent.orgId;
    await prisma.auditEvent.delete({ where: { id: entityId } });
  }

  if (entityType === "inquiry") {
    const inquiry = await prisma.inquiry.findUnique({
      where: { id: entityId },
    });
    if (!inquiry) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }
    orgId = inquiry.orgId;
    await prisma.$transaction([
      prisma.notification.deleteMany({
        where: { entityType: "inquiry", entityId },
      }),
      prisma.auditEvent.deleteMany({
        where: { resourceType: "inquiry", resourceId: entityId },
      }),
      prisma.inquiry.delete({ where: { id: entityId } }),
    ]);
  }

  await logAuditEvent({
    orgId: orgId ?? session.user.orgId ?? "",
    userId: session.user.id,
    action: "admin_hard_delete",
    resourceType: entityType,
    resourceId: entityId,
    meta: { reason },
  });

  await createNotifications({
    orgId: orgId ?? session.user.orgId ?? "",
    recipientRoles: ["lucien_admin"],
    type: "admin_hard_delete",
    title: "Admin hard delete",
    body: `Deleted ${entityType} ${entityId}.`,
    entityType,
    entityId,
  });

  return NextResponse.json({ ok: true });
}
