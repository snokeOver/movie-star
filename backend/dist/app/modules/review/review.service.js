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
exports.ReviewService = void 0;
const paginationHealper_1 = require("../../utils/paginationHealper");
const prisma_1 = require("../../utils/prisma");
const prisma_2 = require("../../../../generated/prisma");
const appError_1 = __importDefault(require("../../middleWares/errorHandler/appError"));
const http_status_1 = __importDefault(require("http-status"));
//get all pending reviews for admin
const getAllPending = (pagination) => __awaiter(void 0, void 0, void 0, function* () {
    const { page, take, skip, orderBy } = (0, paginationHealper_1.paginationHelper)(pagination);
    const result = yield prisma_1.prisma.review.findMany({
        where: {
            isDeleted: false,
        },
        skip,
        take,
        orderBy,
        select: {
            id: true,
            writtenReview: true,
            status: true,
            isSpoiler: true,
            createdAt: true,
            user: {
                select: {
                    id: true,
                    name: true,
                    profilePhoto: true,
                },
            },
        },
    });
    const total = yield prisma_1.prisma.review.count({
        where: {
            status: prisma_2.ReviewStatus.pending,
        },
    });
    return {
        meta: {
            page,
            limit: take,
            total,
        },
        data: result,
    };
});
//approve one by id
const approveOne = (id) => __awaiter(void 0, void 0, void 0, function* () {
    if (!id)
        throw new appError_1.default(http_status_1.default.BAD_REQUEST, "Id not found");
    const foundReview = yield prisma_1.prisma.review.findUnique({
        where: {
            id,
        },
    });
    if (!foundReview)
        throw new appError_1.default(http_status_1.default.NOT_FOUND, "Review not found");
    const result = yield prisma_1.prisma.review.update({
        where: {
            id,
        },
        data: {
            status: prisma_2.ReviewStatus.approved,
        },
    });
    //get all the approved isDeleted:false reviews of this movie series and take their average rating to update the movie series rating
    const foundMedia = yield prisma_1.prisma.movieSeries.findUnique({
        where: {
            id: foundReview.movieSeriesId,
        },
        select: {
            rating: true,
        },
    });
    if (!foundMedia)
        throw new appError_1.default(http_status_1.default.NOT_FOUND, "Media not found");
    const { _avg, _count } = yield prisma_1.prisma.review.aggregate({
        where: {
            movieSeriesId: foundReview.movieSeriesId,
            status: prisma_2.ReviewStatus.approved,
            isDeleted: false,
        },
        _avg: {
            rating: true, // Calculate the average of the `rating` field
        },
        _count: {
            rating: true, // Count the number of reviews to check if any exist
        },
    });
    let averageRating = _avg.rating || foundMedia.rating;
    const foundAvgRating = _avg.rating || 0;
    // If no approved reviews are found, do not update the movie series rating
    if (_count.rating === 0)
        return null;
    if (_count.rating === 1)
        averageRating = (foundAvgRating + foundMedia.rating) / 2;
    if (_count.rating > 1)
        averageRating = averageRating;
    // Update the movie series rating
    const updateRating = yield prisma_1.prisma.movieSeries.update({
        where: { id: foundReview.movieSeriesId },
        data: { rating: averageRating },
    });
    return null;
});
//unpublish one by id
const unpublishOne = (id) => __awaiter(void 0, void 0, void 0, function* () {
    if (!id)
        throw new appError_1.default(http_status_1.default.BAD_REQUEST, "Id not found");
    const foundReview = yield prisma_1.prisma.review.findUnique({
        where: {
            id,
        },
    });
    if (!foundReview)
        throw new appError_1.default(http_status_1.default.NOT_FOUND, "Review not found");
    const result = yield prisma_1.prisma.review.update({
        where: {
            id,
        },
        data: {
            status: prisma_2.ReviewStatus.unpublished,
        },
    });
    return null;
});
//remove one by id
const removeOne = (id) => __awaiter(void 0, void 0, void 0, function* () {
    if (!id)
        throw new appError_1.default(http_status_1.default.BAD_REQUEST, "Id not found");
    const foundReview = yield prisma_1.prisma.review.findUnique({
        where: {
            id,
        },
    });
    if (!foundReview)
        throw new appError_1.default(http_status_1.default.NOT_FOUND, "Review not found");
    const result = yield prisma_1.prisma.review.update({
        where: {
            id,
        },
        data: {
            isDeleted: true,
        },
    });
    return null;
});
exports.ReviewService = {
    getAllPending,
    approveOne,
    unpublishOne,
    removeOne,
};
