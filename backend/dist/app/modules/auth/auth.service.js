"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const config_1 = __importDefault(require("../../config"));
const appError_1 = __importDefault(require("../../middleWares/errorHandler/appError"));
const prisma_1 = require("../../utils/prisma");
const bcrypt_1 = __importDefault(require("bcrypt"));
const http_status_1 = __importDefault(require("http-status"));
const jsonwebtoken_1 = require("jsonwebtoken");
const prisma_2 = require("../../../../generated/prisma");
const jwtToken_1 = require("../../utils/jwtToken");
const generator_1 = require("../../utils/generator");
const emailSender_1 = require("../../utils/emailSender");
const fileUploader_1 = require("../../utils/fileUploader");
//Login user with email and password
const loginUser = (payload, clientInfo) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    const { os, browser, name, ip, userAgent, location, isActive, isPreferred, isInfected, } = clientInfo.device;
    const foundUser = yield prisma_1.prisma.user.findUnique({
        where: {
            email: payload.email,
            status: { in: [prisma_2.UserStatus.active, prisma_2.UserStatus.deactive] },
        },
        include: {
            securityDetails: true,
        },
    });
    if (!foundUser)
        throw new appError_1.default(http_status_1.default.NOT_FOUND, "User not found");
    if (foundUser.status !== prisma_2.UserStatus.active &&
        !((_a = foundUser.securityDetails) === null || _a === void 0 ? void 0 : _a.isEmailVerified))
        throw new appError_1.default(http_status_1.default.FORBIDDEN, "Email is not verified");
    if (foundUser.status !== prisma_2.UserStatus.active &&
        ((_b = foundUser.securityDetails) === null || _b === void 0 ? void 0 : _b.isEmailVerified))
        throw new appError_1.default(http_status_1.default.FORBIDDEN, "User is deactive");
    if (!(yield bcrypt_1.default.compare(payload.password, foundUser.password))) {
        throw new appError_1.default(http_status_1.default.UNAUTHORIZED, "Invalid credentials!");
    }
    const result = yield prisma_1.prisma.$transaction((tx) => __awaiter(void 0, void 0, void 0, function* () {
        const updatedSecurityDetails = yield tx.securityDetails.update({
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
        const existingDevice = yield tx.device.findFirst({
            where: {
                securityDetailsId: updatedSecurityDetails.id,
                userAgent: clientInfo.device.userAgent,
                // ip: clientInfo.device.ip, // You can use IP if relevant for device identification
            },
        });
        if (existingDevice) {
            // If the device exists, update specific fields (like lastLoginTime or isActive)
            yield tx.device.update({
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
        }
        else {
            yield tx.device.create({
                data: Object.assign({ securityDetailsId: updatedSecurityDetails.id }, clientInfo.device),
            });
        }
        return { updatedSecurityDetails };
    }));
    //create accessToken and refreshToken using logged in user data and send within response
    const jwtPayload = {
        userId: foundUser.id,
        name: foundUser.name,
        email: foundUser.email,
        status: foundUser.status,
        role: foundUser.role,
        profilePhoto: foundUser.profilePhoto || config_1.default.default_profile_url,
    };
    const accessToken = (0, jwtToken_1.createToken)(jwtPayload, config_1.default.jwt.jwt_access_secret, config_1.default.jwt.jwt_access_expires_in);
    const refreshToken = (0, jwtToken_1.createToken)(jwtPayload, config_1.default.jwt.jwt_refresh_secret, config_1.default.jwt.jwt_refresh_expires_in);
    return {
        accessToken,
        refreshToken,
        result,
    };
});
//Get access token
const getAccessToken = (token) => __awaiter(void 0, void 0, void 0, function* () {
    let decodedData = null;
    try {
        decodedData = (0, jwtToken_1.verifyToken)(token, config_1.default.jwt.jwt_refresh_secret);
    }
    catch (err) {
        throw new appError_1.default(http_status_1.default.FORBIDDEN, "Invalid Refresh Token");
    }
    const foundUser = yield prisma_1.prisma.user.findUnique({
        where: {
            email: decodedData.email,
            status: prisma_2.UserStatus.active,
        },
    });
    if (!foundUser)
        throw new appError_1.default(http_status_1.default.NOT_FOUND, "User not found");
    const jwtPayload = {
        userId: foundUser.id,
        name: foundUser.name,
        email: foundUser.email,
        status: foundUser.status,
        role: foundUser.role,
        profilePhoto: foundUser.profilePhoto || config_1.default.default_profile_url,
    };
    const accessToken = (0, jwtToken_1.createToken)(jwtPayload, config_1.default.jwt.jwt_access_secret, config_1.default.jwt.jwt_access_expires_in);
    return {
        accessToken,
    };
});
//Change password
const changePassword = (userData, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const allowedAttempt = Number(config_1.default.allowed.failed_attempts);
    const suspendTIme = Number(config_1.default.allowed.suspend_time_failed_attempt);
    //destructure data
    const { oldPassword, newPassword } = payload;
    if (!userData)
        throw new appError_1.default(http_status_1.default.UNAUTHORIZED, "You are not authorized!");
    const { userId } = userData;
    //check if user exist and password is correct
    const foundUser = yield prisma_1.prisma.user.findUnique({
        where: {
            id: userId,
            status: prisma_2.UserStatus.active,
        },
        include: {
            securityDetails: true,
        },
    });
    if (!foundUser || !foundUser.securityDetails)
        throw new appError_1.default(http_status_1.default.NOT_FOUND, "User not found");
    const { otpToken, suspendUntil, lastAttemptTime, failedResetPassAttemptNo } = foundUser.securityDetails;
    // Check if the user is suspended due to multiple failed attempts for less than 60 minutes
    if (suspendUntil && new Date(suspendUntil) > new Date()) {
        throw new appError_1.default(http_status_1.default.FORBIDDEN, "This account is suspended due to multiple failed attempts. Please try again later.");
    }
    // Increase failed attempt count
    let newNoOfAttempt = failedResetPassAttemptNo
        ? failedResetPassAttemptNo + 1
        : 1;
    // Check if the user is suspended due to multiple failed attempts for more than 60 minutes then reset the attempt count to 1
    if (suspendUntil && new Date(suspendUntil) < new Date()) {
        newNoOfAttempt = 1;
        yield prisma_1.prisma.securityDetails.update({
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
        yield prisma_1.prisma.securityDetails.update({
            where: {
                userId: foundUser.id,
            },
            data: {
                failedResetPassAttemptNo: newNoOfAttempt,
                suspendUntil: new Date(Date.now() + suspendTIme * 60 * 1000), // suspend for 60 minutes
            },
        });
        throw new appError_1.default(http_status_1.default.FORBIDDEN, "You have reached the maximum number of failed attempts. Please try again later.");
    }
    if (!(yield bcrypt_1.default.compare(oldPassword, foundUser.password))) {
        yield prisma_1.prisma.securityDetails.update({
            where: {
                userId: foundUser.id,
            },
            data: {
                failedResetPassAttemptNo: newNoOfAttempt,
            },
        });
        throw new appError_1.default(http_status_1.default.UNAUTHORIZED, `Old password is incorrect!, You have ${allowedAttempt - newNoOfAttempt} attempts left`);
    }
    //hash new password and update
    const hashedNewPassword = yield bcrypt_1.default.hash(newPassword, Number(config_1.default.jwt.bcrypt_salt_rounds));
    const result = yield prisma_1.prisma.$transaction((tx) => __awaiter(void 0, void 0, void 0, function* () {
        const updatedUser = yield tx.user.update({
            where: {
                id: userId,
            },
            data: {
                password: hashedNewPassword,
            },
        });
        const updatedSecurityDetails = yield tx.securityDetails.update({
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
    }));
    return { message: "Password changed successfully" };
});
//Forget password
const forgetPassword = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    const allowedAttempt = Number(config_1.default.allowed.reset_attempts);
    const suspendTIme = Number(config_1.default.allowed.suspend_time_failed_reset_attempt);
    // Check if user exists and password is correct
    const foundUser = yield prisma_1.prisma.user.findUnique({
        where: {
            email: payload.email,
            status: { in: [prisma_2.UserStatus.active, prisma_2.UserStatus.deactive] },
        },
        include: {
            securityDetails: true,
        },
    });
    if (!foundUser || !foundUser.securityDetails) {
        throw new appError_1.default(http_status_1.default.NOT_FOUND, "User not found");
    }
    if (foundUser.status !== prisma_2.UserStatus.active &&
        !((_a = foundUser.securityDetails) === null || _a === void 0 ? void 0 : _a.isEmailVerified))
        throw new appError_1.default(http_status_1.default.FORBIDDEN, "Email is not verified!");
    if (foundUser.status !== prisma_2.UserStatus.active &&
        ((_b = foundUser.securityDetails) === null || _b === void 0 ? void 0 : _b.isEmailVerified))
        throw new appError_1.default(http_status_1.default.FORBIDDEN, "User is deactive");
    const { suspendUntil, lastAttemptTime, failedResetPassAttemptNo } = foundUser.securityDetails;
    // Check if the user is blocked due to multiple failed attempts
    if (suspendUntil && new Date(suspendUntil) > new Date()) {
        throw new appError_1.default(http_status_1.default.FORBIDDEN, "This account is suspended due to multiple failed attempts. Please try again later.");
    }
    // Check if the user can request a new OTP (only after 60 seconds from the last request)
    if (lastAttemptTime &&
        new Date(lastAttemptTime).getTime() > Date.now() - 60000) {
        throw new appError_1.default(http_status_1.default.FORBIDDEN, "You can only request a new OTP after 60 seconds.");
    }
    // Generate OTP and OTP token
    const otp = (0, generator_1.generateOtp)();
    const createdOtpToken = (0, jwtToken_1.createOtpToken)({
        otp,
        email: foundUser.email,
    }, config_1.default.jwt.jwt_otp_secret, config_1.default.jwt.jwt_otp_expire_in);
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
        yield prisma_1.prisma.securityDetails.update({
            where: {
                userId: foundUser.id,
            },
            data: {
                otpToken: createdOtpToken,
                failedResetPassAttemptNo: newNoOfAttempt,
                suspendUntil: new Date(Date.now() + suspendTIme * 60 * 1000), // Block for 30 minutes
            },
        });
        throw new appError_1.default(http_status_1.default.FORBIDDEN, "You have reached the maximum number of OTP attempts. Please try again later.");
    }
    // Now send the OTP email if the attempts are below the limit
    const emailContent = yield emailSender_1.emailSender.createEmailContent({ otpCode: otp, expireTime: 15, userName: foundUser.name }, "forgotPassword");
    yield emailSender_1.emailSender.sendEmail(foundUser.email, emailContent, "Reset Password OTP");
    // Update user with otpToken, attempt count, last OTP request time
    const updatedUser = yield prisma_1.prisma.securityDetails.update({
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
        attemptLeft: `You have ${remainAttemptNumber} ${remainAttemptNumber > 1 ? "attempts" : "attempt"} left`,
    };
});
//verify OTP
const verifyOTP = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const allowedAttempt = Number(config_1.default.allowed.failed_attempts);
    const suspendTIme = Number(config_1.default.allowed.suspend_time_failed_attempt);
    if (!payload)
        throw new appError_1.default(http_status_1.default.UNAUTHORIZED, "You are not authorized!");
    //destructure data
    const { email, otp } = payload;
    //check if user exist and password is correct
    const foundUser = yield prisma_1.prisma.user.findUnique({
        where: {
            email,
            status: prisma_2.UserStatus.active,
        },
        include: {
            securityDetails: true,
        },
    });
    if (!foundUser || !foundUser.securityDetails)
        throw new appError_1.default(http_status_1.default.NOT_FOUND, "User not found");
    const { otpToken, suspendUntil, lastAttemptTime, failedOTPAttemptNo } = foundUser.securityDetails;
    // Check if the user is suspended due to multiple failed attempts for less than 60 minutes
    if (suspendUntil && new Date(suspendUntil) > new Date()) {
        throw new appError_1.default(http_status_1.default.FORBIDDEN, "This account is suspended due to multiple failed attempts. Please try again later.");
    }
    // console.log(foundUser.securityDetails);
    // Increase failed attempt count
    let newNoOfAttempt = failedOTPAttemptNo ? failedOTPAttemptNo + 1 : 1;
    // Check if the user is suspended due to multiple failed attempts for more than 60 minutes then reset the attempt count to 1
    if (suspendUntil && new Date(suspendUntil) < new Date()) {
        newNoOfAttempt = 1;
        yield prisma_1.prisma.securityDetails.update({
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
        yield prisma_1.prisma.securityDetails.update({
            where: {
                userId: foundUser.id,
            },
            data: {
                failedOTPAttemptNo: newNoOfAttempt,
                suspendUntil: new Date(Date.now() + suspendTIme * 60 * 1000), // suspend for 60 minutes
            },
        });
        throw new appError_1.default(http_status_1.default.FORBIDDEN, "You have reached the maximum number of failed attempts. Please try again later.");
    }
    let decodedOtp = null;
    if (otpToken) {
        try {
            const decodedToken = (0, jwtToken_1.verifyToken)(otpToken, config_1.default.jwt.jwt_otp_secret);
            decodedOtp = decodedToken.otp;
        }
        catch (error) {
            if (error instanceof jsonwebtoken_1.TokenExpiredError) {
                // Handle token expiry
                throw new appError_1.default(http_status_1.default.UNAUTHORIZED, "OTP expired! Please try again");
            }
            else {
                // Invalid token error
                throw new appError_1.default(http_status_1.default.UNAUTHORIZED, "Invalid token!");
            }
        }
    }
    if (!decodedOtp || decodedOtp !== otp) {
        yield prisma_1.prisma.securityDetails.update({
            where: {
                userId: foundUser.id,
            },
            data: {
                failedOTPAttemptNo: newNoOfAttempt,
            },
        });
        throw new appError_1.default(http_status_1.default.UNAUTHORIZED, `OTP is incorrect!, You have ${allowedAttempt - newNoOfAttempt} attempts left`);
    }
    const createdResetToken = (0, jwtToken_1.createOtpToken)({
        otp,
        email: foundUser.email,
    }, config_1.default.jwt.jwt_pass_reset_secret, config_1.default.jwt.jwt_pass_reset_expires_in);
    yield prisma_1.prisma.securityDetails.update({
        where: {
            userId: foundUser.id,
        },
        data: {
            otpToken: createdResetToken,
        },
    });
    return { resetToken: createdResetToken };
});
//Reset password
const resetPassword = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    if (!payload)
        throw new appError_1.default(http_status_1.default.UNAUTHORIZED, "You are not authorized!");
    const { email, otp, password } = payload;
    const foundUser = yield prisma_1.prisma.user.findUnique({
        where: {
            email: payload.email,
            status: prisma_2.UserStatus.active,
        },
        include: {
            securityDetails: true,
        },
    });
    if (!foundUser || !foundUser.securityDetails)
        throw new appError_1.default(http_status_1.default.NOT_FOUND, "User not found");
    if (!foundUser.securityDetails.otpToken)
        throw new appError_1.default(http_status_1.default.UNAUTHORIZED, "Session timeout! Please try again");
    const decodedData = {
        email: "",
        otp: "",
    };
    try {
        const decoded = (0, jwtToken_1.verifyToken)(foundUser.securityDetails.otpToken, config_1.default.jwt.jwt_pass_reset_secret);
        decodedData.email = decoded.email;
        decodedData.otp = decoded.otp;
    }
    catch (error) {
        if (error instanceof jsonwebtoken_1.TokenExpiredError) {
            throw new appError_1.default(http_status_1.default.UNAUTHORIZED, "Session timeout! Please try again");
        }
        throw new appError_1.default(http_status_1.default.UNAUTHORIZED, error.message);
    }
    if (decodedData.email !== email && decodedData.otp !== otp) {
        throw new appError_1.default(http_status_1.default.UNAUTHORIZED, "You are not authorized!");
    }
    if (yield bcrypt_1.default.compare(password, foundUser.password)) {
        throw new appError_1.default(http_status_1.default.BAD_REQUEST, `New password can't be the same as Old password!,`);
    }
    const hashedNewPassword = yield bcrypt_1.default.hash(payload.password, Number(config_1.default.jwt.bcrypt_salt_rounds));
    const result = yield prisma_1.prisma.$transaction((tx) => __awaiter(void 0, void 0, void 0, function* () {
        const updatedUser = yield tx.user.update({
            where: {
                email,
            },
            data: {
                password: hashedNewPassword,
            },
        });
        const updatedSecurityDetails = yield tx.securityDetails.update({
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
    }));
    return { message: "Password reset successfully" };
});
//send email verification otp email
const sendVerificationEmail = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const allowedAttempt = Number(config_1.default.allowed.verify_eamil_attempts);
    const suspendTIme = Number(config_1.default.allowed.suspend_time_failed_verify_email_attempt);
    if (!payload || !payload.email)
        throw new appError_1.default(http_status_1.default.UNAUTHORIZED, "You are not authorized!");
    // Check if user exists
    const foundUser = yield prisma_1.prisma.user.findUnique({
        where: {
            email: payload.email,
            status: { in: [prisma_2.UserStatus.active, prisma_2.UserStatus.deactive] },
        },
        include: {
            securityDetails: true,
        },
    });
    if (!foundUser || !foundUser.securityDetails) {
        throw new appError_1.default(http_status_1.default.NOT_FOUND, "User not found");
    }
    if (foundUser.securityDetails.isEmailVerified ||
        foundUser.status === prisma_2.UserStatus.active) {
        throw new appError_1.default(http_status_1.default.BAD_REQUEST, "Email already verified!");
    }
    const { suspendUntil, lastAttemptTime, emailVerifyAttemptNo } = foundUser.securityDetails;
    // Check if the user is blocked due to multiple failed attempts
    if (suspendUntil && new Date(suspendUntil) > new Date()) {
        throw new appError_1.default(http_status_1.default.FORBIDDEN, "This account is suspended due to multiple failed attempts. Please try again later.");
    }
    // Check if the user can request a new URL (only after 60 seconds from the last request)
    if (lastAttemptTime &&
        new Date(lastAttemptTime).getTime() > Date.now() - 60000) {
        throw new appError_1.default(http_status_1.default.FORBIDDEN, "You can only request a new verification link after 60 seconds.");
    }
    // Generate OTP and OTP token
    const otp = (0, generator_1.generateOtp)();
    const createdOtpToken = (0, jwtToken_1.createOtpToken)({
        otp,
        email: foundUser.email,
    }, config_1.default.jwt.jwt_email_verify_secret, config_1.default.jwt.jwt_email_verify_expires_in);
    // Increase attempt count
    let newNoOfAttempt = emailVerifyAttemptNo ? emailVerifyAttemptNo + 1 : 1;
    // Check if the user is blocked due to multiple failed attempts for more than 60 minutes then reset the attempt count to 1
    if (suspendUntil && new Date(suspendUntil) < new Date()) {
        newNoOfAttempt = 1;
    }
    // If the number of attempts exceeds allowedAttempt, block the user for 30 minutes
    if (newNoOfAttempt > allowedAttempt) {
        yield prisma_1.prisma.securityDetails.update({
            where: {
                userId: foundUser.id,
            },
            data: {
                otpToken: createdOtpToken,
                emailVerifyAttemptNo: newNoOfAttempt,
                suspendUntil: new Date(Date.now() + suspendTIme * 60 * 1000), // Block for 30 minutes
            },
        });
        throw new appError_1.default(http_status_1.default.FORBIDDEN, "You have reached the maximum number of verification attempts. Please try again later.");
    }
    // Now send the OTP email if the attempts are below the limit
    const emailContent = yield emailSender_1.emailSender.createEmailContent({ otpCode: otp, expireTime: 15, userName: foundUser.name }, "verifyEmail");
    yield emailSender_1.emailSender.sendEmail(foundUser.email, emailContent, "Vefiry Email");
    // Update user with otpToken, attempt count, last OTP request time
    const updatedUser = yield prisma_1.prisma.securityDetails.update({
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
        attemptLeft: `You have ${remainAttemptNumber} ${remainAttemptNumber > 1 ? "attempts" : "attempt"} left`,
    };
});
//verify email
const verifyEmail = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const allowedAttempt = Number(config_1.default.allowed.failed_attempts);
    const suspendTIme = Number(config_1.default.allowed.suspend_time_failed_attempt);
    if (!payload)
        throw new appError_1.default(http_status_1.default.UNAUTHORIZED, "You are not authorized!");
    //destructure data
    const { email, otp } = payload;
    //check if user exist and password is correct
    const foundUser = yield prisma_1.prisma.user.findUnique({
        where: {
            email,
            status: { in: [prisma_2.UserStatus.deactive, prisma_2.UserStatus.active] },
        },
        include: {
            securityDetails: true,
        },
    });
    if (!foundUser || !foundUser.securityDetails)
        throw new appError_1.default(http_status_1.default.NOT_FOUND, "User not found");
    if (foundUser.securityDetails.isEmailVerified ||
        foundUser.status === prisma_2.UserStatus.active) {
        throw new appError_1.default(http_status_1.default.BAD_REQUEST, "Email already verified!");
    }
    const { otpToken, suspendUntil, failedOTPAttemptNo } = foundUser.securityDetails;
    // Check if the user is suspended due to multiple failed attempts for less than 60 minutes
    if (suspendUntil && new Date(suspendUntil) > new Date()) {
        throw new appError_1.default(http_status_1.default.FORBIDDEN, "This account is suspended due to multiple failed attempts. Please try again later.");
    }
    // Increase failed attempt count
    let newNoOfAttempt = failedOTPAttemptNo ? failedOTPAttemptNo + 1 : 1;
    // Check if the user is suspended due to multiple failed attempts for more than 60 minutes then reset the attempt count to 1
    if (suspendUntil && new Date(suspendUntil) < new Date()) {
        newNoOfAttempt = 1;
        yield prisma_1.prisma.securityDetails.update({
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
        yield prisma_1.prisma.securityDetails.update({
            where: {
                userId: foundUser.id,
            },
            data: {
                failedOTPAttemptNo: newNoOfAttempt,
                suspendUntil: new Date(Date.now() + suspendTIme * 60 * 1000), // suspend for 60 minutes
            },
        });
        throw new appError_1.default(http_status_1.default.FORBIDDEN, "You have reached the maximum number of failed attempts. Please try again later.");
    }
    let decodedOtp = null;
    if (otpToken) {
        try {
            const decodedToken = (0, jwtToken_1.verifyToken)(otpToken, config_1.default.jwt.jwt_email_verify_secret);
            decodedOtp = decodedToken.otp;
        }
        catch (error) {
            if (error instanceof jsonwebtoken_1.TokenExpiredError) {
                // Handle token expiry
                throw new appError_1.default(http_status_1.default.UNAUTHORIZED, "OTP expired! Please try again");
            }
            else {
                // Invalid token error
                throw new appError_1.default(http_status_1.default.UNAUTHORIZED, "Invalid token!");
            }
        }
    }
    if (!decodedOtp || decodedOtp !== otp) {
        yield prisma_1.prisma.securityDetails.update({
            where: {
                userId: foundUser.id,
            },
            data: {
                failedOTPAttemptNo: newNoOfAttempt,
            },
        });
        throw new appError_1.default(http_status_1.default.UNAUTHORIZED, `OTP is incorrect!, You have ${allowedAttempt - newNoOfAttempt} attempts left`);
    }
    // now verify email with update the three tables
    const result = yield prisma_1.prisma.$transaction((prisma) => __awaiter(void 0, void 0, void 0, function* () {
        yield prisma.user.update({
            where: {
                id: foundUser.id,
            },
            data: {
                status: prisma_2.UserStatus.active,
            },
        });
        const updatedSecurityDetails = yield prisma.securityDetails.update({
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
    }));
    return { message: "Email verified successfully" };
});
//Register User
const register = (data, clientInfo, file) => __awaiter(void 0, void 0, void 0, function* () {
    //check if user exist before take any costly action like upload image
    const foundUser = yield prisma_1.prisma.user.findUnique({
        where: {
            email: data.email,
        },
    });
    if (foundUser) {
        if (file)
            yield fileUploader_1.fileUploader.deleteOriginalFile(file.path);
        throw new appError_1.default(http_status_1.default.CONFLICT, "Email already exist");
    }
    //Upload image to cloudinary
    if (file) {
        const uploadedResult = yield fileUploader_1.fileUploader.cloudinaryUpload(file.path, file.filename.split(".")[0]);
        data.profilePhoto = uploadedResult.secure_url;
    }
    //Hashed password and construct user data
    const hashedPassword = yield bcrypt_1.default.hash(data.password, Number(config_1.default.jwt.bcrypt_salt_rounds));
    const userData = {
        email: data.email,
        password: hashedPassword,
        name: data.name,
    };
    const result = yield prisma_1.prisma.$transaction((tx) => __awaiter(void 0, void 0, void 0, function* () {
        const createdUser = yield tx.user.create({
            data: userData,
            select: { id: true, email: true, name: true, role: true },
        });
        const createdSecurityDetails = yield tx.securityDetails.create({
            data: Object.assign({ userId: createdUser.id }, clientInfo.securityDetails),
        });
        const createdDevice = yield tx.device.create({
            data: Object.assign({ securityDetailsId: createdSecurityDetails.id }, clientInfo.device),
        });
        return createdUser;
    }));
    return result;
});
exports.AuthService = {
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
