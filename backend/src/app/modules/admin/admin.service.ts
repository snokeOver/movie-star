import { ReviewStatus, UserStatus } from "../../../../generated/prisma";

import { prisma } from "../../utils/prisma";

//Get aggregated statistics on reviews
const aggregatedStatistics = async () => {
  // 1. Most-reviewed titles (top 5 movies/series with the most reviews)
  const mostReviewedTitles = await prisma.movieSeries.findMany({
    take: 5, // Get top 5 most-reviewed titles
    orderBy: {
      reviews: {
        _count: "desc", // Sort by the count of reviews
      },
    },
    select: {
      id: true,
      title: true,
      _count: {
        select: {
          reviews: true, // Get the count of reviews
        },
      },
    },
  });

  // 2. Top-rated titles (top 5 movies/series with the highest average rating)
  const topRatedTitles = await prisma.movieSeries.findMany({
    take: 5, // Get top 5 highest-rated titles
    orderBy: {
      rating: "desc", // Sort by the rating field
    },
    select: {
      id: true,
      title: true,
      rating: true, // Get the current rating (average)
    },
  });

  // 3. User activity: Count of reviews, comments, likes, interactions
  const userActivity = await prisma.$transaction([
    // Count number of reviews
    prisma.review.count(),
    // Count number of comments
    prisma.comment.count(),
    // Count number of likes for movies
    prisma.movieLike.count(),
    // Count number of likes for reviews
    prisma.reviewLike.count(),
    prisma.user.count({
      where: {
        status: UserStatus.active,
      },
    }),
  ]);

  const [
    reviewCount,
    commentCount,
    movieLikeCount,
    reviewLikeCount,
    userCount,
  ] = userActivity;

  // 4. Pending review count
  const pendingReviewCount = await prisma.review.count({
    where: {
      status: "pending", // Count reviews that are pending approval
    },
  });

  // 5. pending reviews last five

  const pendingReviews = await prisma.review.findMany({
    where: {
      status: ReviewStatus.pending,
    },
    select: {
      id: true,
      writtenReview: true,
      status: true,
      isSpoiler: true,
      createdAt: true,
      user: {
        select: {
          id: true,
          name: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
    take: 5,
  });

  // Aggregated statistics object
  return {
    mostReviewedTitles,
    topRatedTitles,
    userActivity: {
      reviewCount,
      commentCount,
      movieLikeCount,
      reviewLikeCount,
      userCount,
    },
    pendingReviewCount,
    pendingReviews,
  };
};

//Get the sales history
const getSalesHistory = async (start: string, end: string) => {
  const startDate = new Date(start);
  let endDate = new Date("2025-05-08T18:00:00.000Z");
  endDate.setDate(endDate.getDate() + 1);

  // 1. Total Purchases and Rentals for the specific period
  const salesAndRentalsByType = await prisma.purchaseRentHistory.groupBy({
    by: ["purchaseType"], // Group by purchaseType (buy or rent)
    where: {
      purchaseDate: {
        gte: startDate,
        lte: endDate, // Filter by date range
      },
    },
    _sum: {
      price: true, // Calculate the sum of price for each purchase type (buy or rent)
    },
    _count: {
      purchaseType: true, // Count the number of purchases and rentals
    },
  });

  // 2. History of all transactions with payment status
  const allTransactions = await prisma.paymentTransaction.findMany({
    where: {
      createdAt: {
        gte: startDate,
        lte: endDate, // Filter by date range
      },
    },
    select: {
      transactionId: true,
      amount: true,
      status: true,
      paymentMethod: true,
      createdAt: true,

      user: {
        select: {
          email: true,
        },
      },
    },
  });

  // 3. User transactions: Purchase and rental history for each user
  const userTransactions = await prisma.purchaseRentHistory.findMany({
    where: {
      purchaseDate: {
        gte: startDate,
        lte: endDate, // Filter by date range
      },
    },
    select: {
      userId: true,
      movieSeriesId: true,
      price: true,
      purchaseType: true, // Buy or rent
      purchaseDate: true,
      movieSeries: {
        select: {
          title: true,
        },
      },
      user: {
        select: {
          email: true,
        },
      },
    },
  });

  return {
    salesAndRentalsByType,
    allTransactions,
    userTransactions,
  };
};

export const AdminService = {
  aggregatedStatistics,
  getSalesHistory,
};
