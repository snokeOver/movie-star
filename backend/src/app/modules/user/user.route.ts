import express, { NextFunction, Request, Response } from "express";

import auth from "../../middleWares/auth";
import { UserRole } from "../../../../generated/prisma";
import { validateRequest } from "../../middleWares/validateRequest";
import { ValidateUser } from "./user.validate";
import { UserController } from "./user.controller";

const router = express.Router();

router.post(
  "/review",
  auth(UserRole.user),
  validateRequest(ValidateUser.createReview),
  UserController.createReview
);

router.post(
  "/media-like",
  auth(UserRole.user),
  validateRequest(ValidateUser.createMediaLike),
  UserController.createMediaLike
);

router.post(
  "/review-like",
  auth(UserRole.user),
  validateRequest(ValidateUser.createReviewLike),
  UserController.createReviewLike
);

router.post(
  "/comment",
  auth(UserRole.user),
  validateRequest(ValidateUser.createComment),
  UserController.createComment
);

export const userRoutes = router;
