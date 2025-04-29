import { UserRole, UserStatus } from "../../../generated/prisma";

export interface IJwtPayload {
  userId: string;
  email: string;
  role: UserRole;
  status: UserStatus;
}

export interface IJwtOtpPayload {
  otp: string;
  email: string;
}
