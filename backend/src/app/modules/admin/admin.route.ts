import express from "express";

import auth from "../../middleWares/auth";
import { UserRole } from "../../../../generated/prisma";

import { AdminController } from "./admin.controller";

const router = express.Router();

router.get(
  "/statistics",
  auth(UserRole.admin, UserRole.s_admin),
  AdminController.aggregatedStatistics
);

router.get(
  "/sales",
  auth(UserRole.admin, UserRole.s_admin),

  AdminController.getSalesHistory
);

export const adminRoutes = router;
