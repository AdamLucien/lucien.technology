"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useReducedMotion } from "framer-motion";
import { services } from "@/content/services";
import type { Service } from "@/content/services";
import { ServiceFilters } from "@/components/ServiceFilters";
import { ServiceCard } from "@/components/ServiceCard";
import { Icon } from "@/components/icons/Icon";
import { keywordSuggestions } from "@/components/marketplace/keywordSuggestions";
import { sortServices } from "@/lib/sort";
import { t } from "@/lib/i18n";

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

type IntakeResponse = {
  summary: IntakeSummary;
  recommendations: IntakeRecommendation[];
  shortlistHint?: { max: number };
};

const normalizeText = (value: string) =>
  value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

const tokenizeQuery = (value: string) =>
  normalizeText(value)
    .split(/[,\s]+/)
    .map((token) => token.trim())
    .filter(Boolean);

const suggestionIndex = keywordSuggestions.map((suggestion) => ({
  keyword: normalizeText(suggestion.keyword),
  terms: [
    normalizeText(suggestion.keyword),
    ...suggestion.synonyms.map((item) => normalizeText(item)),
  ],
  intentTags: suggestion.intentTags.map((item) => normalizeText(item)),
}));

const mapUrgencyToTimeframe = (urgency?: string) => {
  if (urgency === "high") return "Immediate";
  if (urgency === "low") return "Strategic";
  return "1-3 months";
};

