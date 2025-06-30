import { NextRequest, NextResponse } from "next/server";
import { stripe, STRIPE_CONFIG } from "@/lib/stripe";
import { auth } from "@/lib/auth";
import { db } from "@/infrastructure/database/client";
import { user } from "@/infrastructure/database/schemas/user.schema";
import { eq } from "drizzle-orm";

export async function POST(request: NextRequest) {
  try {
    const session = await auth.api.getSession({
      headers: request.headers,
    });

    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const userData = await db
      .select()
      .from(user)
      .where(eq(user.id, session.user.id))
      .limit(1);

    if (!userData[0]) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const currentUser = userData[0];

    // Create or retrieve Stripe customer
    let stripeCustomerId = currentUser.stripeCustomerId;

    if (!stripeCustomerId) {
      const customer = await stripe.customers.create({
        email: currentUser.email,
        name: currentUser.name,
      });

      stripeCustomerId = customer.id;

      // Update user with Stripe customer ID
      await db
        .update(user)
        .set({ stripeCustomerId })
        .where(eq(user.id, session.user.id));
    }

    // Create checkout session for one-time payment with installments
    const checkoutSession = await stripe.checkout.sessions.create({
      customer: stripeCustomerId,
      payment_method_types: ["card"],
      line_items: [
        {
          price: STRIPE_CONFIG.priceId,
          quantity: 1,
        },
      ],
      mode: "payment",
      payment_method_options: {
        card: {
          installments: {
            enabled: true,
          },
        },
      },
      success_url: `${request.nextUrl.origin}/dashboard?payment=success`,
      cancel_url: `${request.nextUrl.origin}/paywall?payment=cancelled`,
      metadata: {
        userId: session.user.id,
      },
    });

    return NextResponse.json({ url: checkoutSession.url });
  } catch (error) {
    console.error("Stripe checkout error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
