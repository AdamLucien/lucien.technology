const supportedLocales = ["en", "cs", "de", "it", "uk", "zh"] as const;

export type SupportedLocale = (typeof supportedLocales)[number];

type TranslationParams = Record<string, string | number>;

type DictionaryKey = keyof typeof dictionary.en;

type TranslationTable = Record<DictionaryKey, string>;

type PartialDictionary = Record<SupportedLocale, Partial<TranslationTable>>;

const localeAliases: Record<string, SupportedLocale> = {
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
  "zh-hant": "zh",
};

const dictionary = {
  en: {
    "marketplace.intake.title": "AI-assisted intake",
    "marketplace.intake.subtitle": "Describe the problem, constraints, and urgency",
    "marketplace.intake.description":
      "This is an assistive layer for scoping. We use your brief to map to the most relevant Lucien engagements.",
    "marketplace.intake.brief.label": "Problem brief",
    "marketplace.intake.brief.placeholder":
      "Problem, constraints, dependencies, urgency, and any required delivery mode.",
    "marketplace.intake.wordCount": "{count}/{max} words",
    "marketplace.intake.recommendationsNote":
      "Recommendations map to existing services only.",
    "marketplace.intake.button.recommend": "Get recommendations",
    "marketplace.intake.button.clear": "Clear",
    "marketplace.intake.error.briefRequired":
      "Provide a short problem brief to get recommendations.",
    "marketplace.intake.error.briefTooLong":
      "Please keep the brief under {max} words.",
    "marketplace.intake.error.generic":
      "We could not generate recommendations. Try again.",
    "marketplace.intake.error.noMatches":
      "No direct matches yet. Submit a scope request and we will map your problem.",
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
    "marketplace.intake.reason.deliveryMatch":
      "Delivery mode fits the stated constraints.",
    "marketplace.intake.reason.domainSecurity":
      "Addresses security and control risks.",
    "marketplace.intake.reason.domainCompliance":
      "Built for compliance and audit readiness.",
    "marketplace.intake.reason.domainIntegration":
      "Targets integration and interoperability gaps.",
    "marketplace.intake.reason.domainObservability":
      "Improves visibility and monitoring.",
    "marketplace.intake.reason.domainPerformance":
      "Focuses on performance and latency.",
    "marketplace.intake.reason.domainResilience":
      "Centers on resilience and response.",
    "marketplace.intake.reason.domainAI":
      "Supports AI and decision enablement.",
    "marketplace.intake.reason.domainGovernance":
      "Strengthens governance and scope control.",
    "marketplace.intake.card.view": "View details",
    "marketplace.intake.card.requestScope": "Request scope",
    "marketplace.intake.card.addShortlist": "Add to shortlist",
    "marketplace.intake.card.removeShortlist": "Remove",
    "marketplace.intake.shortlist.title": "Shortlist",
    "marketplace.intake.shortlist.helper":
      "Pick up to {max} services for a single scope request.",
    "marketplace.intake.shortlist.empty": "Add services to build a shortlist.",
    "marketplace.intake.shortlist.limit": "Shortlist limit reached.",
    "marketplace.intake.shortlist.open": "Open shortlist",
    "marketplace.intake.shortlist.close": "Close",
    "marketplace.intake.shortlist.cta": "Generate scope request",
    "marketplace.intake.sheet.title": "Generate scope request",
    "marketplace.intake.sheet.summary.label": "Extracted summary",
    "marketplace.intake.sheet.summary.placeholder":
      "Add or adjust the summary before requesting scope.",
    "marketplace.intake.sheet.selected.label": "Selected services",
    "marketplace.intake.sheet.continue": "Continue",
    "marketplace.intake.sheet.cancel": "Cancel",
    "marketplace.intake.summary.tags": "Tags: {tags}",
    "marketplace.intake.summary.urgency": "Urgency: {urgency}",
    "marketplace.intake.summary.constraints": "Constraints: {constraints}",
    "marketplace.intake.summary.context": "Context: {context}",
    "marketplace.intake.summary.general": "general",
    "marketplace.intake.summary.none": "none",
    "marketplace.intake.prefill.notice":
      "An intake summary was prepared from your brief. Edit the note if needed.",
    "footer.group.explore": "Explore",
    "footer.partners.title": "Partners & Experts",
    "footer.brand.tagline":
      "Systems thinking for mission-critical technology. Structured, measured, and aligned with enterprise realities.",
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
    "footer.legal.engagements":
      "Engagements are subject to lawful use and risk-managed delivery.",
    "footer.legal.domain": "Domain: {domain}",
    "partners.hero.eyebrow": "Expert network",
    "partners.hero.title":
      "Partners and experts for mission-critical delivery",
    "partners.hero.subtitle":
      "Share your signal profile and we will match you to scoped engagements with clear boundaries, governance, and auditability.",
    "partners.hero.cta.primary": "Submit signal",
    "partners.hero.cta.secondary": "How it works",
    "partners.signals.i4.title": "Industry 4.0 readiness",
    "partners.signals.i4.body":
      "OT/IT alignment, shopfloor telemetry, safe rollout.",
    "partners.signals.sc.title": "Supply chain clarity",
    "partners.signals.sc.body":
      "Constraints, risk, delivery windows, cost levers.",
    "partners.signals.mc.title": "Mission-critical delivery",
    "partners.signals.mc.body":
      "Scoped engagements, controlled change, audit trail.",
    "partners.how.title": "How it works",
    "partners.how.subtitle": "Three steps from signal to engagement.",
    "partners.how.step1.title": "Submit signal",
    "partners.how.step1.body":
      "Share role, domain focus, availability, and constraints.",
    "partners.how.step2.title": "Lucien review and match",
    "partners.how.step2.body":
      "We validate fit and match to scoped engagements and teams.",
    "partners.how.step3.title": "Engagement start",
    "partners.how.step3.body":
      "Onboarding runs through HR traceability with clear scope.",
    "partners.roles.title": "Open roles (examples)",
    "partners.roles.subtitle":
      "Primary role plus optional secondary specialties.",
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
    "partners.roles.industry.industry40_systems_engineer":
      "Industry 4.0 Systems Engineer",
    "partners.roles.industry.ot_security_engineer": "OT Security Engineer",
    "partners.roles.industry.ics_engineer": "ICS Engineer (SCADA/PLC)",
    "partners.roles.industry.mes_mom_engineer": "MES/MOM Engineer",
    "partners.roles.industry.industrial_data_engineer":
      "Industrial Data Engineer",
    "partners.roles.industry.manufacturing_systems_analyst":
      "Manufacturing Systems Analyst",
    "partners.roles.industry.automation_engineer": "Automation Engineer",
    "partners.roles.supply_chain.supply_chain_architect":
      "Supply Chain Architect",
    "partners.roles.supply_chain.supply_chain_analyst": "Supply Chain Analyst",
    "partners.roles.supply_chain.planning_scheduling_specialist":
      "Planning & Scheduling Specialist",
    "partners.roles.supply_chain.logistics_optimization_specialist":
      "Logistics Optimization Specialist",
    "partners.roles.supply_chain.procurement_supplier_risk_specialist":
      "Procurement & Supplier Risk Specialist",
    "partners.roles.supply_chain.inventory_optimization_analyst":
      "Inventory Optimization Analyst",
    "partners.roles.governance.grc_consultant": "GRC Consultant",
    "partners.roles.governance.compliance_lead": "Compliance Lead",
    "partners.roles.governance.risk_analyst": "Risk Analyst",
    "partners.roles.governance.control_owner_auditor": "Control Owner / Auditor",
    "partners.roles.product.product_manager_b2b": "Product Manager (B2B)",
    "partners.roles.product.business_analyst": "Business Analyst",
    "partners.roles.product.technical_writer_controlled_docs":
      "Technical Writer (controlled docs)",
    "partners.roles.product.ux_enterprise_systems": "UX for Enterprise Systems",
    "partners.companies.title": "Company partners",
    "partners.companies.body":
      "Consultancies, boutiques, and independent networks can submit a company signal to coordinate multi-role delivery. We focus on accountability, clear staffing, and scoped outcomes.",
    "partners.companies.highlight":
      "Company partners receive scoped briefs, talent alignment, and clear HR traceability before delivery begins.",
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
    "partners.form.secondaryRoles.helper":
      "Select additional specialties to improve matching.",
    "partners.form.domains.label": "Domain focus",
    "partners.form.domains.helper":
      "Pick at least one domain to describe your signal.",
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
    "partners.form.consent.label":
      "I consent to Lucien storing my signal profile and contacting me for matching.",
    "partners.form.submit": "Submit signal",
    "partners.form.submitSticky": "Submit signal",
    "partners.form.submitting": "Submitting",
    "partners.form.error.generic":
      "We could not submit the signal. Please try again.",
    "partners.form.error.rateLimit":
      "Too many submissions. Please wait and try again.",
    "partners.form.error.invalid":
      "Check required fields and try again.",
    "partners.form.error.unavailable":
      "Signals are temporarily unavailable. Please try again shortly.",
    "partners.success.title": "Signal received",
    "partners.success.subtitle":
      "We will review and respond with next steps.",
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
    "portal.hr.talent.missing.body":
      "Run the latest migrations to initialize partner tables.",
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
    "portal.hr.talent.detail.empty": "Select a profile to view details.",
  },
  cs: {},
  de: {},
  it: {},
  uk: {},
  zh: {},
} as const;

