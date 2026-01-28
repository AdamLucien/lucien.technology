import { NextResponse } from "next/server";
import { z } from "zod";
import { getServerAuthSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { storeFile } from "@/lib/storage";
import { logAuditEvent } from "@/lib/audit";
import { getClientIp } from "@/lib/rateLimit";
import { createNotifications } from "@/lib/notifications";

const categorySchema = z.enum([
  "nda",
  "sow",
  "contract",
  "deliverable",
  "report",
  "invoice",
  "client_input",
  "evidence",
  "other",
]);

const clientCategories = new Set(["client_input", "evidence"]);
const maxClientFileSize = 10 * 1024 * 1024;
const allowedClientTypes = new Set([
  "application/pdf",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "image/png",
  "image/jpeg",
]);
const allowedClientExtensions = [".pdf", ".docx", ".png", ".jpg", ".jpeg"];

export async function POST(request: Request) {
  const session = await getServerAuthSession();
  if (!session?.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const isStaff =
    session.user.role === "lucien_admin" ||
    session.user.role === "lucien_operator";

  const formData = await request.formData();
  const file = formData.get("file");
  const engagementId = formData.get("engagementId");
  const inquiryId = formData.get("inquiryId");
  const categoryValue = formData.get("category");

  const parsedCategory = categorySchema.safeParse(categoryValue);
  if (!parsedCategory.success) {
    return NextResponse.json({ error: "Invalid category" }, { status: 400 });
  }

  if (!(file instanceof File)) {
    return NextResponse.json({ error: "File is required" }, { status: 400 });
  }

  if (!engagementId && !inquiryId) {
    return NextResponse.json(
      { error: "Target engagement or inquiry is required" },
      { status: 400 },
    );
  }

  if (!isStaff) {
    if (typeof engagementId !== "string") {
      return NextResponse.json(
        { error: "Engagement is required for client uploads" },
        { status: 400 },
      );
    }
    if (!clientCategories.has(parsedCategory.data)) {
      return NextResponse.json({ error: "Forbidden category" }, { status: 403 });
    }
    if (file.size > maxClientFileSize) {
      return NextResponse.json({ error: "File too large" }, { status: 413 });
    }
    const fileType = file.type || "";
    const filename = file.name.toLowerCase();
    const hasAllowedExtension = allowedClientExtensions.some((ext) =>
      filename.endsWith(ext),
    );
    if (fileType && !allowedClientTypes.has(fileType)) {
      return NextResponse.json({ error: "Unsupported file type" }, { status: 415 });
    }
    if (!fileType && !hasAllowedExtension) {
      return NextResponse.json({ error: "Unsupported file type" }, { status: 415 });
    }
  }

  let orgId: string | null = null;

  if (typeof engagementId === "string") {
    const engagement = await prisma.engagement.findUnique({
      where: { id: engagementId },
    });
    if (!engagement) {
      return NextResponse.json({ error: "Engagement not found" }, { status: 404 });
    }
    if (!isStaff && engagement.orgId !== session.user.orgId) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }
    orgId = engagement.orgId;
  }

  if (!orgId && typeof inquiryId === "string") {
    if (!isStaff) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }
    const inquiry = await prisma.inquiry.findUnique({
      where: { id: inquiryId },
    });
    if (!inquiry) {
      return NextResponse.json({ error: "Inquiry not found" }, { status: 404 });
    }
    orgId = inquiry.orgId;
  }

  if (!orgId) {
    return NextResponse.json({ error: "Target not found" }, { status: 404 });
  }

  const buffer = Buffer.from(await file.arrayBuffer());
  const stored = await storeFile({
    orgId,
    filename: file.name,
    data: buffer,
  });

  const document = await prisma.document.create({
    data: {
      orgId,
      engagementId: typeof engagementId === "string" ? engagementId : null,
      inquiryId: typeof inquiryId === "string" ? inquiryId : null,
      category: parsedCategory.data,
      name: file.name,
      mimeType: file.type || "application/octet-stream",
      size: stored.size,
      checksum: stored.checksum,
      storageKey: stored.storageKey,
      uploadedByUserId: session.user.id,
    },
  });

  await logAuditEvent({
    orgId,
    userId: session.user.id,
    action: "document_uploaded",
    resourceType: "document",
    resourceId: document.id,
    meta: {
      engagementId: document.engagementId,
      inquiryId: document.inquiryId,
      name: document.name,
    },
    ip: getClientIp(request),
    userAgent: request.headers.get("user-agent"),
  });

  await createNotifications({
    orgId,
    recipientRoles: ["lucien_admin", "lucien_operator"],
    type: "document_uploaded",
    title: "New document uploaded",
    body: `${document.name} was uploaded.`,
    entityType: "document",
    entityId: document.id,
  });

  return NextResponse.json({ ok: true, id: document.id }, { status: 201 });
}
