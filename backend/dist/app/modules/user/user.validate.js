"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidateUser = void 0;
const zod_1 = require("zod");
const createReview = zod_1.z.object({
    body: zod_1.z
        .object({
        movieSeriesId: zod_1.z.string().min(1, "Movie Series ID is required"),
        userId: zod_1.z.string().min(1, "User ID is required"),
        rating: zod_1.z
            .number()
            .min(1)
            .max(10, { message: "Rating must be between 1 and 10" }),
        writtenReview: zod_1.z.string().min(1, { message: "Review cannot be empty" }),
        isSpoiler: zod_1.z.boolean(),
        tags: zod_1.z
            .array(zod_1.z.string())
            .min(1, { message: "At least one tag is required" }),
    })
        .strict(),
});
const updateReview = zod_1.z.object({
    body: zod_1.z
        .object({
        movieSeriesId: zod_1.z.string().optional(),
        userId: zod_1.z.string().optional(),
        rating: zod_1.z.number().optional(),
        writtenReview: zod_1.z.string().optional(),
        isSpoiler: zod_1.z.boolean().optional(),
        tags: zod_1.z.array(zod_1.z.string().optional()).optional(),
    })
        .strict(),
});
const createMediaLike = zod_1.z.object({
    body: zod_1.z
        .object({
        movieSeriesId: zod_1.z.string().min(1, "Movie Series ID is required"),
        userId: zod_1.z.string().min(1, "User ID is required"),
    })
        .strict(),
});
const createReviewLike = zod_1.z.object({
    body: zod_1.z
        .object({
        reviewId: zod_1.z.string().min(1, "Review id is required"),
        userId: zod_1.z.string().min(1, "User ID is required"),
    })
        .strict(),
});
const createComment = zod_1.z.object({
    body: zod_1.z
        .object({
        reviewId: zod_1.z.string().min(1, "Review id is required"),
        userId: zod_1.z.string().min(1, "User ID is required"),
        content: zod_1.z.string().min(1, "Comment is required"),
    })
        .strict(),
});
const watchList = zod_1.z.object({
    body: zod_1.z
        .object({
        movieSeriesId: zod_1.z.string().min(1, "Movie series id is required"),
    })
        .strict(),
});
const updateProfile = zod_1.z
    .object({
    name: zod_1.z
        .string()
        .min(1, "Name is required")
        .max(110, "Name cannot exceed 110 characters")
        .optional(),
    profilePhoto: zod_1.z.string().optional(),
})
    .strict();
exports.ValidateUser = {
    createReview,
    createMediaLike,
    createReviewLike,
    createComment,
    watchList,
    updateReview,
    updateProfile,
};
