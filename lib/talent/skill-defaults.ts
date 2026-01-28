import { domainIds, skillIds } from "@/lib/talent/taxonomy";

export type SkillReq = {
  skillId: string;
  must: boolean;
  level?: "basic" | "intermediate" | "advanced" | "expert";
};

export type Requirements = {
  skills: SkillReq[];
  certs?: { certId: string; must: boolean }[];
  tools?: { toolId: string; must: boolean }[];
};

export type RequirementsJson = Requirements;

type DeliverableType = string;
type DomainId = string;

type SkillDefaultsByDomainAndDeliverable = Record<DomainId, Record<DeliverableType, Requirements>>;

const ensureSkillId = (skillId: string) => (skillIds.includes(skillId) ? skillId : null);

export const skillDefaults: SkillDefaultsByDomainAndDeliverable = {
  // ---- OT / IT convergence ----
  ot_it: {
    IT_OT_CONVERGENCE_PLAN: {
      skills: [
        { skillId: "it_ot_integration", must: true, level: "advanced" },
        { skillId: "system_architecture", must: true, level: "advanced" },
        { skillId: "architecture_baseline", must: false, level: "intermediate" },
      ],
    },
  },

  // ---- Supply chain ----
  supply_chain: {
    SUPPLY_CHAIN_DIAGNOSTIC: {
      skills: [
        { skillId: "program_delivery", must: true, level: "advanced" },
        { skillId: "delivery_governance", must: false, level: "intermediate" },
      ],
    },
    RESILIENCE_PROGRAM: {
      skills: [
        { skillId: "risk_register", must: true, level: "advanced" },
        { skillId: "delivery_governance", must: false, level: "intermediate" },
      ],
    },
  },

  // ---- Security / GRC ----
  security_grc: {
    CONTROL_BASELINE: {
      skills: [
        { skillId: "security_controls", must: true, level: "advanced" },
        { skillId: "compliance_grc", must: true, level: "advanced" },
        { skillId: "risk_register", must: true, level: "advanced" },
      ],
    },
    DISCLOSURE_READINESS: {
      skills: [
        { skillId: "compliance_grc", must: true, level: "advanced" },
        { skillId: "documentation_controlled", must: false, level: "intermediate" },
      ],
    },
  },

  // ---- Governance / transformation ----
  governance: {
    PROGRAM_RECOVERY: {
      skills: [
        { skillId: "program_delivery", must: true, level: "advanced" },
        { skillId: "delivery_governance", must: true, level: "advanced" },
      ],
    },
  },

  // ---- Data / realtime ----
  data_realtime: {
    DATA_PLATFORM_ROADMAP: {
      skills: [
        { skillId: "data_realtime", must: true, level: "advanced" },
        { skillId: "security_controls", must: false, level: "intermediate" },
      ],
    },
  },

  // ---- Observability ----
  observability: {
    OPS_READINESS: {
      skills: [
        { skillId: "observability", must: true, level: "advanced" },
        { skillId: "delivery_governance", must: false, level: "intermediate" },
      ],
    },
  },

  // ---- Industry / manufacturing ----
  industry4: {
    SYSTEM_ASSESSMENT: {
      skills: [
        { skillId: "system_architecture", must: true, level: "advanced" },
        { skillId: "architecture_baseline", must: true, level: "advanced" },
        { skillId: "risk_register", must: false, level: "intermediate" },
      ],
    },
  },
  manufacturing_systems: {
    SYSTEMS_MODERNIZATION: {
      skills: [
        { skillId: "enterprise_architecture", must: true, level: "advanced" },
        { skillId: "system_architecture", must: true, level: "advanced" },
      ],
    },
  },
  mes_mom: {
    MES_INTEGRATION: {
      skills: [
        { skillId: "system_architecture", must: true, level: "advanced" },
        { skillId: "it_ot_integration", must: false, level: "intermediate" },
      ],
    },
  },
  erp_integration: {
    ERP_INTEGRATION: {
      skills: [
        { skillId: "enterprise_architecture", must: true, level: "advanced" },
        { skillId: "system_architecture", must: false, level: "intermediate" },
      ],
    },
  },

  // ---- AI architecture ----
  ai_architecture: {
    AI_RISK_REVIEW: {
      skills: [
        { skillId: "security_controls", must: true, level: "advanced" },
        { skillId: "risk_register", must: true, level: "advanced" },
      ],
    },
  },
};

export function mergeRequirements(base: Requirements, add: Requirements): Requirements {
  const bySkill = new Map<string, SkillReq>();
  for (const s of base.skills ?? []) bySkill.set(s.skillId, s);
  for (const s of add.skills ?? []) {
    const prev = bySkill.get(s.skillId);
    if (!prev) bySkill.set(s.skillId, s);
    else {
      bySkill.set(s.skillId, {
        skillId: s.skillId,
        must: prev.must || s.must,
        level: pickHigherLevel(prev.level, s.level),
      });
    }
  }

  return {
    skills: Array.from(bySkill.values()),
    certs: mergeBoolList(base.certs, add.certs, "certId"),
    tools: mergeBoolList(base.tools, add.tools, "toolId"),
  };
}

