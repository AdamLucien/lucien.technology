"use client";

import { useEffect, useMemo, useState } from "react";
import type { ImportMapping, ImportPreview, ImportRow } from "@/lib/hr/import";
import { CopyButton } from "@/components/portal/CopyButton";

type ImportResult = ImportPreview & {
  created?: number;
  updated?: number;
  skipped?: number;
};

type ImportAction = (payload: {
  rows: ImportRow[];
  mapping: ImportMapping;
  source: string;
}) => Promise<ImportResult>;

type ManualAction = (payload: {
  fullName: string;
  email?: string;
  linkedInUrl?: string;
  xingUrl?: string;
  primaryRole?: string;
  domains?: string;
}) => Promise<ImportResult>;

type HrImportCopy = {
  importFields: string[];
  importExtraFields: string[];
  importTemplates: Record<string, string>;
  importPresets: Record<string, { label: string; mapping: ImportMapping }>;
};

const normalizeHeader = (value: string) =>
  value.toLowerCase().replace(/[^a-z0-9]+/g, "");

const headerAliases: Record<string, string[]> = {
  fullName: ["fullname", "name"],
  firstName: ["firstname", "first"],
  lastName: ["lastname", "last"],
  email: ["email", "emailaddress"],
  linkedInUrl: ["linkedin", "linkedinurl", "linkedinprofile"],
  xingUrl: ["xing", "xingurl"],
  primaryRole: ["primaryrole", "role", "roleid"],
  secondaryRoles: ["secondaryroles", "roles"],
  domains: ["domains", "domain", "industry"],
  seniority: ["seniority", "level"],
  availabilityWindow: ["availability", "availabilitywindow"],
  engagementModes: ["engagementmodes", "modes", "mode"],
  languages: ["languages", "language"],
  rateBand: ["rateband", "rate"],
  externalId: ["externalid", "id"],
  dedupeKey: ["dedupekey"],
};

const splitCsvLine = (line: string, delimiter: string) => {
  const result: string[] = [];
  let current = "";
  let inQuotes = false;
  for (let i = 0; i < line.length; i += 1) {
    const char = line[i];
    if (char === '"') {
      inQuotes = !inQuotes;
      continue;
    }
    if (char === delimiter && !inQuotes) {
      result.push(current);
      current = "";
      continue;
    }
    current += char;
  }
  result.push(current);
  return result.map((item) => item.trim());
};

const parseDelimited = (text: string) => {
  const lines = text.split(/\r?\n/).filter((line) => line.trim().length > 0);
  if (lines.length === 0) return { columns: [], rows: [] as ImportRow[] };
  const delimiter = lines[0].includes("\t") ? "\t" : ",";
  const headers = splitCsvLine(lines[0], delimiter);
  const rows = lines.slice(1).map((line) => {
    const values = splitCsvLine(line, delimiter);
    return headers.reduce<ImportRow>((acc, key, idx) => {
      acc[key] = values[idx] ?? "";
      return acc;
    }, {});
  });
  return { columns: headers, rows };
};

const toMapping = (columns: string[], fields: string[]) => {
  const mapping: ImportMapping = {};
  const normalized = columns.map((col) => normalizeHeader(col));
  fields.forEach((field) => {
    const aliases = headerAliases[field] ?? [field];
    const matchIndex = normalized.findIndex((value) =>
      aliases.some((alias) => value === alias),
    );
    if (matchIndex >= 0) {
      mapping[field] = columns[matchIndex];
    }
  });
  return mapping;
};

