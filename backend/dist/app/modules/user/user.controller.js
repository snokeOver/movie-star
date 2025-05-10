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
exports.UserController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const sendResponse_1 = require("../../utils/sendResponse");
const tryCatchAsync_1 = require("../../utils/tryCatchAsync");
const user_service_1 = require("./user.service");
const pick_1 = require("../../utils/pick");
const pagination_1 = require("../../constant/pagination");
//Create single review
const createReview = (0, tryCatchAsync_1.tryCatchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_service_1.UserService.createReview(req.body);
    (0, sendResponse_1.sendResponse)({
        res,
        sendData: {
            statusCode: http_status_1.default.OK,
            success: true,
            message: "Review submitted for admin approval",
            data: result,
        },
    });
}));
//Update single review
const updateReview = (0, tryCatchAsync_1.tryCatchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_service_1.UserService.updateReview(req.body, req.params.id);
    (0, sendResponse_1.sendResponse)({
        res,
        sendData: {
            statusCode: http_status_1.default.OK,
            success: true,
            message: "Review re-submitted for admin approval",
            data: result,
        },
    });
}));
//Create media like
const createMediaLike = (0, tryCatchAsync_1.tryCatchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_service_1.UserService.createMediaLike(req.body);
    (0, sendResponse_1.sendResponse)({
        res,
        sendData: {
            statusCode: http_status_1.default.OK,
            success: true,
            message: "Reaction update successfully",
            data: result,
        },
    });
}));
//Create review like
const createReviewLike = (0, tryCatchAsync_1.tryCatchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_service_1.UserService.createReviewLike(req.body);
    (0, sendResponse_1.sendResponse)({
        res,
        sendData: {
            statusCode: http_status_1.default.OK,
            success: true,
            message: "Reaction update successfully",
            data: result,
        },
    });
}));
//Create comment like
const createComment = (0, tryCatchAsync_1.tryCatchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_service_1.UserService.createComment(req.body);
    (0, sendResponse_1.sendResponse)({
        res,
        sendData: {
            statusCode: http_status_1.default.OK,
            success: true,
            message: "Comment saved successfully",
            data: result,
        },
    });
}));
const getAll = (0, tryCatchAsync_1.tryCatchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const pagination = (0, pick_1.pick)(req.query, pagination_1.paginationProperties);
    const result = yield user_service_1.UserService.getAll(pagination, req.params.id, req.headers.authorization);
    (0, sendResponse_1.sendResponse)({
        res,
        sendData: {
            statusCode: http_status_1.default.OK,
            success: true,
            message: "All Reviews fetched successfully",
            data: result.data,
            meta: result.meta,
        },
    });
}));
const getAllWatchList = (0, tryCatchAsync_1.tryCatchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const pagination = (0, pick_1.pick)(req.query, pagination_1.paginationProperties);
    const result = yield user_service_1.UserService.getALlWatchList(pagination, req.user);
    (0, sendResponse_1.sendResponse)({
        res,
        sendData: {
            statusCode: http_status_1.default.OK,
            success: true,
            message: "All watchlist fetched successfully",
            data: result.data,
            meta: result.meta,
        },
    });
}));
const getMyALlReviews = (0, tryCatchAsync_1.tryCatchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const pagination = (0, pick_1.pick)(req.query, pagination_1.paginationProperties);
    const result = yield user_service_1.UserService.getALlReviewList(pagination, req.user);
    (0, sendResponse_1.sendResponse)({
        res,
        sendData: {
            statusCode: http_status_1.default.OK,
            success: true,
            message: "All reviews fetched successfully",
            data: result.data,
            meta: result.meta,
        },
    });
}));
const getAllPurchaseList = (0, tryCatchAsync_1.tryCatchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const pagination = (0, pick_1.pick)(req.query, pagination_1.paginationProperties);
    const result = yield user_service_1.UserService.getALlPurchaseList(pagination, req.user);
    (0, sendResponse_1.sendResponse)({
        res,
        sendData: {
            statusCode: http_status_1.default.OK,
            success: true,
            message: "All purchased list fetched successfully",
            data: result.data,
            meta: result.meta,
        },
    });
}));
const addWatchList = (0, tryCatchAsync_1.tryCatchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_service_1.UserService.addWatchList(req.user, req.body.movieSeriesId);
    (0, sendResponse_1.sendResponse)({
        res,
        sendData: {
            statusCode: http_status_1.default.OK,
            success: true,
            message: "Watchlist added successfully",
            data: result.data,
            meta: result.meta,
        },
    });
}));
const removeSingleWatchList = (0, tryCatchAsync_1.tryCatchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_service_1.UserService.removeOneWatchList(req.params.id);
    (0, sendResponse_1.sendResponse)({
        res,
        sendData: {
            statusCode: http_status_1.default.OK,
            success: true,
            message: "Watchlist updated successfully",
            data: result.data,
            meta: result.meta,
        },
    });
}));
const removeAllWatchList = (0, tryCatchAsync_1.tryCatchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_service_1.UserService.removeAllWatchList(req.user);
    (0, sendResponse_1.sendResponse)({
        res,
        sendData: {
            statusCode: http_status_1.default.OK,
            success: true,
            message: "Watchlist removed successfully",
            data: result.data,
            meta: result.meta,
        },
    });
}));
//update user profile
const updateProfile = (0, tryCatchAsync_1.tryCatchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_service_1.UserService.updateProfile(req.user, req.body.data, req.file);
    (0, sendResponse_1.sendResponse)({
        res,
        sendData: {
            statusCode: http_status_1.default.OK,
            success: true,
            message: "Profile updated successfully",
            data: result,
        },
    });
}));
//get user profile
const getProfile = (0, tryCatchAsync_1.tryCatchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_service_1.UserService.getProfile(req.user);
    (0, sendResponse_1.sendResponse)({
        res,
        sendData: {
            statusCode: http_status_1.default.OK,
            success: true,
            message: "Profile retrieved successfully",
            data: result,
        },
    });
}));
exports.UserController = {
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
