/*
  Warnings:

  - Added the required column `posterUrl` to the `movie_series` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "movie_series" ADD COLUMN     "posterUrl" TEXT NOT NULL;
