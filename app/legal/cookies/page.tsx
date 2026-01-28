import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { buildPageMetadata, breadcrumbSchema, webPageSchema } from "@/lib/seo";
import { MotionIn } from "@/components/MotionIn";
import { LegalCta } from "@/components/LegalCta";

export const metadata = buildPageMetadata({
  title: "Cookie Notice",
  description: "Cookie notice for Lucien digital properties.",
  path: "/legal/cookies",
  keywords: ["cookies", "notice", "analytics"],
});

export default function CookiesPage() {
  return (
    <>
      <JsonLd
        id="cookies-breadcrumb"
        data={
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Legal", path: "/legal" },
            { name: "Cookies", path: "/legal/cookies" },
          ])
        }
      />
      <JsonLd
        id="cookies-webpage"
        data={webPageSchema({ name: "Cookie Notice", path: "/legal/cookies" })}
      />
      <section className="mx-auto w-full max-w-4xl px-6 pb-16 pt-12">
        <MotionIn className="space-y-8">
          <Breadcrumbs
            items={[
              { href: "/", label: "Home" },
              { href: "/legal", label: "Legal" },
              { href: "/legal/cookies", label: "Cookies" },
            ]}
          />
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-slate">
              Cookie notice
            </p>
            <h1 className="text-3xl font-semibold text-ash">
              Minimal analytics, controlled tracking
            </h1>
            <p className="text-sm text-muted">
              Lucien uses limited cookies and analytics for operational
              performance monitoring and site stability.
            </p>
          </div>
        </MotionIn>
        <MotionIn className="mt-10 space-y-6">
          {[
            {
              title: "Essential cookies",
              body:
                "Essential cookies support secure navigation and basic site functionality.",
            },
            {
              title: "Analytics",
              body:
                "We use aggregated analytics to understand traffic and improve performance. Analytics data is not used for advertising.",
            },
            {
              title: "Controls",
              body:
                "You can restrict cookies in your browser settings. Some features may be affected.",
            },
          ].map((section) => (
            <div
              key={section.title}
              className="surface-card rounded-2xl border border-line/80 bg-soft p-6"
            >
              <h2 className="text-lg font-semibold text-ash">{section.title}</h2>
              <p className="mt-3 text-sm text-muted">{section.body}</p>
            </div>
          ))}
        </MotionIn>
        <LegalCta />
      </section>
    </>
  );
}
