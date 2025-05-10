"use client";
import { useAllMediaQuery } from "@/hooks/queries/useAllMediaQuery";

import { MovieCard } from "./movie-card";
import { MoviesPagination } from "./movies-pagination";
import { useEffect, useState } from "react";
import { IMovies } from "@/types";
import LoadingSection from "@/components/shared/core/loading-skeleton/LoadingSection";

export function MoviesGrid({
  page = 1,
  sort = "recent",
  genre = "",
  rating = "",
  platform = "",
  limit = 100,
}: {
  page: number;
  sort: string;
  genre: string;
  rating: string;
  platform: string;
  limit?: number;
}) {
  // Fetch movies with pagination, sorting and filtering
  const [totalPages, setTotalPages] = useState(0);

  const { data, isLoading, refetch } = useAllMediaQuery({
    page,
    sort,
    genre,
    rating,
    limit,
    platform,
  });

  // console.log(data);

  useEffect(() => {
    if (data) {
      setTotalPages(Math.ceil(data.meta.total / data.meta.limit));
    }
  }, [data]);

  useEffect(() => {
    refetch();
  }, [page, sort, genre, rating, platform, refetch]);

  if (isLoading) return <LoadingSection />;
  const movies: IMovies[] = data?.data;
  // If no movies found
  if (movies.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <h3 className="text-xl font-semibold">No movies or series found</h3>
        <p className="text-muted-foreground mt-2">
          Try adjusting your filters to find more movies.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Current sort display */}
      <div className="text-sm text-muted-foreground">
        <span>Showing results sorted by </span>
        <span className="font-medium">
          {sort === "recent" && "Most Recent"}
          {sort === "top-rated" && "Top Rated"}
          {sort === "most-liked" && "Most Popular"}
        </span>
        <span> • {movies.length} titles</span>
      </div>

      <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(250px,1fr))] w-full">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>

      <MoviesPagination currentPage={page} totalPages={totalPages} />
    </div>
  );
}
