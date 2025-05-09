import { getValidToken } from "@/lib/verifyToken";
import { useUserStore } from "@/stores/auth";
import { queryOptions, useQuery } from "@tanstack/react-query";

export const usePurchaseQuery = (page: number, limit: number) => {
  const { user } = useUserStore();

  const options = queryOptions({
    queryKey: ["user_purchaselist", page, limit],
    queryFn: async () => {
      const token = await getValidToken();
      if (!token) return null;

      const url = `${process.env.NEXT_PUBLIC_BASE_API_URL}/user/purchase?page=${page}&limit=${limit}`;

      const res = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: token,
        },
      });

      if (!res.ok) throw new Error("Failed to fetch user purchase list");

      const data = await res.json();
      return data.data;
    },
    enabled: !!user && user.role === "user",
  });

  return useQuery(options);
};
