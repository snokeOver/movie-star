import express from "express";

import { adminRoutes } from "../modules/admin/admin.route";

const router = express.Router();

const routes = [
  {
    path: "/admin",
    route: adminRoutes,
  },
];

routes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
