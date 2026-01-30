"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { Dispatch, SetStateAction } from "react";
import { useRouter } from "next/navigation";
import { services } from "@/content/services";
import type { Service } from "@/content/services";

const storageKey = "marketplace_journey_v1";

const modes = ["remote", "hybrid", "on-site"] as const;

type JourneyState = {
  problem: string;
  selectedDomains: string[];
  selectedIndustries: string[];
  selectedUrgency: string;
  selectedMode: string;
  selectedServices: string[];
  serviceNotes: Record<string, string>;
  desiredOutcome: string;
};

type Recommendation = {
  service: Service;
  score: number;
  reasons: string[];
};

const uniqueSorted = (values: string[]) => Array.from(new Set(values)).sort();

const tokenize = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter(Boolean);

const buildSuggestionTags = () => {
  const counts = new Map<string, number>();
  services.forEach((service) => {
    service.tags.forEach((tag) => {
      const key = tag.toLowerCase();
      counts.set(key, (counts.get(key) ?? 0) + 1);
    });
  });
  return Array.from(counts.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10)
    .map(([tag]) => tag);
};

const suggestionTags = buildSuggestionTags();

const buildContextSummary = (state: JourneyState) => {
  const parts: string[] = [];
  if (state.selectedDomains.length > 0) {
    parts.push(`Domains: ${state.selectedDomains.join(", ")}`);
  }
  if (state.selectedIndustries.length > 0) {
    parts.push(`Industries: ${state.selectedIndustries.join(", ")}`);
  }
  if (state.selectedUrgency) {
    parts.push(`Urgency: ${state.selectedUrgency}`);
  }
  if (state.selectedMode) {
    parts.push(`Mode: ${state.selectedMode}`);
  }
  return parts.length > 0 ? parts.join(" · ") : "No context set yet";
};

const buildRecommendation = (
  service: Service,
  state: JourneyState,
  tokens: Set<string>,
): Recommendation => {
  let score = 0;
  const reasons: string[] = [];

  if (state.selectedDomains.length > 0) {
    const domainMatches = state.selectedDomains.filter((domain) =>
      service.domains.includes(domain),
    );
    if (domainMatches.length > 0) {
      score += domainMatches.length * 4;
      reasons.push("domain match");
    }
  }

  if (state.selectedMode && service.deliveryModes.includes(state.selectedMode as never)) {
    score += 2;
    reasons.push("mode match");
  }

  if (state.selectedUrgency && service.urgency.includes(state.selectedUrgency)) {
    score += 1.5;
    reasons.push("urgency match");
  }

  if (tokens.size > 0) {
    const tagMatch = service.tags.some((tag) => tokens.has(tag.toLowerCase()));
    if (tagMatch) {
      score += 1.2;
      reasons.push("tag match");
    }
    const text = `${service.title} ${service.oneLine}`.toLowerCase();
    if (Array.from(tokens).some((token) => text.includes(token))) {
      score += 1;
      reasons.push("keyword match");
    }
  }

  if (reasons.length === 0) {
    reasons.push("best-fit baseline");
  }

  return { service, score, reasons };
};

const buildNoteFromSummary = (problem: string, outcome: string) => {
  const parts = [problem.trim(), outcome.trim()].filter(Boolean);
  const summary = parts.join(" | ").replace(/\s+/g, " ").trim();
  return summary.slice(0, 140);
};

