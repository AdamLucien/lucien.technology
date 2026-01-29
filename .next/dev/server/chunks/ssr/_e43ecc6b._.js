module.exports = [
"[project]/lib/talent/taxonomy.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "availabilityIds",
    ()=>availabilityIds,
    "availabilityOptions",
    ()=>availabilityOptions,
    "domainIds",
    ()=>domainIds,
    "domainOptions",
    ()=>domainOptions,
    "engagementModeIds",
    ()=>engagementModeIds,
    "engagementModeOptions",
    ()=>engagementModeOptions,
    "languageIds",
    ()=>languageIds,
    "languageOptions",
    ()=>languageOptions,
    "rateBandIds",
    ()=>rateBandIds,
    "rateBandOptions",
    ()=>rateBandOptions,
    "roleGroups",
    ()=>roleGroups,
    "roleIds",
    ()=>roleIds,
    "seniorityIds",
    ()=>seniorityIds,
    "seniorityOptions",
    ()=>seniorityOptions,
    "skillIds",
    ()=>skillIds,
    "skillOptions",
    ()=>skillOptions
]);
const roleGroups = [
    {
        id: "leadership",
        labelKey: "partners.roles.group.leadership",
        roles: [
            {
                id: "fractional_cto",
                labelKey: "partners.roles.leadership.fractional_cto"
            },
            {
                id: "principal_architect",
                labelKey: "partners.roles.leadership.principal_architect"
            },
            {
                id: "program_director",
                labelKey: "partners.roles.leadership.program_director"
            },
            {
                id: "delivery_lead",
                labelKey: "partners.roles.leadership.delivery_lead"
            },
            {
                id: "engagement_manager",
                labelKey: "partners.roles.leadership.engagement_manager"
            }
        ]
    },
    {
        id: "architecture",
        labelKey: "partners.roles.group.architecture",
        roles: [
            {
                id: "systems_architect",
                labelKey: "partners.roles.architecture.systems_architect"
            },
            {
                id: "enterprise_architect",
                labelKey: "partners.roles.architecture.enterprise_architect"
            },
            {
                id: "solution_architect",
                labelKey: "partners.roles.architecture.solution_architect"
            },
            {
                id: "integration_architect",
                labelKey: "partners.roles.architecture.integration_architect"
            },
            {
                id: "ot_it_architect",
                labelKey: "partners.roles.architecture.ot_it_architect"
            },
            {
                id: "security_architect",
                labelKey: "partners.roles.architecture.security_architect"
            },
            {
                id: "data_architect",
                labelKey: "partners.roles.architecture.data_architect"
            },
            {
                id: "platform_architect",
                labelKey: "partners.roles.architecture.platform_architect"
            },
            {
                id: "observability_architect",
                labelKey: "partners.roles.architecture.observability_architect"
            }
        ]
    },
    {
        id: "engineering",
        labelKey: "partners.roles.group.engineering",
        roles: [
            {
                id: "backend_engineer",
                labelKey: "partners.roles.engineering.backend_engineer"
            },
            {
                id: "platform_engineer",
                labelKey: "partners.roles.engineering.platform_engineer"
            },
            {
                id: "sre",
                labelKey: "partners.roles.engineering.sre"
            },
            {
                id: "devops_engineer",
                labelKey: "partners.roles.engineering.devops_engineer"
            },
            {
                id: "data_engineer",
                labelKey: "partners.roles.engineering.data_engineer"
            },
            {
                id: "mlops_engineer",
                labelKey: "partners.roles.engineering.mlops_engineer"
            },
            {
                id: "fullstack_engineer",
                labelKey: "partners.roles.engineering.fullstack_engineer"
            },
            {
                id: "integration_engineer",
                labelKey: "partners.roles.engineering.integration_engineer"
            }
        ]
    },
    {
        id: "industry",
        labelKey: "partners.roles.group.industry",
        roles: [
            {
                id: "industry40_systems_engineer",
                labelKey: "partners.roles.industry.industry40_systems_engineer"
            },
            {
                id: "ot_security_engineer",
                labelKey: "partners.roles.industry.ot_security_engineer"
            },
            {
                id: "ics_engineer",
                labelKey: "partners.roles.industry.ics_engineer"
            },
            {
                id: "mes_mom_engineer",
                labelKey: "partners.roles.industry.mes_mom_engineer"
            },
            {
                id: "industrial_data_engineer",
                labelKey: "partners.roles.industry.industrial_data_engineer"
            },
            {
                id: "manufacturing_systems_analyst",
                labelKey: "partners.roles.industry.manufacturing_systems_analyst"
            },
            {
                id: "automation_engineer",
                labelKey: "partners.roles.industry.automation_engineer"
            }
        ]
    },
    {
        id: "supply_chain",
        labelKey: "partners.roles.group.supply_chain",
        roles: [
            {
                id: "supply_chain_architect",
                labelKey: "partners.roles.supply_chain.supply_chain_architect"
            },
            {
                id: "supply_chain_analyst",
                labelKey: "partners.roles.supply_chain.supply_chain_analyst"
            },
            {
                id: "planning_scheduling_specialist",
                labelKey: "partners.roles.supply_chain.planning_scheduling_specialist"
            },
            {
                id: "logistics_optimization_specialist",
                labelKey: "partners.roles.supply_chain.logistics_optimization_specialist"
            },
            {
                id: "procurement_supplier_risk_specialist",
                labelKey: "partners.roles.supply_chain.procurement_supplier_risk_specialist"
            },
            {
                id: "inventory_optimization_analyst",
                labelKey: "partners.roles.supply_chain.inventory_optimization_analyst"
            }
        ]
    },
    {
        id: "governance",
        labelKey: "partners.roles.group.governance",
        roles: [
            {
                id: "grc_consultant",
                labelKey: "partners.roles.governance.grc_consultant"
            },
            {
                id: "compliance_lead",
                labelKey: "partners.roles.governance.compliance_lead"
            },
            {
                id: "risk_analyst",
                labelKey: "partners.roles.governance.risk_analyst"
            },
            {
                id: "control_owner_auditor",
                labelKey: "partners.roles.governance.control_owner_auditor"
            }
        ]
    },
    {
        id: "product",
        labelKey: "partners.roles.group.product",
        roles: [
            {
                id: "product_manager_b2b",
                labelKey: "partners.roles.product.product_manager_b2b"
            },
            {
                id: "business_analyst",
                labelKey: "partners.roles.product.business_analyst"
            },
            {
                id: "technical_writer_controlled_docs",
                labelKey: "partners.roles.product.technical_writer_controlled_docs"
            },
            {
                id: "ux_enterprise_systems",
                labelKey: "partners.roles.product.ux_enterprise_systems"
            }
        ]
    }
];
const domainOptions = [
    {
        id: "industry4",
        labelKey: "partners.domains.industry4"
    },
    {
        id: "supply_chain",
        labelKey: "partners.domains.supply_chain"
    },
    {
        id: "ot_it",
        labelKey: "partners.domains.ot_it"
    },
    {
        id: "ai_architecture",
        labelKey: "partners.domains.ai_architecture"
    },
    {
        id: "security_grc",
        labelKey: "partners.domains.security_grc"
    },
    {
        id: "observability",
        labelKey: "partners.domains.observability"
    },
    {
        id: "governance",
        labelKey: "partners.domains.governance"
    },
    {
        id: "data_realtime",
        labelKey: "partners.domains.data_realtime"
    },
    {
        id: "manufacturing_systems",
        labelKey: "partners.domains.manufacturing_systems"
    },
    {
        id: "mes_mom",
        labelKey: "partners.domains.mes_mom"
    },
    {
        id: "erp_integration",
        labelKey: "partners.domains.erp_integration"
    }
];
const seniorityOptions = [
    {
        id: "ic_senior",
        labelKey: "partners.seniority.ic_senior"
    },
    {
        id: "staff",
        labelKey: "partners.seniority.staff"
    },
    {
        id: "principal",
        labelKey: "partners.seniority.principal"
    },
    {
        id: "lead",
        labelKey: "partners.seniority.lead"
    },
    {
        id: "director",
        labelKey: "partners.seniority.director"
    }
];
const availabilityOptions = [
    {
        id: "now",
        labelKey: "partners.availability.now"
    },
    {
        id: "two_four_weeks",
        labelKey: "partners.availability.two_four_weeks"
    },
    {
        id: "one_two_months",
        labelKey: "partners.availability.one_two_months"
    },
    {
        id: "three_plus_months",
        labelKey: "partners.availability.three_plus_months"
    }
];
const engagementModeOptions = [
    {
        id: "remote",
        labelKey: "partners.modes.remote"
    },
    {
        id: "onsite",
        labelKey: "partners.modes.onsite"
    },
    {
        id: "hybrid",
        labelKey: "partners.modes.hybrid"
    },
    {
        id: "travel",
        labelKey: "partners.modes.travel"
    }
];
const rateBandOptions = [
    {
        id: "under_100",
        labelKey: "partners.rateBand.under_100"
    },
    {
        id: "100_150",
        labelKey: "partners.rateBand.100_150"
    },
    {
        id: "150_200",
        labelKey: "partners.rateBand.150_200"
    },
    {
        id: "200_plus",
        labelKey: "partners.rateBand.200_plus"
    },
    {
        id: "negotiable",
        labelKey: "partners.rateBand.negotiable"
    }
];
const languageOptions = [
    {
        id: "en",
        labelKey: "partners.languages.en"
    },
    {
        id: "cs",
        labelKey: "partners.languages.cs"
    },
    {
        id: "de",
        labelKey: "partners.languages.de"
    },
    {
        id: "it",
        labelKey: "partners.languages.it"
    },
    {
        id: "uk",
        labelKey: "partners.languages.uk"
    },
    {
        id: "zh",
        labelKey: "partners.languages.zh"
    }
];
const skillOptions = [
    {
        id: "system_architecture",
        labelKey: "skills.system_architecture",
        groupId: "architecture"
    },
    {
        id: "enterprise_architecture",
        labelKey: "skills.enterprise_architecture",
        groupId: "architecture"
    },
    {
        id: "security_controls",
        labelKey: "skills.security_controls",
        groupId: "security"
    },
    {
        id: "risk_register",
        labelKey: "skills.risk_register",
        groupId: "risk"
    },
    {
        id: "it_ot_integration",
        labelKey: "skills.it_ot_integration",
        groupId: "integration"
    },
    {
        id: "data_realtime",
        labelKey: "skills.data_realtime",
        groupId: "data"
    },
    {
        id: "observability",
        labelKey: "skills.observability",
        groupId: "operations"
    },
    {
        id: "delivery_governance",
        labelKey: "skills.delivery_governance",
        groupId: "delivery"
    },
    {
        id: "compliance_grc",
        labelKey: "skills.compliance_grc",
        groupId: "governance"
    },
    {
        id: "program_delivery",
        labelKey: "skills.program_delivery",
        groupId: "delivery"
    },
    {
        id: "documentation_controlled",
        labelKey: "skills.documentation_controlled",
        groupId: "governance"
    },
    {
        id: "architecture_baseline",
        labelKey: "skills.architecture_baseline",
        groupId: "architecture"
    }
];
const roleIds = roleGroups.flatMap((group)=>group.roles.map((role)=>role.id));
const domainIds = domainOptions.map((option)=>option.id);
const seniorityIds = seniorityOptions.map((option)=>option.id);
const availabilityIds = availabilityOptions.map((option)=>option.id);
const engagementModeIds = engagementModeOptions.map((option)=>option.id);
const rateBandIds = rateBandOptions.map((option)=>option.id);
const languageIds = languageOptions.map((option)=>option.id);
const skillIds = skillOptions.map((option)=>option.id);
}),
"[project]/lib/talent/skill-defaults.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getRequirementsForScope",
    ()=>getRequirementsForScope,
    "inferProfileSkills",
    ()=>inferProfileSkills,
    "inferRequirementsFromDeliverables",
    ()=>inferRequirementsFromDeliverables,
    "mergeRequirements",
    ()=>mergeRequirements,
    "skillDefaults",
    ()=>skillDefaults
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$talent$2f$taxonomy$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/talent/taxonomy.ts [app-rsc] (ecmascript)");
;
const ensureSkillId = (skillId)=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$talent$2f$taxonomy$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["skillIds"].includes(skillId) ? skillId : null;
const skillDefaults = {
    // ---- OT / IT convergence ----
    ot_it: {
        IT_OT_CONVERGENCE_PLAN: {
            skills: [
                {
                    skillId: "it_ot_integration",
                    must: true,
                    level: "advanced"
                },
                {
                    skillId: "system_architecture",
                    must: true,
                    level: "advanced"
                },
                {
                    skillId: "architecture_baseline",
                    must: false,
                    level: "intermediate"
                }
            ]
        }
    },
    // ---- Supply chain ----
    supply_chain: {
        SUPPLY_CHAIN_DIAGNOSTIC: {
            skills: [
                {
                    skillId: "program_delivery",
                    must: true,
                    level: "advanced"
                },
                {
                    skillId: "delivery_governance",
                    must: false,
                    level: "intermediate"
                }
            ]
        },
        RESILIENCE_PROGRAM: {
            skills: [
                {
                    skillId: "risk_register",
                    must: true,
                    level: "advanced"
                },
                {
                    skillId: "delivery_governance",
                    must: false,
                    level: "intermediate"
                }
            ]
        }
    },
    // ---- Security / GRC ----
    security_grc: {
        CONTROL_BASELINE: {
            skills: [
                {
                    skillId: "security_controls",
                    must: true,
                    level: "advanced"
                },
                {
                    skillId: "compliance_grc",
                    must: true,
                    level: "advanced"
                },
                {
                    skillId: "risk_register",
                    must: true,
                    level: "advanced"
                }
            ]
        },
        DISCLOSURE_READINESS: {
            skills: [
                {
                    skillId: "compliance_grc",
                    must: true,
                    level: "advanced"
                },
                {
                    skillId: "documentation_controlled",
                    must: false,
                    level: "intermediate"
                }
            ]
        }
    },
    // ---- Governance / transformation ----
    governance: {
        PROGRAM_RECOVERY: {
            skills: [
                {
                    skillId: "program_delivery",
                    must: true,
                    level: "advanced"
                },
                {
                    skillId: "delivery_governance",
                    must: true,
                    level: "advanced"
                }
            ]
        }
    },
    // ---- Data / realtime ----
    data_realtime: {
        DATA_PLATFORM_ROADMAP: {
            skills: [
                {
                    skillId: "data_realtime",
                    must: true,
                    level: "advanced"
                },
                {
                    skillId: "security_controls",
                    must: false,
                    level: "intermediate"
                }
            ]
        }
    },
    // ---- Observability ----
    observability: {
        OPS_READINESS: {
            skills: [
                {
                    skillId: "observability",
                    must: true,
                    level: "advanced"
                },
                {
                    skillId: "delivery_governance",
                    must: false,
                    level: "intermediate"
                }
            ]
        }
    },
    // ---- Industry / manufacturing ----
    industry4: {
        SYSTEM_ASSESSMENT: {
            skills: [
                {
                    skillId: "system_architecture",
                    must: true,
                    level: "advanced"
                },
                {
                    skillId: "architecture_baseline",
                    must: true,
                    level: "advanced"
                },
                {
                    skillId: "risk_register",
                    must: false,
                    level: "intermediate"
                }
            ]
        }
    },
    manufacturing_systems: {
        SYSTEMS_MODERNIZATION: {
            skills: [
                {
                    skillId: "enterprise_architecture",
                    must: true,
                    level: "advanced"
                },
                {
                    skillId: "system_architecture",
                    must: true,
                    level: "advanced"
                }
            ]
        }
    },
    mes_mom: {
        MES_INTEGRATION: {
            skills: [
                {
                    skillId: "system_architecture",
                    must: true,
                    level: "advanced"
                },
                {
                    skillId: "it_ot_integration",
                    must: false,
                    level: "intermediate"
                }
            ]
        }
    },
    erp_integration: {
        ERP_INTEGRATION: {
            skills: [
                {
                    skillId: "enterprise_architecture",
                    must: true,
                    level: "advanced"
                },
                {
                    skillId: "system_architecture",
                    must: false,
                    level: "intermediate"
                }
            ]
        }
    },
    // ---- AI architecture ----
    ai_architecture: {
        AI_RISK_REVIEW: {
            skills: [
                {
                    skillId: "security_controls",
                    must: true,
                    level: "advanced"
                },
                {
                    skillId: "risk_register",
                    must: true,
                    level: "advanced"
                }
            ]
        }
    }
};
function mergeRequirements(base, add) {
    const bySkill = new Map();
    for (const s of base.skills ?? [])bySkill.set(s.skillId, s);
    for (const s of add.skills ?? []){
        const prev = bySkill.get(s.skillId);
        if (!prev) bySkill.set(s.skillId, s);
        else {
            bySkill.set(s.skillId, {
                skillId: s.skillId,
                must: prev.must || s.must,
                level: pickHigherLevel(prev.level, s.level)
            });
        }
    }
    return {
        skills: Array.from(bySkill.values()),
        certs: mergeBoolList(base.certs, add.certs, "certId"),
        tools: mergeBoolList(base.tools, add.tools, "toolId")
    };
}
function makeBoolEntry(key, id, must) {
    return {
        [key]: id,
        must
    };
}
function mergeBoolList(a, b, key) {
    if (!a && !b) return undefined;
    const m = new Map();
    for (const item of a ?? [])m.set(String(item[key]), {
        id: String(item[key]),
        must: item.must
    });
    for (const item of b ?? []){
        const id = String(item[key]);
        const prev = m.get(id);
        m.set(id, {
            id,
            must: (prev?.must ?? false) || item.must
        });
    }
    return Array.from(m.entries()).map(([id, v])=>makeBoolEntry(key, id, v.must));
}
function pickHigherLevel(a, b) {
    const rank = {
        basic: 1,
        intermediate: 2,
        advanced: 3,
        expert: 4
    };
    if (!a) return b;
    if (!b) return a;
    return rank[b] > rank[a] ? b : a;
}
function getRequirementsForScope(params) {
    const { domainIds, deliverableTypes } = params;
    let req = {
        skills: []
    };
    for (const d of domainIds){
        const map = skillDefaults[d];
        if (!map) continue;
        for (const t of deliverableTypes){
            const add = map[t];
            if (!add) continue;
            req = mergeRequirements(req, add);
        }
    }
    return req;
}
const inferRequirementsFromDeliverables = ({ deliverables, domainIds })=>getRequirementsForScope({
        domainIds: domainIds ?? [],
        deliverableTypes: deliverables
    });