const downloadTemplate = (content: string, filename: string) => {
  const blob = new Blob([content], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", filename);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

export function HrImportToolkit({
  previewImport,
  commitImport,
  manualAdd,
  copy,
}: {
  previewImport: ImportAction;
  commitImport: ImportAction;
  manualAdd: ManualAction;
  copy: HrImportCopy;
}) {
  const [mode, setMode] = useState<"csv" | "excel" | "paste" | "json" | "manual">(
    "csv",
  );
  const [columns, setColumns] = useState<string[]>([]);
  const [rows, setRows] = useState<ImportRow[]>([]);
  const [mapping, setMapping] = useState<ImportMapping>({});
  const [preview, setPreview] = useState<ImportResult | null>(null);
  const [busy, setBusy] = useState(false);
  const [sheetNames, setSheetNames] = useState<string[]>([]);
  const [selectedSheet, setSelectedSheet] = useState<string>("");
  const [pasteValue, setPasteValue] = useState("");
  const [jsonValue, setJsonValue] = useState("");
  const [message, setMessage] = useState<string | null>(null);
  const [savedPresets, setSavedPresets] = useState<
    Array<{ name: string; mapping: ImportMapping }>
  >([]);
  const [presetName, setPresetName] = useState("");
  const [manualForm, setManualForm] = useState({
    fullName: "",
    email: "",
    linkedInUrl: "",
    xingUrl: "",
    primaryRole: "",
    domains: "",
  });

  const fieldOptions = useMemo(
    () => [...copy.importFields, ...copy.importExtraFields],
    [copy],
  );

  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = window.localStorage.getItem("hrImportMappings");
    if (!stored) return;
    try {
      const parsed = JSON.parse(stored) as Array<{
        name: string;
        mapping: ImportMapping;
      }>;
      setSavedPresets(parsed);
    } catch {
      setSavedPresets([]);
    }
  }, []);

  const savePreset = () => {
    if (!presetName.trim()) return;
    const next = [
      ...savedPresets.filter((preset) => preset.name !== presetName),
      { name: presetName.trim(), mapping },
    ];
    setSavedPresets(next);
    if (typeof window !== "undefined") {
      window.localStorage.setItem("hrImportMappings", JSON.stringify(next));
    }
  };

  const loadPreset = (name: string) => {
    const preset = savedPresets.find((item) => item.name === name);
    if (!preset) return;
    setMapping(preset.mapping);
  };

  const applyPreset = (presetKey: keyof typeof copy.importPresets) => {
    const preset = copy.importPresets[presetKey];
    const nextMapping: ImportMapping = { ...mapping };
    Object.entries(preset.mapping).forEach(([sourceColumn, field]) => {
      if (columns.includes(sourceColumn)) {
        nextMapping[field] = sourceColumn;
      }
    });
    setMapping(nextMapping);
  };

  const handleCsv = async (file: File) => {
    const text = await file.text();
    const parsed = parseDelimited(text);
    setColumns(parsed.columns);
    setRows(parsed.rows);
    setMapping(toMapping(parsed.columns, fieldOptions));
    setPreview(null);
    setMessage(null);
  };

  const handleExcel = async (file: File) => {
    const data = await file.arrayBuffer();
    const xlsx = await import("xlsx");
    const workbook = xlsx.read(data, { type: "array" });
    setSheetNames(workbook.SheetNames);
    const firstSheet = workbook.SheetNames[0];
    setSelectedSheet(firstSheet);
    const sheet = workbook.Sheets[firstSheet];
    const json = xlsx.utils.sheet_to_json<Record<string, string>>(sheet, {
      defval: "",
    });
    const cols = json.length > 0 ? Object.keys(json[0]) : [];
    setColumns(cols);
    setRows(json);
    setMapping(toMapping(cols, fieldOptions));
    setPreview(null);
    setMessage(null);
  };

  const handleExcelSheetChange = async (file: File, sheetName: string) => {
    const data = await file.arrayBuffer();
    const xlsx = await import("xlsx");
    const workbook = xlsx.read(data, { type: "array" });
    const sheet = workbook.Sheets[sheetName];
    const json = xlsx.utils.sheet_to_json<Record<string, string>>(sheet, {
      defval: "",
    });
    const cols = json.length > 0 ? Object.keys(json[0]) : [];
    setColumns(cols);
    setRows(json);
    setMapping(toMapping(cols, fieldOptions));
    setPreview(null);
    setMessage(null);
  };

  const handlePaste = () => {
    const parsed = parseDelimited(pasteValue);
    setColumns(parsed.columns);
    setRows(parsed.rows);
    setMapping(toMapping(parsed.columns, fieldOptions));
    setPreview(null);
    setMessage(null);
  };

  const handleJson = () => {
    try {
      const parsed = JSON.parse(jsonValue);
      if (!Array.isArray(parsed)) {
        setMessage("JSON must be an array of objects.");
        return;
      }
      const jsonRows = parsed as ImportRow[];
      const cols = jsonRows.length > 0 ? Object.keys(jsonRows[0]) : [];
      setColumns(cols);
      setRows(jsonRows);
      setMapping(toMapping(cols, fieldOptions));
      setPreview(null);
      setMessage(null);
    } catch {
      setMessage("Invalid JSON.");
    }
  };

  const runPreview = async () => {
    if (rows.length === 0) return;
    setBusy(true);
    const result = await previewImport({
      rows,
      mapping,
      source: mode,
    });
    setPreview(result);
    setBusy(false);
  };

  const runCommit = async () => {
    if (rows.length === 0) return;
    setBusy(true);
    const result = await commitImport({
      rows,
      mapping,
      source: mode,
    });
    setPreview(result);
    setBusy(false);
  };

  const runManualAdd = async () => {
    setBusy(true);
    const result = await manualAdd({
      fullName: manualForm.fullName,
      email: manualForm.email,
      linkedInUrl: manualForm.linkedInUrl,
      xingUrl: manualForm.xingUrl,
      primaryRole: manualForm.primaryRole,
      domains: manualForm.domains,
    });
    setPreview(result);
    setBusy(false);
  };

  return (
    <div className="space-y-6 min-w-0">
      <div className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.2em]">
        {["csv", "excel", "paste", "json", "manual"].map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setMode(item as typeof mode)}
            className={[
              "rounded-full border px-3 py-1 text-[0.6rem]",
              mode === item ? "border-ash text-ash" : "border-line/80 text-slate",
            ].join(" ")}
          >
            {item.toUpperCase()}
          </button>
        ))}
      </div>

      {mode === "csv" && (
        <div className="space-y-3">
          <input
            type="file"
            accept=".csv"
            onChange={(event) => {
              const file = event.target.files?.[0];
              if (file) void handleCsv(file);
            }}
            className="w-full rounded-xl border border-line bg-ink px-3 py-2 text-xs text-ash"
          />
        </div>
      )}

      {mode === "excel" && (
        <div className="space-y-3">
          <input
            type="file"
            accept=".xlsx"
            onChange={(event) => {
              const file = event.target.files?.[0];
              if (file) void handleExcel(file);
            }}
            className="w-full rounded-xl border border-line bg-ink px-3 py-2 text-xs text-ash"
          />
          {sheetNames.length > 0 && (
            <label className="text-xs text-slate">
              Sheet
              <select
                value={selectedSheet}
                onChange={(event) => {
                  const file = (
                    document.querySelector<HTMLInputElement>(
                      "input[type='file'][accept='.xlsx']",
                    )?.files?.[0] ?? null
                  );
                  if (!file) return;
                  setSelectedSheet(event.target.value);
                  void handleExcelSheetChange(file, event.target.value);
                }}
                className="mt-2 w-full rounded-xl border border-line bg-ink px-3 py-2 text-ash"
              >
                {sheetNames.map((name) => (
                  <option key={name} value={name}>
                    {name}
                  </option>
                ))}
              </select>
            </label>
          )}
        </div>
      )}

      {mode === "paste" && (
        <div className="space-y-3">
          <textarea
            value={pasteValue}
            onChange={(event) => setPasteValue(event.target.value)}
            rows={6}
            placeholder="Paste CSV/TSV here"
            className="w-full rounded-xl border border-line bg-ink px-3 py-2 text-xs text-ash"
          />
          <button
            type="button"
            onClick={handlePaste}
            className="btn-animate btn-secondary rounded-full px-4 py-2 text-[0.6rem] uppercase tracking-[0.2em]"
          >
            Parse paste
          </button>
        </div>
      )}

      {mode === "json" && (
        <div className="space-y-3">
          <textarea
            value={jsonValue}
            onChange={(event) => setJsonValue(event.target.value)}
            rows={6}
            placeholder='[{"fullName":"Avery Lee","email":"avery@example.com"}]'
            className="w-full rounded-xl border border-line bg-ink px-3 py-2 text-xs text-ash"
          />
          <button
            type="button"
            onClick={handleJson}
            className="btn-animate btn-secondary rounded-full px-4 py-2 text-[0.6rem] uppercase tracking-[0.2em]"
          >
            Parse JSON
          </button>
        </div>
      )}

      {mode === "manual" && (
        <div className="space-y-3 text-sm text-slate">
          <div className="grid gap-3 md:grid-cols-2">
            <input
              placeholder="Full name"
              value={manualForm.fullName}
              onChange={(event) =>
                setManualForm((prev) => ({ ...prev, fullName: event.target.value }))
              }
              className="w-full rounded-xl border border-line bg-ink px-3 py-2 text-ash"
            />
            <input
              placeholder="Email"
              value={manualForm.email}
              onChange={(event) =>
                setManualForm((prev) => ({ ...prev, email: event.target.value }))
              }
              className="w-full rounded-xl border border-line bg-ink px-3 py-2 text-ash"
            />
            <input
              placeholder="LinkedIn URL"
              value={manualForm.linkedInUrl}
              onChange={(event) =>
                setManualForm((prev) => ({
                  ...prev,
                  linkedInUrl: event.target.value,
                }))
              }
              className="w-full rounded-xl border border-line bg-ink px-3 py-2 text-ash"
            />
            <input
              placeholder="Xing URL"
              value={manualForm.xingUrl}
              onChange={(event) =>
                setManualForm((prev) => ({ ...prev, xingUrl: event.target.value }))
              }
              className="w-full rounded-xl border border-line bg-ink px-3 py-2 text-ash"
            />
            <input
              placeholder="Primary roleId"
              value={manualForm.primaryRole}
              onChange={(event) =>
                setManualForm((prev) => ({
                  ...prev,
                  primaryRole: event.target.value,
                }))
              }
              className="w-full rounded-xl border border-line bg-ink px-3 py-2 text-ash"
            />
            <input
              placeholder="Domains (pipe separated)"
              value={manualForm.domains}
              onChange={(event) =>
                setManualForm((prev) => ({ ...prev, domains: event.target.value }))
              }
              className="w-full rounded-xl border border-line bg-ink px-3 py-2 text-ash"
            />
          </div>
          <button
            type="button"
            onClick={runManualAdd}
            className="btn-animate btn-primary rounded-full px-4 py-2 text-[0.6rem] uppercase tracking-[0.2em]"
          >
            Add talent
          </button>
        </div>
      )}

      {columns.length > 0 && mode !== "manual" && (
        <div className="rounded-2xl border border-line/80 bg-soft p-5 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3 text-xs uppercase tracking-[0.2em] text-slate">
            <div>Column mapping</div>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => applyPreset("linkedin")}
                className="rounded-full border border-line/80 px-3 py-1 text-[0.6rem] text-ash"
              >
                {copy.importPresets.linkedin?.label ?? "LinkedIn"}
              </button>
              <button
                type="button"
                onClick={() => applyPreset("crm")}
                className="rounded-full border border-line/80 px-3 py-1 text-[0.6rem] text-ash"
              >
                {copy.importPresets.crm?.label ?? "CRM"}
              </button>
              <button
                type="button"
                onClick={() => applyPreset("urlOnly")}
                className="rounded-full border border-line/80 px-3 py-1 text-[0.6rem] text-ash"
              >
                {copy.importPresets.urlOnly?.label ?? "URL-only"}
              </button>
            </div>
          </div>

          <div className="grid gap-3 md:grid-cols-2 text-xs text-slate">
            {fieldOptions.map((field) => (
              <label key={field} className="space-y-2">
                {field}
                <select
                  value={mapping[field] ?? ""}
                  onChange={(event) =>
                    setMapping((prev) => ({ ...prev, [field]: event.target.value }))
                  }
                  className="w-full rounded-xl border border-line bg-ink px-3 py-2 text-ash"
                >
                  <option value="">--</option>
                  {columns.map((col) => (
                    <option key={`${field}-${col}`} value={col}>
                      {col}
                    </option>
                  ))}
                </select>
              </label>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-2 text-xs">
            <input
              value={presetName}
              onChange={(event) => setPresetName(event.target.value)}
              placeholder="Save mapping as..."
              className="rounded-full border border-line/80 bg-ink px-3 py-1 text-[0.6rem] text-ash"
            />
            <button
              type="button"
              onClick={savePreset}
              className="rounded-full border border-line/80 px-3 py-1 text-[0.6rem] uppercase tracking-[0.2em] text-ash"
            >
              Save mapping
            </button>
            {savedPresets.length > 0 && (
              <select
                onChange={(event) => loadPreset(event.target.value)}
                className="rounded-full border border-line/80 bg-ink px-3 py-1 text-[0.6rem] text-ash"
              >
                <option value="">Load mapping</option>
                {savedPresets.map((preset) => (
                  <option key={preset.name} value={preset.name}>
                    {preset.name}
                  </option>
                ))}
              </select>
            )}
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={runPreview}
              disabled={busy}
              className="btn-animate btn-secondary rounded-full px-4 py-2 text-[0.6rem] uppercase tracking-[0.2em]"
            >
              Preview import
            </button>
            <button
              type="button"
              onClick={runCommit}
              disabled={busy}
              className="btn-animate btn-primary rounded-full px-4 py-2 text-[0.6rem] uppercase tracking-[0.2em]"
            >
              Commit import
            </button>
          </div>
        </div>
      )}

      {preview && (
        <div className="rounded-2xl border border-line/80 bg-soft p-5 space-y-2 text-sm text-muted">
          <div className="text-xs uppercase tracking-[0.2em] text-slate">Preview</div>
          <div>
            Total {preview.total} · New {preview.newCount} · Update{" "}
            {preview.updateCount} · Invalid {preview.invalid}
          </div>
          {"created" in preview && (
            <div>
              Created {preview.created} · Updated {preview.updated} · Skipped{" "}
              {preview.skipped}
            </div>
          )}
          {preview.errors.length > 0 && (
            <ul className="list-disc space-y-1 pl-4 text-xs text-ash">
              {preview.errors.slice(0, 10).map((error) => (
                <li key={`${error.row}-${error.message}`}>
                  Row {error.row}: {error.message}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}

      {message && (
        <div className="rounded-xl border border-line/80 bg-ink px-4 py-2 text-xs text-slate">
          {message}
        </div>
      )}

      <div className="rounded-2xl border border-line/80 bg-soft p-5 space-y-3 text-sm text-muted min-w-0">
        <div className="text-xs uppercase tracking-[0.2em] text-slate">
          Templates
        </div>
        <div className="grid gap-3 md:grid-cols-3 min-w-0">
          {Object.entries(copy.importTemplates).map(([key, template]) => (
            <div key={key} className="space-y-2 min-w-0">
              <div className="text-xs uppercase tracking-[0.2em] text-slate">
                {key}
              </div>
              <div className="rounded-xl border border-line/80 bg-ink px-3 py-2 text-xs text-slate whitespace-pre-wrap break-words min-w-0 max-w-full overflow-x-auto">
                {template}
              </div>
              <div className="flex gap-2">
                <CopyButton text={template} label="Copy template" />
                <button
                  type="button"
                  onClick={() => downloadTemplate(template, `${key}.csv`)}
                  className="rounded-full border border-line/80 px-3 py-1 text-[0.6rem] uppercase tracking-[0.2em] text-ash"
                >
                  Download
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
