import { PriceType } from "../../../../generated/prisma";

export interface ICreateSessionPayload {
  price: number;
  success_url: string;
  cancel_url: string;
  customerEmail: string;
  purchaseType: PriceType;
  customerId: string;
  productId: string;
  productName: string;
}
