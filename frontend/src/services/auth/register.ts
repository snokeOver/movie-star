"use server";

import { cookies } from "next/headers";

export const registerUser = async (userData: FormData) => {
  try {
    const res = await fetch(`${process.env.BASE_API_URL}/auth/register`, {
      method: "POST",
      body: userData,
    });

    const result = await res.json();
    if (result.success) {
      (await cookies()).set("accessToken", result.data?.accessToken);
      (await cookies()).set("refreshToken", result.data?.refreshToken);
    }

    return result;
  } catch (error: any) {
    return Error(error);
  }
};
