"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const logOut = async () => {
  (await cookies()).delete("accessToken");
  (await cookies()).delete("refreshToken");
};

export const logOutWithNavigate = async (path: string) => {
  await logOut();
  return redirect(`/${path}`);
};
