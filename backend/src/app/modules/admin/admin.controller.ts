import { AdminService } from "./admin.service";
import { pick } from "../../utils/pick";
import { validSearchableFields } from "./admin.constant";
import httpStatus from "http-status";
import { sendResponse } from "../../utils/sendResponse";
import { tryCatchAsync } from "../../utils/tryCatchAsync";
import { paginationProperties } from "../../constant/pagination";

//Delete single admin by id
const deleteSingle = tryCatchAsync(async (req, res) => {
  const result = await AdminService.deleteSingle(req.params.id);

  sendResponse({
    res,
    sendData: {
      statusCode: httpStatus.OK,
      success: true,
      message: "Admin data deleted successfully",
      data: result,
    },
  });
});

//Update single admin by id
const updateSingle = tryCatchAsync(async (req, res) => {
  const result = await AdminService.updateSingle(req.params.id, req.body);

  sendResponse({
    res,
    sendData: {
      statusCode: httpStatus.OK,
      success: true,
      message: "Admin data updated successfully",
      data: result,
    },
  });
});

//Get single admin data by id
const getSingle = tryCatchAsync(async (req, res) => {
  const result = await AdminService.getSingle(req.params.id);
  sendResponse({
    res,
    sendData: {
      statusCode: httpStatus.OK,
      success: true,
      message: "Admin data fetched successfully",
      data: result,
    },
  });
});

const getAll = tryCatchAsync(async (req, res) => {
  const filteredQuery = pick(req.query, validSearchableFields);
  const pagination = pick(req.query, paginationProperties);

  const result = await AdminService.getAll(filteredQuery, pagination);

  sendResponse({
    res,
    sendData: {
      statusCode: httpStatus.OK,
      success: true,
      message: "All Admin data fetched successfully",
      data: result.data,
      meta: result.meta,
    },
  });
});

export const AdminController = {
  getSingle,
  getAll,
  updateSingle,
  deleteSingle,
};
