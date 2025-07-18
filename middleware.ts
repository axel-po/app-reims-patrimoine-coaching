import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";

export async function middleware(request: NextRequest) {
  // Only apply middleware to dashboard routes
  if (request.nextUrl.pathname.startsWith("/dashboard")) {
    try {
      const session = await auth.api.getSession({
        headers: request.headers,
      });

      if (!session?.user) {
        // Redirect to login if not authenticated
        const loginUrl = new URL("/login", request.url);
        loginUrl.searchParams.set("redirect", request.nextUrl.pathname);
        return NextResponse.redirect(loginUrl);
      }
    } catch (error) {
      console.error("Middleware auth error:", error);
      const loginUrl = new URL("/login", request.url);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
