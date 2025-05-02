/*
  Warnings:

  - The `accessLink` column on the `movie_series` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "movie_series" DROP COLUMN "accessLink",
ADD COLUMN     "accessLink" TEXT[];
