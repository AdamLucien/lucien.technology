import { NextResponse } from "next/server";
import { services } from "@/content/services";
import { t } from "@/lib/i18n";

type IntakeSignals = {
  urgency?: "low" | "medium" | "high";
  constraints?: string[];
  context?: string[];
};

type IntakeSummary = {
  text: string;
  tags: string[];
  urgency: "low" | "medium" | "high";
  constraints: string[];
  context: string[];
};

type IntakeRecommendation = {
  serviceId: string;
  slug: string;
  fit: "high" | "medium" | "low";
  confidence: number;
  reasons: string[];
  nextAction: "view" | "requestScope";
};

const maxWords = 777;

const normalizeText = (value: string) =>
  value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

const wordCount = (value: string) =>
  value.trim().split(/\s+/).filter(Boolean).length;

const keywordSignals: Array<{
  tag: string;
  keywords: string[];
  reasonKey: string;
}> = [
  {
    tag: "security",
    keywords: ["security", "secure", "breach", "vulnerability", "access control"],
    reasonKey: "marketplace.intake.reason.domainSecurity",
  },
  {
    tag: "compliance",
    keywords: ["compliance", "audit", "regulatory", "policy", "controls"],
    reasonKey: "marketplace.intake.reason.domainCompliance",
  },
  {
    tag: "it-ot",
    keywords: ["it/ot", "it-ot", "industrial", "plant", "ot"],
    reasonKey: "marketplace.intake.reason.domainIntegration",
  },
  {
    tag: "ai",
    keywords: ["ai", "machine learning", "ml", "decision", "model"],
    reasonKey: "marketplace.intake.reason.domainAI",
  },
  {
    tag: "governance",
    keywords: ["governance", "decision rights", "scope", "procurement"],
    reasonKey: "marketplace.intake.reason.domainGovernance",
  },
  {
    tag: "risk",
    keywords: ["risk", "exposure", "control gaps", "baseline"],
    reasonKey: "marketplace.intake.reason.domainSecurity",
  },
  {
    tag: "observability",
    keywords: ["observability", "monitoring", "telemetry", "visibility"],
    reasonKey: "marketplace.intake.reason.domainObservability",
  },
  {
    tag: "performance",
    keywords: ["performance", "latency", "slow", "throughput"],
    reasonKey: "marketplace.intake.reason.domainPerformance",
  },
  {
    tag: "resilience",
    keywords: ["resilience", "incident", "outage", "recovery", "stability"],
    reasonKey: "marketplace.intake.reason.domainResilience",
  },
  {
    tag: "delivery",
    keywords: ["delivery", "timeline", "deadline", "milestone", "handover"],
    reasonKey: "marketplace.intake.reason.urgencyMedium",
  },
  {
    tag: "integration",
    keywords: ["integration", "interface", "interoperability", "data flow"],
    reasonKey: "marketplace.intake.reason.domainIntegration",
  },
];

const urgencySignals = {
  high: ["urgent", "asap", "immediate", "incident", "audit deadline", "breach"],
  medium: ["soon", "priority", "deadline", "near-term", "short-term"],
  low: ["strategic", "roadmap", "long-term", "planning"],
};

const constraintSignals = {
  remote: ["remote", "offsite", "virtual"],
  hybrid: ["hybrid"],
  "on-site": ["on-site", "onsite", "in-person"],
};

const tagReasonMap: Record<string, string> = {
  security: "marketplace.intake.reason.domainSecurity",
  compliance: "marketplace.intake.reason.domainCompliance",
  "it-ot": "marketplace.intake.reason.domainIntegration",
  ai: "marketplace.intake.reason.domainAI",
  governance: "marketplace.intake.reason.domainGovernance",
  risk: "marketplace.intake.reason.domainSecurity",
  observability: "marketplace.intake.reason.domainObservability",
  performance: "marketplace.intake.reason.domainPerformance",
  resilience: "marketplace.intake.reason.domainResilience",
  delivery: "marketplace.intake.reason.urgencyMedium",
  integration: "marketplace.intake.reason.domainIntegration",
};

const mapServiceUrgency = (values: string[]) => {
  const normalized = values.map((value) => normalizeText(value));
  if (normalized.some((value) => value.includes("2-4 weeks"))) {
    return "high";
  }
  if (normalized.some((value) => value.includes("6-12 weeks"))) {
    return "medium";
  }
  if (normalized.some((value) => value.includes("3-6 months"))) {
    return "low";
  }
  return "medium";
};

const inferUrgency = (brief: string, signals?: IntakeSignals) => {
  if (signals?.urgency) {
    return signals.urgency;
  }
  const normalized = normalizeText(brief);
  if (urgencySignals.high.some((value) => normalized.includes(value))) {
    return "high";
  }
  if (urgencySignals.medium.some((value) => normalized.includes(value))) {
    return "medium";
  }
  if (urgencySignals.low.some((value) => normalized.includes(value))) {
    return "low";
  }
  return "medium";
};

const extractConstraints = (brief: string, signals?: IntakeSignals) => {
  const constraints = new Set(
    (signals?.constraints ?? []).map((item) => normalizeText(item)),
  );
  const normalized = normalizeText(brief);
  Object.entries(constraintSignals).forEach(([key, values]) => {
    if (values.some((value) => normalized.includes(value))) {
      constraints.add(key);
    }
  });
  return Array.from(constraints);
};

