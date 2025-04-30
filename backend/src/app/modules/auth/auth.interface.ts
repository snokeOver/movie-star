export interface ILoginCred {
  email: string;
  password: string;
}

export interface IUser {
  name: string;
  email: string;
  password: string;
  profilePhoto?: string;
}

export interface IResetPassPayload {
  email: string;
  otp: string;
  password: string;
}
