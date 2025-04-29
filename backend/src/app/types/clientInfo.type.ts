import { DeviceType } from "../../../generated/prisma";

export interface IClientInfo {
  device: {
    type: DeviceType; // e.g., "desktop", "mobile", "tablet"
    browser: string; // e.g., "Chrome", "Firefox", "Safari"
    name: string; // e.g., "iPhone", "Samsung Galaxy", or "Unknown Device"
    os: string; // e.g., "Windows 10", "macOS", "Android"
    ip: string; // Client's IP address
    userAgent: string; // The raw User-Agent string
    location: string; // The location or hostname of the client (can be unreliable)
    isActive: boolean;
    isPreferred: boolean;
    isInfected: boolean;
  };
  securityDetails: {
    otpToken: string | null; // The OTP token for the user (can be null initially)
    resetAttemptNumber: number; // The number of failed reset attempts
    lastResetAttemptTime: Date; // The time of the last reset attempt
    failedLoginAttemptNumber: number; // The number of failed login attempts
    blockedUntil: Date | null; // The time until the user is blocked due to failed attempts (can be null)
    lastLoginTime: Date; // The time of the user's last successful login
  };
}
