import express, { NextFunction, Request, Response } from "express";

import auth from "../../middleWares/auth";
import { UserRole } from "../../../../generated/prisma";
import { PaymentController } from "./payment.controller";
import { validateRequest } from "../../middleWares/validateRequest";
import { ValidatePayment } from "./payment.validate";

const router = express.Router();

router.post(
  "/create-session",
  auth(UserRole.user, UserRole.admin),
  validateRequest(ValidatePayment.createSession),
  PaymentController.createSession
);

router.post("/webhook", PaymentController.handleStripeWebhook);

export const paymentRoutes = router;
