import {
  Comment,
  MovieLike,
  Prisma,
  Review,
  ReviewLike,
  ReviewStatus,
} from "../../../../generated/prisma";
import AppError from "../../middleWares/errorHandler/appError";
import { IPagination } from "../../types";
import { prisma } from "../../utils/prisma";
import httpStatus from "http-status";
import { IAllReviews } from "./user.interface";
import { paginationHelper } from "../../utils/paginationHealper";
import { verifyToken } from "../../utils/jwtToken";
import config from "../../config";

//Create review for movie series by user
const createReview = async (payload: Review): Promise<any> => {
  if (!payload) throw new AppError(httpStatus.BAD_REQUEST, "Review not found");

  const { userId, movieSeriesId, rating, writtenReview, isSpoiler, tags } =
    payload;

  const foundReview = await prisma.review.findFirst({
    where: {
      userId,
      movieSeriesId,
    },
  });

  if (foundReview)
    throw new AppError(
      httpStatus.CONFLICT,
      "You have already given a review for this movie series"
    );

  const createdReview = await prisma.review.create({
    data: {
      userId,
      movieSeriesId,
      rating,
      writtenReview,
      isSpoiler,
      tags,
    },
  });

  return createdReview;
};

//Create like for movie series by user
const createMediaLike = async (payload: MovieLike): Promise<any> => {
  if (!payload) throw new AppError(httpStatus.BAD_REQUEST, "Payload not found");

  const { userId, movieSeriesId } = payload;

  const foundReview = await prisma.movieLike.findFirst({
    where: {
      userId,
      movieSeriesId,
    },
  });

  if (!foundReview) {
    const createdReview = await prisma.movieLike.create({
      data: {
        userId,
        movieSeriesId,
      },
    });
    return createdReview;
  }

  const updatedReview = await prisma.movieLike.update({
    where: {
      id: foundReview.id,
    },
    data: {
      isLike: !foundReview.isLike,
    },
  });

  return updatedReview;
};

//Create like for review  by user
const createReviewLike = async (payload: ReviewLike): Promise<any> => {
  if (!payload) throw new AppError(httpStatus.BAD_REQUEST, "Payload not found");

  const { userId, reviewId } = payload;

  const foundReview = await prisma.reviewLike.findFirst({
    where: {
      userId,
      reviewId,
    },
  });

  if (!foundReview) {
    const createdReview = await prisma.reviewLike.create({
      data: {
        userId,
        reviewId,
      },
    });
    return createdReview;
  }

  const updatedReview = await prisma.reviewLike.update({
    where: {
      id: foundReview.id,
    },
    data: {
      isLike: !foundReview.isLike,
    },
  });

  const foundUserReview = await prisma.review.findUnique({
    where: {
      id: reviewId,
    },
  });

  if (foundUserReview) {
    await prisma.review.update({
      where: {
        id: foundUserReview.id,
      },
      data: {
        likesCount:
          foundUserReview.likesCount + (updatedReview.isLike ? 1 : -1),
      },
    });
  }

  return updatedReview;
};

//Create comment for review  by user
const createComment = async (payload: Comment): Promise<any> => {
  if (!payload) throw new AppError(httpStatus.BAD_REQUEST, "Payload not found");

  const result = await prisma.$transaction(async (tx) => {
    const createdComment = await tx.comment.create({
      data: payload,
    });

    const foundUserReview = await tx.review.findUnique({
      where: {
        id: payload.reviewId,
      },
    });

    if (foundUserReview) {
      await tx.review.update({
        where: {
          id: foundUserReview.id,
        },
        data: {
          commentCount: foundUserReview.commentCount + 1,
        },
      });
    }

    return createdComment;
  });

  return result;
};

//Get all Reviews
const getAll = async (
  pagination: IPagination,
  movieSeriesId: string,
  token: string | undefined
): Promise<any> => {
  if (!movieSeriesId)
    throw new AppError(httpStatus.BAD_REQUEST, "Movie series id not found");

  const { page, take, skip, orderBy } = paginationHelper(pagination);

  const searchCondition: Prisma.ReviewWhereInput[] = [];

  //show only approved reviews and specific movie series
  searchCondition.push({
    status: ReviewStatus.approved,
    movieSeriesId,
  });

  const whereConditions: Prisma.ReviewWhereInput = {
    AND: searchCondition,
  };

  //Get the user id if the user is logged in
  let userId = null;
  if (token) {
    const decoded = verifyToken(token, config.jwt.jwt_access_secret as string);
    userId = decoded.userId;
  }

  const foundMedia = await prisma.movieSeries.findUnique({
    where: {
      id: movieSeriesId,
    },
    select: {
      posterUrl: true,
      title: true,
    },
  });

  if (!foundMedia) throw new AppError(httpStatus.NOT_FOUND, "Media not found");

  const result = await prisma.review.findMany({
    where: whereConditions,
    skip,
    take,
    orderBy,
    select: {
      id: true,
      rating: true,
      writtenReview: true,
      isSpoiler: true,
      tags: true,
      likesCount: true,
      commentCount: true,
      createdAt: true,
      user: {
        select: {
          id: true,
          name: true,
          profilePhoto: true,
        },
      },
      reviewLike: userId
        ? {
            where: { userId },
            select: { isLike: true },
          }
        : undefined,
      comment: {
        orderBy: {
          createdAt: "desc",
        },
        select: {
          id: true,
          content: true,
          createdAt: true,
          user: {
            select: {
              id: true,
              name: true,
              profilePhoto: true,
            },
          },
        },
      },
    },
  });

  const total = await prisma.review.count({
    where: whereConditions,
  });

  return {
    meta: {
      page,
      limit: take,
      total,
    },
    data: { result, foundMedia },
  };
};

export const UserService = {
  createReview,
  createMediaLike,
  createReviewLike,
  createComment,
  getAll,
};
