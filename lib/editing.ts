import { Prisma } from "@prisma/client";
import type { EditEntityType } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import { logAuditEvent } from "@/lib/audit";
import { createNotifications } from "@/lib/notifications";

export type DiffEntry = {
  field: string;
  from?: unknown;
  to?: unknown;
};

const staffRoles = new Set(["lucien_admin", "lucien_operator"]);
const adminRoles = new Set(["lucien_admin"]);

const minorAllowlist: Record<EditEntityType, Set<string>> = {
  engagement: new Set(["title", "ownerId", "startDate", "targetDate"]),
  scope: new Set([]),
  change_request: new Set(["title", "description"]),
  invoice: new Set(["internalNote", "paidAt"]),
  document: new Set(["label", "description", "category"]),
  deliverable: new Set([]),
  milestone: new Set([]),
};

const criticalFields: Record<EditEntityType, Set<string>> = {
  engagement: new Set([
    "scopeSummary",
    "deliverablesJson",
    "orgId",
    "procurementRef",
    "purchaseOrderRef",
    "costCenter",
  ]),
  scope: new Set(["scopeSummary", "deliverablesJson", "fixedPriceEUR", "orgId"]),
  change_request: new Set([]),
  invoice: new Set(["amountEUR", "currency", "issueDate", "dueDate", "referencePO"]),
  document: new Set(["orgId", "engagementId", "inquiryId", "uploadedByUserId"]),
  deliverable: new Set(["title", "status", "documentId"]),
  milestone: new Set(["title", "status", "dueDate"]),
};

const allowedFields: Record<EditEntityType, Set<string>> = {
  engagement: new Set([
    "title",
    "ownerId",
    "startDate",
    "targetDate",
    "procurementRef",
    "purchaseOrderRef",
    "costCenter",
    "scopeSummary",
    "deliverablesJson",
    "orgId",
  ]),
  scope: new Set(["scopeSummary", "deliverablesJson", "fixedPriceEUR", "orgId"]),
  change_request: new Set(["title", "description"]),
  invoice: new Set([
    "internalNote",
    "paidAt",
    "amountEUR",
    "currency",
    "issueDate",
    "dueDate",
    "referencePO",
  ]),
  document: new Set([
    "label",
    "description",
    "category",
    "orgId",
    "engagementId",
    "inquiryId",
    "uploadedByUserId",
  ]),
  deliverable: new Set(["title", "status", "documentId"]),
  milestone: new Set(["title", "status", "dueDate"]),
};

const dateFields = new Set([
  "startDate",
  "targetDate",
  "issueDate",
  "dueDate",
  "paidAt",
  "dueDate",
  "decidedAt",
  "implementedAt",
]);

