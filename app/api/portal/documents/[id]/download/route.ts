import { NextResponse } from "next/server";
import { getServerAuthSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { readFile } from "@/lib/storage";
import { logAuditEvent } from "@/lib/audit";
import { getClientIp } from "@/lib/rateLimit";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const session = await getServerAuthSession();
  if (!session?.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const document = await prisma.document.findUnique({
    where: { id },
  });

  if (!document) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  if (
    session.user.role !== "lucien_admin" &&
    session.user.role !== "lucien_operator" &&
    document.orgId !== session.user.orgId
  ) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  const buffer = await readFile(document.storageKey);

  await logAuditEvent({
    orgId: document.orgId,
    userId: session.user.id,
    action: "document_downloaded",
    resourceType: "document",
    resourceId: document.id,
    meta: { name: document.name },
    ip: getClientIp(request),
    userAgent: request.headers.get("user-agent"),
  });

  return new NextResponse(buffer, {
    status: 200,
    headers: {
      "Content-Type": document.mimeType,
      "Content-Disposition": `attachment; filename="${document.name}"`,
      "Content-Length": document.size.toString(),
    },
  });
}
