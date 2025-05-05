import { getValidToken } from "@/lib/verifyToken";
import { useUserStore } from "@/stores/auth";
import { queryOptions, useQuery } from "@tanstack/react-query";

interface IuseReviewQueryOptions {
  id?: string | null;
  mode: "all" | "single";
}

export const useReviewQuery = (
  { id, mode }: IuseReviewQueryOptions = { mode: "all" }
) => {
  const { user } = useUserStore();

  const options = queryOptions({
    queryKey: id ? ["review", id] : ["reviews"],
    queryFn: async () => {
      if (!id && mode === "single") {
        throw new Error("reviewId is required in single mode.");
      }

      const token = await getValidToken();
      if (!token) return null;

      const url =
        mode === "all"
          ? `${process.env.NEXT_PUBLIC_BASE_API_URL}/user/reviews`
          : mode === "single" && id
          ? `${process.env.NEXT_PUBLIC_BASE_API_URL}/user/review/${id}`
          : "";

      if (!url) throw new Error("Invalid URL or review ID.");

      const res = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: token,
        },
      });

      if (!res.ok) throw new Error("Failed to fetch reviews");

      const data = await res.json();
      return data.data;
    },
    enabled:
      (mode === "all" || (mode === "single" && !!id)) &&
      !!user &&
      user.role === "user",
  });

  return useQuery(options);
};
