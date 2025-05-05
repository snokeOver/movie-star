/*
  Warnings:

  - You are about to drop the `CommentLike` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `MovieLike` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "CommentLike" DROP CONSTRAINT "CommentLike_commentId_fkey";

-- DropForeignKey
ALTER TABLE "CommentLike" DROP CONSTRAINT "CommentLike_userId_fkey";

-- DropForeignKey
ALTER TABLE "MovieLike" DROP CONSTRAINT "MovieLike_movieSeriesId_fkey";

-- DropForeignKey
ALTER TABLE "MovieLike" DROP CONSTRAINT "MovieLike_userId_fkey";

-- DropTable
DROP TABLE "CommentLike";

-- DropTable
DROP TABLE "MovieLike";

-- CreateTable
CREATE TABLE "movie_like" (
    "id" TEXT NOT NULL,
    "movieSeriesId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "isLike" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "movie_like_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "review_like" (
    "id" TEXT NOT NULL,
    "reviewId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "isLike" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "review_like_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "movie_like" ADD CONSTRAINT "movie_like_movieSeriesId_fkey" FOREIGN KEY ("movieSeriesId") REFERENCES "movie_series"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "movie_like" ADD CONSTRAINT "movie_like_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "review_like" ADD CONSTRAINT "review_like_reviewId_fkey" FOREIGN KEY ("reviewId") REFERENCES "reviews"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "review_like" ADD CONSTRAINT "review_like_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
