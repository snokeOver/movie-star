import express, { NextFunction, Request, Response } from "express";
import { AuthController } from "./auth.controller";
import auth from "../../middleWares/auth";
import { UserRole } from "../../../../generated/prisma";
import clientInfoParser from "../../middleWares/clientInfoParser";
import { validateRequest } from "../../middleWares/validateRequest";
import { ValidateAuth } from "./auth.validate";
import { fileUploader } from "../../utils/fileUploader";

const router = express.Router();

router.post("/login", clientInfoParser, AuthController.loginUser);
router.post("/get-access-token", AuthController.getAccessToken);

router.post(
  "/change-password",
  auth(UserRole.admin, UserRole.user, UserRole.s_admin),
  AuthController.changePassword
);

router.post("/send-forget-password-otp", AuthController.forgetPassword);

router.post(
  "/verify-forget-password-otp",
  validateRequest(ValidateAuth.verifyOtp),
  AuthController.verifyOTP
);

router.post(
  "/reset-password",
  validateRequest(ValidateAuth.resetPassword),
  AuthController.resetPassword
);

router.post(
  "/send-verification-email",
  auth(UserRole.admin, UserRole.user, UserRole.s_admin),
  AuthController.sendVerificationEmail
);

router.post(
  "/verify-email",
  auth(UserRole.admin, UserRole.user, UserRole.s_admin),
  validateRequest(ValidateAuth.verifyEmail),
  AuthController.verifyEmail
);

router.post(
  "/register",
  fileUploader.multerUpload.single("file"),
  clientInfoParser,
  (req: Request, res: Response, next: NextFunction) => {
    req.body.data = ValidateAuth.register.parse(JSON.parse(req.body.data));

    return AuthController.register(req, res, next);
  }
);

export const authRoutes = router;
