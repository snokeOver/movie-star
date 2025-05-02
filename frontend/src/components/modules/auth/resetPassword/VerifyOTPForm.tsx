"use client";

import { useCallback, useEffect, useState } from "react";

import { useRouter } from "next/navigation";

import { InputOTPForm } from "./InputOTPForm";
import { useForgotPassEmailOTP } from "@/stores/forgetPssEmailOTP";
import { toast } from "sonner";

import { postWithFieldValues } from "@/services/core/postWithFieldValues";

export default function VerifyOTPForm() {
  const { email, otp, setOTP } = useForgotPassEmailOTP();
  const [isSuspendedFailedEmail, setIsSuspendedFailedEmail] = useState(false);
  const [isSuspendedFailedOTP, setIsSuspendedFailedOTP] = useState(false);
  const router = useRouter();
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [countDownVal, setCountDownVal] = useState<number>(60);

  const handleOTPSend = useCallback(
    async function (curOTP: string) {
      setIsLoading(true);

      try {
        const payload = {
          email: email,
          otp: curOTP,
        };
        const res = await postWithFieldValues(
          payload,
          "auth/verify-forget-password-otp"
        );

        if (res.success) {
          setError("");
          toast.success(res.message);
          router.push("/reset-password");
        }

        if (!res.success) {
          setError(res.message);
          if (
            res.message ===
            "This account is suspended due to multiple failed attempts. Please try again later."
          ) {
            setIsSuspendedFailedOTP(true);
          }
          setOTP("");
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    },
    [email, router, setOTP]
  );

  useEffect(() => {
    if (!otp) return;

    handleOTPSend(otp);
  }, [handleOTPSend, otp]);

  // Handle Resend opt
  const handleResendOTP = async () => {
    setIsLoading(true);

    try {
      const res = await postWithFieldValues(
        { email: email },
        "auth/send-forget-password-otp"
      );

      if (res.success) {
        toast.success(
          `${res.message}, Check your email for new 6 digits OTP code`
        );

        setCountDownVal(60);
        setError(res.data.attemptLeft);
      } else {
        if (
          res.message ===
          "This account is suspended due to multiple failed attempts. Please try again later."
        ) {
          setIsSuspendedFailedEmail(true);
        }
        setError(res.message);
        setCountDownVal(0);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  // Count down timer
  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (countDownVal > 0) {
      timer = setInterval(() => {
        setCountDownVal((prev) => prev - 1);
      }, 1000);
    }

    // Cleanup to clear the interval when the component unmounts or `countDownVal` reaches 0
    return () => {
      clearInterval(timer);
    };
  }, [countDownVal]);

  // Format countDownVal to always show two digits
  const formattedCountDownVal = String(countDownVal).padStart(2, "0");

  return (
    <>
      <div className="space-y-2 text-center">
        <h1 className="text-lg font-bold uppercase text-black lg:text-3xl">
          Forget Password !
        </h1>
        <p className="text-center text-[11px] font-bold text-gray-800 lg:text-base">
          An email with a 6-digit verification code has been sent to{" "}
          <span className="text-blue-700 font-bold">{email}</span>
        </p>
      </div>

      <div className="flex w-full flex-col gap-2">
        {/* OTP input in react */}

        <div className="flex w-full justify-center">
          <InputOTPForm
            isLoading={isLoading}
            setOTPAction={setOTP}
            isButtonBlocked={isSuspendedFailedOTP}
          />
        </div>

        {error && (
          <p className="text-xs text-destructive md:text-base">{error}</p>
        )}
      </div>
      <div
        className={`flex items-center justify-center gap-2 ${
          isSuspendedFailedOTP ? "hidden" : ""
        }`}
      >
        <p className="text-[10px] font-bold uppercase text-black md:text-sm">
          Send the code again 00:{formattedCountDownVal}
        </p>
        <div
          onClick={() => handleResendOTP()}
          className={`cursor-pointer text-[10px] text-blue-300 font-bold uppercase hover:underline md:text-sm ${
            countDownVal > 0 || isSuspendedFailedEmail ? "hidden" : ""
          }`}
        >
          Resend
        </div>
      </div>
    </>
  );
}
