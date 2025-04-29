import { NextFunction, Request, Response } from "express";
import { JwtPayload, TokenExpiredError } from "jsonwebtoken";
import config from "../config";
import httpStatus from "http-status";
import { UserRole, UserStatus } from "../../../generated/prisma";
import { tryCatchAsync } from "../utils/tryCatchAsync";
import AppError from "./errorHandler/appError";
import { verifyToken } from "../utils/jwtToken";
import { prisma } from "../utils/prisma";

const auth = (...requiredRoles: UserRole[]) => {
  return tryCatchAsync(
    async (
      req: Request & { user?: JwtPayload },
      res: Response,
      next: NextFunction
    ) => {
      const token = req.headers.authorization;

      if (!token)
        throw new AppError(httpStatus.UNAUTHORIZED, "You are not authorized!");

      try {
        const decoded = verifyToken(
          token,
          config.jwt.jwt_access_secret as string
        );

        const { role, email } = decoded;

        const user = await prisma.user.findUnique({
          where: {
            email,
            status: {
              in: [UserStatus.active, UserStatus.deactive],
            },
          },
        });

        if (!user)
          throw new AppError(httpStatus.NOT_FOUND, "This user is not found!");

        if (requiredRoles && !requiredRoles.includes(role)) {
          throw new AppError(
            httpStatus.UNAUTHORIZED,
            "You are not authorized!"
          );
        }

        req.user = decoded as JwtPayload;
        next();
      } catch (error: any) {
        if (error instanceof TokenExpiredError) {
          return next(
            new AppError(
              httpStatus.UNAUTHORIZED,
              "Token has expired! Please login again."
            )
          );
        }
        return next(new AppError(httpStatus.UNAUTHORIZED, error.message));
      }
    }
  );
};

export default auth;
