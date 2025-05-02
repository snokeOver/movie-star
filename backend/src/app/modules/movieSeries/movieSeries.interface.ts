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
