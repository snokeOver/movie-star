"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.reviewRoutes = void 0;
const express_1 = __importDefault(require("express"));
const auth_1 = __importDefault(require("../../middleWares/auth"));
const prisma_1 = require("../../../../generated/prisma");
const review_controller_1 = require("./review.controller");
const router = express_1.default.Router();
router.get("/pending", (0, auth_1.default)(prisma_1.UserRole.s_admin, prisma_1.UserRole.admin), review_controller_1.ReviewController.getAllPending);
router.post("/pending/:id", (0, auth_1.default)(prisma_1.UserRole.s_admin, prisma_1.UserRole.admin), review_controller_1.ReviewController.approveOne);
router.patch("/pending/:id", (0, auth_1.default)(prisma_1.UserRole.s_admin, prisma_1.UserRole.admin), review_controller_1.ReviewController.unpublishOne);
router.delete("/pending/:id", (0, auth_1.default)(prisma_1.UserRole.s_admin, prisma_1.UserRole.admin), review_controller_1.ReviewController.removeOne);
exports.reviewRoutes = router;
