export interface IUser {
  userId: string;
  name: string;
  email: string;
  isActive?: boolean;
  role: "user" | "admin" | "s_admin";
  profilePhoto: string;
  iat?: number;
  exp?: number;
}

export interface IUserStore {
  user: IUser | null;
  setUser: (user: IUser | null) => void;
  clearUser: () => void;
}
