import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ISalesAndRentalsByTypeList } from "@/types";
import { ArrowUpRight, DollarSign, Film } from "lucide-react";
import React from "react";

const SalesOverview = ({ data }: { data: ISalesAndRentalsByTypeList }) => {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <Card className="overflow-hidden border-none shadow-md  text-white">
        <CardHeader className="pb-2">
          <CardTitle className=" mt-3 text-sm font-medium text-white/80">
            Total Revenue
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div>
              <div className="text-3xl font-bold">
                $ {data[0]._sum.price + data[1]._sum.price}
              </div>
              <p className="text-xs text-white/70 mt-1">
                From $
                {data[0]._count.purchaseType + data[1]._count.purchaseType}{" "}
                purchases
              </p>
            </div>
            <div className="rounded-full bg-white/20 p-3">
              <DollarSign className="h-6 w-6" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-xs">
            <span className="flex items-center text-emerald-300">
              <ArrowUpRight className="mr-1 h-3 w-3" />
              12%
            </span>
            <span className="ml-1 text-white/70">from previous period</span>
          </div>
        </CardContent>
      </Card>

      <Card className="overflow-hidden border-none shadow-md">
        <CardHeader className="pb-2">
          <CardTitle className=" mt-3 text-sm font-medium text-white/80">
            Total Transactions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div>
              <div className="text-3xl font-bold">
                {data[0]._count.purchaseType + data[1]._count.purchaseType}
              </div>
              <p className="text-xs text-white/70 mt-1">
                Purchases and rentals
              </p>
            </div>
            <div className="rounded-full bg-white/20 p-3">
              <Film className="h-6 w-6" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-xs">
            <span className="flex items-center text-emerald-300">
              <ArrowUpRight className="mr-1 h-3 w-3" />
              8%
            </span>
            <span className="ml-1 text-white/70">from previous period</span>
          </div>
        </CardContent>
      </Card>

      <Card className="overflow-hidden border-none shadow-md b">
        <CardHeader className="pb-2">
          <CardTitle className=" mt-3 text-sm font-medium text-white/80">
            Avg. Transaction
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div>
              <div className="text-3xl font-bold">
                $
                {(
                  (data[0]._sum.price + data[1]._sum.price) /
                  (data[0]._count.purchaseType + data[1]._count.purchaseType)
                ).toFixed(2)}
              </div>
              <p className="text-xs text-white/70 mt-1">Per transaction</p>
            </div>
            <div className="rounded-full bg-white/20 p-3">
              <Film className="h-6 w-6" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-xs">
            <span className="flex items-center text-emerald-300">
              <ArrowUpRight className="mr-1 h-3 w-3" />
              5%
            </span>
            <span className="ml-1 text-white/70">from previous period</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SalesOverview;
