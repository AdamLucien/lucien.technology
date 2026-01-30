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
              Build a scope in a guided journey
            </h1>
            <p className="max-w-2xl text-sm text-muted">
              Describe the problem, add context, select services, and send a
              scope request in one flow.
            </p>
          </div>
          <MarketplaceClientLoader />
        </MotionIn>
      </section>
    </>
  );
}
