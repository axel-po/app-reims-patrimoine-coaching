import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { db } from "@/infrastructure/database/client";
import { user } from "@/infrastructure/database/schemas/user.schema";
import { eq } from "drizzle-orm";

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

      // Check payment status
      const userData = await db
        .select()
        .from(user)
        .where(eq(user.id, session.user.id))
        .limit(1);

      if (!userData[0]) {
        const loginUrl = new URL("/login", request.url);
        return NextResponse.redirect(loginUrl);
      }

      const currentUser = userData[0];

      // Check if user has paid (one-time payment)
      const hasPaid = currentUser.subscriptionStatus === "paid";

      if (!hasPaid) {
        // Redirect to paywall if payment not completed
        const paywallUrl = new URL("/paywall", request.url);
        return NextResponse.redirect(paywallUrl);
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