const extractSummary = (brief: string, signals?: IntakeSignals): IntakeSummary => {
  const normalized = normalizeText(brief);
  const tags = new Set<string>();
  const context = new Set(
    (signals?.context ?? []).map((item) => normalizeText(item)),
  );

  keywordSignals.forEach((signal) => {
    if (signal.keywords.some((keyword) => normalized.includes(keyword))) {
      tags.add(signal.tag);
    }
  });

  const urgency = inferUrgency(brief, signals);
  const constraints = extractConstraints(brief, signals);

  const summaryParts = [
    t("marketplace.intake.summary.tags", {
      tags:
        Array.from(tags).join(", ") || t("marketplace.intake.summary.general"),
    }),
    t("marketplace.intake.summary.urgency", { urgency }),
    t("marketplace.intake.summary.constraints", {
      constraints:
        constraints.join(", ") || t("marketplace.intake.summary.none"),
    }),
  ];

  if (context.size > 0) {
    summaryParts.push(
      t("marketplace.intake.summary.context", {
        context: Array.from(context).join(", "),
      }),
    );
  }

  return {
    text: summaryParts.join("\n"),
    tags: Array.from(tags),
    urgency,
    constraints,
    context: Array.from(context),
  };
};

const scoreService = (
  service: (typeof services)[number],
  summary: IntakeSummary,
  brief: string,
) => {
  const searchText = normalizeText(
    [
      service.title,
      service.oneLine,
      service.problemStatement,
      service.tags.join(" "),
      service.domains.join(" "),
      service.engagementTypes.join(" "),
      service.urgency.join(" "),
      service.deliveryModes.join(" "),
    ].join(" "),
  );

  let score = 0;
  const reasons: string[] = [];
  const matchedTags = summary.tags.filter((tag) => searchText.includes(tag));

  if (matchedTags.length > 0) {
    score += matchedTags.length * 3;
    matchedTags.forEach((tag) => {
      const reasonKey = tagReasonMap[tag] ?? "marketplace.intake.reason.tagMatch";
      if (!reasons.includes(reasonKey)) {
        reasons.push(reasonKey);
      }
    });
  }

  const serviceUrgency = mapServiceUrgency(service.urgency);
  if (summary.urgency === serviceUrgency) {
    score += 2;
    const urgencyKey =
      summary.urgency === "high"
        ? "marketplace.intake.reason.urgencyHigh"
        : summary.urgency === "low"
          ? "marketplace.intake.reason.urgencyLow"
          : "marketplace.intake.reason.urgencyMedium";
    reasons.push(urgencyKey);
  }

  if (summary.constraints.length > 0) {
    const hasConstraintMatch = summary.constraints.some((constraint) =>
      service.deliveryModes.includes(constraint as typeof service.deliveryModes[number]),
    );
    if (hasConstraintMatch) {
      score += 2;
      reasons.push("marketplace.intake.reason.deliveryMatch");
    } else {
      score -= 2;
    }
  }

  const normalizedBrief = normalizeText(brief);
  const notForMatches = service.notFor.filter((item) =>
    normalizedBrief.includes(normalizeText(item)),
  );
  if (notForMatches.length > 0) {
    score -= notForMatches.length * 2;
  }

  if (reasons.length === 0) {
    reasons.push("marketplace.intake.reason.tagMatch");
  }

  return { score, reasons };
};

export async function POST(request: Request) {
  let payload: { brief?: string; signals?: IntakeSignals } | null = null;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      {
        errorKey: "invalid_payload",
        messageKey: "marketplace.intake.error.generic",
      },
      { status: 400 },
    );
  }

  const brief = typeof payload?.brief === "string" ? payload.brief.trim() : "";
  if (!brief) {
    return NextResponse.json(
      {
        errorKey: "brief_required",
        messageKey: "marketplace.intake.error.briefRequired",
      },
      { status: 400 },
    );
  }

  const briefWordCount = wordCount(brief);
  if (briefWordCount > maxWords) {
    return NextResponse.json(
      {
        errorKey: "brief_too_long",
        messageKey: "marketplace.intake.error.briefTooLong",
      },
      { status: 400 },
    );
  }

  const summary = extractSummary(brief, payload?.signals);
  const scored = services.map((service) => {
    const { score, reasons } = scoreService(service, summary, brief);
    return { service, score, reasons };
  });

  const sorted = scored.sort((a, b) => b.score - a.score).slice(0, 5);

  const maxPossibleScore =
    summary.tags.length * 3 +
    (summary.constraints.length > 0 ? 2 : 0) +
    (summary.urgency ? 2 : 0);

  const recommendations: IntakeRecommendation[] = sorted.map((item) => {
    const normalizedScore =
      maxPossibleScore > 0 ? Math.max(0, item.score) / maxPossibleScore : 0;
    const confidence = Math.min(1, normalizedScore);
    const fit =
      confidence >= 0.66 ? "high" : confidence >= 0.33 ? "medium" : "low";
    const nextAction = confidence >= 0.66 ? "requestScope" : "view";
    const reasons = item.reasons
      .map((reasonKey) => t(reasonKey))
      .filter(Boolean)
      .slice(0, 3);

    return {
      serviceId: item.service.id,
      slug: item.service.slug,
      fit,
      confidence,
      reasons,
      nextAction,
    };
  });

  return NextResponse.json({
    summary,
    recommendations,
    shortlistHint: { max: 3 },
  });
}
