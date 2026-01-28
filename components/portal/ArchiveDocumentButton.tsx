"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Icon } from "@/components/icons/Icon";

type ArchiveDocumentButtonProps = {
  documentId: string;
};

export function ArchiveDocumentButton({ documentId }: ArchiveDocumentButtonProps) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [reason, setReason] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [message, setMessage] = useState<string | null>(null);

  const submitArchive = async () => {
    if (reason.trim().length < 5) {
      setMessage("Provide a short reason.");
      setStatus("error");
      return;
    }
    setStatus("loading");
    setMessage(null);
    try {
      const response = await fetch(`/api/portal/documents/${documentId}/archive`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ reason: reason.trim() }),
      });
      if (!response.ok) {
        const data = await response.json().catch(() => null);
        setMessage(data?.error ?? "Archive failed.");
        setStatus("error");
        return;
      }
      setOpen(false);
      setReason("");
      setStatus("idle");
      router.refresh();
    } catch {
      setMessage("Archive failed.");
      setStatus("error");
    }
  };

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="btn-animate btn-secondary inline-flex items-center gap-2 rounded-full px-3 py-1 text-[0.65rem] uppercase tracking-[0.2em]"
      >
        <Icon name="archive" size={14} strokeWidth={1.25} entrance={false} />
        Archive
      </button>
      {open && (
        <div className="absolute right-0 top-9 z-20 w-64 rounded-xl border border-line/80 bg-ink p-3 text-xs text-muted shadow-lg">
          <div className="space-y-2">
            <div className="text-[0.6rem] uppercase tracking-[0.2em] text-slate">
              Archive reason
            </div>
            <textarea
              value={reason}
              onChange={(event) => setReason(event.target.value)}
              rows={3}
              className="w-full rounded-lg border border-line bg-ink px-2 py-1 text-ash"
              placeholder="Why is this document archived?"
            />
            {message && <p className="text-[#E5A4A4]">{message}</p>}
            <button
              type="button"
              onClick={submitArchive}
              disabled={status === "loading"}
              className="btn-animate btn-primary inline-flex w-full items-center justify-center gap-2 rounded-full px-3 py-1 text-[0.65rem] uppercase tracking-[0.2em]"
            >
              <Icon
                name="archive"
                size={14}
                strokeWidth={1.25}
                entrance={false}
              />
              {status === "loading" ? "Archiving" : "Confirm archive"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
