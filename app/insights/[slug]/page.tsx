import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { insights } from "@/content/insights";
import { services } from "@/content/services";
import { formatDurationRange } from "@/lib/commerce";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { buildPageMetadata, breadcrumbSchema, webPageSchema } from "@/lib/seo";
import { MotionIn } from "@/components/MotionIn";

export function generateStaticParams() {
  return insights.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const insight = insights.find((item) => item.slug === slug);
  if (!insight) {
    return buildPageMetadata({
      title: "Insight Not Found",
      description: "The requested insight could not be found.",
      path: "/insights",
    });
  }

  return buildPageMetadata({
    title: insight.title,
    description: insight.description,
    path: `/insights/${insight.slug}`,
    keywords: ["insight", "systems", "architecture"],
  });
}

export default async function InsightDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const insight = insights.find((item) => item.slug === slug);

  if (!insight) {
    notFound();
  }

  const relatedServices = services.filter((service) =>
    insight.relatedServices.includes(service.slug),
  );

  return (
    <>
      <JsonLd
        id={`insight-breadcrumb-${insight.slug}`}
        data={
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Insights", path: "/insights" },
            { name: insight.title, path: `/insights/${insight.slug}` },
          ])
        }
      />
      <JsonLd
        id={`insight-webpage-${insight.slug}`}
        data={webPageSchema({
          name: insight.title,
          path: `/insights/${insight.slug}`,
        })}
      />
      <section className="mx-auto w-full max-w-4xl px-6 pb-16 pt-12">
        <MotionIn className="space-y-6">
          <Breadcrumbs
            items={[
              { href: "/", label: "Home" },
              { href: "/insights", label: "Insights" },
              { href: `/insights/${insight.slug}`, label: insight.title },
            ]}
          />
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-slate">
              {insight.date} - {insight.readingTime}
            </p>
            <h1 className="text-3xl font-semibold text-ash">
              {insight.title}
            </h1>
            <p className="text-sm text-muted">{insight.description}</p>
          </div>
        </MotionIn>
        <div className="mt-10 space-y-8">
          {insight.sections.map((section) => (
            <MotionIn
              key={section.heading ?? section.paragraphs[0]}
              className="rounded-2xl border border-line/80 bg-soft p-6"
            >
              {section.heading && (
                <h2 className="text-lg font-semibold text-ash">
                  {section.heading}
                </h2>
              )}
              <div className="mt-3 space-y-3 text-sm text-muted">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              {section.bullets && section.bullets.length > 0 && (
                <ul className="mt-4 space-y-2 text-sm text-muted">
                  {section.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-slate" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
            </MotionIn>
          ))}
        </div>
        {relatedServices.length > 0 && (
          <MotionIn className="mt-10 rounded-2xl border border-line/80 bg-soft p-6">
            <h2 className="text-lg font-semibold text-ash">
              Related services
            </h2>
            <div className="mt-4 grid gap-3">
              {relatedServices.map((service) => (
                <MotionIn key={service.slug} hover>
                  <Link
                    href={`/marketplace/${service.slug}`}
                    className="card-animate flex items-center justify-between rounded-2xl border border-line/80 bg-ink px-4 py-3 text-sm text-slate transition hover:border-slate"
                  >
                    <span>{service.title}</span>
                    <span className="text-[0.65rem] uppercase tracking-[0.2em] text-muted">
                      {formatDurationRange(service)}
                    </span>
                  </Link>
                </MotionIn>
              ))}
            </div>
          </MotionIn>
        )}
        <MotionIn className="card-animate mt-10 flex flex-col items-start justify-between gap-6 rounded-2xl border border-line/80 bg-soft p-6 md:flex-row md:items-center">
          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-ash">
              Ready to apply this insight
            </h2>
            <p className="text-sm text-muted">
              Explore the marketplace or open a secure inquiry to discuss your
              mission context.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/marketplace"
              className="btn-animate btn-secondary rounded-full px-6 py-2 text-xs uppercase tracking-[0.2em]"
            >
              Marketplace
            </Link>
            <Link
              href="/request-scope"
              className="btn-animate btn-primary rounded-full px-6 py-2 text-xs uppercase tracking-[0.2em]"
            >
              Request scope
            </Link>
          </div>
        </MotionIn>
      </section>
    </>
  );
}
