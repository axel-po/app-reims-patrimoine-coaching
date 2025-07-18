import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { db } from "@/infrastructure/database/client";
import { user, payment } from "@/infrastructure/database/schemas/user.schema";
import { eq } from "drizzle-orm";
import Stripe from "stripe";

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

export async function POST(request: NextRequest) {
  if (!webhookSecret) {
    console.error("STRIPE_WEBHOOK_SECRET n'est pas défini");
    return NextResponse.json(
      { error: "Configuration webhook manquante" },
      { status: 500 }
    );
  }

  const body = await request.text();
  const sig = request.headers.get("stripe-signature");

  if (!sig) {
    return NextResponse.json(
      { error: "Signature manquante" },
      { status: 400 }
    );
  }

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(body, sig, webhookSecret);
  } catch (err) {
    console.error("Erreur validation webhook:", err);
    return NextResponse.json(
      { error: "Signature invalide" },
      { status: 400 }
    );
  }

  try {
    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object as Stripe.Checkout.Session;
        const userId = session.metadata?.userId;
        
        if (!userId) {
          console.error("UserId manquant dans les métadonnées");
          return NextResponse.json(
            { error: "UserId manquant" },
            { status: 400 }
          );
        }

        // Mettre à jour le statut de paiement de l'utilisateur
        await db
          .update(user)
          .set({ 
            hasPaid: true,
            subscriptionStatus: "active",
            updatedAt: new Date()
          })
          .where(eq(user.id, userId));

        // Enregistrer le paiement
        if (session.payment_intent) {
          await db.insert(payment).values({
            id: `payment_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
            userId,
            stripePaymentIntentId: session.payment_intent.toString(),
            amount: session.amount_total?.toString() || "0",
            currency: session.currency || "eur",
            status: "succeeded",
            createdAt: new Date(),
            updatedAt: new Date(),
          });
        }

        console.log(`Paiement réussi pour l'utilisateur ${userId}`);
        break;
      }

      case "payment_intent.payment_failed": {
        const paymentIntent = event.data.object as Stripe.PaymentIntent;
        
        // Mettre à jour le statut du paiement
        await db
          .update(payment)
          .set({ 
            status: "failed",
            updatedAt: new Date()
          })
          .where(eq(payment.stripePaymentIntentId, paymentIntent.id));

        console.log(`Paiement échoué: ${paymentIntent.id}`);
        break;
      }

      default:
        console.log(`Événement non géré: ${event.type}`);
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error("Erreur traitement webhook:", error);
    return NextResponse.json(
      { error: "Erreur traitement webhook" },
      { status: 500 }
    );
  }
}