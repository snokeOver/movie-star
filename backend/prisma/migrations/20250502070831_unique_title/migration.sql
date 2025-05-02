/*
  Warnings:

  - A unique constraint covering the columns `[title]` on the table `movie_series` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "movie_series_title_key" ON "movie_series"("title");
