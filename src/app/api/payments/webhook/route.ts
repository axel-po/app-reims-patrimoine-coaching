import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { db } from "@/infrastructure/database/client";
import { user, payment } from "@/infrastructure/database/schemas/user.schema";
import { eq } from "drizzle-orm";
import { headers } from "next/headers";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-06-30.basil",
});

const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET!;

export async function POST(request: NextRequest) {
  try {
    const body = await request.text();
    const headersList = await headers();
    const sig = headersList.get("stripe-signature");

    if (!sig) {
      return NextResponse.json({ error: "No signature" }, { status: 400 });
    }

    const event = stripe.webhooks.constructEvent(body, sig, endpointSecret);

    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object as Stripe.Checkout.Session;
        const userId = session.metadata?.userId;

        if (!userId) {
          console.error("No userId in session metadata");
          return NextResponse.json({ error: "No userId" }, { status: 400 });
        }

        await db
          .update(user)
          .set({ subscriptionStatus: "paid" })
          .where(eq(user.id, userId));

        await db.insert(payment).values({
          id: crypto.randomUUID(),
          userId: userId,
          stripePaymentIntentId: session.payment_intent as string,
          stripeSessionId: session.id,
          amount: String(session.amount_total! / 100),
          currency: session.currency || "eur",
          status: "succeeded",
        });

        break;
      }

      case "payment_intent.succeeded": {
        const paymentIntent = event.data.object as Stripe.PaymentIntent;
        
        await db
          .update(payment)
          .set({ status: "succeeded" })
          .where(eq(payment.stripePaymentIntentId, paymentIntent.id));

        break;
      }

      case "payment_intent.payment_failed": {
        const paymentIntent = event.data.object as Stripe.PaymentIntent;
        
        await db
          .update(payment)
          .set({ status: "failed" })
          .where(eq(payment.stripePaymentIntentId, paymentIntent.id));

        break;
      }

      default:
        console.log(`Unhandled event type: ${event.type}`);
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error("Webhook error:", error);
    return NextResponse.json(
      { error: "Webhook handler failed" },
      { status: 500 }
    );
  }
}