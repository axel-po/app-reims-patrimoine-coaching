import Stripe from "stripe";

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-05-28.basil",
});

export const STRIPE_CONFIG = {
  publishableKey: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!,
  priceId: process.env.STRIPE_PRICE_ID!, // Your subscription price ID
  webhookSecret: process.env.STRIPE_WEBHOOK_SECRET!,
} as const;
