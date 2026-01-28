module.exports = [
"[project]/components/MotionIn.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MotionIn",
    ()=>MotionIn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs [app-ssr] (ecmascript)");
"use client";
;
;
function MotionIn({ children, className, delay = 0, hover = false, hoverScale = 1.01 }) {
    const prefersReducedMotion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    if (prefersReducedMotion) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: className,
            children: children
        }, void 0, false, {
            fileName: "[project]/components/MotionIn.tsx",
            lineNumber: 24,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
}),
"[project]/content/services.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "filterOptions",
    ()=>filterOptions,
    "services",
    ()=>services
]);
const filterOptions = {
    "domains": [
        "AI",
        "Industrial",
        "Security",
        "IT-OT"
    ],
    "engagementTypes": [
        "Audit",
        "Architecture",
        "Build",
        "Operate"
    ],
    "industries": [
        "Manufacturing",
        "Logistics",
        "Public",
        "Defense"
    ],
    "urgency": [
        "2-4 weeks",
        "6-12 weeks",
        "3-6 months"
    ]
};
const services = [
    {
        "id": "svc-001",
        "slug": "system-architecture-assessment",
        "title": "System & Architecture Assessment",
        "oneLine": "Rapid diagnosis of mission-critical systems to surface risk, dependencies, and delivery blockers.",
        "problemStatement": "Organizations lose control when architecture is undocumented and decision paths are unclear. This engagement establishes a defensible baseline for action, not a slide deck.",
        "bestFor": [
            "Legacy estates with unclear ownership and interfaces",
            "Leadership teams needing a decision-ready baseline",
            "Programs with multiple vendors and overlapping scopes"
        ],
        "notFor": [
            "Greenfield builds with no existing systems",
            "Teams seeking staff augmentation",
            "Organizations without authority to act on findings"
        ],
        "outcomes": [
            "Clear system boundary and dependency map",
            "Prioritized risk register with control gaps",
            "Actionable scope narrative for procurement"
        ],
        "deliverables": [
            "System boundary map and interface inventory",
            "Dependency and failure-mode register",
            "Architecture baseline brief (decision-ready)",
            "Risk register with severity and mitigation paths",
            "Stakeholder alignment memo with next-step options",
            "Scope assumptions and constraints log"
        ],
        "processSteps": [
            "Kickoff and scope calibration",
            "Rapid discovery interviews and artifact review",
            "Architecture mapping and dependency analysis",
            "Risk synthesis and control gap review",
            "Executive readout with options and recommendations"
        ],
        "inputsRequired": [
            "Current system diagrams or equivalent artifacts",
            "Access to technical and operational stakeholders",
            "Named decision owner for scope approvals",
            "Known incidents or delivery failures"
        ],
        "deliveryModes": [
            "remote",
            "hybrid",
            "on-site"
        ],
        "defaultMode": "remote",
        "duration": {
            "minWeeks": 2,
            "maxWeeks": 3
        },
        "pricing": {
            "project": {
                "minEUR": 28000,
                "maxEUR": 48000
            },
            "hourlyEquivalent": {
                "minEUR": 325,
                "maxEUR": 435
            },
            "notes": "Pricing depends on system count, data sensitivity, and stakeholder availability. Hourly equivalent is provided for procurement comparison; delivery is priced as a scoped engagement."
        },
        "includes": [
            "Senior lead with specialist support",
            "Decision-ready documentation pack",
            "Stakeholder readout and follow-up Q&A"
        ],
        "onsitePolicy": {
            "text": "On-site available if required; travel/on-site days are billed separately.",
            "dayRateEUR": 3500
        },
        "purchaseType": "scope",
        "ctaLabel": "Request scope",
        "securityNote": "Confidentiality-first intake with NDA option before deep disclosure.",
        "faq": [
            {
                "question": "Is this a consulting report?",
                "answer": "No. The output is a scoped system baseline with concrete artifacts used for decision and procurement."
            },
            {
                "question": "How fast can you start?",
                "answer": "Typically within 2-4 weeks depending on stakeholder availability and access approvals."
            },
            {
                "question": "Do you require system access?",
                "answer": "Only what is necessary for validation. We can work from existing artifacts if access is constrained."
            }
        ],
        "domains": [
            "Security",
            "IT-OT",
            "Industrial"
        ],
        "industries": [
            "Manufacturing",
            "Logistics",
            "Public",
            "Defense"
        ],
        "engagementTypes": [
            "Audit",
            "Architecture"
        ],
        "urgency": [
            "2-4 weeks"
        ],
        "tags": [
            "baseline",
            "risk",
            "architecture",
            "governance"
        ]
    },
    {
        "id": "svc-002",
        "slug": "control-baseline-risk-posture",
        "title": "Control Baseline & Risk Posture Review",
        "oneLine": "Control baseline and risk posture review for high-consequence systems.",
        "problemStatement": "Security decisions fail when control ownership is unclear. This engagement establishes a control baseline and risk posture suitable for executive and procurement review.",
        "bestFor": [
            "Organizations needing a formal control baseline",
            "Security leaders preparing for oversight reviews",
            "Programs with unclear control ownership"
        ],
        "notFor": [
            "Teams seeking operational tradecraft",
            "One-off penetration testing",
            "Programs without decision authority"
        ],
        "outcomes": [
            "Documented control baseline",
            "Prioritized risk posture summary",
            "Decision-ready remediation options"
        ],
        "deliverables": [
            "Control baseline register",
            "Risk posture summary with severity tiers",
            "Ownership and escalation map",
            "Remediation options with sequencing",
            "Executive risk brief"
        ],
        "processSteps": [
            "Scope boundary and access alignment",
            "Control inventory and evidence review",
            "Risk posture synthesis",
            "Remediation optioning",
            "Executive readout and next steps"
        ],
        "inputsRequired": [
            "Existing control documentation",
            "Access approval path for evidence review",
            "Named security decision owner",
            "Incident history or known gaps"
        ],
        "deliveryModes": [
            "remote",
            "hybrid"
        ],
        "defaultMode": "remote",
        "duration": {
            "minWeeks": 2,
            "maxWeeks": 4
        },
        "pricing": {
            "project": {
                "minEUR": 30000,
                "maxEUR": 55000
            },
            "hourlyEquivalent": {
                "minEUR": 300,
                "maxEUR": 405
            },
            "notes": "Pricing reflects evidence quality, control scope, and stakeholder availability. Hourly equivalent is provided for procurement comparison; delivery is priced as a scoped engagement."
        },
        "includes": [
            "Senior security lead",
            "Risk posture documentation pack",
            "Executive briefing session"
        ],
        "onsitePolicy": {
            "text": "On-site available if required; travel/on-site days are billed separately.",
            "dayRateEUR": 3250
        },
        "purchaseType": "scope",
        "ctaLabel": "Request scope",
        "securityNote": "We focus on governance and control clarity without operational exploitation guidance.",
        "faq": [
            {
                "question": "Do you claim compliance certifications?",
                "answer": "No. We align to best practices and provide a risk-managed posture summary."
            },
            {
                "question": "Will this disrupt operations?",
                "answer": "No. Evidence collection is structured to avoid operational disruption."
            },
            {
                "question": "Can this support board reporting?",
                "answer": "Yes. The outputs are designed for executive and governance review."
            }
        ],
        "domains": [
            "Security",
            "IT-OT"
        ],
        "industries": [
            "Public",
            "Defense",
            "Manufacturing"
        ],
        "engagementTypes": [
            "Audit"
        ],
        "urgency": [
            "2-4 weeks"
        ],
        "tags": [
            "controls",
            "risk-posture",
            "security",
            "governance"
        ]
    },
    {
        "id": "svc-003",
        "slug": "data-lineage-assessment",
        "title": "Data Landscape & Lineage Assessment",
        "oneLine": "Clarify data ownership, lineage, and quality before modernization or AI initiatives.",
        "problemStatement": "Data programs fail when lineage and ownership are unknown. This engagement produces auditable data maps and governance inputs for decision-ready planning.",
        "bestFor": [
            "Teams preparing data modernization",
            "Leaders needing audit-ready data lineage",
            "Programs with unclear data ownership"
        ],
        "notFor": [
            "Ad-hoc analytics requests",
            "Teams without data governance authority",
            "Programs seeking unmanaged AI deployment"
        ],
        "outcomes": [
            "Clear data ownership and lineage map",
            "Decision-ready data quality summary",
            "Governance actions for risk reduction"
        ],
        "deliverables": [
            "Data source inventory and ownership map",
            "Lineage and dependency graph",
            "Data quality and risk summary",
            "Governance and access control checklist",
            "Scope narrative for modernization"
        ],
        "processSteps": [
            "Scope alignment and data boundary definition",
            "Artifact review and data source inventory",
            "Lineage mapping and dependency analysis",
            "Quality and risk synthesis",
            "Executive readout with next steps"
        ],
        "inputsRequired": [
            "Access to data catalogs or inventories",
            "Data owner participation",
            "Access approval path for sensitive datasets",
            "Known data quality concerns"
        ],
        "deliveryModes": [
            "remote",
            "hybrid"
        ],
        "defaultMode": "remote",
        "duration": {
            "minWeeks": 2,
            "maxWeeks": 4
        },
        "pricing": {
            "project": {
                "minEUR": 32000,
                "maxEUR": 58000
            },
            "hourlyEquivalent": {
                "minEUR": 320,
                "maxEUR": 430
            },
            "notes": "Pricing depends on data source count, sensitivity, and access constraints. Hourly equivalent is provided for procurement comparison; delivery is priced as a scoped engagement."
        },
        "includes": [
            "Data governance lead",
            "Lineage and quality documentation pack",
            "Executive decision readout"
        ],
        "onsitePolicy": {
            "text": "On-site available if required; travel/on-site days are billed separately.",
            "dayRateEUR": 3450
        },
        "purchaseType": "scope",
        "ctaLabel": "Request scope",
        "securityNote": "We minimize exposure to sensitive data and document access controls.",
        "faq": [
            {
                "question": "Is this an AI project?",
                "answer": "No. It is a data readiness assessment that can inform future AI work."
            },
            {
                "question": "Will you move or copy data?",
                "answer": "No. We focus on metadata, lineage, and governance evidence."
            },
            {
                "question": "Can this support audit needs?",
                "answer": "Yes. Deliverables are structured for audit and compliance review."
            }
        ],
        "domains": [
            "AI",
            "Security",
            "IT-OT"
        ],
        "industries": [
            "Public",
            "Defense",
            "Logistics",
            "Manufacturing"
        ],
        "engagementTypes": [
            "Audit",
            "Architecture"
        ],
        "urgency": [
            "2-4 weeks"
        ],
        "tags": [
            "data",
            "lineage",
            "governance",
            "audit"
        ]
    },
    {
        "id": "svc-004",
        "slug": "operational-readiness-baseline",
        "title": "Operational Readiness Baseline",
        "oneLine": "Baseline operational readiness before modernization, migration, or takeover.",
        "problemStatement": "Operational readiness is often assumed, not proven. This engagement documents readiness gaps and control paths before any change is authorized.",
        "bestFor": [
            "Programs preparing for modernization",
            "Operations teams needing readiness clarity",
            "Leaders seeking risk-managed approvals"
        ],
        "notFor": [
            "Teams without operational ownership",
            "Projects seeking only training",
            "Situations requiring immediate incident response"
        ],
        "outcomes": [
            "Readiness baseline with gating criteria",
            "Operational gap register",
            "Clear approval path for next steps"
        ],
        "deliverables": [
            "Operational readiness checklist",
            "Gap analysis and remediation options",
            "Escalation and ownership map",
            "Go/no-go criteria",
            "Executive readiness brief"
        ],
        "processSteps": [
            "Readiness scope and control alignment",
            "Operational artifact review",
            "Gap identification and risk scoring",
            "Remediation optioning",
            "Decision readout"
        ],
        "inputsRequired": [
            "Operational runbooks and SOPs",
            "Access to on-call or operations leads",
            "Named decision owner",
            "Known operational incidents"
        ],
        "deliveryModes": [
            "remote",
            "hybrid",
            "on-site"
        ],
        "defaultMode": "hybrid",
        "duration": {
            "minWeeks": 2,
            "maxWeeks": 4
        },
        "pricing": {
            "project": {
                "minEUR": 30000,
                "maxEUR": 52000
            },
            "hourlyEquivalent": {
                "minEUR": 290,
                "maxEUR": 395
            },
            "notes": "Pricing depends on system criticality and operational complexity. Hourly equivalent is provided for procurement comparison; delivery is priced as a scoped engagement."
        },
        "includes": [
            "Operational readiness lead",
            "Readiness documentation pack",
            "Executive readout"
        ],
        "onsitePolicy": {
            "text": "On-site available if required; travel/on-site days are billed separately.",
            "dayRateEUR": 3150
        },
        "purchaseType": "scope",
        "ctaLabel": "Request scope",
        "securityNote": "Readiness reviews avoid sensitive tactics and focus on governance and continuity.",
        "faq": [
            {
                "question": "Is this a compliance audit?",
                "answer": "No. It is an operational readiness baseline with governance outputs."
            },
            {
                "question": "Will you test production systems?",
                "answer": "No. We review evidence and operational artifacts without intrusive testing."
            },
            {
                "question": "Can this be done remotely?",
                "answer": "Yes. On-site visits are optional based on constraints."
            }
        ],
        "domains": [
            "Industrial",
            "IT-OT"
        ],
        "industries": [
            "Manufacturing",
            "Logistics",
            "Public"
        ],
        "engagementTypes": [
            "Audit",
            "Operate"
        ],
        "urgency": [
            "2-4 weeks"
        ],
        "tags": [
            "readiness",
            "operations",
            "baseline",
            "governance"
        ]
    },
    {
        "id": "svc-005",
        "slug": "vendor-integration-readiness",
        "title": "Vendor Integration Readiness Assessment",
        "oneLine": "Assess integration readiness and risk before onboarding high-impact vendors.",
        "problemStatement": "Procurement fails when integration risk is discovered late. This engagement delivers a decision-ready integration readiness review with clear constraints.",
        "bestFor": [
            "Organizations onboarding critical vendors",
            "Programs with complex integration dependencies",
            "Procurement teams needing technical validation"
        ],
        "notFor": [
            "Price-only vendor comparisons",
            "Teams without integration ownership",
            "Requests for operational tactics"
        ],
        "outcomes": [
            "Integration readiness summary",
            "Risk and dependency register",
            "Procurement-aligned acceptance criteria"
        ],
        "deliverables": [
            "Integration readiness brief",
            "Dependency and interface map",
            "Risk register with mitigations",
            "Acceptance criteria and test outline",
            "Executive procurement memo"
        ],
        "processSteps": [
            "Procurement context and scope",
            "Vendor artifact review",
            "Integration mapping and risk review",
            "Acceptance criteria definition",
            "Decision readout"
        ],
        "inputsRequired": [
            "Vendor technical documentation",
            "Integration constraints and interface specs",
            "Named decision owner",
            "Procurement timelines"
        ],
        "deliveryModes": [
            "remote",
            "hybrid"
        ],
        "defaultMode": "remote",
        "duration": {
            "minWeeks": 2,
            "maxWeeks": 4
        },
        "pricing": {
            "project": {
                "minEUR": 35000,
                "maxEUR": 65000
            },
            "hourlyEquivalent": {
                "minEUR": 355,
                "maxEUR": 480
            },
            "notes": "Pricing depends on integration depth, vendor documentation quality, and stakeholder availability. Hourly equivalent is provided for procurement comparison; delivery is priced as a scoped engagement."
        },
        "includes": [
            "Independent technical lead",
            "Procurement-ready documentation",
            "Alignment workshop"
        ],
        "onsitePolicy": {
            "text": "On-site available if required; travel/on-site days are billed separately.",
            "dayRateEUR": 3850
        },
        "purchaseType": "scope",
        "ctaLabel": "Request scope",
        "securityNote": "We review vendor materials without exposing sensitive operational details.",
        "faq": [
            {
                "question": "Do you select the vendor?",
                "answer": "No. We provide an independent technical readiness review."
            },
            {
                "question": "Can you align to public procurement rules?",
                "answer": "Yes. Deliverables are structured for public-sector procurement."
            },
            {
                "question": "Is source code access required?",
                "answer": "Not always. We work with the available documentation and evidence."
            }
        ],
        "domains": [
            "Security",
            "Industrial"
        ],
        "industries": [
            "Public",
            "Defense",
            "Manufacturing",
            "Logistics"
        ],
        "engagementTypes": [
            "Audit",
            "Architecture"
        ],
        "urgency": [
            "2-4 weeks"
        ],
        "tags": [
            "vendor",
            "integration",
            "procurement",
            "risk"
        ]
    },
    {
        "id": "svc-006",
        "slug": "target-architecture-roadmap",
        "title": "Target Architecture & Transformation Roadmap",
        "oneLine": "Procurement-ready target architecture and phased delivery roadmap for complex programs.",
        "problemStatement": "Transformation fails when the target state is ambiguous and governance is undefined. We deliver a structured, decision-ready plan that can be contracted and executed.",
        "bestFor": [
            "Programs requiring a procurement-ready scope narrative",
            "Modernization efforts with multiple dependencies",
            "Leaders needing phased investment options"
        ],
        "notFor": [
            "Teams seeking generic strategy decks",
            "Programs without operational owners",
            "Initiatives lacking delivery authority"
        ],
        "outcomes": [
            "Target architecture that encodes security and control",
            "Phased roadmap with scope and sequencing",
            "Governance model aligned to mission risk"
        ],
        "deliverables": [
            "Target architecture blueprint and integration map",
            "Phased transformation roadmap with milestones",
            "Dependency and migration sequencing model",
            "Governance and decision-rights model",
            "Procurement-ready scope narrative",
            "Risk register with mitigation timeline",
            "Acceptance criteria and success metrics"
        ],
        "processSteps": [
            "Baseline review and constraints alignment",
            "Target-state definition and model drafting",
            "Roadmap sequencing and dependency validation",
            "Governance and procurement alignment",
            "Executive review and scope package delivery"
        ],
        "inputsRequired": [
            "Existing architecture and program documentation",
            "Current-state constraints and risk posture",
            "Stakeholder access for governance alignment",
            "Procurement or funding timeline"
        ],
        "deliveryModes": [
            "remote",
            "hybrid"
        ],
        "defaultMode": "hybrid",
        "duration": {
            "minWeeks": 6,
            "maxWeeks": 12
        },
        "pricing": {
            "project": {
                "minEUR": 65000,
                "maxEUR": 120000
            },
            "hourlyEquivalent": {
                "minEUR": 220,
                "maxEUR": 295
            },
            "notes": "Cost drivers include integration complexity, stakeholder alignment effort, and scope breadth. Hourly equivalent is provided for procurement comparison; delivery is priced as a scoped engagement."
        },
        "includes": [
            "Senior architecture lead + domain specialists",
            "Procurement-ready documentation pack",
            "Decision support workshops"
        ],
        "onsitePolicy": {
            "text": "On-site available if required; travel/on-site days are billed separately.",
            "dayRateEUR": 2350
        },
        "purchaseType": "scope",
        "ctaLabel": "Request scope",
        "securityNote": "Aligned to risk-managed delivery with controlled access and audit-ready artifacts.",
        "faq": [
            {
                "question": "Will this include a budget estimate?",
                "answer": "Yes. We provide a scoped range tied to the roadmap phases and assumptions."
            },
            {
                "question": "Can this be used for RFPs?",
                "answer": "Yes. Deliverables are structured to support procurement and vendor evaluation."
            },
            {
                "question": "Do you execute the roadmap?",
                "answer": "We can. This engagement defines the path and can transition into delivery if desired."
            }
        ],
        "domains": [
            "Industrial",
            "Security",
            "IT-OT"
        ],
        "industries": [
            "Manufacturing",
            "Logistics",
            "Public",
            "Defense"
        ],
        "engagementTypes": [
            "Architecture"
        ],
        "urgency": [
            "6-12 weeks"
        ],
        "tags": [
            "roadmap",
            "target-architecture",
            "procurement",
            "governance"
        ]
    },
    {
        "id": "svc-007",
        "slug": "secure-data-platform-roadmap",
        "title": "Secure Data Platform Architecture Roadmap",
        "oneLine": "Target architecture and roadmap for a secure, auditable data platform.",
        "problemStatement": "Data platforms fail when security and governance are bolted on after the fact. This engagement defines a secure target architecture and phased delivery plan.",
        "bestFor": [
            "Programs building a shared data platform",
            "Security teams requiring audit-ready controls",
            "Leaders planning multi-year data investment"
        ],
        "notFor": [
            "Short-term analytics dashboards",
            "Programs without data ownership",
            "Unmanaged AI deployments"
        ],
        "outcomes": [
            "Secure target-state data architecture",
            "Phased roadmap with governance gates",
            "Decision-ready scope package"
        ],
        "deliverables": [
            "Target data platform architecture",
            "Security and access control model",
            "Phased implementation roadmap",
            "Data governance framework",
            "Audit trail and monitoring plan",
            "Procurement-ready scope narrative"
        ],
        "processSteps": [
            "Scope and data boundary definition",
            "Architecture modeling and control mapping",
            "Roadmap sequencing and dependency review",
            "Governance and audit alignment",
            "Executive decision readout"
        ],
        "inputsRequired": [
            "Data inventory and current-state constraints",
            "Security and compliance requirements",
            "Named decision owner",
            "Access approval path for sensitive datasets"
        ],
        "deliveryModes": [
            "remote",
            "hybrid"
        ],
        "defaultMode": "hybrid",
        "duration": {
            "minWeeks": 6,
            "maxWeeks": 12
        },
        "pricing": {
            "project": {
                "minEUR": 75000,
                "maxEUR": 140000
            },
            "hourlyEquivalent": {
                "minEUR": 255,
                "maxEUR": 345
            },
            "notes": "Pricing depends on data sensitivity, integration scope, and governance complexity. Hourly equivalent is provided for procurement comparison; delivery is priced as a scoped engagement."
        },
        "includes": [
            "Senior data architecture lead",
            "Governance and security documentation pack",
            "Executive readout"
        ],
        "onsitePolicy": {
            "text": "On-site available if required; travel/on-site days are billed separately.",
            "dayRateEUR": 2750
        },
        "purchaseType": "scope",
        "ctaLabel": "Request scope",
        "securityNote": "Focuses on controlled access, auditability, and risk-managed data handling.",
        "faq": [
            {
                "question": "Is this a build engagement?",
                "answer": "No. It is a roadmap and architecture package to support procurement and delivery."
            },
            {
                "question": "Does it include data migration?",
                "answer": "Migration strategy is outlined, but execution is scoped separately."
            },
            {
                "question": "Can it support AI workloads?",
                "answer": "Yes. The architecture includes governance for analytics and AI use cases."
            }
        ],
        "domains": [
            "Security",
            "AI",
            "IT-OT"
        ],
        "industries": [
            "Public",
            "Defense",
            "Manufacturing",
            "Logistics"
        ],
        "engagementTypes": [
            "Architecture",
            "Audit"
        ],
        "urgency": [
            "6-12 weeks"
        ],
        "tags": [
            "data-platform",
            "roadmap",
            "security",
            "governance"
        ]
    },
    {
        "id": "svc-008",
        "slug": "it-ot-convergence-roadmap",
        "title": "IT/OT Convergence Roadmap",
        "oneLine": "Phased roadmap for safe IT/OT integration with governance and control.",
        "problemStatement": "IT/OT integration breaks down without clear control boundaries. This engagement delivers a roadmap with security, safety, and governance built in.",
        "bestFor": [
            "Industrial operators with converging systems",
            "Programs requiring safety-aligned integration",
            "Leaders needing governance clarity"
        ],
        "notFor": [
            "Single-site pilots without governance",
            "Teams seeking tactical OT guidance",
            "Programs without operational ownership"
        ],
        "outcomes": [
            "Controlled IT/OT target architecture",
            "Phased integration roadmap",
            "Governance model aligned to safety"
        ],
        "deliverables": [
            "IT/OT integration architecture",
            "Control boundary and segmentation map",
            "Phased integration roadmap",
            "Risk register with safety constraints",
            "Governance and escalation model",
            "Procurement-ready scope brief"
        ],
        "processSteps": [
            "Scope and safety constraints alignment",
            "Integration boundary mapping",
            "Target architecture definition",
            "Roadmap sequencing and risk review",
            "Executive readout"
        ],
        "inputsRequired": [
            "Current OT system inventory",
            "Safety and operational constraints",
            "Named decision owner",
            "Access approval path for OT stakeholders"
        ],
        "deliveryModes": [
            "remote",
            "hybrid",
            "on-site"
        ],
        "defaultMode": "hybrid",
        "duration": {
            "minWeeks": 6,
            "maxWeeks": 12
        },
        "pricing": {
            "project": {
                "minEUR": 70000,
                "maxEUR": 130000
            },
            "hourlyEquivalent": {
                "minEUR": 235,
                "maxEUR": 320
            },
            "notes": "Pricing depends on site count, integration complexity, and safety constraints. Hourly equivalent is provided for procurement comparison; delivery is priced as a scoped engagement."
        },
        "includes": [
            "IT/OT architecture lead",
            "Safety-aligned governance pack",
            "Executive readout"
        ],
        "onsitePolicy": {
            "text": "On-site available if required; travel/on-site days are billed separately.",
            "dayRateEUR": 2550
        },
        "purchaseType": "scope",
        "ctaLabel": "Request scope",
        "securityNote": "We focus on safe integration and governance without operational tradecraft.",
        "faq": [
            {
                "question": "Does this include implementation?",
                "answer": "No. It delivers a roadmap and scope package for implementation."
            },
            {
                "question": "Can you include safety standards?",
                "answer": "We align with stated safety constraints and document them in the roadmap."
            },
            {
                "question": "Do you require on-site visits?",
                "answer": "On-site is optional and scoped based on site complexity."
            }
        ],
        "domains": [
            "Industrial",
            "IT-OT",
            "Security"
        ],
        "industries": [
            "Manufacturing",
            "Logistics",
            "Public",
            "Defense"
        ],
        "engagementTypes": [
            "Architecture"
        ],
        "urgency": [
            "6-12 weeks"
        ],
        "tags": [
            "it-ot",
            "integration",
            "roadmap",
            "safety"
        ]
    },
    {
        "id": "svc-009",
        "slug": "mission-systems-modernization-blueprint",
        "title": "Mission Systems Modernization Blueprint",
        "oneLine": "Decision-ready modernization blueprint for high-consequence programs.",
        "problemStatement": "Modernization fails when governance and delivery sequencing are unclear. This blueprint defines a controlled path that can be contracted and executed.",
        "bestFor": [
            "Public-sector modernization initiatives",
            "Defense programs with high accountability",
            "Leaders needing a phased investment plan"
        ],
        "notFor": [
            "Short-term tactical fixes",
            "Programs without executive ownership",
            "Teams seeking vendor-specific advocacy"
        ],
        "outcomes": [
            "Modernization target state and sequencing",
            "Procurement-ready scope package",
            "Risk-managed governance framework"
        ],
        "deliverables": [
            "Modernization blueprint and target architecture",
            "Phased delivery plan with milestones",
            "Governance and decision-rights model",
            "Risk register and mitigation sequencing",
            "Acceptance criteria and success metrics"
        ],
        "processSteps": [
            "Baseline review and constraints alignment",
            "Target state definition",
            "Roadmap and sequencing design",
            "Governance and procurement alignment",
            "Executive decision readout"
        ],
        "inputsRequired": [
            "Current architecture and program artifacts",
            "Stakeholder access for governance alignment",
            "Named decision owner",
            "Procurement timelines"
        ],
        "deliveryModes": [
            "remote",
            "hybrid"
        ],
        "defaultMode": "hybrid",
        "duration": {
            "minWeeks": 8,
            "maxWeeks": 12
        },
        "pricing": {
            "project": {
                "minEUR": 80000,
                "maxEUR": 150000
            },
            "hourlyEquivalent": {
                "minEUR": 245,
                "maxEUR": 330
            },
            "notes": "Pricing depends on scope breadth, integration complexity, and governance depth. Hourly equivalent is provided for procurement comparison; delivery is priced as a scoped engagement."
        },
        "includes": [
            "Senior architecture lead",
            "Decision-ready blueprint pack",
            "Executive readout"
        ],
        "onsitePolicy": {
            "text": "On-site available if required; travel/on-site days are billed separately.",
            "dayRateEUR": 2650
        },
        "purchaseType": "scope",
        "ctaLabel": "Request scope",
        "securityNote": "Outputs are structured for accountability and audit review.",
        "faq": [
            {
                "question": "Does this replace existing plans?",
                "answer": "It can consolidate and normalize existing plans into a decision-ready blueprint."
            },
            {
                "question": "Is this limited to defense programs?",
                "answer": "No. It applies to any high-consequence modernization effort."
            },
            {
                "question": "Will you define procurement criteria?",
                "answer": "Yes. Acceptance criteria and procurement scope are part of the output."
            }
        ],
        "domains": [
            "Security",
            "IT-OT"
        ],
        "industries": [
            "Public",
            "Defense"
        ],
        "engagementTypes": [
            "Architecture",
            "Audit"
        ],
        "urgency": [
            "6-12 weeks"
        ],
        "tags": [
            "modernization",
            "blueprint",
            "procurement",
            "governance"
        ]
    },
    {
        "id": "svc-010",
        "slug": "resilient-logistics-architecture",
        "title": "Resilient Logistics Architecture Roadmap",
        "oneLine": "Architecture roadmap for resilient, auditable logistics operations.",
        "problemStatement": "Logistics systems fail when resilience and governance are afterthoughts. This engagement defines the architecture and roadmap for controlled delivery.",
        "bestFor": [
            "Logistics programs with reliability mandates",
            "Leaders seeking procurement-ready scope",
            "Teams integrating multiple logistics systems"
        ],
        "notFor": [
            "Single-tool deployments",
            "Programs without delivery authority",
            "Operational tradecraft requests"
        ],
        "outcomes": [
            "Resilient target architecture",
            "Phased roadmap with risk gating",
            "Decision-ready scope package"
        ],
        "deliverables": [
            "Logistics system architecture blueprint",
            "Resilience and continuity plan",
            "Phased roadmap with milestones",
            "Integration and dependency map",
            "Governance and auditability plan"
        ],
        "processSteps": [
            "Scope alignment and system boundary definition",
            "Architecture modeling and resilience analysis",
            "Roadmap sequencing and dependency review",
            "Governance alignment",
            "Executive readout"
        ],
        "inputsRequired": [
            "System inventory and operational constraints",
            "Named decision owner",
            "Integration and vendor dependencies",
            "Access approval path for critical systems"
        ],
        "deliveryModes": [
            "remote",
            "hybrid"
        ],
        "defaultMode": "hybrid",
        "duration": {
            "minWeeks": 6,
            "maxWeeks": 12
        },
        "pricing": {
            "project": {
                "minEUR": 70000,
                "maxEUR": 130000
            },
            "hourlyEquivalent": {
                "minEUR": 235,
                "maxEUR": 320
            },
            "notes": "Pricing depends on integration breadth and resilience requirements. Hourly equivalent is provided for procurement comparison; delivery is priced as a scoped engagement."
        },
        "includes": [
            "Architecture lead",
            "Resilience and governance pack",
            "Executive readout"
        ],
        "onsitePolicy": {
            "text": "On-site available if required; travel/on-site days are billed separately.",
            "dayRateEUR": 2550
        },
        "purchaseType": "scope",
        "ctaLabel": "Request scope",
        "securityNote": "We document access controls and audit paths for logistics operations.",
        "faq": [
            {
                "question": "Is this limited to logistics?",
                "answer": "No. It applies to any complex supply and fulfillment environment."
            },
            {
                "question": "Can you align to public-sector procurement?",
                "answer": "Yes. Deliverables are structured for procurement review."
            },
            {
                "question": "Will you build the system?",
                "answer": "This engagement delivers the roadmap; build can be scoped separately."
            }
        ],
        "domains": [
            "Industrial",
            "Security",
            "IT-OT"
        ],
        "industries": [
            "Logistics",
            "Public",
            "Defense",
            "Manufacturing"
        ],
        "engagementTypes": [
            "Architecture"
        ],
        "urgency": [
            "6-12 weeks"
        ],
        "tags": [
            "logistics",
            "resilience",
            "roadmap",
            "architecture"
        ]
    },
    {
        "id": "svc-011",
        "slug": "project-takeover-stabilization",
        "title": "Project Takeover & Stabilization",
        "oneLine": "Rapid recovery of at-risk programs with clear control boundaries and delivery accountability.",
        "problemStatement": "When delivery stalls, leadership needs a controlled takeover that restores stability and governance. This engagement focuses on system control, not coaching.",
        "bestFor": [
            "Programs at risk of schedule or scope failure",
            "Teams needing immediate delivery control",
            "Leadership requiring neutral stabilization"
        ],
        "notFor": [
            "Teams looking for staff augmentation",
            "Projects without decision authority",
            "Long-term operations without a transition plan"
        ],
        "outcomes": [
            "Stabilized delivery plan with clear ownership",
            "Reduced operational risk and incident exposure",
            "Actionable backlog aligned to constraints"
        ],
        "deliverables": [
            "Stabilization plan with 30/60/90-day actions",
            "System ownership and accountability map",
            "Critical dependency and risk register",
            "Delivery backlog reprioritization",
            "Operational runbook for control handoff",
            "Executive status brief with recovery metrics"
        ],
        "processSteps": [
            "Rapid intake and control boundary definition",
            "System and delivery triage",
            "Stabilization plan and immediate actions",
            "Backlog reset and governance alignment",
            "Handover to steady-state delivery"
        ],
        "inputsRequired": [
            "Current backlog and delivery artifacts",
            "Known risks, incidents, and outages",
            "Access to delivery and operations leads",
            "Procurement or contract constraints"
        ],
        "deliveryModes": [
            "hybrid",
            "on-site",
            "remote"
        ],
        "defaultMode": "hybrid",
        "duration": {
            "minWeeks": 3,
            "maxWeeks": 6
        },
        "pricing": {
            "project": {
                "minEUR": 45000,
                "maxEUR": 95000
            },
            "hourlyEquivalent": {
                "minEUR": 330,
                "maxEUR": 445
            },
            "notes": "Pricing reflects urgency, system criticality, and coordination overhead. Hourly equivalent is provided for procurement comparison; delivery is priced as a scoped engagement."
        },
        "includes": [
            "Stabilization lead + delivery control support",
            "Weekly executive updates",
            "Handover-ready documentation"
        ],
        "onsitePolicy": {
            "text": "On-site available if required; travel/on-site days are billed separately.",
            "dayRateEUR": 3550
        },
        "purchaseType": "scope",
        "ctaLabel": "Request scope",
        "securityNote": "Stabilization work respects existing controls and avoids operational tradecraft.",
        "faq": [
            {
                "question": "Can you take over an existing vendor?",
                "answer": "Yes. We stabilize the program and integrate with existing vendors where feasible."
            },
            {
                "question": "Is this emergency response?",
                "answer": "No. We focus on controlled recovery and governance, not incident response operations."
            },
            {
                "question": "What happens after stabilization?",
                "answer": "We transition to a steady-state plan or hand back to your internal team."
            }
        ],
        "domains": [
            "Security",
            "IT-OT",
            "Industrial"
        ],
        "industries": [
            "Public",
            "Defense",
            "Manufacturing",
            "Logistics"
        ],
        "engagementTypes": [
            "Operate",
            "Build"
        ],
        "urgency": [
            "2-4 weeks"
        ],
        "tags": [
            "stabilization",
            "takeover",
            "delivery-control",
            "risk"
        ]
    },
    {
        "id": "svc-012",
        "slug": "remote-program-takeover",
        "title": "Remote Program Takeover",
        "oneLine": "Remote takeover of at-risk programs with immediate control and delivery reset.",
        "problemStatement": "Some programs require rapid intervention without on-site presence. This engagement delivers remote control, governance reset, and a clear recovery plan.",
        "bestFor": [
            "Distributed programs needing immediate stabilization",
            "Leaders requiring remote recovery",
            "Teams needing neutral delivery control"
        ],
        "notFor": [
            "On-site mandated environments",
            "Programs without access approvals",
            "Long-term managed operations"
        ],
        "outcomes": [
            "Remote stabilization plan",
            "Clear delivery ownership and accountability",
            "Controlled recovery roadmap"
        ],
        "deliverables": [
            "Remote stabilization plan",
            "Delivery control map and escalation paths",
            "Risk register and mitigation actions",
            "Backlog reset and milestone plan",
            "Executive recovery brief"
        ],
        "processSteps": [
            "Rapid remote intake",
            "Program triage and control mapping",
            "Stabilization and backlog reset",
            "Governance alignment",
            "Recovery readout"
        ],
        "inputsRequired": [
            "Remote access to program artifacts",
            "Named decision owner",
            "Access approvals for key systems",
            "Current delivery metrics"
        ],
        "deliveryModes": [
            "remote"
        ],
        "defaultMode": "remote",
        "duration": {
            "minWeeks": 2,
            "maxWeeks": 5
        },
        "pricing": {
            "project": {
                "minEUR": 40000,
                "maxEUR": 85000
            },
            "hourlyEquivalent": {
                "minEUR": 380,
                "maxEUR": 515
            },
            "notes": "Pricing depends on program size, access readiness, and recovery scope. Hourly equivalent is provided for procurement comparison; delivery is priced as a scoped engagement."
        },
        "includes": [
            "Stabilization lead",
            "Remote delivery control pack",
            "Executive recovery briefing"
        ],
        "onsitePolicy": {
            "text": "On-site available if required; travel/on-site days are billed separately.",
            "dayRateEUR": 4100
        },
        "purchaseType": "scope",
        "ctaLabel": "Request scope",
        "securityNote": "Remote stabilization uses approved access paths and avoids sensitive operational tactics.",
        "faq": [
            {
                "question": "Can this be done entirely remotely?",
                "answer": "Yes. We can operate fully remote with approved access."
            },
            {
                "question": "Will this replace internal teams?",
                "answer": "No. We stabilize and align delivery, then transition control."
            },
            {
                "question": "What is the expected disruption?",
                "answer": "We aim to minimize disruption while establishing control boundaries."
            }
        ],
        "domains": [
            "Security",
            "IT-OT"
        ],
        "industries": [
            "Public",
            "Defense",
            "Logistics",
            "Manufacturing"
        ],
        "engagementTypes": [
            "Operate"
        ],
        "urgency": [
            "2-4 weeks"
        ],
        "tags": [
            "remote-takeover",
            "stabilization",
            "recovery",
            "governance"
        ]
    },
    {
        "id": "svc-013",
        "slug": "on-site-program-takeover",
        "title": "On-site Program Takeover",
        "oneLine": "On-site takeover for critical programs requiring rapid control and recovery.",
        "problemStatement": "Some environments require on-site control to stabilize delivery. This engagement provides embedded leadership and immediate governance reset.",
        "bestFor": [
            "Facilities with on-site delivery requirements",
            "Programs with high operational risk",
            "Leaders requiring immediate intervention"
        ],
        "notFor": [
            "Remote-only programs",
            "Teams without site access approvals",
            "Long-term operations without transition"
        ],
        "outcomes": [
            "On-site stabilization plan",
            "Clear delivery control and accountability",
            "Reduced operational risk"
        ],
        "deliverables": [
            "On-site stabilization plan",
            "Control boundary and escalation map",
            "Risk register and mitigation actions",
            "Backlog reset and milestone plan",
            "Executive recovery brief"
        ],
        "processSteps": [
            "On-site intake and scope alignment",
            "Program triage and control mapping",
            "Stabilization plan execution",
            "Governance alignment",
            "Recovery readout"
        ],
        "inputsRequired": [
            "On-site access approvals",
            "Named decision owner",
            "Current program artifacts",
            "Operational constraints and safety rules"
        ],
        "deliveryModes": [
            "on-site",
            "hybrid"
        ],
        "defaultMode": "on-site",
        "duration": {
            "minWeeks": 2,
            "maxWeeks": 5
        },
        "pricing": {
            "project": {
                "minEUR": 55000,
                "maxEUR": 110000
            },
            "hourlyEquivalent": {
                "minEUR": 500,
                "maxEUR": 680
            },
            "notes": "Pricing reflects on-site requirements, program criticality, and coordination overhead. Hourly equivalent is provided for procurement comparison; delivery is priced as a scoped engagement."
        },
        "includes": [
            "On-site stabilization lead",
            "Daily control updates",
            "Executive recovery briefing"
        ],
        "onsitePolicy": {
            "text": "On-site available if required; travel/on-site days are billed separately.",
            "dayRateEUR": 5450
        },
        "purchaseType": "scope",
        "ctaLabel": "Request scope",
        "securityNote": "On-site work follows approved access protocols and avoids sensitive operational tactics.",
        "faq": [
            {
                "question": "How long are on-site engagements?",
                "answer": "Typically 2-5 weeks depending on program criticality."
            },
            {
                "question": "Will you coordinate with existing vendors?",
                "answer": "Yes. We stabilize delivery while integrating existing vendor roles."
            },
            {
                "question": "Do you require classified access?",
                "answer": "No. We work within approved and lawful access boundaries."
            }
        ],
        "domains": [
            "Industrial",
            "IT-OT",
            "Security"
        ],
        "industries": [
            "Manufacturing",
            "Logistics",
            "Public",
            "Defense"
        ],
        "engagementTypes": [
            "Operate"
        ],
        "urgency": [
            "2-4 weeks"
        ],
        "tags": [
            "on-site",
            "takeover",
            "stabilization",
            "recovery"
        ]
    },
    {
        "id": "svc-014",
        "slug": "delivery-recovery-control-reset",
        "title": "Delivery Recovery & Control Reset",
        "oneLine": "Reset delivery control for programs with scope drift and governance gaps.",
        "problemStatement": "Scope drift erodes delivery control and trust. This engagement restores governance, control boundaries, and a realistic delivery plan.",
        "bestFor": [
            "Programs with scope creep and delivery slippage",
            "Leaders needing independent recovery",
            "Teams with overlapping vendor scopes"
        ],
        "notFor": [
            "Programs without executive ownership",
            "Staff augmentation needs",
            "Requests for tactical operations"
        ],
        "outcomes": [
            "Governance reset and decision clarity",
            "Controlled delivery plan",
            "Reduced delivery risk"
        ],
        "deliverables": [
            "Delivery control plan",
            "Scope boundary and RACI map",
            "Risk register and mitigation actions",
            "Updated delivery milestones",
            "Executive recovery brief"
        ],
        "processSteps": [
            "Scope boundary and governance assessment",
            "Control reset and RACI alignment",
            "Delivery plan reconstruction",
            "Risk review",
            "Executive readout"
        ],
        "inputsRequired": [
            "Current scope documentation",
            "Named decision owner",
            "Vendor contracts or SOWs",
            "Delivery metrics and status reports"
        ],
        "deliveryModes": [
            "remote",
            "hybrid"
        ],
        "defaultMode": "hybrid",
        "duration": {
            "minWeeks": 3,
            "maxWeeks": 6
        },
        "pricing": {
            "project": {
                "minEUR": 50000,
                "maxEUR": 100000
            },
            "hourlyEquivalent": {
                "minEUR": 355,
                "maxEUR": 480
            },
            "notes": "Pricing depends on scope complexity, vendor count, and recovery urgency. Hourly equivalent is provided for procurement comparison; delivery is priced as a scoped engagement."
        },
        "includes": [
            "Delivery control lead",
            "Governance and RACI pack",
            "Executive recovery readout"
        ],
        "onsitePolicy": {
            "text": "On-site available if required; travel/on-site days are billed separately.",
            "dayRateEUR": 3850
        },
        "purchaseType": "scope",
        "ctaLabel": "Request scope",
        "securityNote": "We focus on governance and control without exposing operational tactics.",
        "faq": [
            {
                "question": "Do you replace existing PMO?",
                "answer": "No. We reset delivery control and align governance, then transition."
            },
            {
                "question": "Can you work with multiple vendors?",
                "answer": "Yes. We map boundaries and align delivery accountability."
            },
            {
                "question": "What is the typical duration?",
                "answer": "Typically 3-6 weeks depending on scope complexity."
            }
        ],
        "domains": [
            "Security",
            "Industrial"
        ],
        "industries": [
            "Public",
            "Defense",
            "Manufacturing",
            "Logistics"
        ],
        "engagementTypes": [
            "Operate",
            "Build"
        ],
        "urgency": [
            "2-4 weeks"
        ],
        "tags": [
            "recovery",
            "governance",
            "delivery",
            "control"
        ]
    },
    {
        "id": "svc-015",
        "slug": "tailored-software-mvp",
        "title": "Tailored Software MVP (Internal Systems)",
        "oneLine": "Secure internal MVP delivered as a working system with clear operational boundaries.",
        "problemStatement": "High-stakes teams cannot rely on generic tools. We design and build internal systems that encode mission constraints and decision paths from day one.",
        "bestFor": [
            "Organizations needing a bespoke internal capability",
            "Programs with clear operational ownership",
            "Teams that require security-aware design"
        ],
        "notFor": [
            "Consumer apps or public-facing products",
            "Projects without operational sponsors",
            "Teams seeking only UI prototyping"
        ],
        "outcomes": [
            "Working MVP ready for controlled deployment",
            "Architecture aligned to security and governance",
            "Operational runbook and handover plan"
        ],
        "deliverables": [
            "Product requirements and scope boundaries",
            "System architecture and data model",
            "Security and threat model summary",
            "Working MVP with deployment pipeline",
            "Operational runbook and onboarding guide",
            "Documentation pack and acceptance criteria",
            "Post-launch backlog with priorities"
        ],
        "processSteps": [
            "Discovery and scope alignment",
            "Architecture and security design",
            "Build and validation in controlled sprints",
            "Operational readiness and handover",
            "Post-MVP planning and roadmap"
        ],
        "inputsRequired": [
            "Operational requirements and constraints",
            "Access to domain experts",
            "Security and data handling requirements",
            "Deployment environment constraints"
        ],
        "deliveryModes": [
            "remote",
            "hybrid"
        ],
        "defaultMode": "hybrid",
        "duration": {
            "minWeeks": 12,
            "maxWeeks": 24
        },
        "pricing": {
            "project": {
                "minEUR": 180000,
                "maxEUR": 360000
            },
            "hourlyEquivalent": {
                "minEUR": 320,
                "maxEUR": 430
            },
            "notes": "Cost drivers include integration scope, data sensitivity, and required validation depth. Hourly equivalent is provided for procurement comparison; delivery is priced as a scoped engagement."
        },
        "includes": [
            "Senior engineering lead + delivery squad",
            "Security-aware documentation pack",
            "Operational handover and enablement"
        ],
        "onsitePolicy": {
            "text": "On-site available if required; travel/on-site days are billed separately.",
            "dayRateEUR": 3450
        },
        "purchaseType": "scope",
        "ctaLabel": "Request scope",
        "securityNote": "Built with confidentiality-first practices and controlled access to sensitive data.",
        "faq": [
            {
                "question": "Do you host the system?",
                "answer": "We can deploy into your environment or support a managed hosting partner."
            },
            {
                "question": "Is this a prototype or production-ready?",
                "answer": "It is a working MVP designed for controlled production use, not a mockup."
            },
            {
                "question": "Can this extend an existing platform?",
                "answer": "Yes. We scope integrations as part of the architecture and delivery plan."
            }
        ],
        "domains": [
            "Security",
            "Industrial",
            "AI"
        ],
        "industries": [
            "Public",
            "Defense",
            "Manufacturing",
            "Logistics"
        ],
        "engagementTypes": [
            "Build",
            "Architecture"
        ],
        "urgency": [
            "3-6 months"
        ],
        "tags": [
            "mvp",
            "internal-systems",
            "secure-build",
            "delivery"
        ]
    },
    {
        "id": "svc-016",
        "slug": "integration-build-orchestration",
        "title": "Integration Build & System Orchestration",
        "oneLine": "Build and orchestrate integrations across complex system boundaries.",
        "problemStatement": "Integration work fails when ownership and control paths are unclear. This engagement delivers a governed integration build with audit-ready artifacts.",
        "bestFor": [
            "Programs with multiple system integrations",
            "Teams needing controlled orchestration",
            "Leaders requiring audit-ready integration proof"
        ],
        "notFor": [
            "Single API integrations",
            "Teams without integration ownership",
            "Short-term patching"
        ],
        "outcomes": [
            "Working integration pipeline",
            "Clear control boundaries and escalation",
            "Audit-ready integration documentation"
        ],
        "deliverables": [
            "Integration architecture and interface map",
            "Orchestration implementation plan",
            "Integration build with validation tests",
            "Deployment and rollback plan",
            "Integration runbook and monitoring baseline"
        ],
        "processSteps": [
            "Scope and integration boundary definition",
            "Architecture and interface design",
            "Build and validation sprints",
            "Operational readiness review",
            "Handover and documentation"
        ],
        "inputsRequired": [
            "Interface specs and system access approvals",
            "Named decision owner",
            "Existing integration constraints",
            "Operational monitoring requirements"
        ],
        "deliveryModes": [
            "remote",
            "hybrid"
        ],
        "defaultMode": "hybrid",
        "duration": {
            "minWeeks": 10,
            "maxWeeks": 18
        },
        "pricing": {
            "project": {
                "minEUR": 140000,
                "maxEUR": 280000
            },
            "hourlyEquivalent": {
                "minEUR": 320,
                "maxEUR": 430
            },
            "notes": "Pricing depends on integration count, system constraints, and validation depth. Hourly equivalent is provided for procurement comparison; delivery is priced as a scoped engagement."
        },
        "includes": [
            "Senior integration lead",
            "Build documentation pack",
            "Handover workshop"
        ],
        "onsitePolicy": {
            "text": "On-site available if required; travel/on-site days are billed separately.",
            "dayRateEUR": 3450
        },
        "purchaseType": "scope",
        "ctaLabel": "Request scope",
        "securityNote": "Integrations follow approved access paths and auditability requirements.",
        "faq": [
            {
                "question": "Do you support legacy systems?",
                "answer": "Yes. We design integration paths that respect legacy constraints."
            },
            {
                "question": "Is this a long-term ops contract?",
                "answer": "No. It is a scoped build with handover and documentation."
            },
            {
                "question": "How is risk managed?",
                "answer": "We document boundaries, rollback paths, and acceptance criteria."
            }
        ],
        "domains": [
            "IT-OT",
            "Industrial",
            "Security"
        ],
        "industries": [
            "Manufacturing",
            "Logistics",
            "Public",
            "Defense"
        ],
        "engagementTypes": [
            "Build"
        ],
        "urgency": [
            "3-6 months"
        ],
        "tags": [
            "integration",
            "orchestration",
            "build",
            "governance"
        ]
    },
    {
        "id": "svc-017",
        "slug": "secure-data-platform-build",
        "title": "Secure Data Platform Build",
        "oneLine": "Build a secure, auditable data platform aligned to governance and mission constraints.",
        "problemStatement": "Data platforms become liabilities without security and governance embedded. This engagement delivers a secure build with audit-ready controls.",
        "bestFor": [
            "Organizations implementing a shared data platform",
            "Programs with security and audit requirements",
            "Teams needing a controlled data foundation"
        ],
        "notFor": [
            "Unmanaged data lake experiments",
            "Teams without data ownership",
            "Projects seeking consumer analytics tooling"
        ],
        "outcomes": [
            "Working secure data platform",
            "Governed access and audit trail",
            "Operational readiness for scale"
        ],
        "deliverables": [
            "Platform architecture and data model",
            "Security controls and access policy",
            "Implemented data pipelines and storage",
            "Monitoring and audit trail setup",
            "Operational runbook and handover"
        ],
        "processSteps": [
            "Scope alignment and architecture design",
            "Security and governance implementation",
            "Platform build and validation",
            "Operational readiness review",
            "Handover and documentation"
        ],
        "inputsRequired": [
            "Data sources and access approvals",
            "Named decision owner",
            "Security and compliance requirements",
            "Deployment environment constraints"
        ],
        "deliveryModes": [
            "remote",
            "hybrid"
        ],
        "defaultMode": "hybrid",
        "duration": {
            "minWeeks": 12,
            "maxWeeks": 24
        },
        "pricing": {
            "project": {
                "minEUR": 200000,
                "maxEUR": 420000
            },
            "hourlyEquivalent": {
                "minEUR": 365,
                "maxEUR": 495
            },
            "notes": "Pricing depends on data sensitivity, integration scope, and control requirements. Hourly equivalent is provided for procurement comparison; delivery is priced as a scoped engagement."
        },
        "includes": [
            "Senior data platform lead",
            "Security and governance documentation",
            "Operational handover"
        ],
        "onsitePolicy": {
            "text": "On-site available if required; travel/on-site days are billed separately.",
            "dayRateEUR": 3950
        },
        "purchaseType": "scope",
        "ctaLabel": "Request scope",
        "securityNote": "Build follows confidentiality-first handling with audit-ready controls.",
        "faq": [
            {
                "question": "Do you manage the platform after delivery?",
                "answer": "Operations can be scoped separately under assurance."
            },
            {
                "question": "Can this support AI workloads?",
                "answer": "Yes. The platform is designed for secure analytics and AI use cases."
            },
            {
                "question": "Is data residency addressed?",
                "answer": "Yes. Residency and access constraints are documented in the scope."
            }
        ],
        "domains": [
            "Security",
            "AI",
            "IT-OT"
        ],
        "industries": [
            "Public",
            "Defense",
            "Manufacturing",
            "Logistics"
        ],
        "engagementTypes": [
            "Build",
            "Architecture"
        ],
        "urgency": [
            "3-6 months"
        ],
        "tags": [
            "data-platform",
            "build",
            "security",
            "audit"
        ]
    },
    {
        "id": "svc-018",
        "slug": "ops-automation-build",
        "title": "Ops Automation Build",
        "oneLine": "Automation build for operational workflows with control boundaries and audit trail.",
        "problemStatement": "Automation fails when control boundaries are unclear. This engagement delivers automation with governance, safety, and auditability built in.",
        "bestFor": [
            "Operations teams with repeatable workflows",
            "Programs needing reliability and control",
            "Leaders seeking measurable throughput gains"
        ],
        "notFor": [
            "Uncontrolled autonomous operations",
            "Teams without process ownership",
            "Short-term quick fixes"
        ],
        "outcomes": [
            "Automated workflows with controls",
            "Measured throughput improvements",
            "Operational runbooks and oversight"
        ],
        "deliverables": [
            "Automation architecture and control map",
            "Implemented workflow automation",
            "Monitoring and alerting setup",
            "Operational runbook and escalation paths",
            "Post-launch optimization backlog"
        ],
        "processSteps": [
            "Process mapping and control definition",
            "Automation design and build",
            "Validation and safety review",
            "Operational readiness and monitoring",
            "Handover and backlog planning"
        ],
        "inputsRequired": [
            "Process documentation and metrics",
            "Named decision owner",
            "Access approvals for operational systems",
            "Risk and safety constraints"
        ],
        "deliveryModes": [
            "remote",
            "hybrid",
            "on-site"
        ],
        "defaultMode": "hybrid",
        "duration": {
            "minWeeks": 8,
            "maxWeeks": 16
        },
        "pricing": {
            "project": {
                "minEUR": 120000,
                "maxEUR": 240000
            },
            "hourlyEquivalent": {
                "minEUR": 320,
                "maxEUR": 430
            },
            "notes": "Pricing depends on workflow complexity, integration count, and validation depth. Hourly equivalent is provided for procurement comparison; delivery is priced as a scoped engagement."
        },
        "includes": [
            "Automation lead",
            "Runbook and monitoring pack",
            "Operational handover"
        ],
        "onsitePolicy": {
            "text": "On-site available if required; travel/on-site days are billed separately.",
            "dayRateEUR": 3450
        },
        "purchaseType": "scope",
        "ctaLabel": "Request scope",
        "securityNote": "Automation respects governance boundaries and avoids unsafe operational tactics.",
        "faq": [
            {
                "question": "Does this include AI automation?",
                "answer": "If appropriate, we can include AI-assisted steps with human oversight."
            },
            {
                "question": "Will this disrupt operations?",
                "answer": "We design phased rollout with rollback paths to minimize disruption."
            },
            {
                "question": "Is on-site required?",
                "answer": "On-site is optional depending on system access constraints."
            }
        ],
        "domains": [
            "Industrial",
            "IT-OT",
            "AI"
        ],
        "industries": [
            "Manufacturing",
            "Logistics",
            "Public"
        ],
        "engagementTypes": [
            "Build",
            "Operate"
        ],
        "urgency": [
            "3-6 months"
        ],
        "tags": [
            "automation",
            "operations",
            "control",
            "build"
        ]
    },
    {
        "id": "svc-019",
        "slug": "security-disclosure-readiness",
        "title": "Security Disclosure Readiness",
        "oneLine": "Prepare systems and documentation for responsible security disclosure.",
        "problemStatement": "Organizations risk reputational damage without a structured disclosure posture. This engagement delivers disclosure readiness without exposing sensitive tactics.",
        "bestFor": [
            "Teams formalizing disclosure processes",
            "Public-sector programs requiring audit-ready posture",
            "Leaders seeking responsible use alignment"
        ],
        "notFor": [
            "Offensive security operations",
            "Teams seeking vulnerability exploitation",
            "Programs without governance ownership"
        ],
        "outcomes": [
            "Disclosure readiness framework",
            "Audit-ready policies and processes",
            "Clear escalation and response paths"
        ],
        "deliverables": [
            "Disclosure policy draft",
            "Intake and triage workflow",
            "Escalation and response map",
            "Evidence handling guidance",
            "Executive disclosure readiness brief"
        ],
        "processSteps": [
            "Policy scope and governance alignment",
            "Workflow design and evidence handling",
            "Stakeholder alignment and sign-off",
            "Readiness review and gaps",
            "Executive readout"
        ],
        "inputsRequired": [
            "Existing security policies",
            "Named decision owner",
            "Access approvals for policy review",
            "Legal or compliance stakeholders"
        ],
        "deliveryModes": [
            "remote",
            "hybrid"
        ],
        "defaultMode": "remote",
        "duration": {
            "minWeeks": 6,
            "maxWeeks": 10
        },
        "pricing": {
            "project": {
                "minEUR": 60000,
                "maxEUR": 110000
            },
            "hourlyEquivalent": {
                "minEUR": 225,
                "maxEUR": 305
            },
            "notes": "Pricing depends on policy complexity and governance review cycles. Hourly equivalent is provided for procurement comparison; delivery is priced as a scoped engagement."
        },
        "includes": [
            "Security governance lead",
            "Policy and workflow documentation",
            "Executive readiness briefing"
        ],
        "onsitePolicy": {
            "text": "On-site available if required; travel/on-site days are billed separately.",
            "dayRateEUR": 2450
        },
        "purchaseType": "scope",
        "ctaLabel": "Request scope",
        "securityNote": "We provide high-level guidance without operational tradecraft or exploitation detail.",
        "faq": [
            {
                "question": "Do you run a disclosure program?",
                "answer": "We design the framework and can advise on rollout, not operate it long-term."
            },
            {
                "question": "Is this for classified systems?",
                "answer": "We do not claim classified handling. We stay within approved access boundaries."
            },
            {
                "question": "Will you publish anything?",
                "answer": "No. The engagement focuses on internal readiness and governance."
            }
        ],
        "domains": [
            "Security"
        ],
        "industries": [
            "Public",
            "Defense",
            "Manufacturing",
            "Logistics"
        ],
        "engagementTypes": [
            "Audit",
            "Operate"
        ],
        "urgency": [
            "6-12 weeks"
        ],
        "tags": [
            "disclosure",
            "security",
            "policy",
            "governance"
        ]
    },
    {
        "id": "svc-020",
        "slug": "export-controls-alignment",
        "title": "Export Controls Alignment Review",
        "oneLine": "Alignment review for export control and dual-use considerations.",
        "problemStatement": "Programs risk delay when export control implications are unclear. This engagement provides a decision-ready alignment review without legal advice.",
        "bestFor": [
            "Programs with dual-use technology considerations",
            "Public-sector procurement teams",
            "Leaders needing documented alignment"
        ],
        "notFor": [
            "Requests for legal advice",
            "Operational tradecraft",
            "Teams without compliance ownership"
        ],
        "outcomes": [
            "Documented export control alignment",
            "Clear compliance decision trail",
            "Procurement-ready risk notes"
        ],
        "deliverables": [
            "Export control alignment memo",
            "Risk register and mitigation options",
            "Procurement guidance summary",
            "Decision trail documentation",
            "Executive compliance brief"
        ],
        "processSteps": [
            "Scope alignment and compliance context",
            "Artifact review and classification inputs",
            "Risk and impact assessment",
            "Decision documentation",
            "Executive readout"
        ],
        "inputsRequired": [
            "Product or system documentation",
            "Named compliance decision owner",
            "Procurement constraints",
            "Access approvals for sensitive materials"
        ],
        "deliveryModes": [
            "remote",
            "hybrid"
        ],
        "defaultMode": "remote",
        "duration": {
            "minWeeks": 2,
            "maxWeeks": 4
        },
        "pricing": {
            "project": {
                "minEUR": 28000,
                "maxEUR": 55000
            },
            "hourlyEquivalent": {
                "minEUR": 295,
                "maxEUR": 400
            },
            "notes": "Pricing depends on scope complexity and documentation quality. Hourly equivalent is provided for procurement comparison; delivery is priced as a scoped engagement."
        },
        "includes": [
            "Compliance-aligned technical lead",
            "Decision-ready alignment memo",
            "Executive briefing"
        ],
        "onsitePolicy": {
            "text": "On-site available if required; travel/on-site days are billed separately.",
            "dayRateEUR": 3200
        },
        "purchaseType": "scope",
        "ctaLabel": "Request scope",
        "securityNote": "We provide alignment review without operational guidance or legal advice.",
        "faq": [
            {
                "question": "Is this legal advice?",
                "answer": "No. We provide technical alignment inputs for your legal and compliance teams."
            },
            {
                "question": "Can this support procurement?",
                "answer": "Yes. The output is structured for procurement risk review."
            },
            {
                "question": "How long does it take?",
                "answer": "Typically 2-4 weeks depending on documentation readiness."
            }
        ],
        "domains": [
            "Security"
        ],
        "industries": [
            "Public",
            "Defense",
            "Manufacturing"
        ],
        "engagementTypes": [
            "Audit"
        ],
        "urgency": [
            "2-4 weeks"
        ],
        "tags": [
            "export-controls",
            "compliance",
            "risk",
            "procurement"
        ]
    },
    {
        "id": "svc-021",
        "slug": "procurement-ready-technology-review",
        "title": "Procurement-Ready Technology Review",
        "oneLine": "Independent technical review to inform procurement, vendor selection, and risk posture.",
        "problemStatement": "Procurement decisions fail when technical risk is not translated into decision-ready artifacts. This engagement provides a defensible, auditable review.",
        "bestFor": [
            "Buyers evaluating high-risk vendors",
            "Programs requiring independent technical validation",
            "Public-sector or defense procurement cycles"
        ],
        "notFor": [
            "Teams seeking pricing negotiations",
            "Organizations without procurement authority",
            "Requests for operational tradecraft"
        ],
        "outcomes": [
            "Clear technical risk profile",
            "Acceptance criteria for procurement",
            "Governance alignment for delivery"
        ],
        "deliverables": [
            "Vendor technical assessment brief",
            "Risk register and mitigation notes",
            "Acceptance criteria and test plan outline",
            "Integration feasibility summary",
            "Compliance alignment checklist",
            "Executive procurement memo"
        ],
        "processSteps": [
            "Scope definition and procurement context",
            "Vendor documentation review",
            "Risk and feasibility analysis",
            "Acceptance criteria definition",
            "Executive review and memo delivery"
        ],
        "inputsRequired": [
            "Vendor documentation and architecture materials",
            "Procurement requirements and constraints",
            "Stakeholder access for clarification",
            "Named decision owner"
        ],
        "deliveryModes": [
            "remote",
            "hybrid"
        ],
        "defaultMode": "remote",
        "duration": {
            "minWeeks": 2,
            "maxWeeks": 4
        },
        "pricing": {
            "project": {
                "minEUR": 35000,
                "maxEUR": 65000
            },
            "hourlyEquivalent": {
                "minEUR": 355,
                "maxEUR": 480
            },
            "notes": "Pricing depends on vendor complexity, documentation quality, and review depth. Hourly equivalent is provided for procurement comparison; delivery is priced as a scoped engagement."
        },
        "includes": [
            "Independent technical lead",
            "Audit-ready review artifacts",
            "Procurement alignment workshop"
        ],
        "onsitePolicy": {
            "text": "On-site available if required; travel/on-site days are billed separately.",
            "dayRateEUR": 3850
        },
        "purchaseType": "scope",
        "ctaLabel": "Request scope",
        "securityNote": "We focus on risk posture and governance without exposing sensitive tactics.",
        "faq": [
            {
                "question": "Do you recommend vendors?",
                "answer": "We provide an independent technical assessment and acceptance criteria."
            },
            {
                "question": "Can you align to public-sector rules?",
                "answer": "Yes. We tailor deliverables to public-sector procurement standards."
            },
            {
                "question": "Will you review source code?",
                "answer": "If access is granted and required, we can review code at a high level."
            }
        ],
        "domains": [
            "Security",
            "Industrial"
        ],
        "industries": [
            "Public",
            "Defense",
            "Manufacturing",
            "Logistics"
        ],
        "engagementTypes": [
            "Audit",
            "Architecture"
        ],
        "urgency": [
            "2-4 weeks"
        ],
        "tags": [
            "procurement-review",
            "vendor-risk",
            "compliance",
            "acceptance"
        ]
    },
    {
        "id": "svc-022",
        "slug": "operational-readiness-handover",
        "title": "Operational Readiness & Handover",
        "oneLine": "Structured transition to steady-state operations with runbooks, controls, and training.",
        "problemStatement": "Programs fail at handover when operational readiness is assumed rather than engineered. This engagement creates a controlled transition with clear accountability.",
        "bestFor": [
            "Teams preparing to take ownership of a system",
            "Programs nearing operational launch",
            "Organizations needing control transfer"
        ],
        "notFor": [
            "Purely exploratory initiatives",
            "Teams without operational owners",
            "Scopes without delivery artifacts"
        ],
        "outcomes": [
            "Operational readiness checklist and gating",
            "Handover plan with decision rights",
            "Reduced launch risk"
        ],
        "deliverables": [
            "Operational readiness checklist",
            "Runbooks and escalation paths",
            "Training plan and materials",
            "Handover plan with responsibilities",
            "Monitoring and alerting baseline",
            "Acceptance criteria for go-live"
        ],
        "processSteps": [
            "Readiness assessment and gaps",
            "Runbook and control-path design",
            "Training and operational rehearsal",
            "Handover governance and approvals",
            "Go-live readiness review"
        ],
        "inputsRequired": [
            "System documentation and backlog",
            "Operational stakeholders and on-call plans",
            "Monitoring and incident history",
            "Compliance or regulatory constraints"
        ],
        "deliveryModes": [
            "hybrid",
            "on-site",
            "remote"
        ],
        "defaultMode": "hybrid",
        "duration": {
            "minWeeks": 6,
            "maxWeeks": 10
        },
        "pricing": {
            "project": {
                "minEUR": 60000,
                "maxEUR": 115000
            },
            "hourlyEquivalent": {
                "minEUR": 230,
                "maxEUR": 315
            },
            "notes": "Pricing depends on system complexity, training scope, and operational coverage. Hourly equivalent is provided for procurement comparison; delivery is priced as a scoped engagement."
        },
        "includes": [
            "Operational readiness lead",
            "Runbook and training package",
            "Go-live support window"
        ],
        "onsitePolicy": {
            "text": "On-site available if required; travel/on-site days are billed separately.",
            "dayRateEUR": 2500
        },
        "purchaseType": "scope",
        "ctaLabel": "Request scope",
        "securityNote": "We maintain confidentiality and avoid sensitive operational guidance.",
        "faq": [
            {
                "question": "Is this just training?",
                "answer": "No. Training is one output; the core is readiness, controls, and governance."
            },
            {
                "question": "Can you support go-live?",
                "answer": "Yes. We support the transition within the scoped window."
            },
            {
                "question": "Does this include ongoing operations?",
                "answer": "No. Ongoing operations are handled via a separate assurance engagement."
            }
        ],
        "domains": [
            "Industrial",
            "IT-OT",
            "Security"
        ],
        "industries": [
            "Manufacturing",
            "Logistics",
            "Public",
            "Defense"
        ],
        "engagementTypes": [
            "Operate",
            "Build"
        ],
        "urgency": [
            "6-12 weeks"
        ],
        "tags": [
            "readiness",
            "handover",
            "runbooks",
            "operations"
        ]
    },
    {
        "id": "svc-023",
        "slug": "technical-leadership-retainer",
        "title": "Ongoing Technical Leadership & Assurance",
        "oneLine": "Retained technical leadership to maintain control, governance, and delivery assurance.",
        "problemStatement": "Mission-critical programs drift without continuous technical leadership. This engagement provides structured assurance, not ad-hoc advice.",
        "bestFor": [
            "Programs requiring ongoing technical oversight",
            "Leaders needing independent assurance",
            "Teams managing multi-vendor delivery"
        ],
        "notFor": [
            "Short-term project staffing",
            "Teams without decision authority",
            "Purely reactive firefighting"
        ],
        "outcomes": [
            "Sustained governance and risk visibility",
            "Aligned decision-making across stakeholders",
            "Reduced delivery surprises"
        ],
        "deliverables": [
            "Monthly assurance report and risk posture",
            "Architecture review memos",
            "Change-control and decision log",
            "Delivery health dashboard specification",
            "Operational alignment brief"
        ],
        "processSteps": [
            "Initial control boundary definition",
            "Monthly review cadence and reporting",
            "Risk register maintenance",
            "Decision support and escalation",
            "Quarterly recalibration"
        ],
        "inputsRequired": [
            "Access to program updates and metrics",
            "Stakeholder availability for review",
            "Named decision owner",
            "Current architecture and roadmap artifacts"
        ],
        "deliveryModes": [
            "remote",
            "hybrid"
        ],
        "defaultMode": "remote",
        "duration": {
            "minWeeks": 4,
            "maxWeeks": 4
        },
        "pricing": {
            "project": {
                "minEUR": 26000,
                "maxEUR": 31000
            },
            "hourlyEquivalent": {
                "minEUR": 150,
                "maxEUR": 230
            },
            "notes": "Monthly retainer; Billed monthly. Typical 40-120h/month (high-touch up to 200h/month). Hourly equivalent is provided for procurement comparison; delivery is priced as a scoped engagement."
        },
        "includes": [
            "Dedicated technical lead",
            "Monthly executive brief",
            "Risk-managed decision support"
        ],
        "onsitePolicy": {
            "text": "On-site available if required; travel/on-site days are billed separately.",
            "dayRateEUR": 1850
        },
        "purchaseType": "scope",
        "ctaLabel": "Request scope",
        "securityNote": "Assurance focuses on governance and auditability, not operational tradecraft.",
        "faq": [
            {
                "question": "Is this a retainer?",
                "answer": "Yes. It provides continuous leadership and assurance over a defined period."
            },
            {
                "question": "Can this cover multiple programs?",
                "answer": "Yes, within a scoped cadence agreed during intake."
            },
            {
                "question": "Will you attend executive reviews?",
                "answer": "Yes. Executive readouts are part of the standard cadence."
            }
        ],
        "domains": [
            "Security",
            "AI",
            "IT-OT"
        ],
        "industries": [
            "Public",
            "Defense",
            "Manufacturing",
            "Logistics"
        ],
        "engagementTypes": [
            "Operate",
            "Architecture"
        ],
        "urgency": [
            "3-6 months"
        ],
        "tags": [
            "assurance",
            "retainer",
            "governance",
            "risk"
        ]
    },
    {
        "id": "svc-024",
        "slug": "security-assurance-retainer",
        "title": "Security Assurance Retainer",
        "oneLine": "Ongoing security assurance with governance, control review, and risk tracking.",
        "problemStatement": "Security posture degrades without continuous oversight. This retainer provides structured assurance and governance reviews, not reactive firefighting.",
        "bestFor": [
            "Programs with evolving security posture",
            "Leaders needing continuous risk visibility",
            "Teams managing sensitive environments"
        ],
        "notFor": [
            "One-off security testing",
            "Requests for operational tradecraft",
            "Teams without security ownership"
        ],
        "outcomes": [
            "Continuous risk visibility",
            "Governance-aligned security actions",
            "Audit-ready decision trail"
        ],
        "deliverables": [
            "Monthly security posture report",
            "Control review memos",
            "Risk register updates",
            "Governance alignment brief",
            "Quarterly escalation review"
        ],
        "processSteps": [
            "Initial posture baseline",
            "Monthly control review",
            "Risk register updates",
            "Governance alignment",
            "Quarterly recalibration"
        ],
        "inputsRequired": [
            "Access to security metrics",
            "Named security decision owner",
            "Approved access path for evidence review",
            "Current policies and controls"
        ],
        "deliveryModes": [
            "remote",
            "hybrid"
        ],
        "defaultMode": "remote",
        "duration": {
            "minWeeks": 4,
            "maxWeeks": 4
        },
        "pricing": {
            "project": {
                "minEUR": 26000,
                "maxEUR": 30000
            },
            "hourlyEquivalent": {
                "minEUR": 150,
                "maxEUR": 220
            },
            "notes": "Monthly retainer; Billed monthly. Typical 40-120h/month (high-touch up to 200h/month). Hourly equivalent is provided for procurement comparison; delivery is priced as a scoped engagement."
        },
        "includes": [
            "Security assurance lead",
            "Monthly executive brief",
            "Risk tracking and escalation support"
        ],
        "onsitePolicy": {
            "text": "On-site available if required; travel/on-site days are billed separately.",
            "dayRateEUR": 1750
        },
        "purchaseType": "scope",
        "ctaLabel": "Request scope",
        "securityNote": "Assurance focuses on governance and control review without tactical guidance.",
        "faq": [
            {
                "question": "Is this incident response?",
                "answer": "No. It is a governance and assurance retainer, not emergency response."
            },
            {
                "question": "Can this replace internal security teams?",
                "answer": "No. We provide oversight and assurance alongside internal teams."
            },
            {
                "question": "How is confidentiality handled?",
                "answer": "We operate with NDA-ready processes and minimal data exposure."
            }
        ],
        "domains": [
            "Security",
            "Industrial"
        ],
        "industries": [
            "Public",
            "Defense",
            "Manufacturing",
            "Logistics"
        ],
        "engagementTypes": [
            "Operate",
            "Audit"
        ],
        "urgency": [
            "3-6 months"
        ],
        "tags": [
            "security",
            "assurance",
            "retainer",
            "governance"
        ]
    }
];
}),
"[project]/components/InquiryForm.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InquiryForm",
    ()=>InquiryForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$content$2f$services$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/content/services.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const timeframeOptions = [
    "Immediate",
    "1-3 months",
    "Strategic"
];
function InquiryForm({ initialService = "", initialMode = "remote", initialNote = "", initialTimeframe = "", redirectTo = "/request-scope/confirm" }) {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("idle");
    const [service, setService] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialService);
    const [mode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialMode);
    const [errors, setErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [note, setNote] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialNote);
    const [timeframe, setTimeframe] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialTimeframe);
    const onSubmit = async (event)=>{
        event.preventDefault();
        setStatus("submitting");
        setErrors({});
        const formData = new FormData(event.currentTarget);
        const consent = formData.get("consent") === "on";
        const payload = Object.fromEntries(formData.entries());
        const formService = typeof payload.serviceSlug === "string" ? payload.serviceSlug : "";
        const selectedService = service || formService;
        try {
            const response = await fetch("/api/inquiry", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    ...payload,
                    serviceSlug: selectedService,
                    consent,
                    mode
                })
            });
            const data = await response.json();
            if (response.status === 202 && data?.ok) {
                setStatus("success");
                if (redirectTo) {
                    const url = new URL(redirectTo, window.location.origin);
                    if (data?.id) {
                        url.searchParams.set("id", data.id);
                    }
                    router.push(`${url.pathname}${url.search}`);
                }
                event.currentTarget.reset();
                setService("");
                setNote("");
                setTimeframe("");
            } else if (response.status === 400 && data?.errors) {
                setStatus("error");
                setErrors(data.errors);
            } else {
                setStatus("error");
            }
        } catch  {
            setStatus("error");
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        onSubmit: onSubmit,
        className: "space-y-6 rounded-2xl border border-line/80 bg-soft p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-xs uppercase tracking-[0.2em] text-slate",
                children: [
                    "Delivery mode: ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-ash",
                        children: mode
                    }, void 0, false, {
                        fileName: "[project]/components/InquiryForm.tsx",
                        lineNumber: 93,
                        columnNumber: 24
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/InquiryForm.tsx",
                lineNumber: 92,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-4 md:grid-cols-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "space-y-2 text-sm text-slate",
                        children: [
                            "Organization name",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                name: "organization",
                                required: true,
                                "aria-invalid": Boolean(errors.organization?.length),
                                className: "w-full rounded-xl border border-line bg-ink px-4 py-2 text-ash"
                            }, void 0, false, {
                                fileName: "[project]/components/InquiryForm.tsx",
                                lineNumber: 98,
                                columnNumber: 11
                            }, this),
                            errors.organization?.[0] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-[#E5A4A4]",
                                children: errors.organization[0]
                            }, void 0, false, {
                                fileName: "[project]/components/InquiryForm.tsx",
                                lineNumber: 105,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/InquiryForm.tsx",
                        lineNumber: 96,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "space-y-2 text-sm text-slate",
                        children: [
                            "Your role",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                name: "role",
                                required: true,
                                "aria-invalid": Boolean(errors.role?.length),
                                className: "w-full rounded-xl border border-line bg-ink px-4 py-2 text-ash"
                            }, void 0, false, {
                                fileName: "[project]/components/InquiryForm.tsx",
                                lineNumber: 110,
                                columnNumber: 11
                            }, this),
                            errors.role?.[0] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-[#E5A4A4]",
                                children: errors.role[0]
                            }, void 0, false, {
                                fileName: "[project]/components/InquiryForm.tsx",
                                lineNumber: 117,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/InquiryForm.tsx",
                        lineNumber: 108,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "space-y-2 text-sm text-slate",
                        children: [
                            "Problem area",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                name: "serviceSlug",
                                value: service,
                                onChange: (event)=>setService(event.target.value),
                                required: true,
                                "aria-invalid": Boolean(errors.serviceSlug?.length),
                                className: "w-full rounded-xl border border-line bg-ink px-4 py-2 text-ash",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "",
                                        children: "Select a service"
                                    }, void 0, false, {
                                        fileName: "[project]/components/InquiryForm.tsx",
                                        lineNumber: 130,
                                        columnNumber: 13
                                    }, this),
                                    __TURBOPACK__imported__module__$5b$project$5d2f$content$2f$services$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["services"].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: item.slug,
                                            children: item.title
                                        }, item.slug, false, {
                                            fileName: "[project]/components/InquiryForm.tsx",
                                            lineNumber: 132,
                                            columnNumber: 15
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/InquiryForm.tsx",
                                lineNumber: 122,
                                columnNumber: 11
                            }, this),
                            errors.serviceSlug?.[0] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-[#E5A4A4]",
                                children: errors.serviceSlug[0]
                            }, void 0, false, {
                                fileName: "[project]/components/InquiryForm.tsx",
                                lineNumber: 138,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/InquiryForm.tsx",
                        lineNumber: 120,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "space-y-2 text-sm text-slate",
                        children: [
                            "Timeframe",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                name: "timeframe",
                                required: true,
                                value: timeframe,
                                onChange: (event)=>setTimeframe(event.target.value),
                                "aria-invalid": Boolean(errors.timeframe?.length),
                                className: "w-full rounded-xl border border-line bg-ink px-4 py-2 text-ash",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "",
                                        children: "Select a timeframe"
                                    }, void 0, false, {
                                        fileName: "[project]/components/InquiryForm.tsx",
                                        lineNumber: 151,
                                        columnNumber: 13
                                    }, this),
                                    timeframeOptions.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: option,
                                            children: option
                                        }, option, false, {
                                            fileName: "[project]/components/InquiryForm.tsx",
                                            lineNumber: 153,
                                            columnNumber: 15
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/InquiryForm.tsx",
                                lineNumber: 143,
                                columnNumber: 11
                            }, this),
                            errors.timeframe?.[0] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-[#E5A4A4]",
                                children: errors.timeframe[0]
                            }, void 0, false, {
                                fileName: "[project]/components/InquiryForm.tsx",
                                lineNumber: 159,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/InquiryForm.tsx",
                        lineNumber: 141,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "space-y-2 text-sm text-slate",
                        children: [
                            "Work email",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "email",
                                name: "email",
                                required: true,
                                "aria-invalid": Boolean(errors.email?.length),
                                className: "w-full rounded-xl border border-line bg-ink px-4 py-2 text-ash"
                            }, void 0, false, {
                                fileName: "[project]/components/InquiryForm.tsx",
                                lineNumber: 164,
                                columnNumber: 11
                            }, this),
                            errors.email?.[0] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-[#E5A4A4]",
                                children: errors.email[0]
                            }, void 0, false, {
                                fileName: "[project]/components/InquiryForm.tsx",
                                lineNumber: 172,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/InquiryForm.tsx",
                        lineNumber: 162,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/InquiryForm.tsx",
                lineNumber: 95,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "space-y-2 text-sm text-slate",
                children: [
                    "Short critical note (optional, 140 chars)",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        name: "note",
                        maxLength: 140,
                        value: note,
                        onChange: (event)=>setNote(event.target.value),
                        "aria-invalid": Boolean(errors.note?.length),
                        className: "w-full rounded-xl border border-line bg-ink px-4 py-2 text-ash",
                        placeholder: "Key constraint or urgency, if any."
                    }, void 0, false, {
                        fileName: "[project]/components/InquiryForm.tsx",
                        lineNumber: 178,
                        columnNumber: 9
                    }, this),
                    errors.note?.[0] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-[#E5A4A4]",
                        children: errors.note[0]
                    }, void 0, false, {
                        fileName: "[project]/components/InquiryForm.tsx",
                        lineNumber: 188,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/InquiryForm.tsx",
                lineNumber: 176,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "hidden",
                "aria-hidden": "true",
                children: [
                    "Website",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        name: "website",
                        tabIndex: -1,
                        autoComplete: "off"
                    }, void 0, false, {
                        fileName: "[project]/components/InquiryForm.tsx",
                        lineNumber: 193,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/InquiryForm.tsx",
                lineNumber: 191,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "flex items-start gap-3 text-sm text-slate",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "checkbox",
                        name: "consent",
                        required: true,
                        "aria-invalid": Boolean(errors.consent?.length),
                        className: "mt-1 h-4 w-4 accent-ash"
                    }, void 0, false, {
                        fileName: "[project]/components/InquiryForm.tsx",
                        lineNumber: 196,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "I confirm this inquiry is lawful and does not request restricted instructions."
                    }, void 0, false, {
                        fileName: "[project]/components/InquiryForm.tsx",
                        lineNumber: 203,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/InquiryForm.tsx",
                lineNumber: 195,
                columnNumber: 7
            }, this),
            errors.consent?.[0] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xs text-[#E5A4A4]",
                children: errors.consent[0]
            }, void 0, false, {
                fileName: "[project]/components/InquiryForm.tsx",
                lineNumber: 209,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xs text-muted",
                children: "You will receive a fixed-price scoping proposal before any work starts."
            }, void 0, false, {
                fileName: "[project]/components/InquiryForm.tsx",
                lineNumber: 211,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-3 md:flex-row md:items-center md:justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-muted",
                        children: "This scoping step is required before any engagement. We respond within 2 business days."
                    }, void 0, false, {
                        fileName: "[project]/components/InquiryForm.tsx",
                        lineNumber: 215,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "submit",
                        disabled: status === "submitting",
                        className: "btn-animate btn-primary rounded-full px-6 py-2 text-xs uppercase tracking-[0.2em]",
                        children: status === "submitting" ? "Submitting" : "Request scope"
                    }, void 0, false, {
                        fileName: "[project]/components/InquiryForm.tsx",
                        lineNumber: 219,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/InquiryForm.tsx",
                lineNumber: 214,
                columnNumber: 7
            }, this),
            status === "error" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "aria-live": "polite",
                className: "text-xs text-[#E5A4A4]",
                children: "We could not submit the request. Please review the form and try again."
            }, void 0, false, {
                fileName: "[project]/components/InquiryForm.tsx",
                lineNumber: 228,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/InquiryForm.tsx",
        lineNumber: 88,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=_eafc642d._.js.map