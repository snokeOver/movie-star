import { z } from "zod";
//verify otp
const verifyOtp = z.object({
  body: z
    .object({
      otp: z.string(),
      email: z.string().email(),
    })
    .strict(),
});

//vefiry email
const verifyEmail = z.object({
  body: z
    .object({
      email: z.string().email(),
      otp: z.string(),
    })
    .strict(),
});

//Reset password
const resetPassword = z.object({
  body: z
    .object({
      password: z.string(),
      email: z.string().email(),
      otp: z.string(),
    })
    .strict(),
});

const register = z
  .object({
    password: z.string(),

    email: z
      .string({
        required_error: "Email is required!",
      })
      .email(),
    name: z.string({
      required_error: "Name is required!",
    }),
  })
  .strict();

export const ValidateAuth = {
  verifyOtp,
  resetPassword,
  verifyEmail,
  register,
};