const fallbackLocale: SupportedLocale = "en";

const dictionaryTable = dictionary as PartialDictionary;

const normalizeLocale = (value?: string | null): SupportedLocale | null => {
  if (!value) return null;
  const cleaned = value.toLowerCase().trim();
  const direct = localeAliases[cleaned];
  if (direct) return direct;
  const base = cleaned.split(/[-_]/)[0];
  return localeAliases[base] ?? null;
};

const getCookieValue = (cookieHeader: string | null, name: string) => {
  if (!cookieHeader) return null;
  const cookies = cookieHeader.split(";").map((entry) => entry.trim());
  for (const cookie of cookies) {
    const [key, ...rest] = cookie.split("=");
    if (key === name) {
      return decodeURIComponent(rest.join("="));
    }
  }
  return null;
};

const getLocaleFromAcceptLanguage = (header: string | null) => {
  if (!header) return null;
  const locales = header.split(",").map((item) => item.split(";")[0]?.trim());
  for (const locale of locales) {
    const resolved = normalizeLocale(locale);
    if (resolved) return resolved;
  }
  return null;
};

export async function getLocaleFromRequest(
  request?: Request,
): Promise<SupportedLocale> {
  if (request) {
    const url = new URL(request.url);
    const paramLocale = normalizeLocale(url.searchParams.get("lang"));
    if (paramLocale) return paramLocale;
    const cookieLocale = normalizeLocale(
      getCookieValue(request.headers.get("cookie"), "lang") ??
        getCookieValue(request.headers.get("cookie"), "locale"),
    );
    if (cookieLocale) return cookieLocale;
    const headerLocale = getLocaleFromAcceptLanguage(
      request.headers.get("accept-language"),
    );
    if (headerLocale) return headerLocale;
    return fallbackLocale;
  }

  try {
    const { cookies, headers } = await import("next/headers");
    const cookieStore = await cookies();
    const storedLocale =
      cookieStore.get("lang")?.value ?? cookieStore.get("locale")?.value ?? null;
    const normalizedLocale = normalizeLocale(storedLocale);
    if (normalizedLocale) return normalizedLocale;
    const headerStore = await headers();
    const headerLocale = getLocaleFromAcceptLanguage(
      headerStore.get("accept-language"),
    );
    if (headerLocale) return headerLocale;
  } catch {
    // Fall through to fallback locale.
  }

  return fallbackLocale;
}

export function getClientLocale(
  fallback: SupportedLocale = fallbackLocale,
): SupportedLocale {
  if (typeof window === "undefined") return fallback;
  const params = new URLSearchParams(window.location.search);
  const paramLocale = normalizeLocale(params.get("lang"));
  if (paramLocale) return paramLocale;
  const docLocale = normalizeLocale(document.documentElement.lang);
  if (docLocale) return docLocale;
  const navLocale = normalizeLocale(navigator.language);
  return navLocale ?? fallback;
}

export function t(
  key: DictionaryKey | string,
  arg1?: TranslationParams | SupportedLocale,
  arg2?: SupportedLocale | TranslationParams,
): string {
  let params: TranslationParams = {};
  let locale: SupportedLocale = fallbackLocale;

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
  const template =
    table?.[key as DictionaryKey] ??
    fallback?.[key as DictionaryKey] ??
    key;

  return template.replace(/\{(\w+)\}/g, (_, token) => {
    const value = params[token];
    return value === undefined ? `{${token}}` : String(value);
  });
}

export type { DictionaryKey };
export { supportedLocales, normalizeLocale };
