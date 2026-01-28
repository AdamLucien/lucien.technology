export type KeywordSuggestion = {
  keyword: string;
  synonyms: string[];
  intentTags: string[];
};

export const keywordSuggestions: KeywordSuggestion[] = [
  {
    keyword: "delivery delays",
    synonyms: ["late delivery", "schedule slippage", "lead time"],
    intentTags: ["delivery", "timeline", "schedule"],
  },
  {
    keyword: "quality issues",
    synonyms: ["defects", "rework", "yield loss"],
    intentTags: ["quality", "risk", "controls"],
  },
  {
    keyword: "missed deadlines",
    synonyms: ["deadline slip", "late milestones", "schedule risk"],
    intentTags: ["delivery", "governance", "timeline"],
  },
  {
    keyword: "program out of control",
    synonyms: ["runaway program", "no governance", "unclear scope"],
    intentTags: ["governance", "risk", "scope"],
  },
  {
    keyword: "project recovery",
    synonyms: ["project takeover", "stabilization", "recovery"],
    intentTags: ["stabilization", "delivery", "risk"],
  },
  {
    keyword: "handover failure",
    synonyms: ["transition risk", "handover gap", "no ownership"],
    intentTags: ["handover", "governance", "risk"],
  },
  {
    keyword: "legacy systems",
    synonyms: ["legacy stack", "outdated systems", "technical debt"],
    intentTags: ["architecture", "modernization", "integration"],
  },
  {
    keyword: "poor architecture",
    synonyms: ["fragile design", "no target architecture", "ad hoc design"],
    intentTags: ["architecture", "governance", "risk"],
  },
  {
    keyword: "integration issues",
    synonyms: ["integration risk", "interface failures", "broken interfaces"],
    intentTags: ["integration", "data", "risk"],
  },
  {
    keyword: "it/ot integration",
    synonyms: ["industrial integration", "ot data", "plant connectivity"],
    intentTags: ["it-ot", "industrial", "integration"],
  },
  {
    keyword: "data inconsistency",
    synonyms: ["data mismatch", "data quality", "conflicting data"],
    intentTags: ["data", "quality", "governance"],
  },
  {
    keyword: "no real-time visibility",
    synonyms: ["no realtime visibility", "delayed signals", "blind spots"],
    intentTags: ["realtime", "observability", "data"],
  },
  {
    keyword: "ai pilot",
    synonyms: ["ml pilot", "ai proof", "model trial"],
    intentTags: ["ai", "data", "decision"],
  },
  {
    keyword: "decision support",
    synonyms: ["decision intelligence", "decision latency", "command workflow"],
    intentTags: ["decision", "analytics", "governance"],
  },
  {
    keyword: "audit readiness",
    synonyms: ["audit trail", "evidence pack", "compliance review"],
    intentTags: ["audit", "compliance", "governance"],
  },
  {
    keyword: "security posture",
    synonyms: ["security baseline", "control gaps", "risk posture"],
    intentTags: ["security", "controls", "risk"],
  },
  {
    keyword: "downtime",
    synonyms: ["outage", "service interruption", "availability"],
    intentTags: ["resilience", "operations", "risk"],
  },
  {
    keyword: "latency",
    synonyms: ["slow response", "delay", "performance"],
    intentTags: ["performance", "realtime", "delivery"],
  },
  {
    keyword: "incidents",
    synonyms: ["incident load", "recurring incidents", "instability"],
    intentTags: ["resilience", "risk", "governance"],
  },
  {
    keyword: "compliance",
    synonyms: ["compliance gaps", "policy alignment", "controls"],
    intentTags: ["compliance", "audit", "security"],
  },
  {
    keyword: "vendor failure",
    synonyms: ["supplier risk", "vendor instability", "third-party failure"],
    intentTags: ["risk", "governance", "procurement"],
  },
  {
    keyword: "delivery slip",
    synonyms: ["schedule slip", "late delivery", "missed milestones"],
    intentTags: ["delivery", "timeline", "risk"],
  },
  {
    keyword: "scope creep",
    synonyms: ["uncontrolled scope", "requirements drift", "scope risk"],
    intentTags: ["scope", "governance", "risk"],
  },
  {
    keyword: "data silos",
    synonyms: ["siloed data", "data fragmentation", "no single source"],
    intentTags: ["data", "integration", "architecture"],
  },
  {
    keyword: "real-time",
    synonyms: ["realtime", "streaming", "live telemetry"],
    intentTags: ["realtime", "data", "observability"],
  },
  {
    keyword: "observability",
    synonyms: ["telemetry", "monitoring", "visibility"],
    intentTags: ["observability", "performance", "resilience"],
  },
  {
    keyword: "security gaps",
    synonyms: ["control gaps", "weak controls", "exposure"],
    intentTags: ["security", "controls", "risk"],
  },
  {
    keyword: "access control",
    synonyms: ["access governance", "identity control", "least privilege"],
    intentTags: ["security", "governance", "controls"],
  },
  {
    keyword: "procurement",
    synonyms: ["procurement-ready", "sourcing", "vendor selection"],
    intentTags: ["procurement", "governance", "audit"],
  },
  {
    keyword: "rfp",
    synonyms: ["rfp support", "sow", "statement of work"],
    intentTags: ["procurement", "governance", "delivery"],
  },
  {
    keyword: "governance",
    synonyms: ["decision rights", "governance pack", "operating model"],
    intentTags: ["governance", "risk", "controls"],
  },
  {
    keyword: "risk",
    synonyms: ["risk register", "risk posture", "risk gating"],
    intentTags: ["risk", "governance", "audit"],
  },
  {
    keyword: "ot",
    synonyms: ["plant", "industrial", "control systems"],
    intentTags: ["industrial", "it-ot", "integration"],
  },
  {
    keyword: "throughput",
    synonyms: ["bottleneck", "capacity", "flow"],
    intentTags: ["industrial", "performance", "delivery"],
  },
  {
    keyword: "bottleneck",
    synonyms: ["constraint", "slow point", "capacity limit"],
    intentTags: ["industrial", "performance", "delivery"],
  },
  {
    keyword: "staffing",
    synonyms: ["skills gap", "coverage gap", "resource shortfall"],
    intentTags: ["operate", "assurance", "delivery"],
  },
  {
    keyword: "handover",
    synonyms: ["transition", "runbooks", "operational readiness"],
    intentTags: ["handover", "governance", "delivery"],
  },
  {
    keyword: "incident response",
    synonyms: ["response governance", "incident playbook", "response readiness"],
    intentTags: ["governance", "security", "resilience"],
  },
  {
    keyword: "change request",
    synonyms: ["change control", "cr approval", "scope change"],
    intentTags: ["change", "governance", "risk"],
  },
  {
    keyword: "billing",
    synonyms: ["invoice", "commercials", "finance"],
    intentTags: ["billing", "procurement", "governance"],
  },
  {
    keyword: "invoice",
    synonyms: ["invoice accuracy", "payment", "billing"],
    intentTags: ["billing", "finance", "procurement"],
  },
  {
    keyword: "po",
    synonyms: ["purchase order", "po alignment", "po reference"],
    intentTags: ["procurement", "billing", "governance"],
  },
  {
    keyword: "cost center",
    synonyms: ["cost allocation", "chargeback", "budget"],
    intentTags: ["billing", "governance", "procurement"],
  },
  {
    keyword: "system drift",
    synonyms: ["configuration drift", "baseline drift", "runtime drift"],
    intentTags: ["controls", "resilience", "risk"],
  },
  {
    keyword: "unknown dependencies",
    synonyms: ["hidden dependencies", "unknown interfaces", "dependency risk"],
    intentTags: ["architecture", "risk", "integration"],
  },
  {
    keyword: "unclear ownership",
    synonyms: ["ownership gap", "no decision owner", "ownership risk"],
    intentTags: ["governance", "risk", "delivery"],
  },
  {
    keyword: "missing runbooks",
    synonyms: ["no runbooks", "operational gap", "handover gap"],
    intentTags: ["handover", "operate", "governance"],
  },
  {
    keyword: "audit trail",
    synonyms: ["evidence trail", "audit log", "traceability"],
    intentTags: ["audit", "compliance", "governance"],
  },
  {
    keyword: "resilience",
    synonyms: ["continuity", "recovery", "fault tolerance"],
    intentTags: ["resilience", "risk", "operations"],
  },
  {
    keyword: "integration security",
    synonyms: ["secure integration", "trusted interfaces", "control boundaries"],
    intentTags: ["security", "integration", "controls"],
  },
  {
    keyword: "delivery planning",
    synonyms: ["milestone plan", "release plan", "sequencing"],
    intentTags: ["delivery", "governance", "timeline"],
  },
  {
    keyword: "acceptance criteria",
    synonyms: ["definition of done", "acceptance gates", "sign-off"],
    intentTags: ["governance", "audit", "delivery"],
  },
];
