"use client";
import { loginUserSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useEffect, useState } from "react";
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
import { EyeClosed, EyeIcon } from "lucide-react";
import PrimaryButton from "@/components/shared/buttons/PrimaryButton";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { loginUser } from "@/services/auth/login";
import { toast } from "sonner";
import { useUserStore } from "@/stores/auth";
import useSilentLogout from "@/hooks/useLogout";
import { useVerifyEmail } from "@/stores/verifyEmail";
import { jwtDecode } from "jwt-decode";
import { IUser } from "@/types";

const LoginForm = () => {
  const { setUser } = useUserStore();
  const { handleLogout } = useSilentLogout();

  const { setEmail } = useVerifyEmail();

  const [showPass, setShowPass] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();

  const form = useForm({
    resolver: zodResolver(loginUserSchema),
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onChange",
  });

  const onSubmit = async (data: FieldValues) => {
    setIsLoading(true);

    try {
      const res = await loginUser(data);
      if (res.success) {
        const currUser: IUser = jwtDecode(res.data.accessToken);
        const roleBasedPath =
          currUser.role === "admin" ? "/dashboard/admin" : "/";

        setUser(currUser);
        const redirecUrl = searchParams.get("redirect") || roleBasedPath;

        router.push(redirecUrl);
        toast.success(res.message);
      } else {
        toast.error(res.message);
        if (res.message === "Email is not verified") {
          setEmail(data.email);
          router.push("/verify-email");
        }
      }
    } catch (error) {
      console.log(error);
      toast.error(`Sign in failed`);
    } finally {
      setIsLoading(false);
    }
  };

  //check for clear user from local storage
  useEffect(() => {
    const shouldClearUser = searchParams.get("cleanup") === "true";
    if (shouldClearUser) {
      const redirectedUrl =
        `${process.env.NEXT_PUBLIC_BASE_URL}/login?redirect=${searchParams.get(
          "redirect"
        )}` || "/login";

      router.push(redirectedUrl);
      handleLogout(false);
    }
  }, [searchParams]);

  return (
    <>
      <h1 className="text-lg font-bold uppercase text-black lg:text-2xl">
        Sign In
      </h1>

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

          <div className="relative">
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="relative">
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
                        className="text cursor-pointer absolute right-2 top-1/2 -translate-y-1/2 text-black"
                      >
                        {showPass ? <EyeIcon /> : <EyeClosed />}
                      </div>
                    </div>
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="absolute -top-2 flex w-full justify-end">
              <Link
                href={"/forget-password"}
                className="cursor-pointer text-primary hover:underline"
              >
                Forgot Password?
              </Link>
            </div>
          </div>

          <PrimaryButton
            btnText="Sign In"
            loadingText="Signing In..."
            isLoading={isLoading}
            type="submit"
          />
        </form>
      </Form>

      <p className="w-full text-center font-be-vietnam-pro text-sm font-normal text-black lg:w-[70%]">
        <span>By clicking on sign in, you hereby agree to the </span>
        <Link href={"#"} className="font-bold hover:underline">
          Terms of Use
        </Link>
        <span> of {process.env.NEXT_PUBLIC_APP_NAME}</span>
      </p>

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

export default LoginForm;
