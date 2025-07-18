import Stripe from "stripe";

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error("STRIPE_SECRET_KEY is not defined");
}

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2024-12-18.acacia",
  typescript: true,
});

export const STRIPE_CONFIG = {
  currency: "eur",
  course_price: 29700, // 297€ en centimes
  success_url: "/dashboard",
  cancel_url: "/guide-gratuit",
} as const;