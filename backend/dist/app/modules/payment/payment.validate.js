"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidatePayment = void 0;
const zod_1 = require("zod");
const createSession = zod_1.z.object({
    body: zod_1.z
        .object({
        price: zod_1.z
            .number({
            required_error: "Price is required",
            invalid_type_error: "Price must be a number",
        })
            .min(1, "Price must be at least 1"),
        success_url: zod_1.z
            .string({
            required_error: "Success URL is required",
        })
            .url("Success URL must be a valid URL"),
        cancel_url: zod_1.z
            .string({
            required_error: "Cancel URL is required",
        })
            .url("Cancel URL must be a valid URL"),
        customerEmail: zod_1.z
            .string({
            required_error: "Customer email is required",
        })
            .email("Invalid email format"),
        customerName: zod_1.z
            .string({
            required_error: "Customer name is required",
        })
            .min(1, "Customer name cannot be empty"),
        customerId: zod_1.z
            .string({
            required_error: "Customer ID is required",
        })
            .min(1, "Customer ID cannot be empty"),
        productId: zod_1.z
            .string({
            required_error: "Product ID is required",
        })
            .min(1, "Product ID cannot be empty"),
        productName: zod_1.z
            .string({
            required_error: "Product name is required",
        })
            .min(1, "Product name cannot be empty"),
    })
        .strict(),
});
exports.ValidatePayment = {
    createSession,
};
