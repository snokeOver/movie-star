import express, { NextFunction, Request, Response } from "express";

import auth from "../../middleWares/auth";
import { UserRole } from "../../../../generated/prisma";

import { MovieSeriesController } from "./movieSeries.controller";
import { ValidateMovieSeries } from "./movieSeries.validate";
import { fileUploader } from "../../utils/fileUploader";

const router = express.Router();

router.delete(
  "/:id",
  auth(UserRole.admin, UserRole.s_admin),
  MovieSeriesController.deleteSingle
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

router.post(
  "/",
  auth(UserRole.admin, UserRole.s_admin),
  fileUploader.multerUpload.single("file"),

  (req: Request, res: Response, next: NextFunction) => {
    req.body.data = ValidateMovieSeries.create.parse(JSON.parse(req.body.data));

    return MovieSeriesController.createSingle(req, res, next);
  }
);

router.patch(
  "/:id",
  auth(UserRole.admin, UserRole.s_admin),
  fileUploader.multerUpload.single("file"),

  (req: Request, res: Response, next: NextFunction) => {
    req.body.data = ValidateMovieSeries.update.parse(JSON.parse(req.body.data));

    return MovieSeriesController.updateSingle(req, res, next);
  }
);

export const movieSeriesRoutes = router;
