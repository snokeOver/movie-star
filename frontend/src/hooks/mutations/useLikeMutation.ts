import {
  useMutation,
  useQueryClient,
  type MutationKey,
} from "@tanstack/react-query";
import { toast } from "sonner";
import { getValidToken } from "@/lib/verifyToken"; // Token utility

// Define types for mutation parameters
type ILikeMutationParams = {
  userId: string;
  movieSeriesId?: string;
  reviewId?: string;
};

export const useLikeMutation = () => {
  const queryClient = useQueryClient(); // For cache invalidation
  const mutationKey = ["like"] satisfies MutationKey;

  return useMutation({
    mutationKey,
    mutationFn: async ({
      userId,
      movieSeriesId,
      reviewId,
    }: ILikeMutationParams) => {
      if (!userId) {
        return toast.error("Please provide userId");
      }

      const token = await getValidToken();
      const url = `${process.env.NEXT_PUBLIC_BASE_API_URL}/user/${
        movieSeriesId ? "media-like" : "review-like"
      }`;

      const options: RequestInit = {
        method: "POST",
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId,
          ...(movieSeriesId && { movieSeriesId }),
          ...(reviewId && { reviewId }),
        }),
      };

      const response = await fetch(url, options);
      const result = await response.json();

      return result;
    },

    onSuccess: (res) => {
      if (res.success) toast.success(res?.message || "Liked successfully");
      if (!res.success) toast.error(res?.message || "Failed to like");

      // Invalidate the queries related to media to update the UI after mutation
      queryClient.invalidateQueries({ queryKey: ["single_media"] });
      queryClient.invalidateQueries({ queryKey: ["reviews_by_query"] });
    },

    onError: (error) => {
      toast.error(`Error: ${error?.message || "Something went wrong"}`);
    },
  });
};