const inferProfileSkills = (profile)=>{
    const skills = new Set();
    const roles = [
        profile.primaryRole ?? "",
        ...profile.secondaryRoles ?? []
    ];
    const domains = profile.domains ?? [];
    const roleToSkills = {
        principal_architect: [
            "system_architecture",
            "architecture_baseline"
        ],
        systems_architect: [
            "system_architecture",
            "architecture_baseline"
        ],
        enterprise_architect: [
            "enterprise_architecture"
        ],
        security_architect: [
            "security_controls",
            "risk_register"
        ],
        risk_analyst: [
            "risk_register"
        ],
        observability_architect: [
            "observability"
        ],
        data_architect: [
            "data_realtime"
        ],
        ot_it_architect: [
            "it_ot_integration"
        ],
        program_director: [
            "program_delivery",
            "delivery_governance"
        ],
        delivery_lead: [
            "program_delivery"
        ],
        compliance_lead: [
            "compliance_grc"
        ]
    };
    const domainToSkills = {
        security_grc: [
            "security_controls",
            "compliance_grc"
        ],
        observability: [
            "observability"
        ],
        ot_it: [
            "it_ot_integration"
        ],
        data_realtime: [
            "data_realtime"
        ],
        governance: [
            "delivery_governance"
        ]
    };
    for (const role of roles){
        for (const skill of roleToSkills[role] ?? []){
            const id = ensureSkillId(skill);
            if (id) skills.add(id);
        }
    }
    for (const domain of domains){
        for (const skill of domainToSkills[domain] ?? []){
            const id = ensureSkillId(skill);
            if (id) skills.add(id);
        }
    }
    return Array.from(skills);
};
const validateSkillDefaults = ()=>{
    const invalidDomains = Object.keys(skillDefaults).filter((domainId)=>!__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$talent$2f$taxonomy$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["domainIds"].includes(domainId));
    const invalidSkills = [];
    Object.values(skillDefaults).forEach((deliverableMap)=>{
        Object.values(deliverableMap).forEach((requirements)=>{
            requirements.skills.forEach((skill)=>{
                if (!__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$talent$2f$taxonomy$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["skillIds"].includes(skill.skillId)) invalidSkills.push(skill.skillId);
            });
        });
    });
    if (invalidDomains.length > 0 || invalidSkills.length > 0) {
        console.warn("Invalid skill defaults detected", {
            invalidDomains: Array.from(new Set(invalidDomains)),
            invalidSkills: Array.from(new Set(invalidSkills))
        });
    }
};
if ("TURBOPACK compile-time truthy", 1) {
    validateSkillDefaults();
}
}),
"[project]/lib/talent/match.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "runMatchingForIntent",
    ()=>runMatchingForIntent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/prisma.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$talent$2f$skill$2d$defaults$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/talent/skill-defaults.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$talent$2f$taxonomy$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/talent/taxonomy.ts [app-rsc] (ecmascript)");
