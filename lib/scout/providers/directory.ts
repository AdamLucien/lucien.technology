import type { ScoutProvider } from "@/lib/scout/providers/types";

export const directoryProvider: ScoutProvider = {
  source: "DIRECTORY",
  search: async () => {
    return [];
  },
};
