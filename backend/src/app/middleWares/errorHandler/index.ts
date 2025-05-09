import { ErrorRequestHandler, NextFunction, Request, Response } from "express";
import httpStatus from "http-status";

import config from "../../config";

import { ZodError } from "zod";
import handleZodError from "./handleZodError";
import { TErrorSources } from "../../types";
import AppError from "./appError";
import handlePrismaError from "./handlePrismaError";
import { fileUploader } from "../../utils/fileUploader";

export const globalErrorHandler: ErrorRequestHandler = (
  err,
  req,
  res,
  next
) => {
  // console.log(err);
  //setting default values
  let statusCode = Number(httpStatus.INTERNAL_SERVER_ERROR);
  let message = "Something went wrong!";
  let errorSources: TErrorSources = [
    {
      path: "",
      message: "Something went wrong",
    },
  ];

  if (err instanceof ZodError) {
    const simplifiedError = handleZodError(err);
    statusCode = simplifiedError?.statusCode;
    message = simplifiedError?.message;
    errorSources = simplifiedError?.errorSources;
  } else if (err?.name === "PrismaClientKnownRequestError") {
    const simplifiedError = handlePrismaError(err);
    statusCode = simplifiedError?.statusCode;
    message = simplifiedError?.message;
    errorSources = simplifiedError?.errorSources;
  } else if (err instanceof AppError) {
    statusCode = err?.statusCode;
    message = err.message;
    errorSources = [
      {
        path: "",
        message: err?.message,
      },
    ];
  } else if (err instanceof Error) {
    message = err.message;
    errorSources = [
      {
        path: "",
        message: err?.message,
      },
    ];
  }

  console.log(err);

  // Handle the error response
  res.status(statusCode).json({
    success: false,
    message,
    errorSources,
    error: err,
    stack: config.NODE_ENV === "development" ? err?.stack : null,
  });

  if (req.file) fileUploader.deleteOriginalFile(req.file.path);

  // Do not return anything (ensure this handler does not return a value)
  return;
};