;
;
;
async function runMatchingForIntent(intentId, orgId) {
    const intent = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].staffingIntent.findFirst({
        where: {
            id: intentId,
            orgId
        }
    });
    if (!intent) {
        return {
            ok: false,
            reason: "not_found"
        };
    }
    const rolesJson = intent.rolesJson ?? [];
    const requirements = intent.requirementsJson ?? {
        skills: []
    };
    const requiredRoleIds = rolesJson.map((role)=>role.roleId).filter((roleId)=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$talent$2f$taxonomy$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["roleIds"].includes(roleId));
    const mustSkills = (requirements.skills ?? []).filter((skill)=>skill.must);
    const profiles = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].talentProfile.findMany({
        orderBy: {
            updatedAt: "desc"
        }
    });
    const upserts = [];
    for (const profile of profiles){
        const matchedRoles = new Set();
        const profileRoles = [
            profile.primaryRole,
            ...profile.secondaryRoles ?? []
        ].filter(Boolean);
        for (const roleId of profileRoles){
            if (requiredRoleIds.includes(roleId)) {
                matchedRoles.add(roleId);
            }
        }
        const profileSkills = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$talent$2f$skill$2d$defaults$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["inferProfileSkills"])(profile);
        const matchedSkills = new Set();
        const missingMustSkills = [];
        for (const skill of mustSkills){
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
            profileSkills
        };
        upserts.push(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].talentMatch.upsert({
            where: {
                staffingIntentId_talentProfileId: {
                    staffingIntentId: intent.id,
                    talentProfileId: profile.id
                }
            },
            update: {
                score,
                reasonsJson
            },
            create: {
                staffingIntentId: intent.id,
                talentProfileId: profile.id,
                score,
                reasonsJson,
                status: "SUGGESTED"
            }
        }));
    }
    await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].$transaction(upserts);
    return {
        ok: true,
        matched: profiles.length
    };
}
}),
"[project]/lib/i18n.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getClientLocale",
    ()=>getClientLocale,
    "getLocaleFromRequest",
    ()=>getLocaleFromRequest,
    "normalizeLocale",
    ()=>normalizeLocale,
    "supportedLocales",
    ()=>supportedLocales,
    "t",
    ()=>t
]);
const supportedLocales = [
    "en",
    "cs",
    "de",
    "it",
    "uk",
    "zh"
];
const localeAliases = {
    en: "en",
    cs: "cs",
    cz: "cs",
    de: "de",
    it: "it",
    uk: "uk",
    zh: "zh",
    "zh-cn": "zh",
    "zh-hans": "zh",
    "zh-sg": "zh",
    "zh-hant": "zh"
};
const dictionary = {
    en: {
        "marketplace.intake.title": "AI-assisted intake",
        "marketplace.intake.subtitle": "Describe the problem, constraints, and urgency",
        "marketplace.intake.description": "This is an assistive layer for scoping. We use your brief to map to the most relevant Lucien engagements.",
        "marketplace.intake.brief.label": "Problem brief",
        "marketplace.intake.brief.placeholder": "Problem, constraints, dependencies, urgency, and any required delivery mode.",
        "marketplace.intake.wordCount": "{count}/{max} words",
        "marketplace.intake.recommendationsNote": "Recommendations map to existing services only.",
        "marketplace.intake.button.recommend": "Get recommendations",
        "marketplace.intake.button.clear": "Clear",
        "marketplace.intake.error.briefRequired": "Provide a short problem brief to get recommendations.",
        "marketplace.intake.error.briefTooLong": "Please keep the brief under {max} words.",
        "marketplace.intake.error.generic": "We could not generate recommendations. Try again.",
        "marketplace.intake.error.noMatches": "No direct matches yet. Submit a scope request and we will map your problem.",
        "marketplace.intake.analyzing.title": "Analyzing brief",
        "marketplace.intake.analyzing.step.extract": "Extract",
        "marketplace.intake.analyzing.step.match": "Match",
        "marketplace.intake.analyzing.step.recommend": "Recommend",
        "marketplace.intake.results.title": "Recommended engagements",
        "marketplace.intake.results.primary": "Primary recommendation",
        "marketplace.intake.results.more": "Additional options",
        "marketplace.intake.fit.high": "High fit",
        "marketplace.intake.fit.medium": "Medium fit",
        "marketplace.intake.fit.low": "Low fit",
        "marketplace.intake.confidence": "Confidence {value}%",
        "marketplace.intake.reason.tagMatch": "Matches your stated priorities.",
        "marketplace.intake.reason.urgencyHigh": "Aligned with urgent timelines.",
        "marketplace.intake.reason.urgencyMedium": "Aligned with near-term timelines.",
        "marketplace.intake.reason.urgencyLow": "Aligned with strategic timelines.",
        "marketplace.intake.reason.deliveryMatch": "Delivery mode fits the stated constraints.",
        "marketplace.intake.reason.domainSecurity": "Addresses security and control risks.",
        "marketplace.intake.reason.domainCompliance": "Built for compliance and audit readiness.",
        "marketplace.intake.reason.domainIntegration": "Targets integration and interoperability gaps.",
        "marketplace.intake.reason.domainObservability": "Improves visibility and monitoring.",
        "marketplace.intake.reason.domainPerformance": "Focuses on performance and latency.",
        "marketplace.intake.reason.domainResilience": "Centers on resilience and response.",
        "marketplace.intake.reason.domainAI": "Supports AI and decision enablement.",
        "marketplace.intake.reason.domainGovernance": "Strengthens governance and scope control.",
        "marketplace.intake.card.view": "View details",
        "marketplace.intake.card.requestScope": "Request scope",
        "marketplace.intake.card.addShortlist": "Add to shortlist",
        "marketplace.intake.card.removeShortlist": "Remove",
        "marketplace.intake.shortlist.title": "Shortlist",
        "marketplace.intake.shortlist.helper": "Pick up to {max} services for a single scope request.",
        "marketplace.intake.shortlist.empty": "Add services to build a shortlist.",
        "marketplace.intake.shortlist.limit": "Shortlist limit reached.",
        "marketplace.intake.shortlist.open": "Open shortlist",
        "marketplace.intake.shortlist.close": "Close",
        "marketplace.intake.shortlist.cta": "Generate scope request",
        "marketplace.intake.sheet.title": "Generate scope request",
        "marketplace.intake.sheet.summary.label": "Extracted summary",
        "marketplace.intake.sheet.summary.placeholder": "Add or adjust the summary before requesting scope.",
        "marketplace.intake.sheet.selected.label": "Selected services",
        "marketplace.intake.sheet.continue": "Continue",
        "marketplace.intake.sheet.cancel": "Cancel",
        "marketplace.intake.summary.tags": "Tags: {tags}",
        "marketplace.intake.summary.urgency": "Urgency: {urgency}",
        "marketplace.intake.summary.constraints": "Constraints: {constraints}",
        "marketplace.intake.summary.context": "Context: {context}",
        "marketplace.intake.summary.general": "general",
        "marketplace.intake.summary.none": "none",
        "marketplace.intake.prefill.notice": "An intake summary was prepared from your brief. Edit the note if needed.",
        "footer.group.explore": "Explore",
        "footer.partners.title": "Partners & Experts",
        "footer.brand.tagline": "Systems thinking for mission-critical technology. Structured, measured, and aligned with enterprise realities.",
        "footer.link.marketplace": "Marketplace",
        "footer.link.how": "How We Work",
        "footer.link.procurement": "Procurement",
        "footer.link.security": "Security",
        "footer.link.insights": "Insights",
        "footer.link.about": "About",
        "footer.link.legal": "Legal",
        "footer.link.contact": "Contact",
        "footer.partners.join": "Join the network",
        "footer.partners.how": "How it works",
        "footer.partners.roles": "Roles",
        "footer.partners.companies": "Company partners",
        "footer.legal.copyright": "Copyright {year} {name}. All rights reserved.",
        "footer.legal.engagements": "Engagements are subject to lawful use and risk-managed delivery.",
        "footer.legal.domain": "Domain: {domain}",
        "partners.hero.eyebrow": "Expert network",
        "partners.hero.title": "Partners and experts for mission-critical delivery",
        "partners.hero.subtitle": "Share your signal profile and we will match you to scoped engagements with clear boundaries, governance, and auditability.",
        "partners.hero.cta.primary": "Submit signal",
        "partners.hero.cta.secondary": "How it works",
        "partners.signals.i4.title": "Industry 4.0 readiness",
        "partners.signals.i4.body": "OT/IT alignment, shopfloor telemetry, safe rollout.",
        "partners.signals.sc.title": "Supply chain clarity",
        "partners.signals.sc.body": "Constraints, risk, delivery windows, cost levers.",
        "partners.signals.mc.title": "Mission-critical delivery",
        "partners.signals.mc.body": "Scoped engagements, controlled change, audit trail.",
        "partners.how.title": "How it works",
        "partners.how.subtitle": "Three steps from signal to engagement.",
        "partners.how.step1.title": "Submit signal",
        "partners.how.step1.body": "Share role, domain focus, availability, and constraints.",
        "partners.how.step2.title": "Lucien review and match",
        "partners.how.step2.body": "We validate fit and match to scoped engagements and teams.",
        "partners.how.step3.title": "Engagement start",
        "partners.how.step3.body": "Onboarding runs through HR traceability with clear scope.",
        "partners.roles.title": "Open roles (examples)",
        "partners.roles.subtitle": "Primary role plus optional secondary specialties.",
        "partners.roles.group.leadership": "Leadership",
        "partners.roles.group.architecture": "Architecture",
        "partners.roles.group.engineering": "Engineering",
        "partners.roles.group.industry": "Industry 4.0 / OT",
        "partners.roles.group.supply_chain": "Supply Chain",
        "partners.roles.group.governance": "Governance / Risk",
        "partners.roles.group.product": "Product / Analysis",
        "partners.roles.leadership.fractional_cto": "Fractional CTO",
        "partners.roles.leadership.principal_architect": "Principal Architect",
        "partners.roles.leadership.program_director": "Program Director",
        "partners.roles.leadership.delivery_lead": "Delivery Lead",
        "partners.roles.leadership.engagement_manager": "Engagement Manager",
        "partners.roles.architecture.systems_architect": "Systems Architect",
        "partners.roles.architecture.enterprise_architect": "Enterprise Architect",
        "partners.roles.architecture.solution_architect": "Solution Architect",
        "partners.roles.architecture.integration_architect": "Integration Architect",
        "partners.roles.architecture.ot_it_architect": "OT/IT Architect",
        "partners.roles.architecture.security_architect": "Security Architect",
        "partners.roles.architecture.data_architect": "Data Architect",
        "partners.roles.architecture.platform_architect": "Platform Architect",
        "partners.roles.architecture.observability_architect": "Observability Architect",
        "partners.roles.engineering.backend_engineer": "Backend Engineer",
        "partners.roles.engineering.platform_engineer": "Platform Engineer",
        "partners.roles.engineering.sre": "SRE / Reliability Engineer",
        "partners.roles.engineering.devops_engineer": "DevOps Engineer",
        "partners.roles.engineering.data_engineer": "Data Engineer",
        "partners.roles.engineering.mlops_engineer": "MLOps Engineer",
        "partners.roles.engineering.fullstack_engineer": "Full-stack Engineer",
        "partners.roles.engineering.integration_engineer": "Integration Engineer",
        "partners.roles.industry.industry40_systems_engineer": "Industry 4.0 Systems Engineer",
        "partners.roles.industry.ot_security_engineer": "OT Security Engineer",
        "partners.roles.industry.ics_engineer": "ICS Engineer (SCADA/PLC)",
        "partners.roles.industry.mes_mom_engineer": "MES/MOM Engineer",
        "partners.roles.industry.industrial_data_engineer": "Industrial Data Engineer",
        "partners.roles.industry.manufacturing_systems_analyst": "Manufacturing Systems Analyst",
        "partners.roles.industry.automation_engineer": "Automation Engineer",
        "partners.roles.supply_chain.supply_chain_architect": "Supply Chain Architect",
        "partners.roles.supply_chain.supply_chain_analyst": "Supply Chain Analyst",
        "partners.roles.supply_chain.planning_scheduling_specialist": "Planning & Scheduling Specialist",
        "partners.roles.supply_chain.logistics_optimization_specialist": "Logistics Optimization Specialist",
        "partners.roles.supply_chain.procurement_supplier_risk_specialist": "Procurement & Supplier Risk Specialist",
        "partners.roles.supply_chain.inventory_optimization_analyst": "Inventory Optimization Analyst",
        "partners.roles.governance.grc_consultant": "GRC Consultant",
        "partners.roles.governance.compliance_lead": "Compliance Lead",
        "partners.roles.governance.risk_analyst": "Risk Analyst",
        "partners.roles.governance.control_owner_auditor": "Control Owner / Auditor",
        "partners.roles.product.product_manager_b2b": "Product Manager (B2B)",
        "partners.roles.product.business_analyst": "Business Analyst",
        "partners.roles.product.technical_writer_controlled_docs": "Technical Writer (controlled docs)",
        "partners.roles.product.ux_enterprise_systems": "UX for Enterprise Systems",
        "partners.companies.title": "Company partners",
        "partners.companies.body": "Consultancies, boutiques, and independent networks can submit a company signal to coordinate multi-role delivery. We focus on accountability, clear staffing, and scoped outcomes.",
        "partners.companies.highlight": "Company partners receive scoped briefs, talent alignment, and clear HR traceability before delivery begins.",
        "partners.join.title": "Signal profile",
        "partners.join.subtitle": "Stage 1 intake (2-3 minutes). No CV required.",
        "partners.form.fullName.label": "Full name",
        "partners.form.fullName.placeholder": "Name and surname",
        "partners.form.email.label": "Work email",
        "partners.form.email.placeholder": "name@company.com",
        "partners.form.locationTimezone.label": "Location / timezone",
        "partners.form.locationTimezone.placeholder": "City, country, or UTC offset",
        "partners.form.linkedIn.label": "LinkedIn URL",
        "partners.form.linkedIn.placeholder": "https://linkedin.com/in/...",
        "partners.form.primaryRole.label": "Primary role",
        "partners.form.primaryRole.placeholder": "Select a primary role",
        "partners.form.secondaryRoles.label": "Secondary roles (optional)",
        "partners.form.secondaryRoles.helper": "Select additional specialties to improve matching.",
        "partners.form.domains.label": "Domain focus",
        "partners.form.domains.helper": "Pick at least one domain to describe your signal.",
        "partners.form.seniority.label": "Seniority",
        "partners.form.seniority.placeholder": "Select seniority",
        "partners.form.availability.label": "Availability window",
        "partners.form.availability.placeholder": "Select availability",
        "partners.form.engagementModes.label": "Engagement modes",
        "partners.form.engagementModes.helper": "Select all that apply.",
        "partners.form.rateBand.label": "Rate band (optional)",
        "partners.form.rateBand.placeholder": "Select rate band",
        "partners.form.languages.label": "Languages",
        "partners.form.languages.helper": "Optional, to help match stakeholders.",
        "partners.form.honeypot.label": "Company website",
        "partners.form.consent.label": "I consent to Lucien storing my signal profile and contacting me for matching.",
        "partners.form.submit": "Submit signal",
        "partners.form.submitSticky": "Submit signal",
        "partners.form.submitting": "Submitting",
        "partners.form.error.generic": "We could not submit the signal. Please try again.",
        "partners.form.error.rateLimit": "Too many submissions. Please wait and try again.",
        "partners.form.error.invalid": "Check required fields and try again.",
        "partners.form.error.unavailable": "Signals are temporarily unavailable. Please try again shortly.",
        "partners.success.title": "Signal received",
        "partners.success.subtitle": "We will review and respond with next steps.",
        "partners.success.summary.title": "Your signal summary",
        "partners.success.next": "Lucien will confirm access if needed.",
        "partners.summary.fullName": "Name",
        "partners.summary.email": "Email",
        "partners.summary.locationTimezone": "Location / timezone",
        "partners.summary.linkedIn": "LinkedIn",
        "partners.summary.primaryRole": "Primary role",
        "partners.summary.secondaryRoles": "Secondary roles",
        "partners.summary.domains": "Domains",
        "partners.summary.seniority": "Seniority",
        "partners.summary.availability": "Availability",
        "partners.summary.engagementModes": "Engagement modes",
        "partners.summary.rateBand": "Rate band",
        "partners.summary.languages": "Languages",
        "partners.summary.none": "Not provided",
        "partners.domains.industry4": "Industry 4.0",
        "partners.domains.supply_chain": "Supply Chain",
        "partners.domains.ot_it": "OT/IT Integration",
        "partners.domains.ai_architecture": "AI Architecture",
        "partners.domains.security_grc": "Security & GRC",
        "partners.domains.observability": "Observability & Reliability",
        "partners.domains.governance": "Governance / Controls / Compliance",
        "partners.domains.data_realtime": "Data & Realtime Systems",
        "partners.domains.manufacturing_systems": "Manufacturing Systems",
        "partners.domains.mes_mom": "MES/MOM",
        "partners.domains.erp_integration": "ERP Integration",
        "partners.seniority.ic_senior": "IC Senior",
        "partners.seniority.staff": "Staff",
        "partners.seniority.principal": "Principal",
        "partners.seniority.lead": "Lead",
        "partners.seniority.director": "Director",
        "partners.availability.now": "Now",
        "partners.availability.two_four_weeks": "2-4 weeks",
        "partners.availability.one_two_months": "1-2 months",
        "partners.availability.three_plus_months": "3+ months",
        "partners.modes.remote": "Remote",
        "partners.modes.onsite": "On-site",
        "partners.modes.hybrid": "Hybrid",
        "partners.modes.travel": "Travel",
        "partners.rateBand.under_100": "Under 100",
        "partners.rateBand.100_150": "100-150",
        "partners.rateBand.150_200": "150-200",
        "partners.rateBand.200_plus": "200+",
        "partners.rateBand.negotiable": "Negotiable",
        "partners.languages.en": "English",
        "partners.languages.cs": "Czech",
        "partners.languages.de": "German",
        "partners.languages.it": "Italian",
        "partners.languages.uk": "Ukrainian",
        "partners.languages.zh": "Chinese (Simplified)",
        "portal.hr.talent.title": "Talent",
        "portal.hr.talent.subtitle": "Partner profiles and signal history.",
        "portal.hr.talent.filters.status": "Status",
        "portal.hr.talent.filters.domain": "Domain",
        "portal.hr.talent.filters.all": "All",
        "portal.hr.talent.filters.apply": "Apply",
        "portal.hr.talent.status.new": "New",
        "portal.hr.talent.status.reviewed": "Reviewed",
        "portal.hr.talent.status.approved": "Approved",
        "portal.hr.talent.status.archived": "Archived",
        "portal.hr.talent.contactStatus.not_contacted": "Not contacted",
        "portal.hr.talent.contactStatus.contacted": "Contacted",
        "portal.hr.talent.contactStatus.responded": "Responded",
        "portal.hr.talent.contactStatus.onboarded": "Onboarded",
        "portal.hr.talent.empty": "No talent profiles yet.",
        "portal.hr.talent.missing.title": "Talent tables are missing",
        "portal.hr.talent.missing.body": "Run the latest migrations to initialize partner tables.",
        "portal.hr.talent.missing.cta": "Run migrations",
        "portal.hr.talent.list.signals": "Signals",
        "portal.hr.talent.list.last": "Last updated",
        "portal.hr.talent.detail.title": "Profile detail",
        "portal.hr.talent.detail.signals": "Signal history",
        "portal.hr.talent.detail.assignments": "Assignments",
        "portal.hr.talent.detail.notes": "Notes",
        "portal.hr.talent.detail.update": "Update profile",
        "portal.hr.talent.detail.noSignals": "No signals yet.",
        "portal.hr.talent.detail.noAssignments": "No assignments recorded.",
        "portal.hr.talent.detail.status": "Status",
        "portal.hr.talent.detail.contactStatus": "Contact status",
        "portal.hr.talent.detail.empty": "Select a profile to view details."
    },
    cs: {},
    de: {},
    it: {},
    uk: {},
    zh: {}
};
const fallbackLocale = "en";
const dictionaryTable = dictionary;
const normalizeLocale = (value)=>{
    if (!value) return null;
    const cleaned = value.toLowerCase().trim();
    const direct = localeAliases[cleaned];
    if (direct) return direct;
    const base = cleaned.split(/[-_]/)[0];
    return localeAliases[base] ?? null;
};
const getCookieValue = (cookieHeader, name)=>{
    if (!cookieHeader) return null;
    const cookies = cookieHeader.split(";").map((entry)=>entry.trim());
    for (const cookie of cookies){
        const [key, ...rest] = cookie.split("=");
        if (key === name) {
            return decodeURIComponent(rest.join("="));
        }
    }
    return null;
};
const getLocaleFromAcceptLanguage = (header)=>{
    if (!header) return null;
    const locales = header.split(",").map((item)=>item.split(";")[0]?.trim());
    for (const locale of locales){
        const resolved = normalizeLocale(locale);
        if (resolved) return resolved;
    }
    return null;
};
async function getLocaleFromRequest(request) {
    if (request) {
        const url = new URL(request.url);
        const paramLocale = normalizeLocale(url.searchParams.get("lang"));
        if (paramLocale) return paramLocale;
        const cookieLocale = normalizeLocale(getCookieValue(request.headers.get("cookie"), "lang") ?? getCookieValue(request.headers.get("cookie"), "locale"));
        if (cookieLocale) return cookieLocale;
        const headerLocale = getLocaleFromAcceptLanguage(request.headers.get("accept-language"));
        if (headerLocale) return headerLocale;
        return fallbackLocale;
    }
    try {
        const { cookies, headers } = await __turbopack_context__.A("[project]/node_modules/next/headers.js [app-rsc] (ecmascript, async loader)");
        const cookieStore = await cookies();
        const storedLocale = cookieStore.get("lang")?.value ?? cookieStore.get("locale")?.value ?? null;
        const normalizedLocale = normalizeLocale(storedLocale);
        if (normalizedLocale) return normalizedLocale;
        const headerStore = await headers();
        const headerLocale = getLocaleFromAcceptLanguage(headerStore.get("accept-language"));
        if (headerLocale) return headerLocale;
    } catch  {
    // Fall through to fallback locale.
    }
    return fallbackLocale;
}
function getClientLocale(fallback = fallbackLocale) {
    if ("TURBOPACK compile-time truthy", 1) return fallback;
    //TURBOPACK unreachable
    ;
    const params = undefined;
    const paramLocale = undefined;
    const docLocale = undefined;
    const navLocale = undefined;
}
function t(key, arg1, arg2) {
    let params = {};
    let locale = fallbackLocale;
    if (typeof arg1 === "string") {
        locale = normalizeLocale(arg1) ?? fallbackLocale;
        if (arg2 && typeof arg2 === "object") {
            params = arg2;
        }
    } else if (arg1 && typeof arg1 === "object") {
        params = arg1;
        if (typeof arg2 === "string") {
            locale = normalizeLocale(arg2) ?? fallbackLocale;
        }
    }
    const table = dictionaryTable[locale] ?? dictionaryTable[fallbackLocale];
    const fallback = dictionaryTable[fallbackLocale];
    const template = table?.[key] ?? fallback?.[key] ?? key;
    return template.replace(/\{(\w+)\}/g, (_, token)=>{
        const value = params[token];
        return value === undefined ? `{${token}}` : String(value);
    });
}
;
}),
"[project]/lib/talent/labels.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getRoleLabel",
    ()=>getRoleLabel,
    "getRoleLabelMap",
    ()=>getRoleLabelMap,
    "getSkillLabel",
    ()=>getSkillLabel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/i18n.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$talent$2f$taxonomy$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/talent/taxonomy.ts [app-rsc] (ecmascript)");
