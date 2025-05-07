import express from "express";

import { authRoutes } from "../modules/auth/auth.routes";
import { movieSeriesRoutes } from "../modules/movieSeries/movieSeries.route";
import { paymentRoutes } from "../modules/payment/payment.route";
import { userRoutes } from "../modules/user/user.route";
import { reviewRoutes } from "../modules/review/review.route";

const router = express.Router();

const routes = [
  {
    path: "/auth",
    route: authRoutes,
  },
  {
    path: "/user",
    route: userRoutes,
  },
  {
    path: "/media",
    route: movieSeriesRoutes,
  },
  {
    path: "/payment",
    route: paymentRoutes,
  },
  {
    path: "/review",
    route: reviewRoutes,
  },
];

routes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
