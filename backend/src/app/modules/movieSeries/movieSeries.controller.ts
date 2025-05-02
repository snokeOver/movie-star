import { pick } from "../../utils/pick";
import { validSearchableFields } from "./movieSeries.constant";
import httpStatus from "http-status";
import { sendResponse } from "../../utils/sendResponse";
import { tryCatchAsync } from "../../utils/tryCatchAsync";
import { paginationProperties } from "../../constant/pagination";
import { MovieSeriesService } from "./movieSeries.service";

//Delete single Movie Series by id
const deleteSingle = tryCatchAsync(async (req, res) => {
  const result = await MovieSeriesService.deleteSingle(req.params.id);

  sendResponse({
    res,
    sendData: {
      statusCode: httpStatus.OK,
      success: true,
      message: "Media deleted successfully",
      data: result,
    },
  });
});

//Update single movie series by id
const updateSingle = tryCatchAsync(async (req, res) => {
  const result = await MovieSeriesService.updateSingle(req.params.id, req.body);

  sendResponse({
    res,
    sendData: {
      statusCode: httpStatus.OK,
      success: true,
      message: "Media updated successfully",
      data: result,
    },
  });
});

//Get single movie series data by id
const getSingle = tryCatchAsync(async (req, res) => {
  const result = await MovieSeriesService.getSingle(req.params.id);
  sendResponse({
    res,
    sendData: {
      statusCode: httpStatus.OK,
      success: true,
      message: "Media fetched successfully",
      data: result,
    },
  });
});

const getAll = tryCatchAsync(async (req, res) => {
  const filteredQuery = pick(req.query, validSearchableFields);
  const pagination = pick(req.query, paginationProperties);

  const result = await MovieSeriesService.getAll(filteredQuery, pagination);

  sendResponse({
    res,
    sendData: {
      statusCode: httpStatus.OK,
      success: true,
      message: "All Media fetched successfully",
      data: result.data,
      meta: result.meta,
    },
  });
});

export const MovieSeriesController = {
  getSingle,
  getAll,
  updateSingle,
  deleteSingle,
};
