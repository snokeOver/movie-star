import { Review } from "../../../../generated/prisma";
import { IMeta } from "../../types";

export interface IReview {
  rating: number;
  review: string;
  userId: string;
  movieSeriesId: string;
}

export interface IAllReviews {
  meta: IMeta;
  data: Review[];
}

export interface IReviewFilteredQuery {
  title?: string | undefined;
  description?: string | undefined;
  releaseYear?: number | undefined;
  searchTerm?: string | undefined;
}
