import { z } from "zod";

const createReview = z.object({
  body: z
    .object({
      movieSeriesId: z.string().min(1, "Movie Series ID is required"),
      userId: z.string().min(1, "User ID is required"),
      rating: z
        .number()
        .min(1)
        .max(10, { message: "Rating must be between 1 and 10" }),

      writtenReview: z.string().min(1, { message: "Review cannot be empty" }),
      isSpoiler: z.boolean(),
      tags: z
        .array(z.string())
        .min(1, { message: "At least one tag is required" }),
    })
    .strict(),
});

const updateReview = z.object({
  body: z
    .object({
      movieSeriesId: z.string().optional(),
      userId: z.string().optional(),
      rating: z.number().optional(),

      writtenReview: z.string().optional(),
      isSpoiler: z.boolean().optional(),
      tags: z.array(z.string().optional()).optional(),
    })
    .strict(),
});

const createMediaLike = z.object({
  body: z
    .object({
      movieSeriesId: z.string().min(1, "Movie Series ID is required"),
      userId: z.string().min(1, "User ID is required"),
    })
    .strict(),
});

const createReviewLike = z.object({
  body: z
    .object({
      reviewId: z.string().min(1, "Review id is required"),
      userId: z.string().min(1, "User ID is required"),
    })
    .strict(),
});

const createComment = z.object({
  body: z
    .object({
      reviewId: z.string().min(1, "Review id is required"),
      userId: z.string().min(1, "User ID is required"),
      content: z.string().min(1, "Comment is required"),
    })
    .strict(),
});

const watchList = z.object({
  body: z
    .object({
      movieSeriesId: z.string().min(1, "Movie series id is required"),
    })
    .strict(),
});

export const ValidateUser = {
  createReview,
  createMediaLike,
  createReviewLike,
  createComment,
  watchList,
  updateReview,
};
