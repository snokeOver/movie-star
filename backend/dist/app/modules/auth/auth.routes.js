"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRoutes = void 0;
const express_1 = __importDefault(require("express"));
const auth_controller_1 = require("./auth.controller");
const auth_1 = __importDefault(require("../../middleWares/auth"));
const prisma_1 = require("../../../../generated/prisma");
const clientInfoParser_1 = __importDefault(require("../../middleWares/clientInfoParser"));
const validateRequest_1 = require("../../middleWares/validateRequest");
const auth_validate_1 = require("./auth.validate");
const fileUploader_1 = require("../../utils/fileUploader");
const router = express_1.default.Router();
router.post("/login", clientInfoParser_1.default, auth_controller_1.AuthController.loginUser);
router.post("/get-access-token", auth_controller_1.AuthController.getAccessToken);
router.post("/change-password", (0, auth_1.default)(prisma_1.UserRole.admin, prisma_1.UserRole.user, prisma_1.UserRole.s_admin), auth_controller_1.AuthController.changePassword);
router.post("/send-forget-password-otp", auth_controller_1.AuthController.forgetPassword);
router.post("/verify-forget-password-otp", (0, validateRequest_1.validateRequest)(auth_validate_1.ValidateAuth.verifyOtp), auth_controller_1.AuthController.verifyOTP);
router.post("/reset-password", (0, validateRequest_1.validateRequest)(auth_validate_1.ValidateAuth.resetPassword), auth_controller_1.AuthController.resetPassword);
router.post("/send-verification-email", auth_controller_1.AuthController.sendVerificationEmail);
router.post("/verify-email", (0, validateRequest_1.validateRequest)(auth_validate_1.ValidateAuth.verifyEmail), auth_controller_1.AuthController.verifyEmail);
router.post("/register", fileUploader_1.fileUploader.multerUpload.single("file"), clientInfoParser_1.default, (req, res, next) => {
    req.body.data = auth_validate_1.ValidateAuth.register.parse(JSON.parse(req.body.data));
    return auth_controller_1.AuthController.register(req, res, next);
});
exports.authRoutes = router;
