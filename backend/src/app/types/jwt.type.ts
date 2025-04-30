import { UserRole, UserStatus } from "../../../generated/prisma";

export interface IJwtPayload {
  userId: string;
  email: string;
  name: string;
  role: UserRole;
  status: UserStatus;
  profilePhoto: string;
}

export interface IJwtOtpPayload {
  otp: string;
  email: string;
}
