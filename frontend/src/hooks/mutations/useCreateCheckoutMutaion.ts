import {
  useMutation,
  useQueryClient,
  type MutationKey,
} from "@tanstack/react-query";

import { toast } from "sonner";
import { getValidToken } from "@/lib/verifyToken";
import { loadStripe } from "@stripe/stripe-js";
import { PriceType } from "@/types";

interface ICheckoutPayload {
  price: number;
  customerEmail: string;
  purchaseType: PriceType;
  customerId: string;
  productId: string;
  productName: string;
  success_url: string;
  cancel_url: string;
}

export const useCreateCheckoutMutation = () => {
  const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PK!);
  const queryClient = useQueryClient();
  const mutationKey = ["checkout"] satisfies MutationKey;

  return useMutation({
    mutationKey,
    mutationFn: async (payload: ICheckoutPayload) => {
      const token = await getValidToken();
      const url = `${process.env.NEXT_PUBLIC_BASE_API_URL}/payment/create-session`;

      const options: RequestInit = {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      };

      const response = await fetch(url, options);

      if (!response.ok) {
        throw new Error("Failed to create checkout session");
      }

      const result = await response.json();

      // Ensure the response has the expected structure
      if (!result || !result.data?.url) {
        throw new Error("Missing URL in response");
      }

      return result;
    },

    onSuccess: async (res) => {
      if (!res?.data?.url) {
        toast.error("Something went wrong with the checkout session");
      }
      const { id } = res.data;

      const stripe = await stripePromise;

      if (!stripe) return toast.error("Stripe SDK failed to load");

      // Redirect the user to the Stripe Checkout page
      const { error } = await stripe.redirectToCheckout({
        sessionId: id,
      });
      if (error)
        return toast.error("Something went wrong with the checkout session");

      queryClient.invalidateQueries({ queryKey: ["payment_details"] });
    },

    onError: (error) => {
      toast.error(`Error: ${error?.message || "Something went wrong"}`);
    },
  });
};
