import { IUserStore } from "@/types";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

// Create a store for user data with persistence
export const useUserStore = create(
  persist<IUserStore>(
    (set) => ({
      user: null,
      setUser: (user) => set({ user }),
      clearUser: () => set({ user: null }),
    }),
    {
      name: "movie_star_user",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
