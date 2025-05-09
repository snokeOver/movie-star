import httpStatus from "http-status";
import { sendResponse } from "../../utils/sendResponse";
import { tryCatchAsync } from "../../utils/tryCatchAsync";
import { UserService } from "./user.service";
import { pick } from "../../utils/pick";
import { paginationProperties } from "../../constant/pagination";
import { Request } from "express";
import { IJwtPayload } from "../../types";

//Create single review
const createReview = tryCatchAsync(async (req, res) => {
  const result = await UserService.createReview(req.body);

  sendResponse({
    res,
    sendData: {
      statusCode: httpStatus.OK,
      success: true,
      message: "Review submitted for admin approval",
      data: result,
    },
  });
});

//Update single review
const updateReview = tryCatchAsync(async (req, res) => {
  const result = await UserService.updateReview(req.body, req.params.id);

  sendResponse({
    res,
    sendData: {
      statusCode: httpStatus.OK,
      success: true,
      message: "Review re-submitted for admin approval",
      data: result,
    },
  });
});

//Create media like
const createMediaLike = tryCatchAsync(async (req, res) => {
  const result = await UserService.createMediaLike(req.body);

  sendResponse({
    res,
    sendData: {
      statusCode: httpStatus.OK,
      success: true,
      message: "Reaction update successfully",
      data: result,
    },
  });
});

//Create review like
const createReviewLike = tryCatchAsync(async (req, res) => {
  const result = await UserService.createReviewLike(req.body);

  sendResponse({
    res,
    sendData: {
      statusCode: httpStatus.OK,
      success: true,
      message: "Reaction update successfully",
      data: result,
    },
  });
});

//Create comment like
const createComment = tryCatchAsync(async (req, res) => {
  const result = await UserService.createComment(req.body);

  sendResponse({
    res,
    sendData: {
      statusCode: httpStatus.OK,
      success: true,
      message: "Comment saved successfully",
      data: result,
    },
  });
});

const getAll = tryCatchAsync(async (req, res) => {
  const pagination = pick(req.query, paginationProperties);

  const result = await UserService.getAll(
    pagination,
    req.params.id,
    req.headers.authorization
  );

  sendResponse({
    res,
    sendData: {
      statusCode: httpStatus.OK,
      success: true,
      message: "All Reviews fetched successfully",
      data: result.data,
      meta: result.meta,
    },
  });
});

const getAllWatchList = tryCatchAsync(
  async (req: Request & { user?: IJwtPayload }, res) => {
    const pagination = pick(req.query, paginationProperties);

    const result = await UserService.getALlWatchList(pagination, req.user);

    sendResponse({
      res,
      sendData: {
        statusCode: httpStatus.OK,
        success: true,
        message: "All watchlist fetched successfully",
        data: result.data,
        meta: result.meta,
      },
    });
  }
);

const getMyALlReviews = tryCatchAsync(
  async (req: Request & { user?: IJwtPayload }, res) => {
    const pagination = pick(req.query, paginationProperties);

    const result = await UserService.getALlReviewList(pagination, req.user);

    sendResponse({
      res,
      sendData: {
        statusCode: httpStatus.OK,
        success: true,
        message: "All reviews fetched successfully",
        data: result.data,
        meta: result.meta,
      },
    });
  }
);

const getAllPurchaseList = tryCatchAsync(
  async (req: Request & { user?: IJwtPayload }, res) => {
    const pagination = pick(req.query, paginationProperties);

    const result = await UserService.getALlPurchaseList(pagination, req.user);

    sendResponse({
      res,
      sendData: {
        statusCode: httpStatus.OK,
        success: true,
        message: "All purchased list fetched successfully",
        data: result.data,
        meta: result.meta,
      },
    });
  }
);

const addWatchList = tryCatchAsync(
  async (req: Request & { user?: IJwtPayload }, res) => {
    const result = await UserService.addWatchList(
      req.user,
      req.body.movieSeriesId
    );

    sendResponse({
      res,
      sendData: {
        statusCode: httpStatus.OK,
        success: true,
        message: "Watchlist added successfully",
        data: result.data,
        meta: result.meta,
      },
    });
  }
);

const removeSingleWatchList = tryCatchAsync(
  async (req: Request & { user?: IJwtPayload }, res) => {
    const result = await UserService.removeOneWatchList(req.params.id);

    sendResponse({
      res,
      sendData: {
        statusCode: httpStatus.OK,
        success: true,
        message: "Watchlist updated successfully",
        data: result.data,
        meta: result.meta,
      },
    });
  }
);

const removeAllWatchList = tryCatchAsync(
  async (req: Request & { user?: IJwtPayload }, res) => {
    const result = await UserService.removeAllWatchList(req.user);

    sendResponse({
      res,
      sendData: {
        statusCode: httpStatus.OK,
        success: true,
        message: "Watchlist removed successfully",
        data: result.data,
        meta: result.meta,
      },
    });
  }
);

//update user profile
const updateProfile = tryCatchAsync(
  async (req: Request & { user?: IJwtPayload }, res) => {
    const result = await UserService.updateProfile(
      req.user as IJwtPayload,
      req.body.data,
      req.file
    );

    sendResponse({
      res,
      sendData: {
        statusCode: httpStatus.OK,
        success: true,
        message: "Profile updated successfully",
        data: result,
      },
    });
  }
);

//get user profile
const getProfile = tryCatchAsync(
  async (req: Request & { user?: IJwtPayload }, res) => {
    const result = await UserService.getProfile(req.user as IJwtPayload);

    sendResponse({
      res,
      sendData: {
        statusCode: httpStatus.OK,
        success: true,
        message: "Profile retrieved successfully",
        data: result,
      },
    });
  }
);

export const UserController = {
  createReview,
  createMediaLike,
  createReviewLike,
  createComment,
  getAll,
  addWatchList,
  removeSingleWatchList,
  removeAllWatchList,
  getAllWatchList,
  getAllPurchaseList,
  getMyALlReviews,
  updateReview,
  getProfile,
  updateProfile,
};
