"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminController = void 0;
const admin_service_1 = require("./admin.service");
const pick_1 = require("../../utils/pick");
const admin_constant_1 = require("./admin.constant");
const http_status_1 = __importDefault(require("http-status"));
const sendResponse_1 = require("../../utils/sendResponse");
const tryCatchAsync_1 = require("../../utils/tryCatchAsync");
const pagination_1 = require("../../constant/pagination");
//Delete single admin by id
const deleteSingle = (0, tryCatchAsync_1.tryCatchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield admin_service_1.AdminService.deleteSingle(req.params.id);
    (0, sendResponse_1.sendResponse)({
        res,
        sendData: {
            statusCode: http_status_1.default.OK,
            success: true,
            message: "Admin data deleted successfully",
            data: result,
        },
    });
}));
//Update single admin by id
const updateSingle = (0, tryCatchAsync_1.tryCatchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield admin_service_1.AdminService.updateSingle(req.params.id, req.body);
    (0, sendResponse_1.sendResponse)({
        res,
        sendData: {
            statusCode: http_status_1.default.OK,
            success: true,
            message: "Admin data updated successfully",
            data: result,
        },
    });
}));
//Get single admin data by id
const getSingle = (0, tryCatchAsync_1.tryCatchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield admin_service_1.AdminService.getSingle(req.params.id);
    (0, sendResponse_1.sendResponse)({
        res,
        sendData: {
            statusCode: http_status_1.default.OK,
            success: true,
            message: "Admin data fetched successfully",
            data: result,
        },
    });
}));
const getAll = (0, tryCatchAsync_1.tryCatchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const filteredQuery = (0, pick_1.pick)(req.query, admin_constant_1.validSearchableFields);
    const pagination = (0, pick_1.pick)(req.query, pagination_1.paginationProperties);
    const result = yield admin_service_1.AdminService.getAll(filteredQuery, pagination);
    (0, sendResponse_1.sendResponse)({
        res,
        sendData: {
            statusCode: http_status_1.default.OK,
            success: true,
            message: "All Admin data fetched successfully",
            data: result.data,
            meta: result.meta,
        },
    });
}));
exports.AdminController = {
    getSingle,
    getAll,
    updateSingle,
    deleteSingle,
};
