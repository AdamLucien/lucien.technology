export type InsightSection = {
  heading?: string;
  paragraphs: string[];
  bullets?: string[];
};

export type Insight = {
  slug: string;
  title: string;
  description: string;
  date: string;
  readingTime: string;
  sections: InsightSection[];
  relatedServices: string[];
};

export const insights: Insight[] = [
  {
    slug: "operational-clarity",
    title: "Operational clarity before acceleration",
    description:
      "Why mission-critical teams map boundaries, dependencies, and control paths before scaling delivery.",
    date: "2024-04-18",
    readingTime: "6 min read",
    sections: [
      {
        heading: "Define the mission boundary",
        paragraphs: [
          "Acceleration without boundary definition creates brittle systems. Mission owners need a shared view of where authority starts and stops, which dependencies cannot fail, and how decisions flow under stress.",
          "Lucien teams start by mapping operational responsibilities, integration constraints, and failure modes before any delivery plan is approved.",
        ],
        bullets: [
          "Identify non-negotiable mission outcomes",
          "Expose single points of failure across systems",
          "Align decision authority to operational reality",
        ],
      },
      {
        heading: "Sequence with intent",
        paragraphs: [
          "Sequencing is where architecture becomes operational. The goal is to protect mission continuity while introducing change in controlled increments.",
        ],
        bullets: [
          "Stabilize the core operational backbone first",
          "Instrument high-risk dependencies early",
          "Introduce automation only after control paths are proven",
        ],
      },
    ],
    relatedServices: [
      "system-architecture-assessment",
      "target-architecture-roadmap",
      "secure-real-time-data-architecture",
    ],
  },
  {
    slug: "risk-managed-ai",
    title: "Risk-managed AI in high-consequence environments",
    description:
      "An approach to deploying AI where safety boundaries and governance are as important as model performance.",
    date: "2024-05-03",
    readingTime: "7 min read",
    sections: [
      {
        heading: "Start with operational control",
        paragraphs: [
          "AI initiatives fail when they ignore the real command structure. Systems that manage assets, logistics, or safety require explicit boundaries and human override paths.",
          "The priority is not raw automation, but accountable decision support that respects operational constraints.",
        ],
        bullets: [
          "Define human-in-the-loop escalation points",
          "Document approved operating conditions",
          "Plan for rollback and degraded modes",
        ],
      },
      {
        heading: "Governance before scale",
        paragraphs: [
          "Governance frameworks establish who can approve AI use cases, how data is retained, and what monitoring is required for drift and anomalies.",
        ],
        bullets: [
          "Establish model performance baselines",
          "Audit data lineage and access controls",
          "Align with risk-managed approval flows",
        ],
      },
    ],
    relatedServices: [
      "data-ai-decision-support-pilot",
      "production-supply-chain-optimization",
      "system-architecture-assessment",
    ],
  },
  {
    slug: "security-as-architecture",
    title: "Security as architecture, not accessory",
    description:
      "Why security posture must be a structural input to system design rather than a final checklist.",
    date: "2024-05-26",
    readingTime: "5 min read",
    sections: [
      {
        heading: "Security defines system shape",
        paragraphs: [
          "In high-stakes environments, security choices dictate topology, data flows, and operational authority. The architecture must express the security model, not the other way around.",
          "A defensible system design anchors security to identity, segmentation, and auditability.",
        ],
        bullets: [
          "Treat identity as a system backbone",
          "Segment by mission role, not just network",
          "Instrument audit trails from day one",
        ],
      },
      {
        heading: "Operational resilience",
        paragraphs: [
          "Security controls only work if they preserve operational continuity. Reliability and security have to be designed together.",
        ],
        bullets: [
          "Build access transitions with rollback paths",
          "Test controls against operational scenarios",
          "Make control ownership explicit",
        ],
      },
    ],
    relatedServices: [
      "secure-real-time-data-architecture",
      "system-architecture-assessment",
      "project-takeover-stabilization",
    ],
  },
  {
    slug: "observability-for-mission-readiness",
    title: "Observability for mission readiness",
    description:
      "Operational visibility is the foundation of resilient delivery, especially across hybrid and OT systems.",
    date: "2024-06-11",
    readingTime: "6 min read",
    sections: [
      {
        heading: "Visibility is a control mechanism",
        paragraphs: [
          "Observability is not just telemetry; it is how leaders maintain control over complex systems. Without reliable insight, mission risk grows silently.",
        ],
        bullets: [
          "Define mission-aligned health indicators",
          "Instrument the system edges, not just the core",
          "Prioritize signal quality over volume",
        ],
      },
      {
        heading: "Integrate operational context",
        paragraphs: [
          "Data needs context to be useful. Observability models should include operational roles, decision latency, and dependency severity.",
        ],
        bullets: [
          "Map alerts to mission impact",
          "Tie response playbooks to system zones",
          "Use shared dashboards for joint teams",
        ],
      },
    ],
    relatedServices: [
      "system-architecture-assessment",
      "secure-real-time-data-architecture",
      "production-supply-chain-optimization",
    ],
  },
  {
    slug: "governance-for-it-ot-convergence",
    title: "Governance for IT/OT convergence",
    description:
      "Converged environments demand shared governance, clear ownership, and staged modernization.",
    date: "2024-06-28",
    readingTime: "7 min read",
    sections: [
      {
        heading: "Unify decision rights",
        paragraphs: [
          "The biggest risk in IT/OT convergence is ambiguity. Clear ownership of systems, data, and risk posture removes friction and enables safe integration.",
        ],
        bullets: [
          "Define joint escalation and approval paths",
          "Document asset ownership and handoff",
          "Align change windows to operational reality",
        ],
      },
      {
        heading: "Modernize in layers",
        paragraphs: [
          "Legacy systems remain mission-critical. Modernization should protect continuity while improving security and resilience.",
        ],
        bullets: [
          "Segment legacy assets before integration",
          "Harden access pathways in phases",
          "Validate upgrades against production workload",
        ],
      },
    ],
    relatedServices: [
      "target-architecture-roadmap",
      "production-supply-chain-optimization",
      "procurement-ready-technology-review",
    ],
  },
];
