import { create } from "zustand";

import { createJSONStorage, persist } from "zustand/middleware";

interface ISearchTerm {
  searchTerm: string;
  setSearchTerm: (newItem: string) => void;
}

export const useSearchTerm = create(
  persist<ISearchTerm>(
    (set) => ({
      searchTerm: "",
      setSearchTerm: (newItem) => set({ searchTerm: newItem }),
    }),
    {
      name: "movie_star_searchTerm",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
