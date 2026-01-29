"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";

type LoginFormProps = {
  callbackUrl: string;
  headingTag?: "h1" | "h2";
};

export function LoginForm({
  callbackUrl,
  headingTag = "h1",
}: LoginFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "sent" | "error">(
    "idle",
  );
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
            If an account exists, you will receive a login email.
          </p>
        )}
        {status === "error" && (
          <p className="text-xs text-[#E5A4A4]">
            We could not send the link. Please try again.
          </p>
        )}
      </form>
    </div>
  );
}
