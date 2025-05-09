"use client";

import {
  Activity,
  Film,
  MessageSquare,
  Star,
  ThumbsUp,
  Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  Area,
  AreaChart,
} from "recharts";
import PendingTable from "@/components/modules/admin/dashboard/PendingTable";
import { useStatisticsQuery } from "@/hooks/queries/useStatisticsQuery";
import LoadingSection from "@/components/shared/core/loading-skeleton/LoadingSection";

export interface IPendingReview {
  id: string;
  writtenReview: string;
  status: string;
  isSpoiler: boolean;
  createdAt: Date;
  user: {
    id: string;
    name: string;
  };
}

export interface IMostReviewedMovie {
  id: string;
  title: string;
  _count: {
    reviews: number;
  };
}

export interface ITopRatedMovie {
  id: string;
  title: string;
  rating: number;
}

export interface IDashboardData {
  mostReviewedTitles: IMostReviewedMovie[];
  topRatedTitles: ITopRatedMovie[];
  userActivity: {
    reviewCount: number;
    commentCount: number;
    movieLikeCount: number;
    reviewLikeCount: number;
    userCount: number;
  };
  pendingReviewCount: number;
  pendingReviews: IPendingReview[];
}

export default function AdminDashboard() {
  const { data: dashboardData, isLoading } = useStatisticsQuery();
  // Format data for charts
  const mostReviewedChartData = dashboardData?.mostReviewedTitles?.map(
    (movie: IMostReviewedMovie) => ({
      name: movie.title,
      reviews: movie._count.reviews,
    })
  );

  const topRatedChartData = dashboardData?.topRatedTitles?.map(
    (movie: ITopRatedMovie) => ({
      name: movie.title,
      rating: movie.rating,
    })
  );

  console.log(dashboardData?.pendingReviews);

  const pendingReviews = dashboardData?.pendingReviews?.map(
    (review: IPendingReview) => ({
      id: review.id,
      title: review.writtenReview,
      user: review.user.name,
      submitted: review.createdAt,
      status: review.status,
    })
  );

  if (isLoading) return <LoadingSection />;
  if (!dashboardData) return null;

  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex-1 space-y-6 p-4 md:p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Admin Dashboard</h2>
          <div className="flex items-center space-x-2">
            <Button>Download Report</Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium mt-2">
                Total Reviews
              </CardTitle>
              <Film className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {dashboardData.userActivity.reviewCount}
              </div>
              <p className="text-xs text-muted-foreground">
                +{dashboardData.pendingReviewCount} pending
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium mt-2">
                Comments
              </CardTitle>
              <MessageSquare className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {dashboardData.userActivity.commentCount}
              </div>
              <p className="text-xs text-muted-foreground">
                +12.3% from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium mt-2">Likes</CardTitle>
              <ThumbsUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {dashboardData.userActivity.movieLikeCount +
                  dashboardData.userActivity.reviewLikeCount}
              </div>
              <p className="text-xs text-muted-foreground">
                {dashboardData.userActivity.movieLikeCount} movies,{" "}
                {dashboardData.userActivity.reviewLikeCount} reviews
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium mt-2">
                Active Users
              </CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {dashboardData.userActivity.userCount}
              </div>
              <p className="text-xs text-muted-foreground">
                +201 since last week
              </p>
            </CardContent>
          </Card>
        </div>

        {/* User Activity Analytics */}
        <Card className="p-6">
          <CardHeader>
            <CardTitle>User Activity Analytics</CardTitle>
            <CardDescription>
              Detailed breakdown of user engagement metrics
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Activity className="h-5 w-5 text-muted-foreground" />
                    <span className="text-sm font-medium">Total Activity</span>
                  </div>
                  <span className="font-bold">
                    {dashboardData.userActivity.reviewCount +
                      dashboardData.userActivity.commentCount +
                      dashboardData.userActivity.movieLikeCount +
                      dashboardData.userActivity.reviewLikeCount}
                  </span>
                </div>
                <div className="h-2 w-full rounded-full bg-muted">
                  <div
                    className="h-full w-full rounded-full bg-primary"
                    style={{ width: "100%" }}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Star className="h-5 w-5 text-muted-foreground" />
                    <span className="text-sm font-medium">Reviews</span>
                  </div>
                  <span className="font-bold">
                    {dashboardData.userActivity.reviewCount}
                  </span>
                </div>
                <div className="h-2 w-full rounded-full bg-muted">
                  <div
                    className="h-full rounded-full bg-green-500"
                    style={{
                      width: `${
                        (dashboardData.userActivity.reviewCount /
                          (dashboardData.userActivity.reviewCount +
                            dashboardData.userActivity.commentCount +
                            dashboardData.userActivity.movieLikeCount +
                            dashboardData.userActivity.reviewLikeCount)) *
                        100
                      }%`,
                    }}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <MessageSquare className="h-5 w-5 text-muted-foreground" />
                    <span className="text-sm font-medium">Comments</span>
                  </div>
                  <span className="font-bold">
                    {dashboardData.userActivity.commentCount}
                  </span>
                </div>
                <div className="h-2 w-full rounded-full bg-muted">
                  <div
                    className="h-full rounded-full bg-blue-500"
                    style={{
                      width: `${
                        (dashboardData.userActivity.commentCount /
                          (dashboardData.userActivity.reviewCount +
                            dashboardData.userActivity.commentCount +
                            dashboardData.userActivity.movieLikeCount +
                            dashboardData.userActivity.reviewLikeCount)) *
                        100
                      }%`,
                    }}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <ThumbsUp className="h-5 w-5 text-muted-foreground" />
                    <span className="text-sm font-medium">Likes</span>
                  </div>
                  <span className="font-bold">
                    {dashboardData.userActivity.movieLikeCount +
                      dashboardData.userActivity.reviewLikeCount}
                  </span>
                </div>
                <div className="h-2 w-full rounded-full bg-muted">
                  <div
                    className="h-full rounded-full bg-purple-500"
                    style={{
                      width: `${
                        ((dashboardData.userActivity.movieLikeCount +
                          dashboardData.userActivity.reviewLikeCount) /
                          (dashboardData.userActivity.reviewCount +
                            dashboardData.userActivity.commentCount +
                            dashboardData.userActivity.movieLikeCount +
                            dashboardData.userActivity.reviewLikeCount)) *
                        100
                      }%`,
                    }}
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Charts */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          <Card className="col-span-4">
            <CardHeader>
              <CardTitle className="mt-3">Most Reviewed Titles</CardTitle>
            </CardHeader>
            <CardContent className="pl-2">
              <div className="h-[350px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={mostReviewedChartData}
                    margin={{ top: 10, right: 10, left: 0, bottom: 20 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                    <YAxis tick={{ fontSize: 12 }} />
                    <Tooltip
                      content={({ active, payload, label }) => {
                        if (active && payload && payload.length) {
                          return (
                            <div className="rounded-lg border bg-background p-2 shadow-sm">
                              <div className="grid grid-cols-2 gap-2">
                                <div className="flex flex-col">
                                  <span className="text-[0.70rem] uppercase text-muted-foreground">
                                    Movie
                                  </span>
                                  <span className="font-bold text-muted-foreground">
                                    {label}
                                  </span>
                                </div>
                                <div className="flex flex-col">
                                  <span className="text-[0.70rem] uppercase text-muted-foreground">
                                    Reviews
                                  </span>
                                  <span className="font-bold">
                                    {payload[0].value}
                                  </span>
                                </div>
                              </div>
                            </div>
                          );
                        }
                        return null;
                      }}
                    />
                    <Bar
                      dataKey="reviews"
                      fill="#0ea5e9"
                      radius={[4, 4, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
          <Card className="col-span-3">
            <CardHeader>
              <CardTitle className="mt-3">Top Rated Titles</CardTitle>
              <CardDescription>
                Movies with highest average ratings
              </CardDescription>
            </CardHeader>
            <CardContent className="pl-2">
              <div className="h-[350px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={topRatedChartData}
                    margin={{ top: 10, right: 10, left: 0, bottom: 20 }}
                  >
                    <defs>
                      <linearGradient
                        id="colorRating"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="5%"
                          stopColor="#0ea5e9"
                          stopOpacity={0.8}
                        />
                        <stop
                          offset="95%"
                          stopColor="#0ea5e9"
                          stopOpacity={0.1}
                        />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                    <YAxis domain={[8, 10]} tick={{ fontSize: 12 }} />
                    <Tooltip
                      content={({ active, payload, label }) => {
                        if (active && payload && payload.length) {
                          return (
                            <div className="rounded-lg border bg-background p-2 shadow-sm">
                              <div className="grid grid-cols-2 gap-2">
                                <div className="flex flex-col">
                                  <span className="text-[0.70rem] uppercase text-muted-foreground">
                                    Movie
                                  </span>
                                  <span className="font-bold text-muted-foreground">
                                    {label}
                                  </span>
                                </div>
                                <div className="flex flex-col">
                                  <span className="text-[0.70rem] uppercase text-muted-foreground">
                                    Rating
                                  </span>
                                  <span className="font-bold">
                                    {payload[0].value}
                                  </span>
                                </div>
                              </div>
                            </div>
                          );
                        }
                        return null;
                      }}
                    />
                    <Area
                      type="monotone"
                      dataKey="rating"
                      stroke="#0ea5e9"
                      fillOpacity={1}
                      fill="url(#colorRating)"
                    />
                    <Line
                      type="monotone"
                      dataKey="rating"
                      stroke="#0ea5e9"
                      strokeWidth={2}
                      dot={{ fill: "#0ea5e9", strokeWidth: 2 }}
                      activeDot={{ r: 6, fill: "#0ea5e9", stroke: "#fff" }}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Pending Reviews */}
        <PendingTable
          pendingReviews={pendingReviews}
          totalPending={dashboardData.pendingReviewCount}
        />
      </div>
    </div>
  );
}
