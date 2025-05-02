import { z } from "zod";

export const createMediaLibrarySchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  releaseYear: z.number().int().min(1900, "Year must be after 1900"),
  genre: z.array(z.string()).min(1, "At least one genre is required"),
  director: z.string().min(1, "Director is required"),
  cast: z.string().min(1, "Cast is required"),
  streamingPlatform: z
    .array(z.string())
    .min(1, "At least one streaming platform is required"),
  accessLink: z.string().min(1, "At least one access link is required"),

  rating: z.number().min(0).max(10, "Rating must be between 0 and 10"),
  price: z.number().min(0, "Price must be a positive number"),
  priceType: z.enum(["buy", "rent"]),
  discount: z.number().min(0, "Discount must be a positive number").optional(),
  discountType: z.enum(["percentage", "fixed"]).optional(),
  discountExpiry: z.date().optional(),
  status: z.boolean(),
});
