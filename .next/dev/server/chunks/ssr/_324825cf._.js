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
"[project]/lib/scout/providers/web.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "webProvider",
    ()=>webProvider
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/crypto [external] (crypto, cjs)");
;
const isRecord = (value)=>typeof value === "object" && value !== null;
const stringOrUndefined = (value)=>typeof value === "string" ? value : undefined;
const toWebResultItem = (value)=>{
    if (!isRecord(value)) return {};
    return {
        title: stringOrUndefined(value.title),
        link: stringOrUndefined(value.link),
        snippet: stringOrUndefined(value.snippet)
    };
};
const toCustomResultItem = (value)=>{
    if (!isRecord(value)) return {};
    return {
        title: stringOrUndefined(value.title) ?? stringOrUndefined(value.name),
        link: stringOrUndefined(value.url) ?? stringOrUndefined(value.link),
        snippet: stringOrUndefined(value.snippet) ?? stringOrUndefined(value.description)
    };
};
const extractEmail = (value)=>{
    if (!value) return null;
    const match = value.match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i);
    return match?.[0]?.toLowerCase() ?? null;
};
const normalizeName = (value)=>value.replace(/\s+-\s+.*$/, "").trim();
const buildQuery = (intent)=>{
    const parts = [
        ...intent.roleIds,
        ...intent.keywords
    ];
    return parts.filter(Boolean).join(" ");
};
const mapResults = (items, query)=>items.filter((item)=>item.link).map((item)=>{
        const fullName = normalizeName(item.title ?? "Unknown");
        const email = extractEmail(item.snippet ?? "");
        const dedupeKey = item.link ? (0, __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["createHash"])("sha256").update(item.link).digest("hex") : null;
        return {
            fullName,
            email,
            externalProfileUrl: item.link ?? null,
            dedupeKey,
            sourceQuery: query,
            payload: item
        };
    });
