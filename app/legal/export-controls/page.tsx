import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { buildPageMetadata, breadcrumbSchema, webPageSchema } from "@/lib/seo";
import { MotionIn } from "@/components/MotionIn";
import { LegalCta } from "@/components/LegalCta";

export const metadata = buildPageMetadata({
  title: "Export Controls",
  description: "Export control and sanctions compliance guidance for Lucien.",
  path: "/legal/export-controls",
  keywords: ["export controls", "sanctions", "dual-use"],
});

export default function ExportControlsPage() {
  return (
    <>
      <JsonLd
        id="export-controls-breadcrumb"
        data={
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Legal", path: "/legal" },
            { name: "Export Controls", path: "/legal/export-controls" },
          ])
        }
      />
      <JsonLd
        id="export-controls-webpage"
        data={webPageSchema({ name: "Export Controls", path: "/legal/export-controls" })}
      />
      <section className="mx-auto w-full max-w-4xl px-6 pb-16 pt-12">
        <MotionIn className="space-y-8">
          <Breadcrumbs
            items={[
              { href: "/", label: "Home" },
              { href: "/legal", label: "Legal" },
              { href: "/legal/export-controls", label: "Export Controls" },
            ]}
          />
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-slate">
              Export controls
            </p>
            <h1 className="text-3xl font-semibold text-ash">
              Compliance and sanctions awareness
            </h1>
            <p className="text-sm text-muted">
              Clients are responsible for compliance with applicable export
              controls, sanctions, and dual-use regulations. Lucien may decline
              engagements that present compliance risk.
            </p>
          </div>
        </MotionIn>
        <MotionIn className="mt-10 space-y-6">
          {[
            {
              title: "Client responsibility",
              body:
                "Clients must confirm they are authorized to receive services and that engagements comply with applicable laws.",
            },
            {
              title: "Right to decline",
              body:
                "Lucien may decline or terminate engagements that pose export or sanctions risk.",
            },
            {
              title: "No certification claims",
              body:
                "Lucien does not claim ITAR or EAR certification unless explicitly documented in a contract.",
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
