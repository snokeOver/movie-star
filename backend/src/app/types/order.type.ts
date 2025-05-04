import { PaymentStatus, PriceType } from "../../../generated/prisma";

export interface IOrder extends Document {
  id: string;
  customerName: string;
  productName: string;
  purchaseType: PriceType;
  totalAmount: number;
  paymentStatus: PaymentStatus;
  paymentMethod: "Card";
  discount: number;
  createdAt?: Date;
  updatedAt?: Date;
}
