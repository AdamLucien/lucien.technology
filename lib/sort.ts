import type { Service } from "@/content/services";

const urgencyOrder = ["2-4 weeks", "6-12 weeks", "3-6 months"] as const;
const engagementOrder = ["Audit", "Architecture", "Build", "Operate"] as const;

const getPriority = (values: string[], order: readonly string[]) => {
  const indexes = values
    .map((value) => order.indexOf(value))
    .filter((index) => index >= 0);
  return indexes.length > 0 ? Math.min(...indexes) : order.length;
};

const compareText = (left: string, right: string) => {
  const a = left.toLowerCase();
  const b = right.toLowerCase();
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
};

type SortOptions = {
  relevanceScores?: Record<string, number>;
  useRelevance?: boolean;
};

export const sortServices = (
  items: Service[],
  options: SortOptions = {},
): Service[] => {
  const { relevanceScores = {}, useRelevance = false } = options;

  return [...items].sort((a, b) => {
    if (useRelevance) {
      const aScore = relevanceScores[a.slug] ?? 0;
      const bScore = relevanceScores[b.slug] ?? 0;
      if (aScore !== bScore) {
        return bScore - aScore;
      }
    }

    const urgencyCompare =
      getPriority(a.urgency, urgencyOrder) -
      getPriority(b.urgency, urgencyOrder);
    if (urgencyCompare !== 0) return urgencyCompare;

    const engagementCompare =
      getPriority(a.engagementTypes, engagementOrder) -
      getPriority(b.engagementTypes, engagementOrder);
    if (engagementCompare !== 0) return engagementCompare;

    const titleCompare = compareText(a.title, b.title);
    if (titleCompare !== 0) return titleCompare;

    return compareText(a.slug, b.slug);
  });
};
