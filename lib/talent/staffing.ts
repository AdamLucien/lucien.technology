import { prisma } from "@/lib/prisma";
import { logAuditEvent } from "@/lib/audit";
import { getDefaultRolesForService } from "@/lib/talent/role-defaults";
import { inferRequirementsFromDeliverables, type RequirementsJson } from "@/lib/talent/skill-defaults";
import { getRoleLabelMap } from "@/lib/talent/labels";

export type StaffingRoleRequirement = {
  roleId: string;
  count: number;
  seniorityId?: string;
  modeIds?: string[];
  languages?: string[];
};

export type StaffingIntentSummary = {
  intentId: string;
  state: string;
  roles: StaffingRoleRequirement[];
  requirements: RequirementsJson;
  filledCounts: Record<string, number>;
  missingCounts: Record<string, number>;
};

const emptyRequirements: RequirementsJson = { skills: [] };

export async function createStaffingIntentForInquiry({
  orgId,
  inquiryId,
  serviceSlug,
}: {
  orgId: string;
  inquiryId: string;
  serviceSlug?: string | null;
}) {
  const rolesJson = getDefaultRolesForService(serviceSlug);
  const requirementsJson = inferRequirementsFromDeliverables({
    deliverables: [],
    serviceSlug,
  });

  const intent = await prisma.staffingIntent.create({
    data: {
      orgId,
      inquiryId,
      state: "DRAFT",
      rolesJson,
      requirementsJson,
    },
  });

  await logAuditEvent({
    orgId,
    action: "staffing_intent_created",
    resourceType: "staffing_intent",
    resourceId: intent.id,
    meta: { inquiryId },
  });

  return intent;
}

export async function updateStaffingIntentFromScope({
  orgId,
  inquiryId,
  scopeProposalId,
  serviceSlug,
  deliverables,
}: {
  orgId: string;
  inquiryId?: string | null;
  scopeProposalId: string;
  serviceSlug?: string | null;
  deliverables: string[];
}) {
  const existing =
    (await prisma.staffingIntent.findFirst({
      where: { orgId, scopeProposalId },
      orderBy: { createdAt: "desc" },
    })) ??
    (await prisma.staffingIntent.findFirst({
      where: {
        orgId,
        ...(inquiryId ? { inquiryId } : {}),
        scopeProposalId: null,
      },
      orderBy: { createdAt: "desc" },
    }));

  const rolesJson =
    (existing?.rolesJson as StaffingRoleRequirement[] | undefined) ??
    getDefaultRolesForService(serviceSlug);

  const requirementsJson = inferRequirementsFromDeliverables({
    deliverables,
    serviceSlug,
  });

  const intent = existing
    ? await prisma.staffingIntent.update({
        where: { id: existing.id },
        data: {
          scopeProposalId,
          rolesJson,
          requirementsJson,
        },
      })
    : await prisma.staffingIntent.create({
        data: {
          orgId,
          inquiryId: inquiryId ?? null,
          scopeProposalId,
          state: "DRAFT",
          rolesJson,
          requirementsJson,
        },
      });

  await logAuditEvent({
    orgId,
    action: "staffing_intent_updated",
    resourceType: "staffing_intent",
    resourceId: intent.id,
    meta: { inquiryId, scopeProposalId },
  });

  return intent;
}

export async function activateStaffingIntentForEngagement({
  orgId,
  inquiryId,
  engagementId,
}: {
  orgId: string;
  inquiryId: string;
  engagementId: string;
}) {
  const intent = await prisma.staffingIntent.findFirst({
    where: { orgId, inquiryId },
    orderBy: { createdAt: "desc" },
  });

  if (!intent) {
    return null;
  }

  const updated = await prisma.staffingIntent.update({
    where: { id: intent.id },
    data: {
      engagementId,
      state: "ACTIVE",
    },
  });

  await logAuditEvent({
    orgId,
    action: "staffing_intent_activated",
    resourceType: "staffing_intent",
    resourceId: updated.id,
    meta: { engagementId, inquiryId },
  });

  return updated;
}

export async function getStaffingSummaryForEngagement(engagementId: string) {
  const intents = await prisma.staffingIntent.findMany({
    where: { engagementId },
    orderBy: { createdAt: "desc" },
  });

  if (intents.length === 0) return [];

  const assignments = await prisma.talentAssignment.findMany({
    where: { engagementId },
  });

  const members = await prisma.engagementMember.findMany({
    where: { engagementId },
  });

  const roleLabelMap = getRoleLabelMap();
  const labelToRoleId = new Map<string, string>();
  roleLabelMap.forEach((label, roleId) => {
    labelToRoleId.set(label.toLowerCase(), roleId);
  });

  const memberRoleIds = members
    .map((member) => labelToRoleId.get(member.roleTitle.toLowerCase()))
    .filter(Boolean) as string[];

  return intents.map((intent) => {
    const roles = (intent.rolesJson as StaffingRoleRequirement[]) ?? [];
    const filledCounts: Record<string, number> = {};
    const missingCounts: Record<string, number> = {};

    for (const role of roles) {
      const assignmentCount = assignments.filter(
        (assignment) => assignment.roleId === role.roleId,
      ).length;
      const memberCount = memberRoleIds.filter((roleId) => roleId === role.roleId)
        .length;
      const total = assignmentCount + memberCount;
      filledCounts[role.roleId] = total;
      missingCounts[role.roleId] = Math.max(role.count - total, 0);
    }

    return {
      intentId: intent.id,
      state: intent.state,
      roles,
      requirements: (intent.requirementsJson as RequirementsJson) ?? emptyRequirements,
      filledCounts,
      missingCounts,
    };
  });
}
