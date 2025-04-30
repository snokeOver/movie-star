"use server";

import { FieldValues } from "react-hook-form";

export const verifyForgetPassOTP = async (userData: FieldValues) => {
  try {
    const res = await fetch(
      `${process.env.BASE_API_URL}/auth/verify-forget-password-otp`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(userData),
      }
    );

    const result = await res.json();

    return result;
  } catch (error: any) {
    return Error(error);
  }
};
