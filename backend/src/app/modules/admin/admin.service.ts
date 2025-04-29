import { Admin, Prisma, User, UserStatus } from "../../../../generated/prisma";
import AppError from "../../middleWares/errorHandler/appError";
import { IPagination } from "../../types";
import { paginationHelper } from "../../utils/paginationHealper";
import { prisma } from "../../utils/prisma";

import httpStatus from "http-status";

import {
  IAdminFilteredQuery,
  IAllAdmin,
  IDeletedAdmin,
} from "./admin.interface";
import { adminSearchTerms } from "./admin.constant";

//Update single admin data by id
const deleteSingle = async (id: string): Promise<IDeletedAdmin> => {
  const foundAdmin = await prisma.admin.findUnique({
    where: {
      id,
      isDeleted: false,
    },
  });

  if (!foundAdmin) throw new AppError(httpStatus.NOT_FOUND, "Admin not found");

  const result = await prisma.$transaction(async (tx) => {
    const deletedAdmin = await tx.admin.update({
      where: {
        id,
      },
      data: {
        isDeleted: true,
      },
    });

    const deletedUser = await tx.user.update({
      where: {
        email: deletedAdmin.email,
      },
      data: {
        status: UserStatus.deleted,
      },
    });
    return { deletedAdmin, deletedUser };
  });

  return result;
};

//Update single admin data by id
const updateSingle = async (
  id: string,
  data: Partial<Admin>
): Promise<Admin> => {
  const foundAdmin = await prisma.admin.findUnique({
    where: {
      id,
      isDeleted: false,
    },
  });

  if (!foundAdmin) throw new AppError(httpStatus.NOT_FOUND, "Admin not found");

  const result = await prisma.admin.update({
    where: {
      id,
    },
    data,
  });
  return result;
};

//Get single admin data by id
const getSingle = async (id: string): Promise<Admin | null> => {
  const foundAdmin = await prisma.admin.findUnique({
    where: {
      id,
      isDeleted: false,
    },
  });

  if (!foundAdmin) throw new AppError(httpStatus.NOT_FOUND, "Admin not found");

  const result = await prisma.admin.findUnique({
    where: {
      id,
    },
  });
  return result;
};

//Get all admin data
const getAll = async (
  query: IAdminFilteredQuery,
  pagination: IPagination
): Promise<IAllAdmin> => {
  const { page, take, skip, orderBy } = paginationHelper(pagination);

  // console.log("Pagination data:", query);
  const { searchTerm, ...filterData } = query;
  const searchCondition: Prisma.AdminWhereInput[] = [];

  if (query.searchTerm) {
    searchCondition.push({
      OR: adminSearchTerms.map((field) => ({
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

  const whereConditions: Prisma.AdminWhereInput = { AND: searchCondition };

  const result = await prisma.admin.findMany({
    where: whereConditions,
    skip,
    take,
    orderBy,
  });

  const total = await prisma.admin.count({
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

export const AdminService = {
  getSingle,
  getAll,
  updateSingle,
  deleteSingle,
};
