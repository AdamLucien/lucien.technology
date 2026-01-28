import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import {
  buildPageMetadata,
  breadcrumbSchema,
  itemListSchema,
  webPageSchema,
} from "@/lib/seo";
import { MotionIn } from "@/components/MotionIn";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { services } from "@/content/services";
import { MarketplaceClientLoader } from "@/components/MarketplaceClientLoader";

export const metadata = buildPageMetadata({
  title: "Marketplace",
  description:
    "Select a mission problem and move into a scoped Lucien engagement.",
  path: "/marketplace",
  keywords: [
    "mission-critical services",
    "systems architecture",
    "security assessments",
  ],
});

export default function MarketplacePage() {
  return (
    <>
      <JsonLd
        id="marketplace-breadcrumb"
        data={
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Marketplace", path: "/marketplace" },
          ])
        }
      />
      <JsonLd
        id="marketplace-webpage"
        data={webPageSchema({ name: "Marketplace", path: "/marketplace" })}
      />
      <JsonLd
        id="marketplace-itemlist"
        data={itemListSchema({
          name: "Lucien Marketplace Services",
          items: services.map((service) => ({
            name: service.title,
            path: `/marketplace/${service.slug}`,
          })),
        })}
      />
      <section className="mx-auto w-full max-w-6xl px-6 pb-16 pt-12">
        <MotionIn className="space-y-6">
          <Breadcrumbs
            items={[
              { href: "/", label: "Home" },
              { href: "/marketplace", label: "Marketplace" },
            ]}
          />
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.3em] text-slate">
              Marketplace
            </p>
            <h1 className="text-3xl font-semibold text-ash">
              Choose the mission problem you need to solve
            </h1>
            <p className="max-w-2xl text-sm text-muted">
              Each engagement is built to validate fit, deliver concrete
              artifacts, and move quickly into scope definition.
              <span className="mt-2 block">
                All engagements begin with a paid scoping step to define
                boundaries, acceptance criteria, and delivery options.
              </span>
            </p>
          </div>
          <MarketplaceClientLoader />
        </MotionIn>
      </section>
      <section className="border-t border-line/70">
        <div className="mx-auto w-full max-w-6xl px-6 py-16">
          <MotionIn className="grid gap-6 md:grid-cols-[1.2fr_0.8fr] md:items-center">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.3em] text-slate">
                Marketplace guidance
              </p>
              <h2 className="text-2xl font-semibold text-ash">
                Shortlist the engagement that matches your constraints
              </h2>
              <p className="text-sm text-muted">
                Filters map to delivery modes, domains, and urgency. Each
                engagement page confirms fit before you submit a scope request.
              </p>
            </div>
            <MotionIn
              hover
              className="card-animate rounded-2xl border border-line/80 bg-soft p-6 transition hover:border-slate"
            >
              <h3 className="text-sm uppercase tracking-[0.2em] text-slate">
                Need direction
              </h3>
              <p className="mt-3 text-sm text-muted">
                Share your objectives and constraints and we will recommend the
                most effective engagement sequence.
              </p>
              <Link
                href="/request-scope"
                className="btn-animate btn-secondary mt-5 inline-flex rounded-full px-6 py-2 text-xs uppercase tracking-[0.2em]"
              >
                Request scope
              </Link>
            </MotionIn>
          </MotionIn>
        </div>
      </section>
    </>
  );
}
