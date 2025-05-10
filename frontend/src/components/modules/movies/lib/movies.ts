// This is a mock implementation of the movies data service
// In a real application, this would fetch data from a database or API

interface Movie {
  id: string;
  title: string;
  poster: string;
  genre: string;
  rating: number;
  views: number;
  platform: string;
  releaseDate: string;
  type: "movie" | "series";
}

// Mock data for movies and series
const mockMovies: Movie[] = [
  {
    id: "1",
    title: "Dune: Part Two",
    poster: "/dune-part-two-poster.png",
    genre: "Sci-Fi",
    rating: 8.7,
    views: 3420000,
    platform: "hbo",
    releaseDate: "2024-03-01",
    type: "movie",
  },
  {
    id: "2",
    title: "Oppenheimer",
    poster: "/oppenheimer-inspired-poster.png",
    genre: "Drama",
    rating: 9.2,
    views: 5210000,
    platform: "netflix",
    releaseDate: "2023-07-21",
    type: "movie",
  },
  {
    id: "3",
    title: "The Bear (Season 2)",
    poster: "/the-bear-inspired-poster.png",
    genre: "Drama",
    rating: 9.5,
    views: 4780000,
    platform: "disney",
    releaseDate: "2023-06-22",
    type: "series",
  },
  {
    id: "4",
    title: "Poor Things",
    poster: "/poor-things-poster.png",
    genre: "Comedy",
    rating: 8.4,
    views: 2890000,
    platform: "disney",
    releaseDate: "2023-12-08",
    type: "movie",
  },
  {
    id: "5",
    title: "Killers of the Flower Moon",
    poster: "/killers-of-the-flower-moon-poster.png",
    genre: "Drama",
    rating: 8.9,
    views: 3560000,
    platform: "apple",
    releaseDate: "2023-10-20",
    type: "movie",
  },
  {
    id: "6",
    title: "The Last of Us",
    poster: "/last-of-us-inspired-poster.png",
    genre: "Action",
    rating: 9.1,
    views: 6120000,
    platform: "hbo",
    releaseDate: "2023-01-15",
    type: "series",
  },
  {
    id: "7",
    title: "Challengers",
    poster: "/challengers-movie-poster.png",
    genre: "Drama",
    rating: 7.8,
    views: 1980000,
    platform: "amazon",
    releaseDate: "2024-04-26",
    type: "movie",
  },
  {
    id: "8",
    title: "Fallout",
    poster: "/fallout-tv-poster.png",
    genre: "Sci-Fi",
    rating: 8.5,
    views: 4320000,
    platform: "amazon",
    releaseDate: "2024-04-11",
    type: "series",
  },
  {
    id: "9",
    title: "Barbie",
    poster: "/generic-movie-poster.png",
    genre: "Comedy",
    rating: 7.9,
    views: 5670000,
    platform: "hbo",
    releaseDate: "2023-07-21",
    type: "movie",
  },
  {
    id: "10",
    title: "Shogun",
    poster: "/shogun-tv-poster.png",
    genre: "Drama",
    rating: 9.3,
    views: 3890000,
    platform: "disney",
    releaseDate: "2024-02-27",
    type: "series",
  },
  {
    id: "11",
    title: "The Holdovers",
    poster: "/the-holdovers-poster.png",
    genre: "Comedy",
    rating: 8.6,
    views: 2450000,
    platform: "netflix",
    releaseDate: "2023-12-01",
    type: "movie",
  },
  {
    id: "12",
    title: "Saltburn",
    poster: "/saltburn-inspired-poster.png",
    genre: "Thriller",
    rating: 7.1,
    views: 3120000,
    platform: "amazon",
    releaseDate: "2023-11-17",
    type: "movie",
  },
  {
    id: "13",
    title: "Past Lives",
    poster: "/past-lives-poster.png",
    genre: "Drama",
    rating: 8.8,
    views: 2780000,
    platform: "netflix",
    releaseDate: "2023-06-02",
    type: "movie",
  },
  {
    id: "14",
    title: "The Zone of Interest",
    poster: "/zone-of-interest-poster.png",
    genre: "Drama",
    rating: 8.2,
    views: 1870000,
    platform: "apple",
    releaseDate: "2023-12-15",
    type: "movie",
  },
  {
    id: "15",
    title: "Anatomy of a Fall",
    poster: "/anatomy-of-a-fall-poster.png",
    genre: "Thriller",
    rating: 8.7,
    views: 2310000,
    platform: "netflix",
    releaseDate: "2023-10-13",
    type: "movie",
  },
  {
    id: "16",
    title: "Succession (Season 4)",
    poster: "/succession-poster.png",
    genre: "Drama",
    rating: 9.7,
    views: 6780000,
    platform: "hbo",
    releaseDate: "2023-03-26",
    type: "series",
  },
  {
    id: "17",
    title: "Civil War",
    poster: "/civil-war-movie-poster.png",
    genre: "Action",
    rating: 7.5,
    views: 1560000,
    platform: "apple",
    releaseDate: "2024-04-12",
    type: "movie",
  },
  {
    id: "18",
    title: "The Fall Guy",
    poster: "/the-fall-guy-poster.png",
    genre: "Action",
    rating: 7.3,
    views: 1420000,
    platform: "netflix",
    releaseDate: "2024-05-03",
    type: "movie",
  },
  {
    id: "19",
    title: "Godzilla Minus One",
    poster: "/godzilla-minus-one-poster.png",
    genre: "Action",
    rating: 8.4,
    views: 2980000,
    platform: "netflix",
    releaseDate: "2023-12-01",
    type: "movie",
  },
  {
    id: "20",
    title: "Ripley",
    poster: "/ripley-tv-show-poster.png",
    genre: "Thriller",
    rating: 8.3,
    views: 2670000,
    platform: "netflix",
    releaseDate: "2024-04-04",
    type: "series",
  },
  {
    id: "21",
    title: "Furiosa: A Mad Max Saga",
    poster: "/placeholder.svg?height=450&width=300&query=Furiosa movie poster",
    genre: "Action",
    rating: 8.1,
    views: 1890000,
    platform: "hbo",
    releaseDate: "2024-05-24",
    type: "movie",
  },
  {
    id: "22",
    title: "The Boys (Season 4)",
    poster:
      "/placeholder.svg?height=450&width=300&query=The Boys TV show poster",
    genre: "Action",
    rating: 8.9,
    views: 4210000,
    platform: "amazon",
    releaseDate: "2024-06-13",
    type: "series",
  },
  {
    id: "23",
    title: "Severance",
    poster:
      "/placeholder.svg?height=450&width=300&query=Severance TV show poster",
    genre: "Sci-Fi",
    rating: 9.0,
    views: 3870000,
    platform: "apple",
    releaseDate: "2022-02-18",
    type: "series",
  },
  {
    id: "24",
    title: "Beetlejuice Beetlejuice",
    poster:
      "/placeholder.svg?height=450&width=300&query=Beetlejuice Beetlejuice movie poster",
    genre: "Comedy",
    rating: 7.8,
    views: 1760000,
    platform: "hbo",
    releaseDate: "2024-09-06",
    type: "movie",
  },
];

