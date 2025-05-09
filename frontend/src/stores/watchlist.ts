import { create } from "zustand";

import { createJSONStorage, persist } from "zustand/middleware";

interface IWatchList {
  listNo: number;
  setListNo: (newItem: number) => void;
}

export const useWatchListStore = create(
  persist<IWatchList>(
    (set) => ({
      listNo: 0,
      setListNo: (newItem) => set({ listNo: newItem }),
    }),
    {
      name: "movie_star_watchlist",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
