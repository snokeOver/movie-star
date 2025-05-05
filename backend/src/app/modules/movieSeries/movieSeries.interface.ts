import { MovieSeries } from "../../../../generated/prisma";
import { IMeta } from "../../types";

export interface IAllMovieSeries {
  meta: IMeta;
  data: MovieSeries[];
}

export interface IMovieSeriesFilteredQuery {
  title?: string | undefined;
  description?: string | undefined;
  releaseYear?: number | undefined;
  searchTerm?: string | undefined;
}

export interface IMovieSeries
  extends Pick<
    MovieSeries,
    | "id"
    | "title"
    | "posterUrl"
    | "description"
    | "releaseYear"
    | "accessLink"
    | "cast"
    | "director"
    | "discount"
    | "discountType"
    | "discountExpiry"
    | "genre"
    | "isActive"
    | "price"
    | "priceType"
    | "rating"
    | "streamingPlatform"
  > {}

export interface IMinUser {
  id: string;
  name: string;
  profilePhoto: string | null;
}

export interface ILatestReview {
  id: string;
  rating: number;
  writtenReview: string;
  isSpoiler: boolean;
  tags: string[];
  likesCount: number;
  commentCount: number;
  createdAt: Date;
  user: IMinUser;
  comment: {
    id: string;
    content: string;
    createdAt: Date;
    user: IMinUser;
  }[];
}

export interface ISingleMovieSeriesResponse extends MovieSeries {
  totalLike: number;
  isUserLiked: boolean;
  totalReview: number;
  isUserLikedReview: boolean;
  reviews: ILatestReview[] | null;
}
