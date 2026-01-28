"use client";

import dynamic from "next/dynamic";

const MarketplaceClient = dynamic(
  () =>
    import("@/app/marketplace/MarketplaceClient").then(
      (mod) => mod.MarketplaceClient,
    ),
  {
    ssr: false,
    loading: () => (
      <div
        className="surface-card rounded-2xl border border-line/80 bg-soft p-6 text-sm text-muted"
        aria-busy="true"
      >
        Loading marketplace tools...
      </div>
    ),
  },
);

export function MarketplaceClientLoader() {
  return <MarketplaceClient />;
}
