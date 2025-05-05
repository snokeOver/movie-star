import { MovieLike, Review } from "../../../../generated/prisma";
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

export const UserService = {
  createReview,
  createMediaLike,
};
