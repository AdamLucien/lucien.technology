import type { ScoutProvider } from "@/lib/scout/providers/types";

export const linkedinProvider: ScoutProvider = {
  source: "LINKEDIN",
  search: async () => {
    return [];
  },
};
