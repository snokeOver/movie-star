import { MovieLike, Review, ReviewLike } from "../../../../generated/prisma";
import AppError from "../../middleWares/errorHandler/appError";
import { prisma } from "../../utils/prisma";
import httpStatus from "http-status";

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

export const UserService = {
  createReview,
  createMediaLike,
  createReviewLike,
};