;
;
const roleMap = new Map(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$talent$2f$taxonomy$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["roleGroups"].flatMap((group)=>group.roles.map((role)=>[
            role.id,
            role.labelKey
        ])));
const skillMap = new Map(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$talent$2f$taxonomy$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["skillOptions"].map((skill)=>[
        skill.id,
        skill.labelKey
    ]));
const fallbackLabel = (id)=>id.replace(/[_-]+/g, " ").trim().replace(/\s+/g, " ").replace(/\b\w/g, (match)=>match.toUpperCase());
const getRoleLabel = (roleId, locale)=>{
    const key = roleMap.get(roleId);
    if (!key) return fallbackLabel(roleId);
    const resolved = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])(key, locale);
    return resolved === key ? fallbackLabel(roleId) : resolved;
};
const getSkillLabel = (skillId, locale)=>{
    const key = skillMap.get(skillId);
    if (!key) return fallbackLabel(skillId);
    const resolved = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])(key, locale);
    return resolved === key ? fallbackLabel(skillId) : resolved;
};
const getRoleLabelMap = (locale)=>{
    const map = new Map();
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$talent$2f$taxonomy$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["roleGroups"].forEach((group)=>{
        group.roles.forEach((role)=>{
            map.set(role.id, (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])(role.labelKey, locale));
        });
    });
    return map;
};
}),
"[project]/lib/talent/role-defaults.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "defaultsByProblemType",
    ()=>defaultsByProblemType,
    "defaultsByServiceSlug",
    ()=>defaultsByServiceSlug,
    "getDefaultRolesForService",
    ()=>getDefaultRolesForService,
    "getRoleDefaults",
    ()=>getRoleDefaults
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$talent$2f$taxonomy$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/talent/taxonomy.ts [app-rsc] (ecmascript)");
;
const ensureRoleId = (roleId)=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$talent$2f$taxonomy$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["roleIds"].includes(roleId) ? roleId : null;
const defaultsByServiceSlug = {
    "system-architecture-assessment": [
        {
            roleId: "principal_architect",
            count: 1,
            seniorityId: "principal"
        },
        {
            roleId: "systems_architect",
            count: 1,
            seniorityId: "staff"
        }
    ],
    "control-baseline-risk-posture": [
        {
            roleId: "security_architect",
            count: 1,
            seniorityId: "lead"
        },
        {
            roleId: "risk_analyst",
            count: 1,
            seniorityId: "staff"
        }
    ],
    "data-lineage-assessment": [
        {
            roleId: "data_architect",
            count: 1,
            seniorityId: "lead"
        },
        {
            roleId: "data_engineer",
            count: 1,
            seniorityId: "staff"
        }
    ],
    "operational-readiness-baseline": [
        {
            roleId: "delivery_lead",
            count: 1,
            seniorityId: "lead"
        },
        {
            roleId: "engagement_manager",
            count: 1,
            seniorityId: "staff"
        }
    ],
    "vendor-integration-readiness": [
        {
            roleId: "integration_architect",
            count: 1,
            seniorityId: "lead"
        },
        {
            roleId: "integration_engineer",
            count: 1,
            seniorityId: "staff"
        }
    ],
    "target-architecture-roadmap": [
        {
            roleId: "enterprise_architect",
            count: 1,
            seniorityId: "principal"
        },
        {
            roleId: "program_director",
            count: 1,
            seniorityId: "director"
        }
    ],
    "secure-data-platform-roadmap": [
        {
            roleId: "platform_architect",
            count: 1,
            seniorityId: "principal"
        },
        {
            roleId: "security_architect",
            count: 1,
            seniorityId: "lead"
        }
    ],
    "it-ot-convergence-roadmap": [
        {
            roleId: "ot_it_architect",
            count: 1,
            seniorityId: "lead"
        },
        {
            roleId: "systems_architect",
            count: 1,
            seniorityId: "staff"
        }
    ],
    "mission-systems-modernization-blueprint": [
        {
            roleId: "principal_architect",
            count: 1,
            seniorityId: "principal"
        },
        {
            roleId: "program_director",
            count: 1,
            seniorityId: "director"
        }
    ],
    "resilient-logistics-architecture": [
        {
            roleId: "supply_chain_architect",
            count: 1,
            seniorityId: "lead"
        },
        {
            roleId: "logistics_optimization_specialist",
            count: 1,
            seniorityId: "staff"
        }
    ],
    "project-takeover-stabilization": [
        {
            roleId: "delivery_lead",
            count: 1,
            seniorityId: "lead"
        },
        {
            roleId: "program_director",
            count: 1,
            seniorityId: "director"
        }
    ],
    "remote-program-takeover": [
        {
            roleId: "program_director",
            count: 1,
            seniorityId: "director"
        },
        {
            roleId: "delivery_lead",
            count: 1,
            seniorityId: "lead"
        }
    ],
    "on-site-program-takeover": [
        {
            roleId: "program_director",
            count: 1,
            seniorityId: "director"
        },
        {
            roleId: "delivery_lead",
            count: 1,
            seniorityId: "lead"
        }
    ],
    "delivery-recovery-control-reset": [
        {
            roleId: "delivery_lead",
            count: 1,
            seniorityId: "lead"
        },
        {
            roleId: "risk_analyst",
            count: 1,
            seniorityId: "staff"
        }
    ],
    "tailored-software-mvp": [
        {
            roleId: "product_manager_b2b",
            count: 1,
            seniorityId: "lead"
        },
        {
            roleId: "fullstack_engineer",
            count: 2,
            seniorityId: "staff"
        }
    ],
    "integration-build-orchestration": [
        {
            roleId: "integration_architect",
            count: 1,
            seniorityId: "lead"
        },
        {
            roleId: "integration_engineer",
            count: 1,
            seniorityId: "staff"
        }
    ],
    "secure-data-platform-build": [
        {
            roleId: "platform_architect",
            count: 1,
            seniorityId: "principal"
        },
        {
            roleId: "data_engineer",
            count: 1,
            seniorityId: "staff"
        }
    ],
    "ops-automation-build": [
        {
            roleId: "sre",
            count: 1,
            seniorityId: "staff"
        },
        {
            roleId: "devops_engineer",
            count: 1,
            seniorityId: "staff"
        }
    ],
    "security-disclosure-readiness": [
        {
            roleId: "compliance_lead",
            count: 1,
            seniorityId: "lead"
        },
        {
            roleId: "grc_consultant",
            count: 1,
            seniorityId: "staff"
        }
    ],
    "export-controls-alignment": [
        {
            roleId: "compliance_lead",
            count: 1,
            seniorityId: "lead"
        },
        {
            roleId: "risk_analyst",
            count: 1,
            seniorityId: "staff"
        }
    ],
    "procurement-ready-technology-review": [
        {
            roleId: "engagement_manager",
            count: 1,
            seniorityId: "lead"
        },
        {
            roleId: "principal_architect",
            count: 1,
            seniorityId: "principal"
        }
    ],
    "operational-readiness-handover": [
        {
            roleId: "delivery_lead",
            count: 1,
            seniorityId: "lead"
        },
        {
            roleId: "technical_writer_controlled_docs",
            count: 1,
            seniorityId: "staff"
        }
    ],
    "technical-leadership-retainer": [
        {
            roleId: "fractional_cto",
            count: 1,
            seniorityId: "director"
        }
    ],
    "security-assurance-retainer": [
        {
            roleId: "security_architect",
            count: 1,
            seniorityId: "lead"
        }
    ]
};
const defaultsByProblemType = {
    ot_security: defaultsByServiceSlug["it-ot-convergence-roadmap"],
    crisis_ops: defaultsByServiceSlug["project-takeover-stabilization"],
    supply_chain: defaultsByServiceSlug["resilient-logistics-architecture"],
    vendor_risk: defaultsByServiceSlug["procurement-ready-technology-review"],
    security_governance: defaultsByServiceSlug["control-baseline-risk-posture"]
};
function getRoleDefaults(params) {
    const { serviceSlug, problemType } = params;
    if (serviceSlug && defaultsByServiceSlug[serviceSlug]) {
        return defaultsByServiceSlug[serviceSlug];
    }
    if (problemType && defaultsByProblemType[problemType]) {
        return defaultsByProblemType[problemType];
    }
    return [];
}
const getDefaultRolesForService = (serviceSlug)=>{
    const roles = getRoleDefaults({
        serviceSlug
    });
    return roles.map((role)=>({
            ...role,
            roleId: ensureRoleId(role.roleId) ?? role.roleId
        })).filter((role)=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$talent$2f$taxonomy$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["roleIds"].includes(role.roleId));
};
const validateRoleDefaults = ()=>{
    const invalidRoles = [];
    const invalidSeniorities = [];
    Object.values(defaultsByServiceSlug).forEach((roles)=>{
        roles.forEach((role)=>{
            if (!__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$talent$2f$taxonomy$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["roleIds"].includes(role.roleId)) invalidRoles.push(role.roleId);
            if (role.seniorityId && !__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$talent$2f$taxonomy$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["seniorityIds"].includes(role.seniorityId)) {
                invalidSeniorities.push(role.seniorityId);
            }
        });
    });
    if (invalidRoles.length > 0 || invalidSeniorities.length > 0) {
        console.warn("Invalid role defaults detected", {
            invalidRoles: Array.from(new Set(invalidRoles)),
            invalidSeniorities: Array.from(new Set(invalidSeniorities))
        });
    }
};
if ("TURBOPACK compile-time truthy", 1) {
    validateRoleDefaults();
}
}),
"[project]/lib/talent/staffing.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "activateStaffingIntentForEngagement",
    ()=>activateStaffingIntentForEngagement,
    "createStaffingIntentForInquiry",
    ()=>createStaffingIntentForInquiry,
    "getStaffingSummaryForEngagement",
    ()=>getStaffingSummaryForEngagement,
    "updateStaffingIntentFromScope",
    ()=>updateStaffingIntentFromScope
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/prisma.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$audit$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/audit.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$talent$2f$role$2d$defaults$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/talent/role-defaults.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$talent$2f$skill$2d$defaults$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/talent/skill-defaults.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$talent$2f$labels$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/talent/labels.ts [app-rsc] (ecmascript)");
;
;
;
;
;
const emptyRequirements = {
    skills: []
};
async function createStaffingIntentForInquiry({ orgId, inquiryId, serviceSlug }) {
    const rolesJson = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$talent$2f$role$2d$defaults$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getDefaultRolesForService"])(serviceSlug);
    const requirementsJson = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$talent$2f$skill$2d$defaults$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["inferRequirementsFromDeliverables"])({
        deliverables: [],
        serviceSlug
    });
    const intent = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].staffingIntent.create({
        data: {
            orgId,
            inquiryId,
            state: "DRAFT",
            rolesJson,
            requirementsJson
        }
    });
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$audit$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logAuditEvent"])({
        orgId,
        action: "staffing_intent_created",
        resourceType: "staffing_intent",
        resourceId: intent.id,
        meta: {
            inquiryId
        }
    });
    return intent;
}
async function updateStaffingIntentFromScope({ orgId, inquiryId, scopeProposalId, serviceSlug, deliverables }) {
    const existing = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].staffingIntent.findFirst({
        where: {
            orgId,
            scopeProposalId
        },
        orderBy: {
            createdAt: "desc"
        }
    }) ?? await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].staffingIntent.findFirst({
        where: {
            orgId,
            ...inquiryId ? {
                inquiryId
            } : {},
            scopeProposalId: null
        },
        orderBy: {
            createdAt: "desc"
        }
    });
    const rolesJson = existing?.rolesJson ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$talent$2f$role$2d$defaults$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getDefaultRolesForService"])(serviceSlug);
    const requirementsJson = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$talent$2f$skill$2d$defaults$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["inferRequirementsFromDeliverables"])({
        deliverables,
        serviceSlug
    });
    const intent = existing ? await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].staffingIntent.update({
        where: {
            id: existing.id
        },
        data: {
            scopeProposalId,
            rolesJson,
            requirementsJson
        }
    }) : await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].staffingIntent.create({
        data: {
            orgId,
            inquiryId: inquiryId ?? null,
            scopeProposalId,
            state: "DRAFT",
            rolesJson,
            requirementsJson
        }
    });
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$audit$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logAuditEvent"])({
        orgId,
        action: "staffing_intent_updated",
        resourceType: "staffing_intent",
        resourceId: intent.id,
        meta: {
            inquiryId,
            scopeProposalId
        }
    });
    return intent;
}
async function activateStaffingIntentForEngagement({ orgId, inquiryId, engagementId }) {
    const intent = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].staffingIntent.findFirst({
        where: {
            orgId,
            inquiryId
        },
        orderBy: {
            createdAt: "desc"
        }
    });
    if (!intent) {
        return null;
    }
    const updated = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].staffingIntent.update({
        where: {
            id: intent.id
        },
        data: {
            engagementId,
            state: "ACTIVE"
        }
    });
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$audit$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logAuditEvent"])({
        orgId,
        action: "staffing_intent_activated",
        resourceType: "staffing_intent",
        resourceId: updated.id,
        meta: {
            engagementId,
            inquiryId
        }
    });
    return updated;
}
async function getStaffingSummaryForEngagement(engagementId) {
    const intents = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].staffingIntent.findMany({
        where: {
            engagementId
        },
        orderBy: {
            createdAt: "desc"
        }
    });
    if (intents.length === 0) return [];
    const assignments = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].talentAssignment.findMany({
        where: {
            engagementId
        }
    });
    const members = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].engagementMember.findMany({
        where: {
            engagementId
        }
    });
    const roleLabelMap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$talent$2f$labels$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRoleLabelMap"])();
    const labelToRoleId = new Map();
    roleLabelMap.forEach((label, roleId)=>{
        labelToRoleId.set(label.toLowerCase(), roleId);
    });
    const memberRoleIds = members.map((member)=>labelToRoleId.get(member.roleTitle.toLowerCase())).filter(Boolean);
    return intents.map((intent)=>{
        const roles = intent.rolesJson ?? [];
        const filledCounts = {};
        const missingCounts = {};
        for (const role of roles){
            const assignmentCount = assignments.filter((assignment)=>assignment.roleId === role.roleId).length;
            const memberCount = memberRoleIds.filter((roleId)=>roleId === role.roleId).length;
            const total = assignmentCount + memberCount;
            filledCounts[role.roleId] = total;
            missingCounts[role.roleId] = Math.max(role.count - total, 0);
        }
        return {
            intentId: intent.id,
            state: intent.state,
            roles,
            requirements: intent.requirementsJson ?? emptyRequirements,
            filledCounts,
            missingCounts
        };
    });
}
}),
"[project]/components/icons/iconMap.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "iconMap",
    ()=>iconMap
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/activity.js [app-rsc] (ecmascript) <export default as Activity>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-rsc] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$aperture$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Aperture$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/aperture.js [app-rsc] (ecmascript) <export default as Aperture>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$archive$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Archive$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/archive.js [app-rsc] (ecmascript) <export default as Archive>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$down$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up-down.js [app-rsc] (ecmascript) <export default as ArrowUpDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up-right.js [app-rsc] (ecmascript) <export default as ArrowUpRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$badge$2d$check$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__BadgeCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/badge-check.js [app-rsc] (ecmascript) <export default as BadgeCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bell.js [app-rsc] (ecmascript) <export default as Bell>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/book-open.js [app-rsc] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$boxes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Boxes$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/boxes.js [app-rsc] (ecmascript) <export default as Boxes>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Brain$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/brain.js [app-rsc] (ecmascript) <export default as Brain>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/building-2.js [app-rsc] (ecmascript) <export default as Building2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$clock$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarClock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar-clock.js [app-rsc] (ecmascript) <export default as CalendarClock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-rsc] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-rsc] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-rsc] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-rsc] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2d$list$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipboardList$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clipboard-list.js [app-rsc] (ecmascript) <export default as ClipboardList>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2d$pen$2d$line$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipboardSignature$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clipboard-pen-line.js [app-rsc] (ecmascript) <export default as ClipboardSignature>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/database.js [app-rsc] (ecmascript) <export default as Database>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-rsc] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$drafting$2d$compass$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__DraftingCompass$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/drafting-compass.js [app-rsc] (ecmascript) <export default as DraftingCompass>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$euro$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Euro$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/euro.js [app-rsc] (ecmascript) <export default as Euro>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$factory$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Factory$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/factory.js [app-rsc] (ecmascript) <export default as Factory>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$down$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__FileDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-down.js [app-rsc] (ecmascript) <export default as FileDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$search$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__FileSearch$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-search.js [app-rsc] (ecmascript) <export default as FileSearch>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-rsc] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flame$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Flame$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/flame.js [app-rsc] (ecmascript) <export default as Flame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$kanban$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderKanban$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/folder-kanban.js [app-rsc] (ecmascript) <export default as FolderKanban>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gauge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Gauge$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/gauge.js [app-rsc] (ecmascript) <export default as Gauge>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gavel$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Gavel$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/gavel.js [app-rsc] (ecmascript) <export default as Gavel>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$git$2d$pull$2d$request$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__GitPullRequest$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/git-pull-request.js [app-rsc] (ecmascript) <export default as GitPullRequest>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hammer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Hammer$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/hammer.js [app-rsc] (ecmascript) <export default as Hammer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$question$2d$mark$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__HelpCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-question-mark.js [app-rsc] (ecmascript) <export default as HelpCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$history$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__History$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/history.js [app-rsc] (ecmascript) <export default as History>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/house.js [app-rsc] (ecmascript) <export default as Home>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$inbox$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Inbox$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/inbox.js [app-rsc] (ecmascript) <export default as Inbox>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/info.js [app-rsc] (ecmascript) <export default as Info>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$key$2d$round$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__KeyRound$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/key-round.js [app-rsc] (ecmascript) <export default as KeyRound>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layout-dashboard.js [app-rsc] (ecmascript) <export default as LayoutDashboard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$life$2d$buoy$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__LifeBuoy$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/life-buoy.js [app-rsc] (ecmascript) <export default as LifeBuoy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2d$checks$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ListChecks$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/list-checks.js [app-rsc] (ecmascript) <export default as ListChecks>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lock.js [app-rsc] (ecmascript) <export default as Lock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$in$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__LogIn$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/log-in.js [app-rsc] (ecmascript) <export default as LogIn>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/log-out.js [app-rsc] (ecmascript) <export default as LogOut>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.js [app-rsc] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-rsc] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.js [app-rsc] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$monitor$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Monitor$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/monitor.js [app-rsc] (ecmascript) <export default as Monitor>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$network$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Network$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/network.js [app-rsc] (ecmascript) <export default as Network>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/package.js [app-rsc] (ecmascript) <export default as Package>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pencil.js [app-rsc] (ecmascript) <export default as Pencil>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plug$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Plug$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plug.js [app-rsc] (ecmascript) <export default as Plug>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$receipt$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Receipt$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/receipt.js [app-rsc] (ecmascript) <export default as Receipt>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$repeat$2d$2$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Repeat2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/repeat-2.js [app-rsc] (ecmascript) <export default as Repeat2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$route$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Route$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/route.js [app-rsc] (ecmascript) <export default as Route>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scale$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Scale$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/scale.js [app-rsc] (ecmascript) <export default as Scale>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-rsc] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/settings.js [app-rsc] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield.js [app-rsc] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-check.js [app-rsc] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shopping-bag.js [app-rsc] (ecmascript) <export default as ShoppingBag>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sliders$2d$horizontal$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__SlidersHorizontal$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sliders-horizontal.js [app-rsc] (ecmascript) <export default as SlidersHorizontal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-rsc] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/target.js [app-rsc] (ecmascript) <export default as Target>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$timer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Timer$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/timer.js [app-rsc] (ecmascript) <export default as Timer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Truck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/truck.js [app-rsc] (ecmascript) <export default as Truck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2d$open$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Unlock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lock-open.js [app-rsc] (ecmascript) <export default as Unlock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/upload.js [app-rsc] (ecmascript) <export default as Upload>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-rsc] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2d$cards$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__WalletCards$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/wallet-cards.js [app-rsc] (ecmascript) <export default as WalletCards>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wrench$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Wrench$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/wrench.js [app-rsc] (ecmascript) <export default as Wrench>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-rsc] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-x.js [app-rsc] (ecmascript) <export default as XCircle>");
;
const iconMap = {
    brand: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$aperture$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Aperture$3e$__["Aperture"],
    home: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"],
    marketplace: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__["ShoppingBag"],
    how: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$route$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Route$3e$__["Route"],
    security: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"],
    about: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"],
    insights: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"],
    legal: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scale$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Scale$3e$__["Scale"],
    contact: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"],
    requestScope: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2d$list$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipboardList$3e$__["ClipboardList"],
    login: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$in$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__LogIn$3e$__["LogIn"],
    logout: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__["LogOut"],
    external: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"],
    chevronRight: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"],
    chevronDown: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"],
    search: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"],
    filter: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sliders$2d$horizontal$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__SlidersHorizontal$3e$__["SlidersHorizontal"],
    sort: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$down$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpDown$3e$__["ArrowUpDown"],
    close: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"],
    menu: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"],
    ai: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Brain$3e$__["Brain"],
    industrial: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$factory$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Factory$3e$__["Factory"],
    itot: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$network$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Network$3e$__["Network"],
    risk: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"],
    governance: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gavel$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Gavel$3e$__["Gavel"],
    architecture: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$boxes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Boxes$3e$__["Boxes"],
    integration: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plug$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Plug$3e$__["Plug"],
    data: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__["Database"],
    realtime: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$timer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Timer$3e$__["Timer"],
    observability: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"],
    performance: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gauge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Gauge$3e$__["Gauge"],
    delivery: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Truck$3e$__["Truck"],
    resilience: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$life$2d$buoy$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__LifeBuoy$3e$__["LifeBuoy"],
    controls: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"],
    compliance: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$badge$2d$check$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__BadgeCheck$3e$__["BadgeCheck"],
    audit: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$search$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__FileSearch$3e$__["FileSearch"],
    design: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$drafting$2d$compass$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__DraftingCompass$3e$__["DraftingCompass"],
    build: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hammer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Hammer$3e$__["Hammer"],
    operate: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wrench$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Wrench$3e$__["Wrench"],
    fit: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"],
    outcomes: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"],
    deliverables: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__["Package"],
    definitionDone: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"],
    process: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2d$checks$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ListChecks$3e$__["ListChecks"],
    inputs: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$key$2d$round$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__KeyRound$3e$__["KeyRound"],
    pricing: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$euro$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Euro$3e$__["Euro"],
    duration: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$clock$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarClock$3e$__["CalendarClock"],
    onsite: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"],
    remote: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$monitor$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Monitor$3e$__["Monitor"],
    hybrid: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$repeat$2d$2$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Repeat2$3e$__["Repeat2"],
    faq: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$question$2d$mark$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__HelpCircle$3e$__["HelpCircle"],
    dashboard: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__["LayoutDashboard"],
    engagements: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$kanban$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderKanban$3e$__["FolderKanban"],
    inquiries: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$inbox$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Inbox$3e$__["Inbox"],
    documents: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"],
    scopes: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2d$pen$2d$line$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipboardSignature$3e$__["ClipboardSignature"],
    changeRequests: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$git$2d$pull$2d$request$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__GitPullRequest$3e$__["GitPullRequest"],
    billing: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$receipt$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Receipt$3e$__["Receipt"],
    finance: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2d$cards$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__WalletCards$3e$__["WalletCards"],
    notifications: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__["Bell"],
    admin: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"],
    users: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
    orgs: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"],
    settings: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"],
    timeline: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$history$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__History$3e$__["History"],
    edit: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__["Pencil"],
    approve: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"],
    reject: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__["XCircle"],
    archive: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$archive$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Archive$3e$__["Archive"],
    download: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"],
    upload: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"],
    danger: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flame$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Flame$3e$__["Flame"],
    export: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$down$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__FileDown$3e$__["FileDown"],
    locked: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"],
    unlocked: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2d$open$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Unlock$3e$__["Unlock"]
};
}),
"[project]/components/icons/IconStatic.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IconStatic",
    ()=>IconStatic
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$iconMap$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/icons/iconMap.ts [app-rsc] (ecmascript)");
;
;
function IconStatic({ name, size = 16, strokeWidth = 1.5, className, title, decorative = true }) {
    const IconComponent = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$iconMap$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["iconMap"][name];
    const ariaLabel = title ?? name;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: `inline-flex shrink-0 items-center justify-center ${className ?? ""}`,
        style: {
            width: size,
            height: size
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(IconComponent, {
            width: size,
            height: size,
            strokeWidth: strokeWidth,
            color: "currentColor",
            "aria-hidden": decorative,
            role: decorative ? undefined : "img",
            "aria-label": decorative ? undefined : ariaLabel,
            focusable: "false",
            className: "block",
            vectorEffect: "non-scaling-stroke",
            children: title ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                children: title
            }, void 0, false, {
                fileName: "[project]/components/icons/IconStatic.tsx",
                lineNumber: 41,
                columnNumber: 18
            }, this) : null
        }, void 0, false, {
            fileName: "[project]/components/icons/IconStatic.tsx",
            lineNumber: 29,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/icons/IconStatic.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/portal/StatusBadge.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StatusBadge",
    ()=>StatusBadge
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$IconStatic$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/icons/IconStatic.tsx [app-rsc] (ecmascript)");
;
;
function StatusBadge({ label, icon, tone = "neutral", variant = "outline", className }) {
    const classes = [
        "badge",
        `badge--${tone}`,
        `badge--${variant}`,
        className
    ].filter(Boolean).join(" ");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: classes,
        children: [
            icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$IconStatic$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["IconStatic"], {
                name: icon,
                size: 12,
                strokeWidth: 1.25,
                className: "text-current"
            }, void 0, false, {
                fileName: "[project]/components/portal/StatusBadge.tsx",
                lineNumber: 26,
                columnNumber: 9
            }, this),
            label
        ]
    }, void 0, true, {
        fileName: "[project]/components/portal/StatusBadge.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
}),
"[project]/lib/status-badges.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getAccessBadge",
    ()=>getAccessBadge,
    "getChangeStatusBadge",
    ()=>getChangeStatusBadge,
    "getDeliverableStatusBadge",
    ()=>getDeliverableStatusBadge,
    "getDeliveryTaskStatusBadge",
    ()=>getDeliveryTaskStatusBadge,
    "getEngagementStageBadge",
    ()=>getEngagementStageBadge,
    "getEngagementStatusBadge",
    ()=>getEngagementStatusBadge,
    "getEngagementTermStatusBadge",
    ()=>getEngagementTermStatusBadge,
    "getImpactBadge",
    ()=>getImpactBadge,
    "getInquiryStatusBadge",
    ()=>getInquiryStatusBadge,
    "getInvoiceStatusBadge",
    ()=>getInvoiceStatusBadge,
    "getMetaBadge",
    ()=>getMetaBadge,
    "getMilestoneStatusBadge",
    ()=>getMilestoneStatusBadge,
    "getOutreachBadge",
    ()=>getOutreachBadge,
    "getScopeStatusBadge",
    ()=>getScopeStatusBadge,
    "getSeverityBadge",
    ()=>getSeverityBadge,
    "getSkillsGapBadge",
    ()=>getSkillsGapBadge,
    "getStaffingBadge",
    ()=>getStaffingBadge,
    "getTalentContactStatusBadge",
    ()=>getTalentContactStatusBadge,
    "getTalentStatusBadge",
    ()=>getTalentStatusBadge
]);
const titleize = (value)=>value.replace(/[_-]+/g, " ").trim().replace(/\s+/g, " ").replace(/\b\w/g, (match)=>match.toUpperCase());
const neutralBadge = (label, variant = "outline")=>({
        label,
        tone: "neutral",
        variant
    });
