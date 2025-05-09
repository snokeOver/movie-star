import AppError from "../../middleWares/errorHandler/appError";
import httpStatus from "http-status";

import Stripe from "stripe";

import { prisma } from "../../utils/prisma";
import { PaymentStatus, PriceType } from "../../../../generated/prisma";
import { emailSender } from "../../utils/emailSender";
import { generateOrderInvoicePDF } from "../../utils/generateOrderInvoicePDF";
import { IOrder } from "../../types";

const handleCheckoutSessionSuccess = async (
  session: Stripe.Checkout.Session
) => {
  if (!session || !session.metadata) {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      "Invalid checkout session payload"
    );
  }

  const userId = session.metadata.userId as string;
  const customerEmail = session.metadata.email as string;
  const movieSeriesId = session.metadata.mediaId as string;
  const purchaseType = session.metadata.priceType as PriceType | "rent";
  const transactionId = session.payment_intent as string;
  const amountTotal = session.amount_total ? session.amount_total / 100 : 0;
  const customerName = session?.customer_details?.name as string;

  const movieName = (session.metadata.productName as string) || "Unknown";

  await prisma.$transaction(
    async (tx) => {
      // 1. Create a PurchaseRentHistory record
      const purchaseRentHistory = await tx.purchaseRentHistory.create({
        data: {
          userId,
          movieSeriesId,
          purchaseType,
          paymentStatus: PaymentStatus.successful,
          price: amountTotal,
          transactionId,
          isEmailSent: true,
          accessExpiry:
            purchaseType === "rent"
              ? new Date(new Date().setMonth(new Date().getMonth() + 1))
              : null,
        },
      });

      if (!purchaseRentHistory) {
        throw new AppError(
          httpStatus.BAD_REQUEST,
          "Failed to create purchaseRentHistory"
        );
      }

      // 2. Create a PaymentTransaction record
      const paymentTransaction = await tx.paymentTransaction.create({
        data: {
          userId,
          amount: amountTotal,
          transactionId,
          status: PaymentStatus.successful,
        },
      });

      if (!paymentTransaction) {
        throw new AppError(
          httpStatus.BAD_REQUEST,
          "Failed to create paymentTransaction"
        );
      }

      const createdOrder: Partial<IOrder> = {
        id: transactionId,
        customerName,
        productName: movieName,
        purchaseType,
        totalAmount: amountTotal,
        paymentStatus: PaymentStatus.successful,
        paymentMethod: "Card",
        discount: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      // 3. Send confirmation email
      const pdfBuffer = await generateOrderInvoicePDF(createdOrder);

      const attachment = {
        filename: `Invoice_${customerName}.pdf`,
        content: pdfBuffer,
        encoding: "base64", // if necessary
      };

      const emailContent = await emailSender.createEmailContent(
        { userName: customerName },
        "orderInvoice"
      );

      await emailSender.sendEmail(
        customerEmail,
        emailContent,
        "Payment Confirmed!",
        attachment
      );

      // console.log("email sent");
    },
    { timeout: 10000 }
  ); // Set the timeout to 10000 ms (10 seconds)
};

export const PaymentUtil = {
  handleCheckoutSessionSuccess,
};
