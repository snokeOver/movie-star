import config from "../../config";
import { sendResponse } from "../../utils/sendResponse";
import { tryCatchAsync } from "../../utils/tryCatchAsync";
import { AuthService } from "./auth.service";
import httpStatus from "http-status";
import { Request, Response } from "express";
import { JwtPayload } from "jsonwebtoken";

//Login user
const loginUser = tryCatchAsync(async (req, res) => {
  const result = await AuthService.loginUser(req.body, req.body.clientInfo);

  const { refreshToken, accessToken } = result;

  res.cookie("refreshToken", refreshToken, {
    secure: config.NODE_ENV === "production",
    httpOnly: true,
    sameSite: "strict",
  });

  sendResponse({
    res,
    sendData: {
      statusCode: httpStatus.OK,
      success: true,
      message: "Logged in successfully",
      data: { accessToken, refreshToken },
    },
  });
});

//Get access token
const getAccessToken = tryCatchAsync(async (req, res) => {
  const result = await AuthService.getAccessToken(
    req.headers.authorization as string
  );

  sendResponse({
    res,
    sendData: {
      statusCode: httpStatus.OK,
      success: true,
      message: "Access token retrieve successfully",
      data: result,
    },
  });
});

//Change password
const changePassword = tryCatchAsync(
  async (req: Request & { user?: JwtPayload }, res: Response) => {
    const result = await AuthService.changePassword(req.user, req.body);

    sendResponse({
      res,
      sendData: {
        statusCode: httpStatus.OK,
        success: true,
        message: "Password changed successfully",
        data: result,
      },
    });
  }
);

//Forger password
const forgetPassword = tryCatchAsync(async (req, res) => {
  const result = await AuthService.forgetPassword(req.body);

  sendResponse({
    res,
    sendData: {
      statusCode: httpStatus.OK,
      success: true,
      message: "OTP send successfully",
      data: result,
    },
  });
});

//verify otp
const verifyOTP = tryCatchAsync(async (req, res) => {
  const result = await AuthService.verifyOTP(req.body);

  sendResponse({
    res,
    sendData: {
      statusCode: httpStatus.OK,
      success: true,
      message: "OTP verified successfully",
      data: result,
    },
  });
});

//Reset password
const resetPassword = tryCatchAsync(async (req, res) => {
  const result = await AuthService.resetPassword(req.body);

  sendResponse({
    res,
    sendData: {
      statusCode: httpStatus.OK,
      success: true,
      message: "Password reset successfully",
      data: result,
    },
  });
});

//send verification email
const sendVerificationEmail = tryCatchAsync(
  async (req: Request & { user?: JwtPayload }, res) => {
    const result = await AuthService.sendVerificationEmail(req.body, req.user);

    sendResponse({
      res,
      sendData: {
        statusCode: httpStatus.OK,
        success: true,
        message: "Email send successfully",
        data: result,
      },
    });
  }
);

//verify email
const verifyEmail = tryCatchAsync(
  async (req: Request & { user?: JwtPayload }, res) => {
    const result = await AuthService.verifyEmail(req.body, req.user);

    sendResponse({
      res,
      sendData: {
        statusCode: httpStatus.OK,
        success: true,
        message: "Email verification successfully",
        data: result,
      },
    });
  }
);

//Register user
const register = tryCatchAsync(async (req, res) => {
  const result = await AuthService.register(
    req.body.data,
    req.body.clientInfo,
    req.file
  );

  sendResponse({
    res,
    sendData: {
      statusCode: httpStatus.OK,
      success: true,
      message: "User registered successfully",
      data: result,
    },
  });
});

export const AuthController = {
  loginUser,
  getAccessToken,
  changePassword,
  forgetPassword,
  verifyOTP,
  resetPassword,
  sendVerificationEmail,
  verifyEmail,
  register,
};
