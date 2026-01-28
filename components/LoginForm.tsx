"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

type LoginFormProps = {
  callbackUrl: string;
  devLoginEmails: string[];
  headingTag?: "h1" | "h2";
};

export function LoginForm({
  callbackUrl,
  devLoginEmails,
  headingTag = "h1",
}: LoginFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "sent" | "error">(
    "idle",
  );
  const router = useRouter();
  const HeadingTag = headingTag;

  const resolveCallbackUrl = () =>
    callbackUrl.startsWith("http")
      ? callbackUrl
      : `${window.location.origin}${callbackUrl}`;

  const submitEmail = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");

    const result = await signIn("email", {
      email,
      redirect: false,
      callbackUrl: resolveCallbackUrl(),
    });

    if (result?.error) {
      setStatus("error");
      return;
    }

    setStatus("sent");
  };

  const handleDevLogin = async (devEmail: string) => {
    setStatus("loading");
    const result = await signIn("dev-login", {
      email: devEmail,
      redirect: false,
      callbackUrl: resolveCallbackUrl(),
    });

    if (result?.error) {
      setStatus("error");
      return;
    }

    router.push(callbackUrl);
  };

  return (
    <div className="space-y-6">
      <form
        onSubmit={submitEmail}
        className="space-y-4 rounded-2xl border border-line/80 bg-soft p-6"
      >
        <div>
          <HeadingTag className="text-2xl font-semibold text-ash">
            Client portal
          </HeadingTag>
          <p className="mt-2 text-sm text-muted">
            Sign in with your work email to access engagements and documents.
          </p>
        </div>
        <label className="space-y-2 text-sm text-slate">
          Work email
          <input
            type="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="w-full rounded-xl border border-line bg-ink px-4 py-2 text-ash"
          />
        </label>
        <button
          type="submit"
          disabled={status === "loading"}
          className="btn-animate btn-primary rounded-full px-6 py-2 text-xs uppercase tracking-[0.2em]"
        >
          {status === "loading" ? "Sending" : "Send magic link"}
        </button>
        {status === "sent" && (
          <p className="text-xs text-ash">
            Check your inbox for the secure login link.
          </p>
        )}
        {status === "error" && (
          <p className="text-xs text-[#E5A4A4]">
            We could not send the link. Please try again.
          </p>
        )}
      </form>

      {devLoginEmails.length > 0 && (
        <div className="rounded-2xl border border-line/80 bg-soft p-6">
          <p className="text-xs uppercase tracking-[0.2em] text-slate">
            Dev login
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            {devLoginEmails.map((devEmail) => (
              <button
                key={devEmail}
                type="button"
                onClick={() => handleDevLogin(devEmail)}
                className="btn-animate btn-secondary rounded-full px-4 py-2 text-xs uppercase tracking-[0.2em]"
              >
                {devEmail}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
