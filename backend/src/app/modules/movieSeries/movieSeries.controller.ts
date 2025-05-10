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
  const result = await MovieSeriesService.updateSingle(
    req.params.id,
    req.body.data,
    req.file
  );

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

//Get single movie series data by id for admin
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
//Get single movie series data by id for public
const getSinglePublic = tryCatchAsync(async (req, res) => {
  const result = await MovieSeriesService.getSinglePublic(
    req.params.id,
    req.headers.authorization
  );
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

//Create single movie series
const createSingle = tryCatchAsync(async (req, res) => {
  const result = await MovieSeriesService.createSingle(req.body.data, req.file);

  sendResponse({
    res,
    sendData: {
      statusCode: httpStatus.OK,
      success: true,
      message: "Media created successfully",
      data: result,
    },
  });
});

const getFiveHomeBanner = tryCatchAsync(async (req, res) => {
  const result = await MovieSeriesService.getFiveHomeBanner();

  sendResponse({
    res,
    sendData: {
      statusCode: httpStatus.OK,
      success: true,
      message: "Five Media for home banner fetched successfully",
      data: result,
    },
  });
});

const getFiveHighestRated = tryCatchAsync(async (req, res) => {
  const result = await MovieSeriesService.getFiveHighestRated();

  sendResponse({
    res,
    sendData: {
      statusCode: httpStatus.OK,
      success: true,
      message: "Five Highest Rated Media for home fetched successfully",
      data: result,
    },
  });
});

const getFiveHighlyViewed = tryCatchAsync(async (req, res) => {
  const result = await MovieSeriesService.getFiveHighlyViewed();

  sendResponse({
    res,
    sendData: {
      statusCode: httpStatus.OK,
      success: true,
      message: "Five Highly viewed Media for home fetched successfully",
      data: result,
    },
  });
});

const getFiveAdminSelected = tryCatchAsync(async (req, res) => {
  const result = await MovieSeriesService.getFiveAdminSelected();

  sendResponse({
    res,
    sendData: {
      statusCode: httpStatus.OK,
      success: true,
      message: "Five admin recommended Media for home fetched successfully",
      data: result,
    },
  });
});

const getAllPublic = tryCatchAsync(async (req, res) => {
  const filteredQuery = pick(req.query, validSearchableFields);
  const pagination = pick(req.query, paginationProperties);

  const result = await MovieSeriesService.getAllPublic(
    filteredQuery,
    pagination
  );

  sendResponse({
    res,
    sendData: {
      statusCode: httpStatus.OK,
      success: true,
      message: "All public Media fetched successfully",
      data: result.data,
      meta: result.meta,
    },
  });
});

export const MovieSeriesController = {
  getSingle,
  getAll,
  getAllPublic,
  updateSingle,
  deleteSingle,
  createSingle,
  getFiveHomeBanner,
  getFiveHighestRated,
  getFiveHighlyViewed,
  getFiveAdminSelected,
  getSinglePublic,
};
