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
exports.AdminService = void 0;
const prisma_1 = require("../../../../generated/prisma");
const appError_1 = __importDefault(require("../../middleWares/errorHandler/appError"));
const paginationHealper_1 = require("../../utils/paginationHealper");
const prisma_2 = require("../../utils/prisma");
const http_status_1 = __importDefault(require("http-status"));
const admin_constant_1 = require("./admin.constant");
//Update single admin data by id
const deleteSingle = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const foundAdmin = yield prisma_2.prisma.admin.findUnique({
        where: {
            id,
            isDeleted: false,
        },
    });
    if (!foundAdmin)
        throw new appError_1.default(http_status_1.default.NOT_FOUND, "Admin not found");
    const result = yield prisma_2.prisma.$transaction((tx) => __awaiter(void 0, void 0, void 0, function* () {
        const deletedAdmin = yield tx.admin.update({
            where: {
                id,
            },
            data: {
                isDeleted: true,
            },
        });
        const deletedUser = yield tx.user.update({
            where: {
                email: deletedAdmin.email,
            },
            data: {
                status: prisma_1.UserStatus.deleted,
            },
        });
        return { deletedAdmin, deletedUser };
    }));
    return result;
});
//Update single admin data by id
const updateSingle = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const foundAdmin = yield prisma_2.prisma.admin.findUnique({
        where: {
            id,
            isDeleted: false,
        },
    });
    if (!foundAdmin)
        throw new appError_1.default(http_status_1.default.NOT_FOUND, "Admin not found");
    const result = yield prisma_2.prisma.admin.update({
        where: {
            id,
        },
        data,
    });
    return result;
});
//Get single admin data by id
const getSingle = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const foundAdmin = yield prisma_2.prisma.admin.findUnique({
        where: {
            id,
            isDeleted: false,
        },
    });
    if (!foundAdmin)
        throw new appError_1.default(http_status_1.default.NOT_FOUND, "Admin not found");
    const result = yield prisma_2.prisma.admin.findUnique({
        where: {
            id,
        },
    });
    return result;
});
//Get all admin data
const getAll = (query, pagination) => __awaiter(void 0, void 0, void 0, function* () {
    const { page, take, skip, orderBy } = (0, paginationHealper_1.paginationHelper)(pagination);
    // console.log("Pagination data:", query);
    const { searchTerm } = query, filterData = __rest(query, ["searchTerm"]);
    const searchCondition = [];
    if (query.searchTerm) {
        searchCondition.push({
            OR: admin_constant_1.adminSearchTerms.map((field) => ({
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
    const whereConditions = { AND: searchCondition };
    const result = yield prisma_2.prisma.admin.findMany({
        where: whereConditions,
        skip,
        take,
        orderBy,
    });
    const total = yield prisma_2.prisma.admin.count({
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
exports.AdminService = {
    getSingle,
    getAll,
    updateSingle,
    deleteSingle,
};
