import { createHash } from "crypto";
import type { ScoutProvider, ScoutIntentInput, ScoutResult } from "@/lib/scout/providers/types";

type WebResultItem = {
  title?: string;
  link?: string;
  snippet?: string;
};

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" && value !== null;

const stringOrUndefined = (value: unknown): string | undefined =>
  typeof value === "string" ? value : undefined;

const toWebResultItem = (value: unknown): WebResultItem => {
  if (!isRecord(value)) return {};
  return {
    title: stringOrUndefined(value.title),
    link: stringOrUndefined(value.link),
    snippet: stringOrUndefined(value.snippet),
  };
};

const toCustomResultItem = (value: unknown): WebResultItem => {
  if (!isRecord(value)) return {};
  return {
    title: stringOrUndefined(value.title) ?? stringOrUndefined(value.name),
    link: stringOrUndefined(value.url) ?? stringOrUndefined(value.link),
    snippet: stringOrUndefined(value.snippet) ?? stringOrUndefined(value.description),
  };
};

const extractEmail = (value?: string) => {
  if (!value) return null;
  const match = value.match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i);
  return match?.[0]?.toLowerCase() ?? null;
};

const normalizeName = (value: string) =>
  value.replace(/\s+-\s+.*$/, "").trim();

const buildQuery = (intent: ScoutIntentInput) => {
  const parts = [...intent.roleIds, ...intent.keywords];
  return parts.filter(Boolean).join(" ");
};

const mapResults = (items: Array<{ title?: string; link?: string; snippet?: string }>, query: string) =>
  items
    .filter((item) => item.link)
    .map((item) => {
      const fullName = normalizeName(item.title ?? "Unknown");
      const email = extractEmail(item.snippet ?? "");
      const dedupeKey = item.link
        ? createHash("sha256").update(item.link).digest("hex")
        : null;
      return {
        fullName,
        email,
        externalProfileUrl: item.link ?? null,
        dedupeKey,
        sourceQuery: query,
        payload: item,
      } satisfies ScoutResult;
    });

export const webProvider: ScoutProvider = {
  source: "WEB",
  search: async (intent) => {
    const provider = process.env.WEB_SEARCH_PROVIDER;
    const query = buildQuery(intent);
    if (!provider || !query) return [];

    if (provider === "serpapi") {
      const apiKey = process.env.SERPAPI_KEY;
      if (!apiKey) return [];
      const url = new URL("https://serpapi.com/search.json");
      url.searchParams.set("q", query);
      url.searchParams.set("api_key", apiKey);
      const response = await fetch(url);
      if (!response.ok) return [];
      const data = (await response.json()) as Record<string, unknown>;
      const items = Array.isArray(data.organic_results) ? data.organic_results : [];
      return mapResults(
        items.map(toWebResultItem),
        query,
      );
    }

    if (provider === "google_cse") {
      const apiKey = process.env.GOOGLE_CSE_KEY;
      const cx = process.env.GOOGLE_CSE_CX;
      if (!apiKey || !cx) return [];
      const url = new URL("https://www.googleapis.com/customsearch/v1");
      url.searchParams.set("q", query);
      url.searchParams.set("key", apiKey);
      url.searchParams.set("cx", cx);
      const response = await fetch(url);
      if (!response.ok) return [];
      const data = (await response.json()) as Record<string, unknown>;
      const items = Array.isArray(data.items) ? data.items : [];
      return mapResults(
        items.map(toWebResultItem),
        query,
      );
    }

    if (provider === "custom") {
      const endpoint = process.env.WEB_SEARCH_ENDPOINT;
      if (!endpoint) return [];
      const url = new URL(endpoint);
      url.searchParams.set("q", query);
      const response = await fetch(url);
      if (!response.ok) return [];
      const data = (await response.json()) as Record<string, unknown>;
      const items = Array.isArray(data.results) ? data.results : [];
      return mapResults(
        items.map(toCustomResultItem),
        query,
      );
    }

    return [];
  },
};
