import { NextResponse } from "next/server";

export function middleware(req) {
  const isAuth = req.cookies.get("auth");
  const protectedRoute = req.nextUrl.pathname.startsWith("/items/add");

  if (protectedRoute && !isAuth) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
}