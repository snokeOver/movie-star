import express from "express";

import { adminRoutes } from "../modules/admin/admin.route";
import { authRoutes } from "../modules/auth/auth.routes";
import { movieSeriesRoutes } from "../modules/movieSeries/movieSeries.route";
import { paymentRoutes } from "../modules/payment/payment.route";

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
  {
    path: "/media",
    route: movieSeriesRoutes,
  },
  {
    path: "/payment",
    route: paymentRoutes,
  },
];

routes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
