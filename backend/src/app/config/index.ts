import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join((process.cwd(), ".env")) });

export default {
  project_name: process.env.PROJECT_NAME!,
  NODE_ENV: process.env.NODE_ENV!,
  port: process.env.PORT!,
  db_url: process.env.DATABASE_URL!,
  schedule_interval: process.env.SCHEDULE_TIME_INTERVAL_IN_MINUTES!,
  default_profile_url: process.env.DEFAULT_PROFILE_URL!,

  stripe_secret_key: process.env.STRIPE_SECRET_KEY!,

  client_url: process.env.CLIENT_URL!,
  server_url: process.env.SERVER_URL!,

  jwt: {
    bcrypt_salt_rounds: process.env.BCRYPT_SALT_ROUNDS!,
    jwt_access_secret: process.env.JWT_ACCESS_SECRET!,
    jwt_access_expires_in: process.env.JWT_ACCESS_EXPIRES_IN!,
    jwt_refresh_secret: process.env.JWT_REFRESH_SECRET!,
    jwt_refresh_expires_in: process.env.JWT_REFRESH_EXPIRES_IN!,
    jwt_otp_secret: process.env.JWT_OTP_SECRET!,
    jwt_otp_expire_in: process.env.JWT_OTP_EXPIRES_IN!,
    jwt_pass_reset_secret: process.env.JWT_PASS_RESET_SECRET!,
    jwt_pass_reset_expires_in: process.env.JWT_PASS_RESET_EXPIRES_IN!,
    jwt_email_verify_secret: process.env.JWT_EMAIL_VERIFY_SECRET!,
    jwt_email_verify_expires_in: process.env.JWT_EMAIL_VERIFY_EXPIRES_IN!,
  },

  sender_email: process.env.SENDER_EMAIL!,
  sender_app_password: process.env.SENDER_APP_PASS!,

  allowed: {
    reset_attempts: process.env.ALLOWED_RESET_ATTEMPT_NUMBER!,
    failed_attempts: process.env.ALLOWED_FAILED_ATTEMPT_NUMBER!,
    verify_eamil_attempts: process.env.ALLOWED_EMAIL_VERIFY_ATTEMPT_NUMBER!,
    suspend_time_failed_attempt:
      process.env.SUSPEND_MINUTES_FOR_FAILED_ATTEMPT!,
    suspend_time_failed_reset_attempt:
      process.env.SUSPEND_MINUTES_FOR_FAILED_RESET_ATTEMPT!,
    suspend_time_failed_verify_email_attempt:
      process.env.SUSPEND_MINUTES_FOR__FAILED_VERIFY_EMAIL_ATTEMPT!,
  },

  cloudinary: {
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME!,
    api_key: process.env.CLOUDINARY_API_KEY!,
    api_secret: process.env.CLOUDINARY_API_SECRET!,
  },
};
