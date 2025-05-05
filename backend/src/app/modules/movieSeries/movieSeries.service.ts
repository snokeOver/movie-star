import { MovieSeries, Prisma } from "../../../../generated/prisma";
import AppError from "../../middleWares/errorHandler/appError";
import { IFile, IPagination } from "../../types";
import { paginationHelper } from "../../utils/paginationHealper";
import { prisma } from "../../utils/prisma";

import httpStatus from "http-status";

import {
  IMovieSeriesFilteredQuery,
  IAllMovieSeries,
  IMovieSeries,
} from "./movieSeries.interface";
import { movieSeriesSearchTerms } from "./movieSeries.constant";
import { fileUploader } from "../../utils/fileUploader";

//Update single movie series data by id
const deleteSingle = async (id: string): Promise<any> => {
  const foundMovieSeries = await prisma.movieSeries.findUnique({
    where: {
      id,
      isDeleted: false,
    },
  });

  if (!foundMovieSeries)
    throw new AppError(httpStatus.NOT_FOUND, "Media not found");

  const deletedMovieSeries = await prisma.movieSeries.update({
    where: {
      id,
    },
    data: {
      isDeleted: true,
    },
  });

  return deletedMovieSeries;
};

//Update single movie series data by id
const updateSingle = async (
  id: string,
  data: Partial<MovieSeries>,
  file: IFile | undefined
): Promise<MovieSeries> => {
  const foundMovieSeries = await prisma.movieSeries.findUnique({
    where: {
      id,
      isDeleted: false,
    },
  });

  if (!foundMovieSeries)
    throw new AppError(httpStatus.NOT_FOUND, "Media not found");

  //Upload image to cloudinary
  if (file) {
    const uploadedResult = await fileUploader.cloudinaryUpload(
      file.path,
      file.filename.split(".")[0]
    );
    data.posterUrl = uploadedResult.secure_url;
  }

  const result = await prisma.movieSeries.update({
    where: {
      id,
    },
    data,
  });
  return result;
};

//Get single Movie Series data by id for admin
const getSingle = async (id: string): Promise<Partial<MovieSeries> | null> => {
  const foundMovieSeries = await prisma.movieSeries.findUnique({
    where: {
      id,
      isDeleted: false,
    },
    select: {
      id: true,
      title: true,
      posterUrl: true,
      releaseYear: true,
      genre: true,
      cast: true,
      rating: true,
      viewCount: true,
    },
  });

  if (!foundMovieSeries)
    throw new AppError(httpStatus.NOT_FOUND, "Media not found");

  //Increase view count
  await prisma.movieSeries.update({
    where: {
      id,
    },
    data: {
      viewCount: foundMovieSeries.viewCount + 1,
    },
  });

  return foundMovieSeries;
};

