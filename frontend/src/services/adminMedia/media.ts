"use server";

import { getValidToken } from "@/lib/verifyToken";
import { revalidateTag } from "next/cache";

//  get all movie series
export const getAllMedia = async () => {
  const token = await getValidToken();
  try {
    const res = await fetch(`${process.env.BASE_API_URL}/media`, {
      headers: {
        Authorization: token,
      },
      next: {
        tags: ["Medias"],
      },
    });
    const data = await res.json();
    return data;
  } catch (error: any) {
    return Error(error);
  }
};

// delete movie series
export const deleteMedia = async (mediaId: string) => {
  const token = await getValidToken();
  try {
    const res = await fetch(`${process.env.BASE_API_URL}/media/${mediaId}`, {
      method: "DELETE",
      headers: {
        Authorization: token,
      },
    });
    revalidateTag("Medias");
    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};

//Create single movie series
export const createMedia = async (userData: FormData) => {
  const token = await getValidToken();
  try {
    const res = await fetch(`${process.env.BASE_API_URL}/media`, {
      method: "POST",
      body: userData,
      headers: {
        Authorization: token,
      },
    });
    revalidateTag("Medias");
    const result = await res.json();

    return result;
  } catch (error: any) {
    return Error(error);
  }
};
