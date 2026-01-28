"use client";

import dynamic from "next/dynamic";

const SystemMap = dynamic(
  () => import("@/components/SystemMap").then((mod) => mod.SystemMap),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-[260px] w-full items-center justify-center rounded-2xl border border-line/80 bg-soft">
        <p className="text-xs uppercase tracking-[0.2em] text-muted">
          Loading system map
        </p>
      </div>
    ),
  },
);

export function SystemMapClient() {
  return <SystemMap />;
}
