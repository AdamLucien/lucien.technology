import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { buildPageMetadata, breadcrumbSchema, webPageSchema } from "@/lib/seo";
import { MotionIn } from "@/components/MotionIn";
import { InquiryForm } from "@/components/InquiryForm";

export const metadata = buildPageMetadata({
  title: "Request Scope",
  description:
    "Submit a scoped engagement request for a Lucien problem-driven service.",
  path: "/request-scope",
  keywords: ["request scope", "engagement", "Lucien"],
});

export default async function RequestScopePage({
  searchParams,
}: {
  searchParams:
    | { service?: string | string[]; mode?: string | string[] }
    | Promise<{ service?: string | string[]; mode?: string | string[] }>;
}) {
  const resolvedSearchParams = await Promise.resolve(searchParams);
  const allowedModes = new Set(["remote", "hybrid", "on-site"]);
  const serviceParam = Array.isArray(resolvedSearchParams.service)
    ? resolvedSearchParams.service[0]
    : resolvedSearchParams.service;
  const modeParam = Array.isArray(resolvedSearchParams.mode)
    ? resolvedSearchParams.mode[0]
    : resolvedSearchParams.mode;
  const modeValue = modeParam && allowedModes.has(modeParam) ? modeParam : "remote";

  return (
    <>
      <JsonLd
        id="request-scope-breadcrumb"
        data={
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Request scope", path: "/request-scope" },
          ])
        }
      />
      <JsonLd
        id="request-scope-webpage"
        data={webPageSchema({ name: "Request scope", path: "/request-scope" })}
      />
      <section className="mx-auto w-full max-w-5xl px-6 pb-16 pt-12">
        <MotionIn className="space-y-8">
          <Breadcrumbs
            items={[
              { href: "/", label: "Home" },
              { href: "/request-scope", label: "Request scope" },
            ]}
          />
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-slate">
              Request scope
            </p>
            <h1 className="text-3xl font-semibold text-ash">
              Define the problem before delivery begins
            </h1>
            <p className="text-sm text-muted">
              This scoping step protects both sides. It confirms fit, defines
              boundaries, and establishes the secure intake path.
            </p>
          </div>
        </MotionIn>
        <MotionIn className="mt-10 grid gap-4 md:grid-cols-2">
          {[
            {
              title: "What happens next",
              detail:
                "We review the scope, validate constraints, and respond within two business days with next steps.",
            },
            {
              title: "Confidentiality-first",
              detail:
                "We limit collection to what is required for scope. NDA coverage is available before deeper disclosure.",
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
          <h2 className="text-sm uppercase tracking-[0.2em] text-slate">
            Paid scope guidance
          </h2>
          <p className="mt-3 text-sm text-muted">
            Scope definition is a paid engagement that produces a
            procurement-ready scope, acceptance criteria, and delivery options.
            If you proceed, the scoping fee is credited against follow-on
            delivery.
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
            Final scope fee is quoted after qualification based on constraints,
            access, and urgency.
          </p>
        </MotionIn>
        <MotionIn className="mt-10">
          <InquiryForm
            initialService={serviceParam ?? ""}
            initialMode={modeValue}
            redirectTo="/request-scope/confirm"
          />
        </MotionIn>
        <MotionIn className="mt-10 rounded-2xl border border-line/80 bg-soft p-6">
          <p className="text-xs text-muted">
            Prefer to review services first? Return to the marketplace to select
            a problem-driven engagement.
          </p>
          <Link
            href="/marketplace"
            className="mt-4 inline-flex text-xs uppercase tracking-[0.2em] text-slate"
          >
            Back to marketplace
          </Link>
        </MotionIn>
      </section>
    </>
  );
}
