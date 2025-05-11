import { Suspense } from "react";
import { MoviesSkeleton } from "@/components/modules/movies/movies-skeleton";
import { MoviesGrid } from "@/components/modules/movies/movies-grid";
import { MoviesSidebar } from "@/components/modules/movies/movies-sidebar";
import { MoviesHeader } from "@/components/modules/movies/movies-header";
import { IPageWithParams } from "@/types";

export default async function MoviesPage({ searchParams }: IPageWithParams) {
  // Get the current page from the search params or default to 1

  const { page, sort, genre, rating, platform, searchTerm } =
    await searchParams;
  const currPage = page ? Number.parseInt(page as string) : 1;

  return (
    <div className="min-h-screen">
      <MoviesSidebar
        currentSort={sort as string}
        currentGenre={genre as string}
        currentRating={rating as string}
        currentPlatform={platform as string}
      />

      <div className="lg:pl-[4rem] transition-all duration-300 ease-in-out min-h-screen">
        <div className="container mx-auto py-6 px-4 md:px-6">
          <MoviesHeader />

          <Suspense fallback={<MoviesSkeleton />}>
            <MoviesGrid
              page={currPage}
              sort={sort as string}
              genre={genre as string}
              rating={rating as string}
              platform={platform as string}
              searchTerm={searchTerm as string}
            />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
