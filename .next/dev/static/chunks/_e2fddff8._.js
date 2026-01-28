(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/content/services.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/marketplace/keywordSuggestions.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "keywordSuggestions",
    ()=>keywordSuggestions
]);
const keywordSuggestions = [
    {
        keyword: "delivery delays",
        synonyms: [
            "late delivery",
            "schedule slippage",
            "lead time"
        ],
        intentTags: [
            "delivery",
            "timeline",
            "schedule"
        ]
    },
    {
        keyword: "quality issues",
        synonyms: [
            "defects",
            "rework",
            "yield loss"
        ],
        intentTags: [
            "quality",
            "risk",
            "controls"
        ]
    },
    {
        keyword: "missed deadlines",
        synonyms: [
            "deadline slip",
            "late milestones",
            "schedule risk"
        ],
        intentTags: [
            "delivery",
            "governance",
            "timeline"
        ]
    },
    {
        keyword: "program out of control",
        synonyms: [
            "runaway program",
            "no governance",
            "unclear scope"
        ],
        intentTags: [
            "governance",
            "risk",
            "scope"
        ]
    },
    {
        keyword: "project recovery",
        synonyms: [
            "project takeover",
            "stabilization",
            "recovery"
        ],
        intentTags: [
            "stabilization",
            "delivery",
            "risk"
        ]
    },
    {
        keyword: "handover failure",
        synonyms: [
            "transition risk",
            "handover gap",
            "no ownership"
        ],
        intentTags: [
            "handover",
            "governance",
            "risk"
        ]
    },
    {
        keyword: "legacy systems",
        synonyms: [
            "legacy stack",
            "outdated systems",
            "technical debt"
        ],
        intentTags: [
            "architecture",
            "modernization",
            "integration"
        ]
    },
    {
        keyword: "poor architecture",
        synonyms: [
            "fragile design",
            "no target architecture",
            "ad hoc design"
        ],
        intentTags: [
            "architecture",
            "governance",
            "risk"
        ]
    },
    {
        keyword: "integration issues",
        synonyms: [
            "integration risk",
            "interface failures",
            "broken interfaces"
        ],
        intentTags: [
            "integration",
            "data",
            "risk"
        ]
    },
    {
        keyword: "it/ot integration",
        synonyms: [
            "industrial integration",
            "ot data",
            "plant connectivity"
        ],
        intentTags: [
            "it-ot",
            "industrial",
            "integration"
        ]
    },
    {
        keyword: "data inconsistency",
        synonyms: [
            "data mismatch",
            "data quality",
            "conflicting data"
        ],
        intentTags: [
            "data",
            "quality",
            "governance"
        ]
    },
    {
        keyword: "no real-time visibility",
        synonyms: [
            "no realtime visibility",
            "delayed signals",
            "blind spots"
        ],
        intentTags: [
            "realtime",
            "observability",
            "data"
        ]
    },
    {
        keyword: "ai pilot",
        synonyms: [
            "ml pilot",
            "ai proof",
            "model trial"
        ],
        intentTags: [
            "ai",
            "data",
            "decision"
        ]
    },
    {
        keyword: "decision support",
        synonyms: [
            "decision intelligence",
            "decision latency",
            "command workflow"
        ],
        intentTags: [
            "decision",
            "analytics",
            "governance"
        ]
    },
    {
        keyword: "audit readiness",
        synonyms: [
            "audit trail",
            "evidence pack",
            "compliance review"
        ],
        intentTags: [
            "audit",
            "compliance",
            "governance"
        ]
    },
    {
        keyword: "security posture",
        synonyms: [
            "security baseline",
            "control gaps",
            "risk posture"
        ],
        intentTags: [
            "security",
            "controls",
            "risk"
        ]
    },
    {
        keyword: "downtime",
        synonyms: [
            "outage",
            "service interruption",
            "availability"
        ],
        intentTags: [
            "resilience",
            "operations",
            "risk"
        ]
    },
    {
        keyword: "latency",
        synonyms: [
            "slow response",
            "delay",
            "performance"
        ],
        intentTags: [
            "performance",
            "realtime",
            "delivery"
        ]
    },
    {
        keyword: "incidents",
        synonyms: [
            "incident load",
            "recurring incidents",
            "instability"
        ],
        intentTags: [
            "resilience",
            "risk",
            "governance"
        ]
    },
    {
        keyword: "compliance",
        synonyms: [
            "compliance gaps",
            "policy alignment",
            "controls"
        ],
        intentTags: [
            "compliance",
            "audit",
            "security"
        ]
    },
    {
        keyword: "vendor failure",
        synonyms: [
            "supplier risk",
            "vendor instability",
            "third-party failure"
        ],
        intentTags: [
            "risk",
            "governance",
            "procurement"
        ]
    },
    {
        keyword: "delivery slip",
        synonyms: [
            "schedule slip",
            "late delivery",
            "missed milestones"
        ],
        intentTags: [
            "delivery",
            "timeline",
            "risk"
        ]
    },
    {
        keyword: "scope creep",
        synonyms: [
            "uncontrolled scope",
            "requirements drift",
            "scope risk"
        ],
        intentTags: [
            "scope",
            "governance",
            "risk"
        ]
    },
    {
        keyword: "data silos",
        synonyms: [
            "siloed data",
            "data fragmentation",
            "no single source"
        ],
        intentTags: [
            "data",
            "integration",
            "architecture"
        ]
    },
    {
        keyword: "real-time",
        synonyms: [
            "realtime",
            "streaming",
            "live telemetry"
        ],
        intentTags: [
            "realtime",
            "data",
            "observability"
        ]
    },
    {
        keyword: "observability",
        synonyms: [
            "telemetry",
            "monitoring",
            "visibility"
        ],
        intentTags: [
            "observability",
            "performance",
            "resilience"
        ]
    },
    {
        keyword: "security gaps",
        synonyms: [
            "control gaps",
            "weak controls",
            "exposure"
        ],
        intentTags: [
            "security",
            "controls",
            "risk"
        ]
    },
    {
        keyword: "access control",
        synonyms: [
            "access governance",
            "identity control",
            "least privilege"
        ],
        intentTags: [
            "security",
            "governance",
            "controls"
        ]
    },
    {
        keyword: "procurement",
        synonyms: [
            "procurement-ready",
            "sourcing",
            "vendor selection"
        ],
        intentTags: [
            "procurement",
            "governance",
            "audit"
        ]
    },
    {
        keyword: "rfp",
        synonyms: [
            "rfp support",
            "sow",
            "statement of work"
        ],
        intentTags: [
            "procurement",
            "governance",
            "delivery"
        ]
    },
    {
        keyword: "governance",
        synonyms: [
            "decision rights",
            "governance pack",
            "operating model"
        ],
        intentTags: [
            "governance",
            "risk",
            "controls"
        ]
    },
    {
        keyword: "risk",
        synonyms: [
            "risk register",
            "risk posture",
            "risk gating"
        ],
        intentTags: [
            "risk",
            "governance",
            "audit"
        ]
    },
    {
        keyword: "ot",
        synonyms: [
            "plant",
            "industrial",
            "control systems"
        ],
        intentTags: [
            "industrial",
            "it-ot",
            "integration"
        ]
    },
    {
        keyword: "throughput",
        synonyms: [
            "bottleneck",
            "capacity",
            "flow"
        ],
        intentTags: [
            "industrial",
            "performance",
            "delivery"
        ]
    },
    {
        keyword: "bottleneck",
        synonyms: [
            "constraint",
            "slow point",
            "capacity limit"
        ],
        intentTags: [
            "industrial",
            "performance",
            "delivery"
        ]
    },
    {
        keyword: "staffing",
        synonyms: [
            "skills gap",
            "coverage gap",
            "resource shortfall"
        ],
        intentTags: [
            "operate",
            "assurance",
            "delivery"
        ]
    },
    {
        keyword: "handover",
        synonyms: [
            "transition",
            "runbooks",
            "operational readiness"
        ],
        intentTags: [
            "handover",
            "governance",
            "delivery"
        ]
    },
    {
        keyword: "incident response",
        synonyms: [
            "response governance",
            "incident playbook",
            "response readiness"
        ],
        intentTags: [
            "governance",
            "security",
            "resilience"
        ]
    },
    {
        keyword: "change request",
        synonyms: [
            "change control",
            "cr approval",
            "scope change"
        ],
        intentTags: [
            "change",
            "governance",
            "risk"
        ]
    },
    {
        keyword: "billing",
        synonyms: [
            "invoice",
            "commercials",
            "finance"
        ],
        intentTags: [
            "billing",
            "procurement",
            "governance"
        ]
    },
    {
        keyword: "invoice",
        synonyms: [
            "invoice accuracy",
            "payment",
            "billing"
        ],
        intentTags: [
            "billing",
            "finance",
            "procurement"
        ]
    },
    {
        keyword: "po",
        synonyms: [
            "purchase order",
            "po alignment",
            "po reference"
        ],
        intentTags: [
            "procurement",
            "billing",
            "governance"
        ]
    },
    {
        keyword: "cost center",
        synonyms: [
            "cost allocation",
            "chargeback",
            "budget"
        ],
        intentTags: [
            "billing",
            "governance",
            "procurement"
        ]
    },
    {
        keyword: "system drift",
        synonyms: [
            "configuration drift",
            "baseline drift",
            "runtime drift"
        ],
        intentTags: [
            "controls",
            "resilience",
            "risk"
        ]
    },
    {
        keyword: "unknown dependencies",
        synonyms: [
            "hidden dependencies",
            "unknown interfaces",
            "dependency risk"
        ],
        intentTags: [
            "architecture",
            "risk",
            "integration"
        ]
    },
    {
        keyword: "unclear ownership",
        synonyms: [
            "ownership gap",
            "no decision owner",
            "ownership risk"
        ],
        intentTags: [
            "governance",
            "risk",
            "delivery"
        ]
    },
    {
        keyword: "missing runbooks",
        synonyms: [
            "no runbooks",
            "operational gap",
            "handover gap"
        ],
        intentTags: [
            "handover",
            "operate",
            "governance"
        ]
    },
    {
        keyword: "audit trail",
        synonyms: [
            "evidence trail",
            "audit log",
            "traceability"
        ],
        intentTags: [
            "audit",
            "compliance",
            "governance"
        ]
    },
    {
        keyword: "resilience",
        synonyms: [
            "continuity",
            "recovery",
            "fault tolerance"
        ],
        intentTags: [
            "resilience",
            "risk",
            "operations"
        ]
    },
    {
        keyword: "integration security",
        synonyms: [
            "secure integration",
            "trusted interfaces",
            "control boundaries"
        ],
        intentTags: [
            "security",
            "integration",
            "controls"
        ]
    },
    {
        keyword: "delivery planning",
        synonyms: [
            "milestone plan",
            "release plan",
            "sequencing"
        ],
        intentTags: [
            "delivery",
            "governance",
            "timeline"
        ]
    },
    {
        keyword: "acceptance criteria",
        synonyms: [
            "definition of done",
            "acceptance gates",
            "sign-off"
        ],
        intentTags: [
            "governance",
            "audit",
            "delivery"
        ]
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ServiceFilters.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ServiceFilters",
    ()=>ServiceFilters
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$content$2f$services$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/content/services.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/icons/Icon.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$marketplace$2f$keywordSuggestions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/marketplace/keywordSuggestions.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const suggestionKeywords = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$marketplace$2f$keywordSuggestions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keywordSuggestions"].slice(0, 16).map((item)=>item.keyword);
const filterGroups = [
    {
        key: "domain",
        label: "Domain",
        options: __TURBOPACK__imported__module__$5b$project$5d2f$content$2f$services$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filterOptions"].domains
    },
    {
        key: "engagement",
        label: "Engagement type",
        options: __TURBOPACK__imported__module__$5b$project$5d2f$content$2f$services$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filterOptions"].engagementTypes
    },
    {
        key: "industry",
        label: "Industry",
        options: __TURBOPACK__imported__module__$5b$project$5d2f$content$2f$services$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filterOptions"].industries
    },
    {
        key: "urgency",
        label: "Urgency",
        options: __TURBOPACK__imported__module__$5b$project$5d2f$content$2f$services$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filterOptions"].urgency
    }
];
function ServiceFilters() {
    _s();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const selected = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ServiceFilters.useMemo[selected]": ()=>{
            const entries = {};
            filterGroups.forEach({
                "ServiceFilters.useMemo[selected]": (group)=>{
                    const value = searchParams.get(group.key);
                    entries[group.key] = value ? value.split(",").map({
                        "ServiceFilters.useMemo[selected]": (item)=>item.trim()
                    }["ServiceFilters.useMemo[selected]"]).filter(Boolean) : [];
                }
            }["ServiceFilters.useMemo[selected]"]);
            return entries;
        }
    }["ServiceFilters.useMemo[selected]"], [
        searchParams
    ]);
    const queryValue = searchParams.get("q") ?? "";
    const [queryInput, setQueryInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(queryValue);
    const debounceRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const hasFilters = Object.values(selected).some((value)=>value.length > 0) || queryInput.length > 0;
    const updateParam = (key, values)=>{
        const params = new URLSearchParams(searchParams.toString());
        if (values.length === 0) {
            params.delete(key);
        } else {
            params.set(key, values.join(","));
        }
        const query = params.toString();
        router.replace(`${pathname}${query ? `?${query}` : ""}`, {
            scroll: false
        });
    };
    const updateQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ServiceFilters.useCallback[updateQuery]": (value)=>{
            const currentValue = searchParams.get("q") ?? "";
            if (value === currentValue) {
                return;
            }
            const params = new URLSearchParams(searchParams.toString());
            if (value.trim().length === 0) {
                params.delete("q");
                params.delete("query");
            } else {
                params.set("q", value);
                params.delete("query");
            }
            const query = params.toString();
            router.replace(`${pathname}${query ? `?${query}` : ""}`, {
                scroll: false
            });
        }
    }["ServiceFilters.useCallback[updateQuery]"], [
        pathname,
        router,
        searchParams
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ServiceFilters.useEffect": ()=>{
            setQueryInput(queryValue);
        }
    }["ServiceFilters.useEffect"], [
        queryValue
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ServiceFilters.useEffect": ()=>{
            if (queryInput === queryValue) {
                return;
            }
            if (debounceRef.current) {
                clearTimeout(debounceRef.current);
            }
            debounceRef.current = setTimeout({
                "ServiceFilters.useEffect": ()=>{
                    updateQuery(queryInput);
                }
            }["ServiceFilters.useEffect"], 250);
            return ({
                "ServiceFilters.useEffect": ()=>{
                    if (debounceRef.current) {
                        clearTimeout(debounceRef.current);
                    }
                }
            })["ServiceFilters.useEffect"];
        }
    }["ServiceFilters.useEffect"], [
        queryInput,
        queryValue,
        updateQuery
    ]);
    const updateQueryImmediate = (value)=>{
        const params = new URLSearchParams(searchParams.toString());
        const currentValue = searchParams.get("q") ?? "";
        if (value === currentValue) {
            return;
        }
        if (value.trim().length === 0) {
            params.delete("q");
            params.delete("query");
        } else {
            params.set("q", value);
            params.delete("query");
        }
        const query = params.toString();
        router.replace(`${pathname}${query ? `?${query}` : ""}`, {
            scroll: false
        });
    };
    const applySuggestion = (value)=>{
        const trimmed = queryValue.trim();
        const tokens = trimmed.toLowerCase().split(/[,\s]+/).map((token)=>token.trim()).filter(Boolean);
        if (tokens.includes(value.toLowerCase())) {
            return;
        }
        const nextValue = trimmed ? `${trimmed}, ${value}` : value;
        setQueryInput(nextValue);
        updateQueryImmediate(nextValue);
    };
    const toggleValue = (key, value)=>{
        const current = new Set(selected[key]);
        if (current.has(value)) {
            current.delete(value);
        } else {
            current.add(value);
        }
        updateParam(key, Array.from(current));
    };
    const clearFilters = ()=>{
        router.replace(pathname, {
            scroll: false
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6 rounded-2xl border border-line/80 bg-soft p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-slate",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                name: "filter",
                                size: 16,
                                strokeWidth: 1.25,
                                className: "text-slate",
                                animated: false,
                                decorative: true
                            }, void 0, false, {
                                fileName: "[project]/components/ServiceFilters.tsx",
                                lineNumber: 157,
                                columnNumber: 11
                            }, this),
                            "Filters"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ServiceFilters.tsx",
                        lineNumber: 156,
                        columnNumber: 9
                    }, this),
                    hasFilters && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: clearFilters,
                        className: "btn-animate text-xs uppercase tracking-[0.2em] text-slate transition hover:text-ash",
                        children: "Clear"
                    }, void 0, false, {
                        fileName: "[project]/components/ServiceFilters.tsx",
                        lineNumber: 168,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ServiceFilters.tsx",
                lineNumber: 155,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "space-y-2 text-sm text-slate",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs uppercase tracking-[0.2em] text-slate",
                        children: "Describe your problem"
                    }, void 0, false, {
                        fileName: "[project]/components/ServiceFilters.tsx",
                        lineNumber: 178,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "pointer-events-none absolute left-3 top-2.5 text-slate",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                    name: "search",
                                    size: 16,
                                    strokeWidth: 1.25,
                                    className: "text-slate",
                                    animated: false,
                                    decorative: true
                                }, void 0, false, {
                                    fileName: "[project]/components/ServiceFilters.tsx",
                                    lineNumber: 183,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/ServiceFilters.tsx",
                                lineNumber: 182,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                value: queryInput,
                                onChange: (event)=>setQueryInput(event.target.value),
                                className: "w-full rounded-xl border border-line bg-ink py-2 pl-10 pr-3 text-ash",
                                placeholder: "delivery delays, quality issues, vendor lock-in, audit readiness..."
                            }, void 0, false, {
                                fileName: "[project]/components/ServiceFilters.tsx",
                                lineNumber: 192,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ServiceFilters.tsx",
                        lineNumber: 181,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ServiceFilters.tsx",
                lineNumber: 177,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-xs uppercase tracking-[0.2em] text-slate",
                        children: "Suggestions"
                    }, void 0, false, {
                        fileName: "[project]/components/ServiceFilters.tsx",
                        lineNumber: 201,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-2",
                        children: suggestionKeywords.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>applySuggestion(item),
                                className: "btn-animate rounded-full border border-line px-3 py-1 text-[0.65rem] uppercase tracking-[0.2em] text-slate transition hover:border-slate",
                                children: item
                            }, item, false, {
                                fileName: "[project]/components/ServiceFilters.tsx",
                                lineNumber: 206,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/ServiceFilters.tsx",
                        lineNumber: 204,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ServiceFilters.tsx",
                lineNumber: 200,
                columnNumber: 7
            }, this),
            filterGroups.map((group)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-slate",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                    name: "filter",
                                    size: 14,
                                    strokeWidth: 1.25,
                                    className: "text-slate",
                                    animated: false,
                                    decorative: true
                                }, void 0, false, {
                                    fileName: "[project]/components/ServiceFilters.tsx",
                                    lineNumber: 220,
                                    columnNumber: 13
                                }, this),
                                group.label
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ServiceFilters.tsx",
                            lineNumber: 219,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap gap-2",
                            children: group.options.map((option)=>{
                                const isActive = selected[group.key]?.includes(option);
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>toggleValue(group.key, option),
                                    "aria-pressed": isActive,
                                    className: `btn-animate rounded-full border px-3 py-1 text-[0.65rem] uppercase tracking-[0.2em] transition ${isActive ? "border-ash text-ash" : "border-line text-slate hover:border-slate"}`,
                                    children: option
                                }, option, false, {
                                    fileName: "[project]/components/ServiceFilters.tsx",
                                    lineNumber: 234,
                                    columnNumber: 17
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/components/ServiceFilters.tsx",
                            lineNumber: 230,
                            columnNumber: 11
                        }, this)
                    ]
                }, group.key, true, {
                    fileName: "[project]/components/ServiceFilters.tsx",
                    lineNumber: 218,
                    columnNumber: 9
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/components/ServiceFilters.tsx",
        lineNumber: 154,
        columnNumber: 5
    }, this);
}
_s(ServiceFilters, "Nc4k/ZvwSahlguvIWtLNl35kBl0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = ServiceFilters;
var _c;
__turbopack_context__.k.register(_c, "ServiceFilters");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/commerce.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ServiceCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ServiceCard",
    ()=>ServiceCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$MotionIn$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/MotionIn.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/icons/Icon.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$commerce$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/commerce.ts [app-client] (ecmascript)");
;
;
;
;
;
const domainIconMap = {
    AI: "ai",
    Industrial: "industrial",
    Security: "security",
    "IT-OT": "itot"
};
const engagementIconMap = {
    Audit: "audit",
    Architecture: "design",
    Build: "build",
    Operate: "operate"
};
const deliveryIconMap = {
    remote: "remote",
    hybrid: "hybrid",
    "on-site": "onsite"
};
function ServiceCard({ service }) {
    const primaryDomain = service.domains[0] ?? "Security";
    const primaryEngagement = service.engagementTypes[0] ?? "Architecture";
    const domainIcon = domainIconMap[primaryDomain] ?? "security";
    const engagementIcon = engagementIconMap[primaryEngagement] ?? "design";
    const deliveryIcon = deliveryIconMap[service.defaultMode] ?? "remote";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$MotionIn$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MotionIn"], {
        hover: true,
        className: "h-full",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: `/marketplace/${service.slug}`,
            "data-service-link": service.slug,
            className: "card-animate flex h-full flex-col justify-between rounded-2xl border border-line/80 bg-soft p-6 transition hover:border-slate",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap items-center gap-2 text-[0.6rem] uppercase tracking-[0.2em] text-slate",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "inline-flex items-center gap-2 rounded-full border border-line px-3 py-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                            name: domainIcon,
                                            size: 14,
                                            strokeWidth: 1.25,
                                            className: "text-slate",
                                            entrance: false
                                        }, void 0, false, {
                                            fileName: "[project]/components/ServiceCard.tsx",
                                            lineNumber: 54,
                                            columnNumber: 15
                                        }, this),
                                        primaryDomain
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ServiceCard.tsx",
                                    lineNumber: 53,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "inline-flex items-center gap-2 rounded-full border border-line px-3 py-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                            name: engagementIcon,
                                            size: 14,
                                            strokeWidth: 1.25,
                                            className: "text-slate",
                                            entrance: false
                                        }, void 0, false, {
                                            fileName: "[project]/components/ServiceCard.tsx",
                                            lineNumber: 64,
                                            columnNumber: 15
                                        }, this),
                                        primaryEngagement
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ServiceCard.tsx",
                                    lineNumber: 63,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "inline-flex items-center gap-2 rounded-full border border-line px-3 py-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                            name: deliveryIcon,
                                            size: 14,
                                            strokeWidth: 1.25,
                                            className: "text-slate",
                                            entrance: false
                                        }, void 0, false, {
                                            fileName: "[project]/components/ServiceCard.tsx",
                                            lineNumber: 74,
                                            columnNumber: 15
                                        }, this),
                                        service.defaultMode
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ServiceCard.tsx",
                                    lineNumber: 73,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ServiceCard.tsx",
                            lineNumber: 52,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-lg font-semibold text-ash",
                            children: service.title
                        }, void 0, false, {
                            fileName: "[project]/components/ServiceCard.tsx",
                            lineNumber: 84,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-muted",
                            children: service.oneLine
                        }, void 0, false, {
                            fileName: "[project]/components/ServiceCard.tsx",
                            lineNumber: 85,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "space-y-2 text-sm text-muted",
                            children: service.deliverables.slice(0, 4).map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: "flex gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "mt-1 h-2 w-2 rounded-full bg-slate"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ServiceCard.tsx",
                                            lineNumber: 89,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: item
                                        }, void 0, false, {
                                            fileName: "[project]/components/ServiceCard.tsx",
                                            lineNumber: 90,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, item, true, {
                                    fileName: "[project]/components/ServiceCard.tsx",
                                    lineNumber: 88,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/ServiceCard.tsx",
                            lineNumber: 86,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ServiceCard.tsx",
                    lineNumber: 51,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-6 space-y-3 text-sm text-muted",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.2em] text-slate",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "rounded-full border border-line px-3 py-1",
                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$commerce$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDurationRange"])(service)
                                }, void 0, false, {
                                    fileName: "[project]/components/ServiceCard.tsx",
                                    lineNumber: 97,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "rounded-full border border-line px-3 py-1",
                                    children: service.defaultMode
                                }, void 0, false, {
                                    fileName: "[project]/components/ServiceCard.tsx",
                                    lineNumber: 100,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ServiceCard.tsx",
                            lineNumber: 96,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-sm font-semibold text-ash",
                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$commerce$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatProjectRange"])(service)
                        }, void 0, false, {
                            fileName: "[project]/components/ServiceCard.tsx",
                            lineNumber: 104,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-xs text-muted",
                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$commerce$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatHourlyRange"])(service)
                        }, void 0, false, {
                            fileName: "[project]/components/ServiceCard.tsx",
                            lineNumber: 107,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-xs text-muted",
                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$commerce$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatIncludesLine"])(service)
                        }, void 0, false, {
                            fileName: "[project]/components/ServiceCard.tsx",
                            lineNumber: 108,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-xs text-muted",
                            children: service.onsitePolicy.text
                        }, void 0, false, {
                            fileName: "[project]/components/ServiceCard.tsx",
                            lineNumber: 109,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pt-2 text-xs uppercase tracking-[0.2em] text-ash",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "inline-flex items-center gap-2",
                                children: [
                                    service.ctaLabel,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                        name: "chevronRight",
                                        size: 14,
                                        strokeWidth: 1.25,
                                        className: "text-slate",
                                        entrance: false
                                    }, void 0, false, {
                                        fileName: "[project]/components/ServiceCard.tsx",
                                        lineNumber: 113,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ServiceCard.tsx",
                                lineNumber: 111,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/ServiceCard.tsx",
                            lineNumber: 110,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ServiceCard.tsx",
                    lineNumber: 95,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/ServiceCard.tsx",
            lineNumber: 46,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ServiceCard.tsx",
        lineNumber: 45,
        columnNumber: 5
    }, this);
}
_c = ServiceCard;
var _c;
__turbopack_context__.k.register(_c, "ServiceCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/sort.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "sortServices",
    ()=>sortServices
]);
const urgencyOrder = [
    "2-4 weeks",
    "6-12 weeks",
    "3-6 months"
];
const engagementOrder = [
    "Audit",
    "Architecture",
    "Build",
    "Operate"
];
const getPriority = (values, order)=>{
    const indexes = values.map((value)=>order.indexOf(value)).filter((index)=>index >= 0);
    return indexes.length > 0 ? Math.min(...indexes) : order.length;
};
const compareText = (left, right)=>{
    const a = left.toLowerCase();
    const b = right.toLowerCase();
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
};
const sortServices = (items, options = {})=>{
    const { relevanceScores = {}, useRelevance = false } = options;
    return [
        ...items
    ].sort((a, b)=>{
        if (useRelevance) {
            const aScore = relevanceScores[a.slug] ?? 0;
            const bScore = relevanceScores[b.slug] ?? 0;
            if (aScore !== bScore) {
                return bScore - aScore;
            }
        }
        const urgencyCompare = getPriority(a.urgency, urgencyOrder) - getPriority(b.urgency, urgencyOrder);
        if (urgencyCompare !== 0) return urgencyCompare;
        const engagementCompare = getPriority(a.engagementTypes, engagementOrder) - getPriority(b.engagementTypes, engagementOrder);
        if (engagementCompare !== 0) return engagementCompare;
        const titleCompare = compareText(a.title, b.title);
        if (titleCompare !== 0) return titleCompare;
        return compareText(a.slug, b.slug);
    });
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/marketplace/MarketplaceClient.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MarketplaceClient",
    ()=>MarketplaceClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$content$2f$services$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/content/services.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ServiceFilters$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ServiceFilters.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ServiceCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ServiceCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/icons/Icon.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$marketplace$2f$keywordSuggestions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/marketplace/keywordSuggestions.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sort$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/sort.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/i18n.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
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
const normalizeText = (value)=>value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
const tokenizeQuery = (value)=>normalizeText(value).split(/[,\s]+/).map((token)=>token.trim()).filter(Boolean);
const suggestionIndex = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$marketplace$2f$keywordSuggestions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keywordSuggestions"].map((suggestion)=>({
        keyword: normalizeText(suggestion.keyword),
        terms: [
            normalizeText(suggestion.keyword),
            ...suggestion.synonyms.map((item)=>normalizeText(item))
        ],
        intentTags: suggestion.intentTags.map((item)=>normalizeText(item))
    }));
