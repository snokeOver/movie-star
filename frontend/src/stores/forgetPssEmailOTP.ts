import { create } from "zustand";

import { createJSONStorage, persist } from "zustand/middleware";

interface IForgotPassEmailOTP {
  email: string;
  otp: string;
  setEmail: (newEmail: string) => void;
  setOTP: (newOTP: string) => void;
}

export const useForgotPassEmailOTP = create(
  persist<IForgotPassEmailOTP>(
    (set) => ({
      email: "",
      otp: "",
      setOTP: (newOTP) => set({ otp: newOTP }),
      setEmail: (newEmail) => set({ email: newEmail }),
    }),
    {
      name: "forget-email",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