const getInquiryStatusBadge = (status)=>{
    const map = {
        new: {
            label: "New",
            tone: "info",
            variant: "solid",
            icon: "inquiries"
        },
        triaged: {
            label: "Triaged",
            tone: "info",
            variant: "solid",
            icon: "process"
        },
        converted: {
            label: "Converted",
            tone: "success",
            variant: "solid",
            icon: "approve"
        },
        closed: {
            label: "Closed",
            tone: "neutral",
            variant: "solid",
            icon: "archive"
        }
    };
    return map[status] ?? neutralBadge(titleize(status));
};
const getEngagementStageBadge = (stage)=>{
    const map = {
        triage: {
            label: "Triage",
            tone: "neutral",
            variant: "solid",
            icon: "how"
        },
        scope_pack: {
            label: "Scope pack",
            tone: "info",
            variant: "solid",
            icon: "scopes"
        },
        sow: {
            label: "SOW",
            tone: "info",
            variant: "solid",
            icon: "scopes"
        },
        delivery: {
            label: "Delivery",
            tone: "info",
            variant: "solid",
            icon: "delivery"
        },
        handover: {
            label: "Handover",
            tone: "info",
            variant: "solid",
            icon: "download"
        },
        ongoing: {
            label: "Ongoing",
            tone: "info",
            variant: "solid",
            icon: "timeline"
        },
        closed: {
            label: "Closed",
            tone: "neutral",
            variant: "solid",
            icon: "archive"
        }
    };
    return map[stage] ?? neutralBadge(titleize(stage), "solid");
};
const getEngagementStatusBadge = (status)=>{
    const map = {
        on_track: {
            label: "On track",
            tone: "success",
            variant: "solid",
            icon: "approve"
        },
        at_risk: {
            label: "At risk",
            tone: "warning",
            variant: "solid",
            icon: "risk"
        },
        blocked: {
            label: "Blocked",
            tone: "danger",
            variant: "solid",
            icon: "reject"
        },
        completed: {
            label: "Completed",
            tone: "success",
            variant: "solid",
            icon: "definitionDone"
        }
    };
    return map[status] ?? neutralBadge(titleize(status), "solid");
};
const getScopeStatusBadge = (status)=>{
    const map = {
        draft: {
            label: "Draft",
            tone: "neutral",
            variant: "solid",
            icon: "edit"
        },
        sent: {
            label: "Sent",
            tone: "info",
            variant: "solid",
            icon: "contact"
        },
        approved: {
            label: "Approved",
            tone: "success",
            variant: "solid",
            icon: "approve"
        },
        rejected: {
            label: "Rejected",
            tone: "danger",
            variant: "solid",
            icon: "reject"
        }
    };
    return map[status] ?? neutralBadge(titleize(status), "solid");
};
const getChangeStatusBadge = (status)=>{
    const map = {
        proposed: {
            label: "Proposed",
            tone: "info",
            variant: "solid",
            icon: "changeRequests"
        },
        needs_info: {
            label: "Needs info",
            tone: "warning",
            variant: "solid",
            icon: "faq"
        },
        approved: {
            label: "Approved",
            tone: "success",
            variant: "solid",
            icon: "approve"
        },
        rejected: {
            label: "Rejected",
            tone: "danger",
            variant: "solid",
            icon: "reject"
        },
        implemented: {
            label: "Implemented",
            tone: "success",
            variant: "solid",
            icon: "definitionDone"
        },
        cancelled: {
            label: "Cancelled",
            tone: "neutral",
            variant: "solid",
            icon: "archive"
        }
    };
    return map[status] ?? neutralBadge(titleize(status), "solid");
};
const getMilestoneStatusBadge = (status)=>{
    const map = {
        planned: {
            label: "Planned",
            tone: "neutral",
            variant: "soft"
        },
        in_progress: {
            label: "In progress",
            tone: "info",
            variant: "soft"
        },
        complete: {
            label: "Complete",
            tone: "success",
            variant: "soft"
        }
    };
    return map[status] ?? neutralBadge(titleize(status), "soft");
};
const getDeliverableStatusBadge = (status)=>{
    const map = {
        draft: {
            label: "Draft",
            tone: "neutral",
            variant: "soft"
        },
        review: {
            label: "Review",
            tone: "warning",
            variant: "soft"
        },
        approved: {
            label: "Approved",
            tone: "success",
            variant: "soft"
        }
    };
    return map[status] ?? neutralBadge(titleize(status), "soft");
};
const getDeliveryTaskStatusBadge = (status)=>{
    const map = {
        todo: {
            label: "To do",
            tone: "neutral",
            variant: "soft"
        },
        in_progress: {
            label: "In progress",
            tone: "info",
            variant: "soft"
        },
        blocked: {
            label: "Blocked",
            tone: "danger",
            variant: "soft"
        },
        done: {
            label: "Done",
            tone: "success",
            variant: "soft"
        }
    };
    return map[status] ?? neutralBadge(titleize(status), "soft");
};
const getEngagementTermStatusBadge = (status)=>{
    const map = {
        draft: {
            label: "Draft",
            tone: "neutral",
            variant: "soft"
        },
        active: {
            label: "Active",
            tone: "success",
            variant: "soft"
        },
        superseded: {
            label: "Superseded",
            tone: "neutral",
            variant: "soft"
        }
    };
    return map[status] ?? neutralBadge(titleize(status), "soft");
};
const getTalentStatusBadge = (status)=>{
    const map = {
        NEW: {
            label: "New",
            tone: "info",
            variant: "soft"
        },
        REVIEWED: {
            label: "Reviewed",
            tone: "info",
            variant: "soft"
        },
        APPROVED: {
            label: "Approved",
            tone: "success",
            variant: "soft"
        },
        ARCHIVED: {
            label: "Archived",
            tone: "neutral",
            variant: "soft"
        }
    };
    return map[status] ?? neutralBadge(titleize(status), "soft");
};
const getTalentContactStatusBadge = (status)=>{
    const map = {
        NOT_CONTACTED: {
            label: "Not contacted",
            tone: "neutral",
            variant: "outline"
        },
        CONTACTED: {
            label: "Contacted",
            tone: "info",
            variant: "outline"
        },
        RESPONDED: {
            label: "Responded",
            tone: "info",
            variant: "outline"
        },
        ONBOARDED: {
            label: "Onboarded",
            tone: "success",
            variant: "outline"
        }
    };
    return map[status] ?? neutralBadge(titleize(status), "outline");
};
const getSeverityBadge = (severity)=>{
    const map = {
        low: {
            label: "Low",
            tone: "neutral",
            variant: "soft"
        },
        med: {
            label: "Medium",
            tone: "warning",
            variant: "soft"
        },
        high: {
            label: "High",
            tone: "danger",
            variant: "soft"
        }
    };
    return map[severity] ?? neutralBadge(titleize(severity), "soft");
};
const getImpactBadge = (impact)=>{
    const map = {
        scope: {
            label: "Scope",
            tone: "info",
            variant: "outline"
        },
        schedule: {
            label: "Schedule",
            tone: "info",
            variant: "outline"
        },
        cost: {
            label: "Cost",
            tone: "info",
            variant: "outline"
        },
        risk: {
            label: "Risk",
            tone: "warning",
            variant: "outline"
        }
    };
    return map[impact] ?? neutralBadge(titleize(impact), "outline");
};
const getAccessBadge = (label, icon = "locked")=>({
        label,
        tone: "access",
        variant: "outline",
        icon
    });
