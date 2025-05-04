"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateOtp = exports.generateLink = void 0;
const config_1 = __importDefault(require("../config"));
const generateLink = (token, email, subLink) => `${config_1.default.client_url}/${subLink}?token=${token}&email=${email}`;
exports.generateLink = generateLink;
const generateOtp = () => Math.floor(100000 + Math.random() * 900000).toString();
exports.generateOtp = generateOtp;
