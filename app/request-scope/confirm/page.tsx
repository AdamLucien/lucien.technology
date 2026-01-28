import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { buildPageMetadata, breadcrumbSchema, webPageSchema } from "@/lib/seo";
import { MotionIn } from "@/components/MotionIn";

export const metadata = buildPageMetadata({
  title: "Request Received",
  description: "Your scope request has been received by Lucien.",
  path: "/request-scope/confirm",
  keywords: ["request received", "Lucien"],
});

export default async function RequestScopeConfirmPage({
  searchParams,
}: {
  searchParams:
    | { id?: string | string[] }
    | Promise<{ id?: string | string[] }>;
}) {
  const resolvedSearchParams = await Promise.resolve(searchParams);
  const idParam = Array.isArray(resolvedSearchParams.id)
    ? resolvedSearchParams.id[0]
    : resolvedSearchParams.id;

  return (
    <>
      <JsonLd
        id="request-scope-confirm-breadcrumb"
        data={
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Request scope", path: "/request-scope" },
            { name: "Confirmed", path: "/request-scope/confirm" },
          ])
        }
      />
      <JsonLd
        id="request-scope-confirm-webpage"
        data={
          webPageSchema({
            name: "Request scope confirmation",
            path: "/request-scope/confirm",
          })
        }
      />
      <section className="mx-auto w-full max-w-4xl px-6 pb-16 pt-12">
        <MotionIn className="space-y-8">
          <Breadcrumbs
            items={[
              { href: "/", label: "Home" },
              { href: "/request-scope", label: "Request scope" },
              { href: "/request-scope/confirm", label: "Confirmed" },
            ]}
          />
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-slate">
              Request received
            </p>
            <h1 className="text-3xl font-semibold text-ash">Request received.</h1>
            <p className="text-sm text-muted">
              If it is a fit, next steps will follow within 2 business days.
            </p>
            <p className="text-sm text-muted">
              Engagement documents and status will be available in the Client
              Portal.
            </p>
            {idParam && (
              <p className="text-xs text-muted">Reference ID: {idParam}</p>
            )}
          </div>
          <div className="rounded-2xl border border-line/80 bg-soft p-6">
            <h2 className="text-sm uppercase tracking-[0.2em] text-slate">
              Paid scope guidance
            </h2>
            <p className="mt-3 text-sm text-muted">
              Scope definition is a paid engagement that produces a
              procurement-ready scope, acceptance criteria, and delivery
              options. If you proceed, the scoping fee is credited against
              follow-on delivery.
            </p>
            <div className="mt-4 grid gap-3 text-sm text-muted md:grid-cols-3">
              <div className="rounded-xl border border-line/70 bg-ink/60 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-slate">
                  Assessment / Review
                </p>
                <p className="mt-2 text-ash">€5k–€15k</p>
              </div>
              <div className="rounded-xl border border-line/70 bg-ink/60 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-slate">
                  Architecture / Roadmap
                </p>
                <p className="mt-2 text-ash">€10k–€25k</p>
              </div>
              <div className="rounded-xl border border-line/70 bg-ink/60 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-slate">
                  Build / Takeover
                </p>
                <p className="mt-2 text-ash">€15k–€40k</p>
              </div>
            </div>
            <p className="mt-4 text-xs text-muted">
              Final scope fee is quoted after qualification based on
              constraints, access, and urgency.
            </p>
          </div>
          <Link
            href="/marketplace"
            className="btn-animate btn-secondary inline-flex rounded-full px-6 py-2 text-xs uppercase tracking-[0.2em]"
          >
            Back to marketplace
          </Link>
        </MotionIn>
      </section>
    </>
  );
}
