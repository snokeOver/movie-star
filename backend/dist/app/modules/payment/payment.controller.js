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
exports.PaymentController = void 0;
const payment_service_1 = require("./payment.service");
const http_status_1 = __importDefault(require("http-status"));
const sendResponse_1 = require("../../utils/sendResponse");
const tryCatchAsync_1 = require("../../utils/tryCatchAsync");
const createSession = (0, tryCatchAsync_1.tryCatchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield payment_service_1.PaymentService.createSession(req.body);
    (0, sendResponse_1.sendResponse)({
        res,
        sendData: {
            statusCode: http_status_1.default.OK,
            success: true,
            message: "Pyment session created successfully",
            data: result,
        },
    });
}));
exports.PaymentController = {
    createSession,
};
