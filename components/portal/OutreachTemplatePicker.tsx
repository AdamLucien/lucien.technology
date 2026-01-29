"use client";

import { useMemo, useState } from "react";
import { CopyButton } from "@/components/portal/CopyButton";

type Template = {
  label: string;
  message: string;
  subject?: string;
};

export function OutreachTemplatePicker({
  templates,
}: {
  templates: Record<string, Template>;
}) {
  const templateKeys = useMemo(() => Object.keys(templates), [templates]);
  const [selected, setSelected] = useState(templateKeys[0] ?? "");
  const template = templates[selected];

  if (!template) return null;

  return (
    <div className="rounded-xl border border-line/80 bg-ink p-4 space-y-3 text-sm text-muted">
      <div className="flex flex-wrap items-center justify-between gap-3 text-xs uppercase tracking-[0.2em] text-slate">
        <span>Templates</span>
        <select
          value={selected}
          onChange={(event) => setSelected(event.target.value)}
          className="rounded-full border border-line/80 bg-ink px-3 py-1 text-[0.6rem] text-ash"
        >
          {templateKeys.map((key) => (
            <option key={key} value={key}>
              {templates[key].label}
            </option>
          ))}
        </select>
      </div>
      {template.subject && (
        <div className="text-xs text-slate">
          <span className="text-ash">Subject:</span> {template.subject}
        </div>
      )}
      <div className="whitespace-pre-line rounded-lg border border-line/80 bg-soft px-3 py-2 text-xs text-slate">
        {template.message}
      </div>
      <div className="flex flex-wrap gap-2">
        <CopyButton text={template.message} label="Copy message" />
        {template.subject && <CopyButton text={template.subject} label="Copy subject" />}
      </div>
    </div>
  );
}
