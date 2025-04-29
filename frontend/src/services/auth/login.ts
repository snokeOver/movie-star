"use server";

import { cookies } from "next/headers";
import { FieldValues } from "react-hook-form";

const config = {
  secure: process.env.TOKEN_HTTPS_SECURITY === "production" ? true : false,
  accessHttpOnly: process.env.ACCESS_TOKEN_JS_ACCESS === "yes" ? false : true,
  accessMaxAge: Number(process.env.ACCESS_TOKEN_MAXAGE),
  refreshHttpOnly: process.env.REFRESH_TOKEN_JS_ACCESS === "yes" ? false : true,
  refreshMaxAge: Number(process.env.REFRESH_TOKEN_MAXAGE),
};

export const loginUser = async (userData: FieldValues) => {
  try {
    const res = await fetch(`${process.env.BASE_API_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(userData),
    });

    const result = await res.json();
    if (result.success) {
      (await cookies()).set("accessToken", result.data.accessToken, {
        secure: config.secure, // sent over http and https
        httpOnly: config.accessHttpOnly, // Prevents JavaScript access
        maxAge: config.accessMaxAge,
      });
      (await cookies()).set("refreshToken", result.data.refreshToken, {
        secure: config.secure,
        httpOnly: config.refreshHttpOnly,
        maxAge: config.refreshMaxAge,
      });
    }

    return result;
  } catch (error: any) {
    return Error(error);
  }
};
