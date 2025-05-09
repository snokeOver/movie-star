import express, { NextFunction, Request, Response } from "express";

import auth from "../../middleWares/auth";
import { UserRole } from "../../../../generated/prisma";
import { validateRequest } from "../../middleWares/validateRequest";
import { ValidateUser } from "./user.validate";
import { UserController } from "./user.controller";
import { fileUploader } from "../../utils/fileUploader";

const router = express.Router();

router.post(
  "/review",
  auth(UserRole.user),
  validateRequest(ValidateUser.createReview),
  UserController.createReview
);

router.patch(
  "/review/:id",
  auth(UserRole.user),
  validateRequest(ValidateUser.updateReview),
  UserController.updateReview
);

router.post(
  "/media-like",
  auth(UserRole.user),
  validateRequest(ValidateUser.createMediaLike),
  UserController.createMediaLike
);

router.post(
  "/review-like",
  auth(UserRole.user),
  validateRequest(ValidateUser.createReviewLike),
  UserController.createReviewLike
);

router.post(
  "/comment",
  auth(UserRole.user),
  validateRequest(ValidateUser.createComment),
  UserController.createComment
);

router.get("/watchlist", auth(UserRole.user), UserController.getAllWatchList);
router.get("/purchase", auth(UserRole.user), UserController.getAllPurchaseList);
router.get("/review", auth(UserRole.user), UserController.getMyALlReviews);

router.get(
  "/profile",
  auth(UserRole.user, UserRole.admin, UserRole.s_admin),
  UserController.getProfile
);

router.patch(
  "/profile",
  auth(UserRole.user, UserRole.admin, UserRole.s_admin),
  fileUploader.multerUpload.single("file"),

  (req: Request, res: Response, next: NextFunction) => {
    req.body.data = ValidateUser.updateProfile.parse(JSON.parse(req.body.data));

    return UserController.updateProfile(req, res, next);
  }
);

router.post(
  "/watchlist",
  auth(UserRole.user),
  validateRequest(ValidateUser.watchList),
  UserController.addWatchList
);

router.patch(
  "/watchlist/:id",
  auth(UserRole.user),
  UserController.removeSingleWatchList
);

router.delete(
  "/watchlist",
  auth(UserRole.user),
  UserController.removeAllWatchList
);

router.get("/review/:id", UserController.getAll);

export const userRoutes = router;
