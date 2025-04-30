import config from "../../config";
import AppError from "../../middleWares/errorHandler/appError";
import { prisma } from "../../utils/prisma";
import { ILoginCred, IResetPassPayload, IUser } from "./auth.interface";
import bcrypt from "bcrypt";
import httpStatus from "http-status";

import { JwtPayload, Secret, TokenExpiredError } from "jsonwebtoken";
import { User, UserRole, UserStatus } from "../../../../generated/prisma";
import { IClientInfo, IFile, IJwtPayload } from "../../types";
import { createOtpToken, createToken, verifyToken } from "../../utils/jwtToken";
import { generateLink, generateOtp } from "../../utils/generator";
import { emailSender } from "../../utils/emailSender";
import { fileUploader } from "../../utils/fileUploader";

//Login user with email and password
const loginUser = async (payload: ILoginCred, clientInfo: IClientInfo) => {
  const {
    os,
    browser,
    name,
    ip,
    userAgent,
    location,
    isActive,
    isPreferred,
    isInfected,
  } = clientInfo.device;
  const foundUser = await prisma.user.findUnique({
    where: {
      email: payload.email,
      status: { in: [UserStatus.active, UserStatus.deactive] },
    },
    include: {
      securityDetails: true,
    },
  });

  if (!foundUser) throw new AppError(httpStatus.NOT_FOUND, "User not found");

  if (
    foundUser.status !== UserStatus.active &&
    !foundUser.securityDetails?.isEmailVerified
  )
    throw new AppError(httpStatus.FORBIDDEN, "Email is not verified");

  if (
    foundUser.status !== UserStatus.active &&
    foundUser.securityDetails?.isEmailVerified
  )
    throw new AppError(httpStatus.FORBIDDEN, "User is deactive");

  if (!(await bcrypt.compare(payload.password, foundUser.password))) {
    throw new AppError(httpStatus.UNAUTHORIZED, "Invalid credentials!");
  }

  const result = await prisma.$transaction(async (tx) => {
    const updatedSecurityDetails = await tx.securityDetails.update({
      where: {
        userId: foundUser.id,
      },
      data: {
        lastLoginTime: new Date(),
        failedLoginAttemptNo: 0,
        otpToken: null,
        suspendUntil: null,
        failedOTPAttemptNo: 0,
      },
    });

    // Check if the user has already logged in from the same device
    const existingDevice = await tx.device.findFirst({
      where: {
        securityDetailsId: updatedSecurityDetails.id,
        userAgent: clientInfo.device.userAgent,
        // ip: clientInfo.device.ip, // You can use IP if relevant for device identification
      },
    });

    if (existingDevice) {
      // If the device exists, update specific fields (like lastLoginTime or isActive)
      await tx.device.update({
        where: {
          id: existingDevice.id,
        },
        data: {
          browser,
          name,
          os,
          ip,
          location,
          isActive,
          isPreferred, // or based on your logic
          isInfected,
        },
      });
    } else {
      await tx.device.create({
        data: {
          securityDetailsId: updatedSecurityDetails.id, // Link the device to the security details
          ...clientInfo.device, // Spread the device data from the request
        },
      });
    }

    return { updatedSecurityDetails };
  });

  const jwtPayload: IJwtPayload = {
    userId: foundUser.id as string,
    name: foundUser.name as string,
    email: foundUser.email as string,
    status: foundUser.status,
    role: foundUser.role,
    profilePhoto: foundUser.profilePhoto || config.default_profile_url,
  };

  const accessToken = createToken(
    jwtPayload,
    config.jwt.jwt_access_secret as string,
    config.jwt.jwt_access_expires_in as string
  );

  const refreshToken = createToken(
    jwtPayload,
    config.jwt.jwt_refresh_secret as string,
    config.jwt.jwt_refresh_expires_in as string
  );

  return {
    accessToken,
    refreshToken,
    result,
  };
};

