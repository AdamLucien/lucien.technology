import { roleIds, seniorityIds } from "@/lib/talent/taxonomy";

export type StaffingRoleReq = {
  roleId: string;
  count: number;
  seniorityId?: string;
  modeIds?: string[];
  languages?: string[];
};

export type RoleDefaults = StaffingRoleReq[];

type RoleDefaultsByServiceSlug = Record<string, RoleDefaults>;

const ensureRoleId = (roleId: string) => (roleIds.includes(roleId) ? roleId : null);

export const defaultsByServiceSlug: RoleDefaultsByServiceSlug = {
  "system-architecture-assessment": [
    { roleId: "principal_architect", count: 1, seniorityId: "principal" },
    { roleId: "systems_architect", count: 1, seniorityId: "staff" },
  ],
  "control-baseline-risk-posture": [
    { roleId: "security_architect", count: 1, seniorityId: "lead" },
    { roleId: "risk_analyst", count: 1, seniorityId: "staff" },
  ],
  "data-lineage-assessment": [
    { roleId: "data_architect", count: 1, seniorityId: "lead" },
    { roleId: "data_engineer", count: 1, seniorityId: "staff" },
  ],
  "operational-readiness-baseline": [
    { roleId: "delivery_lead", count: 1, seniorityId: "lead" },
    { roleId: "engagement_manager", count: 1, seniorityId: "staff" },
  ],
  "vendor-integration-readiness": [
    { roleId: "integration_architect", count: 1, seniorityId: "lead" },
    { roleId: "integration_engineer", count: 1, seniorityId: "staff" },
  ],
  "target-architecture-roadmap": [
    { roleId: "enterprise_architect", count: 1, seniorityId: "principal" },
    { roleId: "program_director", count: 1, seniorityId: "director" },
  ],
  "secure-data-platform-roadmap": [
    { roleId: "platform_architect", count: 1, seniorityId: "principal" },
    { roleId: "security_architect", count: 1, seniorityId: "lead" },
  ],
  "it-ot-convergence-roadmap": [
    { roleId: "ot_it_architect", count: 1, seniorityId: "lead" },
    { roleId: "systems_architect", count: 1, seniorityId: "staff" },
  ],
  "mission-systems-modernization-blueprint": [
    { roleId: "principal_architect", count: 1, seniorityId: "principal" },
    { roleId: "program_director", count: 1, seniorityId: "director" },
  ],
  "resilient-logistics-architecture": [
    { roleId: "supply_chain_architect", count: 1, seniorityId: "lead" },
    { roleId: "logistics_optimization_specialist", count: 1, seniorityId: "staff" },
  ],
  "project-takeover-stabilization": [
    { roleId: "delivery_lead", count: 1, seniorityId: "lead" },
    { roleId: "program_director", count: 1, seniorityId: "director" },
  ],
  "remote-program-takeover": [
    { roleId: "program_director", count: 1, seniorityId: "director" },
    { roleId: "delivery_lead", count: 1, seniorityId: "lead" },
  ],
  "on-site-program-takeover": [
    { roleId: "program_director", count: 1, seniorityId: "director" },
    { roleId: "delivery_lead", count: 1, seniorityId: "lead" },
  ],
  "delivery-recovery-control-reset": [
    { roleId: "delivery_lead", count: 1, seniorityId: "lead" },
    { roleId: "risk_analyst", count: 1, seniorityId: "staff" },
  ],
  "tailored-software-mvp": [
    { roleId: "product_manager_b2b", count: 1, seniorityId: "lead" },
    { roleId: "fullstack_engineer", count: 2, seniorityId: "staff" },
  ],
  "integration-build-orchestration": [
    { roleId: "integration_architect", count: 1, seniorityId: "lead" },
    { roleId: "integration_engineer", count: 1, seniorityId: "staff" },
  ],
  "secure-data-platform-build": [
    { roleId: "platform_architect", count: 1, seniorityId: "principal" },
    { roleId: "data_engineer", count: 1, seniorityId: "staff" },
  ],
  "ops-automation-build": [
    { roleId: "sre", count: 1, seniorityId: "staff" },
    { roleId: "devops_engineer", count: 1, seniorityId: "staff" },
  ],
  "security-disclosure-readiness": [
    { roleId: "compliance_lead", count: 1, seniorityId: "lead" },
    { roleId: "grc_consultant", count: 1, seniorityId: "staff" },
  ],
  "export-controls-alignment": [
    { roleId: "compliance_lead", count: 1, seniorityId: "lead" },
    { roleId: "risk_analyst", count: 1, seniorityId: "staff" },
  ],
  "procurement-ready-technology-review": [
    { roleId: "engagement_manager", count: 1, seniorityId: "lead" },
    { roleId: "principal_architect", count: 1, seniorityId: "principal" },
  ],
  "operational-readiness-handover": [
    { roleId: "delivery_lead", count: 1, seniorityId: "lead" },
    { roleId: "technical_writer_controlled_docs", count: 1, seniorityId: "staff" },
  ],
  "technical-leadership-retainer": [
    { roleId: "fractional_cto", count: 1, seniorityId: "director" },
  ],
  "security-assurance-retainer": [
    { roleId: "security_architect", count: 1, seniorityId: "lead" },
  ],
};

export const defaultsByProblemType: Record<string, RoleDefaults> = {
  ot_security: defaultsByServiceSlug["it-ot-convergence-roadmap"],
  crisis_ops: defaultsByServiceSlug["project-takeover-stabilization"],
  supply_chain: defaultsByServiceSlug["resilient-logistics-architecture"],
  vendor_risk: defaultsByServiceSlug["procurement-ready-technology-review"],
  security_governance: defaultsByServiceSlug["control-baseline-risk-posture"],
};

export function getRoleDefaults(params: {
  serviceSlug?: string | null;
  problemType?: string | null;
}): RoleDefaults {
  const { serviceSlug, problemType } = params;

  if (serviceSlug && defaultsByServiceSlug[serviceSlug]) {
    return defaultsByServiceSlug[serviceSlug];
  }
  if (problemType && defaultsByProblemType[problemType]) {
    return defaultsByProblemType[problemType];
  }
  return [];
}

export const getDefaultRolesForService = (serviceSlug?: string | null) => {
  const roles = getRoleDefaults({ serviceSlug });
  return roles
    .map((role) => ({
      ...role,
      roleId: ensureRoleId(role.roleId) ?? role.roleId,
    }))
    .filter((role) => roleIds.includes(role.roleId));
};

const validateRoleDefaults = () => {
  const invalidRoles: string[] = [];
  const invalidSeniorities: string[] = [];

  Object.values(defaultsByServiceSlug).forEach((roles) => {
    roles.forEach((role) => {
      if (!roleIds.includes(role.roleId)) invalidRoles.push(role.roleId);
      if (role.seniorityId && !seniorityIds.includes(role.seniorityId)) {
        invalidSeniorities.push(role.seniorityId);
      }
    });
  });

  if (invalidRoles.length > 0 || invalidSeniorities.length > 0) {
    console.warn("Invalid role defaults detected", {
      invalidRoles: Array.from(new Set(invalidRoles)),
      invalidSeniorities: Array.from(new Set(invalidSeniorities)),
    });
  }
};

if (process.env.NODE_ENV !== "production") {
  validateRoleDefaults();
}
