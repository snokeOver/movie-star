import express from "express";

import auth from "../../middleWares/auth";
import { UserRole } from "../../../../generated/prisma";
import { ReviewController } from "./review.controller";

const router = express.Router();

router.get(
  "/pending",
  auth(UserRole.s_admin, UserRole.admin),
  ReviewController.getAllPending
);

router.patch(
  "/pending/:id",
  auth(UserRole.s_admin, UserRole.admin),
  ReviewController.approveOne
);

export const reviewRoutes = router;