//Get access token
const getAccessToken = async (token: string) => {
  let decodedData: JwtPayload | null = null;
  try {
    decodedData = verifyToken(token, config.jwt.jwt_refresh_secret as Secret);
  } catch (err) {
    throw new AppError(httpStatus.FORBIDDEN, "Invalid Refresh Token");
  }

  const foundUser = await prisma.user.findUnique({
    where: {
      email: decodedData.email,
      status: UserStatus.active,
    },
  });

  if (!foundUser) throw new AppError(httpStatus.NOT_FOUND, "User not found");

  const jwtPayload: IJwtPayload = {
    userId: foundUser.id as string,
    name: foundUser.name as string,
    email: foundUser.email as string,
    status: foundUser.status,
    role: foundUser.role,
    profilePhoto: foundUser.profilePhoto || config.default_profile_url,
  };

  const accessToken = createToken(
    jwtPayload,
    config.jwt.jwt_access_secret as string,
    config.jwt.jwt_access_expires_in as string
  );

  return {
    accessToken,
  };
};

//Change password
const changePassword = async (
  userData: JwtPayload | undefined,
  payload: { oldPassword: string; newPassword: string }
) => {
  const allowedAttempt = Number(config.allowed.failed_attempts);
  const suspendTIme = Number(config.allowed.suspend_time_failed_attempt);

  //destructure data
  const { oldPassword, newPassword } = payload;

  if (!userData)
    throw new AppError(httpStatus.UNAUTHORIZED, "You are not authorized!");

  const { userId } = userData;

  //check if user exist and password is correct
  const foundUser = await prisma.user.findUnique({
    where: {
      id: userId,
      status: UserStatus.active,
    },
    include: {
      securityDetails: true,
    },
  });

  if (!foundUser || !foundUser.securityDetails)
    throw new AppError(httpStatus.NOT_FOUND, "User not found");

  const { otpToken, suspendUntil, lastAttemptTime, failedResetPassAttemptNo } =
    foundUser.securityDetails;

  // Check if the user is suspended due to multiple failed attempts for less than 60 minutes
  if (suspendUntil && new Date(suspendUntil) > new Date()) {
    throw new AppError(
      httpStatus.FORBIDDEN,
      "This account is suspended due to multiple failed attempts. Please try again later."
    );
  }

  // Increase failed attempt count
  let newNoOfAttempt = failedResetPassAttemptNo
    ? failedResetPassAttemptNo + 1
    : 1;

  // Check if the user is suspended due to multiple failed attempts for more than 60 minutes then reset the attempt count to 1
  if (suspendUntil && new Date(suspendUntil) < new Date()) {
    newNoOfAttempt = 1;
    await prisma.securityDetails.update({
      where: {
        userId: foundUser.id,
      },
      data: {
        failedResetPassAttemptNo: newNoOfAttempt,
        suspendUntil: null,
      },
    });
  }

  // If the number of failed attempts exceeds 5, suspend account for 30 minutes
  if (newNoOfAttempt >= allowedAttempt) {
    await prisma.securityDetails.update({
      where: {
        userId: foundUser.id,
      },
      data: {
        failedResetPassAttemptNo: newNoOfAttempt,
        suspendUntil: new Date(Date.now() + suspendTIme * 60 * 1000), // suspend for 60 minutes
      },
    });
    throw new AppError(
      httpStatus.FORBIDDEN,
      "You have reached the maximum number of failed attempts. Please try again later."
    );
  }

  if (!(await bcrypt.compare(oldPassword, foundUser.password))) {
    await prisma.securityDetails.update({
      where: {
        userId: foundUser.id,
      },
      data: {
        failedResetPassAttemptNo: newNoOfAttempt,
      },
    });
    throw new AppError(
      httpStatus.UNAUTHORIZED,
      `Old password is incorrect!, You have ${
        allowedAttempt - newNoOfAttempt
      } attempts left`
    );
  }

  //hash new password and update
  const hashedNewPassword: string = await bcrypt.hash(
    newPassword,
    Number(config.jwt.bcrypt_salt_rounds)
  );

  const result = await prisma.$transaction(async (tx) => {
    const updatedUser = await tx.user.update({
      where: {
        id: userId,
      },
      data: {
        password: hashedNewPassword,
      },
    });

    const updatedSecurityDetails = await tx.securityDetails.update({
      where: {
        userId: userId,
      },
      data: {
        otpToken: null,
        suspendUntil: null,
        lastAttemptTime: new Date(),
        failedResetPassAttemptNo: 0,
      },
    });

    return { updatedUser, updatedSecurityDetails };
  });

  return { message: "Password changed successfully" };
};

