import { NextRequest, NextResponse } from "next/server";
import { stripe, STRIPE_CONFIG } from "@/lib/stripe";
import { db } from "@/infrastructure/database/client";
import { user } from "@/infrastructure/database/schemas/user.schema";
import { eq } from "drizzle-orm";
import Stripe from "stripe";

export async function POST(request: NextRequest) {
  const body = await request.text();
  const signature = request.headers.get("stripe-signature")!;

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      STRIPE_CONFIG.webhookSecret
    );
  } catch (error) {
    console.error("Webhook signature verification failed:", error);
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  try {
    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object as Stripe.Checkout.Session;
        const userId = session.metadata?.userId;

        if (!userId) {
          console.error("No userId in session metadata");
          break;
        }

        // For one-time payment, mark user as having paid
        await db
          .update(user)
          .set({
            subscriptionStatus: "paid", // Changed from "active" to "paid"
            subscriptionExpiresAt: null, // No expiration for one-time payment
          })
          .where(eq(user.id, userId));

        console.log(`One-time payment completed for user ${userId}`);
        break;
      }

      case "payment_intent.succeeded": {
        const paymentIntent = event.data.object as Stripe.PaymentIntent;

        // Find user by customer ID if available
        if (paymentIntent.customer) {
          const customerId =
            typeof paymentIntent.customer === "string"
              ? paymentIntent.customer
              : paymentIntent.customer.id;

          const userData = await db
            .select()
            .from(user)
            .where(eq(user.stripeCustomerId, customerId))
            .limit(1);

          if (userData[0]) {
            await db
              .update(user)
              .set({
                subscriptionStatus: "paid",
                subscriptionExpiresAt: null,
              })
              .where(eq(user.id, userData[0].id));

            console.log(`Payment confirmed for user ${userData[0].id}`);
          }
        }
        break;
      }

      default:
        console.log(`Unhandled event type: ${event.type}`);
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error("Webhook processing error:", error);
    return NextResponse.json(
      { error: "Webhook processing failed" },
      { status: 500 }
    );
  }
}
