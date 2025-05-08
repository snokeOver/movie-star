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
