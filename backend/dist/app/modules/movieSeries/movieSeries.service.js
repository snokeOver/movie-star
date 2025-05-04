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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovieSeriesService = void 0;
const appError_1 = __importDefault(require("../../middleWares/errorHandler/appError"));
const paginationHealper_1 = require("../../utils/paginationHealper");
const prisma_1 = require("../../utils/prisma");
const http_status_1 = __importDefault(require("http-status"));
const movieSeries_constant_1 = require("./movieSeries.constant");
const fileUploader_1 = require("../../utils/fileUploader");
//Update single movie series data by id
const deleteSingle = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const foundMovieSeries = yield prisma_1.prisma.movieSeries.findUnique({
        where: {
            id,
            isDeleted: false,
        },
    });
    if (!foundMovieSeries)
        throw new appError_1.default(http_status_1.default.NOT_FOUND, "Media not found");
    const deletedMovieSeries = yield prisma_1.prisma.movieSeries.update({
        where: {
            id,
        },
        data: {
            isDeleted: true,
        },
    });
    return deletedMovieSeries;
});
//Update single movie series data by id
const updateSingle = (id, data, file) => __awaiter(void 0, void 0, void 0, function* () {
    const foundMovieSeries = yield prisma_1.prisma.movieSeries.findUnique({
        where: {
            id,
            isDeleted: false,
        },
    });
    if (!foundMovieSeries)
        throw new appError_1.default(http_status_1.default.NOT_FOUND, "Media not found");
    //Upload image to cloudinary
    if (file) {
        const uploadedResult = yield fileUploader_1.fileUploader.cloudinaryUpload(file.path, file.filename.split(".")[0]);
        data.posterUrl = uploadedResult.secure_url;
    }
    const result = yield prisma_1.prisma.movieSeries.update({
        where: {
            id,
        },
        data,
    });
    return result;
});
//Get single Movie Series data by id for admin
const getSingle = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const foundMovieSeries = yield prisma_1.prisma.movieSeries.findUnique({
        where: {
            id,
            isDeleted: false,
        },
        select: {
            id: true,
            title: true,
            posterUrl: true,
            releaseYear: true,
            genre: true,
            cast: true,
            rating: true,
            viewCount: true,
        },
    });
    if (!foundMovieSeries)
        throw new appError_1.default(http_status_1.default.NOT_FOUND, "Media not found");
    //Increase view count
    yield prisma_1.prisma.movieSeries.update({
        where: {
            id,
        },
        data: {
            viewCount: foundMovieSeries.viewCount + 1,
        },
    });
    return foundMovieSeries;
});
//Get all Movie Series data
const getAll = (query, pagination) => __awaiter(void 0, void 0, void 0, function* () {
    const { page, take, skip, orderBy } = (0, paginationHealper_1.paginationHelper)(pagination);
    // console.log("Pagination data:", query);
    const { searchTerm } = query, filterData = __rest(query, ["searchTerm"]);
    const searchCondition = [];
    if (query.searchTerm) {
        searchCondition.push({
            OR: movieSeries_constant_1.movieSeriesSearchTerms.map((field) => ({
                [field]: { contains: query.searchTerm, mode: "insensitive" },
            })),
        });
    }
    if (Object.keys(filterData).length) {
        searchCondition.push({
            AND: Object.keys(filterData).map((key) => ({
                [key]: {
                    equals: filterData[key],
                },
            })),
        });
    }
    //Do not show data where isDeleted is true
    searchCondition.push({
        isDeleted: false,
    });
    const whereConditions = {
        AND: searchCondition,
    };
    const result = yield prisma_1.prisma.movieSeries.findMany({
        where: whereConditions,
        skip,
        take,
        orderBy,
    });
    const total = yield prisma_1.prisma.movieSeries.count({
        where: whereConditions,
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
//Create single Movie series
const createSingle = (data, file) => __awaiter(void 0, void 0, void 0, function* () {
    //check if user exist before take any costly action like upload image
    const foundMovieSeries = yield prisma_1.prisma.movieSeries.findUnique({
        where: {
            title: data.title,
        },
    });
    if (foundMovieSeries)
        throw new appError_1.default(http_status_1.default.CONFLICT, "Media already exist");
    //Upload image to cloudinary
    if (file) {
        const uploadedResult = yield fileUploader_1.fileUploader.cloudinaryUpload(file.path, file.filename.split(".")[0]);
        data.posterUrl = uploadedResult.secure_url;
    }
    const createdMovieSeries = yield prisma_1.prisma.movieSeries.create({ data });
    return createdMovieSeries;
});
//Get 5 for seleted Movie Series data for home banner
const getFiveHomeBanner = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.movieSeries.findMany({
        where: {
            isDeleted: false,
        },
        take: 7,
        orderBy: {
            createdAt: "desc",
        },
        select: {
            id: true,
            title: true,
            posterUrl: true,
            description: true,
            releaseYear: true,
            genre: true,
            cast: true,
            rating: true,
        },
    });
    return result;
});
//Get 5 top highest rated Movie Series data for home page
const getFiveHighestRated = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.movieSeries.findMany({
        where: {
            isDeleted: false,
            rating: { gt: 6.5 },
        },
        take: 7,
        orderBy: {
            rating: "desc",
        },
        select: {
            id: true,
            title: true,
            posterUrl: true,
            releaseYear: true,
            rating: true,
        },
    });
    return result;
});
//Get 5 top highest views Movie Series data for home page
const getFiveHighlyViewed = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.movieSeries.findMany({
        where: {
            isDeleted: false,
        },
        take: 7,
        orderBy: {
            viewCount: "desc",
        },
        select: {
            id: true,
            title: true,
            posterUrl: true,
            releaseYear: true,
            rating: true,
        },
    });
    return result;
});
//Get 5 admin selected Movie Series data for home page
const getFiveAdminSelected = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.movieSeries.findMany({
        where: {
            isDeleted: false,
            markByAdmin: true,
        },
        take: 7,
        select: {
            id: true,
            title: true,
            posterUrl: true,
            releaseYear: true,
            rating: true,
        },
    });
    return result;
});
//Get single Movie Series data by id for public
const getSinglePublic = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const foundMovieSeries = yield prisma_1.prisma.movieSeries.findUnique({
        where: {
            id,
            isDeleted: false,
        },
        select: {
            id: true,
            title: true,
            posterUrl: true,
            releaseYear: true,
            genre: true,
            cast: true,
            rating: true,
            viewCount: true,
            description: true,
            director: true,
            price: true,
            priceType: true,
            discount: true,
            streamingPlatform: true,
        },
    });
    if (!foundMovieSeries)
        throw new appError_1.default(http_status_1.default.NOT_FOUND, "Media not found");
    //Increase view count
    yield prisma_1.prisma.movieSeries.update({
        where: {
            id,
        },
        data: {
            viewCount: foundMovieSeries.viewCount + 1,
        },
    });
    return foundMovieSeries;
});
exports.MovieSeriesService = {
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
