import type { ScoutProvider } from "@/lib/scout/providers/types";

export const xingProvider: ScoutProvider = {
  source: "XING",
  search: async () => {
    return [];
  },
};
