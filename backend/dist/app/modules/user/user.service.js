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
exports.UserService = void 0;
const prisma_1 = require("../../../../generated/prisma");
const appError_1 = __importDefault(require("../../middleWares/errorHandler/appError"));
const prisma_2 = require("../../utils/prisma");
const http_status_1 = __importDefault(require("http-status"));
const paginationHealper_1 = require("../../utils/paginationHealper");
const jwtToken_1 = require("../../utils/jwtToken");
const config_1 = __importDefault(require("../../config"));
const fileUploader_1 = require("../../utils/fileUploader");
//Create review for movie series by user
const createReview = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    if (!payload)
        throw new appError_1.default(http_status_1.default.BAD_REQUEST, "Review not found");
    const { userId, movieSeriesId, rating, writtenReview, isSpoiler, tags } = payload;
    const foundReview = yield prisma_2.prisma.review.findFirst({
        where: {
            userId,
            movieSeriesId,
            isDeleted: false,
        },
    });
    if ((foundReview === null || foundReview === void 0 ? void 0 : foundReview.status) === prisma_1.ReviewStatus.approved)
        throw new appError_1.default(http_status_1.default.CONFLICT, "You have already given a review for this movie series");
    if ((foundReview === null || foundReview === void 0 ? void 0 : foundReview.status) === prisma_1.ReviewStatus.pending)
        throw new appError_1.default(http_status_1.default.CONFLICT, "You review is pending for approval");
    if ((foundReview === null || foundReview === void 0 ? void 0 : foundReview.status) === prisma_1.ReviewStatus.unpublished)
        throw new appError_1.default(http_status_1.default.CONFLICT, "Your review is not approved. You can update your review from dashboard for approval");
    const createdReview = yield prisma_2.prisma.review.create({
        data: {
            userId,
            movieSeriesId,
            rating,
            writtenReview,
            isSpoiler,
            tags,
        },
    });
    return createdReview;
});
//Update review for movie series by user
const updateReview = (payload, id) => __awaiter(void 0, void 0, void 0, function* () {
    if (!payload)
        throw new appError_1.default(http_status_1.default.BAD_REQUEST, "Review not found");
    const { userId, movieSeriesId, rating, writtenReview, isSpoiler, tags } = payload;
    const foundReview = yield prisma_2.prisma.review.findFirst({
        where: {
            userId,
            movieSeriesId,
            isDeleted: false,
        },
    });
    if ((foundReview === null || foundReview === void 0 ? void 0 : foundReview.status) === prisma_1.ReviewStatus.approved)
        throw new appError_1.default(http_status_1.default.CONFLICT, "You review already approved");
    if ((foundReview === null || foundReview === void 0 ? void 0 : foundReview.status) === prisma_1.ReviewStatus.pending)
        throw new appError_1.default(http_status_1.default.CONFLICT, "You review is pending for approval");
    const updatedReview = yield prisma_2.prisma.review.update({
        where: {
            id,
        },
        data: {
            userId,
            movieSeriesId,
            rating,
            writtenReview,
            isSpoiler,
            status: prisma_1.ReviewStatus.pending,
            tags,
        },
    });
    return updatedReview;
});
//Create like for movie series by user
const createMediaLike = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    if (!payload)
        throw new appError_1.default(http_status_1.default.BAD_REQUEST, "Payload not found");
    const { userId, movieSeriesId } = payload;
    const foundMovieLike = yield prisma_2.prisma.movieLike.findFirst({
        where: {
            userId,
            movieSeriesId,
        },
    });
    if (!foundMovieLike) {
        const createdMovieLike = yield prisma_2.prisma.movieLike.create({
            data: {
                userId,
                movieSeriesId,
                isLike: true,
            },
        });
        return createdMovieLike;
    }
    const updatedMovieLike = yield prisma_2.prisma.movieLike.update({
        where: {
            id: foundMovieLike.id,
        },
        data: {
            isLike: !foundMovieLike.isLike,
        },
    });
    return updatedMovieLike;
});
//Create like for review  by user
const createReviewLike = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    if (!payload)
        throw new appError_1.default(http_status_1.default.BAD_REQUEST, "Payload not found");
    const { userId, reviewId } = payload;
    const foundReview = yield prisma_2.prisma.reviewLike.findFirst({
        where: {
            userId,
            reviewId,
        },
    });
    if (!foundReview) {
        const createdReview = yield prisma_2.prisma.reviewLike.create({
            data: {
                userId,
                reviewId,
            },
        });
        return createdReview;
    }
    const updatedReview = yield prisma_2.prisma.reviewLike.update({
        where: {
            id: foundReview.id,
        },
        data: {
            isLike: !foundReview.isLike,
        },
    });
    const foundUserReview = yield prisma_2.prisma.review.findUnique({
        where: {
            id: reviewId,
        },
    });
    if (foundUserReview) {
        yield prisma_2.prisma.review.update({
            where: {
                id: foundUserReview.id,
            },
            data: {
                likesCount: foundUserReview.likesCount + (updatedReview.isLike ? 1 : -1),
            },
        });
    }
    return updatedReview;
});
//Create comment for review  by user
const createComment = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    if (!payload)
        throw new appError_1.default(http_status_1.default.BAD_REQUEST, "Payload not found");
    const result = yield prisma_2.prisma.$transaction((tx) => __awaiter(void 0, void 0, void 0, function* () {
        const createdComment = yield tx.comment.create({
            data: payload,
        });
        const foundUserReview = yield tx.review.findUnique({
            where: {
                id: payload.reviewId,
            },
        });
        if (foundUserReview) {
            yield tx.review.update({
                where: {
                    id: foundUserReview.id,
                },
                data: {
                    commentCount: foundUserReview.commentCount + 1,
                },
            });
        }
        return createdComment;
    }));
    return result;
});
//Get all Reviews
const getAll = (pagination, movieSeriesId, token) => __awaiter(void 0, void 0, void 0, function* () {
    if (!movieSeriesId)
        throw new appError_1.default(http_status_1.default.BAD_REQUEST, "Movie series id not found");
    const { page, take, skip, orderBy } = (0, paginationHealper_1.paginationHelper)(pagination);
    const searchCondition = [];
    //show only approved reviews and specific movie series
    searchCondition.push({
        status: prisma_1.ReviewStatus.approved,
        isDeleted: false,
        movieSeriesId,
    });
    const whereConditions = {
        AND: searchCondition,
    };
    //Get the user id if the user is logged in
    let userId = null;
    if (token) {
        const decoded = (0, jwtToken_1.verifyToken)(token, config_1.default.jwt.jwt_access_secret);
        userId = decoded.userId;
    }
    const foundMedia = yield prisma_2.prisma.movieSeries.findUnique({
        where: {
            id: movieSeriesId,
        },
        select: {
            posterUrl: true,
            title: true,
        },
    });
    if (!foundMedia)
        throw new appError_1.default(http_status_1.default.NOT_FOUND, "Media not found");
    const result = yield prisma_2.prisma.review.findMany({
        where: whereConditions,
        skip,
        take,
        orderBy,
        select: {
            id: true,
            rating: true,
            writtenReview: true,
            isSpoiler: true,
            tags: true,
            likesCount: true,
            commentCount: true,
            createdAt: true,
            user: {
                select: {
                    id: true,
                    name: true,
                    profilePhoto: true,
                },
            },
            reviewLike: userId
                ? {
                    where: { userId },
                    select: { isLike: true },
                }
                : undefined,
            comment: {
                orderBy: {
                    createdAt: "desc",
                },
                select: {
                    id: true,
                    content: true,
                    createdAt: true,
                    user: {
                        select: {
                            id: true,
                            name: true,
                            profilePhoto: true,
                        },
                    },
                },
            },
        },
    });
    const total = yield prisma_2.prisma.review.count({
        where: whereConditions,
    });
    return {
        meta: {
            page,
            limit: take,
            total,
        },
        data: { result, foundMedia },
    };
});
//Get all Watchlist
const getALlWatchList = (pagination, user) => __awaiter(void 0, void 0, void 0, function* () {
    if (!user)
        throw new appError_1.default(http_status_1.default.UNAUTHORIZED, "Unauthorized");
    const { page, take, skip, orderBy } = (0, paginationHealper_1.paginationHelper)(pagination);
    const result = yield prisma_2.prisma.watchlist.findMany({
        where: {
            userId: user.userId,
        },
        select: {
            id: true,
            movieSeries: {
                select: {
                    id: true,
                    title: true,
                    posterUrl: true,
                    rating: true,
                },
            },
        },
    });
    const total = yield prisma_2.prisma.review.count({
        where: {
            userId: user.userId,
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
//Add to watchlist
const addWatchList = (user, id) => __awaiter(void 0, void 0, void 0, function* () {
    if (!user)
        throw new appError_1.default(http_status_1.default.UNAUTHORIZED, "Unauthorized");
    if (!id)
        throw new appError_1.default(http_status_1.default.BAD_REQUEST, "Media id not found");
    const foundMedia = yield prisma_2.prisma.movieSeries.findUnique({
        where: {
            id,
        },
    });
    if (!foundMedia)
        throw new appError_1.default(http_status_1.default.CONFLICT, "Media not found");
    const foundWatchList = yield prisma_2.prisma.watchlist.findFirst({
        where: {
            userId: user.userId,
            movieSeriesId: id,
        },
    });
    if (foundWatchList)
        throw new appError_1.default(http_status_1.default.CONFLICT, "Media already in watchlist");
    const result = yield prisma_2.prisma.watchlist.create({
        data: {
            userId: user.userId,
            movieSeriesId: id,
        },
    });
    return result;
});
//Remove one from watchlist
const removeOneWatchList = (id) => __awaiter(void 0, void 0, void 0, function* () {
    if (!id)
        throw new appError_1.default(http_status_1.default.BAD_REQUEST, "Watchlist id not found");
    const foundMedia = yield prisma_2.prisma.watchlist.findUnique({
        where: {
            id,
        },
    });
    if (!foundMedia)
        throw new appError_1.default(http_status_1.default.CONFLICT, "Watchlist not found");
    yield prisma_2.prisma.watchlist.delete({
        where: {
            id,
        },
    });
    return { message: "Watchlist updated successfully" };
});
//Remove one from watchlist
const removeAllWatchList = (user) => __awaiter(void 0, void 0, void 0, function* () {
    if (!user)
        throw new appError_1.default(http_status_1.default.UNAUTHORIZED, "Unauthorized");
    yield prisma_2.prisma.watchlist.deleteMany({
        where: {
            userId: user.userId,
        },
    });
    return { message: "Watchlist cleared successfully" };
});
//Get all your purchase
const getALlPurchaseList = (pagination, user) => __awaiter(void 0, void 0, void 0, function* () {
    if (!user)
        throw new appError_1.default(http_status_1.default.UNAUTHORIZED, "Unauthorized");
    const { page, take, skip, orderBy } = (0, paginationHealper_1.paginationHelper)(pagination, "purchaseDate");
    const result = yield prisma_2.prisma.purchaseRentHistory.findMany({
        where: {
            userId: user.userId,
        },
        skip,
        orderBy,
        select: {
            id: true,
            accessExpiry: true,
            movieSeries: {
                select: {
                    id: true,
                    title: true,
                    posterUrl: true,
                    rating: true,
                    accessLink: true,
                    priceType: true,
                },
            },
        },
    });
    const total = yield prisma_2.prisma.review.count({
        where: {
            userId: user.userId,
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
//Get all your reviews
const getALlReviewList = (pagination, user) => __awaiter(void 0, void 0, void 0, function* () {
    if (!user)
        throw new appError_1.default(http_status_1.default.UNAUTHORIZED, "Unauthorized");
    const { page, take, skip, orderBy } = (0, paginationHealper_1.paginationHelper)(pagination);
    const result = yield prisma_2.prisma.review.findMany({
        where: {
            userId: user.userId,
            status: prisma_1.ReviewStatus.unpublished,
        },
        skip,
        orderBy,
        select: {
            id: true,
            rating: true,
            writtenReview: true,
            isSpoiler: true,
            tags: true,
            createdAt: true,
            movieSeries: {
                select: {
                    id: true,
                    title: true,
                    posterUrl: true,
                    releaseYear: true,
                },
            },
        },
    });
    const total = yield prisma_2.prisma.review.count({
        where: {
            userId: user.userId,
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
//get user profile details
const getProfile = (user) => __awaiter(void 0, void 0, void 0, function* () {
    if (!user)
        throw new appError_1.default(http_status_1.default.UNAUTHORIZED, "Unauthorized");
    const foundUser = yield prisma_2.prisma.user.findUnique({
        where: {
            id: user.userId,
            status: prisma_1.UserStatus.active,
        },
        select: {
            id: true,
            name: true,
            profilePhoto: true,
            createdAt: true,
            updatedAt: true,
        },
    });
    if (!foundUser)
        throw new appError_1.default(http_status_1.default.NOT_FOUND, "User not found");
    return foundUser;
});
//Update user profile details
const updateProfile = (user, payload, file) => __awaiter(void 0, void 0, void 0, function* () {
    if (!user)
        throw new appError_1.default(http_status_1.default.UNAUTHORIZED, "Unauthorized");
    const foundUser = yield prisma_2.prisma.user.findUnique({
        where: {
            id: user.userId,
            status: prisma_1.UserStatus.active,
        },
        select: {
            id: true,
        },
    });
    if (!foundUser)
        throw new appError_1.default(http_status_1.default.NOT_FOUND, "User not found");
    //Upload image to cloudinary
    if (file) {
        const uploadedResult = yield fileUploader_1.fileUploader.cloudinaryUpload(file.path, file.filename.split(".")[0]);
        payload.profilePhoto = uploadedResult.secure_url;
    }
    const updatedUser = yield prisma_2.prisma.user.update({
        where: {
            id: user.userId,
        },
        data: payload,
        select: {
            id: true,
            name: true,
            profilePhoto: true,
            createdAt: true,
            updatedAt: true,
        },
    });
    return updatedUser;
});
exports.UserService = {
    createReview,
    createMediaLike,
    createReviewLike,
    createComment,
    getAll,
    addWatchList,
    removeOneWatchList,
    removeAllWatchList,
    getALlWatchList,
    getALlPurchaseList,
    getALlReviewList,
    updateReview,
    getProfile,
    updateProfile,
};
