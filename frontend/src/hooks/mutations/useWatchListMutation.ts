import {
  useMutation,
  useQueryClient,
  type MutationKey,
} from "@tanstack/react-query";
import { toast } from "sonner";
import { getValidToken } from "@/lib/verifyToken"; // Token utility

interface IPayload {
  movieSeriesId?: string;
  watchlistId?: string;
}
export const useWatchListMutation = () => {
  const queryClient = useQueryClient();
  const mutationKey = ["watchlists"] satisfies MutationKey;

  return useMutation({
    mutationKey,
    mutationFn: async ({ watchlistId, movieSeriesId }: IPayload) => {
      const token = await getValidToken();
      if (!token) {
        return toast.error("Please provide token is invalid");
      }

      const url = watchlistId
        ? `${process.env.NEXT_PUBLIC_BASE_API_URL}/user/watchlist/${watchlistId}`
        : `${process.env.NEXT_PUBLIC_BASE_API_URL}/user/watchlist`;

      const options: RequestInit = {
        method: watchlistId ? "PATCH" : movieSeriesId ? "POST" : "DELETE",
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          movieSeriesId,
          ...(watchlistId && { watchlistId }),
        }),
      };

      const response = await fetch(url, options);
      const result = await response.json();

      return result;
    },

    onSuccess: async (res) => {
      if (res.success) toast.success(res?.message || "Comment successfully");
      if (!res.success) toast.error(res?.message || "Comment successfully");

      queryClient.invalidateQueries({ queryKey: ["userWatchlist"] });
    },

    onError: (error) => {
      toast.error(`Error: ${error?.message || "Something went wrong"}`);
    },
  });
};
