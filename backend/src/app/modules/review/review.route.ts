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

router.post(
  "/pending/:id",
  auth(UserRole.s_admin, UserRole.admin),
  ReviewController.approveOne
);

router.patch(
  "/pending/:id",
  auth(UserRole.s_admin, UserRole.admin),
  ReviewController.unpublishOne
);
router.delete(
  "/pending/:id",
  auth(UserRole.s_admin, UserRole.admin),
  ReviewController.removeOne
);

export const reviewRoutes = router;
