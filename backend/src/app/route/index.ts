import express from "express";

import { adminRoutes } from "../modules/admin/admin.route";
import { authRoutes } from "../modules/auth/auth.routes";

const router = express.Router();

const routes = [
  {
    path: "/auth",
    route: authRoutes,
  },
  {
    path: "/admin",
    route: adminRoutes,
  },
];

routes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