const documentCategories = new Set([
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

export function isCriticalField(entityType: EditEntityType, field: string) {
  return criticalFields[entityType]?.has(field) ?? false;
}

export function validateReason(reason: string) {
  return reason.trim().length >= 5;
}

export function ensureOrgAccess(
  orgId: string | null | undefined,
  sessionOrgId: string | null | undefined,
  isStaff: boolean,
) {
  if (isStaff) return true;
  if (!orgId || !sessionOrgId) return false;
  return orgId === sessionOrgId;
}

export function canMinorEdit(
  role: string | undefined | null,
  entityType: EditEntityType,
  field: string,
) {
  if (!role) return false;
  if (!minorAllowlist[entityType]?.has(field)) return false;
  if (entityType === "engagement") {
    return staffRoles.has(role);
  }
  if (entityType === "invoice") {
    if (field === "paidAt") return adminRoles.has(role);
    return staffRoles.has(role);
  }
  if (entityType === "document") {
    return staffRoles.has(role);
  }
  if (entityType === "change_request") {
    return role.startsWith("org_") || staffRoles.has(role);
  }
  return staffRoles.has(role);
}

export function canApplyMinorEdit(
  role: string | undefined | null,
  entityType: EditEntityType,
  field: string,
) {
  return canMinorEdit(role, entityType, field);
}

export function requiresControlledEdit(entityType: EditEntityType, field: string) {
  return isCriticalField(entityType, field) || !minorAllowlist[entityType]?.has(field);
}

function normalizeValue(field: string, value: unknown) {
  if (value === "") return null;
  if (typeof value === "string" && dateFields.has(field)) {
    return value ? new Date(value) : null;
  }
  return value;
}

async function loadEntity(entityType: EditEntityType, entityId: string) {
  switch (entityType) {
    case "engagement":
      return prisma.engagement.findUnique({ where: { id: entityId } });
    case "scope":
      return prisma.scopeProposal.findUnique({ where: { id: entityId } });
    case "change_request":
      return prisma.changeRequest.findUnique({ where: { id: entityId } });
    case "invoice":
      return prisma.invoice.findUnique({ where: { id: entityId } });
    case "document":
      return prisma.document.findUnique({ where: { id: entityId } });
    case "deliverable":
      return prisma.deliverable.findUnique({ where: { id: entityId } });
    case "milestone":
      return prisma.milestone.findUnique({ where: { id: entityId } });
    default:
      return null;
  }
}

async function updateEntity(
  entityType: EditEntityType,
  entityId: string,
  data: Record<string, unknown>,
) {
  switch (entityType) {
    case "engagement":
      return prisma.engagement.update({ where: { id: entityId }, data });
    case "scope":
      return prisma.scopeProposal.update({ where: { id: entityId }, data });
    case "change_request":
      return prisma.changeRequest.update({ where: { id: entityId }, data });
    case "invoice":
      return prisma.invoice.update({ where: { id: entityId }, data });
    case "document":
      return prisma.document.update({ where: { id: entityId }, data });
    case "deliverable":
      return prisma.deliverable.update({ where: { id: entityId }, data });
    case "milestone":
      return prisma.milestone.update({ where: { id: entityId }, data });
    default:
      return null;
  }
}

function ensureAllowedFields(entityType: EditEntityType, diff: DiffEntry[]) {
  const allowed = allowedFields[entityType];
  if (!allowed) return false;
  return diff.every((entry) => allowed.has(entry.field));
}

export async function applyDiffSafely({
  entityType,
  entityId,
  diff,
  session,
  reason,
  linkedChangeRequestId,
}: {
  entityType: EditEntityType;
  entityId: string;
  diff: DiffEntry[];
  session: { user: { id: string; role?: string | null; orgId?: string | null } };
  reason: string;
  linkedChangeRequestId?: string | null;
}) {
  if (!validateReason(reason)) {
    return { ok: false, error: "Reason required" };
  }

  if (!ensureAllowedFields(entityType, diff)) {
    return { ok: false, error: "Field not editable" };
  }

  const role = session.user.role;
  const isStaff = role ? staffRoles.has(role) : false;
  const entity = await loadEntity(entityType, entityId);
  if (!entity) {
    return { ok: false, error: "Not found" };
  }

  const orgId = "orgId" in entity ? entity.orgId : null;
  if (!ensureOrgAccess(orgId, session.user.orgId, isStaff)) {
    return { ok: false, error: "Not found" };
  }

  if (entityType === "change_request") {
    const changeRequest = entity as { status?: string };
    if (!["proposed", "needs_info"].includes(changeRequest.status ?? "")) {
      return { ok: false, error: "Change request locked" };
    }
  }

  if (entityType === "document") {
    const document = entity as { category?: string };
    if (document.category === "evidence") {
      return { ok: false, error: "Evidence documents cannot be edited" };
    }
  }

  if (entityType === "document") {
    const nextCategory = diff.find((entry) => entry.field === "category")?.to;
    if (
      typeof nextCategory === "string" &&
      !documentCategories.has(nextCategory)
    ) {
      return { ok: false, error: "Invalid category" };
    }
  }

  const needsControlled = diff.some(
    (entry) =>
      requiresControlledEdit(entityType, entry.field) ||
      !canApplyMinorEdit(role, entityType, entry.field),
  );

  if (needsControlled) {
    const editEvent = await prisma.editEvent.create({
      data: {
        orgId: orgId ?? session.user.orgId ?? "",
        entityType,
        entityId,
        createdByUserId: session.user.id,
        kind: "controlled_edit",
        status: "pending_approval",
        reason,
        diffJson: diff as Prisma.InputJsonValue,
        linkedChangeRequestId: linkedChangeRequestId ?? null,
      },
    });

    await logAuditEvent({
      orgId: orgId ?? session.user.orgId ?? "",
      userId: session.user.id,
      action: "edit_requested",
      resourceType: "edit_event",
      resourceId: editEvent.id,
      meta: { entityType, entityId },
    });

    await createNotifications({
      orgId: orgId ?? session.user.orgId ?? "",
      recipientRoles: ["lucien_admin", "lucien_operator"],
      type: "edit_requested",
      title: "Controlled edit requested",
      body: `Edit request submitted for ${entityType}.`,
      entityType: "edit_event",
      entityId: editEvent.id,
    });

    return { ok: true, status: "pending_approval", editEventId: editEvent.id };
  }

  const updateData: Record<string, unknown> = {};
  diff.forEach((entry) => {
    updateData[entry.field] = normalizeValue(entry.field, entry.to);
  });

  await updateEntity(entityType, entityId, updateData);

  const editEvent = await prisma.editEvent.create({
    data: {
      orgId: orgId ?? session.user.orgId ?? "",
      entityType,
      entityId,
      createdByUserId: session.user.id,
      kind: "minor_edit",
      status: "applied",
      reason,
      diffJson: diff as Prisma.InputJsonValue,
    },
  });

  await logAuditEvent({
    orgId: orgId ?? session.user.orgId ?? "",
    userId: session.user.id,
    action: "edit_applied",
    resourceType: "edit_event",
    resourceId: editEvent.id,
    meta: { entityType, entityId },
  });

  await createNotifications({
    orgId: orgId ?? session.user.orgId ?? "",
    recipientRoles: ["org_admin", "org_user"],
    recipientOrgId: orgId ?? session.user.orgId ?? undefined,
    type: "edit_applied",
    title: "Record updated",
    body: `An update was applied to ${entityType}.`,
    entityType: "edit_event",
    entityId: editEvent.id,
  });

  return { ok: true, status: "applied", editEventId: editEvent.id };
}

export async function applyEditEvent({
  editEventId,
  session,
}: {
  editEventId: string;
  session: { user: { id: string; role?: string | null; orgId?: string | null } };
}) {
  const role = session.user.role;
  if (!role || !staffRoles.has(role)) {
    return { ok: false, error: "Unauthorized" };
  }

  const editEvent = await prisma.editEvent.findUnique({
    where: { id: editEventId },
  });
  if (!editEvent) {
    return { ok: false, error: "Not found" };
  }

  if (editEvent.status !== "pending_approval") {
    return { ok: false, error: "Already resolved" };
  }

  if (editEvent.kind === "controlled_edit") {
    if (!editEvent.linkedChangeRequestId) {
      return { ok: false, error: "Change request approval required" };
    }
    const changeRequest = await prisma.changeRequest.findUnique({
      where: { id: editEvent.linkedChangeRequestId },
      select: { status: true },
    });
    if (!changeRequest || changeRequest.status !== "approved") {
      return { ok: false, error: "Change request not approved" };
    }
  }

  const diff = Array.isArray(editEvent.diffJson)
    ? (editEvent.diffJson as DiffEntry[])
    : [];

  if (!ensureAllowedFields(editEvent.entityType, diff)) {
    return { ok: false, error: "Field not editable" };
  }

  const updateData: Record<string, unknown> = {};
  diff.forEach((entry) => {
    updateData[entry.field] = normalizeValue(entry.field, entry.to);
  });

  await updateEntity(editEvent.entityType, editEvent.entityId, updateData);

  await prisma.editEvent.update({
    where: { id: editEvent.id },
    data: { status: "applied" },
  });

  await logAuditEvent({
    orgId: editEvent.orgId,
    userId: session.user.id,
    action: "edit_applied",
    resourceType: "edit_event",
    resourceId: editEvent.id,
    meta: { entityType: editEvent.entityType, entityId: editEvent.entityId },
  });

  await createNotifications({
    orgId: editEvent.orgId,
    recipientRoles: ["org_admin", "org_user"],
    recipientOrgId: editEvent.orgId,
    type: "edit_applied",
    title: "Controlled edit applied",
    body: `Edit approved for ${editEvent.entityType}.`,
    entityType: "edit_event",
    entityId: editEvent.id,
  });

  return { ok: true };
}

export async function rejectEditEvent({
  editEventId,
  session,
  rejectionNote,
}: {
  editEventId: string;
  session: { user: { id: string; role?: string | null; orgId?: string | null } };
  rejectionNote: string;
}) {
  const role = session.user.role;
  if (!role || !staffRoles.has(role)) {
    return { ok: false, error: "Unauthorized" };
  }

  const editEvent = await prisma.editEvent.findUnique({
    where: { id: editEventId },
  });
  if (!editEvent) {
    return { ok: false, error: "Not found" };
  }

  if (editEvent.status !== "pending_approval") {
    return { ok: false, error: "Already resolved" };
  }

  await prisma.editEvent.update({
    where: { id: editEvent.id },
    data: { status: "rejected" },
  });

  await logAuditEvent({
    orgId: editEvent.orgId,
    userId: session.user.id,
    action: "edit_rejected",
    resourceType: "edit_event",
    resourceId: editEvent.id,
    meta: { note: rejectionNote },
  });

  await createNotifications({
    orgId: editEvent.orgId,
    recipientRoles: ["org_admin", "org_user"],
    recipientOrgId: editEvent.orgId,
    type: "edit_rejected",
    title: "Edit rejected",
    body: rejectionNote,
    entityType: "edit_event",
    entityId: editEvent.id,
  });

  return { ok: true };
}
