import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value

  const protectedRoutes = ["/dashboard", "/profile", "/settings"]

  if (
    protectedRoutes.some(route => req.nextUrl.pathname.startsWith(route)) &&
    !token
  ) {
    return NextResponse.redirect(new URL("/login", req.url))
  }

  return NextResponse.next()
}