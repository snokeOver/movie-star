import express from "express";

import { validateRequest } from "../../middleWares/validateRequest";

import auth from "../../middleWares/auth";
import { UserRole } from "../../../../generated/prisma";

import { MovieSeriesController } from "./movieSeries.controller";
import { ValidateMovieSeries } from "./movieSeries.validate";

const router = express.Router();

router.delete(
  "/:id",
  auth(UserRole.admin, UserRole.s_admin),
  MovieSeriesController.deleteSingle
);

router.patch(
  "/:id",
  auth(UserRole.admin, UserRole.s_admin),
  validateRequest(ValidateMovieSeries.update),
  MovieSeriesController.updateSingle
);

router.get(
  "/:id",
  auth(UserRole.admin, UserRole.s_admin),
  MovieSeriesController.getSingle
);

router.get(
  "/",
  auth(UserRole.admin, UserRole.s_admin),
  MovieSeriesController.getAll
);

export const movieSeriesRoutes = router;
