-- AlterTable
ALTER TABLE "security_details" ADD COLUMN     "lastAttemptTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
