import { getValidToken } from "@/lib/verifyToken";
import { useUserStore } from "@/stores/auth";
import { queryOptions, useQuery } from "@tanstack/react-query";

export const usePendingReviewQuery = (page = 1, limit = 10) => {
  const { user } = useUserStore();

  const options = queryOptions({
    queryKey: ["pending_reviews", page, limit],
    queryFn: async () => {
      const token = await getValidToken();
      if (!token) return null;

      const url = `${process.env.NEXT_PUBLIC_BASE_API_URL}/review/pending?page=${page}&limit=${limit}`;

      const res = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: token,
        },
      });

      if (!res.ok) throw new Error("Failed to fetch pending reviews");

      const data = await res.json();
      return data.data;
    },
    enabled: !!user && user.role === "admin",
  });

  return useQuery(options);
};