export function MarketplaceClient() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const prefersReducedMotion = useReducedMotion();

  const [intakeText, setIntakeText] = useState("");
  const [intakeStatus, setIntakeStatus] = useState<
    "idle" | "analyzing" | "done" | "error"
  >("idle");
  const [intakeSummary, setIntakeSummary] = useState<IntakeSummary | null>(null);
  const [intakeRecommendations, setIntakeRecommendations] = useState<
    IntakeRecommendation[]
  >([]);
  const [intakeErrorKey, setIntakeErrorKey] = useState<string | null>(null);
  const [analysisStep, setAnalysisStep] = useState(0);
  const [shortlist, setShortlist] = useState<string[]>([]);
  const [shortlistMax, setShortlistMax] = useState(3);
  const [shortlistOpen, setShortlistOpen] = useState(false);
  const [shortlistNoticeKey, setShortlistNoticeKey] = useState<string | null>(null);
  const [prefillOpen, setPrefillOpen] = useState(false);
  const [summaryDraft, setSummaryDraft] = useState("");
  const analysisTimersRef = useRef<number[]>([]);

  const maxWords = 777;

  const intakeWordCount = useMemo(() => {
    if (!intakeText.trim()) return 0;
    return intakeText.trim().split(/\s+/).filter(Boolean).length;
  }, [intakeText]);

  const clearAnalysisTimers = () => {
    analysisTimersRef.current.forEach((timer) => clearTimeout(timer));
    analysisTimersRef.current = [];
  };

  const startAnalysisStepper = () => {
    clearAnalysisTimers();
    setAnalysisStep(0);
    if (prefersReducedMotion) {
      setAnalysisStep(2);
      return;
    }
    analysisTimersRef.current = [
      window.setTimeout(() => setAnalysisStep(1), 260),
      window.setTimeout(() => setAnalysisStep(2), 520),
    ];
  };

  useEffect(() => {
    return () => {
      clearAnalysisTimers();
    };
  }, []);

  const serviceBySlug = useMemo(
    () => new Map(services.map((service) => [service.slug, service])),
    [],
  );

  const filteredServices = useMemo(() => {
    const getValues = (key: string) => {
      const value = searchParams.get(key);
      return value
        ? value.split(",").map((item) => item.trim()).filter(Boolean)
        : [];
    };

    const domain = getValues("domain");
    const engagement = getValues("engagement");
    const industry = getValues("industry");
    const urgency = getValues("urgency");
    const query = searchParams.get("q") ?? "";
    const tokens = tokenizeQuery(query);
    const expandedTokens = tokens.map((token) => {
      const matches = suggestionIndex.filter((suggestion) =>
        suggestion.terms.some(
          (term) => term.includes(token) || token.includes(term),
        ),
      );
      const expansions = new Set([
        token,
        ...matches.flatMap((item) => [...item.terms, ...item.intentTags]),
      ]);
      return Array.from(expansions).filter(Boolean);
    });

    const matchesFilters = services.map((service) => {
      const domainMatch =
        domain.length === 0 ||
        domain.some((item) => service.domains.includes(item));
      const engagementMatch =
        engagement.length === 0 ||
        engagement.some((item) => service.engagementTypes.includes(item));
      const industryMatch =
        industry.length === 0 ||
        industry.some((item) => service.industries.includes(item));
      const urgencyMatch =
        urgency.length === 0 ||
        urgency.some((item) => service.urgency.includes(item));
      const searchText = normalizeText(
        [
          service.title,
          service.oneLine,
          service.problemStatement,
          service.outcomes.join(" "),
          service.tags.join(" "),
        ].join(" "),
      );
      const queryMatch =
        tokens.length === 0 ||
        expandedTokens.every((variants) =>
          variants.some((variant) => searchText.includes(variant)),
        );
      const relevanceScore = expandedTokens.reduce(
        (score, variants) =>
          score + (variants.some((variant) => searchText.includes(variant)) ? 1 : 0),
        0,
      );

      return {
        service,
        relevanceScore,
        matches:
          domainMatch &&
          engagementMatch &&
          industryMatch &&
          urgencyMatch &&
          queryMatch,
      };
    });

    const relevanceScores = matchesFilters.reduce<Record<string, number>>(
      (acc, item) => {
        acc[item.service.slug] = item.relevanceScore;
        return acc;
      },
      {},
    );

    const sorted = sortServices(
      matchesFilters.filter((item) => item.matches).map((item) => item.service),
      {
        relevanceScores,
        useRelevance: tokens.length > 0,
      },
    );

    return sorted;
  }, [searchParams]);

  const queryParam = searchParams.get("q") ?? "";
  const requestScopeHref = queryParam
    ? `/request-scope?problem=${encodeURIComponent(queryParam)}`
    : "/request-scope";

  const handleRecommend = async () => {
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
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ brief: intakeText }),
      });
      const data = (await response.json()) as IntakeResponse & {
        messageKey?: string;
      };

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
    } catch {
      setIntakeStatus("error");
      setIntakeErrorKey("marketplace.intake.error.generic");
    }
  };

  const handleClear = () => {
    clearAnalysisTimers();
    setIntakeText("");
    setIntakeSummary(null);
    setIntakeRecommendations([]);
    setIntakeErrorKey(null);
    setIntakeStatus("idle");
    setShortlist([]);
    setShortlistNoticeKey(null);
  };

  const toggleShortlist = (slug: string) => {
    setShortlistNoticeKey(null);
    setShortlist((prev) => {
      if (prev.includes(slug)) {
        return prev.filter((item) => item !== slug);
      }
      if (prev.length >= shortlistMax) {
        setShortlistNoticeKey("marketplace.intake.shortlist.limit");
        return prev;
      }
      return [...prev, slug];
    });
    setShortlistOpen(true);
  };

  const primaryRecommendation = intakeRecommendations[0];
  const additionalRecommendations = intakeRecommendations.slice(1);

  const shortlistServices = shortlist
    .map((slug) => serviceBySlug.get(slug))
    .filter((service): service is Service => Boolean(service));
  const fallbackService = primaryRecommendation
    ? serviceBySlug.get(primaryRecommendation.slug)
    : undefined;
  const prefillServices =
    shortlistServices.length > 0
      ? shortlistServices
      : fallbackService
        ? [fallbackService]
        : [];

  const handleGenerateScope = () => {
    if (!summaryDraft) {
      setSummaryDraft(intakeSummary?.text ?? intakeText.trim());
    }
    setPrefillOpen(true);
    setShortlistOpen(false);
  };

  const handleContinue = () => {
    const selectedSlugs =
      shortlist.length > 0
        ? shortlist
        : primaryRecommendation
          ? [primaryRecommendation.slug]
          : [];
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
    if (timeframe) {
      url.searchParams.set("timeframe", timeframe);
    }
    router.push(`${url.pathname}${url.search}`);
  };

  const analysisSteps = [
    t("marketplace.intake.analyzing.step.extract"),
    t("marketplace.intake.analyzing.step.match"),
    t("marketplace.intake.analyzing.step.recommend"),
  ];

  return (
    <div className="grid gap-10 lg:grid-cols-[280px_minmax(0,1fr)_280px]">
      <ServiceFilters />
      <div className="space-y-6">
        <div className="surface-card rounded-2xl border border-line/80 bg-soft p-6">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.3em] text-slate">
              {t("marketplace.intake.title")}
            </p>
            <h2 className="text-lg font-semibold text-ash">
              {t("marketplace.intake.subtitle")}
            </h2>
            <p className="text-sm text-muted">
              {t("marketplace.intake.description")}
            </p>
          </div>
          <div className="mt-4 space-y-3">
            <label className="text-sm text-slate">
              {t("marketplace.intake.brief.label")}
              <textarea
                value={intakeText}
                onChange={(event) => setIntakeText(event.target.value)}
                rows={4}
                className="mt-2 w-full rounded-xl border border-line bg-ink px-4 py-3 text-sm text-ash"
                placeholder={t("marketplace.intake.brief.placeholder")}
              />
            </label>
            <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-muted">
              <span>
                {t("marketplace.intake.wordCount", {
                  count: intakeWordCount,
                  max: maxWords,
                })}
              </span>
              <span>{t("marketplace.intake.recommendationsNote")}</span>
            </div>
            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                onClick={handleRecommend}
                className="btn-animate btn-secondary rounded-full px-4 py-2 text-[0.65rem] uppercase tracking-[0.2em]"
              >
                {t("marketplace.intake.button.recommend")}
              </button>
              <button
                type="button"
                onClick={handleClear}
                className="btn-animate rounded-full border border-line px-4 py-2 text-[0.65rem] uppercase tracking-[0.2em] text-slate transition hover:border-slate"
              >
                {t("marketplace.intake.button.clear")}
              </button>
            </div>
            {intakeStatus === "analyzing" && (
              <div className="mt-4 rounded-xl border border-line/70 bg-ink/60 p-4">
                <div className="text-xs uppercase tracking-[0.2em] text-slate">
                  {t("marketplace.intake.analyzing.title")}
                </div>
                <div className="mt-3 flex flex-wrap items-center gap-4 text-xs text-muted">
                  {analysisSteps.map((label, index) => {
                    const isActive = index <= analysisStep;
                    return (
                      <div
                        key={label}
                        className={`flex items-center gap-2 ${
                          isActive ? "text-ash" : "text-muted"
                        }`}
                      >
                        <span
                          className={`h-2 w-2 rounded-full ${
                            isActive ? "bg-ash" : "bg-line"
                          }`}
                        />
                        <span>{label}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
            {intakeErrorKey && (
              <p className="text-xs text-muted">
                {t(intakeErrorKey, { max: maxWords })}
              </p>
            )}
          </div>
        </div>

        {intakeStatus === "done" && intakeRecommendations.length > 0 && (
          <div className="space-y-4">
            {primaryRecommendation && (
              <div className="card-animate rounded-2xl border border-line/80 bg-soft p-6">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="space-y-2">
                    <p className="text-xs uppercase tracking-[0.2em] text-slate">
                      {t("marketplace.intake.results.primary")}
                    </p>
                    <h3 className="text-xl font-semibold text-ash">
                      {serviceBySlug.get(primaryRecommendation.slug)?.title ??
                        primaryRecommendation.slug}
                    </h3>
                    <p className="text-sm text-muted">
                      {serviceBySlug.get(primaryRecommendation.slug)?.oneLine ??
                        ""}
                    </p>
                  </div>
                  <div className="rounded-full border border-line px-3 py-1 text-xs uppercase tracking-[0.2em] text-ash">
                    {t(`marketplace.intake.fit.${primaryRecommendation.fit}`)}
                  </div>
                </div>
                <div className="mt-4 space-y-3">
                  <div className="flex flex-wrap items-center gap-3 text-xs text-muted">
                    <span>
                      {t("marketplace.intake.confidence", {
                        value: Math.round(primaryRecommendation.confidence * 100),
                      })}
                    </span>
                  </div>
                  <ul className="space-y-2 text-sm text-muted">
                    {primaryRecommendation.reasons.map((reason) => (
                      <li key={reason} className="flex gap-2">
                        <span className="mt-2 h-2 w-2 rounded-full bg-slate" />
                        <span>{reason}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-3">
                    <Link
                      href={`/marketplace/${primaryRecommendation.slug}`}
                      className="btn-animate btn-secondary rounded-full px-4 py-2 text-[0.65rem] uppercase tracking-[0.2em]"
                    >
                      {t("marketplace.intake.card.view")}
                    </Link>
                    <Link
                      href={`/request-scope?service=${encodeURIComponent(
                        primaryRecommendation.slug,
                      )}&mode=${encodeURIComponent(
                        serviceBySlug.get(primaryRecommendation.slug)?.defaultMode ??
                          "remote",
                      )}`}
                      className="btn-animate rounded-full border border-line px-4 py-2 text-[0.65rem] uppercase tracking-[0.2em] text-slate transition hover:border-slate"
                    >
                      {t("marketplace.intake.card.requestScope")}
                    </Link>
                    <button
                      type="button"
                      onClick={() => toggleShortlist(primaryRecommendation.slug)}
                      className="btn-animate rounded-full border border-line px-4 py-2 text-[0.65rem] uppercase tracking-[0.2em] text-slate transition hover:border-slate"
                    >
                      {shortlist.includes(primaryRecommendation.slug)
                        ? t("marketplace.intake.card.removeShortlist")
                        : t("marketplace.intake.card.addShortlist")}
                    </button>
                  </div>
                </div>
              </div>
            )}

            {additionalRecommendations.length > 0 && (
              <div className="space-y-3">
                <p className="text-xs uppercase tracking-[0.2em] text-slate">
                  {t("marketplace.intake.results.more")}
                </p>
                <div className="grid gap-4 md:grid-cols-2">
                  {additionalRecommendations.map((recommendation) => {
                    const service = serviceBySlug.get(recommendation.slug);
                    if (!service) return null;
                    const isShortlisted = shortlist.includes(recommendation.slug);

                    return (
                      <div
                        key={recommendation.slug}
                        className="card-animate rounded-2xl border border-line/80 bg-soft p-5"
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <h4 className="text-base font-semibold text-ash">
                              {service.title}
                            </h4>
                            <p className="mt-1 text-xs text-muted">
                              {service.oneLine}
                            </p>
                          </div>
                          <div className="rounded-full border border-line px-3 py-1 text-[0.6rem] uppercase tracking-[0.2em] text-slate">
                            {t(`marketplace.intake.fit.${recommendation.fit}`)}
                          </div>
                        </div>
                        <div className="mt-3 text-xs text-muted">
                          {t("marketplace.intake.confidence", {
                            value: Math.round(recommendation.confidence * 100),
                          })}
                        </div>
                        <ul className="mt-3 space-y-2 text-xs text-muted">
                          {recommendation.reasons.map((reason) => (
                            <li key={reason} className="flex gap-2">
                              <span className="mt-1 h-2 w-2 rounded-full bg-slate" />
                              <span>{reason}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="mt-4 flex flex-wrap gap-2">
                          <Link
                            href={`/marketplace/${recommendation.slug}`}
                            className="btn-animate rounded-full border border-line px-3 py-1 text-[0.6rem] uppercase tracking-[0.2em] text-slate transition hover:border-slate"
                          >
                            {t("marketplace.intake.card.view")}
                          </Link>
                          <button
                            type="button"
                            onClick={() => toggleShortlist(recommendation.slug)}
                            className="btn-animate rounded-full border border-line px-3 py-1 text-[0.6rem] uppercase tracking-[0.2em] text-slate transition hover:border-slate"
                          >
                            {isShortlisted
                              ? t("marketplace.intake.card.removeShortlist")
                              : t("marketplace.intake.card.addShortlist")}
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        )}

        <div className="flex items-center justify-between">
          <h2 className="text-sm uppercase tracking-[0.2em] text-slate">
            {filteredServices.length} services
          </h2>
        </div>
        {filteredServices.length === 0 ? (
          <div className="rounded-2xl border border-line/80 bg-soft p-8 text-sm text-muted">
            <p>
              No exact match. Request scope and we&apos;ll map your problem to the
              right engagement.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link
                href={requestScopeHref}
                className="btn-animate btn-secondary rounded-full px-4 py-2 text-[0.65rem] uppercase tracking-[0.2em]"
              >
                Request scope
              </Link>
              <button
                type="button"
                onClick={() => router.replace(pathname)}
                className="btn-animate rounded-full border border-line px-4 py-2 text-[0.65rem] uppercase tracking-[0.2em] text-slate transition hover:border-slate"
              >
                Clear filters
              </button>
            </div>
          </div>
        ) : (
          <div className="grid gap-4 md:grid-cols-2">
            {filteredServices.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        )}
      </div>

      <div className="hidden lg:block">
        <div className="sticky top-24 space-y-4">
          <div className="surface-card rounded-2xl border border-line/80 bg-soft p-5">
            <div className="flex items-center justify-between">
              <p className="text-xs uppercase tracking-[0.2em] text-slate">
                {t("marketplace.intake.shortlist.title")}
              </p>
              <span className="text-[0.65rem] text-muted">
                {shortlist.length}/{shortlistMax}
              </span>
            </div>
            <p className="mt-2 text-xs text-muted">
              {t("marketplace.intake.shortlist.helper", { max: shortlistMax })}
            </p>
            {shortlistNoticeKey && (
              <p className="mt-2 text-xs text-muted">
                {t(shortlistNoticeKey)}
              </p>
            )}
            {shortlistServices.length === 0 ? (
              <p className="mt-4 text-sm text-muted">
                {t("marketplace.intake.shortlist.empty")}
              </p>
            ) : (
              <div className="mt-4 space-y-3">
                {shortlistServices.map((service) => (
                  <div key={service.slug} className="space-y-1">
                    <p className="text-sm font-semibold text-ash">
                      {service.title}
                    </p>
                    <p className="text-xs text-muted">{service.oneLine}</p>
                    <button
                      type="button"
                      onClick={() => toggleShortlist(service.slug)}
                      className="text-[0.6rem] uppercase tracking-[0.2em] text-slate"
                    >
                      {t("marketplace.intake.card.removeShortlist")}
                    </button>
                  </div>
                ))}
              </div>
            )}
            <button
              type="button"
              onClick={handleGenerateScope}
              disabled={shortlistServices.length === 0}
              className="btn-animate btn-secondary mt-4 w-full rounded-full px-4 py-2 text-[0.65rem] uppercase tracking-[0.2em]"
            >
              {t("marketplace.intake.shortlist.cta")}
            </button>
          </div>
        </div>
      </div>

      {shortlist.length > 0 && (
        <div
          className={`fixed bottom-0 left-0 right-0 z-40 rounded-t-2xl border border-line/80 bg-soft p-4 shadow-lg transition-transform duration-200 lg:hidden ${
            shortlistOpen ? "translate-y-0" : "translate-y-[70%]"
          }`}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-slate">
              <Icon name="requestScope" size={14} strokeWidth={1.25} />
              {t("marketplace.intake.shortlist.title")}
            </div>
            <button
              type="button"
              onClick={() => setShortlistOpen((prev) => !prev)}
              className="text-[0.65rem] uppercase tracking-[0.2em] text-slate"
            >
              {shortlistOpen
                ? t("marketplace.intake.shortlist.close")
                : t("marketplace.intake.shortlist.open")}
            </button>
          </div>
          <div className="mt-2 text-[0.65rem] text-muted">
            {shortlist.length}/{shortlistMax}
          </div>
          <div className="mt-3 space-y-3">
            {shortlistServices.map((service) => (
              <div key={service.slug} className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-semibold text-ash">
                    {service.title}
                  </p>
                  <p className="text-xs text-muted">{service.oneLine}</p>
                </div>
                <button
                  type="button"
                  onClick={() => toggleShortlist(service.slug)}
                  className="text-[0.6rem] uppercase tracking-[0.2em] text-slate"
                >
                  {t("marketplace.intake.card.removeShortlist")}
                </button>
              </div>
            ))}
          </div>
          <button
            type="button"
            onClick={handleGenerateScope}
            className="btn-animate btn-secondary mt-4 w-full rounded-full px-4 py-2 text-[0.65rem] uppercase tracking-[0.2em]"
          >
            {t("marketplace.intake.shortlist.cta")}
          </button>
        </div>
      )}

      {prefillOpen && (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-ink/80 px-6 py-8">
          <div className="w-full max-w-2xl rounded-2xl border border-line/80 bg-soft p-6">
            <div className="flex items-center justify-between">
              <p className="text-xs uppercase tracking-[0.2em] text-slate">
                {t("marketplace.intake.sheet.title")}
              </p>
              <button
                type="button"
                onClick={() => setPrefillOpen(false)}
                className="text-[0.65rem] uppercase tracking-[0.2em] text-slate"
              >
                {t("marketplace.intake.sheet.cancel")}
              </button>
            </div>
            <div className="mt-4 space-y-4">
              <label className="space-y-2 text-sm text-slate">
                {t("marketplace.intake.sheet.summary.label")}
                <textarea
                  value={summaryDraft}
                  onChange={(event) => setSummaryDraft(event.target.value)}
                  rows={5}
                  className="w-full rounded-xl border border-line bg-ink px-4 py-3 text-sm text-ash"
                  placeholder={t(
                    "marketplace.intake.sheet.summary.placeholder",
                  )}
                />
              </label>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-slate">
                  {t("marketplace.intake.sheet.selected.label")}
                </p>
                <div className="mt-3 space-y-2 text-sm text-muted">
                  {prefillServices.length > 0 ? (
                    prefillServices.map((service) => (
                      <div key={service.slug} className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-slate" />
                        <span>{service.title}</span>
                      </div>
                    ))
                  ) : (
                    <p>{t("marketplace.intake.shortlist.empty")}</p>
                  )}
                </div>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={handleContinue}
                className="btn-animate btn-secondary rounded-full px-4 py-2 text-[0.65rem] uppercase tracking-[0.2em]"
              >
                {t("marketplace.intake.sheet.continue")}
              </button>
              <button
                type="button"
                onClick={() => setPrefillOpen(false)}
                className="btn-animate rounded-full border border-line px-4 py-2 text-[0.65rem] uppercase tracking-[0.2em] text-slate transition hover:border-slate"
              >
                {t("marketplace.intake.sheet.cancel")}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