//Forget password
const forgetPassword = async (payload: { email: string }) => {
  const allowedAttempt = Number(config.allowed.reset_attempts);
  const suspendTIme = Number(config.allowed.suspend_time_failed_reset_attempt);

  // Check if user exists and password is correct
  const foundUser = await prisma.user.findUnique({
    where: {
      email: payload.email,
      status: { in: [UserStatus.active, UserStatus.deactive] },
    },
    include: {
      securityDetails: true,
    },
  });

  if (!foundUser || !foundUser.securityDetails) {
    throw new AppError(httpStatus.NOT_FOUND, "User not found");
  }

  if (
    foundUser.status !== UserStatus.active &&
    !foundUser.securityDetails?.isEmailVerified
  )
    throw new AppError(httpStatus.FORBIDDEN, "Email is not verified!");

  if (
    foundUser.status !== UserStatus.active &&
    foundUser.securityDetails?.isEmailVerified
  )
    throw new AppError(httpStatus.FORBIDDEN, "User is deactive");

  const { suspendUntil, lastAttemptTime, failedResetPassAttemptNo } =
    foundUser.securityDetails;

  // Check if the user is blocked due to multiple failed attempts
  if (suspendUntil && new Date(suspendUntil) > new Date()) {
    throw new AppError(
      httpStatus.FORBIDDEN,
      "This account is suspended due to multiple failed attempts. Please try again later."
    );
  }

  // Check if the user can request a new OTP (only after 60 seconds from the last request)
  if (
    lastAttemptTime &&
    new Date(lastAttemptTime).getTime() > Date.now() - 60000
  ) {
    throw new AppError(
      httpStatus.FORBIDDEN,
      "You can only request a new OTP after 60 seconds."
    );
  }

  // Generate OTP and OTP token
  const otp = generateOtp();

  const createdOtpToken = createOtpToken(
    {
      otp,
      email: foundUser.email as string,
    },

    config.jwt.jwt_otp_secret as Secret,
    config.jwt.jwt_otp_expire_in as string
  );

  // Increase attempt count
  let newNoOfAttempt = failedResetPassAttemptNo
    ? failedResetPassAttemptNo + 1
    : 1;

  // Check if the user is blocked due to multiple failed attempts for more than 60 minutes then reset the attempt count to 1
  if (suspendUntil && new Date(suspendUntil) < new Date()) {
    newNoOfAttempt = 1;
  }

  // If the number of attempts exceeds allowedAttempt, block the user for 30 minutes
  if (newNoOfAttempt >= allowedAttempt) {
    await prisma.securityDetails.update({
      where: {
        userId: foundUser.id,
      },
      data: {
        otpToken: createdOtpToken,
        failedResetPassAttemptNo: newNoOfAttempt,
        suspendUntil: new Date(Date.now() + suspendTIme * 60 * 1000), // Block for 30 minutes
      },
    });
    throw new AppError(
      httpStatus.FORBIDDEN,
      "You have reached the maximum number of OTP attempts. Please try again later."
    );
  }

  // Now send the OTP email if the attempts are below the limit
  const emailContent = await emailSender.createEmailContent(
    { otpCode: otp, expireTime: 15, userName: foundUser.name },
    "forgotPassword"
  );

  await emailSender.sendEmail(
    foundUser.email,
    emailContent,
    "Reset Password OTP"
  );

  // Update user with otpToken, attempt count, last OTP request time
  const updatedUser = await prisma.securityDetails.update({
    where: {
      userId: foundUser.id,
    },
    data: {
      otpToken: createdOtpToken,
      failedResetPassAttemptNo: newNoOfAttempt,
      lastAttemptTime: new Date(), // Set the time when OTP was requested
      suspendUntil: null,
    },
  });

  const remainAttemptNumber = allowedAttempt - newNoOfAttempt;
  return {
    message: `OTP has been sent to ${foundUser.email}`,
    attemptLeft: `You have ${remainAttemptNumber} ${
      remainAttemptNumber > 1 ? "attempts" : "attempt"
    } left`,
  };
};

