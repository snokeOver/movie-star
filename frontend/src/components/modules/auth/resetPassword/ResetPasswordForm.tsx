"use client";

import { useState } from "react";

import { useRouter } from "next/navigation";

import { useForgotPassEmailOTP } from "@/stores/forgetPssEmailOTP";
import { toast } from "sonner";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { resetPasswordSchema } from "@/schemas";
import { z } from "zod";
import Link from "next/link";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { EyeClosed, EyeIcon } from "lucide-react";
import PrimaryButton from "@/components/shared/buttons/PrimaryButton";
import { postWithFieldValues } from "@/services/auth/postWithFieldValues";

export default function ResetPasswordForm() {
  const router = useRouter();
  const { email, setEmail, otp, setOTP } = useForgotPassEmailOTP();
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);

  const form = useForm<z.infer<typeof resetPasswordSchema>>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      password: "",
      confirm_password: "",
    },
    mode: "onChange", // Validate on typing
  });

  async function onSubmit(data: z.infer<typeof resetPasswordSchema>) {
    setIsLoading(true);

    try {
      const payload = {
        email: email,
        password: data.password,
        otp: otp,
      };
      const res = await postWithFieldValues(payload, "auth/reset-password");
      console.log(res);
      if (res.success) {
        router.push("/login");
        setEmail("");
        setOTP("");
        toast.success(res.message);
      } else {
        setError(res.message);
        toast.error(res.message);
      }
    } catch (error) {
      toast.error(`Password Reset Failed $`);
      void error;
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <div className="space-y-2 text-center">
        <h1 className="text-lg font-bold uppercase text-black lg:text-4.2xl">
          Create New password
        </h1>
        <p className="mb-8 mt-4 w-full rounded-md bg-white/40 p-3 text-gray-900 lg:text-xl">
          {email}
        </p>
        <p className="text-center text-[11px] font-bold text-gray-800 lg:text-base">
          Create a new, strong password that you don&apos;t use for other
          websites
        </p>
      </div>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex w-full flex-col gap-5"
        >
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      type={showPass ? "text" : "password"}
                      placeholder="Enter your password"
                      {...field}
                    />
                    <div
                      onClick={() => setShowPass(!showPass)}
                      className="text absolute right-2 top-1/2 -translate-y-1/2 text-black"
                    >
                      {showPass ? <EyeIcon /> : <EyeClosed />}
                    </div>
                  </div>
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="confirm_password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm Password</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      type={showConfirmPass ? "text" : "password"}
                      placeholder="Confirm your password"
                      {...field}
                    />
                    <div
                      onClick={() => setShowConfirmPass(!showConfirmPass)}
                      className="text absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer text-black"
                    >
                      {showConfirmPass ? <EyeIcon /> : <EyeClosed />}
                    </div>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <PrimaryButton
            btnText="Create Password"
            loadingText="Creating..."
            isLoading={isLoading}
            type="submit"
          />
        </form>
      </Form>
      {error && (
        <p className="text-xs text-destructive md:text-base">{error}</p>
      )}
      <div className="flex items-center justify-center gap-2">
        <Link
          href="/signin"
          className="cursor-pointer text-sm font-bold uppercase text-theme-600 hover:underline"
        >
          Skip for now
        </Link>
      </div>
    </>
  );
}
