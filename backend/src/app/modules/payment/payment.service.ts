import AppError from "../../middleWares/errorHandler/appError";
import httpStatus from "http-status";

import Stripe from "stripe";
import config from "../../config";

const stripe = new Stripe(config.stripe_secret_key);

//create session for payment
const createSession = async (payload: ICreateSessionPayload) => {
  if (!payload) {
    throw new AppError(httpStatus.BAD_REQUEST, "Invalid payload");
  }

  const {
    price,
    customerEmail,
    customerName,
    customerId,
    productId,
    productName,
    success_url,
    cancel_url,
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
          unit_amount: price * 100,
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
    },
  });

  return { url: session.url, id: session.id };
};

export const PaymentService = {
  createSession,
};
