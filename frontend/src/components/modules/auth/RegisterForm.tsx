"use client";
import { registrationSchema } from "@/schemas";
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
import { EyeClosed, EyeIcon } from "lucide-react";
import PrimaryButton from "@/components/shared/buttons/PrimaryButton";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { registerUser } from "@/services/auth/register";
import { toast } from "sonner";
import { getCurrentUser } from "@/services/auth/getCurrentUser";
import { useUserStore } from "@/stores/auth";

const RegisterForm = () => {
  const { setUser } = useUserStore();
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(registrationSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    mode: "onChange",
  });

  const onSubmit = async (data: FieldValues) => {
    setIsLoading(true);

    const { confirmPassword, ...rest } = data;
    void confirmPassword;
    // Convert data to FormData
    const formData = new FormData();

    formData.append("data", JSON.stringify(rest));

    try {
      const res = await registerUser(formData);

      if (res?.success) {
        toast.success(res?.message);
        setUser(await getCurrentUser());
      } else toast.error(res?.message);
    } catch (error) {
      console.log(error);
      toast.error(`User registration Failed`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <h1 className="text-lg font-bold uppercase text-black lg:text-2xl">
        Register
      </h1>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex w-full flex-col gap-5"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
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
          </div>
          <div className="relative">
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        type={showConfirmPass ? "text" : "password"}
                        placeholder="Enter your password again"
                        {...field}
                      />
                      <div
                        onClick={() => setShowConfirmPass(!showConfirmPass)}
                        className="text cursor-pointer absolute right-2 top-1/2 -translate-y-1/2 text-black"
                      >
                        {showConfirmPass ? <EyeIcon /> : <EyeClosed />}
                      </div>
                    </div>
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <PrimaryButton
            btnText="Register"
            loadingText="Registering..."
            isLoading={isLoading}
            type="submit"
          />
        </form>
      </Form>

      <p className="w-full text-center font-be-vietnam-pro text-sm font-normal text-black lg:w-[70%]">
        <span>By clicking on Register, you hereby agree to the </span>
        <Link href={"#"} className="font-bold hover:underline">
          Terms of Use
        </Link>
        <span> of {process.env.NEXT_PUBLIC_APP_NAME}</span>
      </p>

      <div className="flex items-center justify-center mt-3 gap-2">
        <p className="text-[11px] font-bold uppercase text-black sm:text-xs md:text-sm">
          Already have an account?
        </p>
        <Link
          href="/login"
          className="cursor-pointer text-[11px] font-bold uppercase text-blue-300 hover:underline sm:text-xs md:text-sm"
        >
          Login
        </Link>
      </div>
    </>
  );
};

export default RegisterForm;
