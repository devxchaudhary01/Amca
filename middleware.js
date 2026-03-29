import { NextResponse } from "next/server";

export function middleware(request) {
  const host = request.headers.get("host");

  if (host === "amcaindustries.vercel.app") {
    return NextResponse.redirect(
      "https://www.amcaindustries.com" + request.nextUrl.pathname,
      301
    );
  }

  return NextResponse.next();
}