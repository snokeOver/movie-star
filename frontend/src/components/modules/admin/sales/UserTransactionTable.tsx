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
import { ITransactionSchema } from "@/types";

interface UserTransactionsTableProps {
  dateRange?: DateRange;
  data: ITransactionSchema[];
}

export function UserTransactionsTable({
  data,
  dateRange,
}: UserTransactionsTableProps) {
  const filteredTransactions = useMemo(() => {
    let filtered = [...data];

    // Filter by date range if provided
    if (dateRange?.from && dateRange?.to) {
      filtered = filtered.filter((transaction) => {
        const transactionDate = parseISO(transaction.createdAt);
        return isWithinInterval(transactionDate, {
          start: dateRange.from!,
          end: dateRange.to!,
        });
      });
    }

    return filtered;
  }, [dateRange]);

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow className="bg-slate-50 dark:bg-slate-800">
            <TableHead className="font-medium">Tx ID</TableHead>
            <TableHead className="font-medium">User</TableHead>

            <TableHead className="font-medium">Status</TableHead>
            <TableHead className="font-medium">Price</TableHead>
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
                <TableCell>...{transaction.transactionId.slice(20)}</TableCell>
                <TableCell className="text-sm">
                  {transaction.user.email}
                </TableCell>

                <TableCell>
                  <Badge
                    variant="outline"
                    className={
                      transaction.status === "successful"
                        ? "border-muted/20 bg-muted/50 text-primary "
                        : "border-amber-200 bg-amber-50 text-amber-700 hover:bg-amber-100 dark:border-amber-800 dark:bg-amber-950 dark:text-amber-400"
                    }
                  >
                    {transaction.status}
                  </Badge>
                </TableCell>
                <TableCell className="font-medium">
                  ${transaction.amount.toFixed(2)}
                </TableCell>
                <TableCell className="text-sm text-muted-foreground">
                  {format(new Date(transaction.createdAt), "MMM dd, yyyy")}
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={5} className="h-24 text-center">
                No user transactions found for the selected date range.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
