import { prisma } from "@/lib/prisma";
import { inferProfileSkills } from "@/lib/talent/skill-defaults";
import { roleIds } from "@/lib/talent/taxonomy";

type RoleRequirement = {
  roleId: string;
  count: number;
  seniorityId?: string;
  modeIds?: string[];
  languages?: string[];
};

type RequirementsJson = {
  skills?: Array<{ skillId: string; must: boolean }>;
};

const normalizeList = (values?: string[] | null) =>
  (values ?? []).map((value) => value.trim()).filter(Boolean);

export async function runMatchingForIntent(intentId: string, orgId: string) {
  const intent = await prisma.staffingIntent.findFirst({
    where: { id: intentId, orgId },
  });

  if (!intent) {
    return { ok: false, reason: "not_found" };
  }

  const rolesJson = (intent.rolesJson as RoleRequirement[]) ?? [];
  const requirements = (intent.requirementsJson as RequirementsJson) ?? { skills: [] };
  const requiredRoleIds = rolesJson
    .map((role) => role.roleId)
    .filter((roleId) => roleIds.includes(roleId));
  const mustSkills = (requirements.skills ?? []).filter((skill) => skill.must);

  const profiles = await prisma.talentProfile.findMany({
    orderBy: { updatedAt: "desc" },
  });

  const upserts = [];

  for (const profile of profiles) {
    const matchedRoles = new Set<string>();
    const profileRoles = [profile.primaryRole, ...(profile.secondaryRoles ?? [])].filter(
      Boolean,
    ) as string[];

    for (const roleId of profileRoles) {
      if (requiredRoleIds.includes(roleId)) {
        matchedRoles.add(roleId);
      }
    }

    const profileSkills = inferProfileSkills(profile);
    const matchedSkills = new Set<string>();
    const missingMustSkills: string[] = [];

    for (const skill of mustSkills) {
      if (profileSkills.includes(skill.skillId)) {
        matchedSkills.add(skill.skillId);
      } else {
        missingMustSkills.push(skill.skillId);
      }
    }

    let score = 0;
    score += matchedRoles.size * 35;
    if (profile.primaryRole && matchedRoles.has(profile.primaryRole)) {
      score += 15;
    }
    score += matchedSkills.size * 10;

    if (missingMustSkills.length > 0) {
      score -= 50;
    }

    const reasonsJson = {
      matchedRoleIds: Array.from(matchedRoles),
      requiredRoleIds,
      matchedSkillIds: Array.from(matchedSkills),
      missingMustSkillIds: missingMustSkills,
      profileSkills,
    };

    upserts.push(
      prisma.talentMatch.upsert({
        where: {
          staffingIntentId_talentProfileId: {
            staffingIntentId: intent.id,
            talentProfileId: profile.id,
          },
        },
        update: {
          score,
          reasonsJson,
        },
        create: {
          staffingIntentId: intent.id,
          talentProfileId: profile.id,
          score,
          reasonsJson,
          status: "SUGGESTED",
        },
      }),
    );
  }

  await prisma.$transaction(upserts);

  return { ok: true, matched: profiles.length };
}
