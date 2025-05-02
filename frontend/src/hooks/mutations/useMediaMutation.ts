import {
  useMutation,
  useQueryClient,
  type MutationKey,
} from "@tanstack/react-query";

import { toast } from "sonner";
import { getValidToken } from "@/lib/verifyToken"; // Token utility

type IMediaMutationType = "create" | "update" | "delete";

// Function to determine API URL based on mutation type
const getMediaMutationURL = (type: IMediaMutationType, mediaId?: string) => {
  if (type === "create") return "/media"; // URL for creating media
  if (type === "update" && mediaId) return `/media/${mediaId}`; // URL for updating media
  if (type === "delete" && mediaId) return `/media/${mediaId}`; // URL for deleting media
  return "";
};

// Define types for mutation parameters
type IMediaMutationParams = {
  type: IMediaMutationType;
  mediaId?: string; // for delete and update
  input?: FormData; // for create and update
};

export const useMediaMutation = () => {
  const queryClient = useQueryClient(); // For cache invalidation
  const mutationKey = ["media"] satisfies MutationKey;

  return useMutation({
    mutationKey,
    mutationFn: async ({ type, mediaId, input }: IMediaMutationParams) => {
      const token = await getValidToken(); // Fetch token from the server-side utility
      const url =
        process.env.NEXT_PUBLIC_BASE_API_URL +
        getMediaMutationURL(type, mediaId);

      const options: RequestInit = {
        method:
          type === "create" ? "POST" : type === "update" ? "PATCH" : "DELETE", // Use POST for create, PATCH for update, DELETE for delete
        headers: {
          Authorization: token,
        },
      };

      if (input) {
        options.body = input; // Send FormData for create and update operations
      }

      const response = await fetch(url, options);

      const result = await response.json();

      return result;
    },

    onSuccess: (res) => {
      toast.success(res?.message || "Operation successful");

      // Invalidate the queries related to media to update the UI after mutation
      queryClient.invalidateQueries({ queryKey: ["medias"] });
      queryClient.invalidateQueries({ queryKey: ["media"] });
    },

    onError: (error) => {
      toast.error(`Error: ${error?.message || "Something went wrong"}`);
    },
  });
};
