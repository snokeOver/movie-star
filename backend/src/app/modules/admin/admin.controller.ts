import httpStatus from "http-status";
import { sendResponse } from "../../utils/sendResponse";
import { tryCatchAsync } from "../../utils/tryCatchAsync";
import { AdminService } from "./admin.service";

//Get aggregated statistics
const aggregatedStatistics = tryCatchAsync(async (req, res) => {
  const result = await AdminService.aggregatedStatistics();

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

//get sales history
const getSalesHistory = tryCatchAsync(async (req, res) => {
  const result = await AdminService.getSalesHistory(
    req.query.start as string,
    req.query.end as string
  );

  sendResponse({
    res,
    sendData: {
      statusCode: httpStatus.OK,
      success: true,
      message: "Sales history retrieved successfully",
      data: result,
    },
  });
});

export const AdminController = {
  aggregatedStatistics,
  getSalesHistory,
};