const webProvider = {
    source: "WEB",
    search: async (intent)=>{
        const provider = process.env.WEB_SEARCH_PROVIDER;
        const query = buildQuery(intent);
        if (!provider || !query) return [];
        if (provider === "serpapi") {
            const apiKey = process.env.SERPAPI_KEY;
            if (!apiKey) return [];
            const url = new URL("https://serpapi.com/search.json");
            url.searchParams.set("q", query);
            url.searchParams.set("api_key", apiKey);
            const response = await fetch(url);
            if (!response.ok) return [];
            const data = await response.json();
            const items = Array.isArray(data.organic_results) ? data.organic_results : [];
            return mapResults(items.map(toWebResultItem), query);
        }
        if (provider === "google_cse") {
            const apiKey = process.env.GOOGLE_CSE_KEY;
            const cx = process.env.GOOGLE_CSE_CX;
            if (!apiKey || !cx) return [];
            const url = new URL("https://www.googleapis.com/customsearch/v1");
            url.searchParams.set("q", query);
            url.searchParams.set("key", apiKey);
            url.searchParams.set("cx", cx);
            const response = await fetch(url);
            if (!response.ok) return [];
            const data = await response.json();
            const items = Array.isArray(data.items) ? data.items : [];
            return mapResults(items.map(toWebResultItem), query);
        }
        if (provider === "custom") {
            const endpoint = process.env.WEB_SEARCH_ENDPOINT;
            if (!endpoint) return [];
            const url = new URL(endpoint);
            url.searchParams.set("q", query);
            const response = await fetch(url);
            if (!response.ok) return [];
            const data = await response.json();
            const items = Array.isArray(data.results) ? data.results : [];
            return mapResults(items.map(toCustomResultItem), query);
        }
        return [];
    }
};
}),
"[project]/lib/scout/providers/linkedin.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "linkedinProvider",
    ()=>linkedinProvider
]);
const linkedinProvider = {
    source: "LINKEDIN",
    search: async ()=>{
        return [];
    }
};
}),
"[project]/lib/scout/providers/xing.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "xingProvider",
    ()=>xingProvider
]);
const xingProvider = {
    source: "XING",
    search: async ()=>{
        return [];
    }
};
}),
"[project]/lib/scout/providers/directory.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "directoryProvider",
    ()=>directoryProvider
]);
const directoryProvider = {
    source: "DIRECTORY",
    search: async ()=>{
        return [];
    }
};
}),
"[project]/lib/scout/job.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "runScoutJob",
    ()=>runScoutJob
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/crypto [external] (crypto, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/prisma.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$audit$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/audit.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$talent$2f$taxonomy$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/talent/taxonomy.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$scout$2f$providers$2f$web$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/scout/providers/web.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$scout$2f$providers$2f$linkedin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/scout/providers/linkedin.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$scout$2f$providers$2f$xing$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/scout/providers/xing.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$scout$2f$providers$2f$directory$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/scout/providers/directory.ts [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
const providers = [
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$scout$2f$providers$2f$web$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["webProvider"],
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$scout$2f$providers$2f$linkedin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["linkedinProvider"],
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$scout$2f$providers$2f$xing$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["xingProvider"],
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$scout$2f$providers$2f$directory$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["directoryProvider"]
];
const DEFAULT_MAX_PER_RUN = 25;
const DEFAULT_MAX_PER_DAY = 100;
const getProvider = (source)=>providers.find((provider)=>provider.source === source);
const normalizeList = (value)=>Array.isArray(value) ? value.map((item)=>String(item)).filter(Boolean) : [];
const isRecord = (value)=>typeof value === "object" && value !== null;
const extractRoleIds = (value)=>{
    if (!Array.isArray(value)) return [];
    return value.map((item)=>{
        if (!isRecord(item)) return null;
        return typeof item.roleId === "string" ? item.roleId : null;
    }).filter((roleId)=>Boolean(roleId));
};
const hashValue = (value)=>(0, __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["createHash"])("sha256").update(value).digest("hex");
const buildPlaceholderEmail = (key)=>`scout+${hashValue(key)}@scout.local`;
const toNumber = (value)=>{
    if (typeof value === "number") return Number.isFinite(value) ? value : undefined;
    if (typeof value === "string") {
        const num = Number(value);
        return Number.isFinite(num) ? num : undefined;
    }
    return undefined;
};
const readQuotas = (value)=>{
    if (!isRecord(value)) return {};
    return {
        maxPerRun: toNumber(value.maxPerRun),
        maxPerDay: toNumber(value.maxPerDay)
    };
};
const getQuotaDefaults = ()=>({
        maxPerRun: toNumber(process.env.SCOUT_MAX_PER_RUN) ?? DEFAULT_MAX_PER_RUN,
        maxPerDay: toNumber(process.env.SCOUT_MAX_PER_DAY) ?? DEFAULT_MAX_PER_DAY
    });
const getStartOfDay = ()=>{
    const start = new Date();
    start.setHours(0, 0, 0, 0);
    return start;
};
const resolveDedupeKey = (result)=>{
    if (result.dedupeKey) return result.dedupeKey;
    if (result.externalProfileUrl) return hashValue(result.externalProfileUrl);
    if (result.externalId) return hashValue(result.externalId);
    if (result.email) return hashValue(result.email);
    return result.fullName ? hashValue(result.fullName) : null;
};
const upsertTalentProfile = async (result, intent)=>{
    const email = result.email ?? buildPlaceholderEmail(result.dedupeKey ?? result.externalProfileUrl ?? result.fullName);
    const primaryRole = result.primaryRole ?? intent.roleIds.find((roleId)=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$talent$2f$taxonomy$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["roleIds"].includes(roleId)) ?? "systems_architect";
    const payload = {
        fullName: result.fullName,
        email,
        primaryRole,
        secondaryRoles: result.secondaryRoles ?? [],
        domains: result.domains ?? intent.domainIds ?? [],
        seniority: result.seniority ?? intent.seniorityId ?? "ic_senior",
        availabilityWindow: result.availabilityWindow ?? intent.availabilityWindowId ?? "two_four_weeks",
        engagementModes: result.engagementModes ?? intent.modeIds ?? [
            "remote"
        ],
        rateBand: result.rateBand ?? null,
        languages: result.languages ?? [
            "en"
        ],
        linkedInUrl: result.linkedInUrl ?? null,
        xingUrl: result.xingUrl ?? null,
        locationTimezone: null
    };
    let profile = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].talentProfile.findUnique({
        where: {
            email
        }
    });
    if (!profile && result.linkedInUrl) {
        profile = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].talentProfile.findFirst({
            where: {
                linkedInUrl: result.linkedInUrl
            }
        });
    }
    if (!profile && result.xingUrl) {
        profile = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].talentProfile.findFirst({
            where: {
                xingUrl: result.xingUrl
            }
        });
    }
    if (profile) {
        const updated = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].talentProfile.update({
            where: {
                id: profile.id
            },
            data: payload
        });
        return {
            profile: updated,
            created: false
        };
    }
    const created = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].talentProfile.create({
        data: payload
    });
    return {
        profile: created,
        created: true
    };
};
const buildScoutIntent = (intent)=>{
    const roleIds = normalizeList(extractRoleIds(intent.rolesJson));
    return {
        orgId: intent.orgId,
        intentId: intent.id,
        roleIds,
        domainIds: [],
        keywords: roleIds,
        modeIds: [],
        source: "WEB"
    };
};
async function runScoutJob({ orgId }) {
    const quotaDefaults = getQuotaDefaults();
    const startOfDay = getStartOfDay();
    const searchIntents = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].searchIntent.findMany({
        where: {
            enabled: true,
            ...orgId ? {
                orgId
            } : {}
        }
    });
    const searchIntentMap = new Map(searchIntents.map((intent)=>[
            intent.id,
            intent
        ]));
    const activeIntents = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].staffingIntent.findMany({
        where: {
            state: "ACTIVE",
            ...orgId ? {
                orgId
            } : {}
        }
    });
    const derivedIntents = activeIntents.map((intent)=>buildScoutIntent(intent));
    const allIntents = [
        ...searchIntents.map((intent)=>({
                orgId: intent.orgId,
                searchIntentId: intent.id,
                roleIds: normalizeList(intent.roleIds),
                domainIds: normalizeList(intent.domainIds),
                keywords: normalizeList(intent.keywords),
                seniorityId: intent.seniorityId,
                availabilityWindowId: intent.availabilityWindowId,
                modeIds: normalizeList(intent.modeIds),
                source: "WEB",
                sourceQuery: null
            })),
        ...derivedIntents
    ];
    const results = [];
    for (const intent of allIntents){
        const sources = normalizeList(intent.searchIntentId ? normalizeList(searchIntents.find((item)=>item.id === intent.searchIntentId)?.targetSources ?? []) : (process.env.SCOUT_DEFAULT_SOURCES ?? "WEB").split(","));
        for (const source of sources){
            const trimmedSource = source.trim();
            const provider = getProvider(trimmedSource);
            if (!provider) continue;
            const quotas = intent.searchIntentId ? readQuotas(searchIntentMap.get(intent.searchIntentId)?.quotasJson) : {};
            const maxPerRun = quotas.maxPerRun ?? quotaDefaults.maxPerRun;
            const maxPerDay = quotas.maxPerDay ?? quotaDefaults.maxPerDay;
            const dailyUsage = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].scoutJobRun.aggregate({
                where: {
                    orgId: intent.orgId,
                    source: provider.source,
                    searchIntentId: intent.searchIntentId ?? null,
                    staffingIntentId: intent.intentId ?? null,
                    startedAt: {
                        gte: startOfDay
                    }
                },
                _sum: {
                    createdCount: true,
                    updatedCount: true,
                    dedupedCount: true
                }
            });
            const usedToday = (dailyUsage._sum.createdCount ?? 0) + (dailyUsage._sum.updatedCount ?? 0) + (dailyUsage._sum.dedupedCount ?? 0);
            const remainingToday = Math.max((maxPerDay ?? 0) - usedToday, 0);
            if (remainingToday <= 0 || maxPerRun <= 0) {
                const run = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].scoutJobRun.create({
                    data: {
                        orgId: intent.orgId,
                        source: provider.source,
                        searchIntentId: intent.searchIntentId ?? null,
                        staffingIntentId: intent.intentId ?? null,
                        status: "OK",
                        error: "quota_reached",
                        startedAt: new Date(),
                        finishedAt: new Date()
                    }
                });
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$audit$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logAuditEvent"])({
                    orgId: intent.orgId,
                    action: "scout_job_run_skipped",
                    resourceType: "scout_job_run",
                    resourceId: run.id,
                    meta: {
                        source: provider.source,
                        searchIntentId: intent.searchIntentId ?? null,
                        staffingIntentId: intent.intentId ?? null,
                        maxPerRun,
                        maxPerDay,
                        usedToday
                    }
                });
                continue;
            }
            const run = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].scoutJobRun.create({
                data: {
                    orgId: intent.orgId,
                    source: provider.source,
                    searchIntentId: intent.searchIntentId ?? null,
                    staffingIntentId: intent.intentId ?? null,
                    status: "OK",
                    startedAt: new Date()
                }
            });
            try {
                const found = await provider.search({
                    ...intent,
                    source: provider.source
                });
                let createdCount = 0;
                let updatedCount = 0;
                let dedupedCount = 0;
                const perRunLimit = Math.min(maxPerRun, remainingToday);
                const limited = perRunLimit > 0 ? found.slice(0, perRunLimit) : [];
                for (const result of limited){
                    const dedupeKey = resolveDedupeKey(result);
                    const existingSignal = dedupeKey || result.externalProfileUrl || result.externalId ? await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].talentSignal.findFirst({
                        where: {
                            source: "SCOUT",
                            OR: [
                                dedupeKey ? {
                                    dedupeKey
                                } : undefined,
                                result.externalProfileUrl ? {
                                    externalProfileUrl: result.externalProfileUrl
                                } : undefined,
                                result.externalId ? {
                                    externalId: result.externalId
                                } : undefined
                            ].filter(Boolean)
                        }
                    }) : null;
                    if (existingSignal) {
                        dedupedCount += 1;
                        continue;
                    }
                    const { profile, created } = await upsertTalentProfile(result, intent);
                    await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].talentSignal.create({
                        data: {
                            profileId: profile.id,
                            source: "SCOUT",
                            version: 1,
                            payloadJson: result.payload ?? {},
                            externalProfileUrl: result.externalProfileUrl ?? null,
                            externalId: result.externalId ?? null,
                            dedupeKey,
                            sourceQuery: result.sourceQuery ?? intent.sourceQuery ?? null,
                            capturedAt: new Date()
                        }
                    });
                    if (created) {
                        createdCount += 1;
                    } else {
                        updatedCount += 1;
                    }
                }
                await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].scoutJobRun.update({
                    where: {
                        id: run.id
                    },
                    data: {
                        foundCount: found.length,
                        createdCount,
                        updatedCount,
                        dedupedCount,
                        finishedAt: new Date()
                    }
                });
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$audit$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logAuditEvent"])({
                    orgId: intent.orgId,
                    action: "scout_job_run_completed",
                    resourceType: "scout_job_run",
                    resourceId: run.id,
                    meta: {
                        source: provider.source,
                        searchIntentId: intent.searchIntentId ?? null,
                        staffingIntentId: intent.intentId ?? null,
                        foundCount: found.length,
                        createdCount,
                        updatedCount,
                        dedupedCount,
                        maxPerRun,
                        maxPerDay
                    }
                });
                results.push({
                    runId: run.id,
                    found: found.length
                });
            } catch (error) {
                await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].scoutJobRun.update({
                    where: {
                        id: run.id
                    },
                    data: {
                        status: "FAILED",
                        error: error instanceof Error ? error.message : "unknown_error",
                        finishedAt: new Date()
                    }
                });
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$audit$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logAuditEvent"])({
                    orgId: intent.orgId,
                    action: "scout_job_run_failed",
                    resourceType: "scout_job_run",
                    resourceId: run.id,
                    meta: {
                        source: provider.source,
                        searchIntentId: intent.searchIntentId ?? null,
                        staffingIntentId: intent.intentId ?? null,
                        error: error instanceof Error ? error.message : "unknown_error"
                    }
                });
            }
        }
    }
    return {
        ok: true,
        runs: results.length
    };
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
"[project]/app/portal/hr/radar/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "$$RSC_SERVER_ACTION_0",
    ()=>$$RSC_SERVER_ACTION_0,
    "$$RSC_SERVER_ACTION_1",
    ()=>$$RSC_SERVER_ACTION_1,
    "$$RSC_SERVER_ACTION_2",
    ()=>$$RSC_SERVER_ACTION_2,
    "default",
    ()=>RadarPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"002acd010959aac682131b8c76dad31f54baed19de":"$$RSC_SERVER_ACTION_2","40779d7379bf6f8a2f26865de52aefaf24f5b3539b":"$$RSC_SERVER_ACTION_1","40f909a9a54c74e913ddfc3ab869f9f696227c52e9":"$$RSC_SERVER_ACTION_0"},"",""] */ var __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/crypto [external] (crypto, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/prisma.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$portal$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/portal.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$scout$2f$job$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/scout/job.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$talent$2f$taxonomy$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/talent/taxonomy.ts [app-rsc] (ecmascript)");
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
const parseCsv = (text)=>{
    const lines = text.split(/\r?\n/).filter((line)=>line.trim().length > 0);
    if (lines.length === 0) return [];
    const headers = lines[0].split(",").map((h)=>h.trim());
    return lines.slice(1).map((line)=>{
        const values = line.split(",").map((v)=>v.trim());
        return headers.reduce((acc, key, index)=>{
            acc[key] = values[index] ?? "";
            return acc;
        }, {});
    });
};
const hash = (value)=>(0, __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["createHash"])("sha256").update(value).digest("hex");
const $$RSC_SERVER_ACTION_0 = async function importCsv(formData) {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$portal$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["requirePortalSession"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$portal$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["requireLucienStaff"])(session.user.role);
    const file = formData.get("file");
    if (!(file instanceof File)) return;
    const text = await file.text();
    const rows = parseCsv(text);
    for (const row of rows){
        const fullName = row.fullName || row.name || "Unknown";
        const email = row.email || `scout+${hash(fullName)}@scout.local`;
        const primaryRole = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$talent$2f$taxonomy$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["roleIds"].includes(row.primaryRole) ? row.primaryRole : "systems_architect";
        const secondaryRoles = row.secondaryRoles ? row.secondaryRoles.split("|").filter((item)=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$talent$2f$taxonomy$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["roleIds"].includes(item)) : [];
        const domains = row.domains ? row.domains.split("|").filter((item)=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$talent$2f$taxonomy$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["domainIds"].includes(item)) : [];
        const profile = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].talentProfile.upsert({
            where: {
                email
            },
            update: {
                fullName,
                primaryRole,
                secondaryRoles,
                domains,
                seniority: row.seniority || "ic_senior",
                availabilityWindow: row.availabilityWindow || "two_four_weeks",
                engagementModes: row.engagementModes ? row.engagementModes.split("|") : [
                    "remote"
                ],
                rateBand: row.rateBand || null,
                languages: row.languages ? row.languages.split("|") : [
                    "en"
                ],
                linkedInUrl: row.linkedInUrl || null,
                xingUrl: row.xingUrl || null,
                locationTimezone: row.locationTimezone || null
            },
            create: {
                fullName,
                email,
                primaryRole,
                secondaryRoles,
                domains,
                seniority: row.seniority || "ic_senior",
                availabilityWindow: row.availabilityWindow || "two_four_weeks",
                engagementModes: row.engagementModes ? row.engagementModes.split("|") : [
                    "remote"
                ],
                rateBand: row.rateBand || null,
                languages: row.languages ? row.languages.split("|") : [
                    "en"
                ],
                linkedInUrl: row.linkedInUrl || null,
                xingUrl: row.xingUrl || null,
                locationTimezone: row.locationTimezone || null
            }
        });
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].talentSignal.create({
            data: {
                profileId: profile.id,
                source: "IMPORT_CSV",
                version: 1,
                payloadJson: row,
                externalProfileUrl: row.linkedInUrl || row.xingUrl || null,
                externalId: row.externalId || null,
                dedupeKey: row.dedupeKey || hash(email),
                sourceQuery: "CSV_IMPORT",
                capturedAt: new Date()
            }
        });
    }
};
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])($$RSC_SERVER_ACTION_0, "40f909a9a54c74e913ddfc3ab869f9f696227c52e9", null);
var importCsv = $$RSC_SERVER_ACTION_0;
const $$RSC_SERVER_ACTION_1 = async function createSearchIntent(formData) {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$portal$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["requirePortalSession"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$portal$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["requireLucienStaff"])(session.user.role);
    const roleId = String(formData.get("roleId") || "");
    const keyword = String(formData.get("keyword") || "");
    const sourcesRaw = String(formData.get("sources") || "WEB");
    if (!session.user.orgId) return;
    await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].searchIntent.create({
        data: {
            orgId: session.user.orgId,
            enabled: true,
            priority: 0,
            targetSources: sourcesRaw.split(",").map((item)=>item.trim()).filter(Boolean),
            quotasJson: {
                maxPerRun: 10,
                maxPerDay: 50
            },
            roleIds: roleId ? [
                roleId
            ] : [],
            domainIds: [],
            geo: null,
            seniorityId: null,
            modeIds: [],
            availabilityWindowId: null,
            keywords: keyword ? [
                keyword
            ] : []
        }
    });
};
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])($$RSC_SERVER_ACTION_1, "40779d7379bf6f8a2f26865de52aefaf24f5b3539b", null);
var createSearchIntent = $$RSC_SERVER_ACTION_1;
const $$RSC_SERVER_ACTION_2 = async function triggerScout() {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$portal$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["requirePortalSession"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$portal$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["requireLucienStaff"])(session.user.role);
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$scout$2f$job$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["runScoutJob"])({
        orgId: session.user.orgId ?? undefined
    });
};
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])($$RSC_SERVER_ACTION_2, "002acd010959aac682131b8c76dad31f54baed19de", null);
var triggerScout = $$RSC_SERVER_ACTION_2;
async function RadarPage() {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$portal$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["requirePortalSession"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$portal$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["requireLucienStaff"])(session.user.role);
    const [searchIntents, scoutRuns, signals] = await Promise.all([
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].searchIntent.findMany({
            where: {
                orgId: session.user.orgId ?? ""
            },
            orderBy: {
                updatedAt: "desc"
            }
        }),
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].scoutJobRun.findMany({
            where: {
                orgId: session.user.orgId ?? ""
            },
            orderBy: {
                startedAt: "desc"
            },
            take: 10
        }),
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].talentSignal.findMany({
            orderBy: {
                createdAt: "desc"
            },
            take: 20,
            include: {
                profile: true
            }
        })
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs uppercase tracking-[0.3em] text-slate",
                        children: "Radar"
                    }, void 0, false, {
                        fileName: "[project]/app/portal/hr/radar/page.tsx",
                        lineNumber: 155,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-2xl font-semibold text-ash",
                        children: "Supply radar"
                    }, void 0, false, {
                        fileName: "[project]/app/portal/hr/radar/page.tsx",
                        lineNumber: 156,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-muted",
                        children: "Capture signals, run scout jobs, and manage search intents."
                    }, void 0, false, {
                        fileName: "[project]/app/portal/hr/radar/page.tsx",
                        lineNumber: 157,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/portal/hr/radar/page.tsx",
                lineNumber: 154,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$portal$2f$StatusBadge$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StatusBadge"], {
                        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$status$2d$badges$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getMetaBadge"])(`${searchIntents.length} search intents`)
                    }, void 0, false, {
                        fileName: "[project]/app/portal/hr/radar/page.tsx",
                        lineNumber: 163,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$portal$2f$StatusBadge$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StatusBadge"], {
                        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$status$2d$badges$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getMetaBadge"])(`${scoutRuns.length} recent runs`)
                    }, void 0, false, {
                        fileName: "[project]/app/portal/hr/radar/page.tsx",
                        lineNumber: 164,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        action: triggerScout,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "submit",
                            className: "btn-animate btn-secondary rounded-full px-4 py-2 text-[0.6rem] uppercase tracking-[0.2em]",
                            children: "Run scout job"
                        }, void 0, false, {
                            fileName: "[project]/app/portal/hr/radar/page.tsx",
                            lineNumber: 166,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/portal/hr/radar/page.tsx",
                        lineNumber: 165,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/portal/hr/radar/page.tsx",
                lineNumber: 162,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-6 lg:grid-cols-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-2xl border border-line/80 bg-soft p-6 space-y-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-sm uppercase tracking-[0.2em] text-slate",
                                children: "Search intents"
                            }, void 0, false, {
                                fileName: "[project]/app/portal/hr/radar/page.tsx",
                                lineNumber: 177,
                                columnNumber: 11
                            }, this),
                            searchIntents.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-muted",
                                children: "No search intents configured."
                            }, void 0, false, {
                                fileName: "[project]/app/portal/hr/radar/page.tsx",
                                lineNumber: 181,
                                columnNumber: 13
                            }, this) : searchIntents.map((intent)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-xl border border-line/80 bg-ink px-4 py-3 text-sm text-muted",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-ash",
                                            children: [
                                                "Roles: ",
                                                intent.roleIds.join(", ") || "—"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/portal/hr/radar/page.tsx",
                                            lineNumber: 188,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs text-slate",
                                            children: [
                                                "Sources: ",
                                                intent.targetSources.join(", ") || "WEB"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/portal/hr/radar/page.tsx",
                                            lineNumber: 191,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, intent.id, true, {
                                    fileName: "[project]/app/portal/hr/radar/page.tsx",
                                    lineNumber: 184,
                                    columnNumber: 15
                                }, this)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                action: createSearchIntent,
                                className: "space-y-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs uppercase tracking-[0.2em] text-slate",
                                        children: "Add intent"
                                    }, void 0, false, {
                                        fileName: "[project]/app/portal/hr/radar/page.tsx",
                                        lineNumber: 199,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid gap-3 text-sm text-slate",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                name: "roleId",
                                                placeholder: "roleId (e.g. systems_architect)",
                                                className: "w-full rounded-xl border border-line bg-ink px-3 py-2 text-ash"
                                            }, void 0, false, {
                                                fileName: "[project]/app/portal/hr/radar/page.tsx",
                                                lineNumber: 203,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                name: "keyword",
                                                placeholder: "keyword (optional)",
                                                className: "w-full rounded-xl border border-line bg-ink px-3 py-2 text-ash"
                                            }, void 0, false, {
                                                fileName: "[project]/app/portal/hr/radar/page.tsx",
                                                lineNumber: 208,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                name: "sources",
                                                placeholder: "sources (comma, e.g. WEB)",
                                                className: "w-full rounded-xl border border-line bg-ink px-3 py-2 text-ash"
                                            }, void 0, false, {
                                                fileName: "[project]/app/portal/hr/radar/page.tsx",
                                                lineNumber: 213,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/portal/hr/radar/page.tsx",
                                        lineNumber: 202,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "submit",
                                        className: "btn-animate btn-primary rounded-full px-4 py-2 text-[0.6rem] uppercase tracking-[0.2em]",
                                        children: "Create intent"
                                    }, void 0, false, {
                                        fileName: "[project]/app/portal/hr/radar/page.tsx",
                                        lineNumber: 219,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/portal/hr/radar/page.tsx",
                                lineNumber: 198,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/portal/hr/radar/page.tsx",
                        lineNumber: 176,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-2xl border border-line/80 bg-soft p-6 space-y-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-sm uppercase tracking-[0.2em] text-slate",
                                children: "CSV import"
                            }, void 0, false, {
                                fileName: "[project]/app/portal/hr/radar/page.tsx",
                                lineNumber: 229,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                action: importCsv,
                                className: "space-y-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "file",
                                        name: "file",
                                        accept: ".csv",
                                        className: "w-full rounded-xl border border-line bg-ink px-3 py-2 text-xs text-ash"
                                    }, void 0, false, {
                                        fileName: "[project]/app/portal/hr/radar/page.tsx",
                                        lineNumber: 233,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "submit",
                                        className: "btn-animate btn-secondary rounded-full px-4 py-2 text-[0.6rem] uppercase tracking-[0.2em]",
                                        children: "Import CSV"
                                    }, void 0, false, {
                                        fileName: "[project]/app/portal/hr/radar/page.tsx",
                                        lineNumber: 239,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/portal/hr/radar/page.tsx",
                                lineNumber: 232,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/portal/hr/radar/page.tsx",
                        lineNumber: 228,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/portal/hr/radar/page.tsx",
                lineNumber: 175,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-2xl border border-line/80 bg-soft p-6 space-y-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-sm uppercase tracking-[0.2em] text-slate",
                        children: "Talent signal stream"
                    }, void 0, false, {
                        fileName: "[project]/app/portal/hr/radar/page.tsx",
                        lineNumber: 250,
                        columnNumber: 9
                    }, this),
                    signals.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-muted",
                        children: "No signals captured yet."
                    }, void 0, false, {
                        fileName: "[project]/app/portal/hr/radar/page.tsx",
                        lineNumber: 254,
                        columnNumber: 11
                    }, this) : signals.map((signal)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap items-center justify-between gap-3 rounded-xl border border-line/80 bg-ink px-4 py-3 text-sm text-muted",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-ash",
                                            children: signal.profile.fullName
                                        }, void 0, false, {
                                            fileName: "[project]/app/portal/hr/radar/page.tsx",
                                            lineNumber: 262,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs text-slate",
                                            children: signal.source
                                        }, void 0, false, {
                                            fileName: "[project]/app/portal/hr/radar/page.tsx",
                                            lineNumber: 263,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/portal/hr/radar/page.tsx",
                                    lineNumber: 261,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-xs text-slate",
                                    children: signal.externalProfileUrl ?? "—"
                                }, void 0, false, {
                                    fileName: "[project]/app/portal/hr/radar/page.tsx",
                                    lineNumber: 265,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, signal.id, true, {
                            fileName: "[project]/app/portal/hr/radar/page.tsx",
                            lineNumber: 257,
                            columnNumber: 13
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/app/portal/hr/radar/page.tsx",
                lineNumber: 249,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/portal/hr/radar/page.tsx",
        lineNumber: 153,
        columnNumber: 5
    }, this);
}
}),
"[project]/.next-internal/server/app/portal/hr/radar/page/actions.js { ACTIONS_MODULE0 => \"[project]/app/portal/hr/radar/page.tsx [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$portal$2f$hr$2f$radar$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/portal/hr/radar/page.tsx [app-rsc] (ecmascript)");
;
;
;
}),
"[project]/.next-internal/server/app/portal/hr/radar/page/actions.js { ACTIONS_MODULE0 => \"[project]/app/portal/hr/radar/page.tsx [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "002acd010959aac682131b8c76dad31f54baed19de",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$portal$2f$hr$2f$radar$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$$RSC_SERVER_ACTION_2"],
    "40779d7379bf6f8a2f26865de52aefaf24f5b3539b",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$portal$2f$hr$2f$radar$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$$RSC_SERVER_ACTION_1"],
    "40f909a9a54c74e913ddfc3ab869f9f696227c52e9",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$portal$2f$hr$2f$radar$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$$RSC_SERVER_ACTION_0"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$portal$2f$hr$2f$radar$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$app$2f$portal$2f$hr$2f$radar$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/portal/hr/radar/page/actions.js { ACTIONS_MODULE0 => "[project]/app/portal/hr/radar/page.tsx [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$portal$2f$hr$2f$radar$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/portal/hr/radar/page.tsx [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=_324825cf._.js.map