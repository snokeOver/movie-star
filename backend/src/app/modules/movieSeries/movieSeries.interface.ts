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

export interface ISingleMovieSeriesResponse extends MovieSeries {
  totalLike: number;
  isUserLiked: boolean;
}
