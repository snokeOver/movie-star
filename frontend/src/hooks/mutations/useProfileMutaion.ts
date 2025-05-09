import {
  useMutation,
  useQueryClient,
  type MutationKey,
} from "@tanstack/react-query";

import { toast } from "sonner";
import { getValidToken } from "@/lib/verifyToken"; // Token utility

type IMediaMutationParams = {
  input: FormData; // for create and update
};

export const useProfileMutaion = () => {
  const queryClient = useQueryClient(); // For cache invalidation
  const mutationKey = ["profile"] satisfies MutationKey;

  return useMutation({
    mutationKey,
    mutationFn: async ({ input }: IMediaMutationParams) => {
      if (!input) return toast.error("Please provide  input");

      const token = await getValidToken(); // Fetch token from the server-side utility
      const url = process.env.NEXT_PUBLIC_BASE_API_URL + "/user/profile";
      const options: RequestInit = {
        method: "PATCH",
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
      if (res.success) toast.success(res?.message || "Operation successful");
      if (!res.success) toast.error(res?.message || "Operation unsuccessful");

      // Invalidate the queries related to media to update the UI after mutation
      queryClient.invalidateQueries({ queryKey: ["user_profile"] });
    },

    onError: (error) => {
      toast.error(`Error: ${error?.message || "Something went wrong"}`);
    },
  });
};
