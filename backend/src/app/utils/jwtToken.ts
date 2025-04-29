import jwt, { JwtPayload, Secret, SignOptions } from "jsonwebtoken";
import { IJwtOtpPayload, IJwtPayload } from "../types";

export const createToken = (
  jwtPayload: IJwtPayload,
  secret: Secret,
  expiresIn: string | number
): string => {
  const options: SignOptions = {
    expiresIn: expiresIn as SignOptions["expiresIn"],
  };

  return jwt.sign(jwtPayload, secret, options);
};

export const createOtpToken = (
  jwtPayload: IJwtOtpPayload,
  secret: Secret,
  expiresIn: string | number
): string => {
  const options: SignOptions = {
    expiresIn: expiresIn as SignOptions["expiresIn"],
  };

  return jwt.sign(jwtPayload, secret, options);
};

export const verifyToken = (token: string, secret: Secret) => {
  return jwt.verify(token, secret) as JwtPayload;
};
