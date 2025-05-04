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
const jsonwebtoken_1 = require("jsonwebtoken");
const config_1 = __importDefault(require("../config"));
const http_status_1 = __importDefault(require("http-status"));
const prisma_1 = require("../../../generated/prisma");
const tryCatchAsync_1 = require("../utils/tryCatchAsync");
const appError_1 = __importDefault(require("./errorHandler/appError"));
const jwtToken_1 = require("../utils/jwtToken");
const prisma_2 = require("../utils/prisma");
const auth = (...requiredRoles) => {
    return (0, tryCatchAsync_1.tryCatchAsync)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        const token = req.headers.authorization;
        if (!token)
            throw new appError_1.default(http_status_1.default.UNAUTHORIZED, "You are not authorized!");
        try {
            const decoded = (0, jwtToken_1.verifyToken)(token, config_1.default.jwt.jwt_access_secret);
            const { role, email } = decoded;
            const user = yield prisma_2.prisma.user.findUnique({
                where: {
                    email,
                    status: {
                        in: [prisma_1.UserStatus.active, prisma_1.UserStatus.deactive],
                    },
                },
            });
            if (!user)
                throw new appError_1.default(http_status_1.default.NOT_FOUND, "This user is not found!");
            if (requiredRoles && !requiredRoles.includes(role)) {
                throw new appError_1.default(http_status_1.default.UNAUTHORIZED, "You are not authorized!");
            }
            req.user = decoded;
            next();
        }
        catch (error) {
            if (error instanceof jsonwebtoken_1.TokenExpiredError) {
                return next(new appError_1.default(http_status_1.default.UNAUTHORIZED, "Token has expired! Please login again."));
            }
            return next(new appError_1.default(http_status_1.default.UNAUTHORIZED, error.message));
        }
    }));
};
exports.default = auth;
