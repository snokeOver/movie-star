-- AlterTable
ALTER TABLE "security_details" ADD COLUMN     "isEmailVerified" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "users" ALTER COLUMN "status" SET DEFAULT 'deactive';
