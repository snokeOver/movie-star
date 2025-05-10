import { create } from "zustand";
import { persist } from "zustand/middleware";

interface SidebarState {
  expanded: boolean;
  setExpanded: (expanded: boolean) => void;
  mobileOpen: boolean;
  setMobileOpen: (open: boolean) => void;
  toggleSidebar: () => void;
}

export const useSidebarStore = create<SidebarState>()(
  persist(
    (set) => ({
      expanded: true,
      setExpanded: (expanded) => set({ expanded }),
      mobileOpen: false,
      setMobileOpen: (mobileOpen) => set({ mobileOpen }),
      toggleSidebar: () => set((state) => ({ expanded: !state.expanded })),
    }),
    {
      name: "sidebar-storage",
    }
  )
);

// Check if we're on mobile and collapse sidebar if needed
if (typeof window !== "undefined") {
  const checkMobile = () => {
    if (window.innerWidth < 1024) {
      useSidebarStore.getState().setExpanded(false);
    }
  };

  // Initial check
  checkMobile();

  // Add event listener
  window.addEventListener("resize", checkMobile);
}
