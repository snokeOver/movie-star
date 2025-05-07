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
      message: "Review saved successfully",
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
    const result = await UserService.removeOneWatchList(
      req.user,
      req.params.id
    );

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

export const UserController = {
  createReview,
  createMediaLike,
  createReviewLike,
  createComment,
  getAll,
  addWatchList,
  removeSingleWatchList,
  removeAllWatchList,
};
