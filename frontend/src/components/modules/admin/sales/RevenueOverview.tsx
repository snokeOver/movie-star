"use client";

import {
  Bar,
  BarChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Cell,
} from "recharts";
import type { DateRange } from "react-day-picker";
import { isWithinInterval, parseISO } from "date-fns";

// Sample data for multiple movies
const allData = [
  { name: "Movie A", total: 520, date: "2025-04-01" },
  { name: "Movie B", total: 350, date: "2025-04-01" },
  { name: "Movie C", total: 280, date: "2025-04-01" },
  { name: "Movie D", total: 190, date: "2025-04-01" },
  { name: "Movie E", total: 410, date: "2025-04-01" },
  { name: "Movie A", total: 480, date: "2025-04-08" },
  { name: "Movie B", total: 320, date: "2025-04-08" },
  { name: "Movie C", total: 250, date: "2025-04-08" },
  { name: "Movie D", total: 210, date: "2025-04-08" },
  { name: "Movie E", total: 380, date: "2025-04-08" },
];

// Colors for the bars
const COLORS = ["#8b5cf6", "#6366f1", "#ec4899", "#f59e0b", "#10b981"];

// Process data to get totals by movie
const processData = (data: typeof allData, dateRange?: DateRange) => {
  // Filter by date range if provided
  const filteredData =
    dateRange?.from && dateRange?.to
      ? data.filter((item) => {
          const itemDate = parseISO(item.date);
          return isWithinInterval(itemDate, {
            start: dateRange.from!,
            end: dateRange.to!,
          });
        })
      : data;

  // Group by movie name and sum totals
  const movieTotals = filteredData.reduce((acc, item) => {
    const existingMovie = acc.find((m) => m.name === item.name);
    if (existingMovie) {
      existingMovie.total += item.total;
    } else {
      acc.push({ name: item.name, total: item.total });
    }
    return acc;
  }, [] as { name: string; total: number }[]);

  // Sort by total revenue (descending)
  return movieTotals.sort((a, b) => b.total - a.total);
};

interface RevenueOverviewProps {
  dateRange?: DateRange;
}

export function RevenueOverview({ dateRange }: RevenueOverviewProps) {
  const data = processData(allData, dateRange);

  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart
        data={data}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <XAxis
          dataKey="name"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `$${value}`}
        />
        <Tooltip
          formatter={(value) => [`$${value}`, "Revenue"]}
          labelFormatter={(label) => `Title: ${label}`}
          contentStyle={{
            backgroundColor: "hsl(var(--background))",
            borderColor: "hsl(var(--border))",
            borderRadius: "8px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          }}
        />
        <Legend />
        <Bar dataKey="total" name="Revenue" radius={[8, 8, 0, 0]}>
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}
