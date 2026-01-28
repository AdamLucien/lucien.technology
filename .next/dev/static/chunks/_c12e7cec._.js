(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/MotionIn.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MotionIn",
    ()=>MotionIn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function MotionIn({ children, className, delay = 0, hover = false, hoverScale = 1.01 }) {
    _s();
    const prefersReducedMotion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    if (prefersReducedMotion) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: className,
            children: children
        }, void 0, false, {
            fileName: "[project]/components/MotionIn.tsx",
            lineNumber: 24,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        className: className,
        initial: {
            opacity: 0,
            y: 12
        },
        whileInView: {
            opacity: 1,
            y: 0
        },
        viewport: {
            once: true,
            margin: "-10%"
        },
        whileHover: hover ? {
            scale: hoverScale
        } : undefined,
        transition: {
            duration: 0.2,
            ease: "easeOut",
            delay
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/components/MotionIn.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
_s(MotionIn, "VVlbsF4XHDtJtLWyDw/S3b1ysqw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"]
    ];
});
_c = MotionIn;
var _c;
__turbopack_context__.k.register(_c, "MotionIn");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/talent/taxonomy.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/partners/PartnersForm.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PartnersForm",
    ()=>PartnersForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/i18n.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$talent$2f$taxonomy$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/talent/taxonomy.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const formId = "partners-signal-form";
const emptyState = {
    fullName: "",
    email: "",
    locationTimezone: "",
    linkedInUrl: "",
    primaryRole: "",
    secondaryRoles: [],
    domains: [],
    seniority: "",
    availabilityWindow: "",
    engagementModes: [],
    rateBand: "",
    languages: [],
    consent: false,
    honeypot: ""
};
const toggleValue = (list, value)=>list.includes(value) ? list.filter((item)=>item !== value) : [
        ...list,
        value
    ];
