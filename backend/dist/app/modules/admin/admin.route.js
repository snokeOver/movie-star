"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminRoutes = void 0;
const express_1 = __importDefault(require("express"));
const auth_1 = __importDefault(require("../../middleWares/auth"));
const prisma_1 = require("../../../../generated/prisma");
const admin_controller_1 = require("./admin.controller");
const router = express_1.default.Router();
router.get("/statistics", (0, auth_1.default)(prisma_1.UserRole.admin, prisma_1.UserRole.s_admin), admin_controller_1.AdminController.aggregatedStatistics);
router.get("/sales", (0, auth_1.default)(prisma_1.UserRole.admin, prisma_1.UserRole.s_admin), admin_controller_1.AdminController.getSalesHistory);
exports.adminRoutes = router;
