import { getValidToken } from "@/lib/verifyToken";
import { useUserStore } from "@/stores/auth";
import { queryOptions, useQuery } from "@tanstack/react-query";

interface IusePublicMediaQueryOptions {
  id: string; // id is now required for single media fetch
}

// Single media fetch hook
export const usePublicMediaQuery = ({ id }: IusePublicMediaQueryOptions) => {
  const { user } = useUserStore();
  const options = queryOptions({
    queryKey: ["single_media", id],
    queryFn: async () => {
      if (!id) {
        throw new Error("mediaId is required to fetch single media.");
      }
      let token = "";
      if (user?.userId) token = await getValidToken();

      const url = `${process.env.NEXT_PUBLIC_BASE_API_URL}/media/single-public/${id}`;

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
    enabled: !!id, // Only enable if id is provided
  });

  return useQuery(options);
};
