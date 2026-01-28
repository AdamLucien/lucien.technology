import { NextResponse } from "next/server";
import JSZip from "jszip";
import { getServerAuthSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { logAuditEvent } from "@/lib/audit";
import { createNotifications } from "@/lib/notifications";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  if (process.env.ENABLE_DOSSIER_EXPORT !== "true") {
    return NextResponse.json({ error: "Not enabled" }, { status: 404 });
  }

  const session = await getServerAuthSession();
  if (!session?.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  if (session.user.role !== "lucien_admin") {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const { id } = await params;
  const engagement = await prisma.engagement.findUnique({
    where: { id },
    include: {
      inquiry: true,
      owner: true,
    },
  });

  if (!engagement) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  const [
    scopeProposal,
    deliverables,
    milestones,
    changeRequests,
    editEvents,
    invoices,
    documents,
    auditEvents,
  ] = await Promise.all([
    prisma.scopeProposal.findFirst({
      where: { engagementId: id },
      orderBy: { createdAt: "desc" },
    }),
    prisma.deliverable.findMany({ where: { engagementId: id } }),
    prisma.milestone.findMany({ where: { engagementId: id } }),
    prisma.changeRequest.findMany({
      where: { engagementId: id },
      orderBy: { createdAt: "desc" },
    }),
    prisma.editEvent.findMany({
      where: { orgId: engagement.orgId, entityType: "engagement", entityId: id },
      orderBy: { createdAt: "desc" },
    }),
    prisma.invoice.findMany({ where: { engagementId: id } }),
    prisma.document.findMany({ where: { engagementId: id } }),
    prisma.auditEvent.findMany({
      where: { orgId: engagement.orgId },
      orderBy: { createdAt: "desc" },
      take: 50,
    }),
  ]);

  const zip = new JSZip();
  zip.file("engagement.json", JSON.stringify(engagement, null, 2));
  if (scopeProposal) {
    zip.file("scope.json", JSON.stringify(scopeProposal, null, 2));
  }
  zip.file("deliverables.json", JSON.stringify(deliverables, null, 2));
  zip.file("milestones.json", JSON.stringify(milestones, null, 2));
  zip.file("change-requests.json", JSON.stringify(changeRequests, null, 2));
  zip.file("edit-events.json", JSON.stringify(editEvents, null, 2));
  zip.file("invoices.json", JSON.stringify(invoices, null, 2));
  zip.file(
    "documents-manifest.json",
    JSON.stringify(
      documents.map((doc) => ({
        id: doc.id,
        name: doc.name,
        category: doc.category,
        size: doc.size,
        createdAt: doc.createdAt,
        archivedAt: doc.archivedAt,
      })),
      null,
      2,
    ),
  );
  zip.file("audit-summary.json", JSON.stringify(auditEvents, null, 2));

  const buffer = await zip.generateAsync({ type: "nodebuffer" });
  const payload = new Uint8Array(buffer);

  await logAuditEvent({
    orgId: engagement.orgId,
    userId: session.user.id,
    action: "engagement_dossier_exported",
    resourceType: "engagement",
    resourceId: engagement.id,
  });

  await createNotifications({
    orgId: engagement.orgId,
    recipientRoles: ["lucien_admin"],
    type: "engagement_exported",
    title: "Engagement dossier exported",
    body: `Dossier exported for ${engagement.title}.`,
    entityType: "engagement",
    entityId: engagement.id,
  });

  return new NextResponse(payload, {
    status: 200,
    headers: {
      "Content-Type": "application/zip",
      "Content-Disposition": `attachment; filename="engagement-${engagement.id}.zip"`,
      "Cache-Control": "no-store",
    },
  });
}
