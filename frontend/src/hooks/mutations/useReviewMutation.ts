import {
  useMutation,
  useQueryClient,
  type MutationKey,
} from "@tanstack/react-query";

import { toast } from "sonner";
import { getValidToken } from "@/lib/verifyToken"; // Token utility
import { IReviewForm } from "@/types";

type IReviewMutationType = "create" | "update" | "delete";

// Function to determine API URL based on mutation type
const getMediaMutationURL = (type: IReviewMutationType, reviewId?: string) => {
  if (type === "create") return "/user/review"; // URL for creating media
  if (type === "update" && reviewId) return `/user/review/${reviewId}`; // URL for updating media
  if (type === "delete" && reviewId) return `/user/review/${reviewId}`; // URL for deleting media
  return "";
};

// Define types for mutation parameters
type IReviewMutation = {
  type: IReviewMutationType;
  reviewId?: string; // for delete and update
  input?: IReviewForm; // for create and update
};

export const useReviewMutation = () => {
  const queryClient = useQueryClient(); // For cache invalidation
  const mutationKey = ["review"] satisfies MutationKey;

  return useMutation({
    mutationKey,
    mutationFn: async ({ type, reviewId, input }: IReviewMutation) => {
      if (!reviewId && !input)
        return toast.error("Please provide reviewId or input");

      const token = await getValidToken(); // Fetch token from the server-side utility
      const url =
        process.env.NEXT_PUBLIC_BASE_API_URL +
        getMediaMutationURL(type, reviewId);

      const options: RequestInit = {
        method:
          type === "create" ? "POST" : type === "update" ? "PATCH" : "DELETE", // Use POST for create, PATCH for update, DELETE for delete
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
        ...(input && { body: JSON.stringify(input) }),
      };

      const response = await fetch(url, options);

      const result = await response.json();

      return result;
    },

    onSuccess: (res) => {
      if (res.success) toast.success(res?.message || "Operation successful");
      if (!res.success) toast.error(res?.message || "Operation unsuccessful");

      // Invalidate the queries related to media to update the UI after mutation
      queryClient.invalidateQueries({ queryKey: ["single_media"] });
    },

    onError: (error) => {
      toast.error(`Error: ${error?.message || "Something went wrong"}`);
    },
  });
};
