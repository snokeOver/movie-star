"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.paymentRoutes = void 0;
const express_1 = __importDefault(require("express"));
const auth_1 = __importDefault(require("../../middleWares/auth"));
const prisma_1 = require("../../../../generated/prisma");
const payment_controller_1 = require("./payment.controller");
const validateRequest_1 = require("../../middleWares/validateRequest");
const payment_validate_1 = require("./payment.validate");
const router = express_1.default.Router();
router.post("/create-session", (0, auth_1.default)(prisma_1.UserRole.user, prisma_1.UserRole.admin), (0, validateRequest_1.validateRequest)(payment_validate_1.ValidatePayment.createSession), payment_controller_1.PaymentController.createSession);
exports.paymentRoutes = router;
