import { getValidToken } from "@/lib/verifyToken";
import { useUserStore } from "@/stores/auth";
import { queryOptions, useQuery } from "@tanstack/react-query";

// Function to fetch all media
export const useAllMediaQuery = () => {
  const { user } = useUserStore();
  const options = queryOptions({
    queryKey: ["medias"],
    queryFn: async () => {
      const token = await getValidToken();
      if (!token) return null; // If token is not available, return null

      const url = `${process.env.NEXT_PUBLIC_BASE_API_URL}/media`; // Media fetch endpoint
      const res = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: token, // Using token directly, as you mentioned no Bearer
        },
      });

      if (!res.ok) throw new Error("Failed to fetch media");

      const data = await res.json();

      return data; // Return the fetched data
    },
    enabled: user?.role === "admin" || user?.role === "s_admin",
  });

  return useQuery(options); // Return useQuery with the defined options
};
