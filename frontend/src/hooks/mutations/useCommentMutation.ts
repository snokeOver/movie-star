import {
  useMutation,
  useQueryClient,
  type MutationKey,
} from "@tanstack/react-query";
import { toast } from "sonner";
import { getValidToken } from "@/lib/verifyToken"; // Token utility

// Define types for mutation parameters
type ICommentMutationParams = {
  payload: {
    userId: string;
    content: string;
    reviewId: string;
  };
};

export const useCommentMutation = () => {
  const queryClient = useQueryClient(); // For cache invalidation
  const mutationKey = ["comment"] satisfies MutationKey;

  return useMutation({
    mutationKey,
    mutationFn: async ({ payload }: ICommentMutationParams) => {
      if (!payload.userId) {
        return toast.error("Please provide userId");
      }

      const token = await getValidToken();
      const url = `${process.env.NEXT_PUBLIC_BASE_API_URL}/user/comment`;

      const options: RequestInit = {
        method: "POST",
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...payload,
        }),
      };

      const response = await fetch(url, options);
      const result = await response.json();

      return result;
    },

    onSuccess: (res) => {
      if (res.success) toast.success(res?.message || "Comment successfully");
      if (!res.success) toast.error(res?.message || "Failed to comment");

      // Invalidate the queries related to media to update the UI after mutation
      queryClient.invalidateQueries({ queryKey: ["single_media"] });
    },

    onError: (error) => {
      toast.error(`Error: ${error?.message || "Something went wrong"}`);
    },
  });
};
