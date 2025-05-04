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
exports.MovieSeriesController = void 0;
const pick_1 = require("../../utils/pick");
const movieSeries_constant_1 = require("./movieSeries.constant");
const http_status_1 = __importDefault(require("http-status"));
const sendResponse_1 = require("../../utils/sendResponse");
const tryCatchAsync_1 = require("../../utils/tryCatchAsync");
const pagination_1 = require("../../constant/pagination");
const movieSeries_service_1 = require("./movieSeries.service");
//Delete single Movie Series by id
const deleteSingle = (0, tryCatchAsync_1.tryCatchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield movieSeries_service_1.MovieSeriesService.deleteSingle(req.params.id);
    (0, sendResponse_1.sendResponse)({
        res,
        sendData: {
            statusCode: http_status_1.default.OK,
            success: true,
            message: "Media deleted successfully",
            data: result,
        },
    });
}));
//Update single movie series by id
const updateSingle = (0, tryCatchAsync_1.tryCatchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield movieSeries_service_1.MovieSeriesService.updateSingle(req.params.id, req.body.data, req.file);
    (0, sendResponse_1.sendResponse)({
        res,
        sendData: {
            statusCode: http_status_1.default.OK,
            success: true,
            message: "Media updated successfully",
            data: result,
        },
    });
}));
//Get single movie series data by id for admin
const getSingle = (0, tryCatchAsync_1.tryCatchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield movieSeries_service_1.MovieSeriesService.getSingle(req.params.id);
    (0, sendResponse_1.sendResponse)({
        res,
        sendData: {
            statusCode: http_status_1.default.OK,
            success: true,
            message: "Media fetched successfully",
            data: result,
        },
    });
}));
//Get single movie series data by id for public
const getSinglePublic = (0, tryCatchAsync_1.tryCatchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield movieSeries_service_1.MovieSeriesService.getSinglePublic(req.params.id);
    (0, sendResponse_1.sendResponse)({
        res,
        sendData: {
            statusCode: http_status_1.default.OK,
            success: true,
            message: "Media fetched successfully",
            data: result,
        },
    });
}));
const getAll = (0, tryCatchAsync_1.tryCatchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const filteredQuery = (0, pick_1.pick)(req.query, movieSeries_constant_1.validSearchableFields);
    const pagination = (0, pick_1.pick)(req.query, pagination_1.paginationProperties);
    const result = yield movieSeries_service_1.MovieSeriesService.getAll(filteredQuery, pagination);
    (0, sendResponse_1.sendResponse)({
        res,
        sendData: {
            statusCode: http_status_1.default.OK,
            success: true,
            message: "All Media fetched successfully",
            data: result.data,
            meta: result.meta,
        },
    });
}));
//Create single movie series
const createSingle = (0, tryCatchAsync_1.tryCatchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield movieSeries_service_1.MovieSeriesService.createSingle(req.body.data, req.file);
    (0, sendResponse_1.sendResponse)({
        res,
        sendData: {
            statusCode: http_status_1.default.OK,
            success: true,
            message: "Media created successfully",
            data: result,
        },
    });
}));
const getFiveHomeBanner = (0, tryCatchAsync_1.tryCatchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield movieSeries_service_1.MovieSeriesService.getFiveHomeBanner();
    (0, sendResponse_1.sendResponse)({
        res,
        sendData: {
            statusCode: http_status_1.default.OK,
            success: true,
            message: "Five Media for home banner fetched successfully",
            data: result,
        },
    });
}));
const getFiveHighestRated = (0, tryCatchAsync_1.tryCatchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield movieSeries_service_1.MovieSeriesService.getFiveHighestRated();
    (0, sendResponse_1.sendResponse)({
        res,
        sendData: {
            statusCode: http_status_1.default.OK,
            success: true,
            message: "Five Highest Rated Media for home fetched successfully",
            data: result,
        },
    });
}));
const getFiveHighlyViewed = (0, tryCatchAsync_1.tryCatchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield movieSeries_service_1.MovieSeriesService.getFiveHighlyViewed();
    (0, sendResponse_1.sendResponse)({
        res,
        sendData: {
            statusCode: http_status_1.default.OK,
            success: true,
            message: "Five Highly viewed Media for home fetched successfully",
            data: result,
        },
    });
}));
const getFiveAdminSelected = (0, tryCatchAsync_1.tryCatchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield movieSeries_service_1.MovieSeriesService.getFiveAdminSelected();
    (0, sendResponse_1.sendResponse)({
        res,
        sendData: {
            statusCode: http_status_1.default.OK,
            success: true,
            message: "Five admin recommended Media for home fetched successfully",
            data: result,
        },
    });
}));
exports.MovieSeriesController = {
    getSingle,
    getAll,
    updateSingle,
    deleteSingle,
    createSingle,
    getFiveHomeBanner,
    getFiveHighestRated,
    getFiveHighlyViewed,
    getFiveAdminSelected,
    getSinglePublic,
};
