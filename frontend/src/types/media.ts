export enum Genre {
  action = "Action",
  comedy = "Comedy",
  drama = "Drama",
  horror = "Horror",
  thriller = "Thriller",
  romance = "Romance",
  documentary = "Documentary",
  sci_fi = "Sci-Fi",
  fantasy = "Fantasy",
  mystery = "Mystery",
}

export enum StreamingPlatform {
  netflix = "Netflix",
  disney_plus = "Disney Plus",
  amazon_prime = "Amazon Prime",
  hulu = "Hulu",
  youtube = "YouTube",
  self_hosted = "Self-hosted",
}

export enum PriceType {
  buy = "buy",
  rent = "rent",
}

export interface IMinUser {
  id: string;
  name: string;
  profilePhoto: string;
}

export interface IMinComment {
  id: string;
  content: string;
  createdAt: Date;
  user: IMinUser;
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

export interface IMedia {
  id: string;
  title: string;
  description: string;
  posterUrl: string;
  price: number;
  priceType: PriceType; // Add other price types if needed
  rating: number;
  releaseYear: number;
  viewCount: number;
  genre: string[];
  cast: string[];
  director: string[];
  streamingPlatform: StreamingPlatform[];
  accessLink: string[];
  discount: number | null;
  discountType: string | null;
  discountExpiry: string | null;
  isActive: boolean;
  isDeleted: boolean;
  createdAt: string;
  totalLike: number;
  isUserLiked: boolean;
  totalReview: number;
  isUserLikedReview: boolean;
  reviews: ILatestReview[] | null;
}