export function MarketplaceClient() {
  const router = useRouter();
  const hydratedRef = useRef(false);
  const [isMobile, setIsMobile] = useState(false);

  const [problem, setProblem] = useState("");
  const [selectedDomains, setSelectedDomains] = useState<string[]>([]);
  const [selectedIndustries, setSelectedIndustries] = useState<string[]>([]);
  const [selectedUrgency, setSelectedUrgency] = useState("");
  const [selectedMode, setSelectedMode] = useState("");
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [serviceNotes, setServiceNotes] = useState<Record<string, string>>({});
  const [desiredOutcome, setDesiredOutcome] = useState("");

  const [contextOpen, setContextOpen] = useState(false);
  const [browseOpen, setBrowseOpen] = useState(true);
  const [reviewOpen, setReviewOpen] = useState(false);
  const [expandedService, setExpandedService] = useState<string | null>(null);
  const [mobileService, setMobileService] = useState<Service | null>(null);

  const domains = useMemo(
    () => uniqueSorted(services.flatMap((service) => service.domains)),
    [],
  );
  const industries = useMemo(
    () => uniqueSorted(services.flatMap((service) => service.industries)),
    [],
  );
  const urgencies = useMemo(
    () => uniqueSorted(services.flatMap((service) => service.urgency)),
    [],
  );

  const selectedServiceObjects = useMemo(
    () =>
      selectedServices
        .map((slug) => services.find((service) => service.slug === slug))
        .filter(Boolean) as Service[],
    [selectedServices],
  );

  const contextSummary = useMemo(
    () =>
      buildContextSummary({
        problem,
        selectedDomains,
        selectedIndustries,
        selectedUrgency,
        selectedMode,
        selectedServices,
        serviceNotes,
        desiredOutcome,
      }),
    [
      problem,
      selectedDomains,
      selectedIndustries,
      selectedUrgency,
      selectedMode,
      selectedServices,
      serviceNotes,
      desiredOutcome,
    ],
  );

  const recommendations = useMemo(() => {
    const tokens = new Set(tokenize(problem));
    const state = {
      problem,
      selectedDomains,
      selectedIndustries,
      selectedUrgency,
      selectedMode,
      selectedServices,
      serviceNotes,
      desiredOutcome,
    } satisfies JourneyState;

    return services
      .map((service) => buildRecommendation(service, state, tokens))
      .sort((a, b) => {
        if (b.score !== a.score) return b.score - a.score;
        return a.service.title.localeCompare(b.service.title);
      })
      .slice(0, 3);
  }, [
    problem,
    selectedDomains,
    selectedIndustries,
    selectedUrgency,
    selectedMode,
    selectedServices,
    serviceNotes,
    desiredOutcome,
  ]);

  const toggleSelection = (
    value: string,
    setValue: Dispatch<SetStateAction<string[]>>,
  ) => {
    setValue((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value],
    );
  };

  const toggleService = (slug: string) => {
    setSelectedServices((prev) =>
      prev.includes(slug) ? prev.filter((item) => item !== slug) : [...prev, slug],
    );
  };

  const moveService = (slug: string, direction: "up" | "down") => {
    setSelectedServices((prev) => {
      const index = prev.indexOf(slug);
      if (index < 0) return prev;
      const next = [...prev];
      const target = direction === "up" ? index - 1 : index + 1;
      if (target < 0 || target >= next.length) return prev;
      [next[index], next[target]] = [next[target], next[index]];
      return next;
    });
  };

  const resetJourney = () => {
    setProblem("");
    setSelectedDomains([]);
    setSelectedIndustries([]);
    setSelectedUrgency("");
    setSelectedMode("");
    setSelectedServices([]);
    setServiceNotes({});
    setDesiredOutcome("");
    setContextOpen(false);
    setBrowseOpen(true);
    setReviewOpen(false);
    setExpandedService(null);
    setMobileService(null);
    if (typeof window !== "undefined") {
      window.localStorage.removeItem(storageKey);
    }
  };

  const handleContinueToRequestScope = () => {
    const primaryService = selectedServiceObjects[0];
    if (!primaryService) return;

    const url = new URL("/request-scope", window.location.origin);
    url.searchParams.set("service", primaryService.slug);
    url.searchParams.set(
      "services",
      selectedServiceObjects.map((service) => service.slug).join(","),
    );
    if (selectedMode || primaryService.defaultMode) {
      url.searchParams.set("mode", selectedMode || primaryService.defaultMode);
    }
    if (problem.trim()) {
      url.searchParams.set("problem", problem.trim());
    }
    if (desiredOutcome.trim()) {
      url.searchParams.set("outcome", desiredOutcome.trim());
    }
    if (selectedDomains.length > 0) {
      url.searchParams.set("domains", selectedDomains.join(","));
    }
    if (selectedIndustries.length > 0) {
      url.searchParams.set("industries", selectedIndustries.join(","));
    }
    if (selectedUrgency) {
      url.searchParams.set("urgency", selectedUrgency);
    }
    if (selectedMode) {
      url.searchParams.set("mode", selectedMode);
    }
    const note = buildNoteFromSummary(problem, desiredOutcome);
    if (note) {
      url.searchParams.set("note", note);
    }
    router.push(`${url.pathname}${url.search}`);
  };

  useEffect(() => {
    if (typeof window === "undefined") return;
    const media = window.matchMedia("(max-width: 768px)");
    const handler = () => setIsMobile(media.matches);
    handler();
    media.addEventListener("change", handler);
    return () => media.removeEventListener("change", handler);
  }, []);

  /* eslint-disable react-hooks/set-state-in-effect */
  useEffect(() => {
    if (typeof window === "undefined" || hydratedRef.current) return;
    const stored = window.localStorage.getItem(storageKey);
    if (stored) {
      try {
        const parsed = JSON.parse(stored) as JourneyState;
        setProblem(parsed.problem ?? "");
        setSelectedDomains(parsed.selectedDomains ?? []);
        setSelectedIndustries(parsed.selectedIndustries ?? []);
        setSelectedUrgency(parsed.selectedUrgency ?? "");
        setSelectedMode(parsed.selectedMode ?? "");
        setSelectedServices(parsed.selectedServices ?? []);
        setServiceNotes(parsed.serviceNotes ?? {});
        setDesiredOutcome(parsed.desiredOutcome ?? "");
        if (parsed.problem) {
          setContextOpen(true);
        }
      } catch {
        window.localStorage.removeItem(storageKey);
      }
    }
    hydratedRef.current = true;
  }, []);
  /* eslint-enable react-hooks/set-state-in-effect */

  useEffect(() => {
    if (!hydratedRef.current || typeof window === "undefined") return;
    const payload: JourneyState = {
      problem,
      selectedDomains,
      selectedIndustries,
      selectedUrgency,
      selectedMode,
      selectedServices,
      serviceNotes,
      desiredOutcome,
    };
    window.localStorage.setItem(storageKey, JSON.stringify(payload));
  }, [
    problem,
    selectedDomains,
    selectedIndustries,
    selectedUrgency,
    selectedMode,
    selectedServices,
    serviceNotes,
    desiredOutcome,
  ]);

  const stepHeader = (title: string, hint: string, summary?: string) => (
    <div className="flex flex-col gap-2">
      <div className="text-xs uppercase tracking-[0.25em] text-slate">{title}</div>
      <div className="text-sm text-muted">{hint}</div>
      {summary ? (
        <div className="text-xs text-ash/80">{summary}</div>
      ) : null}
    </div>
  );

  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px]">
      <div className="min-w-0 space-y-6">
        <section className="surface-card rounded-2xl border border-line/80 bg-soft p-6">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.3em] text-slate">
              Marketplace journey
            </p>
            <h2 className="text-2xl font-semibold text-ash">
              What problem are you solving?
            </h2>
            <p className="text-sm text-muted">
              Start by describing the problem in one sentence. This tailors the
              recommendations. No commitment.
            </p>
          </div>
          <div className="mt-4 space-y-4">
            <label className="text-sm text-slate">
              Problem statement
              <textarea
                data-testid="problem-input"
                value={problem}
                onChange={(event) => {
                  const value = event.target.value;
                  setProblem(value);
                  if (value.trim()) {
                    setContextOpen(true);
                  }
                }}
                rows={4}
                className="mt-2 w-full rounded-xl border border-line bg-ink px-4 py-3 text-sm text-ash"
                placeholder="Example: We need a short-term technical leadership partner to stabilize a cross-agency data system."
              />
            </label>
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-[0.2em] text-slate">
                Suggestions
              </p>
              <div className="flex flex-wrap gap-2">
                {suggestionTags.map((tag) => (
                  <button
                    key={tag}
                    data-testid="suggestion-chip"
                    type="button"
                    onClick={() => {
                      setProblem(tag);
                      setContextOpen(true);
                    }}
                    className="rounded-full border border-line px-3 py-1 text-xs text-slate transition hover:border-slate"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                data-testid="review-scope"
                disabled={selectedServices.length === 0}
                onClick={() => setReviewOpen(true)}
                className="btn-animate btn-secondary rounded-full px-5 py-2 text-[0.65rem] uppercase tracking-[0.2em] disabled:cursor-not-allowed disabled:opacity-50"
              >
                Review scope
              </button>
              <button
                type="button"
                onClick={resetJourney}
                className="text-xs uppercase tracking-[0.2em] text-slate"
              >
                Reset
              </button>
            </div>
          </div>
        </section>

        <section
          className="rounded-2xl border border-line/80 bg-soft p-6"
          data-testid="context-step"
        >
          <button
            type="button"
            onClick={() => setContextOpen((prev) => !prev)}
            className="flex w-full items-center justify-between gap-4 text-left"
          >
            {stepHeader(
              "Step 1",
              "Add context to tailor the recommendations.",
              !contextOpen ? contextSummary : undefined,
            )}
            <span className="text-xs uppercase tracking-[0.2em] text-slate">
              {contextOpen ? "Hide" : "Edit"}
            </span>
          </button>
          {contextOpen && (
            <div className="mt-5 space-y-5">
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-[0.2em] text-slate">
                  Domain
                </p>
                <div className="flex flex-wrap gap-2">
                  {domains.map((domain) => (
                    <button
                      key={domain}
                      data-testid={`domain-${domain}`}
                      type="button"
                      aria-pressed={selectedDomains.includes(domain)}
                      onClick={() => toggleSelection(domain, setSelectedDomains)}
                      className={`rounded-full border px-3 py-1 text-xs transition ${
                        selectedDomains.includes(domain)
                          ? "border-ash text-ash"
                          : "border-line text-slate hover:border-slate"
                      }`}
                    >
                      {domain}
                    </button>
                  ))}
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-[0.2em] text-slate">
                  Industry (optional)
                </p>
                <div className="flex flex-wrap gap-2">
                  {industries.map((industry) => (
                    <button
                      key={industry}
                      data-testid={`industry-${industry}`}
                      type="button"
                      aria-pressed={selectedIndustries.includes(industry)}
                      onClick={() => toggleSelection(industry, setSelectedIndustries)}
                      className={`rounded-full border px-3 py-1 text-xs transition ${
                        selectedIndustries.includes(industry)
                          ? "border-ash text-ash"
                          : "border-line text-slate hover:border-slate"
                      }`}
                    >
                      {industry}
                    </button>
                  ))}
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate">
                    Urgency
                  </p>
                  <div className="flex flex-wrap gap-2">
                  {urgencies.map((urgency) => (
                    <button
                      key={urgency}
                      data-testid={`urgency-${urgency}`}
                      type="button"
                      aria-pressed={selectedUrgency === urgency}
                        onClick={() =>
                          setSelectedUrgency(
                            selectedUrgency === urgency ? "" : urgency,
                          )
                        }
                        className={`rounded-full border px-3 py-1 text-xs transition ${
                          selectedUrgency === urgency
                            ? "border-ash text-ash"
                            : "border-line text-slate hover:border-slate"
                        }`}
                      >
                        {urgency}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate">
                    Mode
                  </p>
                  <div className="flex flex-wrap gap-2">
                  {modes.map((mode) => (
                    <button
                      key={mode}
                      data-testid={`mode-${mode}`}
                      type="button"
                      aria-pressed={selectedMode === mode}
                        onClick={() => setSelectedMode(selectedMode === mode ? "" : mode)}
                        className={`rounded-full border px-3 py-1 text-xs transition ${
                          selectedMode === mode
                            ? "border-ash text-ash"
                            : "border-line text-slate hover:border-slate"
                        }`}
                      >
                        {mode}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>

        <section className="rounded-2xl border border-line/80 bg-soft p-6">
          <button
            type="button"
            onClick={() => setBrowseOpen((prev) => !prev)}
            className="flex w-full items-center justify-between gap-4 text-left"
          >
            {stepHeader(
              "Step 2",
              "Pick 1–3 services to build your scope.",
              !browseOpen && selectedServices.length > 0
                ? `${selectedServices.length} selected`
                : undefined,
            )}
            <span className="text-xs uppercase tracking-[0.2em] text-slate">
              {browseOpen ? "Hide" : "Browse"}
            </span>
          </button>
          {browseOpen && (
            <div className="mt-6 space-y-6">
              <div className="space-y-3">
                <p className="text-xs uppercase tracking-[0.2em] text-slate">
                  Recommended
                </p>
                <div
                  className="grid gap-4 md:grid-cols-2"
                  data-testid="recommended-services"
                >
                  {recommendations.map(({ service, reasons }) => (
                    <div
                      key={service.slug}
                      className="overflow-hidden rounded-2xl border border-line/80 bg-ink/60 p-5"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="min-w-0">
                          <p className="text-xs uppercase tracking-[0.2em] text-slate">
                            Recommended
                          </p>
                          <h3 className="mt-2 text-lg font-semibold text-ash">
                            {service.title}
                          </h3>
                          <p className="mt-2 text-sm text-muted">
                            {service.oneLine}
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={() =>
                            isMobile
                              ? setMobileService(service)
                              : setExpandedService(
                                  expandedService === service.slug
                                    ? null
                                    : service.slug,
                                )
                          }
                          className="text-xs uppercase tracking-[0.2em] text-slate"
                        >
                          Details
                        </button>
                      </div>
                      <p className="mt-3 text-xs text-muted">
                        Recommended because: {reasons.join(" · ")}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-3">
                        <button
                          type="button"
                          data-testid={`toggle-service-${service.slug}`}
                          onClick={() => toggleService(service.slug)}
                          className={`rounded-full border px-4 py-2 text-[0.6rem] uppercase tracking-[0.2em] transition ${
                            selectedServices.includes(service.slug)
                              ? "border-ash text-ash"
                              : "border-line text-slate hover:border-slate"
                          }`}
                        >
                          {selectedServices.includes(service.slug)
                            ? "Remove"
                            : "Add to scope"}
                        </button>
                      </div>
                      {expandedService === service.slug && (
                        <div className="mt-4 space-y-3 text-sm text-muted">
                          <div>
                            <p className="text-xs uppercase tracking-[0.2em] text-slate">
                              Why this
                            </p>
                            <p className="mt-2">{service.problemStatement}</p>
                          </div>
                          <div>
                            <p className="text-xs uppercase tracking-[0.2em] text-slate">
                              What you get
                            </p>
                            <ul className="mt-2 list-disc space-y-1 pl-5">
                              {service.deliverables.slice(0, 4).map((item) => (
                                <li key={item}>{item}</li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <p className="text-xs uppercase tracking-[0.2em] text-slate">
                              What we need from you
                            </p>
                            <ul className="mt-2 list-disc space-y-1 pl-5">
                              {service.inputsRequired.slice(0, 3).map((item) => (
                                <li key={item}>{item}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <p className="text-xs uppercase tracking-[0.2em] text-slate">
                  All services
                </p>
                <div
                  className="grid gap-4 md:grid-cols-2"
                  data-testid="all-services"
                >
                  {services.map((service) => (
                    <div
                      key={service.slug}
                      className="overflow-hidden rounded-2xl border border-line/80 bg-ink/60 p-5"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="min-w-0">
                          <h3 className="text-base font-semibold text-ash">
                            {service.title}
                          </h3>
                          <p className="mt-2 text-xs text-muted">
                            {service.oneLine}
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={() =>
                            isMobile
                              ? setMobileService(service)
                              : setExpandedService(
                                  expandedService === service.slug
                                    ? null
                                    : service.slug,
                                )
                          }
                          className="text-[0.6rem] uppercase tracking-[0.2em] text-slate"
                        >
                          Details
                        </button>
                      </div>
                      <div className="mt-4 flex flex-wrap gap-3">
                        <button
                          type="button"
                          data-testid={`toggle-service-${service.slug}`}
                          onClick={() => toggleService(service.slug)}
                          className={`rounded-full border px-4 py-2 text-[0.6rem] uppercase tracking-[0.2em] transition ${
                            selectedServices.includes(service.slug)
                              ? "border-ash text-ash"
                              : "border-line text-slate hover:border-slate"
                          }`}
                        >
                          {selectedServices.includes(service.slug)
                            ? "Remove"
                            : "Add to scope"}
                        </button>
                      </div>
                      {expandedService === service.slug && (
                        <div className="mt-4 space-y-3 text-sm text-muted">
                          <div>
                            <p className="text-xs uppercase tracking-[0.2em] text-slate">
                              Why this
                            </p>
                            <p className="mt-2">{service.problemStatement}</p>
                          </div>
                          <div>
                            <p className="text-xs uppercase tracking-[0.2em] text-slate">
                              What you get
                            </p>
                            <ul className="mt-2 list-disc space-y-1 pl-5">
                              {service.deliverables.slice(0, 4).map((item) => (
                                <li key={item}>{item}</li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <p className="text-xs uppercase tracking-[0.2em] text-slate">
                              What we need from you
                            </p>
                            <ul className="mt-2 list-disc space-y-1 pl-5">
                              {service.inputsRequired.slice(0, 3).map((item) => (
                                <li key={item}>{item}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </section>
      </div>

      <aside className="hidden min-w-0 lg:block">
        <div className="sticky top-24 space-y-4">
          <div className="rounded-2xl border border-line/80 bg-soft p-5">
            <div className="flex items-center justify-between">
              <p className="text-xs uppercase tracking-[0.2em] text-slate">
                Scope draft
              </p>
              <span
                data-testid="scope-count"
                className="text-xs text-muted"
              >
                {selectedServices.length} selected
              </span>
            </div>
            <p className="mt-2 text-xs text-muted">
              Step 3: Review and send the scope request.
            </p>
            <div className="mt-4 space-y-3">
              {selectedServiceObjects.length === 0 ? (
                <p className="text-sm text-muted">
                  Add services to build your scope.
                </p>
              ) : (
                selectedServiceObjects.map((service) => (
                  <div key={service.slug} className="space-y-1">
                    <p className="text-sm font-semibold text-ash">
                      {service.title}
                    </p>
                    <p className="text-xs text-muted">{service.oneLine}</p>
                  </div>
                ))
              )}
            </div>
            <button
              type="button"
              data-testid="review-scope"
              disabled={selectedServices.length === 0}
              onClick={() => setReviewOpen(true)}
              className="btn-animate btn-secondary mt-4 w-full rounded-full px-4 py-2 text-[0.65rem] uppercase tracking-[0.2em] disabled:cursor-not-allowed disabled:opacity-50"
            >
              Review scope
            </button>
          </div>
        </div>
      </aside>

      {selectedServices.length > 0 && (
        <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-line/80 bg-ink/95 px-4 py-3 lg:hidden">
          <div className="flex items-center justify-between gap-3">
            <div className="min-w-0 text-xs text-slate">
              <span className="font-semibold text-ash">
                {selectedServices.length} selected
              </span>
              <span className="ml-2 text-muted">Review scope next.</span>
            </div>
            <button
              type="button"
              data-testid="review-scope"
              onClick={() => setReviewOpen(true)}
              className="btn-animate btn-secondary rounded-full px-4 py-2 text-[0.6rem] uppercase tracking-[0.2em]"
            >
              Review scope
            </button>
          </div>
        </div>
      )}

      {mobileService && (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-ink/80 p-4">
          <div className="w-full max-w-md overflow-hidden rounded-2xl border border-line/80 bg-soft p-5">
            <div className="flex items-center justify-between">
              <p className="text-xs uppercase tracking-[0.2em] text-slate">
                Service detail
              </p>
              <button
                type="button"
                onClick={() => setMobileService(null)}
                className="text-[0.6rem] uppercase tracking-[0.2em] text-slate"
              >
                Close
              </button>
            </div>
            <h3 className="mt-3 text-lg font-semibold text-ash">
              {mobileService.title}
            </h3>
            <p className="mt-2 text-sm text-muted">{mobileService.oneLine}</p>
            <div className="mt-4 space-y-3 text-sm text-muted max-h-[60vh] overflow-y-auto pr-1">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-slate">
                  Why this
                </p>
                <p className="mt-2">{mobileService.problemStatement}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-slate">
                  What you get
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  {mobileService.deliverables.slice(0, 4).map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-slate">
                  What we need from you
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  {mobileService.inputsRequired.slice(0, 3).map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            <button
              type="button"
              onClick={() => toggleService(mobileService.slug)}
              className={`mt-4 w-full rounded-full border px-4 py-2 text-[0.6rem] uppercase tracking-[0.2em] transition ${
                selectedServices.includes(mobileService.slug)
                  ? "border-ash text-ash"
                  : "border-line text-slate hover:border-slate"
              }`}
            >
              {selectedServices.includes(mobileService.slug)
                ? "Remove"
                : "Add to scope"}
            </button>
          </div>
        </div>
      )}

      {reviewOpen && (
        <div className="fixed inset-0 z-50 flex items-stretch justify-end bg-ink/80">
          <div className="w-full max-w-2xl overflow-hidden border-l border-line/80 bg-soft p-6 md:w-[460px]">
            <div className="flex items-center justify-between">
              <p className="text-xs uppercase tracking-[0.2em] text-slate">
                Step 3 · Review scope
              </p>
              <button
                type="button"
                onClick={() => setReviewOpen(false)}
                className="text-[0.6rem] uppercase tracking-[0.2em] text-slate"
              >
                Close
              </button>
            </div>
            <div
              className="mt-4 max-h-[80vh] overflow-y-auto space-y-5 pr-1"
              data-testid="review-drawer"
            >
              <label className="space-y-2 text-sm text-slate">
                Problem statement
                <textarea
                  value={problem}
                  onChange={(event) => setProblem(event.target.value)}
                  rows={4}
                  className="w-full rounded-xl border border-line bg-ink px-4 py-3 text-sm text-ash"
                />
              </label>
              <div className="rounded-xl border border-line/80 bg-ink/60 p-4">
                <div className="flex items-center justify-between">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate">
                    Context summary
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setReviewOpen(false);
                      setContextOpen(true);
                    }}
                    className="text-[0.6rem] uppercase tracking-[0.2em] text-slate"
                  >
                    Edit context
                  </button>
                </div>
                <p className="mt-2 text-xs text-muted break-words">
                  {contextSummary}
                </p>
              </div>
              <div className="space-y-3">
                <p className="text-xs uppercase tracking-[0.2em] text-slate">
                  Selected services
                </p>
                {selectedServiceObjects.map((service, index) => (
                  <div
                    key={service.slug}
                    data-testid="selected-service"
                    className="rounded-xl border border-line/80 bg-ink/60 p-4"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-sm font-semibold text-ash">
                          {service.title}
                        </p>
                        <p className="mt-1 text-xs text-muted">
                          {service.oneLine}
                        </p>
                      </div>
                      <div className="flex flex-col gap-2 text-[0.6rem] uppercase tracking-[0.2em] text-slate">
                        <button
                          type="button"
                          onClick={() => moveService(service.slug, "up")}
                          disabled={index === 0}
                        >
                          Up
                        </button>
                        <button
                          type="button"
                          onClick={() => moveService(service.slug, "down")}
                          disabled={index === selectedServiceObjects.length - 1}
                        >
                          Down
                        </button>
                        <button
                          type="button"
                          onClick={() => toggleService(service.slug)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                    <label className="mt-3 block text-xs text-slate">
                      Notes (optional)
                      <textarea
                        value={serviceNotes[service.slug] ?? ""}
                        onChange={(event) =>
                          setServiceNotes((prev) => ({
                            ...prev,
                            [service.slug]: event.target.value,
                          }))
                        }
                        rows={3}
                        className="mt-2 w-full rounded-xl border border-line bg-ink px-3 py-2 text-xs text-ash"
                      />
                    </label>
                  </div>
                ))}
              </div>
              <label className="space-y-2 text-sm text-slate">
                Desired outcome
                <input
                  value={desiredOutcome}
                  onChange={(event) => setDesiredOutcome(event.target.value)}
                  className="w-full rounded-xl border border-line bg-ink px-4 py-2 text-sm text-ash"
                  placeholder="Example: Confirm delivery scope and staffing plan"
                />
              </label>
            </div>
            <div className="mt-5 flex flex-wrap gap-3">
              <button
                type="button"
                data-testid="continue-to-request-scope"
                disabled={selectedServices.length === 0}
                onClick={handleContinueToRequestScope}
                className="btn-animate btn-secondary rounded-full px-5 py-2 text-[0.65rem] uppercase tracking-[0.2em] disabled:cursor-not-allowed disabled:opacity-50"
              >
                Continue to request scope
              </button>
              <button
                type="button"
                onClick={() => setReviewOpen(false)}
                className="text-[0.6rem] uppercase tracking-[0.2em] text-slate"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
