import { Request, Response, NextFunction } from "express";
import { UAParser } from "ua-parser-js";
import { DeviceType } from "../../../generated/prisma";

const clientInfoParser = (req: Request, res: Response, next: NextFunction) => {
  const userAgent = req.headers["user-agent"] || "Unknown";
  const parser = new UAParser(); // Create an instance
  parser.setUA(userAgent); // Set the User-Agent string
  const parsedUA = parser.getResult(); // Get the parsed result

  const ipAddress =
    req.ip ||
    (req.headers["x-forwarded-for"] as string)?.split(",")[0] ||
    "Unknown";

  const clientInfo = {
    device: {
      type:
        parsedUA.device.type === "mobile"
          ? DeviceType.mobile
          : DeviceType.desktop,

      browser: parsedUA.browser.name || "Unknown",
      name: parsedUA.device.model || "Unknown Device", // If the device model is not detected, use "Unknown Device"
      os: parsedUA.os.name || "Unknown",
      ip: ipAddress,
      userAgent: userAgent,
      location: req.get("Host") || "Unknown", // PC name or host (can be unreliable)
      isActive: true,
      isPreferred: true, // or based on your logic
      isInfected: false, // based on your security logic
    },
    securityDetails: {
      otpToken: null, // Set it to null or get from some other source if needed
      emailVerifyAttemptNo: 0, // Default value, modify based on your logic
      lastAttemptTime: new Date(),
      failedResetPassAttemptNo: 0, // Default value, modify based on your logic
      failedOTPAttemptNo: 0,
      failedLoginAttemptNo: 0,
      suspendUntil: null,
      lastLoginTime: new Date(), // Current login time
    },
  };

  req.body.clientInfo = clientInfo;

  next();
};

export default clientInfoParser;
