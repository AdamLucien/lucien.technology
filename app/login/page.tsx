import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { LoginForm } from "@/components/LoginForm";
import { getServerAuthSession } from "@/lib/auth";

export const metadata: Metadata = {
  title: "Portal Login | Lucien",
  description: "Secure login for the Lucien client portal.",
  robots: { index: false, follow: false, nocache: true },
};

export default async function LoginPage({
  searchParams,
}: {
  searchParams:
    | { callbackUrl?: string | string[] }
    | Promise<{ callbackUrl?: string | string[] }>;
}) {
  const resolvedSearchParams = await Promise.resolve(searchParams);
  const callbackParam = Array.isArray(resolvedSearchParams.callbackUrl)
    ? resolvedSearchParams.callbackUrl[0]
    : resolvedSearchParams.callbackUrl;
  const callbackUrl =
    callbackParam && callbackParam.startsWith("/") && !callbackParam.startsWith("//")
      ? callbackParam
      : "/portal/hr";
  const session = await getServerAuthSession();

  if (session) {
    redirect(callbackUrl);
  }

  return (
    <section className="mx-auto w-full max-w-lg px-6 pb-16 pt-16">
      <LoginForm callbackUrl={callbackUrl} />
    </section>
  );
}
