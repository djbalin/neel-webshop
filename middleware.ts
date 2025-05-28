import { NextRequest, NextResponse } from "next/server";
import { CONSTANTS } from "./app/constants";

export function middleware(request: NextRequest) {
  // Check if the path starts with /da/
  if (request.nextUrl.pathname.startsWith("/da/")) {
    // Option 1: Redirect to home
    return NextResponse.redirect(
      new URL(CONSTANTS.LINKS.BOOKS.da, request.url)
    );
  }
}

export const config = {
  matcher: "/da/:path*",
};
