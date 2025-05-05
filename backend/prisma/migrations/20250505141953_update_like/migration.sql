-- AlterTable
ALTER TABLE "CommentLike" ADD COLUMN     "isLike" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "MovieLike" ADD COLUMN     "isLike" BOOLEAN NOT NULL DEFAULT false;