type BooleanRequirement<K extends string> = { must: boolean } & Record<K, string>;

function makeBoolEntry<K extends string>(key: K, id: string, must: boolean): BooleanRequirement<K> {
  return { [key]: id, must } as BooleanRequirement<K>;
}

function mergeBoolList<K extends string>(
  a: BooleanRequirement<K>[] | undefined,
  b: BooleanRequirement<K>[] | undefined,
  key: K,
): BooleanRequirement<K>[] | undefined {
  if (!a && !b) return undefined;
  const m = new Map<string, { id: string; must: boolean }>();
  for (const item of a ?? []) m.set(String(item[key]), { id: String(item[key]), must: item.must });
  for (const item of b ?? []) {
    const id = String(item[key]);
    const prev = m.get(id);
    m.set(id, { id, must: (prev?.must ?? false) || item.must });
  }
  return Array.from(m.entries()).map(([id, v]) => makeBoolEntry(key, id, v.must));
}

function pickHigherLevel(
  a?: "basic" | "intermediate" | "advanced" | "expert",
  b?: "basic" | "intermediate" | "advanced" | "expert",
) {
  const rank = { basic: 1, intermediate: 2, advanced: 3, expert: 4 } as const;
  if (!a) return b;
  if (!b) return a;
  return rank[b] > rank[a] ? b : a;
}

export function getRequirementsForScope(params: {
  domainIds: string[];
  deliverableTypes: string[];
}): Requirements {
  const { domainIds, deliverableTypes } = params;

  let req: Requirements = { skills: [] };
  for (const d of domainIds) {
    const map = skillDefaults[d];
    if (!map) continue;
    for (const t of deliverableTypes) {
      const add = map[t];
      if (!add) continue;
      req = mergeRequirements(req, add);
    }
  }
  return req;
}

export const inferRequirementsFromDeliverables = ({
  deliverables,
  domainIds,
}: {
  deliverables: string[];
  serviceSlug?: string | null;
  domainIds?: string[];
}): RequirementsJson =>
  getRequirementsForScope({
    domainIds: domainIds ?? [],
    deliverableTypes: deliverables,
  });

export const inferProfileSkills = (profile: {
  primaryRole?: string | null;
  secondaryRoles?: string[] | null;
  domains?: string[] | null;
}) => {
  const skills = new Set<string>();
  const roles = [profile.primaryRole ?? "", ...(profile.secondaryRoles ?? [])];
  const domains = profile.domains ?? [];

  const roleToSkills: Record<string, string[]> = {
    principal_architect: ["system_architecture", "architecture_baseline"],
    systems_architect: ["system_architecture", "architecture_baseline"],
    enterprise_architect: ["enterprise_architecture"],
    security_architect: ["security_controls", "risk_register"],
    risk_analyst: ["risk_register"],
    observability_architect: ["observability"],
    data_architect: ["data_realtime"],
    ot_it_architect: ["it_ot_integration"],
    program_director: ["program_delivery", "delivery_governance"],
    delivery_lead: ["program_delivery"],
    compliance_lead: ["compliance_grc"],
  };

  const domainToSkills: Record<string, string[]> = {
    security_grc: ["security_controls", "compliance_grc"],
    observability: ["observability"],
    ot_it: ["it_ot_integration"],
    data_realtime: ["data_realtime"],
    governance: ["delivery_governance"],
  };

  for (const role of roles) {
    for (const skill of roleToSkills[role] ?? []) {
      const id = ensureSkillId(skill);
      if (id) skills.add(id);
    }
  }

  for (const domain of domains) {
    for (const skill of domainToSkills[domain] ?? []) {
      const id = ensureSkillId(skill);
      if (id) skills.add(id);
    }
  }

  return Array.from(skills);
};

const validateSkillDefaults = () => {
  const invalidDomains = Object.keys(skillDefaults).filter(
    (domainId) => !domainIds.includes(domainId),
  );
  const invalidSkills: string[] = [];

  Object.values(skillDefaults).forEach((deliverableMap) => {
    Object.values(deliverableMap).forEach((requirements) => {
      requirements.skills.forEach((skill) => {
        if (!skillIds.includes(skill.skillId)) invalidSkills.push(skill.skillId);
      });
    });
  });

  if (invalidDomains.length > 0 || invalidSkills.length > 0) {
    console.warn("Invalid skill defaults detected", {
      invalidDomains: Array.from(new Set(invalidDomains)),
      invalidSkills: Array.from(new Set(invalidSkills)),
    });
  }
};

if (process.env.NODE_ENV !== "production") {
  validateSkillDefaults();
}
