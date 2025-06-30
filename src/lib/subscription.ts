import { db } from "@/infrastructure/database/client";
import { user } from "@/infrastructure/database/schemas/user.schema";
import { eq } from "drizzle-orm";

export async function checkUserSubscription(userId: string) {
  const userData = await db
    .select()
    .from(user)
    .where(eq(user.id, userId))
    .limit(1);

  if (!userData[0]) {
    return { hasActiveSubscription: false, user: null };
  }

  const currentUser = userData[0];

  // For one-time payment, user has access if they have paid (no expiration)
  const hasActiveSubscription = currentUser.subscriptionStatus === "paid";

  return {
    hasActiveSubscription,
    user: currentUser,
    subscriptionStatus: currentUser.subscriptionStatus,
    expiresAt: null, // No expiration for one-time payment
  };
}
