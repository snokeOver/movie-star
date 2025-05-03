"use server";

export const getPublicData = async (url: string) => {
  try {
    const res = await fetch(`${process.env.BASE_API_URL}/${url}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await res.json();

    return result.data;
  } catch (error: any) {
    return Error(error);
  }
};
