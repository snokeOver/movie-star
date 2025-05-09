import { z } from "zod";

export const createMediaLibrarySchema = z.object({
  title: z
    .string()
    .min(1, "Title is required")
    .max(100, "Title cannot exceed 100 characters"), // Added max length for title

  posterUrl: z.string().optional(),

  description: z
    .string()
    .min(1, "Description is required")
    .max(500, "Description cannot exceed 500 characters"), // Added max length for description

  releaseYear: z
    .number()
    .int("Release year must be an integer")
    .min(1900, "Release year must be after 1900")
    .max(new Date().getFullYear(), "Release year cannot be in the future"),

  genre: z
    .array(z.string()) // Assuming genre is a list of strings
    .min(1, "At least one genre is required"),

  director: z
    .array(z.string())
    .min(1, "At least one Director name is required")
    .refine(
      (directorArray) => directorArray.every((item) => item.trim() !== ""),
      {
        message: "This director name can't be empty",
      }
    ),

  cast: z
    .array(z.string())
    .min(1, "At least one cast member is required")
    .refine(
      (castArray) => castArray.every((castMember) => castMember.trim() !== ""),
      {
        message: "This cast name can't be empty",
      }
    ),

  streamingPlatform: z
    .array(z.string()) // Assuming streaming platform is a list of strings
    .min(1, "At least one streaming platform is required"),

  accessLink: z
    .array(z.string())
    .min(1, "At least one access link is required")
    .refine(
      (links) =>
        links.every((link) => {
          try {
            new URL(link);
            return true;
          } catch (err) {
            return false;
            void err;
          }
        }),
      {
        message: "One or more access links have an invalid URL format",
      }
    ),

  rating: z
    .number()
    .min(0, "Rating cannot be less than 0")
    .max(10, "Rating must be between 0 and 10")
    .optional(), // Optional rating field, can be left blank

  price: z.number().min(0, "Price cannot be less than 0").optional(), // Optional price field

  priceType: z.enum(["buy", "rent"]), // Price type must be either "buy" or "rent"

  discount: z.number().min(0, "Discount cannot be less than 0").optional(), // Optional discount field

  discountType: z.enum(["percentage", "fixed"]).optional(), // Optional discount type

  discountExpiry: z
    .date()
    .optional()
    .refine(
      (date) => !date || date > new Date(),
      "Discount expiry date must be in the future"
    ), // Validates if the discount expiry date is in the future

  isActive: z.boolean(), // Status must be a boolean (true/false)
});

export const updateProfileSchema = z.object({
  name: z
    .string()
    .min(1, "Name is required")
    .max(100, "Name cannot exceed 100 characters"), // Added max length for title

  profilePhoto: z.string().optional(),
});