//verify OTP
const verifyOTP = async (payload: { email: string; otp: string }) => {
  const allowedAttempt = Number(config.allowed.failed_attempts);
  const suspendTIme = Number(config.allowed.suspend_time_failed_attempt);

  if (!payload)
    throw new AppError(httpStatus.UNAUTHORIZED, "You are not authorized!");

  //destructure data
  const { email, otp } = payload;

  //check if user exist and password is correct
  const foundUser = await prisma.user.findUnique({
    where: {
      email,
      status: UserStatus.active,
    },
    include: {
      securityDetails: true,
    },
  });

  if (!foundUser || !foundUser.securityDetails)
    throw new AppError(httpStatus.NOT_FOUND, "User not found");

  const { otpToken, suspendUntil, lastAttemptTime, failedOTPAttemptNo } =
    foundUser.securityDetails;

  // Check if the user is suspended due to multiple failed attempts for less than 60 minutes
  if (suspendUntil && new Date(suspendUntil) > new Date()) {
    throw new AppError(
      httpStatus.FORBIDDEN,
      "This account is suspended due to multiple failed attempts. Please try again later."
    );
  }

  // console.log(foundUser.securityDetails);

  // Increase failed attempt count
  let newNoOfAttempt = failedOTPAttemptNo ? failedOTPAttemptNo + 1 : 1;

  // Check if the user is suspended due to multiple failed attempts for more than 60 minutes then reset the attempt count to 1
  if (suspendUntil && new Date(suspendUntil) < new Date()) {
    newNoOfAttempt = 1;
    await prisma.securityDetails.update({
      where: {
        userId: foundUser.id,
      },
      data: {
        failedOTPAttemptNo: newNoOfAttempt,
        suspendUntil: null,
      },
    });
  }

  // If the number of failed attempts exceeds 5, suspend account for 30 minutes
  if (newNoOfAttempt >= allowedAttempt) {
    await prisma.securityDetails.update({
      where: {
        userId: foundUser.id,
      },
      data: {
        failedOTPAttemptNo: newNoOfAttempt,
        suspendUntil: new Date(Date.now() + suspendTIme * 60 * 1000), // suspend for 60 minutes
      },
    });
    throw new AppError(
      httpStatus.FORBIDDEN,
      "You have reached the maximum number of failed attempts. Please try again later."
    );
  }

  let decodedOtp = null;

  if (otpToken) {
    try {
      const decodedToken = verifyToken(
        otpToken,
        config.jwt.jwt_otp_secret as Secret
      );
      decodedOtp = decodedToken.otp;
    } catch (error) {
      if (error instanceof TokenExpiredError) {
        // Handle token expiry
        throw new AppError(
          httpStatus.UNAUTHORIZED,
          "OTP expired! Please try again"
        );
      } else {
        // Invalid token error
        throw new AppError(httpStatus.UNAUTHORIZED, "Invalid token!");
      }
    }
  }

  if (!decodedOtp || decodedOtp !== otp) {
    await prisma.securityDetails.update({
      where: {
        userId: foundUser.id,
      },
      data: {
        failedOTPAttemptNo: newNoOfAttempt,
      },
    });
    throw new AppError(
      httpStatus.UNAUTHORIZED,
      `OTP is incorrect!, You have ${
        allowedAttempt - newNoOfAttempt
      } attempts left`
    );
  }

  const createdResetToken = createOtpToken(
    {
      otp,
      email: foundUser.email as string,
    },

    config.jwt.jwt_pass_reset_secret as Secret,
    config.jwt.jwt_pass_reset_expires_in as string
  );

  await prisma.securityDetails.update({
    where: {
      userId: foundUser.id,
    },
    data: {
      otpToken: createdResetToken,
    },
  });

  return { resetToken: createdResetToken };
};

