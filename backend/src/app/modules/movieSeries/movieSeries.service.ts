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

//Get single Movie Series data by id
const getSingle = async (id: string): Promise<MovieSeries | null> => {
  const foundMovieSeries = await prisma.movieSeries.findUnique({
    where: {
      id,
      isDeleted: false,
    },
  });

  if (!foundMovieSeries)
    throw new AppError(httpStatus.NOT_FOUND, "Media not found");

  const result = await prisma.movieSeries.findUnique({
    where: {
      id,
    },
  });
  return result;
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

export const MovieSeriesService = {
  getSingle,
  getAll,
  updateSingle,
  deleteSingle,
  createSingle,
};
