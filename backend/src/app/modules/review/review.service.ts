import { IPagination } from "../../types";
import { paginationHelper } from "../../utils/paginationHealper";
import { prisma } from "../../utils/prisma";
import { ReviewStatus } from "../../../../generated/prisma";
import AppError from "../../middleWares/errorHandler/appError";
import httpStatus from "http-status";

//get all pending reviews for admin
const getAllPending = async (pagination: IPagination): Promise<any> => {
  const { page, take, skip, orderBy } = paginationHelper(pagination);

  const result = await prisma.review.findMany({
    where: {
      isDeleted: false,
    },
    skip,
    take,
    orderBy,
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
          profilePhoto: true,
        },
      },
    },
  });

  const total = await prisma.review.count({
    where: {
      status: ReviewStatus.pending,
    },
  });

  return {
    meta: {
      page,
      limit: take,
      total,
    },
    data: result,
  };
};

//approve one by id
const approveOne = async (id: string): Promise<any> => {
  if (!id) throw new AppError(httpStatus.BAD_REQUEST, "Id not found");

  const foundReview = await prisma.review.findUnique({
    where: {
      id,
    },
  });

  if (!foundReview)
    throw new AppError(httpStatus.NOT_FOUND, "Review not found");

  const result = await prisma.review.update({
    where: {
      id,
    },
    data: {
      status: ReviewStatus.approved,
    },
  });

  //get all the approved isDeleted:false reviews of this movie series and take their average rating to update the movie series rating

  const foundMedia = await prisma.movieSeries.findUnique({
    where: {
      id: foundReview.movieSeriesId,
    },
    select: {
      rating: true,
    },
  });

  if (!foundMedia) throw new AppError(httpStatus.NOT_FOUND, "Media not found");

  const { _avg, _count } = await prisma.review.aggregate({
    where: {
      movieSeriesId: foundReview.movieSeriesId,
      status: ReviewStatus.approved,
      isDeleted: false,
    },
    _avg: {
      rating: true, // Calculate the average of the `rating` field
    },
    _count: {
      rating: true, // Count the number of reviews to check if any exist
    },
  });

  let averageRating = _avg.rating || foundMedia.rating;
  const foundAvgRating = _avg.rating || 0;
  // If no approved reviews are found, do not update the movie series rating
  if (_count.rating === 0) return null;

  if (_count.rating === 1)
    averageRating = (foundAvgRating + foundMedia.rating) / 2;
  if (_count.rating > 1) averageRating = averageRating;

  // Update the movie series rating
  const updateRating = await prisma.movieSeries.update({
    where: { id: foundReview.movieSeriesId },
    data: { rating: averageRating },
  });

  return null;
};

//unpublish one by id
const unpublishOne = async (id: string): Promise<any> => {
  if (!id) throw new AppError(httpStatus.BAD_REQUEST, "Id not found");

  const foundReview = await prisma.review.findUnique({
    where: {
      id,
    },
  });

  if (!foundReview)
    throw new AppError(httpStatus.NOT_FOUND, "Review not found");

  const result = await prisma.review.update({
    where: {
      id,
    },
    data: {
      status: ReviewStatus.unpublished,
    },
  });

  return null;
};

//remove one by id
const removeOne = async (id: string): Promise<any> => {
  if (!id) throw new AppError(httpStatus.BAD_REQUEST, "Id not found");

  const foundReview = await prisma.review.findUnique({
    where: {
      id,
    },
  });

  if (!foundReview)
    throw new AppError(httpStatus.NOT_FOUND, "Review not found");

  const result = await prisma.review.update({
    where: {
      id,
    },
    data: {
      isDeleted: true,
    },
  });

  return null;
};
export const ReviewService = {
  getAllPending,
  approveOne,
  unpublishOne,
  removeOne,
};
