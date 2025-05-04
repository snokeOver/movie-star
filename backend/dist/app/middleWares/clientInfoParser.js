"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ua_parser_js_1 = require("ua-parser-js");
const prisma_1 = require("../../../generated/prisma");
const clientInfoParser = (req, res, next) => {
    var _a;
    const userAgent = req.headers["user-agent"] || "Unknown";
    const parser = new ua_parser_js_1.UAParser(); // Create an instance
    parser.setUA(userAgent); // Set the User-Agent string
    const parsedUA = parser.getResult(); // Get the parsed result
    const ipAddress = req.ip ||
        ((_a = req.headers["x-forwarded-for"]) === null || _a === void 0 ? void 0 : _a.split(",")[0]) ||
        "Unknown";
    const clientInfo = {
        device: {
            type: parsedUA.device.type === "mobile"
                ? prisma_1.DeviceType.mobile
                : prisma_1.DeviceType.desktop,
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
exports.default = clientInfoParser;
