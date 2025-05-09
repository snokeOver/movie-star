"use client";
import { forgetPasswordSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FieldValues, useForm } from "react-hook-form";

import PrimaryButton from "@/components/shared/buttons/PrimaryButton";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { toast } from "sonner";

import { useForgotPassEmailOTP } from "@/stores/forgetPssEmailOTP";
import { postWithFieldValues } from "@/services/core/postWithFieldValues";

const ForgetPasswordForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuspended, setIsSuspended] = useState(false);
  const router = useRouter();
  const { setEmail } = useForgotPassEmailOTP();

  const form = useForm({
    resolver: zodResolver(forgetPasswordSchema),
    defaultValues: {
      email: "",
    },
    mode: "onChange",
  });

  const onSubmit = async (data: FieldValues) => {
    setIsLoading(true);

    try {
      const res = await postWithFieldValues(
        data,
        "auth/send-forget-password-otp"
      );

      if (res.success) {
        setIsLoading(true);
        toast.success(res.message);
        setEmail(data.email);
        router.push("/verify-otp");
      } else {
        toast.error(res.message);
        if (res.message === "Email is not verified!")
          router.push(`/verify-email?email=${data.email}`);

        if (
          res.message ===
          "This account is suspended due to multiple failed attempts. Please try again later."
        ) {
          setIsSuspended(true);
          form.setError("email", {
            type: "manual",
            message: res.message,
          });
        }
      }
    } catch (error) {
      console.log(error);
      toast.error(`OTP Send Failed`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="space-y-2 text-center">
        <h1 className="text-lg font-bold uppercase text-black lg:text-3xl">
          Forget Password !
        </h1>
        <p className="text-center text-xs font-bold uppercase text-gray-800 lg:text-base">
          Enter the email address associated with your account and we will send
          you an OTP to reset your password.
        </p>
      </div>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex w-full flex-col gap-5"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <PrimaryButton
            btnText="Send OTP"
            loadingText="Sending..."
            isLoading={isLoading}
            isDisable={isSuspended}
            type="submit"
          />
        </form>
      </Form>

      <div className="flex items-center justify-center gap-2">
        <p className="text-[11px] font-bold uppercase text-black sm:text-xs md:text-sm">
          Don&apos;t have an account?
        </p>
        <Link
          href="/register"
          className="cursor-pointer text-[11px] font-bold uppercase text-blue-300 hover:underline sm:text-xs md:text-sm"
        >
          Register
        </Link>
      </div>
    </>
  );
};

export default ForgetPasswordForm;
