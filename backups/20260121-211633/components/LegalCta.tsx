import Link from "next/link";
import { MotionIn } from "@/components/MotionIn";

export function LegalCta() {
  return (
    <MotionIn className="surface-card mt-10 flex flex-col items-start justify-between gap-6 rounded-2xl border border-line/80 bg-soft p-6 md:flex-row md:items-center">
      <div className="space-y-3">
        <h2 className="text-xl font-semibold text-ash">
          Need secure engagement terms
        </h2>
        <p className="text-sm text-muted">
          We can provide tailored engagement terms and secure intake guidance for
          your procurement process.
        </p>
      </div>
      <Link
        href="/request-scope"
        className="btn-animate btn-secondary rounded-full px-6 py-2 text-xs uppercase tracking-[0.2em]"
      >
        Request scope
      </Link>
    </MotionIn>
  );
}
