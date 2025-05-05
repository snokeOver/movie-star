import { getValidToken } from "@/lib/verifyToken";
import { useUserStore } from "@/stores/auth";
import { queryOptions, useQuery } from "@tanstack/react-query";

interface IUseMediaQueryOptions {
  id?: string | null;
  mode: "all" | "single";
}

// Generic media fetch hook
export const useMediaQuery = (
  { id, mode }: IUseMediaQueryOptions = { mode: "all" }
) => {
  const { user } = useUserStore();

  const options = queryOptions({
    queryKey: id ? ["media", id] : ["medias"], // Use different queryKey for single and all media
    queryFn: async () => {
      if (!id && mode === "single") {
        throw new Error("mediaId is required in single mode.");
      }

      const token = await getValidToken();
      if (!token) return null;

      const url =
        mode === "all"
          ? `${process.env.NEXT_PUBLIC_BASE_API_URL}/media` // URL for all media
          : mode === "single" && id
          ? `${process.env.NEXT_PUBLIC_BASE_API_URL}/media/single/${id}` // URL for single media
          : ""; // Fallback URL (this will never be used because of enabled logic)

      if (!url) throw new Error("Invalid URL or media ID.");

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
    enabled:
      (mode === "all" || (mode === "single" && !!id)) &&
      !!user &&
      (user.role === "admin" || user.role === "s_admin"),
  });

  return useQuery(options);
};
