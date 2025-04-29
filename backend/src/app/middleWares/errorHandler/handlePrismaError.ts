import { Prisma } from "../../../../generated/prisma";
import { TGenericErrorResponse, TErrorSources } from "../../types";
import httpStatus from "http-status";

const handlePrismaError = (
  err: Prisma.PrismaClientKnownRequestError | Prisma.PrismaClientValidationError
): TGenericErrorResponse => {
  const statusCode = httpStatus.BAD_REQUEST;
  let errorSources: TErrorSources = [];

  if (err instanceof Prisma.PrismaClientKnownRequestError) {
    if (err.code === "P2002") {
      errorSources.push({
        path: "",
        message: "Duplicate data found",
      });
    } else {
      // Handle known Prisma error codes (e.g., unique constraint, foreign key constraint)
      errorSources.push({
        path: "",
        message: err.message,
      });
    }
  }

  if (err instanceof Prisma.PrismaClientValidationError) {
    // Handle validation errors from PrismaClient
    errorSources.push({
      path: "", // Prisma doesn't provide detailed path in validation errors
      message: err.message,
    });
  }

  return {
    statusCode,
    message: "Database Error",
    errorSources,
  };
};

export default handlePrismaError;
