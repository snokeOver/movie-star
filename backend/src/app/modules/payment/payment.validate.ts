import { z } from "zod";

const createSession = z.object({
  body: z
    .object({
      price: z
        .number({
          required_error: "Price is required",
          invalid_type_error: "Price must be a number",
        })
        .min(1, "Price must be at least 1"),

      success_url: z
        .string({
          required_error: "Success URL is required",
        })
        .url("Success URL must be a valid URL"),

      cancel_url: z
        .string({
          required_error: "Cancel URL is required",
        })
        .url("Cancel URL must be a valid URL"),

      customerEmail: z
        .string({
          required_error: "Customer email is required",
        })
        .email("Invalid email format"),

      customerName: z
        .string({
          required_error: "Customer name is required",
        })
        .min(1, "Customer name cannot be empty"),

      customerId: z
        .string({
          required_error: "Customer ID is required",
        })
        .min(1, "Customer ID cannot be empty"),

      productId: z
        .string({
          required_error: "Product ID is required",
        })
        .min(1, "Product ID cannot be empty"),

      productName: z
        .string({
          required_error: "Product name is required",
        })
        .min(1, "Product name cannot be empty"),
    })
    .strict(),
});

export const ValidatePayment = {
  createSession,
};
