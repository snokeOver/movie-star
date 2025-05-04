import AppError from "../../middleWares/errorHandler/appError";
import httpStatus from "http-status";
import Stripe from "stripe";
import config from "../../config";
import { ICreateSessionPayload } from "./payment.interface";
import { PaymentUtil } from "./payment.util";

const stripe = new Stripe(config.stripe_secret_key);

//handle stripe webhook
const handleStripeWebhook = async (event: Stripe.Event) => {
  if (!event) {
    throw new AppError(httpStatus.BAD_REQUEST, "Invalid webhook payload");
  }

  switch (event.type) {
    case "checkout.session.completed":
      const session = event.data.object as Stripe.Checkout.Session;

      await PaymentUtil.handleCheckoutSessionSuccess(session);

      break;

    case "payment_intent.succeeded":
      const paymentIntent = event.data.object as Stripe.PaymentIntent;

      break;

    default:
    // console.log(`Unhandled event type: ${event.type}`);
  }
};

//create session for payment
const createSession = async (payload: ICreateSessionPayload) => {
  if (!payload) {
    throw new AppError(httpStatus.BAD_REQUEST, "Invalid payload");
  }

  const {
    price,
    customerEmail,
    customerId,
    productId,
    productName,
    success_url,
    cancel_url,
    purchaseType,
  } = payload;

  const session = await stripe.checkout.sessions.create({
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
    },
  });

  return { url: session.url, id: session.id };
};

export const PaymentService = {
  createSession,
  handleStripeWebhook,
};
