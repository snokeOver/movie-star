"use server";

export const postWithFieldValues = async (url: string) => {
  try {
    const res = await fetch(`${process.env.BASE_API_URL}/${url}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    const result = await res.json();

    return result;
  } catch (error: any) {
    return Error(error);
  }
};
