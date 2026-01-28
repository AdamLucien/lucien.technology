import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { services } from "@/content/services";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import {
  buildPageMetadata,
  breadcrumbSchema,
  faqSchema,
  serviceSchema,
  webPageSchema,
} from "@/lib/seo";
import { MotionIn } from "@/components/MotionIn";
import {
  formatDurationRange,
  formatHourlyRange,
  formatProjectRange,
} from "@/lib/commerce";

const normalizeSlug = (slug: string) => decodeURIComponent(slug).toLowerCase();

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug: rawSlug } = await params;
  const slug = normalizeSlug(rawSlug);
  const service = services.find((item) => item.slug === slug);
  if (!service) {
    return buildPageMetadata({
      title: "Service Not Found",
      description: "The requested service could not be found.",
      path: "/marketplace",
    });
  }

  return buildPageMetadata({
    title: service.title,
    description: service.oneLine,
    path: `/marketplace/${service.slug}`,
    keywords: service.tags,
  });
}

export default async function ServiceDetailPage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
}) {
  const { slug: rawSlug } = await params;
  const resolvedSearchParams = await searchParams;
  const slug = normalizeSlug(rawSlug);
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  const query = resolvedSearchParams
    ? new URLSearchParams(
        Object.entries(resolvedSearchParams).flatMap(([key, value]) => {
          if (Array.isArray(value)) {
            return value.map((entry) => [key, entry]);
          }
          if (value === undefined) {
            return [];
          }
          return [[key, value]];
        }),
      ).toString()
    : "";
  const marketplaceHref = query ? `/marketplace?${query}` : "/marketplace";
  const requestScopeHref = `/request-scope?service=${service.slug}&mode=${service.defaultMode}`;
  const inputsRequired = service.inputsRequired.some((item) =>
    item.toLowerCase().includes("decision owner"),
  )
    ? service.inputsRequired
    : ["Named decision owner for scope approvals", ...service.inputsRequired];
  const primaryDeliverables = service.deliverables.slice(0, 2).join(" and ");
  const definitionOfDone = [
    `${service.outcomes[0] ?? "Decision-ready outcomes"} are documented and approved by the named decision owner.`,
    `Core artifacts delivered: ${primaryDeliverables || "scope brief and risk register"}.`,
    `${service.deliverables[2] ?? "Risk and dependency register"} is accepted with clear review criteria.`,
    "Scope narrative, constraints, and risks are signed off for procurement action.",
  ];
  const nextSteps = [
    "Submit a short scope request with your context.",
    "We confirm fit, constraints, and the access path.",
    "You receive a decision-ready scope pack within 2 business days.",
  ];
  const controlMeasures = [
    "Decision-ready scope with named ownership and approval gates.",
    "Risk register tied to system boundaries and control gaps.",
    "Evidence-backed deliverables aligned to procurement needs.",
    "Operational constraints mapped before any build commitment.",
  ];
  const procurementPack = [
    service.outcomes[0] ?? "Decision-ready scope narrative",
    service.deliverables[0] ?? "Architecture baseline brief",
    service.deliverables[1] ?? "Risk and dependency register",
    service.outcomes[1] ?? "Procurement-ready next-step options",
  ];

  return (
    <>
      <JsonLd
        id={`service-breadcrumb-${service.slug}`}
        data={
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Marketplace", path: "/marketplace" },
            { name: service.title, path: `/marketplace/${service.slug}` },
          ])
        }
      />
      <JsonLd
        id={`service-webpage-${service.slug}`}
        data={webPageSchema({
          name: service.title,
          path: `/marketplace/${service.slug}`,
        })}
      />
      <JsonLd id={`service-schema-${service.slug}`} data={serviceSchema(service)} />
      <JsonLd id={`faq-schema-${service.slug}`} data={faqSchema(service.faq)} />

      <section className="mx-auto w-full max-w-5xl px-6 pb-16 pt-12">
        <MotionIn className="space-y-8">
          <Breadcrumbs
            items={[
              { href: "/", label: "Home" },
              { href: "/marketplace", label: "Marketplace" },
              { href: `/marketplace/${service.slug}`, label: service.title },
            ]}
          />
          <Link
            href={marketplaceHref}
            className="text-xs uppercase tracking-[0.2em] text-muted"
          >
            Back to marketplace
          </Link>
          <div className="space-y-5">
            <h1 className="text-3xl font-semibold text-ash">
              {service.title}
            </h1>
            <p className="text-lg text-muted">{service.oneLine}</p>
            <div className="grid gap-3 rounded-2xl border border-line/80 bg-soft p-4 text-xs uppercase tracking-[0.2em] text-slate md:grid-cols-3">
              <div className="flex flex-col gap-2">
                <span className="text-muted">Duration</span>
                <span className="text-ash">{formatDurationRange(service)}</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-muted">Delivery mode</span>
                <span className="text-ash">{service.defaultMode}</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-muted">Project range</span>
                <span className="text-ash">{formatProjectRange(service)}</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href={requestScopeHref}
                className="btn-animate btn-primary inline-flex rounded-full px-6 py-3 text-xs uppercase tracking-[0.2em]"
              >
                {service.ctaLabel}
              </Link>
              <Link
                href="/marketplace"
                className="text-xs uppercase tracking-[0.2em] text-slate"
              >
                View marketplace
              </Link>
            </div>
            <div className="rounded-2xl border border-line/80 bg-soft p-4">
              <h2 className="text-xs uppercase tracking-[0.2em] text-slate">
                Paid Scoping Engagement
              </h2>
              <p className="mt-2 text-sm text-muted">
                Scope definition is a paid engagement that produces a
                procurement-ready scope, acceptance criteria, and delivery
                options. If you proceed, the scoping fee is credited against
                follow-on delivery.
              </p>
            </div>
            <div className="rounded-2xl border border-line/80 bg-soft p-4">
              <h2 className="text-xs uppercase tracking-[0.2em] text-slate">
                What happens next
              </h2>
              <ol className="mt-4 space-y-2 text-sm text-muted">
                {nextSteps.map((step, index) => (
                  <li key={step} className="flex gap-3">
                    <span className="text-xs text-slate">0{index + 1}</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </MotionIn>

        <div className="mt-12 space-y-10">
          <MotionIn className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-line/80 bg-soft p-6">
              <h2 className="text-sm uppercase tracking-[0.2em] text-slate">
                Best for
              </h2>
              <ul className="mt-4 space-y-2 text-sm text-muted">
                {service.bestFor.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-slate" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-line/80 bg-soft p-6">
              <h2 className="text-sm uppercase tracking-[0.2em] text-slate">
                Not for
              </h2>
              <ul className="mt-4 space-y-2 text-sm text-muted">
                {service.notFor.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-slate" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </MotionIn>

          <MotionIn className="space-y-4">
            <h2 className="text-xl font-semibold text-ash">Expected outcomes</h2>
            <p className="text-sm text-muted">{service.problemStatement}</p>
            <ul className="space-y-2 text-sm text-muted">
              {service.outcomes.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-slate" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </MotionIn>

          <MotionIn className="space-y-4">
            <h2 className="text-xl font-semibold text-ash">
              How we measure control
            </h2>
            <ul className="space-y-2 text-sm text-muted">
              {controlMeasures.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-slate" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </MotionIn>

          <MotionIn className="space-y-4">
            <h2 className="text-xl font-semibold text-ash">
              Artifacts you receive
            </h2>
            <ul className="space-y-2 text-sm text-muted">
              {service.deliverables.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-slate" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="rounded-2xl border border-line/80 bg-soft p-4">
              <h3 className="text-sm uppercase tracking-[0.2em] text-slate">
                Definition of done
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-muted">
                {definitionOfDone.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-slate" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </MotionIn>

          <MotionIn className="space-y-4">
            <h2 className="text-xl font-semibold text-ash">Process</h2>
            <ol className="space-y-3 text-sm text-muted">
              {service.processSteps.map((step, index) => (
                <li key={step} className="flex gap-4">
                  <span className="text-xs text-slate">0{index + 1}</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </MotionIn>

          <MotionIn className="space-y-4">
            <h2 className="text-xl font-semibold text-ash">
              What we need to start
            </h2>
            <ul className="space-y-2 text-sm text-muted">
              {inputsRequired.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-slate" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </MotionIn>

          <MotionIn className="space-y-6 rounded-2xl border border-line/80 bg-soft p-6">
            <div className="space-y-2">
              <h2 className="text-xl font-semibold text-ash">
                Pricing & duration
              </h2>
              <p className="text-sm text-muted">
                Duration: {formatDurationRange(service)}
              </p>
              <p className="text-sm text-muted">
                Project range: {formatProjectRange(service)}
              </p>
              <p className="text-sm text-muted">
                Hourly equivalent: {formatHourlyRange(service)}
              </p>
            </div>
            <div className="rounded-2xl border border-line/80 bg-ink/60 p-4">
              <h3 className="text-xs uppercase tracking-[0.2em] text-slate">
                Paid Scoping Engagement
              </h3>
              <p className="mt-2 text-sm text-muted">
                Scope definition is a paid engagement that produces a
                procurement-ready scope, acceptance criteria, and delivery
                options. If you proceed, the scoping fee is credited against
                follow-on delivery.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm uppercase tracking-[0.2em] text-slate">
                Includes
              </h3>
              <ul className="space-y-2 text-sm text-muted">
                {service.includes.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-slate" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-sm text-muted">{service.onsitePolicy.text}</p>
            <p className="text-xs text-muted">
              Price depends on scope, security posture, and integration
              constraints.
            </p>
            <p className="text-xs text-muted">{service.pricing.notes}</p>
          </MotionIn>

          <MotionIn className="space-y-4 rounded-2xl border border-line/80 bg-soft p-6">
            <h2 className="text-sm uppercase tracking-[0.2em] text-slate">
              Procurement pack
            </h2>
            <ul className="space-y-2 text-sm text-muted">
              {procurementPack.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-slate" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </MotionIn>

          <MotionIn className="card-animate flex flex-col items-start justify-between gap-6 rounded-2xl border border-line/80 bg-soft p-6 md:flex-row md:items-center">
            <div className="space-y-3">
              <h2 className="text-xl font-semibold text-ash">Request scope</h2>
              <p className="text-sm text-muted">
                This step is required before any engagement. We respond within 2
                business days.
              </p>
            </div>
            <Link
              href={requestScopeHref}
              className="btn-animate btn-primary rounded-full px-6 py-2 text-xs uppercase tracking-[0.2em]"
            >
              {service.ctaLabel}
            </Link>
          </MotionIn>

          <MotionIn className="space-y-4 rounded-2xl border border-line/80 bg-soft p-6">
            <h2 className="text-lg font-semibold text-ash">
              Security & confidentiality
            </h2>
            <p className="text-sm text-muted">{service.securityNote}</p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/security"
                className="text-xs uppercase tracking-[0.2em] text-slate"
              >
                Security posture
              </Link>
              <Link
                href="/legal"
                className="text-xs uppercase tracking-[0.2em] text-slate"
              >
                Legal & compliance
              </Link>
            </div>
          </MotionIn>

          <MotionIn className="space-y-4 rounded-2xl border border-line/80 bg-soft p-6">
            <h2 className="text-lg font-semibold text-ash">FAQ</h2>
            <div className="space-y-4 text-sm text-muted">
              {service.faq.map((item) => (
                <div key={item.question}>
                  <p className="text-ash">{item.question}</p>
                  <p className="mt-2 text-muted">{item.answer}</p>
                </div>
              ))}
            </div>
          </MotionIn>

          <MotionIn className="card-animate flex flex-col items-start justify-between gap-6 rounded-2xl border border-line/80 bg-soft p-6 md:flex-row md:items-center">
            <div className="space-y-3">
              <h2 className="text-xl font-semibold text-ash">Request scope</h2>
              <p className="text-sm text-muted">
                This step is required before any engagement. We respond within 2
                business days.
              </p>
            </div>
            <Link
              href={requestScopeHref}
              className="btn-animate btn-primary rounded-full px-6 py-2 text-xs uppercase tracking-[0.2em]"
            >
              {service.ctaLabel}
            </Link>
          </MotionIn>
        </div>
      </section>
    </>
  );
}
