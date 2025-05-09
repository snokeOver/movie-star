"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { format, subDays } from "date-fns";
import type { DateRange } from "react-day-picker";
import { DateRangePicker } from "@/components/modules/admin/sales/DateRangePicker";
import { TransactionsTable } from "@/components/modules/admin/sales/TransactionTable";
import {
  PurchaseTypeChart,
  SalesPieChart,
} from "@/components/modules/admin/sales/PurchaseTypeChart";
import { UserTransactionsTable } from "@/components/modules/admin/sales/UserTransactionTable";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useSalesQuery } from "@/hooks/queries/useSalesQuery";
import LoadingSection from "@/components/shared/core/loading-skeleton/LoadingSection";
import { ISalesData } from "@/types";
import SalesOverview from "@/components/modules/admin/sales/SalesOverview";

export default function DashboardPage() {
  // Default date range: last 30 days
  const [date, setDate] = useState<DateRange | undefined>({
    from: subDays(new Date(), 30),
    to: new Date(),
  });

  const { data, isLoading } = useSalesQuery(
    format(date?.from as Date, "LLL dd, y"),
    format(date?.to as Date, "LLL dd, y")
  );

  // console.log(salesData);
  const salesData: ISalesData = data;

  // console.log(salesData?.allTransactions);

  const formattedDateRange =
    date?.from && date?.to
      ? `${format(date.from, "LLL dd, y")} - ${format(date.to, "LLL dd, y")}`
      : "Select a date range";

  if (isLoading) return <LoadingSection />;
  if (!salesData) return null;
  return (
    <div className="flex min-h-screen w-full flex-col ">
      <div className="flex-1 space-y-6 p-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">
              Analytics Overview
            </h1>
            <p className="text-muted-foreground mt-1">
              Monitor your platform's performance and revenue
            </p>
          </div>
          <DateRangePicker date={date} setDate={setDate} />
        </div>

        <div className="text-sm text-muted-foreground">
          Showing data for:{" "}
          <span className="font-medium">{formattedDateRange}</span>
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full max-w-md grid-cols-3">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="transactions">Transactions</TabsTrigger>
            <TabsTrigger value="users">Users</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Sales overview 3 card */}
            <SalesOverview data={salesData.salesAndRentalsByType} />

            <div className="grid grid-cols-3 gap-8">
              {/* Recent transactions */}
              <Card className="col-span-2 border-none shadow-md">
                <CardHeader className="pb-2">
                  <CardTitle className="mt-3">Recent Transactions</CardTitle>
                  <CardDescription>
                    Latest activity on the platform
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <TransactionsTable
                    data={salesData.userTransactions}
                    limit={5}
                    dateRange={date}
                  />
                </CardContent>
              </Card>
              <div>
                <SalesPieChart data={salesData.salesAndRentalsByType} />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="transactions" className="space-y-6">
            <Card className="border-none shadow-md">
              <CardHeader>
                <CardTitle>All Transactions</CardTitle>
                <CardDescription>
                  Complete list of all transactions on the platform
                </CardDescription>
              </CardHeader>
              <CardContent>
                <UserTransactionsTable
                  data={salesData.allTransactions}
                  dateRange={date}
                />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="users" className="space-y-6">
            <Card className="border-none shadow-md">
              <CardHeader>
                <CardTitle>User Transactions</CardTitle>
                <CardDescription>
                  Detailed view of user purchase activity
                </CardDescription>
              </CardHeader>
              <CardContent>
                <TransactionsTable
                  data={salesData.userTransactions}
                  dateRange={date}
                />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
