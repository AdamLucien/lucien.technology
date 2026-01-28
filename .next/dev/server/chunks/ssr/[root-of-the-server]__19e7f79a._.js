module.exports = [
"[project]/app/favicon.ico.mjs { IMAGE => \"[project]/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/favicon.ico.mjs { IMAGE => \"[project]/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/app/marketplace/loading.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/marketplace/loading.tsx [app-rsc] (ecmascript)"));
}),
"[project]/content/services.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/components/Breadcrumbs.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Breadcrumbs",
    ()=>Breadcrumbs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
;
;
function Breadcrumbs({ items }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        "aria-label": "Breadcrumb",
        className: "text-xs text-muted",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
            className: "flex flex-wrap items-center gap-2",
            children: items.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                    className: "flex items-center gap-2",
                    children: [
                        index > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            "aria-hidden": "true",
                            children: "/"
                        }, void 0, false, {
                            fileName: "[project]/components/Breadcrumbs.tsx",
                            lineNumber: 14,
                            columnNumber: 27
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            href: item.href,
                            className: "transition hover:text-ash",
                            children: item.label
                        }, void 0, false, {
                            fileName: "[project]/components/Breadcrumbs.tsx",
                            lineNumber: 15,
                            columnNumber: 13
                        }, this)
                    ]
                }, item.href, true, {
                    fileName: "[project]/components/Breadcrumbs.tsx",
                    lineNumber: 13,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/components/Breadcrumbs.tsx",
            lineNumber: 11,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Breadcrumbs.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/JsonLd.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "JsonLd",
    ()=>JsonLd
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
function JsonLd({ id, data }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
        id: id,
        type: "application/ld+json",
        dangerouslySetInnerHTML: {
            __html: JSON.stringify(data)
        }
    }, void 0, false, {
        fileName: "[project]/components/JsonLd.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
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
"[project]/components/MotionIn.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MotionIn",
    ()=>MotionIn
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const MotionIn = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call MotionIn() from the server but MotionIn is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/MotionIn.tsx <module evaluation>", "MotionIn");
}),
"[project]/components/MotionIn.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MotionIn",
    ()=>MotionIn
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const MotionIn = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call MotionIn() from the server but MotionIn is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/MotionIn.tsx", "MotionIn");
}),
"[project]/components/MotionIn.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$MotionIn$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/components/MotionIn.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$MotionIn$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/components/MotionIn.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$MotionIn$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/lib/commerce.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatDurationRange",
    ()=>formatDurationRange,
    "formatEUR",
    ()=>formatEUR,
    "formatHourlyRange",
    ()=>formatHourlyRange,
    "formatIncludesLine",
    ()=>formatIncludesLine,
    "formatProjectRange",
    ()=>formatProjectRange,
    "formatRange",
    ()=>formatRange
]);
function formatEUR(amount) {
    return new Intl.NumberFormat("en-IE", {
        style: "currency",
        currency: "EUR",
        maximumFractionDigits: 0
    }).format(amount);
}
function formatRange(min, max) {
    return `${formatEUR(min)}–${formatEUR(max)}`;
}
function formatHourlyRange(service) {
    const { minEUR, maxEUR } = service.pricing.hourlyEquivalent;
    return `${formatEUR(minEUR)}–${formatEUR(maxEUR)} / hr`;
}
function formatProjectRange(service) {
    const { minEUR, maxEUR } = service.pricing.project;
    return formatRange(minEUR, maxEUR);
}
function formatDurationRange(service) {
    const { minWeeks, maxWeeks } = service.duration;
    if (maxWeeks <= minWeeks) {
        return `${minWeeks} weeks`;
    }
    return `${minWeeks}–${maxWeeks} weeks`;
}
function formatIncludesLine(service) {
    return `Includes: ${service.includes.join(", ")}.`;
}
}),
"[project]/app/marketplace/[slug]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ServiceDetailPage,
    "generateMetadata",
    ()=>generateMetadata,
    "generateStaticParams",
    ()=>generateStaticParams
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$content$2f$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/content/services.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Breadcrumbs$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Breadcrumbs.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$JsonLd$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/JsonLd.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$IconStatic$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/icons/IconStatic.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$seo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/seo.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$MotionIn$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/MotionIn.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$commerce$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/commerce.ts [app-rsc] (ecmascript)");
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
const normalizeSlug = (slug)=>decodeURIComponent(slug).toLowerCase();
function generateStaticParams() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$content$2f$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["services"].map((service)=>({
            slug: service.slug
        }));
}
async function generateMetadata({ params }) {
    const { slug: rawSlug } = await params;
    const slug = normalizeSlug(rawSlug);
    const service = __TURBOPACK__imported__module__$5b$project$5d2f$content$2f$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["services"].find((item)=>item.slug === slug);
    if (!service) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$seo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildPageMetadata"])({
            title: "Service Not Found",
            description: "The requested service could not be found.",
            path: "/marketplace"
        });
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$seo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildPageMetadata"])({
        title: service.title,
        description: service.oneLine,
        path: `/marketplace/${service.slug}`,
        keywords: service.tags
    });
}
async function ServiceDetailPage({ params, searchParams }) {
    const { slug: rawSlug } = await params;
    const resolvedSearchParams = await searchParams;
    const slug = normalizeSlug(rawSlug);
    const service = __TURBOPACK__imported__module__$5b$project$5d2f$content$2f$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["services"].find((item)=>item.slug === slug);
    if (!service) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    }
    const query = resolvedSearchParams ? new URLSearchParams(Object.entries(resolvedSearchParams).flatMap(([key, value])=>{
        if (Array.isArray(value)) {
            return value.map((entry)=>[
                    key,
                    entry
                ]);
        }
        if (value === undefined) {
            return [];
        }
        return [
            [
                key,
                value
            ]
        ];
    })).toString() : "";
    const marketplaceHref = query ? `/marketplace?${query}` : "/marketplace";
    const requestScopeHref = `/request-scope?service=${service.slug}&mode=${service.defaultMode}`;
    const deliveryModeIcon = service.defaultMode === "hybrid" ? "hybrid" : service.defaultMode === "on-site" ? "onsite" : "remote";
    const inputsRequired = service.inputsRequired.some((item)=>item.toLowerCase().includes("decision owner")) ? service.inputsRequired : [
        "Named decision owner for scope approvals",
        ...service.inputsRequired
    ];
    const primaryDeliverables = service.deliverables.slice(0, 2).join(" and ");
    const definitionOfDone = [
        `${service.outcomes[0] ?? "Decision-ready outcomes"} are documented and approved by the named decision owner.`,
        `Core artifacts delivered: ${primaryDeliverables || "scope brief and risk register"}.`,
        `${service.deliverables[2] ?? "Risk and dependency register"} is accepted with clear review criteria.`,
        "Scope narrative, constraints, and risks are signed off for procurement action."
    ];
    const nextSteps = [
        "Submit a short scope request with your context.",
        "We confirm fit, constraints, and the access path.",
        "You receive a decision-ready scope pack within 2 business days."
    ];
    const controlMeasures = [
        "Decision-ready scope with named ownership and approval gates.",
        "Risk register tied to system boundaries and control gaps.",
        "Evidence-backed deliverables aligned to procurement needs.",
        "Operational constraints mapped before any build commitment."
    ];
    const procurementPack = [
        service.outcomes[0] ?? "Decision-ready scope narrative",
        service.deliverables[0] ?? "Architecture baseline brief",
        service.deliverables[1] ?? "Risk and dependency register",
        service.outcomes[1] ?? "Procurement-ready next-step options"
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$JsonLd$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["JsonLd"], {
                id: `service-breadcrumb-${service.slug}`,
                data: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$seo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["breadcrumbSchema"])([
                    {
                        name: "Home",
                        path: "/"
                    },
                    {
                        name: "Marketplace",
                        path: "/marketplace"
                    },
                    {
                        name: service.title,
                        path: `/marketplace/${service.slug}`
                    }
                ])
            }, void 0, false, {
                fileName: "[project]/app/marketplace/[slug]/page.tsx",
                lineNumber: 122,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$JsonLd$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["JsonLd"], {
                id: `service-webpage-${service.slug}`,
                data: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$seo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["webPageSchema"])({
                    name: service.title,
                    path: `/marketplace/${service.slug}`
                })
            }, void 0, false, {
                fileName: "[project]/app/marketplace/[slug]/page.tsx",
                lineNumber: 132,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$JsonLd$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["JsonLd"], {
                id: `service-schema-${service.slug}`,
                data: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$seo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["serviceSchema"])(service)
            }, void 0, false, {
                fileName: "[project]/app/marketplace/[slug]/page.tsx",
                lineNumber: 139,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$JsonLd$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["JsonLd"], {
                id: `faq-schema-${service.slug}`,
                data: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$seo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["faqSchema"])(service.faq)
            }, void 0, false, {
                fileName: "[project]/app/marketplace/[slug]/page.tsx",
                lineNumber: 140,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "mx-auto w-full max-w-5xl px-6 pb-16 pt-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$MotionIn$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MotionIn"], {
                        className: "space-y-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Breadcrumbs$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Breadcrumbs"], {
                                items: [
                                    {
                                        href: "/",
                                        label: "Home"
                                    },
                                    {
                                        href: "/marketplace",
                                        label: "Marketplace"
                                    },
                                    {
                                        href: `/marketplace/${service.slug}`,
                                        label: service.title
                                    }
                                ]
                            }, void 0, false, {
                                fileName: "[project]/app/marketplace/[slug]/page.tsx",
                                lineNumber: 144,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                href: marketplaceHref,
                                className: "text-xs uppercase tracking-[0.2em] text-muted",
                                children: "Back to marketplace"
                            }, void 0, false, {
                                fileName: "[project]/app/marketplace/[slug]/page.tsx",
                                lineNumber: 151,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-3xl font-semibold text-ash",
                                        children: service.title
                                    }, void 0, false, {
                                        fileName: "[project]/app/marketplace/[slug]/page.tsx",
                                        lineNumber: 158,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-lg text-muted",
                                        children: service.oneLine
                                    }, void 0, false, {
                                        fileName: "[project]/app/marketplace/[slug]/page.tsx",
                                        lineNumber: 161,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid gap-3 rounded-2xl border border-line/80 bg-soft p-4 text-xs uppercase tracking-[0.2em] text-slate md:grid-cols-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-muted",
                                                        children: "Duration"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/marketplace/[slug]/page.tsx",
                                                        lineNumber: 164,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "inline-flex items-center gap-2 text-ash",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$IconStatic$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["IconStatic"], {
                                                                name: "duration",
                                                                size: 16,
                                                                className: "text-slate"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/marketplace/[slug]/page.tsx",
                                                                lineNumber: 166,
                                                                columnNumber: 19
                                                            }, this),
                                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$commerce$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatDurationRange"])(service)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/marketplace/[slug]/page.tsx",
                                                        lineNumber: 165,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/marketplace/[slug]/page.tsx",
                                                lineNumber: 163,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-muted",
                                                        children: "Delivery mode"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/marketplace/[slug]/page.tsx",
                                                        lineNumber: 171,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "inline-flex items-center gap-2 text-ash",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$IconStatic$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["IconStatic"], {
                                                                name: deliveryModeIcon,
                                                                size: 16,
                                                                className: "text-slate"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/marketplace/[slug]/page.tsx",
                                                                lineNumber: 173,
                                                                columnNumber: 19
                                                            }, this),
                                                            service.defaultMode
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/marketplace/[slug]/page.tsx",
                                                        lineNumber: 172,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/marketplace/[slug]/page.tsx",
                                                lineNumber: 170,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-muted",
                                                        children: "Project range"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/marketplace/[slug]/page.tsx",
                                                        lineNumber: 182,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-ash",
                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$commerce$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatProjectRange"])(service)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/marketplace/[slug]/page.tsx",
                                                        lineNumber: 183,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/marketplace/[slug]/page.tsx",
                                                lineNumber: 181,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/marketplace/[slug]/page.tsx",
                                        lineNumber: 162,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                href: requestScopeHref,
                                                className: "btn-animate btn-primary inline-flex rounded-full px-6 py-3 text-xs uppercase tracking-[0.2em]",
                                                children: service.ctaLabel
                                            }, void 0, false, {
                                                fileName: "[project]/app/marketplace/[slug]/page.tsx",
                                                lineNumber: 187,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/marketplace",
                                                className: "text-xs uppercase tracking-[0.2em] text-slate",
                                                children: "View marketplace"
                                            }, void 0, false, {
                                                fileName: "[project]/app/marketplace/[slug]/page.tsx",
                                                lineNumber: 193,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/marketplace/[slug]/page.tsx",
                                        lineNumber: 186,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-2xl border border-line/80 bg-soft p-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-xs uppercase tracking-[0.2em] text-slate",
                                                children: "Paid Scoping Engagement"
                                            }, void 0, false, {
                                                fileName: "[project]/app/marketplace/[slug]/page.tsx",
                                                lineNumber: 201,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-2 text-sm text-muted",
                                                children: "Scope definition is a paid engagement that produces a procurement-ready scope, acceptance criteria, and delivery options. If you proceed, the scoping fee is credited against follow-on delivery."
                                            }, void 0, false, {
                                                fileName: "[project]/app/marketplace/[slug]/page.tsx",
                                                lineNumber: 204,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/marketplace/[slug]/page.tsx",
                                        lineNumber: 200,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-2xl border border-line/80 bg-soft p-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-slate",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$IconStatic$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["IconStatic"], {
                                                        name: "process",
                                                        size: 16,
                                                        className: "text-slate"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/marketplace/[slug]/page.tsx",
                                                        lineNumber: 213,
                                                        columnNumber: 17
                                                    }, this),
                                                    "What happens next"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/marketplace/[slug]/page.tsx",
                                                lineNumber: 212,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                                                className: "mt-4 space-y-2 text-sm text-muted",
                                                children: nextSteps.map((step, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "flex gap-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-xs text-slate",
                                                                children: [
                                                                    "0",
                                                                    index + 1
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/marketplace/[slug]/page.tsx",
                                                                lineNumber: 219,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: step
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/marketplace/[slug]/page.tsx",
                                                                lineNumber: 220,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, step, true, {
                                                        fileName: "[project]/app/marketplace/[slug]/page.tsx",
                                                        lineNumber: 218,
                                                        columnNumber: 19
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/app/marketplace/[slug]/page.tsx",
                                                lineNumber: 216,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/marketplace/[slug]/page.tsx",
                                        lineNumber: 211,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/marketplace/[slug]/page.tsx",
                                lineNumber: 157,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/marketplace/[slug]/page.tsx",
                        lineNumber: 143,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-12 space-y-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$MotionIn$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MotionIn"], {
                                className: "grid gap-6 md:grid-cols-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-2xl border border-line/80 bg-soft p-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-slate",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$IconStatic$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["IconStatic"], {
                                                        name: "fit",
                                                        size: 18,
                                                        className: "text-slate"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/marketplace/[slug]/page.tsx",
                                                        lineNumber: 232,
                                                        columnNumber: 17
                                                    }, this),
                                                    "Best for"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/marketplace/[slug]/page.tsx",
                                                lineNumber: 231,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "mt-4 space-y-2 text-sm text-muted",
                                                children: service.bestFor.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "flex gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "mt-1 h-2 w-2 rounded-full bg-slate"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/marketplace/[slug]/page.tsx",
                                                                lineNumber: 238,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: item
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/marketplace/[slug]/page.tsx",
                                                                lineNumber: 239,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, item, true, {
                                                        fileName: "[project]/app/marketplace/[slug]/page.tsx",
                                                        lineNumber: 237,
                                                        columnNumber: 19
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/app/marketplace/[slug]/page.tsx",
                                                lineNumber: 235,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/marketplace/[slug]/page.tsx",
                                        lineNumber: 230,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-2xl border border-line/80 bg-soft p-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-slate",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$IconStatic$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["IconStatic"], {
                                                        name: "fit",
                                                        size: 18,
                                                        className: "text-slate"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/marketplace/[slug]/page.tsx",
                                                        lineNumber: 246,
                                                        columnNumber: 17
                                                    }, this),
                                                    "Not for"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/marketplace/[slug]/page.tsx",
                                                lineNumber: 245,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "mt-4 space-y-2 text-sm text-muted",
                                                children: service.notFor.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "flex gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "mt-1 h-2 w-2 rounded-full bg-slate"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/marketplace/[slug]/page.tsx",
                                                                lineNumber: 252,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: item
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/marketplace/[slug]/page.tsx",
                                                                lineNumber: 253,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, item, true, {
                                                        fileName: "[project]/app/marketplace/[slug]/page.tsx",
                                                        lineNumber: 251,
                                                        columnNumber: 19
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/app/marketplace/[slug]/page.tsx",
                                                lineNumber: 249,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/marketplace/[slug]/page.tsx",
                                        lineNumber: 244,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/marketplace/[slug]/page.tsx",
                                lineNumber: 229,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$MotionIn$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MotionIn"], {
                                className: "space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "flex items-center gap-2 text-xl font-semibold text-ash",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$IconStatic$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["IconStatic"], {
                                                name: "outcomes",
                                                size: 18,
                                                className: "text-slate"
                                            }, void 0, false, {
                                                fileName: "[project]/app/marketplace/[slug]/page.tsx",
                                                lineNumber: 262,
                                                columnNumber: 15
                                            }, this),
                                            "Expected outcomes"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/marketplace/[slug]/page.tsx",
                                        lineNumber: 261,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-muted",
                                        children: service.problemStatement
                                    }, void 0, false, {
                                        fileName: "[project]/app/marketplace/[slug]/page.tsx",
                                        lineNumber: 265,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "space-y-2 text-sm text-muted",
                                        children: service.outcomes.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "flex gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "mt-1 h-2 w-2 rounded-full bg-slate"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/marketplace/[slug]/page.tsx",
                                                        lineNumber: 269,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: item
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/marketplace/[slug]/page.tsx",
                                                        lineNumber: 270,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, item, true, {
                                                fileName: "[project]/app/marketplace/[slug]/page.tsx",
                                                lineNumber: 268,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/marketplace/[slug]/page.tsx",
                                        lineNumber: 266,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/marketplace/[slug]/page.tsx",
                                lineNumber: 260,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$MotionIn$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MotionIn"], {
                                className: "space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-xl font-semibold text-ash",
                                        children: "How we measure control"
                                    }, void 0, false, {
                                        fileName: "[project]/app/marketplace/[slug]/page.tsx",
                                        lineNumber: 277,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "space-y-2 text-sm text-muted",
                                        children: controlMeasures.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "flex gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "mt-1 h-2 w-2 rounded-full bg-slate"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/marketplace/[slug]/page.tsx",
                                                        lineNumber: 283,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: item
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/marketplace/[slug]/page.tsx",
                                                        lineNumber: 284,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, item, true, {
                                                fileName: "[project]/app/marketplace/[slug]/page.tsx",
                                                lineNumber: 282,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/marketplace/[slug]/page.tsx",
                                        lineNumber: 280,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/marketplace/[slug]/page.tsx",
                                lineNumber: 276,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$MotionIn$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MotionIn"], {
                                className: "space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "flex items-center gap-2 text-xl font-semibold text-ash",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$IconStatic$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["IconStatic"], {
                                                name: "deliverables",
                                                size: 18,
                                                className: "text-slate"
                                            }, void 0, false, {
                                                fileName: "[project]/app/marketplace/[slug]/page.tsx",
                                                lineNumber: 292,
                                                columnNumber: 15
                                            }, this),
                                            "Artifacts you receive"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/marketplace/[slug]/page.tsx",
                                        lineNumber: 291,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "space-y-2 text-sm text-muted",
                                        children: service.deliverables.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "flex gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "mt-1 h-2 w-2 rounded-full bg-slate"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/marketplace/[slug]/page.tsx",
                                                        lineNumber: 298,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: item
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/marketplace/[slug]/page.tsx",
                                                        lineNumber: 299,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, item, true, {
                                                fileName: "[project]/app/marketplace/[slug]/page.tsx",
                                                lineNumber: 297,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/marketplace/[slug]/page.tsx",
                                        lineNumber: 295,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-2xl border border-line/80 bg-soft p-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-slate",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$IconStatic$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["IconStatic"], {
                                                        name: "definitionDone",
                                                        size: 16,
                                                        className: "text-slate"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/marketplace/[slug]/page.tsx",
                                                        lineNumber: 305,
                                                        columnNumber: 17
                                                    }, this),
                                                    "Definition of done"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/marketplace/[slug]/page.tsx",
                                                lineNumber: 304,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "mt-4 space-y-2 text-sm text-muted",
                                                children: definitionOfDone.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "flex gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "mt-1 h-2 w-2 rounded-full bg-slate"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/marketplace/[slug]/page.tsx",
                                                                lineNumber: 315,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: item
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/marketplace/[slug]/page.tsx",
                                                                lineNumber: 316,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, item, true, {
                                                        fileName: "[project]/app/marketplace/[slug]/page.tsx",
                                                        lineNumber: 314,
                                                        columnNumber: 19
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/app/marketplace/[slug]/page.tsx",
                                                lineNumber: 312,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/marketplace/[slug]/page.tsx",
                                        lineNumber: 303,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/marketplace/[slug]/page.tsx",
                                lineNumber: 290,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$MotionIn$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MotionIn"], {
                                className: "space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "flex items-center gap-2 text-xl font-semibold text-ash",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$IconStatic$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["IconStatic"], {
                                                name: "process",
                                                size: 18,
                                                className: "text-slate"
                                            }, void 0, false, {
                                                fileName: "[project]/app/marketplace/[slug]/page.tsx",
                                                lineNumber: 325,
                                                columnNumber: 15
                                            }, this),
                                            "Process"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/marketplace/[slug]/page.tsx",
                                        lineNumber: 324,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                                        className: "space-y-3 text-sm text-muted",
                                        children: service.processSteps.map((step, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "flex gap-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs text-slate",
                                                        children: [
                                                            "0",
                                                            index + 1
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/marketplace/[slug]/page.tsx",
                                                        lineNumber: 331,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: step
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/marketplace/[slug]/page.tsx",
                                                        lineNumber: 332,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, step, true, {
                                                fileName: "[project]/app/marketplace/[slug]/page.tsx",
                                                lineNumber: 330,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/marketplace/[slug]/page.tsx",
                                        lineNumber: 328,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/marketplace/[slug]/page.tsx",
                                lineNumber: 323,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$MotionIn$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MotionIn"], {
                                className: "space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "flex items-center gap-2 text-xl font-semibold text-ash",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$IconStatic$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["IconStatic"], {
                                                name: "inputs",
                                                size: 18,
                                                className: "text-slate"
                                            }, void 0, false, {
                                                fileName: "[project]/app/marketplace/[slug]/page.tsx",
                                                lineNumber: 340,
                                                columnNumber: 15
                                            }, this),
                                            "What we need to start"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/marketplace/[slug]/page.tsx",
                                        lineNumber: 339,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "space-y-2 text-sm text-muted",
                                        children: inputsRequired.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "flex gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "mt-1 h-2 w-2 rounded-full bg-slate"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/marketplace/[slug]/page.tsx",
                                                        lineNumber: 346,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: item
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/marketplace/[slug]/page.tsx",
                                                        lineNumber: 347,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, item, true, {
                                                fileName: "[project]/app/marketplace/[slug]/page.tsx",
                                                lineNumber: 345,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/marketplace/[slug]/page.tsx",
                                        lineNumber: 343,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/marketplace/[slug]/page.tsx",
                                lineNumber: 338,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$MotionIn$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MotionIn"], {
                                className: "space-y-6 rounded-2xl border border-line/80 bg-soft p-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "flex items-center gap-2 text-xl font-semibold text-ash",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$IconStatic$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["IconStatic"], {
                                                        name: "pricing",
                                                        size: 18,
                                                        className: "text-slate"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/marketplace/[slug]/page.tsx",
                                                        lineNumber: 356,
                                                        columnNumber: 17
                                                    }, this),
                                                    "Pricing & duration"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/marketplace/[slug]/page.tsx",
                                                lineNumber: 355,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-muted",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "inline-flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$IconStatic$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["IconStatic"], {
                                                            name: "duration",
                                                            size: 16,
                                                            className: "text-slate"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/marketplace/[slug]/page.tsx",
                                                            lineNumber: 361,
                                                            columnNumber: 19
                                                        }, this),
                                                        "Duration: ",
                                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$commerce$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatDurationRange"])(service)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/marketplace/[slug]/page.tsx",
                                                    lineNumber: 360,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/marketplace/[slug]/page.tsx",
                                                lineNumber: 359,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-muted",
                                                children: [
                                                    "Project range: ",
                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$commerce$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatProjectRange"])(service)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/marketplace/[slug]/page.tsx",
                                                lineNumber: 365,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-muted",
                                                children: [
                                                    "Hourly equivalent: ",
                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$commerce$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatHourlyRange"])(service)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/marketplace/[slug]/page.tsx",
                                                lineNumber: 368,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/marketplace/[slug]/page.tsx",
                                        lineNumber: 354,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-2xl border border-line/80 bg-ink/60 p-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-xs uppercase tracking-[0.2em] text-slate",
                                                children: "Paid Scoping Engagement"
                                            }, void 0, false, {
                                                fileName: "[project]/app/marketplace/[slug]/page.tsx",
                                                lineNumber: 373,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-2 text-sm text-muted",
                                                children: "Scope definition is a paid engagement that produces a procurement-ready scope, acceptance criteria, and delivery options. If you proceed, the scoping fee is credited against follow-on delivery."
                                            }, void 0, false, {
                                                fileName: "[project]/app/marketplace/[slug]/page.tsx",
                                                lineNumber: 376,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/marketplace/[slug]/page.tsx",
                                        lineNumber: 372,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-sm uppercase tracking-[0.2em] text-slate",
                                                children: "Includes"
                                            }, void 0, false, {
                                                fileName: "[project]/app/marketplace/[slug]/page.tsx",
                                                lineNumber: 384,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "space-y-2 text-sm text-muted",
                                                children: service.includes.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "flex gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "mt-1 h-2 w-2 rounded-full bg-slate"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/marketplace/[slug]/page.tsx",
                                                                lineNumber: 390,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: item
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/marketplace/[slug]/page.tsx",
                                                                lineNumber: 391,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, item, true, {
                                                        fileName: "[project]/app/marketplace/[slug]/page.tsx",
                                                        lineNumber: 389,
                                                        columnNumber: 19
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/app/marketplace/[slug]/page.tsx",
                                                lineNumber: 387,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/marketplace/[slug]/page.tsx",
                                        lineNumber: 383,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-muted",
                                        children: service.onsitePolicy.text
                                    }, void 0, false, {
                                        fileName: "[project]/app/marketplace/[slug]/page.tsx",
                                        lineNumber: 396,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-muted",
                                        children: "Price depends on scope, security posture, and integration constraints."
                                    }, void 0, false, {
                                        fileName: "[project]/app/marketplace/[slug]/page.tsx",
                                        lineNumber: 397,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-muted",
                                        children: service.pricing.notes
                                    }, void 0, false, {
                                        fileName: "[project]/app/marketplace/[slug]/page.tsx",
                                        lineNumber: 401,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/marketplace/[slug]/page.tsx",
                                lineNumber: 353,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$MotionIn$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MotionIn"], {
                                className: "space-y-4 rounded-2xl border border-line/80 bg-soft p-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-sm uppercase tracking-[0.2em] text-slate",
                                        children: "Procurement pack"
                                    }, void 0, false, {
                                        fileName: "[project]/app/marketplace/[slug]/page.tsx",
                                        lineNumber: 405,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "space-y-2 text-sm text-muted",
                                        children: procurementPack.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "flex gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "mt-1 h-2 w-2 rounded-full bg-slate"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/marketplace/[slug]/page.tsx",
                                                        lineNumber: 411,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: item
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/marketplace/[slug]/page.tsx",
                                                        lineNumber: 412,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, item, true, {
                                                fileName: "[project]/app/marketplace/[slug]/page.tsx",
                                                lineNumber: 410,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/marketplace/[slug]/page.tsx",
                                        lineNumber: 408,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/marketplace/[slug]/page.tsx",
                                lineNumber: 404,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$MotionIn$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MotionIn"], {
                                className: "card-animate flex flex-col items-start justify-between gap-6 rounded-2xl border border-line/80 bg-soft p-6 md:flex-row md:items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-xl font-semibold text-ash",
                                                children: "Request scope"
                                            }, void 0, false, {
                                                fileName: "[project]/app/marketplace/[slug]/page.tsx",
                                                lineNumber: 420,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-muted",
                                                children: "This step is required before any engagement. We respond within 2 business days."
                                            }, void 0, false, {
                                                fileName: "[project]/app/marketplace/[slug]/page.tsx",
                                                lineNumber: 421,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/marketplace/[slug]/page.tsx",
                                        lineNumber: 419,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                        href: requestScopeHref,
                                        className: "btn-animate btn-primary rounded-full px-6 py-2 text-xs uppercase tracking-[0.2em]",
                                        children: service.ctaLabel
                                    }, void 0, false, {
                                        fileName: "[project]/app/marketplace/[slug]/page.tsx",
                                        lineNumber: 426,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/marketplace/[slug]/page.tsx",
                                lineNumber: 418,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$MotionIn$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MotionIn"], {
                                className: "space-y-4 rounded-2xl border border-line/80 bg-soft p-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "flex items-center gap-2 text-lg font-semibold text-ash",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$IconStatic$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["IconStatic"], {
                                                name: "security",
                                                size: 18,
                                                className: "text-slate"
                                            }, void 0, false, {
                                                fileName: "[project]/app/marketplace/[slug]/page.tsx",
                                                lineNumber: 436,
                                                columnNumber: 15
                                            }, this),
                                            "Security & confidentiality"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/marketplace/[slug]/page.tsx",
                                        lineNumber: 435,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-muted",
                                        children: service.securityNote
                                    }, void 0, false, {
                                        fileName: "[project]/app/marketplace/[slug]/page.tsx",
                                        lineNumber: 439,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/security",
                                                className: "text-xs uppercase tracking-[0.2em] text-slate",
                                                children: "Security posture"
                                            }, void 0, false, {
                                                fileName: "[project]/app/marketplace/[slug]/page.tsx",
                                                lineNumber: 441,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/legal",
                                                className: "text-xs uppercase tracking-[0.2em] text-slate",
                                                children: "Legal & compliance"
                                            }, void 0, false, {
                                                fileName: "[project]/app/marketplace/[slug]/page.tsx",
                                                lineNumber: 447,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/marketplace/[slug]/page.tsx",
                                        lineNumber: 440,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/marketplace/[slug]/page.tsx",
                                lineNumber: 434,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$MotionIn$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MotionIn"], {
                                className: "space-y-4 rounded-2xl border border-line/80 bg-soft p-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "flex items-center gap-2 text-lg font-semibold text-ash",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$IconStatic$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["IconStatic"], {
                                                name: "faq",
                                                size: 18,
                                                className: "text-slate"
                                            }, void 0, false, {
                                                fileName: "[project]/app/marketplace/[slug]/page.tsx",
                                                lineNumber: 458,
                                                columnNumber: 15
                                            }, this),
                                            "FAQ"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/marketplace/[slug]/page.tsx",
                                        lineNumber: 457,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-4 text-sm text-muted",
                                        children: service.faq.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-ash",
                                                        children: item.question
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/marketplace/[slug]/page.tsx",
                                                        lineNumber: 464,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "mt-2 text-muted",
                                                        children: item.answer
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/marketplace/[slug]/page.tsx",
                                                        lineNumber: 465,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, item.question, true, {
                                                fileName: "[project]/app/marketplace/[slug]/page.tsx",
                                                lineNumber: 463,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/marketplace/[slug]/page.tsx",
                                        lineNumber: 461,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/marketplace/[slug]/page.tsx",
                                lineNumber: 456,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$MotionIn$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MotionIn"], {
                                className: "card-animate flex flex-col items-start justify-between gap-6 rounded-2xl border border-line/80 bg-soft p-6 md:flex-row md:items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-xl font-semibold text-ash",
                                                children: "Request scope"
                                            }, void 0, false, {
                                                fileName: "[project]/app/marketplace/[slug]/page.tsx",
                                                lineNumber: 473,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-muted",
                                                children: "This step is required before any engagement. We respond within 2 business days."
                                            }, void 0, false, {
                                                fileName: "[project]/app/marketplace/[slug]/page.tsx",
                                                lineNumber: 474,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/marketplace/[slug]/page.tsx",
                                        lineNumber: 472,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                        href: requestScopeHref,
                                        className: "btn-animate btn-primary rounded-full px-6 py-2 text-xs uppercase tracking-[0.2em]",
                                        children: service.ctaLabel
                                    }, void 0, false, {
                                        fileName: "[project]/app/marketplace/[slug]/page.tsx",
                                        lineNumber: 479,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/marketplace/[slug]/page.tsx",
                                lineNumber: 471,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/marketplace/[slug]/page.tsx",
                        lineNumber: 228,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/marketplace/[slug]/page.tsx",
                lineNumber: 142,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/app/marketplace/[slug]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/marketplace/[slug]/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__19e7f79a._.js.map