const getMetaBadge = (label)=>({
        label,
        tone: "neutral",
        variant: "outline"
    });
const getInvoiceStatusBadge = (paidAt)=>paidAt ? {
        label: "Paid",
        tone: "success",
        variant: "solid",
        icon: "approve"
    } : {
        label: "Unpaid",
        tone: "warning",
        variant: "solid",
        icon: "realtime"
    };
const getStaffingBadge = (intent, options)=>{
    if (!intent) {
        return {
            label: "No staffing",
            tone: "danger",
            variant: "soft",
            icon: "risk"
        };
    }
    if (intent.state === "DRAFT") {
        return {
            label: "Staffing draft",
            tone: "info",
            variant: "soft",
            icon: "process"
        };
    }
    if (intent.state === "CANCELLED") {
        return {
            label: "Staffing cancelled",
            tone: "neutral",
            variant: "soft",
            icon: "archive"
        };
    }
    if (intent.state === "FULFILLED") {
        return {
            label: "Staffing ok",
            tone: "success",
            variant: "solid",
            icon: "approve"
        };
    }
    if (!options.hasRolesDefined) {
        return {
            label: "Roles missing",
            tone: "warning",
            variant: "solid",
            icon: "risk"
        };
    }
    if (!options.fulfilled) {
        return {
            label: "Unfilled roles",
            tone: "warning",
            variant: "solid",
            icon: "risk"
        };
    }
    return {
        label: "Staffing active",
        tone: "info",
        variant: "solid",
        icon: "users"
    };
};
const getOutreachBadge = (stats)=>{
    if (stats.failed > 0) {
        return {
            label: "Outreach failed",
            tone: "danger",
            variant: "soft",
            icon: "reject"
        };
    }
    if (stats.replied > 0) {
        return {
            label: "Replies",
            tone: "success",
            variant: "soft",
            icon: "contact"
        };
    }
    if (stats.sent > 0) {
        return {
            label: "Outreach sent",
            tone: "info",
            variant: "soft",
            icon: "contact"
        };
    }
    if (stats.queued > 0) {
        return {
            label: "Outreach queued",
            tone: "warning",
            variant: "soft",
            icon: "realtime"
        };
    }
    return {
        label: "No outreach",
        tone: "neutral",
        variant: "outline",
        icon: "contact"
    };
};
const getSkillsGapBadge = (missingMustSkills)=>{
    if (missingMustSkills.length === 0) {
        return {
            label: "Skills ok",
            tone: "success",
            variant: "soft",
            icon: "approve"
        };
    }
    return {
        label: "Missing must skills",
        tone: "danger",
        variant: "soft",
        icon: "risk"
    };
};
}),
"[project]/app/portal/hr/staffing/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "$$RSC_SERVER_ACTION_0",
    ()=>$$RSC_SERVER_ACTION_0,
    "$$RSC_SERVER_ACTION_1",
    ()=>$$RSC_SERVER_ACTION_1,
    "default",
    ()=>StaffingPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"4049ac9148365d0f7dd939b131e51acf91c088d6d4":"$$RSC_SERVER_ACTION_1","40ccf88182eb90fe78f089ca013b98393bb64948c0":"$$RSC_SERVER_ACTION_0"},"",""] */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/prisma.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$portal$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/portal.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$talent$2f$match$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/talent/match.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$talent$2f$labels$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/talent/labels.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$talent$2f$staffing$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/talent/staffing.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$audit$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/audit.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$portal$2f$StatusBadge$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/portal/StatusBadge.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$status$2d$badges$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/status-badges.ts [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
const isRecord = (value)=>typeof value === "object" && value !== null;
const isSkillRequirement = (value)=>isRecord(value) && typeof value.skillId === "string" && typeof value.must === "boolean";
const readSkills = (value)=>{
    if (!isRecord(value)) return [];
    const skills = value.skills;
    if (!Array.isArray(skills)) return [];
    return skills.filter(isSkillRequirement);
};
const readMissingMustSkills = (value)=>{
    if (!isRecord(value)) return [];
    const missing = value.missingMustSkillIds;
    if (!Array.isArray(missing)) return [];
    return missing.filter((item)=>typeof item === "string");
};
const $$RSC_SERVER_ACTION_0 = async function runMatching(formData) {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$portal$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["requirePortalSession"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$portal$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["requireLucienStaff"])(session.user.role);
    const intentId = String(formData.get("intentId") || "");
    if (!intentId || !session.user.orgId) return;
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$talent$2f$match$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["runMatchingForIntent"])(intentId, session.user.orgId);
};
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])($$RSC_SERVER_ACTION_0, "40ccf88182eb90fe78f089ca013b98393bb64948c0", null);
var runMatching = $$RSC_SERVER_ACTION_0;
const $$RSC_SERVER_ACTION_1 = async function assignMatch(formData) {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$portal$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["requirePortalSession"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$portal$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["requireLucienStaff"])(session.user.role);
    const matchId = String(formData.get("matchId") || "");
    const roleId = String(formData.get("roleId") || "");
    const allocationPct = Number(formData.get("allocationPct") || 100);
    if (!matchId || !roleId) return;
    const match = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].talentMatch.findUnique({
        where: {
            id: matchId
        },
        include: {
            talentProfile: true,
            staffingIntent: true
        }
    });
    if (!match?.staffingIntent.engagementId) return;
    const roleLabel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$talent$2f$labels$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRoleLabel"])(roleId);
    const assignment = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].talentAssignment.create({
        data: {
            profileId: match.talentProfileId,
            engagementId: match.staffingIntent.engagementId,
            roleId,
            roleLabel,
            allocationPct: Number.isFinite(allocationPct) ? allocationPct : 100,
            sharedWithClient: true
        }
    });
    await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].talentMatch.update({
        where: {
            id: match.id
        },
        data: {
            status: "HIRED"
        }
    });
    if (match.talentProfile.email) {
        const user = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].user.findFirst({
            where: {
                email: match.talentProfile.email
            }
        });
        if (user) {
            await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].engagementMember.create({
                data: {
                    orgId: match.staffingIntent.orgId,
                    engagementId: match.staffingIntent.engagementId,
                    userId: user.id,
                    roleTitle: roleLabel,
                    allocationHours: null,
                    clientVisible: true
                }
            });
        }
    }
    const summaries = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$talent$2f$staffing$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getStaffingSummaryForEngagement"])(match.staffingIntent.engagementId);
    const summary = summaries.find((item)=>item.intentId === match.staffingIntentId);
    if (summary?.missingCounts && Object.values(summary.missingCounts).every((v)=>v === 0)) {
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].staffingIntent.update({
            where: {
                id: match.staffingIntentId
            },
            data: {
                state: "FULFILLED"
            }
        });
    }
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$audit$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logAuditEvent"])({
        orgId: match.staffingIntent.orgId,
        userId: session.user.id,
        action: "talent_assigned",
        resourceType: "talent_assignment",
        resourceId: assignment.id,
        meta: {
            intentId: match.staffingIntentId
        }
    });
};
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])($$RSC_SERVER_ACTION_1, "4049ac9148365d0f7dd939b131e51acf91c088d6d4", null);
var assignMatch = $$RSC_SERVER_ACTION_1;
async function StaffingPage() {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$portal$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["requirePortalSession"])();
    const intents = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].staffingIntent.findMany({
        where: session.user.role === "lucien_admin" || session.user.role === "lucien_operator" ? {} : {
            orgId: session.user.orgId ?? ""
        },
        include: {
            inquiry: true,
            engagement: true,
            scopeProposal: true,
            matches: {
                orderBy: {
                    score: "desc"
                },
                take: 4,
                include: {
                    talentProfile: true
                }
            }
        },
        orderBy: {
            updatedAt: "desc"
        }
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs uppercase tracking-[0.3em] text-slate",
                        children: "Staffing"
                    }, void 0, false, {
                        fileName: "[project]/app/portal/hr/staffing/page.tsx",
                        lineNumber: 148,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-2xl font-semibold text-ash",
                        children: "Staffing intents"
                    }, void 0, false, {
                        fileName: "[project]/app/portal/hr/staffing/page.tsx",
                        lineNumber: 149,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-muted",
                        children: "Track demand, matching, and fulfillment across engagements and inquiries."
                    }, void 0, false, {
                        fileName: "[project]/app/portal/hr/staffing/page.tsx",
                        lineNumber: 150,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/portal/hr/staffing/page.tsx",
                lineNumber: 147,
                columnNumber: 7
            }, this),
            intents.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-2xl border border-line/80 bg-soft p-6 text-sm text-muted",
                children: "No staffing intents yet."
            }, void 0, false, {
                fileName: "[project]/app/portal/hr/staffing/page.tsx",
                lineNumber: 156,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: intents.map((intent)=>{
                    const roles = Array.isArray(intent.rolesJson) ? intent.rolesJson : [];
                    const skills = readSkills(intent.requirementsJson);
                    const topMatchMissingSkills = readMissingMustSkills(intent.matches[0]?.reasonsJson);
                    const hasRolesDefined = roles.length > 0;
                    const fulfilled = intent.state === "FULFILLED";
                    const subject = intent.engagement?.title ?? intent.inquiry?.organization ?? intent.scopeProposal?.title ?? "Staffing intent";
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-2xl border border-line/80 bg-soft p-6 space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap items-center justify-between gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-lg font-semibold text-ash",
                                                children: subject
                                            }, void 0, false, {
                                                fileName: "[project]/app/portal/hr/staffing/page.tsx",
                                                lineNumber: 184,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xs text-slate",
                                                children: [
                                                    intent.state,
                                                    " · ",
                                                    roles.length,
                                                    " roles"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/portal/hr/staffing/page.tsx",
                                                lineNumber: 185,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/portal/hr/staffing/page.tsx",
                                        lineNumber: 183,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap gap-2 text-xs uppercase tracking-[0.2em]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$portal$2f$StatusBadge$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StatusBadge"], {
                                                ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$status$2d$badges$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getStaffingBadge"])(intent, {
                                                    hasRolesDefined,
                                                    fulfilled
                                                })
                                            }, void 0, false, {
                                                fileName: "[project]/app/portal/hr/staffing/page.tsx",
                                                lineNumber: 190,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$portal$2f$StatusBadge$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StatusBadge"], {
                                                ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$status$2d$badges$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSkillsGapBadge"])(topMatchMissingSkills)
                                            }, void 0, false, {
                                                fileName: "[project]/app/portal/hr/staffing/page.tsx",
                                                lineNumber: 196,
                                                columnNumber: 21
                                            }, this),
                                            intent.engagementId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                href: `/portal/engagements/${intent.engagementId}`,
                                                className: "rounded-full border border-line/80 px-3 py-1 text-[0.6rem] text-ash",
                                                children: "Open engagement"
                                            }, void 0, false, {
                                                fileName: "[project]/app/portal/hr/staffing/page.tsx",
                                                lineNumber: 198,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/portal/hr/staffing/page.tsx",
                                        lineNumber: 189,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/portal/hr/staffing/page.tsx",
                                lineNumber: 182,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid gap-4 md:grid-cols-2 text-sm text-muted",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xs uppercase tracking-[0.2em] text-slate",
                                                children: "Roles required"
                                            }, void 0, false, {
                                                fileName: "[project]/app/portal/hr/staffing/page.tsx",
                                                lineNumber: 210,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-2 space-y-1",
                                                children: roles.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-xs text-muted",
                                                    children: "No roles defined."
                                                }, void 0, false, {
                                                    fileName: "[project]/app/portal/hr/staffing/page.tsx",
                                                    lineNumber: 215,
                                                    columnNumber: 25
                                                }, this) : roles.map((role)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$talent$2f$labels$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRoleLabel"])(role.roleId),
                                                            " · ",
                                                            role.count ?? 1
                                                        ]
                                                    }, `${intent.id}-${role.roleId}`, true, {
                                                        fileName: "[project]/app/portal/hr/staffing/page.tsx",
                                                        lineNumber: 218,
                                                        columnNumber: 27
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/app/portal/hr/staffing/page.tsx",
                                                lineNumber: 213,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/portal/hr/staffing/page.tsx",
                                        lineNumber: 209,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xs uppercase tracking-[0.2em] text-slate",
                                                children: "Skills required"
                                            }, void 0, false, {
                                                fileName: "[project]/app/portal/hr/staffing/page.tsx",
                                                lineNumber: 226,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-2 flex flex-wrap gap-2 text-xs",
                                                children: skills.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-xs text-muted",
                                                    children: "No skills inferred."
                                                }, void 0, false, {
                                                    fileName: "[project]/app/portal/hr/staffing/page.tsx",
                                                    lineNumber: 231,
                                                    columnNumber: 25
                                                }, this) : skills.map((skill)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$portal$2f$StatusBadge$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StatusBadge"], {
                                                        label: skill.skillId,
                                                        tone: skill.must ? "warning" : "neutral",
                                                        variant: "soft"
                                                    }, `${intent.id}-${skill.skillId}`, false, {
                                                        fileName: "[project]/app/portal/hr/staffing/page.tsx",
                                                        lineNumber: 234,
                                                        columnNumber: 27
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/app/portal/hr/staffing/page.tsx",
                                                lineNumber: 229,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/portal/hr/staffing/page.tsx",
                                        lineNumber: 225,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/portal/hr/staffing/page.tsx",
                                lineNumber: 208,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap gap-3",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                    action: runMatching,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "hidden",
                                            name: "intentId",
                                            value: intent.id
                                        }, void 0, false, {
                                            fileName: "[project]/app/portal/hr/staffing/page.tsx",
                                            lineNumber: 248,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "submit",
                                            className: "btn-animate btn-secondary rounded-full px-4 py-2 text-[0.6rem] uppercase tracking-[0.2em]",
                                            children: "Run matching"
                                        }, void 0, false, {
                                            fileName: "[project]/app/portal/hr/staffing/page.tsx",
                                            lineNumber: 249,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/portal/hr/staffing/page.tsx",
                                    lineNumber: 247,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/portal/hr/staffing/page.tsx",
                                lineNumber: 246,
                                columnNumber: 17
                            }, this),
                            intent.matches.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2 text-sm text-muted",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs uppercase tracking-[0.2em] text-slate",
                                        children: "Top matches"
                                    }, void 0, false, {
                                        fileName: "[project]/app/portal/hr/staffing/page.tsx",
                                        lineNumber: 260,
                                        columnNumber: 21
                                    }, this),
                                    intent.matches.map((match)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-wrap items-center justify-between gap-3 rounded-xl border border-line/80 bg-ink px-4 py-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-ash",
                                                            children: match.talentProfile.fullName
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/portal/hr/staffing/page.tsx",
                                                            lineNumber: 269,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-xs text-slate",
                                                            children: [
                                                                "Score ",
                                                                match.score.toFixed(1),
                                                                " · ",
                                                                match.status
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/portal/hr/staffing/page.tsx",
                                                            lineNumber: 270,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/portal/hr/staffing/page.tsx",
                                                    lineNumber: 268,
                                                    columnNumber: 25
                                                }, this),
                                                intent.engagementId && roles.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                                    action: assignMatch,
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "hidden",
                                                            name: "matchId",
                                                            value: match.id
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/portal/hr/staffing/page.tsx",
                                                            lineNumber: 276,
                                                            columnNumber: 29
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "hidden",
                                                            name: "roleId",
                                                            value: roles[0]?.roleId ?? ""
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/portal/hr/staffing/page.tsx",
                                                            lineNumber: 277,
                                                            columnNumber: 29
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "hidden",
                                                            name: "allocationPct",
                                                            value: "100"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/portal/hr/staffing/page.tsx",
                                                            lineNumber: 282,
                                                            columnNumber: 29
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "submit",
                                                            className: "btn-animate btn-primary rounded-full px-4 py-2 text-[0.6rem] uppercase tracking-[0.2em]",
                                                            children: "Assign"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/portal/hr/staffing/page.tsx",
                                                            lineNumber: 283,
                                                            columnNumber: 29
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/portal/hr/staffing/page.tsx",
                                                    lineNumber: 275,
                                                    columnNumber: 27
                                                }, this)
                                            ]
                                        }, match.id, true, {
                                            fileName: "[project]/app/portal/hr/staffing/page.tsx",
                                            lineNumber: 264,
                                            columnNumber: 23
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/portal/hr/staffing/page.tsx",
                                lineNumber: 259,
                                columnNumber: 19
                            }, this)
                        ]
                    }, intent.id, true, {
                        fileName: "[project]/app/portal/hr/staffing/page.tsx",
                        lineNumber: 178,
                        columnNumber: 15
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/app/portal/hr/staffing/page.tsx",
                lineNumber: 160,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/portal/hr/staffing/page.tsx",
        lineNumber: 146,
        columnNumber: 5
    }, this);
}
}),
"[project]/.next-internal/server/app/portal/hr/staffing/page/actions.js { ACTIONS_MODULE0 => \"[project]/app/portal/hr/staffing/page.tsx [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$portal$2f$hr$2f$staffing$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/portal/hr/staffing/page.tsx [app-rsc] (ecmascript)");
;
;
}),
"[project]/.next-internal/server/app/portal/hr/staffing/page/actions.js { ACTIONS_MODULE0 => \"[project]/app/portal/hr/staffing/page.tsx [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "4049ac9148365d0f7dd939b131e51acf91c088d6d4",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$portal$2f$hr$2f$staffing$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$$RSC_SERVER_ACTION_1"],
    "40ccf88182eb90fe78f089ca013b98393bb64948c0",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$portal$2f$hr$2f$staffing$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$$RSC_SERVER_ACTION_0"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$portal$2f$hr$2f$staffing$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$app$2f$portal$2f$hr$2f$staffing$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/portal/hr/staffing/page/actions.js { ACTIONS_MODULE0 => "[project]/app/portal/hr/staffing/page.tsx [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$portal$2f$hr$2f$staffing$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/portal/hr/staffing/page.tsx [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=_e43ecc6b._.js.map