const normalizeList = (list)=>Array.from(new Set(list.filter(Boolean)));
const buildLabelMap = (options, locale)=>{
    return new Map(options.map((option)=>[
            option.id,
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])(option.labelKey, locale)
        ]));
};
function PartnersForm({ locale }) {
    _s();
    const prefersReducedMotion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    const [formState, setFormState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(emptyState);
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("idle");
    const [errorKey, setErrorKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [submittedData, setSubmittedData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const roleOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PartnersForm.useMemo[roleOptions]": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$talent$2f$taxonomy$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["roleGroups"].flatMap({
                "PartnersForm.useMemo[roleOptions]": (group)=>group.roles
            }["PartnersForm.useMemo[roleOptions]"])
    }["PartnersForm.useMemo[roleOptions]"], []);
    const roleLabelMap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PartnersForm.useMemo[roleLabelMap]": ()=>buildLabelMap(roleOptions, locale)
    }["PartnersForm.useMemo[roleLabelMap]"], [
        roleOptions,
        locale
    ]);
    const domainLabelMap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PartnersForm.useMemo[domainLabelMap]": ()=>buildLabelMap(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$talent$2f$taxonomy$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["domainOptions"], locale)
    }["PartnersForm.useMemo[domainLabelMap]"], [
        locale
    ]);
    const seniorityLabelMap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PartnersForm.useMemo[seniorityLabelMap]": ()=>buildLabelMap(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$talent$2f$taxonomy$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["seniorityOptions"], locale)
    }["PartnersForm.useMemo[seniorityLabelMap]"], [
        locale
    ]);
    const availabilityLabelMap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PartnersForm.useMemo[availabilityLabelMap]": ()=>buildLabelMap(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$talent$2f$taxonomy$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["availabilityOptions"], locale)
    }["PartnersForm.useMemo[availabilityLabelMap]"], [
        locale
    ]);
    const engagementModeLabelMap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PartnersForm.useMemo[engagementModeLabelMap]": ()=>buildLabelMap(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$talent$2f$taxonomy$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["engagementModeOptions"], locale)
    }["PartnersForm.useMemo[engagementModeLabelMap]"], [
        locale
    ]);
    const rateBandLabelMap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PartnersForm.useMemo[rateBandLabelMap]": ()=>buildLabelMap(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$talent$2f$taxonomy$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rateBandOptions"], locale)
    }["PartnersForm.useMemo[rateBandLabelMap]"], [
        locale
    ]);
    const languageLabelMap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PartnersForm.useMemo[languageLabelMap]": ()=>buildLabelMap(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$talent$2f$taxonomy$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["languageOptions"], locale)
    }["PartnersForm.useMemo[languageLabelMap]"], [
        locale
    ]);
    const resolveLabels = (list, map)=>{
        if (list.length === 0) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("partners.summary.none", locale);
        return list.map((item)=>map.get(item) ?? item).join(", ");
    };
    const onSubmit = async (event)=>{
        event.preventDefault();
        setErrorKey(null);
        if (!formState.domains.length || !formState.consent) {
            setErrorKey("partners.form.error.invalid");
            return;
        }
        setStatus("submitting");
        try {
            const payload = {
                ...formState,
                email: formState.email.trim().toLowerCase(),
                secondaryRoles: normalizeList(formState.secondaryRoles),
                domains: normalizeList(formState.domains),
                engagementModes: normalizeList(formState.engagementModes),
                languages: normalizeList(formState.languages),
                locale
            };
            const response = await fetch("/api/partners/signal", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(payload)
            });
            const data = await response.json().catch(()=>({}));
            if (response.ok && data?.ok) {
                setStatus("success");
                setSubmittedData(payload);
                setFormState(emptyState);
            } else {
                setStatus("error");
                setErrorKey(typeof data?.messageKey === "string" ? data.messageKey : "partners.form.error.generic");
            }
        } catch  {
            setStatus("error");
            setErrorKey("partners.form.error.generic");
        }
    };
    if (status === "success" && submittedData) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs uppercase tracking-[0.3em] text-slate",
                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("partners.success.title", locale)
                        }, void 0, false, {
                            fileName: "[project]/components/partners/PartnersForm.tsx",
                            lineNumber: 164,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-2xl font-semibold text-ash",
                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("partners.success.subtitle", locale)
                        }, void 0, false, {
                            fileName: "[project]/components/partners/PartnersForm.tsx",
                            lineNumber: 167,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-muted",
                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("partners.success.next", locale)
                        }, void 0, false, {
                            fileName: "[project]/components/partners/PartnersForm.tsx",
                            lineNumber: 170,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/partners/PartnersForm.tsx",
                    lineNumber: 163,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "surface-card relative overflow-hidden rounded-2xl border border-line/80 bg-soft p-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(250,250,250,0.12),_transparent_60%)] ${prefersReducedMotion ? "" : "animate-pulse"}`
                        }, void 0, false, {
                            fileName: "[project]/components/partners/PartnersForm.tsx",
                            lineNumber: 173,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-sm uppercase tracking-[0.2em] text-slate",
                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("partners.success.summary.title", locale)
                                }, void 0, false, {
                                    fileName: "[project]/components/partners/PartnersForm.tsx",
                                    lineNumber: 179,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dl", {
                                    className: "grid gap-3 text-sm text-muted md:grid-cols-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                    className: "text-xs uppercase tracking-[0.2em] text-slate",
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("partners.summary.fullName", locale)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/partners/PartnersForm.tsx",
                                                    lineNumber: 184,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                    className: "text-ash",
                                                    children: submittedData.fullName
                                                }, void 0, false, {
                                                    fileName: "[project]/components/partners/PartnersForm.tsx",
                                                    lineNumber: 187,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/partners/PartnersForm.tsx",
                                            lineNumber: 183,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                    className: "text-xs uppercase tracking-[0.2em] text-slate",
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("partners.summary.email", locale)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/partners/PartnersForm.tsx",
                                                    lineNumber: 190,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                    className: "text-ash",
                                                    children: submittedData.email
                                                }, void 0, false, {
                                                    fileName: "[project]/components/partners/PartnersForm.tsx",
                                                    lineNumber: 193,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/partners/PartnersForm.tsx",
                                            lineNumber: 189,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                    className: "text-xs uppercase tracking-[0.2em] text-slate",
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("partners.summary.locationTimezone", locale)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/partners/PartnersForm.tsx",
                                                    lineNumber: 196,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                    className: "text-ash",
                                                    children: submittedData.locationTimezone || (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("partners.summary.none", locale)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/partners/PartnersForm.tsx",
                                                    lineNumber: 199,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/partners/PartnersForm.tsx",
                                            lineNumber: 195,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                    className: "text-xs uppercase tracking-[0.2em] text-slate",
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("partners.summary.linkedIn", locale)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/partners/PartnersForm.tsx",
                                                    lineNumber: 204,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                    className: "text-ash",
                                                    children: submittedData.linkedInUrl || (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("partners.summary.none", locale)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/partners/PartnersForm.tsx",
                                                    lineNumber: 207,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/partners/PartnersForm.tsx",
                                            lineNumber: 203,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                    className: "text-xs uppercase tracking-[0.2em] text-slate",
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("partners.summary.primaryRole", locale)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/partners/PartnersForm.tsx",
                                                    lineNumber: 212,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                    className: "text-ash",
                                                    children: roleLabelMap.get(submittedData.primaryRole) ?? submittedData.primaryRole
                                                }, void 0, false, {
                                                    fileName: "[project]/components/partners/PartnersForm.tsx",
                                                    lineNumber: 215,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/partners/PartnersForm.tsx",
                                            lineNumber: 211,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                    className: "text-xs uppercase tracking-[0.2em] text-slate",
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("partners.summary.secondaryRoles", locale)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/partners/PartnersForm.tsx",
                                                    lineNumber: 220,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                    className: "text-ash",
                                                    children: resolveLabels(submittedData.secondaryRoles, roleLabelMap)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/partners/PartnersForm.tsx",
                                                    lineNumber: 223,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/partners/PartnersForm.tsx",
                                            lineNumber: 219,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                    className: "text-xs uppercase tracking-[0.2em] text-slate",
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("partners.summary.domains", locale)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/partners/PartnersForm.tsx",
                                                    lineNumber: 228,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                    className: "text-ash",
                                                    children: resolveLabels(submittedData.domains, domainLabelMap)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/partners/PartnersForm.tsx",
                                                    lineNumber: 231,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/partners/PartnersForm.tsx",
                                            lineNumber: 227,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                    className: "text-xs uppercase tracking-[0.2em] text-slate",
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("partners.summary.seniority", locale)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/partners/PartnersForm.tsx",
                                                    lineNumber: 236,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                    className: "text-ash",
                                                    children: seniorityLabelMap.get(submittedData.seniority) ?? submittedData.seniority
                                                }, void 0, false, {
                                                    fileName: "[project]/components/partners/PartnersForm.tsx",
                                                    lineNumber: 239,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/partners/PartnersForm.tsx",
                                            lineNumber: 235,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                    className: "text-xs uppercase tracking-[0.2em] text-slate",
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("partners.summary.availability", locale)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/partners/PartnersForm.tsx",
                                                    lineNumber: 244,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                    className: "text-ash",
                                                    children: availabilityLabelMap.get(submittedData.availabilityWindow) ?? submittedData.availabilityWindow
                                                }, void 0, false, {
                                                    fileName: "[project]/components/partners/PartnersForm.tsx",
                                                    lineNumber: 247,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/partners/PartnersForm.tsx",
                                            lineNumber: 243,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                    className: "text-xs uppercase tracking-[0.2em] text-slate",
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("partners.summary.engagementModes", locale)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/partners/PartnersForm.tsx",
                                                    lineNumber: 253,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                    className: "text-ash",
                                                    children: resolveLabels(submittedData.engagementModes, engagementModeLabelMap)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/partners/PartnersForm.tsx",
                                                    lineNumber: 256,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/partners/PartnersForm.tsx",
                                            lineNumber: 252,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                    className: "text-xs uppercase tracking-[0.2em] text-slate",
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("partners.summary.rateBand", locale)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/partners/PartnersForm.tsx",
                                                    lineNumber: 261,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                    className: "text-ash",
                                                    children: submittedData.rateBand ? rateBandLabelMap.get(submittedData.rateBand) ?? submittedData.rateBand : (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("partners.summary.none", locale)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/partners/PartnersForm.tsx",
                                                    lineNumber: 264,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/partners/PartnersForm.tsx",
                                            lineNumber: 260,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                    className: "text-xs uppercase tracking-[0.2em] text-slate",
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("partners.summary.languages", locale)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/partners/PartnersForm.tsx",
                                                    lineNumber: 271,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                    className: "text-ash",
                                                    children: resolveLabels(submittedData.languages, languageLabelMap)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/partners/PartnersForm.tsx",
                                                    lineNumber: 274,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/partners/PartnersForm.tsx",
                                            lineNumber: 270,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/partners/PartnersForm.tsx",
                                    lineNumber: 182,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/partners/PartnersForm.tsx",
                            lineNumber: 178,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/partners/PartnersForm.tsx",
                    lineNumber: 172,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/partners/PartnersForm.tsx",
            lineNumber: 162,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                id: formId,
                onSubmit: onSubmit,
                className: "surface-card space-y-6 rounded-2xl border border-line/80 bg-soft p-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid gap-4 md:grid-cols-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "space-y-2 text-sm text-slate",
                                children: [
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("partners.form.fullName.label", locale),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        name: "fullName",
                                        required: true,
                                        value: formState.fullName,
                                        onChange: (event)=>setFormState((current)=>({
                                                    ...current,
                                                    fullName: event.target.value
                                                })),
                                        placeholder: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("partners.form.fullName.placeholder", locale),
                                        className: "w-full rounded-xl border border-line bg-ink px-4 py-2 text-ash"
                                    }, void 0, false, {
                                        fileName: "[project]/components/partners/PartnersForm.tsx",
                                        lineNumber: 295,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/partners/PartnersForm.tsx",
                                lineNumber: 293,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "space-y-2 text-sm text-slate",
                                children: [
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("partners.form.email.label", locale),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "email",
                                        name: "email",
                                        required: true,
                                        value: formState.email,
                                        onChange: (event)=>setFormState((current)=>({
                                                    ...current,
                                                    email: event.target.value
                                                })),
                                        placeholder: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("partners.form.email.placeholder", locale),
                                        className: "w-full rounded-xl border border-line bg-ink px-4 py-2 text-ash"
                                    }, void 0, false, {
                                        fileName: "[project]/components/partners/PartnersForm.tsx",
                                        lineNumber: 308,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/partners/PartnersForm.tsx",
                                lineNumber: 306,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "space-y-2 text-sm text-slate",
                                children: [
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("partners.form.locationTimezone.label", locale),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        name: "locationTimezone",
                                        value: formState.locationTimezone,
                                        onChange: (event)=>setFormState((current)=>({
                                                    ...current,
                                                    locationTimezone: event.target.value
                                                })),
                                        placeholder: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("partners.form.locationTimezone.placeholder", locale),
                                        className: "w-full rounded-xl border border-line bg-ink px-4 py-2 text-ash"
                                    }, void 0, false, {
                                        fileName: "[project]/components/partners/PartnersForm.tsx",
                                        lineNumber: 322,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/partners/PartnersForm.tsx",
                                lineNumber: 320,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "space-y-2 text-sm text-slate",
                                children: [
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("partners.form.linkedIn.label", locale),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        name: "linkedInUrl",
                                        value: formState.linkedInUrl,
                                        onChange: (event)=>setFormState((current)=>({
                                                    ...current,
                                                    linkedInUrl: event.target.value
                                                })),
                                        placeholder: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("partners.form.linkedIn.placeholder", locale),
                                        className: "w-full rounded-xl border border-line bg-ink px-4 py-2 text-ash"
                                    }, void 0, false, {
                                        fileName: "[project]/components/partners/PartnersForm.tsx",
                                        lineNumber: 337,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/partners/PartnersForm.tsx",
                                lineNumber: 335,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "space-y-2 text-sm text-slate",
                                children: [
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("partners.form.primaryRole.label", locale),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        name: "primaryRole",
                                        required: true,
                                        value: formState.primaryRole,
                                        onChange: (event)=>setFormState((current)=>({
                                                    ...current,
                                                    primaryRole: event.target.value,
                                                    secondaryRoles: current.secondaryRoles.filter((item)=>item !== event.target.value)
                                                })),
                                        className: "w-full rounded-xl border border-line bg-ink px-4 py-2 text-ash",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "",
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("partners.form.primaryRole.placeholder", locale)
                                            }, void 0, false, {
                                                fileName: "[project]/components/partners/PartnersForm.tsx",
                                                lineNumber: 364,
                                                columnNumber: 15
                                            }, this),
                                            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$talent$2f$taxonomy$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["roleGroups"].map((group)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("optgroup", {
                                                    label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])(group.labelKey, locale),
                                                    children: group.roles.map((role)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: role.id,
                                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])(role.labelKey, locale)
                                                        }, role.id, false, {
                                                            fileName: "[project]/components/partners/PartnersForm.tsx",
                                                            lineNumber: 370,
                                                            columnNumber: 21
                                                        }, this))
                                                }, group.id, false, {
                                                    fileName: "[project]/components/partners/PartnersForm.tsx",
                                                    lineNumber: 368,
                                                    columnNumber: 17
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/partners/PartnersForm.tsx",
                                        lineNumber: 349,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/partners/PartnersForm.tsx",
                                lineNumber: 347,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "space-y-2 text-sm text-slate",
                                children: [
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("partners.form.seniority.label", locale),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        name: "seniority",
                                        required: true,
                                        value: formState.seniority,
                                        onChange: (event)=>setFormState((current)=>({
                                                    ...current,
                                                    seniority: event.target.value
                                                })),
                                        className: "w-full rounded-xl border border-line bg-ink px-4 py-2 text-ash",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "",
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("partners.form.seniority.placeholder", locale)
                                            }, void 0, false, {
                                                fileName: "[project]/components/partners/PartnersForm.tsx",
                                                lineNumber: 389,
                                                columnNumber: 15
                                            }, this),
                                            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$talent$2f$taxonomy$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["seniorityOptions"].map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: option.id,
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])(option.labelKey, locale)
                                                }, option.id, false, {
                                                    fileName: "[project]/components/partners/PartnersForm.tsx",
                                                    lineNumber: 391,
                                                    columnNumber: 17
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/partners/PartnersForm.tsx",
                                        lineNumber: 380,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/partners/PartnersForm.tsx",
                                lineNumber: 378,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "space-y-2 text-sm text-slate",
                                children: [
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("partners.form.availability.label", locale),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        name: "availabilityWindow",
                                        required: true,
                                        value: formState.availabilityWindow,
                                        onChange: (event)=>setFormState((current)=>({
                                                    ...current,
                                                    availabilityWindow: event.target.value
                                                })),
                                        className: "w-full rounded-xl border border-line bg-ink px-4 py-2 text-ash",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "",
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("partners.form.availability.placeholder", locale)
                                            }, void 0, false, {
                                                fileName: "[project]/components/partners/PartnersForm.tsx",
                                                lineNumber: 411,
                                                columnNumber: 15
                                            }, this),
                                            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$talent$2f$taxonomy$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["availabilityOptions"].map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: option.id,
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])(option.labelKey, locale)
                                                }, option.id, false, {
                                                    fileName: "[project]/components/partners/PartnersForm.tsx",
                                                    lineNumber: 415,
                                                    columnNumber: 17
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/partners/PartnersForm.tsx",
                                        lineNumber: 399,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/partners/PartnersForm.tsx",
                                lineNumber: 397,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "space-y-2 text-sm text-slate",
                                children: [
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("partners.form.rateBand.label", locale),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        name: "rateBand",
                                        value: formState.rateBand,
                                        onChange: (event)=>setFormState((current)=>({
                                                    ...current,
                                                    rateBand: event.target.value
                                                })),
                                        className: "w-full rounded-xl border border-line bg-ink px-4 py-2 text-ash",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "",
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("partners.form.rateBand.placeholder", locale)
                                            }, void 0, false, {
                                                fileName: "[project]/components/partners/PartnersForm.tsx",
                                                lineNumber: 431,
                                                columnNumber: 15
                                            }, this),
                                            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$talent$2f$taxonomy$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rateBandOptions"].map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: option.id,
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])(option.labelKey, locale)
                                                }, option.id, false, {
                                                    fileName: "[project]/components/partners/PartnersForm.tsx",
                                                    lineNumber: 433,
                                                    columnNumber: 17
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/partners/PartnersForm.tsx",
                                        lineNumber: 423,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/partners/PartnersForm.tsx",
                                lineNumber: 421,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/partners/PartnersForm.tsx",
                        lineNumber: 292,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm text-slate",
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("partners.form.secondaryRoles.label", locale)
                                    }, void 0, false, {
                                        fileName: "[project]/components/partners/PartnersForm.tsx",
                                        lineNumber: 443,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs text-muted",
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("partners.form.secondaryRoles.helper", locale)
                                    }, void 0, false, {
                                        fileName: "[project]/components/partners/PartnersForm.tsx",
                                        lineNumber: 446,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/partners/PartnersForm.tsx",
                                lineNumber: 442,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$talent$2f$taxonomy$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["roleGroups"].map((group)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs uppercase tracking-[0.2em] text-slate",
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])(group.labelKey, locale)
                                            }, void 0, false, {
                                                fileName: "[project]/components/partners/PartnersForm.tsx",
                                                lineNumber: 453,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-wrap gap-2",
                                                children: group.roles.map((role)=>{
                                                    const isSelected = formState.secondaryRoles.includes(role.id);
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        "aria-pressed": isSelected,
                                                        className: `btn-animate rounded-full border px-3 py-1 text-[0.65rem] uppercase tracking-[0.2em] ${isSelected ? "border-ash bg-ink/70 text-ash" : "border-line text-slate hover:text-ash"}`,
                                                        onClick: ()=>setFormState((current)=>({
                                                                    ...current,
                                                                    secondaryRoles: toggleValue(current.secondaryRoles, role.id)
                                                                })),
                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])(role.labelKey, locale)
                                                    }, role.id, false, {
                                                        fileName: "[project]/components/partners/PartnersForm.tsx",
                                                        lineNumber: 460,
                                                        columnNumber: 23
                                                    }, this);
                                                })
                                            }, void 0, false, {
                                                fileName: "[project]/components/partners/PartnersForm.tsx",
                                                lineNumber: 456,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, group.id, true, {
                                        fileName: "[project]/components/partners/PartnersForm.tsx",
                                        lineNumber: 452,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/partners/PartnersForm.tsx",
                                lineNumber: 450,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/partners/PartnersForm.tsx",
                        lineNumber: 441,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm text-slate",
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("partners.form.domains.label", locale)
                                    }, void 0, false, {
                                        fileName: "[project]/components/partners/PartnersForm.tsx",
                                        lineNumber: 488,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs text-muted",
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("partners.form.domains.helper", locale)
                                    }, void 0, false, {
                                        fileName: "[project]/components/partners/PartnersForm.tsx",
                                        lineNumber: 491,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/partners/PartnersForm.tsx",
                                lineNumber: 487,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap gap-2",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$talent$2f$taxonomy$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["domainOptions"].map((option)=>{
                                    const isSelected = formState.domains.includes(option.id);
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        "aria-pressed": isSelected,
                                        className: `btn-animate rounded-full border px-3 py-1 text-[0.65rem] uppercase tracking-[0.2em] ${isSelected ? "border-ash bg-ink/70 text-ash" : "border-line text-slate hover:text-ash"}`,
                                        onClick: ()=>setFormState((current)=>({
                                                    ...current,
                                                    domains: toggleValue(current.domains, option.id)
                                                })),
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])(option.labelKey, locale)
                                    }, option.id, false, {
                                        fileName: "[project]/components/partners/PartnersForm.tsx",
                                        lineNumber: 499,
                                        columnNumber: 17
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/components/partners/PartnersForm.tsx",
                                lineNumber: 495,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/partners/PartnersForm.tsx",
                        lineNumber: 486,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm text-slate",
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("partners.form.engagementModes.label", locale)
                                    }, void 0, false, {
                                        fileName: "[project]/components/partners/PartnersForm.tsx",
                                        lineNumber: 524,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs text-muted",
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("partners.form.engagementModes.helper", locale)
                                    }, void 0, false, {
                                        fileName: "[project]/components/partners/PartnersForm.tsx",
                                        lineNumber: 527,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/partners/PartnersForm.tsx",
                                lineNumber: 523,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap gap-2",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$talent$2f$taxonomy$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["engagementModeOptions"].map((option)=>{
                                    const isSelected = formState.engagementModes.includes(option.id);
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        "aria-pressed": isSelected,
                                        className: `btn-animate rounded-full border px-3 py-1 text-[0.65rem] uppercase tracking-[0.2em] ${isSelected ? "border-ash bg-ink/70 text-ash" : "border-line text-slate hover:text-ash"}`,
                                        onClick: ()=>setFormState((current)=>({
                                                    ...current,
                                                    engagementModes: toggleValue(current.engagementModes, option.id)
                                                })),
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])(option.labelKey, locale)
                                    }, option.id, false, {
                                        fileName: "[project]/components/partners/PartnersForm.tsx",
                                        lineNumber: 535,
                                        columnNumber: 17
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/components/partners/PartnersForm.tsx",
                                lineNumber: 531,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/partners/PartnersForm.tsx",
                        lineNumber: 522,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm text-slate",
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("partners.form.languages.label", locale)
                                    }, void 0, false, {
                                        fileName: "[project]/components/partners/PartnersForm.tsx",
                                        lineNumber: 560,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs text-muted",
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("partners.form.languages.helper", locale)
                                    }, void 0, false, {
                                        fileName: "[project]/components/partners/PartnersForm.tsx",
                                        lineNumber: 563,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/partners/PartnersForm.tsx",
                                lineNumber: 559,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap gap-2",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$talent$2f$taxonomy$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["languageOptions"].map((option)=>{
                                    const isSelected = formState.languages.includes(option.id);
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        "aria-pressed": isSelected,
                                        className: `btn-animate rounded-full border px-3 py-1 text-[0.65rem] uppercase tracking-[0.2em] ${isSelected ? "border-ash bg-ink/70 text-ash" : "border-line text-slate hover:text-ash"}`,
                                        onClick: ()=>setFormState((current)=>({
                                                    ...current,
                                                    languages: toggleValue(current.languages, option.id)
                                                })),
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])(option.labelKey, locale)
                                    }, option.id, false, {
                                        fileName: "[project]/components/partners/PartnersForm.tsx",
                                        lineNumber: 571,
                                        columnNumber: 17
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/components/partners/PartnersForm.tsx",
                                lineNumber: 567,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/partners/PartnersForm.tsx",
                        lineNumber: 558,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "hidden",
                        "aria-hidden": "true",
                        children: [
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("partners.form.honeypot.label", locale),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                name: "companyWebsite",
                                tabIndex: -1,
                                autoComplete: "off",
                                value: formState.honeypot,
                                onChange: (event)=>setFormState((current)=>({
                                            ...current,
                                            honeypot: event.target.value
                                        }))
                            }, void 0, false, {
                                fileName: "[project]/components/partners/PartnersForm.tsx",
                                lineNumber: 596,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/partners/PartnersForm.tsx",
                        lineNumber: 594,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "flex items-start gap-3 text-sm text-slate",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "checkbox",
                                name: "consent",
                                required: true,
                                checked: formState.consent,
                                onChange: (event)=>setFormState((current)=>({
                                            ...current,
                                            consent: event.target.checked
                                        })),
                                className: "mt-1 h-4 w-4 accent-ash"
                            }, void 0, false, {
                                fileName: "[project]/components/partners/PartnersForm.tsx",
                                lineNumber: 608,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("partners.form.consent.label", locale)
                            }, void 0, false, {
                                fileName: "[project]/components/partners/PartnersForm.tsx",
                                lineNumber: 618,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/partners/PartnersForm.tsx",
                        lineNumber: 607,
                        columnNumber: 9
                    }, this),
                    errorKey && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "aria-live": "polite",
                        className: "text-xs text-[#E5A4A4]",
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])(errorKey, locale)
                    }, void 0, false, {
                        fileName: "[project]/components/partners/PartnersForm.tsx",
                        lineNumber: 622,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-muted",
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("partners.join.subtitle", locale)
                            }, void 0, false, {
                                fileName: "[project]/components/partners/PartnersForm.tsx",
                                lineNumber: 628,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "submit",
                                disabled: status === "submitting",
                                className: "btn-animate btn-primary hidden rounded-full px-6 py-2 text-xs uppercase tracking-[0.2em] sm:inline-flex",
                                children: status === "submitting" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("partners.form.submitting", locale) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("partners.form.submit", locale)
                            }, void 0, false, {
                                fileName: "[project]/components/partners/PartnersForm.tsx",
                                lineNumber: 631,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/partners/PartnersForm.tsx",
                        lineNumber: 627,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/partners/PartnersForm.tsx",
                lineNumber: 287,
                columnNumber: 7
            }, this),
            status !== "success" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed bottom-4 left-0 right-0 z-20 flex justify-center px-6 sm:hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "submit",
                    form: formId,
                    disabled: status === "submitting",
                    className: "btn-animate btn-primary w-full max-w-sm rounded-full px-6 py-3 text-xs uppercase tracking-[0.2em]",
                    children: status === "submitting" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("partners.form.submitting", locale) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("partners.form.submitSticky", locale)
                }, void 0, false, {
                    fileName: "[project]/components/partners/PartnersForm.tsx",
                    lineNumber: 644,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/partners/PartnersForm.tsx",
                lineNumber: 643,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/partners/PartnersForm.tsx",
        lineNumber: 286,
        columnNumber: 5
    }, this);
}
_s(PartnersForm, "xThlYN3+UXvVYf+qXJOMfoocQyg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"]
    ];
});
_c = PartnersForm;
var _c;
__turbopack_context__.k.register(_c, "PartnersForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_c12e7cec._.js.map