//Reset password
const resetPassword = async (payload: IResetPassPayload) => {
  if (!payload)
    throw new AppError(httpStatus.UNAUTHORIZED, "You are not authorized!");

  const { email, otp, password } = payload;

  const foundUser = await prisma.user.findUnique({
    where: {
      email: payload.email,
      status: UserStatus.active,
    },
    include: {
      securityDetails: true,
    },
  });

  if (!foundUser || !foundUser.securityDetails)
    throw new AppError(httpStatus.NOT_FOUND, "User not found");

  if (!foundUser.securityDetails.otpToken)
    throw new AppError(
      httpStatus.UNAUTHORIZED,
      "Session timeout! Please try again"
    );

  const decodedData = {
    email: "",
    otp: "",
  };

  try {
    const decoded = verifyToken(
      foundUser.securityDetails.otpToken as string,
      config.jwt.jwt_pass_reset_secret as string
    );

    decodedData.email = decoded.email;
    decodedData.otp = decoded.otp;
  } catch (error: any) {
    if (error instanceof TokenExpiredError) {
      throw new AppError(
        httpStatus.UNAUTHORIZED,
        "Session timeout! Please try again"
      );
    }
    throw new AppError(httpStatus.UNAUTHORIZED, error.message);
  }

  if (decodedData.email !== email && decodedData.otp !== otp) {
    throw new AppError(httpStatus.UNAUTHORIZED, "You are not authorized!");
  }

  if (await bcrypt.compare(password, foundUser.password)) {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      `New password can't be the same as Old password!,`
    );
  }

  const hashedNewPassword: string = await bcrypt.hash(
    payload.password,
    Number(config.jwt.bcrypt_salt_rounds)
  );

  const result = await prisma.$transaction(async (tx) => {
    const updatedUser = await tx.user.update({
      where: {
        email,
      },
      data: {
        password: hashedNewPassword,
      },
    });

    const updatedSecurityDetails = await tx.securityDetails.update({
      where: {
        userId: updatedUser.id,
      },
      data: {
        failedLoginAttemptNo: 0,
        failedResetPassAttemptNo: 0,
        failedOTPAttemptNo: 0,
        suspendUntil: null,
        otpToken: null,
      },
    });

    return { updatedUser, updatedSecurityDetails };
  });

  return { message: "Password reset successfully" };
};

