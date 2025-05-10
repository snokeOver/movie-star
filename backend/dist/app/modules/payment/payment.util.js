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
exports.PaymentUtil = void 0;
const appError_1 = __importDefault(require("../../middleWares/errorHandler/appError"));
const http_status_1 = __importDefault(require("http-status"));
const prisma_1 = require("../../utils/prisma");
const prisma_2 = require("../../../../generated/prisma");
const emailSender_1 = require("../../utils/emailSender");
const generateOrderInvoicePDF_1 = require("../../utils/generateOrderInvoicePDF");
const handleCheckoutSessionSuccess = (session) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    if (!session || !session.metadata) {
        throw new appError_1.default(http_status_1.default.BAD_REQUEST, "Invalid checkout session payload");
    }
    const userId = session.metadata.userId;
    const customerEmail = session.metadata.email;
    const movieSeriesId = session.metadata.mediaId;
    const purchaseType = session.metadata.priceType;
    const transactionId = session.payment_intent;
    const amountTotal = session.amount_total ? session.amount_total / 100 : 0;
    const customerName = (_a = session === null || session === void 0 ? void 0 : session.customer_details) === null || _a === void 0 ? void 0 : _a.name;
    const movieName = session.metadata.productName || "Unknown";
    yield prisma_1.prisma.$transaction((tx) => __awaiter(void 0, void 0, void 0, function* () {
        // 1. Create a PurchaseRentHistory record
        const purchaseRentHistory = yield tx.purchaseRentHistory.create({
            data: {
                userId,
                movieSeriesId,
                purchaseType,
                paymentStatus: prisma_2.PaymentStatus.successful,
                price: amountTotal,
                transactionId,
                isEmailSent: true,
                accessExpiry: purchaseType === "rent"
                    ? new Date(new Date().setMonth(new Date().getMonth() + 1))
                    : null,
            },
        });
        if (!purchaseRentHistory) {
            throw new appError_1.default(http_status_1.default.BAD_REQUEST, "Failed to create purchaseRentHistory");
        }
        // 2. Create a PaymentTransaction record
        const paymentTransaction = yield tx.paymentTransaction.create({
            data: {
                userId,
                amount: amountTotal,
                transactionId,
                status: prisma_2.PaymentStatus.successful,
            },
        });
        if (!paymentTransaction) {
            throw new appError_1.default(http_status_1.default.BAD_REQUEST, "Failed to create paymentTransaction");
        }
        const createdOrder = {
            id: transactionId,
            customerName,
            productName: movieName,
            purchaseType,
            totalAmount: amountTotal,
            paymentStatus: prisma_2.PaymentStatus.successful,
            paymentMethod: "Card",
            discount: 0,
            createdAt: new Date(),
            updatedAt: new Date(),
        };
        // 3. Send confirmation email
        const pdfBuffer = yield (0, generateOrderInvoicePDF_1.generateOrderInvoicePDF)(createdOrder);
        const attachment = {
            filename: `Invoice_${customerName}.pdf`,
            content: pdfBuffer,
            encoding: "base64", // if necessary
        };
        const emailContent = yield emailSender_1.emailSender.createEmailContent({ userName: customerName }, "orderInvoice");
        yield emailSender_1.emailSender.sendEmail(customerEmail, emailContent, "Payment Confirmed!", attachment);
        // console.log("email sent");
    }), { timeout: 10000 }); // Set the timeout to 10000 ms (10 seconds)
});
exports.PaymentUtil = {
    handleCheckoutSessionSuccess,
};
