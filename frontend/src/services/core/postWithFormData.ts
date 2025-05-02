"use server";

import { getValidToken } from "@/lib/verifyToken";

export const postWithFormData = async (userData: FormData, url: string) => {
  const token = await getValidToken();
  try {
    const res = await fetch(`${process.env.BASE_API_URL}/${url}`, {
      method: "POST",
      body: userData,
      headers: {
        Authorization: token,
      },
    });

    const result = await res.json();

    return result;
  } catch (error: any) {
    return Error(error);
  }
};
