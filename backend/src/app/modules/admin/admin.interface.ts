import { Admin, User } from "../../../../generated/prisma";
import { IMeta } from "../../types";

export interface IAllAdmin {
  meta: IMeta;
  data: Admin[];
}

export interface IAdminFilteredQuery {
  name?: string | undefined;
  email?: string | undefined;
  contactNumber?: string | undefined;
  searchTerm?: string | undefined;
}

export interface IDeletedAdmin {
  deletedAdmin: Admin;
  deletedUser: User;
}
