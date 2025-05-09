import {
  Comment,
  MovieLike,
  Prisma,
  Review,
  ReviewLike,
  ReviewStatus,
  User,
  UserStatus,
} from "../../../../generated/prisma";
import AppError from "../../middleWares/errorHandler/appError";
import { IFile, IJwtPayload, IPagination } from "../../types";
import { prisma } from "../../utils/prisma";
import httpStatus from "http-status";
import { IAllReviews } from "./user.interface";
import { paginationHelper } from "../../utils/paginationHealper";
import { verifyToken } from "../../utils/jwtToken";
import config from "../../config";
import { fileUploader } from "../../utils/fileUploader";

//Create review for movie series by user
const createReview = async (payload: Review): Promise<any> => {
  if (!payload) throw new AppError(httpStatus.BAD_REQUEST, "Review not found");

  const { userId, movieSeriesId, rating, writtenReview, isSpoiler, tags } =
    payload;

  const foundReview = await prisma.review.findFirst({
    where: {
      userId,
      movieSeriesId,
      isDeleted: false,
    },
  });

  if (foundReview?.status === ReviewStatus.approved)
    throw new AppError(
      httpStatus.CONFLICT,
      "You have already given a review for this movie series"
    );
  if (foundReview?.status === ReviewStatus.pending)
    throw new AppError(
      httpStatus.CONFLICT,
      "You review is pending for approval"
    );
  if (foundReview?.status === ReviewStatus.unpublished)
    throw new AppError(
      httpStatus.CONFLICT,
      "Your review is not approved. You can update your review from dashboard for approval"
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

//Update review for movie series by user
const updateReview = async (payload: Review, id: string): Promise<any> => {
  if (!payload) throw new AppError(httpStatus.BAD_REQUEST, "Review not found");

  const { userId, movieSeriesId, rating, writtenReview, isSpoiler, tags } =
    payload;

  const foundReview = await prisma.review.findFirst({
    where: {
      userId,
      movieSeriesId,
      isDeleted: false,
    },
  });

  if (foundReview?.status === ReviewStatus.approved)
    throw new AppError(httpStatus.CONFLICT, "You review already approved");
  if (foundReview?.status === ReviewStatus.pending)
    throw new AppError(
      httpStatus.CONFLICT,
      "You review is pending for approval"
    );

  const updatedReview = await prisma.review.update({
    where: {
      id,
    },
    data: {
      userId,
      movieSeriesId,
      rating,
      writtenReview,
      isSpoiler,
      status: ReviewStatus.pending,
      tags,
    },
  });

  return updatedReview;
};

//Create like for movie series by user
const createMediaLike = async (payload: MovieLike): Promise<any> => {
  if (!payload) throw new AppError(httpStatus.BAD_REQUEST, "Payload not found");

  const { userId, movieSeriesId } = payload;

  const foundMovieLike = await prisma.movieLike.findFirst({
    where: {
      userId,
      movieSeriesId,
    },
  });

  if (!foundMovieLike) {
    const createdMovieLike = await prisma.movieLike.create({
      data: {
        userId,
        movieSeriesId,
        isLike: true,
      },
    });
    return createdMovieLike;
  }

  const updatedMovieLike = await prisma.movieLike.update({
    where: {
      id: foundMovieLike.id,
    },
    data: {
      isLike: !foundMovieLike.isLike,
    },
  });

  return updatedMovieLike;
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
    isDeleted: false,
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

//Get all Watchlist
const getALlWatchList = async (
  pagination: IPagination,
  user: IJwtPayload | undefined
): Promise<any> => {
  if (!user) throw new AppError(httpStatus.UNAUTHORIZED, "Unauthorized");

  const { page, take, skip, orderBy } = paginationHelper(pagination);

  const result = await prisma.watchlist.findMany({
    where: {
      userId: user.userId,
    },
    select: {
      id: true,
      movieSeries: {
        select: {
          id: true,
          title: true,
          posterUrl: true,
          rating: true,
        },
      },
    },
  });

  const total = await prisma.review.count({
    where: {
      userId: user.userId,
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

//Add to watchlist
const addWatchList = async (
  user: IJwtPayload | undefined,
  id: string
): Promise<any> => {
  if (!user) throw new AppError(httpStatus.UNAUTHORIZED, "Unauthorized");
  if (!id) throw new AppError(httpStatus.BAD_REQUEST, "Media id not found");

  const foundMedia = await prisma.movieSeries.findUnique({
    where: {
      id,
    },
  });

  if (!foundMedia) throw new AppError(httpStatus.CONFLICT, "Media not found");

  const foundWatchList = await prisma.watchlist.findFirst({
    where: {
      userId: user.userId,
      movieSeriesId: id,
    },
  });

  if (foundWatchList)
    throw new AppError(httpStatus.CONFLICT, "Media already in watchlist");

  const result = await prisma.watchlist.create({
    data: {
      userId: user.userId,
      movieSeriesId: id,
    },
  });

  return result;
};

//Remove one from watchlist
const removeOneWatchList = async (id: string): Promise<any> => {
  if (!id) throw new AppError(httpStatus.BAD_REQUEST, "Watchlist id not found");

  const foundMedia = await prisma.watchlist.findUnique({
    where: {
      id,
    },
  });

  if (!foundMedia)
    throw new AppError(httpStatus.CONFLICT, "Watchlist not found");

  await prisma.watchlist.delete({
    where: {
      id,
    },
  });

  return { message: "Watchlist updated successfully" };
};

//Remove one from watchlist
const removeAllWatchList = async (
  user: IJwtPayload | undefined
): Promise<any> => {
  if (!user) throw new AppError(httpStatus.UNAUTHORIZED, "Unauthorized");

  await prisma.watchlist.deleteMany({
    where: {
      userId: user.userId,
    },
  });

  return { message: "Watchlist cleared successfully" };
};

//Get all your purchase
const getALlPurchaseList = async (
  pagination: IPagination,
  user: IJwtPayload | undefined
): Promise<any> => {
  if (!user) throw new AppError(httpStatus.UNAUTHORIZED, "Unauthorized");

  const { page, take, skip, orderBy } = paginationHelper(
    pagination,
    "purchaseDate"
  );

  const result = await prisma.purchaseRentHistory.findMany({
    where: {
      userId: user.userId,
    },
    skip,
    orderBy,
    select: {
      id: true,
      accessExpiry: true,
      movieSeries: {
        select: {
          id: true,
          title: true,
          posterUrl: true,
          rating: true,
          accessLink: true,
          priceType: true,
        },
      },
    },
  });

  const total = await prisma.review.count({
    where: {
      userId: user.userId,
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

//Get all your reviews
const getALlReviewList = async (
  pagination: IPagination,
  user: IJwtPayload | undefined
): Promise<any> => {
  if (!user) throw new AppError(httpStatus.UNAUTHORIZED, "Unauthorized");

  const { page, take, skip, orderBy } = paginationHelper(pagination);

  const result = await prisma.review.findMany({
    where: {
      userId: user.userId,
      status: ReviewStatus.unpublished,
    },
    skip,
    orderBy,
    select: {
      id: true,
      rating: true,
      writtenReview: true,
      isSpoiler: true,
      tags: true,
      createdAt: true,
      movieSeries: {
        select: {
          id: true,
          title: true,
          posterUrl: true,
          releaseYear: true,
        },
      },
    },
  });

  const total = await prisma.review.count({
    where: {
      userId: user.userId,
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

//get user profile details
const getProfile = async (user: IJwtPayload) => {
  if (!user) throw new AppError(httpStatus.UNAUTHORIZED, "Unauthorized");

  const foundUser = await prisma.user.findUnique({
    where: {
      id: user.userId,
      status: UserStatus.active,
    },
    select: {
      id: true,
      name: true,
      profilePhoto: true,
      createdAt: true,
      updatedAt: true,
    },
  });

  if (!foundUser) throw new AppError(httpStatus.NOT_FOUND, "User not found");

  return foundUser;
};

//Update user profile details
const updateProfile = async (
  user: IJwtPayload,
  payload: Partial<User>,
  file: IFile | undefined
) => {
  if (!user) throw new AppError(httpStatus.UNAUTHORIZED, "Unauthorized");

  const foundUser = await prisma.user.findUnique({
    where: {
      id: user.userId,
      status: UserStatus.active,
    },
    select: {
      id: true,
    },
  });

  if (!foundUser) throw new AppError(httpStatus.NOT_FOUND, "User not found");

  //Upload image to cloudinary
  if (file) {
    const uploadedResult = await fileUploader.cloudinaryUpload(
      file.path,
      file.filename.split(".")[0]
    );
    payload.profilePhoto = uploadedResult.secure_url;
  }

  const updatedUser = await prisma.user.update({
    where: {
      id: user.userId,
    },
    data: payload,
    select: {
      id: true,
      name: true,
      profilePhoto: true,
      createdAt: true,
      updatedAt: true,
    },
  });

  return updatedUser;
};

export const UserService = {
  createReview,
  createMediaLike,
  createReviewLike,
  createComment,
  getAll,
  addWatchList,
  removeOneWatchList,
  removeAllWatchList,
  getALlWatchList,
  getALlPurchaseList,
  getALlReviewList,
  updateReview,
  getProfile,
  updateProfile,
};
