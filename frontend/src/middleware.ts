import { NextRequest, NextResponse } from "next/server";
import { getCurrentUser } from "./services/auth/getCurrentUser";
const authRoutes = ["/login", "/register"];

type Role = keyof typeof roleBasedPrivateRoutes;

const roleBasedPrivateRoutes = {
  user: [/^\/create-shop/, /^\/dashboard\/user/],
  admin: [/^\/dashboard\/admin/],
};

export const middleware = async (request: NextRequest) => {
  const { pathname } = request.nextUrl;

  const userInfo = await getCurrentUser();
  // console.log("user info:", userInfo);

  if (!userInfo) {
    if (authRoutes.includes(pathname)) {
      // console.log("here");
      return NextResponse.next();
    } else {
      return NextResponse.redirect(
        new URL(
          `${process.env.BASE_URL}/login?redirect=${pathname}&cleanup=true`,
          request.url
        )
      );
    }
  }

  if (userInfo?.role && roleBasedPrivateRoutes[userInfo?.role as Role]) {
    const routes = roleBasedPrivateRoutes[userInfo?.role as Role];
    if (routes.some((route) => pathname.match(route))) {
      return NextResponse.next();
    }
  }

  return NextResponse.redirect(new URL("/", request.url));
};

export const config = {
  matcher: [
    "/create-shop",
    "/dashboard/admin",
    "/dashboard/admin/:page",
    "/dashboard/user",
    "/dashboard/user/:path",
    "/dashboard/user/:path/:page",
    "/login",
    "/register",
  ],
};
