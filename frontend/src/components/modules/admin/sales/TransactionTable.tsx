"use client";

import { useMemo } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

import type { DateRange } from "react-day-picker";
import { format, isWithinInterval, parseISO } from "date-fns";
import { IUserTransactionSchema } from "@/types";

interface TransactionsTableProps {
  data: IUserTransactionSchema[];
  limit?: number;
  dateRange?: DateRange;
}

export function TransactionsTable({
  data,
  limit,
  dateRange,
}: TransactionsTableProps) {
  const filteredTransactions = useMemo(() => {
    let filtered = [...data];

    // Filter by date range if provided
    if (dateRange?.from && dateRange?.to) {
      filtered = filtered.filter((transaction) => {
        const transactionDate = parseISO(transaction.purchaseDate);
        return isWithinInterval(transactionDate, {
          start: dateRange.from!,
          end: dateRange.to!,
        });
      });
    }

    // Apply limit if provided
    if (limit) {
      filtered = filtered.slice(0, limit);
    }

    return filtered;
  }, [dateRange, limit]);

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow className="bg-slate-50 dark:bg-slate-800">
            <TableHead className="font-medium">Movie</TableHead>
            <TableHead className="font-medium">User</TableHead>
            <TableHead className="font-medium">Amount</TableHead>
            <TableHead className="font-medium">Type</TableHead>
            <TableHead className="font-medium">Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredTransactions.length > 0 ? (
            filteredTransactions.map((transaction, index) => (
              <TableRow
                key={index}
                className="hover:bg-slate-50 dark:hover:bg-slate-800/50"
              >
                <TableCell>{transaction.movieSeries.title}</TableCell>
                <TableCell className="text-sm">
                  {transaction.user.email}
                </TableCell>
                <TableCell className="font-medium">
                  ${transaction.price.toFixed(2)}
                </TableCell>
                <TableCell>
                  <Badge
                    variant="outline"
                    className={
                      transaction.purchaseType === "rent"
                        ? "border-emerald-200 bg-muted/50 text-emerald-700 hover:bg-emerald-100 dark:border-emerald-800 ∂ dark:text-emerald-400"
                        : "border-red-200 bg-red-50 text-primary hover:bg-red-100"
                    }
                  >
                    {transaction.purchaseType === "rent" ? "Rent" : "Buy"}
                  </Badge>
                </TableCell>
                <TableCell className="text-sm text-muted-foreground">
                  {format(new Date(transaction.purchaseDate), "MMM dd, yyyy")}
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={7} className="h-24 text-center">
                No transactions found for the selected date range.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
