import { create } from "zustand";

import { createJSONStorage, persist } from "zustand/middleware";

interface IVerifyEmail {
  email: string;
  otp: string;
  setEmail: (newEmail: string) => void;
  setOTP: (newOTP: string) => void;
}

export const useVerifyEmail = create(
  persist<IVerifyEmail>(
    (set) => ({
      email: "",
      otp: "",
      setOTP: (newOTP) => set({ otp: newOTP }),
      setEmail: (newEmail) => set({ email: newEmail }),
    }),
    {
      name: "verify-email",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
