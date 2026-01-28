"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { filterOptions } from "@/content/services";
import { Icon } from "@/components/icons/Icon";
import { keywordSuggestions } from "@/components/marketplace/keywordSuggestions";

const suggestionKeywords = keywordSuggestions
  .slice(0, 16)
  .map((item) => item.keyword);

const filterGroups = [
  { key: "domain", label: "Domain", options: filterOptions.domains },
  {
    key: "engagement",
    label: "Engagement type",
    options: filterOptions.engagementTypes,
  },
  { key: "industry", label: "Industry", options: filterOptions.industries },
  { key: "urgency", label: "Urgency", options: filterOptions.urgency },
];

type SelectedMap = Record<string, string[]>;

export function ServiceFilters() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const selected = useMemo<SelectedMap>(() => {
    const entries: SelectedMap = {};
    filterGroups.forEach((group) => {
      const value = searchParams.get(group.key);
      entries[group.key] = value
        ? value.split(",").map((item) => item.trim()).filter(Boolean)
        : [];
    });
    return entries;
  }, [searchParams]);

  const queryValue = searchParams.get("q") ?? "";
  const [queryInput, setQueryInput] = useState(queryValue);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const hasFilters =
    Object.values(selected).some((value) => value.length > 0) ||
    queryInput.length > 0;

  const updateParam = (key: string, values: string[]) => {
    const params = new URLSearchParams(searchParams.toString());
    if (values.length === 0) {
      params.delete(key);
    } else {
      params.set(key, values.join(","));
    }
    const query = params.toString();
    router.replace(`${pathname}${query ? `?${query}` : ""}`, {
      scroll: false,
    });
  };

  const updateQuery = useCallback(
    (value: string) => {
      const currentValue = searchParams.get("q") ?? "";
      if (value === currentValue) {
        return;
      }
      const params = new URLSearchParams(searchParams.toString());
      if (value.trim().length === 0) {
        params.delete("q");
        params.delete("query");
      } else {
        params.set("q", value);
        params.delete("query");
      }
      const query = params.toString();
      router.replace(`${pathname}${query ? `?${query}` : ""}`, {
        scroll: false,
      });
    },
    [pathname, router, searchParams],
  );

  useEffect(() => {
    setQueryInput(queryValue);
  }, [queryValue]);

  useEffect(() => {
    if (queryInput === queryValue) {
      return;
    }
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }
    debounceRef.current = setTimeout(() => {
      updateQuery(queryInput);
    }, 250);
    return () => {
      if (debounceRef.current) {
        clearTimeout(debounceRef.current);
      }
    };
  }, [queryInput, queryValue, updateQuery]);

  const updateQueryImmediate = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    const currentValue = searchParams.get("q") ?? "";
    if (value === currentValue) {
      return;
    }
    if (value.trim().length === 0) {
      params.delete("q");
      params.delete("query");
    } else {
      params.set("q", value);
      params.delete("query");
    }
    const query = params.toString();
    router.replace(`${pathname}${query ? `?${query}` : ""}`, {
      scroll: false,
    });
  };

  const applySuggestion = (value: string) => {
    const trimmed = queryValue.trim();
    const tokens = trimmed
      .toLowerCase()
      .split(/[,\s]+/)
      .map((token) => token.trim())
      .filter(Boolean);
    if (tokens.includes(value.toLowerCase())) {
      return;
    }
    const nextValue = trimmed ? `${trimmed}, ${value}` : value;
    setQueryInput(nextValue);
    updateQueryImmediate(nextValue);
  };

  const toggleValue = (key: string, value: string) => {
    const current = new Set(selected[key]);
    if (current.has(value)) {
      current.delete(value);
    } else {
      current.add(value);
    }
    updateParam(key, Array.from(current));
  };

  const clearFilters = () => {
    router.replace(pathname, { scroll: false });
  };

  return (
    <div className="space-y-6 rounded-2xl border border-line/80 bg-soft p-6">
      <div className="flex items-center justify-between">
        <h2 className="flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-slate">
          <Icon
            name="filter"
            size={16}
            strokeWidth={1.25}
            className="text-slate"
            animated={false}
            decorative
          />
          Filters
        </h2>
        {hasFilters && (
          <button
            type="button"
            onClick={clearFilters}
            className="btn-animate text-xs uppercase tracking-[0.2em] text-slate transition hover:text-ash"
          >
            Clear
          </button>
        )}
      </div>
      <label className="space-y-2 text-sm text-slate">
        <span className="text-xs uppercase tracking-[0.2em] text-slate">
          Describe your problem
        </span>
        <div className="relative">
          <span className="pointer-events-none absolute left-3 top-2.5 text-slate">
            <Icon
              name="search"
              size={16}
              strokeWidth={1.25}
              className="text-slate"
              animated={false}
              decorative
            />
          </span>
          <input
            value={queryInput}
            onChange={(event) => setQueryInput(event.target.value)}
            className="w-full rounded-xl border border-line bg-ink py-2 pl-10 pr-3 text-ash"
            placeholder="delivery delays, quality issues, vendor lock-in, audit readiness..."
          />
        </div>
      </label>
      <div className="space-y-3">
        <div className="text-xs uppercase tracking-[0.2em] text-slate">
          Suggestions
        </div>
        <div className="flex flex-wrap gap-2">
          {suggestionKeywords.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => applySuggestion(item)}
              className="btn-animate rounded-full border border-line px-3 py-1 text-[0.65rem] uppercase tracking-[0.2em] text-slate transition hover:border-slate"
            >
              {item}
            </button>
          ))}
        </div>
      </div>
      {filterGroups.map((group) => (
        <div key={group.key} className="space-y-3">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-slate">
            <Icon
              name="filter"
              size={14}
              strokeWidth={1.25}
              className="text-slate"
              animated={false}
              decorative
            />
            {group.label}
          </div>
          <div className="flex flex-wrap gap-2">
            {group.options.map((option) => {
              const isActive = selected[group.key]?.includes(option);
              return (
                <button
                  key={option}
                  type="button"
                  onClick={() => toggleValue(group.key, option)}
                  aria-pressed={isActive}
                  className={`btn-animate rounded-full border px-3 py-1 text-[0.65rem] uppercase tracking-[0.2em] transition ${
                    isActive
                      ? "border-ash text-ash"
                      : "border-line text-slate hover:border-slate"
                  }`}
                >
                  {option}
                </button>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
