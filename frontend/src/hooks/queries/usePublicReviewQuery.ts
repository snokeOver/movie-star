import { getValidToken } from "@/lib/verifyToken";
import { useUserStore } from "@/stores/auth";
import { queryOptions, useQuery } from "@tanstack/react-query";

interface IusePublicReviewQueryOptions {
  page: number;
  limit: number;
}

// Single media fetch hook
export const usePublicReviewQuery = ({
  page = 1,
  limit = 1,
}: IusePublicReviewQueryOptions) => {
  const { user } = useUserStore();
  const options = queryOptions({
    queryKey: ["reviews_by_query", page, limit, user?.userId],
    queryFn: async () => {
      let token = "";
      if (user?.userId) token = await getValidToken();

      const url = `${process.env.NEXT_PUBLIC_BASE_API_URL}/media/single-public/?page=${page}&limit=${limit}`;

      const res = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: token,
        },
      });

      if (!res.ok) throw new Error("Failed to fetch media");

      const data = await res.json();

      if (!data.data) throw new Error("Failed to fetch media");
      return data.data;
    },
    enabled: true, // Only enable if id is provided
  });

  return useQuery(options);
};
