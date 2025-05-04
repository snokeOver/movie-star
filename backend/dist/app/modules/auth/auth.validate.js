"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidateAuth = void 0;
const zod_1 = require("zod");
//verify otp
const verifyOtp = zod_1.z.object({
    body: zod_1.z
        .object({
        otp: zod_1.z.string(),
        email: zod_1.z.string().email(),
    })
        .strict(),
});
//vefiry email
const verifyEmail = zod_1.z.object({
    body: zod_1.z
        .object({
        email: zod_1.z.string().email(),
        otp: zod_1.z.string(),
    })
        .strict(),
});
//Reset password
const resetPassword = zod_1.z.object({
    body: zod_1.z
        .object({
        password: zod_1.z.string(),
        email: zod_1.z.string().email(),
        otp: zod_1.z.string(),
    })
        .strict(),
});
const register = zod_1.z
    .object({
    password: zod_1.z.string(),
    email: zod_1.z
        .string({
        required_error: "Email is required!",
    })
        .email(),
    name: zod_1.z.string({
        required_error: "Name is required!",
    }),
})
    .strict();
exports.ValidateAuth = {
    verifyOtp,
    resetPassword,
    verifyEmail,
    register,
};
