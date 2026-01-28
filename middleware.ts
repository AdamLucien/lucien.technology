import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === "/portal/delivery") {
    const url = request.nextUrl.clone();
    url.pathname = "/portal/hr";
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/portal/delivery"],
};