const mapUrgencyToTimeframe = (urgency)=>{
    if (urgency === "high") return "Immediate";
    if (urgency === "low") return "Strategic";
    return "1-3 months";
};
function MarketplaceClient() {
    _s();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const prefersReducedMotion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    const [intakeText, setIntakeText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [intakeStatus, setIntakeStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("idle");
    const [intakeSummary, setIntakeSummary] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [intakeRecommendations, setIntakeRecommendations] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [intakeErrorKey, setIntakeErrorKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [analysisStep, setAnalysisStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [shortlist, setShortlist] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [shortlistMax, setShortlistMax] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(3);
    const [shortlistOpen, setShortlistOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [shortlistNoticeKey, setShortlistNoticeKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [prefillOpen, setPrefillOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [summaryDraft, setSummaryDraft] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const analysisTimersRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const maxWords = 777;
    const intakeWordCount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "MarketplaceClient.useMemo[intakeWordCount]": ()=>{
            if (!intakeText.trim()) return 0;
            return intakeText.trim().split(/\s+/).filter(Boolean).length;
        }
    }["MarketplaceClient.useMemo[intakeWordCount]"], [
        intakeText
    ]);
    const clearAnalysisTimers = ()=>{
        analysisTimersRef.current.forEach((timer)=>clearTimeout(timer));
        analysisTimersRef.current = [];
    };
    const startAnalysisStepper = ()=>{
        clearAnalysisTimers();
        setAnalysisStep(0);
        if (prefersReducedMotion) {
            setAnalysisStep(2);
            return;
        }
        analysisTimersRef.current = [
            window.setTimeout(()=>setAnalysisStep(1), 260),
            window.setTimeout(()=>setAnalysisStep(2), 520)
        ];
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MarketplaceClient.useEffect": ()=>{
            return ({
                "MarketplaceClient.useEffect": ()=>{
                    clearAnalysisTimers();
                }
            })["MarketplaceClient.useEffect"];
        }
    }["MarketplaceClient.useEffect"], []);
    const serviceBySlug = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "MarketplaceClient.useMemo[serviceBySlug]": ()=>new Map(__TURBOPACK__imported__module__$5b$project$5d2f$content$2f$services$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["services"].map({
                "MarketplaceClient.useMemo[serviceBySlug]": (service)=>[
                        service.slug,
                        service
                    ]
            }["MarketplaceClient.useMemo[serviceBySlug]"]))
    }["MarketplaceClient.useMemo[serviceBySlug]"], []);
    const filteredServices = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "MarketplaceClient.useMemo[filteredServices]": ()=>{
            const getValues = {
                "MarketplaceClient.useMemo[filteredServices].getValues": (key)=>{
                    const value = searchParams.get(key);
                    return value ? value.split(",").map({
                        "MarketplaceClient.useMemo[filteredServices].getValues": (item)=>item.trim()
                    }["MarketplaceClient.useMemo[filteredServices].getValues"]).filter(Boolean) : [];
                }
            }["MarketplaceClient.useMemo[filteredServices].getValues"];
            const domain = getValues("domain");
            const engagement = getValues("engagement");
            const industry = getValues("industry");
            const urgency = getValues("urgency");
            const query = searchParams.get("q") ?? "";
            const tokens = tokenizeQuery(query);
            const expandedTokens = tokens.map({
                "MarketplaceClient.useMemo[filteredServices].expandedTokens": (token)=>{
                    const matches = suggestionIndex.filter({
                        "MarketplaceClient.useMemo[filteredServices].expandedTokens.matches": (suggestion)=>suggestion.terms.some({
                                "MarketplaceClient.useMemo[filteredServices].expandedTokens.matches": (term)=>term.includes(token) || token.includes(term)
                            }["MarketplaceClient.useMemo[filteredServices].expandedTokens.matches"])
                    }["MarketplaceClient.useMemo[filteredServices].expandedTokens.matches"]);
                    const expansions = new Set([
                        token,
                        ...matches.flatMap({
                            "MarketplaceClient.useMemo[filteredServices].expandedTokens": (item)=>[
                                    ...item.terms,
                                    ...item.intentTags
                                ]
                        }["MarketplaceClient.useMemo[filteredServices].expandedTokens"])
                    ]);
                    return Array.from(expansions).filter(Boolean);
                }
            }["MarketplaceClient.useMemo[filteredServices].expandedTokens"]);
            const matchesFilters = __TURBOPACK__imported__module__$5b$project$5d2f$content$2f$services$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["services"].map({
                "MarketplaceClient.useMemo[filteredServices].matchesFilters": (service)=>{
                    const domainMatch = domain.length === 0 || domain.some({
                        "MarketplaceClient.useMemo[filteredServices].matchesFilters": (item)=>service.domains.includes(item)
                    }["MarketplaceClient.useMemo[filteredServices].matchesFilters"]);
                    const engagementMatch = engagement.length === 0 || engagement.some({
                        "MarketplaceClient.useMemo[filteredServices].matchesFilters": (item)=>service.engagementTypes.includes(item)
                    }["MarketplaceClient.useMemo[filteredServices].matchesFilters"]);
                    const industryMatch = industry.length === 0 || industry.some({
                        "MarketplaceClient.useMemo[filteredServices].matchesFilters": (item)=>service.industries.includes(item)
                    }["MarketplaceClient.useMemo[filteredServices].matchesFilters"]);
                    const urgencyMatch = urgency.length === 0 || urgency.some({
                        "MarketplaceClient.useMemo[filteredServices].matchesFilters": (item)=>service.urgency.includes(item)
                    }["MarketplaceClient.useMemo[filteredServices].matchesFilters"]);
                    const searchText = normalizeText([
                        service.title,
                        service.oneLine,
                        service.problemStatement,
                        service.outcomes.join(" "),
                        service.tags.join(" ")
                    ].join(" "));
                    const queryMatch = tokens.length === 0 || expandedTokens.every({
                        "MarketplaceClient.useMemo[filteredServices].matchesFilters": (variants)=>variants.some({
                                "MarketplaceClient.useMemo[filteredServices].matchesFilters": (variant)=>searchText.includes(variant)
                            }["MarketplaceClient.useMemo[filteredServices].matchesFilters"])
                    }["MarketplaceClient.useMemo[filteredServices].matchesFilters"]);
                    const relevanceScore = expandedTokens.reduce({
                        "MarketplaceClient.useMemo[filteredServices].matchesFilters.relevanceScore": (score, variants)=>score + (variants.some({
                                "MarketplaceClient.useMemo[filteredServices].matchesFilters.relevanceScore": (variant)=>searchText.includes(variant)
                            }["MarketplaceClient.useMemo[filteredServices].matchesFilters.relevanceScore"]) ? 1 : 0)
                    }["MarketplaceClient.useMemo[filteredServices].matchesFilters.relevanceScore"], 0);
                    return {
                        service,
                        relevanceScore,
                        matches: domainMatch && engagementMatch && industryMatch && urgencyMatch && queryMatch
                    };
                }
            }["MarketplaceClient.useMemo[filteredServices].matchesFilters"]);
            const relevanceScores = matchesFilters.reduce({
                "MarketplaceClient.useMemo[filteredServices].relevanceScores": (acc, item)=>{
                    acc[item.service.slug] = item.relevanceScore;
                    return acc;
                }
            }["MarketplaceClient.useMemo[filteredServices].relevanceScores"], {});
            const sorted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sort$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sortServices"])(matchesFilters.filter({
                "MarketplaceClient.useMemo[filteredServices].sorted": (item)=>item.matches
            }["MarketplaceClient.useMemo[filteredServices].sorted"]).map({
                "MarketplaceClient.useMemo[filteredServices].sorted": (item)=>item.service
            }["MarketplaceClient.useMemo[filteredServices].sorted"]), {
                relevanceScores,
                useRelevance: tokens.length > 0
            });
            return sorted;
        }
    }["MarketplaceClient.useMemo[filteredServices]"], [
        searchParams
    ]);
    const queryParam = searchParams.get("q") ?? "";
    const requestScopeHref = queryParam ? `/request-scope?problem=${encodeURIComponent(queryParam)}` : "/request-scope";
    const handleRecommend = async ()=>{
        setIntakeErrorKey(null);
        setShortlistNoticeKey(null);
        if (!intakeText.trim()) {
            setIntakeRecommendations([]);
            setIntakeSummary(null);
            setIntakeStatus("error");
            setIntakeErrorKey("marketplace.intake.error.briefRequired");
            return;
        }
        if (intakeWordCount > maxWords) {
            setIntakeRecommendations([]);
            setIntakeSummary(null);
            setIntakeStatus("error");
            setIntakeErrorKey("marketplace.intake.error.briefTooLong");
            return;
        }
        setIntakeStatus("analyzing");
        setIntakeRecommendations([]);
        setIntakeSummary(null);
        setShortlist([]);
        startAnalysisStepper();
        try {
            const response = await fetch("/api/marketplace/intake", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    brief: intakeText
                })
            });
            const data = await response.json();
            if (!response.ok) {
                setIntakeStatus("error");
                setIntakeErrorKey(data.messageKey ?? "marketplace.intake.error.generic");
                return;
            }
            setIntakeSummary(data.summary);
            setSummaryDraft(data.summary?.text ?? "");
            setIntakeRecommendations(data.recommendations ?? []);
            setShortlistMax(data.shortlistHint?.max ?? 3);
            if (!data.recommendations || data.recommendations.length === 0) {
                setIntakeStatus("error");
                setIntakeErrorKey("marketplace.intake.error.noMatches");
            } else {
                setIntakeStatus("done");
            }
        } catch  {
            setIntakeStatus("error");
            setIntakeErrorKey("marketplace.intake.error.generic");
        }
    };
    const handleClear = ()=>{
        clearAnalysisTimers();
        setIntakeText("");
        setIntakeSummary(null);
        setIntakeRecommendations([]);
        setIntakeErrorKey(null);
        setIntakeStatus("idle");
        setShortlist([]);
        setShortlistNoticeKey(null);
    };
    const toggleShortlist = (slug)=>{
        setShortlistNoticeKey(null);
        setShortlist((prev)=>{
            if (prev.includes(slug)) {
                return prev.filter((item)=>item !== slug);
            }
            if (prev.length >= shortlistMax) {
                setShortlistNoticeKey("marketplace.intake.shortlist.limit");
                return prev;
            }
            return [
                ...prev,
                slug
            ];
        });
        setShortlistOpen(true);
    };
    const primaryRecommendation = intakeRecommendations[0];
    const additionalRecommendations = intakeRecommendations.slice(1);
    const shortlistServices = shortlist.map((slug)=>serviceBySlug.get(slug)).filter((service)=>Boolean(service));
    const fallbackService = primaryRecommendation ? serviceBySlug.get(primaryRecommendation.slug) : undefined;
    const prefillServices = shortlistServices.length > 0 ? shortlistServices : fallbackService ? [
        fallbackService
    ] : [];
    const handleGenerateScope = ()=>{
        if (!summaryDraft) {
            setSummaryDraft(intakeSummary?.text ?? intakeText.trim());
        }
        setPrefillOpen(true);
        setShortlistOpen(false);
    };
    const handleContinue = ()=>{
        const selectedSlugs = shortlist.length > 0 ? shortlist : primaryRecommendation ? [
            primaryRecommendation.slug
        ] : [];
        const primarySlug = selectedSlugs[0] ?? "";
        const primaryService = primarySlug ? serviceBySlug.get(primarySlug) : undefined;
        const mode = primaryService?.defaultMode ?? "remote";
        const timeframe = mapUrgencyToTimeframe(intakeSummary?.urgency);
        const safeNote = summaryDraft.replace(/\s+/g, " ").trim().slice(0, 140);
        const url = new URL("/request-scope", window.location.origin);
        if (primarySlug) {
            url.searchParams.set("service", primarySlug);
            url.searchParams.set("mode", mode);
        }
        if (safeNote) {
            url.searchParams.set("note", safeNote);
        }
        if ("TURBOPACK compile-time truthy", 1) {
            url.searchParams.set("timeframe", timeframe);
        }
        router.push(`${url.pathname}${url.search}`);
    };
    const analysisSteps = [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("marketplace.intake.analyzing.step.extract"),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("marketplace.intake.analyzing.step.match"),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("marketplace.intake.analyzing.step.recommend")
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid gap-10 lg:grid-cols-[280px_minmax(0,1fr)_280px]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ServiceFilters$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ServiceFilters"], {}, void 0, false, {
                fileName: "[project]/app/marketplace/MarketplaceClient.tsx",
                lineNumber: 366,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "surface-card rounded-2xl border border-line/80 bg-soft p-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs uppercase tracking-[0.3em] text-slate",
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("marketplace.intake.title")
                                    }, void 0, false, {
                                        fileName: "[project]/app/marketplace/MarketplaceClient.tsx",
                                        lineNumber: 370,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-lg font-semibold text-ash",
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("marketplace.intake.subtitle")
                                    }, void 0, false, {
                                        fileName: "[project]/app/marketplace/MarketplaceClient.tsx",
                                        lineNumber: 373,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-muted",
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("marketplace.intake.description")
                                    }, void 0, false, {
                                        fileName: "[project]/app/marketplace/MarketplaceClient.tsx",
                                        lineNumber: 376,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/marketplace/MarketplaceClient.tsx",
                                lineNumber: 369,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-4 space-y-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "text-sm text-slate",
                                        children: [
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("marketplace.intake.brief.label"),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                value: intakeText,
                                                onChange: (event)=>setIntakeText(event.target.value),
                                                rows: 4,
                                                className: "mt-2 w-full rounded-xl border border-line bg-ink px-4 py-3 text-sm text-ash",
                                                placeholder: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("marketplace.intake.brief.placeholder")
                                            }, void 0, false, {
                                                fileName: "[project]/app/marketplace/MarketplaceClient.tsx",
                                                lineNumber: 383,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/marketplace/MarketplaceClient.tsx",
                                        lineNumber: 381,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap items-center justify-between gap-3 text-xs text-muted",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("marketplace.intake.wordCount", {
                                                    count: intakeWordCount,
                                                    max: maxWords
                                                })
                                            }, void 0, false, {
                                                fileName: "[project]/app/marketplace/MarketplaceClient.tsx",
                                                lineNumber: 392,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("marketplace.intake.recommendationsNote")
                                            }, void 0, false, {
                                                fileName: "[project]/app/marketplace/MarketplaceClient.tsx",
                                                lineNumber: 398,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/marketplace/MarketplaceClient.tsx",
                                        lineNumber: 391,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: handleRecommend,
                                                className: "btn-animate btn-secondary rounded-full px-4 py-2 text-[0.65rem] uppercase tracking-[0.2em]",
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("marketplace.intake.button.recommend")
                                            }, void 0, false, {
                                                fileName: "[project]/app/marketplace/MarketplaceClient.tsx",
                                                lineNumber: 401,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: handleClear,
                                                className: "btn-animate rounded-full border border-line px-4 py-2 text-[0.65rem] uppercase tracking-[0.2em] text-slate transition hover:border-slate",
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("marketplace.intake.button.clear")
                                            }, void 0, false, {
                                                fileName: "[project]/app/marketplace/MarketplaceClient.tsx",
                                                lineNumber: 408,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/marketplace/MarketplaceClient.tsx",
                                        lineNumber: 400,
                                        columnNumber: 13
                                    }, this),
                                    intakeStatus === "analyzing" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-4 rounded-xl border border-line/70 bg-ink/60 p-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xs uppercase tracking-[0.2em] text-slate",
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("marketplace.intake.analyzing.title")
                                            }, void 0, false, {
                                                fileName: "[project]/app/marketplace/MarketplaceClient.tsx",
                                                lineNumber: 418,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-3 flex flex-wrap items-center gap-4 text-xs text-muted",
                                                children: analysisSteps.map((label, index)=>{
                                                    const isActive = index <= analysisStep;
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `flex items-center gap-2 ${isActive ? "text-ash" : "text-muted"}`,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: `h-2 w-2 rounded-full ${isActive ? "bg-ash" : "bg-line"}`
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/marketplace/MarketplaceClient.tsx",
                                                                lineNumber: 431,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: label
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/marketplace/MarketplaceClient.tsx",
                                                                lineNumber: 436,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, label, true, {
                                                        fileName: "[project]/app/marketplace/MarketplaceClient.tsx",
                                                        lineNumber: 425,
                                                        columnNumber: 23
                                                    }, this);
                                                })
                                            }, void 0, false, {
                                                fileName: "[project]/app/marketplace/MarketplaceClient.tsx",
                                                lineNumber: 421,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/marketplace/MarketplaceClient.tsx",
                                        lineNumber: 417,
                                        columnNumber: 15
                                    }, this),
                                    intakeErrorKey && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-muted",
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])(intakeErrorKey, {
                                            max: maxWords
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/app/marketplace/MarketplaceClient.tsx",
                                        lineNumber: 444,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/marketplace/MarketplaceClient.tsx",
                                lineNumber: 380,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/marketplace/MarketplaceClient.tsx",
                        lineNumber: 368,
                        columnNumber: 9
                    }, this),
                    intakeStatus === "done" && intakeRecommendations.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: [
                            primaryRecommendation && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "card-animate rounded-2xl border border-line/80 bg-soft p-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap items-start justify-between gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs uppercase tracking-[0.2em] text-slate",
                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("marketplace.intake.results.primary")
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/marketplace/MarketplaceClient.tsx",
                                                        lineNumber: 457,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-xl font-semibold text-ash",
                                                        children: serviceBySlug.get(primaryRecommendation.slug)?.title ?? primaryRecommendation.slug
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/marketplace/MarketplaceClient.tsx",
                                                        lineNumber: 460,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-muted",
                                                        children: serviceBySlug.get(primaryRecommendation.slug)?.oneLine ?? ""
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/marketplace/MarketplaceClient.tsx",
                                                        lineNumber: 464,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/marketplace/MarketplaceClient.tsx",
                                                lineNumber: 456,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "rounded-full border border-line px-3 py-1 text-xs uppercase tracking-[0.2em] text-ash",
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])(`marketplace.intake.fit.${primaryRecommendation.fit}`)
                                            }, void 0, false, {
                                                fileName: "[project]/app/marketplace/MarketplaceClient.tsx",
                                                lineNumber: 469,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/marketplace/MarketplaceClient.tsx",
                                        lineNumber: 455,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-4 space-y-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-wrap items-center gap-3 text-xs text-muted",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("marketplace.intake.confidence", {
                                                        value: Math.round(primaryRecommendation.confidence * 100)
                                                    })
                                                }, void 0, false, {
                                                    fileName: "[project]/app/marketplace/MarketplaceClient.tsx",
                                                    lineNumber: 475,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/marketplace/MarketplaceClient.tsx",
                                                lineNumber: 474,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "space-y-2 text-sm text-muted",
                                                children: primaryRecommendation.reasons.map((reason)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "flex gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "mt-2 h-2 w-2 rounded-full bg-slate"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/marketplace/MarketplaceClient.tsx",
                                                                lineNumber: 484,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: reason
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/marketplace/MarketplaceClient.tsx",
                                                                lineNumber: 485,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, reason, true, {
                                                        fileName: "[project]/app/marketplace/MarketplaceClient.tsx",
                                                        lineNumber: 483,
                                                        columnNumber: 23
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/app/marketplace/MarketplaceClient.tsx",
                                                lineNumber: 481,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-wrap gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: `/marketplace/${primaryRecommendation.slug}`,
                                                        className: "btn-animate btn-secondary rounded-full px-4 py-2 text-[0.65rem] uppercase tracking-[0.2em]",
                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("marketplace.intake.card.view")
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/marketplace/MarketplaceClient.tsx",
                                                        lineNumber: 490,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: `/request-scope?service=${encodeURIComponent(primaryRecommendation.slug)}&mode=${encodeURIComponent(serviceBySlug.get(primaryRecommendation.slug)?.defaultMode ?? "remote")}`,
                                                        className: "btn-animate rounded-full border border-line px-4 py-2 text-[0.65rem] uppercase tracking-[0.2em] text-slate transition hover:border-slate",
                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("marketplace.intake.card.requestScope")
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/marketplace/MarketplaceClient.tsx",
                                                        lineNumber: 496,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>toggleShortlist(primaryRecommendation.slug),
                                                        className: "btn-animate rounded-full border border-line px-4 py-2 text-[0.65rem] uppercase tracking-[0.2em] text-slate transition hover:border-slate",
                                                        children: shortlist.includes(primaryRecommendation.slug) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("marketplace.intake.card.removeShortlist") : (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("marketplace.intake.card.addShortlist")
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/marketplace/MarketplaceClient.tsx",
                                                        lineNumber: 507,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/marketplace/MarketplaceClient.tsx",
                                                lineNumber: 489,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/marketplace/MarketplaceClient.tsx",
                                        lineNumber: 473,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/marketplace/MarketplaceClient.tsx",
                                lineNumber: 454,
                                columnNumber: 15
                            }, this),
                            additionalRecommendations.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs uppercase tracking-[0.2em] text-slate",
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("marketplace.intake.results.more")
                                    }, void 0, false, {
                                        fileName: "[project]/app/marketplace/MarketplaceClient.tsx",
                                        lineNumber: 523,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid gap-4 md:grid-cols-2",
                                        children: additionalRecommendations.map((recommendation)=>{
                                            const service = serviceBySlug.get(recommendation.slug);
                                            if (!service) return null;
                                            const isShortlisted = shortlist.includes(recommendation.slug);
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "card-animate rounded-2xl border border-line/80 bg-soft p-5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-start justify-between gap-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                        className: "text-base font-semibold text-ash",
                                                                        children: service.title
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/marketplace/MarketplaceClient.tsx",
                                                                        lineNumber: 539,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "mt-1 text-xs text-muted",
                                                                        children: service.oneLine
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/marketplace/MarketplaceClient.tsx",
                                                                        lineNumber: 542,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/marketplace/MarketplaceClient.tsx",
                                                                lineNumber: 538,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "rounded-full border border-line px-3 py-1 text-[0.6rem] uppercase tracking-[0.2em] text-slate",
                                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])(`marketplace.intake.fit.${recommendation.fit}`)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/marketplace/MarketplaceClient.tsx",
                                                                lineNumber: 546,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/marketplace/MarketplaceClient.tsx",
                                                        lineNumber: 537,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mt-3 text-xs text-muted",
                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("marketplace.intake.confidence", {
                                                            value: Math.round(recommendation.confidence * 100)
                                                        })
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/marketplace/MarketplaceClient.tsx",
                                                        lineNumber: 550,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                        className: "mt-3 space-y-2 text-xs text-muted",
                                                        children: recommendation.reasons.map((reason)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                className: "flex gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "mt-1 h-2 w-2 rounded-full bg-slate"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/marketplace/MarketplaceClient.tsx",
                                                                        lineNumber: 558,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: reason
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/marketplace/MarketplaceClient.tsx",
                                                                        lineNumber: 559,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                ]
                                                            }, reason, true, {
                                                                fileName: "[project]/app/marketplace/MarketplaceClient.tsx",
                                                                lineNumber: 557,
                                                                columnNumber: 29
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/marketplace/MarketplaceClient.tsx",
                                                        lineNumber: 555,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mt-4 flex flex-wrap gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                href: `/marketplace/${recommendation.slug}`,
                                                                className: "btn-animate rounded-full border border-line px-3 py-1 text-[0.6rem] uppercase tracking-[0.2em] text-slate transition hover:border-slate",
                                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("marketplace.intake.card.view")
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/marketplace/MarketplaceClient.tsx",
                                                                lineNumber: 564,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: ()=>toggleShortlist(recommendation.slug),
                                                                className: "btn-animate rounded-full border border-line px-3 py-1 text-[0.6rem] uppercase tracking-[0.2em] text-slate transition hover:border-slate",
                                                                children: isShortlisted ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("marketplace.intake.card.removeShortlist") : (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("marketplace.intake.card.addShortlist")
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/marketplace/MarketplaceClient.tsx",
                                                                lineNumber: 570,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/marketplace/MarketplaceClient.tsx",
                                                        lineNumber: 563,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, recommendation.slug, true, {
                                                fileName: "[project]/app/marketplace/MarketplaceClient.tsx",
                                                lineNumber: 533,
                                                columnNumber: 23
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/app/marketplace/MarketplaceClient.tsx",
                                        lineNumber: 526,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/marketplace/MarketplaceClient.tsx",
                                lineNumber: 522,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/marketplace/MarketplaceClient.tsx",
                        lineNumber: 452,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-sm uppercase tracking-[0.2em] text-slate",
                            children: [
                                filteredServices.length,
                                " services"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/marketplace/MarketplaceClient.tsx",
                            lineNumber: 590,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/marketplace/MarketplaceClient.tsx",
                        lineNumber: 589,
                        columnNumber: 9
                    }, this),
                    filteredServices.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-2xl border border-line/80 bg-soft p-8 text-sm text-muted",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "No exact match. Request scope and we'll map your problem to the right engagement."
                            }, void 0, false, {
                                fileName: "[project]/app/marketplace/MarketplaceClient.tsx",
                                lineNumber: 596,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-4 flex flex-wrap gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: requestScopeHref,
                                        className: "btn-animate btn-secondary rounded-full px-4 py-2 text-[0.65rem] uppercase tracking-[0.2em]",
                                        children: "Request scope"
                                    }, void 0, false, {
                                        fileName: "[project]/app/marketplace/MarketplaceClient.tsx",
                                        lineNumber: 601,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>router.replace(pathname),
                                        className: "btn-animate rounded-full border border-line px-4 py-2 text-[0.65rem] uppercase tracking-[0.2em] text-slate transition hover:border-slate",
                                        children: "Clear filters"
                                    }, void 0, false, {
                                        fileName: "[project]/app/marketplace/MarketplaceClient.tsx",
                                        lineNumber: 607,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/marketplace/MarketplaceClient.tsx",
                                lineNumber: 600,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/marketplace/MarketplaceClient.tsx",
                        lineNumber: 595,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid gap-4 md:grid-cols-2",
                        children: filteredServices.map((service)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ServiceCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ServiceCard"], {
                                service: service
                            }, service.slug, false, {
                                fileName: "[project]/app/marketplace/MarketplaceClient.tsx",
                                lineNumber: 619,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/marketplace/MarketplaceClient.tsx",
                        lineNumber: 617,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/marketplace/MarketplaceClient.tsx",
                lineNumber: 367,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hidden lg:block",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "sticky top-24 space-y-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "surface-card rounded-2xl border border-line/80 bg-soft p-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs uppercase tracking-[0.2em] text-slate",
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("marketplace.intake.shortlist.title")
                                    }, void 0, false, {
                                        fileName: "[project]/app/marketplace/MarketplaceClient.tsx",
                                        lineNumber: 629,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[0.65rem] text-muted",
                                        children: [
                                            shortlist.length,
                                            "/",
                                            shortlistMax
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/marketplace/MarketplaceClient.tsx",
                                        lineNumber: 632,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/marketplace/MarketplaceClient.tsx",
                                lineNumber: 628,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-2 text-xs text-muted",
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("marketplace.intake.shortlist.helper", {
                                    max: shortlistMax
                                })
                            }, void 0, false, {
                                fileName: "[project]/app/marketplace/MarketplaceClient.tsx",
                                lineNumber: 636,
                                columnNumber: 13
                            }, this),
                            shortlistNoticeKey && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-2 text-xs text-muted",
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])(shortlistNoticeKey)
                            }, void 0, false, {
                                fileName: "[project]/app/marketplace/MarketplaceClient.tsx",
                                lineNumber: 640,
                                columnNumber: 15
                            }, this),
                            shortlistServices.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-4 text-sm text-muted",
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("marketplace.intake.shortlist.empty")
                            }, void 0, false, {
                                fileName: "[project]/app/marketplace/MarketplaceClient.tsx",
                                lineNumber: 645,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-4 space-y-3",
                                children: shortlistServices.map((service)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm font-semibold text-ash",
                                                children: service.title
                                            }, void 0, false, {
                                                fileName: "[project]/app/marketplace/MarketplaceClient.tsx",
                                                lineNumber: 652,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-muted",
                                                children: service.oneLine
                                            }, void 0, false, {
                                                fileName: "[project]/app/marketplace/MarketplaceClient.tsx",
                                                lineNumber: 655,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>toggleShortlist(service.slug),
                                                className: "text-[0.6rem] uppercase tracking-[0.2em] text-slate",
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("marketplace.intake.card.removeShortlist")
                                            }, void 0, false, {
                                                fileName: "[project]/app/marketplace/MarketplaceClient.tsx",
                                                lineNumber: 656,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, service.slug, true, {
                                        fileName: "[project]/app/marketplace/MarketplaceClient.tsx",
                                        lineNumber: 651,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/marketplace/MarketplaceClient.tsx",
                                lineNumber: 649,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: handleGenerateScope,
                                disabled: shortlistServices.length === 0,
                                className: "btn-animate btn-secondary mt-4 w-full rounded-full px-4 py-2 text-[0.65rem] uppercase tracking-[0.2em]",
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("marketplace.intake.shortlist.cta")
                            }, void 0, false, {
                                fileName: "[project]/app/marketplace/MarketplaceClient.tsx",
                                lineNumber: 667,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/marketplace/MarketplaceClient.tsx",
                        lineNumber: 627,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/marketplace/MarketplaceClient.tsx",
                    lineNumber: 626,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/marketplace/MarketplaceClient.tsx",
                lineNumber: 625,
                columnNumber: 7
            }, this),
            shortlist.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `fixed bottom-0 left-0 right-0 z-40 rounded-t-2xl border border-line/80 bg-soft p-4 shadow-lg transition-transform duration-200 lg:hidden ${shortlistOpen ? "translate-y-0" : "translate-y-[70%]"}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-slate",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                        name: "requestScope",
                                        size: 14,
                                        strokeWidth: 1.25
                                    }, void 0, false, {
                                        fileName: "[project]/app/marketplace/MarketplaceClient.tsx",
                                        lineNumber: 687,
                                        columnNumber: 15
                                    }, this),
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("marketplace.intake.shortlist.title")
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/marketplace/MarketplaceClient.tsx",
                                lineNumber: 686,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setShortlistOpen((prev)=>!prev),
                                className: "text-[0.65rem] uppercase tracking-[0.2em] text-slate",
                                children: shortlistOpen ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("marketplace.intake.shortlist.close") : (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("marketplace.intake.shortlist.open")
                            }, void 0, false, {
                                fileName: "[project]/app/marketplace/MarketplaceClient.tsx",
                                lineNumber: 690,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/marketplace/MarketplaceClient.tsx",
                        lineNumber: 685,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-2 text-[0.65rem] text-muted",
                        children: [
                            shortlist.length,
                            "/",
                            shortlistMax
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/marketplace/MarketplaceClient.tsx",
                        lineNumber: 700,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-3 space-y-3",
                        children: shortlistServices.map((service)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-start justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm font-semibold text-ash",
                                                children: service.title
                                            }, void 0, false, {
                                                fileName: "[project]/app/marketplace/MarketplaceClient.tsx",
                                                lineNumber: 707,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-muted",
                                                children: service.oneLine
                                            }, void 0, false, {
                                                fileName: "[project]/app/marketplace/MarketplaceClient.tsx",
                                                lineNumber: 710,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/marketplace/MarketplaceClient.tsx",
                                        lineNumber: 706,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>toggleShortlist(service.slug),
                                        className: "text-[0.6rem] uppercase tracking-[0.2em] text-slate",
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("marketplace.intake.card.removeShortlist")
                                    }, void 0, false, {
                                        fileName: "[project]/app/marketplace/MarketplaceClient.tsx",
                                        lineNumber: 712,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, service.slug, true, {
                                fileName: "[project]/app/marketplace/MarketplaceClient.tsx",
                                lineNumber: 705,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/marketplace/MarketplaceClient.tsx",
                        lineNumber: 703,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: handleGenerateScope,
                        className: "btn-animate btn-secondary mt-4 w-full rounded-full px-4 py-2 text-[0.65rem] uppercase tracking-[0.2em]",
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("marketplace.intake.shortlist.cta")
                    }, void 0, false, {
                        fileName: "[project]/app/marketplace/MarketplaceClient.tsx",
                        lineNumber: 722,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/marketplace/MarketplaceClient.tsx",
                lineNumber: 680,
                columnNumber: 9
            }, this),
            prefillOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 flex items-end justify-center bg-ink/80 px-6 py-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full max-w-2xl rounded-2xl border border-line/80 bg-soft p-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs uppercase tracking-[0.2em] text-slate",
                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("marketplace.intake.sheet.title")
                                }, void 0, false, {
                                    fileName: "[project]/app/marketplace/MarketplaceClient.tsx",
                                    lineNumber: 736,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setPrefillOpen(false),
                                    className: "text-[0.65rem] uppercase tracking-[0.2em] text-slate",
                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("marketplace.intake.sheet.cancel")
                                }, void 0, false, {
                                    fileName: "[project]/app/marketplace/MarketplaceClient.tsx",
                                    lineNumber: 739,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/marketplace/MarketplaceClient.tsx",
                            lineNumber: 735,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-4 space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "space-y-2 text-sm text-slate",
                                    children: [
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("marketplace.intake.sheet.summary.label"),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            value: summaryDraft,
                                            onChange: (event)=>setSummaryDraft(event.target.value),
                                            rows: 5,
                                            className: "w-full rounded-xl border border-line bg-ink px-4 py-3 text-sm text-ash",
                                            placeholder: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("marketplace.intake.sheet.summary.placeholder")
                                        }, void 0, false, {
                                            fileName: "[project]/app/marketplace/MarketplaceClient.tsx",
                                            lineNumber: 750,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/marketplace/MarketplaceClient.tsx",
                                    lineNumber: 748,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs uppercase tracking-[0.2em] text-slate",
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("marketplace.intake.sheet.selected.label")
                                        }, void 0, false, {
                                            fileName: "[project]/app/marketplace/MarketplaceClient.tsx",
                                            lineNumber: 761,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-3 space-y-2 text-sm text-muted",
                                            children: prefillServices.length > 0 ? prefillServices.map((service)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "h-2 w-2 rounded-full bg-slate"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/marketplace/MarketplaceClient.tsx",
                                                            lineNumber: 768,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: service.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/marketplace/MarketplaceClient.tsx",
                                                            lineNumber: 769,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, service.slug, true, {
                                                    fileName: "[project]/app/marketplace/MarketplaceClient.tsx",
                                                    lineNumber: 767,
                                                    columnNumber: 23
                                                }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("marketplace.intake.shortlist.empty")
                                            }, void 0, false, {
                                                fileName: "[project]/app/marketplace/MarketplaceClient.tsx",
                                                lineNumber: 773,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/marketplace/MarketplaceClient.tsx",
                                            lineNumber: 764,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/marketplace/MarketplaceClient.tsx",
                                    lineNumber: 760,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/marketplace/MarketplaceClient.tsx",
                            lineNumber: 747,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-6 flex flex-wrap gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: handleContinue,
                                    className: "btn-animate btn-secondary rounded-full px-4 py-2 text-[0.65rem] uppercase tracking-[0.2em]",
                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("marketplace.intake.sheet.continue")
                                }, void 0, false, {
                                    fileName: "[project]/app/marketplace/MarketplaceClient.tsx",
                                    lineNumber: 779,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setPrefillOpen(false),
                                    className: "btn-animate rounded-full border border-line px-4 py-2 text-[0.65rem] uppercase tracking-[0.2em] text-slate transition hover:border-slate",
                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("marketplace.intake.sheet.cancel")
                                }, void 0, false, {
                                    fileName: "[project]/app/marketplace/MarketplaceClient.tsx",
                                    lineNumber: 786,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/marketplace/MarketplaceClient.tsx",
                            lineNumber: 778,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/marketplace/MarketplaceClient.tsx",
                    lineNumber: 734,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/marketplace/MarketplaceClient.tsx",
                lineNumber: 733,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/marketplace/MarketplaceClient.tsx",
        lineNumber: 365,
        columnNumber: 5
    }, this);
}
_s(MarketplaceClient, "jGJ2C1AddGPrDONJvh11tnTEMRA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"]
    ];
});
_c = MarketplaceClient;
var _c;
__turbopack_context__.k.register(_c, "MarketplaceClient");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/marketplace/MarketplaceClient.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/marketplace/MarketplaceClient.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=_e2fddff8._.js.map