"use client";

import { useState } from "react";
import { Icon } from "@/components/icons/Icon";

const categories = [
  "nda",
  "sow",
  "contract",
  "deliverable",
  "report",
  "invoice",
  "client_input",
  "evidence",
  "other",
];

type DocumentUploaderProps = {
  engagementId: string;
  allowedCategories?: string[];
  accept?: string;
};

export function DocumentUploader({
  engagementId,
  allowedCategories,
  accept,
}: DocumentUploaderProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const [message, setMessage] = useState<string | null>(null);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");
    setMessage(null);

    const formData = new FormData(event.currentTarget);
    formData.set("engagementId", engagementId);

    try {
      const response = await fetch("/api/portal/documents", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setStatus("success");
        setMessage("Document uploaded.");
        event.currentTarget.reset();
      } else {
        const data = await response.json().catch(() => null);
        setStatus("error");
        setMessage(data?.error ?? "Upload failed.");
      }
    } catch {
      setStatus("error");
      setMessage("Upload failed.");
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      className="space-y-3 rounded-2xl border border-line/80 bg-ink p-4 text-sm text-muted"
    >
      <div className="text-xs uppercase tracking-[0.2em] text-slate">
        Upload document
      </div>
      <div className="grid gap-3 md:grid-cols-[1fr_auto]">
        <input
          type="file"
          name="file"
          required
          accept={accept}
          className="w-full rounded-xl border border-line bg-ink px-4 py-2 text-ash"
        />
        <select
          name="category"
          className="w-full rounded-xl border border-line bg-ink px-4 py-2 text-ash"
          defaultValue={(allowedCategories ?? categories)[0]}
        >
          {(allowedCategories ?? categories).map((category) => (
            <option key={category} value={category}>
              {category.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
      <button
        type="submit"
        disabled={status === "loading"}
        className="btn-animate btn-primary inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs uppercase tracking-[0.2em]"
      >
        <Icon name="upload" size={16} strokeWidth={1.25} entrance={false} />
        {status === "loading" ? "Uploading" : "Upload"}
      </button>
      {message && (
        <p
          className={`text-xs ${
            status === "error" ? "text-[#E5A4A4]" : "text-ash"
          }`}
        >
          {message}
        </p>
      )}
    </form>
  );
}
