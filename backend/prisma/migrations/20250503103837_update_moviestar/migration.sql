-- AlterTable
ALTER TABLE "movie_series" ADD COLUMN     "markByAdmin" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "viewCount" INTEGER NOT NULL DEFAULT 0;
