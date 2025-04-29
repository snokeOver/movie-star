import express from "express";

import { validateRequest } from "../../middleWares/validateRequest";

import auth from "../../middleWares/auth";
import { UserRole } from "../../../../generated/prisma";
import { AdminController } from "./admin.controller";
import { ValidateAdmin } from "./admin.validate";

const router = express.Router();

router.delete(
  "/:id",
  auth(UserRole.admin, UserRole.s_admin),
  AdminController.deleteSingle
);

router.patch(
  "/:id",
  auth(UserRole.admin, UserRole.s_admin),
  validateRequest(ValidateAdmin.update),
  AdminController.updateSingle
);

router.get(
  "/:id",
  auth(UserRole.admin, UserRole.s_admin),
  AdminController.getSingle
);

router.get("/", auth(UserRole.admin, UserRole.s_admin), AdminController.getAll);

export const adminRoutes = router;
