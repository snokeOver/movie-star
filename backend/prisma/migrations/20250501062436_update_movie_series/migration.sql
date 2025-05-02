/*
  Warnings:

  - Added the required column `accessLink` to the `movie_series` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "movie_series" ADD COLUMN     "accessLink" TEXT NOT NULL;
