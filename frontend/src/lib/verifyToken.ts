"use server";

import { getAccessToken } from "@/services/auth/getAccessToken";
import { logOutWithNavigate } from "@/services/auth/logOut";
import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";

const config = {
  secure: process.env.TOKEN_HTTPS_SECURITY === "production" ? true : false,
  accessHttpOnly: process.env.ACCESS_TOKEN_JS_ACCESS === "yes" ? false : true,
  accessMaxAge: Number(process.env.ACCESS_TOKEN_MAXAGE),
};

export const isTokenExpired = async (token: string): Promise<boolean> => {
  if (!token) return true;

  try {
    const decoded: { exp: number } = jwtDecode(token);
    return decoded.exp < Date.now() / 1000;
  } catch (error) {
    console.log(error);
    return true;
  }
};

export const getValidToken = async (): Promise<string> => {
  const cookie = await cookies();

  let token = cookie.get("accessToken")?.value || "";

  // if token not found in cookie then log out the user and take to login page
  if (!token) {
    await logOutWithNavigate("login");
    return "";
  }

  //if token is expired then refresh the token
  if (await isTokenExpired(token)) {
    const { data } = await getAccessToken();
    token = data.accessToken;
    (await cookies()).set("accessToken", token, {
      secure: config.secure, // sent over http and https
      httpOnly: config.accessHttpOnly, // Prevents JavaScript access
      maxAge: config.accessMaxAge, //browser will delete cookie after 1 day
    });
  }

  return token;
};
