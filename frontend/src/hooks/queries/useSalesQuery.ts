import { getValidToken } from "@/lib/verifyToken";
import { useUserStore } from "@/stores/auth";
import { queryOptions, useQuery } from "@tanstack/react-query";

export const useSalesQuery = (
  start: string | undefined,
  end: string | undefined
) => {
  const { user } = useUserStore();

  const options = queryOptions({
    queryKey: ["admin_statistics"],
    queryFn: async () => {
      const token = await getValidToken();
      if (!token) return null;

      const url = `${process.env.NEXT_PUBLIC_BASE_API_URL}/admin/sales?start=${start}&end=${end}`;

      const res = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: token,
        },
      });

      if (!res.ok) throw new Error("Failed to fetch admin sales history");

      const data = await res.json();
      return data.data;
    },
    enabled: !!user && user.role === "admin",
  });

  return useQuery(options);
};
