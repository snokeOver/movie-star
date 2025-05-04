"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidateMovieSeries = void 0;
const zod_1 = require("zod");
const prisma_1 = require("../../../../generated/prisma");
const create = zod_1.z
    .object({
    title: zod_1.z
        .string()
        .min(1, "Title is required")
        .max(110, "Title cannot exceed 110 characters"),
    description: zod_1.z
        .string()
        .min(1, "Description is required")
        .max(500, "Description cannot exceed 500 characters"),
    releaseYear: zod_1.z
        .number()
        .int("Release year must be an integer")
        .min(1900, "Release year must be after 1900")
        .max(new Date().getFullYear(), "Release year cannot be in the future"),
    genre: zod_1.z
        .array(zod_1.z.nativeEnum(prisma_1.Genre))
        .min(1, "At least one genre is required"),
    director: zod_1.z
        .array(zod_1.z.string()) // Updated to array of strings
        .min(1, "At least one director is required"),
    cast: zod_1.z
        .array(zod_1.z.string()) // Updated to array of strings
        .min(1, "At least one cast member is required"),
    streamingPlatform: zod_1.z
        .array(zod_1.z.nativeEnum(prisma_1.StreamingPlatform))
        .min(1, "At least one streaming platform is required"),
    accessLink: zod_1.z
        .array(zod_1.z.string().url("Invalid URL format for access link"))
        .min(1, "At least one access link is required"),
    rating: zod_1.z
        .number()
        .min(0, "Rating cannot be less than 0")
        .max(10, "Rating cannot exceed 10")
        .default(0)
        .optional(),
    price: zod_1.z.number().min(0, "Price cannot be less than 0"),
    priceType: zod_1.z.nativeEnum(prisma_1.PriceType),
    discount: zod_1.z.number().min(0, "Discount cannot be less than 0").optional(),
    discountType: zod_1.z.nativeEnum(prisma_1.DiscountType).optional(),
    isActive: zod_1.z.boolean().optional(),
    discountExpiry: zod_1.z
        .preprocess((val) => {
        if (!val)
            return undefined;
        const date = new Date(val);
        return isNaN(date.getTime()) ? undefined : date;
    }, zod_1.z.date())
        .optional()
        .refine((date) => !date || date > new Date(), "Discount expiry date must be in the future"),
})
    .strict();
const update = create
    .extend({
    posterUrl: zod_1.z.string().url("Invalid poster URL").optional(),
})
    .partial();
exports.ValidateMovieSeries = {
    update,
    create,
};
