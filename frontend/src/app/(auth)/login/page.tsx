import LoginForm from "@/components/modules/auth/LoginForm";
import { IPageWithParams } from "@/types";
import React from "react";

const LoginPage = async ({ searchParams }: IPageWithParams) => {
  const { redirect, cleanup } = await searchParams;

  return (
    <LoginForm redirect={redirect as string} cleanup={cleanup as string} />
  );
};

export default LoginPage;
