export interface IReviewForm {
  id?: string;
  movieSeriesId: string;
  userId: string;
  rating: number;
  writtenReview: string;
  isSpoiler: boolean;
  tags: string[];
}
