import { NextRequest, NextResponse } from "next/server";
import { stripe, STRIPE_CONFIG } from "@/lib/stripe";
import { auth } from "@/lib/auth";
import { db } from "@/infrastructure/database/client";
import { user } from "@/infrastructure/database/schemas/user.schema";
import { eq } from "drizzle-orm";

export async function POST(request: NextRequest) {
  try {
    // Vérifier l'authentification
    const session = await auth.api.getSession({
      headers: request.headers,
    });

    if (!session?.user) {
      return NextResponse.json(
        { error: "Non authentifié" },
        { status: 401 }
      );
    }

    // Vérifier si l'utilisateur a déjà payé
    const [existingUser] = await db
      .select()
      .from(user)
      .where(eq(user.id, session.user.id));

    if (existingUser?.hasPaid) {
      return NextResponse.json(
        { error: "Vous avez déjà accès au programme" },
        { status: 400 }
      );
    }

    // Créer ou récupérer le customer Stripe
    let customerId = existingUser?.stripeCustomerId;
    
    if (!customerId) {
      const customer = await stripe.customers.create({
        email: session.user.email,
        name: session.user.name,
        metadata: {
          userId: session.user.id,
        },
      });
      
      customerId = customer.id;
      
      // Sauvegarder le customer ID
      await db
        .update(user)
        .set({ stripeCustomerId: customerId })
        .where(eq(user.id, session.user.id));
    }

    // Récupérer l'URL de redirection depuis la requête
    const { redirect } = await request.json();
    const successUrl = redirect 
      ? `${request.nextUrl.origin}${redirect}?success=true`
      : `${request.nextUrl.origin}${STRIPE_CONFIG.success_url}?success=true`;

    // Créer la session de paiement Stripe
    const checkoutSession = await stripe.checkout.sessions.create({
      customer: customerId,
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: STRIPE_CONFIG.currency,
            product_data: {
              name: "Formation Patrimoine & Investissement",
              description: "Accès complet à la formation pour maîtriser tes finances et investir intelligemment",
            },
            unit_amount: STRIPE_CONFIG.course_price,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: successUrl,
      cancel_url: `${request.nextUrl.origin}${STRIPE_CONFIG.cancel_url}?canceled=true`,
      metadata: {
        userId: session.user.id,
      },
    });

    return NextResponse.json({ url: checkoutSession.url });
  } catch (error) {
    console.error("Erreur création session paiement:", error);
    return NextResponse.json(
      { error: "Erreur lors de la création de la session de paiement" },
      { status: 500 }
    );
  }
}