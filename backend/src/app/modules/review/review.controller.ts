import { ReviewService } from "./review.service";
import httpStatus from "http-status";
import { sendResponse } from "../../utils/sendResponse";
import { tryCatchAsync } from "../../utils/tryCatchAsync";
import { pick } from "../../utils/pick";
import { paginationProperties } from "../../constant/pagination";

const getAllPending = tryCatchAsync(async (req, res) => {
  const pagination = pick(req.query, paginationProperties);
  const result = await ReviewService.getAllPending(pagination);

  sendResponse({
    res,
    sendData: {
      statusCode: httpStatus.OK,
      success: true,
      message: "All pending reviews fetched successfully",
      data: result,
    },
  });
});

const approveOne = tryCatchAsync(async (req, res) => {
  const result = await ReviewService.approveOne(req.params.id);

  sendResponse({
    res,
    sendData: {
      statusCode: httpStatus.OK,
      success: true,
      message: "Review approved successfully",
      data: result,
    },
  });
});
const unpublishOne = tryCatchAsync(async (req, res) => {
  const result = await ReviewService.unpublishOne(req.params.id);

  sendResponse({
    res,
    sendData: {
      statusCode: httpStatus.OK,
      success: true,
      message: "Review unpublished successfully",
      data: result,
    },
  });
});
const removeOne = tryCatchAsync(async (req, res) => {
  const result = await ReviewService.removeOne(req.params.id);

  sendResponse({
    res,
    sendData: {
      statusCode: httpStatus.OK,
      success: true,
      message: "Review removed successfully",
      data: result,
    },
  });
});

export const ReviewController = {
  getAllPending,
  approveOne,
  unpublishOne,
  removeOne,
};
