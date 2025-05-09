import { z } from "zod";

// Sales and Rentals Data
export const salesAndRentalsByTypeSchema = z.array(
  z.object({
    _sum: z.object({
      price: z.number(),
    }),
    _count: z.object({
      purchaseType: z.number(),
    }),
    purchaseType: z.enum(["buy", "rent"]), // Assuming these are the only two purchase types
  })
);

export type ISalesAndRentalsByTypeList = z.infer<
  typeof salesAndRentalsByTypeSchema
>;

// All Transactions
export const transactionSchema = z.object({
  transactionId: z.string(),
  amount: z.number(),
  status: z.enum(["successful", "failed", "pending"]), // Add other statuses if necessary
  paymentMethod: z.enum(["stripe", "paypal", "other"]), // Example payment methods
  createdAt: z.string(), // You can also use z.date() if you want to convert it to Date
  user: z.object({
    email: z.string().email(),
  }),
});

export const allTransactionsSchema = z.array(transactionSchema);
export type ITransactionSchema = z.infer<typeof transactionSchema>;

// User Transactions
const userTransactionSchema = z.object({
  userId: z.string(),
  movieSeriesId: z.string(),
  price: z.number(),
  purchaseType: z.enum(["buy", "rent"]),
  purchaseDate: z.string(), // Can be converted to Date if needed
  movieSeries: z.object({
    title: z.string(),
  }),
  user: z.object({
    email: z.string().email(),
  }),
});

export type IUserTransactionSchema = z.infer<typeof userTransactionSchema>;
export const userTransactionsSchema = z.array(userTransactionSchema);

export const salesDataSchema = z.object({
  salesAndRentalsByType: salesAndRentalsByTypeSchema,
  allTransactions: allTransactionsSchema,
  userTransactions: userTransactionsSchema,
});

// Type Inference from Zod Schema
export type ISalesData = z.infer<typeof salesDataSchema>;
