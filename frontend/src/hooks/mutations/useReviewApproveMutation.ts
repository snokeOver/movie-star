import {
  useMutation,
  useQueryClient,
  type MutationKey,
} from "@tanstack/react-query";
import { toast } from "sonner";
import { getValidToken } from "@/lib/verifyToken"; // Token utility
export type TActionType = "Approve" | "Unpublish" | "Delete";

interface IPayload {
  reviewId: string;
  action: TActionType;
}

export const useReviewApproveMutation = () => {
  const queryClient = useQueryClient(); // For cache invalidation
  const mutationKey = ["comment"] satisfies MutationKey;

  return useMutation({
    mutationKey,
    mutationFn: async (payload: IPayload) => {
      const { reviewId, action } = payload;
      const token = await getValidToken();
      if (!reviewId || !token) {
        return toast.error("Please provide reviewId or token is invalid");
      }

      const url = `${process.env.NEXT_PUBLIC_BASE_API_URL}/review/pending/${reviewId}`;

      const options: RequestInit = {
        method:
          action === "Delete"
            ? "DELETE"
            : action === "Approve"
            ? "POST"
            : "PATCH",
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
      };

      const response = await fetch(url, options);
      const result = await response.json();

      return result;
    },

    onSuccess: (res) => {
      if (res.success) toast.success(res?.message || "Comment successfully");
      if (!res.success) toast.error(res?.message || "Comment unsuccessfully");

      // Invalidate the queries related to media to update the UI after mutation
      queryClient.invalidateQueries({ queryKey: ["pending_reviews"] });
      queryClient.invalidateQueries({ queryKey: ["reviews_by_query"] });
    },

    onError: (error) => {
      toast.error(`Error: ${error?.message || "Something went wrong"}`);
    },
  });
};
