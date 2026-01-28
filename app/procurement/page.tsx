import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { buildPageMetadata, breadcrumbSchema, webPageSchema } from "@/lib/seo";
import { MotionIn } from "@/components/MotionIn";

export const metadata = buildPageMetadata({
  title: "Procurement",
  description:
    "Procurement-ready engagement structure, invoicing guidance, and secure intake for Lucien services.",
  path: "/procurement",
  keywords: ["procurement", "invoicing", "engagement terms"],
});

export default function ProcurementPage() {
  return (
    <>
      <JsonLd
        id="procurement-breadcrumb"
        data={
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Procurement", path: "/procurement" },
          ])
        }
      />
      <JsonLd
        id="procurement-webpage"
        data={webPageSchema({ name: "Procurement", path: "/procurement" })}
      />
      <section className="mx-auto w-full max-w-5xl px-6 pb-16 pt-12">
        <MotionIn className="space-y-8">
          <Breadcrumbs
            items={[
              { href: "/", label: "Home" },
              { href: "/procurement", label: "Procurement" },
            ]}
          />
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-slate">
              Procurement
            </p>
            <h1 className="text-3xl font-semibold text-ash">
              Procurement-ready engagement guidance
            </h1>
            <p className="text-sm text-muted">
              Lucien engagements are structured for enterprise procurement with
              clear pricing logic, secure intake, and documentation that stands
              up to audit and governance review.
            </p>
          </div>
        </MotionIn>
        <MotionIn className="mt-10 grid gap-4 md:grid-cols-2">
          {[
            {
              title: "How engagements are priced",
              detail:
                "Project ranges and hourly equivalents are transparent, with scope drivers documented before delivery begins.",
            },
            {
              title: "What's included",
              detail:
                "Senior delivery leadership, decision-ready documentation, and a secure intake path are standard.",
            },
            {
              title: "On-site policy",
              detail:
                "On-site delivery is available when required. Travel and on-site days are priced separately and agreed in advance.",
            },
            {
              title: "Security and confidentiality",
              detail:
                "We align with best practices, maintain a risk-managed approach, and support NDAs for sensitive engagements.",
            },
            {
              title: "Invoice/PO support",
              detail:
                "We support invoicing, purchase orders, and milestone-based billing aligned to procurement workflows.",
            },
          ].map((item) => (
            <MotionIn
              key={item.title}
              hover
              className="card-animate rounded-2xl border border-line/80 bg-soft p-6"
            >
              <h2 className="text-lg font-semibold text-ash">{item.title}</h2>
              <p className="mt-3 text-sm text-muted">{item.detail}</p>
            </MotionIn>
          ))}
        </MotionIn>
        <MotionIn className="mt-10 rounded-2xl border border-line/80 bg-soft p-6">
          <h2 className="text-lg font-semibold text-ash">Reference links</h2>
          <p className="mt-3 text-sm text-muted">
            Review security posture and legal terms before executing a scoped
            engagement.
          </p>
          <div className="mt-4 flex flex-wrap gap-4 text-xs uppercase tracking-[0.2em] text-slate">
            <Link href="/security">Security</Link>
            <Link href="/legal">Legal</Link>
          </div>
        </MotionIn>
        <MotionIn className="card-animate mt-10 flex flex-col items-start justify-between gap-6 rounded-2xl border border-line/80 bg-soft p-6 md:flex-row md:items-center">
          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-ash">
              Ready to scope an engagement
            </h2>
            <p className="text-sm text-muted">
              Start with a scope request or return to the marketplace to choose
              the right problem-driven engagement.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/request-scope"
              className="btn-animate btn-primary rounded-full px-6 py-2 text-xs uppercase tracking-[0.2em]"
            >
              Request scope
            </Link>
            <Link
              href="/marketplace"
              className="btn-animate btn-secondary rounded-full px-6 py-2 text-xs uppercase tracking-[0.2em]"
            >
              Marketplace
            </Link>
          </div>
        </MotionIn>
      </section>
    </>
  );
}
