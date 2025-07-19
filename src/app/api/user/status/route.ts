import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { db } from "@/infrastructure/database/client";
import { user } from "@/infrastructure/database/schemas/user.schema";
import { eq } from "drizzle-orm";

export async function GET(request: NextRequest) {
  try {
    const session = await auth.api.getSession({
      headers: request.headers,
    });

    if (!session?.user) {
      return NextResponse.json({ error: "Non authentifié" }, { status: 401 });
    }

    const [currentUser] = await db
      .select({
        id: user.id,
        email: user.email,
        name: user.name,
        hasPaid: user.hasPaid,
        subscriptionStatus: user.subscriptionStatus,
      })
      .from(user)
      .where(eq(user.id, session.user.id));

    if (!currentUser) {
      return NextResponse.json(
        { error: "Utilisateur non trouvé" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      user: currentUser,
    });
  } catch (error) {
    console.error("Erreur récupération statut utilisateur:", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
