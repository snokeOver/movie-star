import { getValidToken } from "@/lib/verifyToken";
import { useUserStore } from "@/stores/auth";
import { queryOptions, useQuery } from "@tanstack/react-query";

interface IUseMediaQueryOptions {
  id?: string; // optional id
}

// Generic media fetch hook
export const useMediaQuery = ({ id }: IUseMediaQueryOptions = {}) => {
  const { user } = useUserStore();

  const options = queryOptions({
    queryKey: id ? ["media", id] : ["medias"],
    queryFn: async () => {
      const token = await getValidToken();
      if (!token) return null;

      const url = id
        ? `${process.env.NEXT_PUBLIC_BASE_API_URL}/media/single/${id}` // Fetch single media
        : `${process.env.NEXT_PUBLIC_BASE_API_URL}/media`; // Fetch all media

      const res = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: token,
        },
      });

      if (!res.ok) throw new Error("Failed to fetch media");

      const data = await res.json();

      return data.data;
    },
    enabled: !!id || user?.role === "admin" || user?.role === "s_admin", // enable if id is provided or user is admin
  });

  return useQuery(options);
};