//Get all Movie Series data
const getAll = async (
  query: IMovieSeriesFilteredQuery,
  pagination: IPagination
): Promise<IAllMovieSeries> => {
  const { page, take, skip, orderBy } = paginationHelper(pagination);

  // console.log("Pagination data:", query);
  const { searchTerm, ...filterData } = query;
  const searchCondition: Prisma.MovieSeriesWhereInput[] = [];

  if (query.searchTerm) {
    searchCondition.push({
      OR: movieSeriesSearchTerms.map((field) => ({
        [field]: { contains: query.searchTerm, mode: "insensitive" },
      })),
    });
  }

  if (Object.keys(filterData).length) {
    searchCondition.push({
      AND: Object.keys(filterData).map((key) => ({
        [key]: {
          equals: (filterData as any)[key],
        },
      })),
    });
  }

  //Do not show data where isDeleted is true
  searchCondition.push({
    isDeleted: false,
  });

  const whereConditions: Prisma.MovieSeriesWhereInput = {
    AND: searchCondition,
  };

  const result = await prisma.movieSeries.findMany({
    where: whereConditions,
    skip,
    take,
    orderBy,
  });

  const total = await prisma.movieSeries.count({
    where: whereConditions,
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

//Create single Movie series
const createSingle = async (
  data: IMovieSeries,
  file: IFile | undefined
): Promise<MovieSeries> => {
  //check if user exist before take any costly action like upload image
  const foundMovieSeries = await prisma.movieSeries.findUnique({
    where: {
      title: data.title,
    },
  });

  if (foundMovieSeries)
    throw new AppError(httpStatus.CONFLICT, "Media already exist");

  //Upload image to cloudinary
  if (file) {
    const uploadedResult = await fileUploader.cloudinaryUpload(
      file.path,
      file.filename.split(".")[0]
    );
    data.posterUrl = uploadedResult.secure_url;
  }

  const createdMovieSeries = await prisma.movieSeries.create({ data });

  return createdMovieSeries;
};

//Get 5 for seleted Movie Series data for home banner
const getFiveHomeBanner = async (): Promise<Partial<MovieSeries>[] | null> => {
  const result = await prisma.movieSeries.findMany({
    where: {
      isDeleted: false,
    },
    take: 7,
    orderBy: {
      createdAt: "desc",
    },
    select: {
      id: true,
      title: true,
      posterUrl: true,
      description: true,
      releaseYear: true,
      genre: true,
      cast: true,
      rating: true,
    },
  });
  return result;
};

//Get 5 top highest rated Movie Series data for home page
const getFiveHighestRated = async (): Promise<
  Partial<MovieSeries>[] | null
> => {
  const result = await prisma.movieSeries.findMany({
    where: {
      isDeleted: false,
      rating: { gt: 6.5 },
    },
    take: 7,
    orderBy: {
      rating: "desc",
    },
    select: {
      id: true,
      title: true,
      posterUrl: true,
      releaseYear: true,
      rating: true,
    },
  });
  return result;
};

//Get 5 top highest views Movie Series data for home page
const getFiveHighlyViewed = async (): Promise<
  Partial<MovieSeries>[] | null
> => {
  const result = await prisma.movieSeries.findMany({
    where: {
      isDeleted: false,
    },
    take: 7,
    orderBy: {
      viewCount: "desc",
    },
    select: {
      id: true,
      title: true,
      posterUrl: true,
      releaseYear: true,
      rating: true,
    },
  });
  return result;
};

//Get 5 admin selected Movie Series data for home page
const getFiveAdminSelected = async (): Promise<
  Partial<MovieSeries>[] | null
> => {
  const result = await prisma.movieSeries.findMany({
    where: {
      isDeleted: false,
      markByAdmin: true,
    },
    take: 7,
    select: {
      id: true,
      title: true,
      posterUrl: true,
      releaseYear: true,
      rating: true,
    },
  });
  return result;
};

//Get single Movie Series data by id for public
const getSinglePublic = async (
  id: string
): Promise<Partial<MovieSeries> | null> => {
  const foundMovieSeries = await prisma.movieSeries.findUnique({
    where: {
      id,
      isDeleted: false,
    },
    select: {
      id: true,
      title: true,
      posterUrl: true,
      releaseYear: true,
      genre: true,
      cast: true,
      rating: true,
      viewCount: true,
      description: true,
      director: true,
      price: true,
      priceType: true,
      discount: true,
      streamingPlatform: true,
    },
  });

  if (!foundMovieSeries)
    throw new AppError(httpStatus.NOT_FOUND, "Media not found");

  //Increase view count
  await prisma.movieSeries.update({
    where: {
      id,
    },
    data: {
      viewCount: foundMovieSeries.viewCount + 1,
    },
  });

  return foundMovieSeries;
};

export const MovieSeriesService = {
  getSingle,
  getAll,
  updateSingle,
  deleteSingle,
  createSingle,
  getFiveHomeBanner,
  getFiveHighestRated,
  getFiveHighlyViewed,
  getFiveAdminSelected,
  getSinglePublic,
};
