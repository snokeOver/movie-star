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
exports.AuthController = void 0;
const config_1 = __importDefault(require("../../config"));
const sendResponse_1 = require("../../utils/sendResponse");
const tryCatchAsync_1 = require("../../utils/tryCatchAsync");
const auth_service_1 = require("./auth.service");
const http_status_1 = __importDefault(require("http-status"));
//Login user
const loginUser = (0, tryCatchAsync_1.tryCatchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield auth_service_1.AuthService.loginUser(req.body, req.body.clientInfo);
    const { refreshToken, accessToken } = result;
    res.cookie("refreshToken", refreshToken, {
        secure: config_1.default.NODE_ENV === "production",
        httpOnly: true,
        sameSite: "strict",
    });
    (0, sendResponse_1.sendResponse)({
        res,
        sendData: {
            statusCode: http_status_1.default.OK,
            success: true,
            message: "Logged in successfully",
            data: { accessToken, refreshToken },
        },
    });
}));
//Get access token
const getAccessToken = (0, tryCatchAsync_1.tryCatchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield auth_service_1.AuthService.getAccessToken(req.headers.authorization);
    (0, sendResponse_1.sendResponse)({
        res,
        sendData: {
            statusCode: http_status_1.default.OK,
            success: true,
            message: "Access token retrieve successfully",
            data: result,
        },
    });
}));
//Change password
const changePassword = (0, tryCatchAsync_1.tryCatchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield auth_service_1.AuthService.changePassword(req.user, req.body);
    (0, sendResponse_1.sendResponse)({
        res,
        sendData: {
            statusCode: http_status_1.default.OK,
            success: true,
            message: "Password changed successfully",
            data: result,
        },
    });
}));
//Forger password
const forgetPassword = (0, tryCatchAsync_1.tryCatchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield auth_service_1.AuthService.forgetPassword(req.body);
    (0, sendResponse_1.sendResponse)({
        res,
        sendData: {
            statusCode: http_status_1.default.OK,
            success: true,
            message: "OTP send successfully",
            data: result,
        },
    });
}));
//verify otp
const verifyOTP = (0, tryCatchAsync_1.tryCatchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield auth_service_1.AuthService.verifyOTP(req.body);
    (0, sendResponse_1.sendResponse)({
        res,
        sendData: {
            statusCode: http_status_1.default.OK,
            success: true,
            message: "OTP verified successfully",
            data: result,
        },
    });
}));
//Reset password
const resetPassword = (0, tryCatchAsync_1.tryCatchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield auth_service_1.AuthService.resetPassword(req.body);
    (0, sendResponse_1.sendResponse)({
        res,
        sendData: {
            statusCode: http_status_1.default.OK,
            success: true,
            message: "Password reset successfully",
            data: result,
        },
    });
}));
//send verification email
const sendVerificationEmail = (0, tryCatchAsync_1.tryCatchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield auth_service_1.AuthService.sendVerificationEmail(req.body);
    (0, sendResponse_1.sendResponse)({
        res,
        sendData: {
            statusCode: http_status_1.default.OK,
            success: true,
            message: "OTP send successfully",
            data: result,
        },
    });
}));
//verify email
const verifyEmail = (0, tryCatchAsync_1.tryCatchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield auth_service_1.AuthService.verifyEmail(req.body);
    (0, sendResponse_1.sendResponse)({
        res,
        sendData: {
            statusCode: http_status_1.default.OK,
            success: true,
            message: "Email verified successfully",
            data: result,
        },
    });
}));
//Register user
const register = (0, tryCatchAsync_1.tryCatchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield auth_service_1.AuthService.register(req.body.data, req.body.clientInfo, req.file);
    (0, sendResponse_1.sendResponse)({
        res,
        sendData: {
            statusCode: http_status_1.default.OK,
            success: true,
            message: "User registered successfully",
            data: result,
        },
    });
}));
exports.AuthController = {
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