interface GetMoviesOptions {
  page: number;
  sort: string;
  genre: string;
  rating: string;
  platform: string;
}

export async function getMovies({
  page = 1,
  sort = "recent",
  genre = "",
  rating = "",
  platform = "",
}: GetMoviesOptions) {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  // Filter movies based on criteria
  let filteredMovies = [...mockMovies];

  // Apply genre filter
  if (genre) {
    filteredMovies = filteredMovies.filter(
      (movie) => movie.genre.toLowerCase() === genre.toLowerCase()
    );
  }

  // Apply rating filter
  if (rating) {
    const minRating = Number.parseInt(rating);
    filteredMovies = filteredMovies.filter(
      (movie) => movie.rating >= minRating
    );
  }

  // Apply platform filter
  if (platform) {
    filteredMovies = filteredMovies.filter(
      (movie) => movie.platform.toLowerCase() === platform.toLowerCase()
    );
  }

  // Apply sorting
  switch (sort) {
    case "recent":
      filteredMovies.sort(
        (a, b) =>
          new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime()
      );
      break;
    case "top-rated":
      filteredMovies.sort((a, b) => b.rating - a.rating);
      break;
    case "most-liked":
      filteredMovies.sort((a, b) => b.views - a.views);
      break;
    default:
      filteredMovies.sort(
        (a, b) =>
          new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime()
      );
  }

  // Pagination
  const itemsPerPage = 12;
  const totalItems = filteredMovies.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const currentPage = Math.min(Math.max(1, page), totalPages || 1);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedMovies = filteredMovies.slice(startIndex, endIndex);

  return {
    movies: paginatedMovies,
    totalPages,
    currentPage,
    totalItems,
  };
}