//send email verification otp email
const sendVerificationEmail = async (payload: { email: string }) => {
  const allowedAttempt = Number(config.allowed.verify_eamil_attempts);
  const suspendTIme = Number(
    config.allowed.suspend_time_failed_verify_email_attempt
  );

  if (!payload || !payload.email)
    throw new AppError(httpStatus.UNAUTHORIZED, "You are not authorized!");

  // Check if user exists
  const foundUser = await prisma.user.findUnique({
    where: {
      email: payload.email,
      status: { in: [UserStatus.active, UserStatus.deactive] },
    },
    include: {
      securityDetails: true,
    },
  });

  if (!foundUser || !foundUser.securityDetails) {
    throw new AppError(httpStatus.NOT_FOUND, "User not found");
  }

  if (
    foundUser.securityDetails.isEmailVerified ||
    foundUser.status === UserStatus.active
  ) {
    throw new AppError(httpStatus.BAD_REQUEST, "Email already verified!");
  }

  const { suspendUntil, lastAttemptTime, emailVerifyAttemptNo } =
    foundUser.securityDetails;

  // Check if the user is blocked due to multiple failed attempts
  if (suspendUntil && new Date(suspendUntil) > new Date()) {
    throw new AppError(
      httpStatus.FORBIDDEN,
      "This account is suspended due to multiple failed attempts. Please try again later."
    );
  }

  // Check if the user can request a new URL (only after 60 seconds from the last request)
  if (
    lastAttemptTime &&
    new Date(lastAttemptTime).getTime() > Date.now() - 60000
  ) {
    throw new AppError(
      httpStatus.FORBIDDEN,
      "You can only request a new verification link after 60 seconds."
    );
  }

  // Generate OTP and OTP token
  const otp = generateOtp();

  const createdOtpToken = createOtpToken(
    {
      otp,
      email: foundUser.email as string,
    },

    config.jwt.jwt_email_verify_secret as Secret,
    config.jwt.jwt_email_verify_expires_in as string
  );

  // Increase attempt count
  let newNoOfAttempt = emailVerifyAttemptNo ? emailVerifyAttemptNo + 1 : 1;

  // Check if the user is blocked due to multiple failed attempts for more than 60 minutes then reset the attempt count to 1
  if (suspendUntil && new Date(suspendUntil) < new Date()) {
    newNoOfAttempt = 1;
  }

  // If the number of attempts exceeds allowedAttempt, block the user for 30 minutes
  if (newNoOfAttempt > allowedAttempt) {
    await prisma.securityDetails.update({
      where: {
        userId: foundUser.id,
      },
      data: {
        otpToken: createdOtpToken,
        emailVerifyAttemptNo: newNoOfAttempt,
        suspendUntil: new Date(Date.now() + suspendTIme * 60 * 1000), // Block for 30 minutes
      },
    });
    throw new AppError(
      httpStatus.FORBIDDEN,
      "You have reached the maximum number of verification attempts. Please try again later."
    );
  }

  // Now send the OTP email if the attempts are below the limit
  const emailContent = await emailSender.createEmailContent(
    { otpCode: otp, expireTime: 15, userName: foundUser.name },
    "verifyEmail"
  );

  await emailSender.sendEmail(foundUser.email, emailContent, "Vefiry Email");

  // Update user with otpToken, attempt count, last OTP request time
  const updatedUser = await prisma.securityDetails.update({
    where: {
      userId: foundUser.id,
    },
    data: {
      otpToken: createdOtpToken,
      emailVerifyAttemptNo: newNoOfAttempt,
      lastAttemptTime: new Date(), // Set the time when OTP was requested
      suspendUntil: null,
    },
  });

  const remainAttemptNumber = allowedAttempt - newNoOfAttempt;
  return {
    message: `Verification link has been sent to ${foundUser.email}`,
    attemptLeft: `You have ${remainAttemptNumber} ${
      remainAttemptNumber > 1 ? "attempts" : "attempt"
    } left`,
  };
};

