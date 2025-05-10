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
exports.PaymentService = void 0;
const appError_1 = __importDefault(require("../../middleWares/errorHandler/appError"));
const http_status_1 = __importDefault(require("http-status"));
const stripe_1 = __importDefault(require("stripe"));
const config_1 = __importDefault(require("../../config"));
const payment_util_1 = require("./payment.util");
const prisma_1 = require("../../utils/prisma");
const stripe = new stripe_1.default(config_1.default.stripe_secret_key);
//handle stripe webhook
const handleStripeWebhook = (event) => __awaiter(void 0, void 0, void 0, function* () {
    if (!event) {
        throw new appError_1.default(http_status_1.default.BAD_REQUEST, "Invalid webhook payload");
    }
    switch (event.type) {
        case "checkout.session.completed":
            const session = event.data.object;
            yield payment_util_1.PaymentUtil.handleCheckoutSessionSuccess(session);
            break;
        case "payment_intent.succeeded":
            const paymentIntent = event.data.object;
            break;
        default:
        // console.log(`Unhandled event type: ${event.type}`);
    }
});
//create session for payment
const createSession = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    if (!payload) {
        throw new appError_1.default(http_status_1.default.BAD_REQUEST, "Invalid payload");
    }
    const { price, customerEmail, customerId, productId, productName, success_url, cancel_url, purchaseType, } = payload;
    //check if already purchased
    const isPurchased = yield prisma_1.prisma.purchaseRentHistory.findFirst({
        where: {
            userId: customerId,
            movieSeriesId: productId,
        },
    });
    if (isPurchased) {
        throw new appError_1.default(http_status_1.default.CONFLICT, "Already Purchased");
    }
    const session = yield stripe.checkout.sessions.create({
        mode: "payment",
        customer_email: customerEmail,
        client_reference_id: customerId,
        line_items: [
            {
                price_data: {
                    currency: "usd",
                    product_data: {
                        name: productName,
                    },
                    unit_amount: Math.ceil(price * 100),
                },
                quantity: 1,
            },
        ],
        success_url: success_url,
        cancel_url: cancel_url,
        metadata: {
            userId: customerId,
            mediaId: productId,
            email: customerEmail,
            priceType: purchaseType,
            productName,
        },
    });
    return { url: session.url, id: session.id };
});
exports.PaymentService = {
    createSession,
    handleStripeWebhook,
};
