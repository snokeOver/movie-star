import { Suspense } from "react";
import { MoviesSkeleton } from "@/components/modules/movies/movies-skeleton";
import { MoviesGrid } from "@/components/modules/movies/movies-grid";
import { MoviesSidebar } from "@/components/modules/movies/movies-sidebar";
import { MoviesHeader } from "@/components/modules/movies/movies-header";

export default function MoviesPage({
  searchParams,
}: {
  searchParams: {
    page?: string;
    sort?: string;
    genre?: string;
    rating?: string;
    platform?: string;
  };
}) {
  // Get the current page from the search params or default to 1
  const page = searchParams.page ? Number.parseInt(searchParams.page) : 1;
  const sort = searchParams.sort || "createdAt";
  const genre = searchParams.genre || "";
  const rating = searchParams.rating || "";
  const platform = searchParams.platform || "";

  return (
    <div className="min-h-screen">
      <MoviesSidebar
        currentSort={sort}
        currentGenre={genre}
        currentRating={rating}
        currentPlatform={platform}
      />

      <div className="lg:pl-[4rem] transition-all duration-300 ease-in-out min-h-screen">
        <div className="container mx-auto py-6 px-4 md:px-6">
          <MoviesHeader />

          <Suspense fallback={<MoviesSkeleton />}>
            <MoviesGrid
              page={page}
              sort={sort}
              genre={genre}
              rating={rating}
              platform={platform}
            />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