//verify email
const verifyEmail = async (payload: { email: string; otp: string }) => {
  const allowedAttempt = Number(config.allowed.failed_attempts);
  const suspendTIme = Number(config.allowed.suspend_time_failed_attempt);

  if (!payload)
    throw new AppError(httpStatus.UNAUTHORIZED, "You are not authorized!");

  //destructure data
  const { email, otp } = payload;

  //check if user exist and password is correct
  const foundUser = await prisma.user.findUnique({
    where: {
      email,
      status: { in: [UserStatus.deactive, UserStatus.active] },
    },
    include: {
      securityDetails: true,
    },
  });

  if (!foundUser || !foundUser.securityDetails)
    throw new AppError(httpStatus.NOT_FOUND, "User not found");

  if (
    foundUser.securityDetails.isEmailVerified ||
    foundUser.status === UserStatus.active
  ) {
    throw new AppError(httpStatus.BAD_REQUEST, "Email already verified!");
  }

  const { otpToken, suspendUntil, failedOTPAttemptNo } =
    foundUser.securityDetails;

  // Check if the user is suspended due to multiple failed attempts for less than 60 minutes
  if (suspendUntil && new Date(suspendUntil) > new Date()) {
    throw new AppError(
      httpStatus.FORBIDDEN,
      "This account is suspended due to multiple failed attempts. Please try again later."
    );
  }

  // Increase failed attempt count
  let newNoOfAttempt = failedOTPAttemptNo ? failedOTPAttemptNo + 1 : 1;

  // Check if the user is suspended due to multiple failed attempts for more than 60 minutes then reset the attempt count to 1
  if (suspendUntil && new Date(suspendUntil) < new Date()) {
    newNoOfAttempt = 1;
    await prisma.securityDetails.update({
      where: {
        userId: foundUser.id,
      },
      data: {
        failedOTPAttemptNo: newNoOfAttempt,
        suspendUntil: null,
      },
    });
  }

  // If the number of failed attempts exceeds 5, suspend account for 30 minutes
  if (newNoOfAttempt >= allowedAttempt) {
    await prisma.securityDetails.update({
      where: {
        userId: foundUser.id,
      },
      data: {
        failedOTPAttemptNo: newNoOfAttempt,
        suspendUntil: new Date(Date.now() + suspendTIme * 60 * 1000), // suspend for 60 minutes
      },
    });
    throw new AppError(
      httpStatus.FORBIDDEN,
      "You have reached the maximum number of failed attempts. Please try again later."
    );
  }

  let decodedOtp = null;

  if (otpToken) {
    try {
      const decodedToken = verifyToken(
        otpToken,
        config.jwt.jwt_email_verify_secret as Secret
      );
      decodedOtp = decodedToken.otp;
    } catch (error) {
      if (error instanceof TokenExpiredError) {
        // Handle token expiry
        throw new AppError(
          httpStatus.UNAUTHORIZED,
          "OTP expired! Please try again"
        );
      } else {
        // Invalid token error
        throw new AppError(httpStatus.UNAUTHORIZED, "Invalid token!");
      }
    }
  }

  if (!decodedOtp || decodedOtp !== otp) {
    await prisma.securityDetails.update({
      where: {
        userId: foundUser.id,
      },
      data: {
        failedOTPAttemptNo: newNoOfAttempt,
      },
    });
    throw new AppError(
      httpStatus.UNAUTHORIZED,
      `OTP is incorrect!, You have ${
        allowedAttempt - newNoOfAttempt
      } attempts left`
    );
  }

  // now verify email with update the three tables

  const result = await prisma.$transaction(async (prisma) => {
    await prisma.user.update({
      where: {
        id: foundUser.id,
      },
      data: {
        status: UserStatus.active,
      },
    });
    const updatedSecurityDetails = await prisma.securityDetails.update({
      where: {
        userId: foundUser.id,
      },
      data: {
        isEmailVerified: true,
        emailVerifyAttemptNo: 0,
        failedResetPassAttemptNo: 0,
        suspendUntil: null,
        failedLoginAttemptNo: 0,
        failedOTPAttemptNo: 0,
        otpToken: null,
      },
    });
    return updatedSecurityDetails;
  });

  return { message: "Email verified successfully" };
};

//Register User
const register = async (
  data: IUser,
  clientInfo: IClientInfo,
  file: IFile | undefined
): Promise<Partial<User>> => {
  //check if user exist before take any costly action like upload image
  const foundUser = await prisma.user.findUnique({
    where: {
      email: data.email,
    },
  });

  if (foundUser) {
    if (file) await fileUploader.deleteOriginalFile(file.path);
    throw new AppError(httpStatus.CONFLICT, "Email already exist");
  }

  //Upload image to cloudinary
  if (file) {
    const uploadedResult = await fileUploader.cloudinaryUpload(
      file.path,
      file.filename.split(".")[0]
    );
    data.profilePhoto = uploadedResult.secure_url;
  }

  //Hashed password and construct user data
  const hashedPassword: string = await bcrypt.hash(
    data.password,
    Number(config.jwt.bcrypt_salt_rounds)
  );

  const userData = {
    email: data.email,
    password: hashedPassword,
    name: data.name,
  };

  const result = await prisma.$transaction(async (tx) => {
    const createdUser = await tx.user.create({
      data: userData,
      select: { id: true, email: true, name: true, role: true },
    });

    const createdSecurityDetails = await tx.securityDetails.create({
      data: {
        userId: createdUser.id,
        ...clientInfo.securityDetails,
      },
    });

    const createdDevice = await tx.device.create({
      data: {
        securityDetailsId: createdSecurityDetails.id, // Link device to security details
        ...clientInfo.device, // Spread the device data
      },
    });

    return createdUser;
  });

  return result;
};

export const AuthService = {
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
