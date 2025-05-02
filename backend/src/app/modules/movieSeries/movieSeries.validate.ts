import { z } from "zod";
import {
  DiscountType,
  Genre,
  PriceType,
  StreamingPlatform,
} from "../../../../generated/prisma";

const create = z
  .object({
    title: z
      .string()
      .min(1, "Title is required")
      .max(110, "Title cannot exceed 110 characters"),

    description: z
      .string()
      .min(1, "Description is required")
      .max(500, "Description cannot exceed 500 characters"),

    releaseYear: z
      .number()
      .int("Release year must be an integer")
      .min(1900, "Release year must be after 1900")
      .max(new Date().getFullYear(), "Release year cannot be in the future"),

    genre: z
      .array(z.nativeEnum(Genre))
      .min(1, "At least one genre is required"),

    director: z
      .array(z.string()) // Updated to array of strings
      .min(1, "At least one director is required"),

    cast: z
      .array(z.string()) // Updated to array of strings
      .min(1, "At least one cast member is required"),

    streamingPlatform: z
      .array(z.nativeEnum(StreamingPlatform))
      .min(1, "At least one streaming platform is required"),

    accessLink: z
      .array(z.string().url("Invalid URL format for access link"))
      .min(1, "At least one access link is required"),

    rating: z
      .number()
      .min(0, "Rating cannot be less than 0")
      .max(10, "Rating cannot exceed 10")
      .default(0)
      .optional(),

    price: z.number().min(0, "Price cannot be less than 0"),

    priceType: z.nativeEnum(PriceType),

    discount: z.number().min(0, "Discount cannot be less than 0").optional(),

    discountType: z.nativeEnum(DiscountType).optional(),
    isActive: z.boolean().optional(),

    discountExpiry: z
      .date()
      .optional()
      .refine(
        (date) => !date || date > new Date(),
        "Discount expiry date must be in the future"
      ),
  })
  .strict();

const update = create
  .extend({
    posterUrl: z.string().url("Invalid poster URL").optional(),
  })
  .partial();

export const ValidateMovieSeries = {
  update,
  create,
};
