"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = require("../../middleWares/validateRequest");
const auth_1 = __importDefault(require("../../middleWares/auth"));
const prisma_1 = require("../../../../generated/prisma");
const admin_controller_1 = require("./admin.controller");
const admin_validate_1 = require("./admin.validate");
const router = express_1.default.Router();
router.delete("/:id", (0, auth_1.default)(prisma_1.UserRole.admin, prisma_1.UserRole.s_admin), admin_controller_1.AdminController.deleteSingle);
router.patch("/:id", (0, auth_1.default)(prisma_1.UserRole.admin, prisma_1.UserRole.s_admin), (0, validateRequest_1.validateRequest)(admin_validate_1.ValidateAdmin.update), admin_controller_1.AdminController.updateSingle);
router.get("/:id", (0, auth_1.default)(prisma_1.UserRole.admin, prisma_1.UserRole.s_admin), admin_controller_1.AdminController.getSingle);
router.get("/", (0, auth_1.default)(prisma_1.UserRole.admin, prisma_1.UserRole.s_admin), admin_controller_1.AdminController.getAll);
exports.adminRoutes = router;
