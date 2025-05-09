"use client";

import { Label, PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { ISalesAndRentalsByTypeList } from "@/types";

const chartConfig = {
  buy: {
    label: "Buy",
    color: "#0ea5e9",
  },
  rent: {
    label: "Rent",
    color: "#ffffff",
  },
} satisfies ChartConfig;

export function SalesPieChart({ data }: { data: ISalesAndRentalsByTypeList }) {
  const chartData = [
    {
      month: "january",
      buy: data[0]?._count.purchaseType,
      rent: data[1]?._count.purchaseType,
    },
  ];

  const totalVisitors = chartData[0].buy + chartData[0].rent;

  return (
    <Card className="flex flex-col border-none">
      <CardHeader className="pb-2">
        <CardTitle className=" mt-3 text-sm font-medium text-white/80">
          Buy vs Rent
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-1 items-center pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square w-full max-w-[250px]"
        >
          <RadialBarChart
            data={chartData}
            endAngle={180}
            innerRadius={80}
            outerRadius={130}
          >
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle">
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) - 16}
                          className="fill-foreground text-2xl font-bold"
                        >
                          {totalVisitors.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 4}
                          className="fill-muted-foreground"
                        >
                          Purchase
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </PolarRadiusAxis>
            <RadialBar
              dataKey="buy"
              stackId="a"
              cornerRadius={5}
              fill="var(--color-buy)"
              className="stroke-transparent stroke-2"
            />
            <RadialBar
              dataKey="rent"
              fill="var(--color-rent)"
              stackId="a"
              cornerRadius={5}
              className="stroke-transparent stroke-2"
            />
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
