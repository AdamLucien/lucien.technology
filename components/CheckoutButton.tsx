"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import type { Service } from "@/content/services";

type CheckoutButtonProps = {
  service: Service;
  enabled?: boolean;
  fallbackHref?: string;
};

export function CheckoutButton({
  service,
  enabled = true,
  fallbackHref = "/request-scope",
}: CheckoutButtonProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const router = useRouter();

  if (!enabled) {
    return (
      <div className="space-y-3">
        <button
          type="button"
          disabled
          className="btn-animate btn-primary inline-flex rounded-full px-6 py-3 text-xs uppercase tracking-[0.2em]"
        >
          Deposit checkout unavailable
        </button>
        <p className="text-xs text-muted">
          Secure checkout is not enabled yet. Continue with a scoped inquiry.
        </p>
        <Link
          href={fallbackHref}
          className="btn-animate btn-secondary inline-flex rounded-full px-6 py-2 text-xs uppercase tracking-[0.2em]"
        >
          Request scope
        </Link>
      </div>
    );
  }

  const handleCheckout = async () => {
    setStatus("loading");
    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ serviceSlug: service.slug }),
      });
      const data = await response.json();
      const redirectUrl =
        typeof data?.redirectUrl === "string" ? data.redirectUrl : "";
      if (!response.ok || !redirectUrl) {
        setStatus("error");
        return;
      }
      if (redirectUrl.startsWith("/")) {
        router.push(redirectUrl);
      } else {
        window.location.href = redirectUrl;
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="space-y-2">
      <button
        type="button"
        onClick={handleCheckout}
        disabled={status === "loading"}
        className="btn-animate btn-primary inline-flex rounded-full px-6 py-3 text-xs uppercase tracking-[0.2em]"
        aria-busy={status === "loading"}
      >
        {status === "loading" ? "Starting checkout" : "Buy deposit"}
      </button>
      {status === "error" && (
        <div className="space-y-2">
          <p className="text-xs text-[#E5A4A4]">
            Checkout is unavailable right now. Please request a scoped quote.
          </p>
          <Link
            href={fallbackHref}
            className="btn-animate btn-secondary inline-flex rounded-full px-6 py-2 text-xs uppercase tracking-[0.2em]"
          >
            Request scope
          </Link>
        </div>
      )}
    </div>
  );
}
