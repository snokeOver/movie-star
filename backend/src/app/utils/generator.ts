import config from "../config";

export const generateLink = (
  token: string,
  email: string,
  subLink: string
): string => `${config.client_url}/${subLink}?token=${token}&email=${email}`;

export const generateOtp = (): string =>
  Math.floor(100000 + Math.random() * 900000).toString();
