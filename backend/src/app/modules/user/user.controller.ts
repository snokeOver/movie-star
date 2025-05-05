import httpStatus from "http-status";
import { sendResponse } from "../../utils/sendResponse";
import { tryCatchAsync } from "../../utils/tryCatchAsync";
import { UserService } from "./user.service";

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

export const UserController = {
  createReview,
  createMediaLike,
};
