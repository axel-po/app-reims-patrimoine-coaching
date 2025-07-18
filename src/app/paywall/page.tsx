"use client";

import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, CreditCard, Lock } from "lucide-react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/auth/useAuth";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

export default function PaywallPage() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { user } = useAuth();

  const handleCheckout = async () => {
    if (!user) {
      router.push("/login");
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch("/api/payments/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to create checkout session");
      }

      const { sessionId } = await response.json();
      const stripe = await stripePromise;

      if (!stripe) {
        throw new Error("Stripe not loaded");
      }

      await stripe.redirectToCheckout({ sessionId });
    } catch (error) {
      console.error("Checkout error:", error);
      alert("Une erreur est survenue lors du paiement. Veuillez réessayer.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-lg">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center">
            <Lock className="w-8 h-8 text-indigo-600" />
          </div>
          <CardTitle className="text-2xl font-bold text-gray-900">
            Accès Premium Requis
          </CardTitle>
          <p className="text-gray-600 mt-2">
            Déverrouillez l&apos;accès complet à votre formation patrimoine
          </p>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
              <span className="text-sm text-gray-700">
                Accès illimité à tous les modules de formation
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
              <span className="text-sm text-gray-700">
                Vidéos HD avec streaming sécurisé
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
              <span className="text-sm text-gray-700">
                Suivi de progression personnalisé
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
              <span className="text-sm text-gray-700">
                Support client dédié
              </span>
            </div>
          </div>

          <div className="border-t pt-4">
            <div className="flex items-center justify-between mb-4">
              <span className="text-lg font-semibold text-gray-900">
                Formation Patrimoine Reims
              </span>
              <Badge variant="secondary">Paiement unique</Badge>
            </div>
            <div className="text-center mb-4">
              <div className="text-3xl font-bold text-gray-900">297€</div>
              <div className="text-sm text-gray-600">Accès à vie</div>
            </div>
          </div>

          <Button
            onClick={handleCheckout}
            disabled={isLoading}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3"
            size="lg"
          >
            {isLoading ? (
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Redirection...</span>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <CreditCard className="w-5 h-5" />
                <span>Procéder au paiement</span>
              </div>
            )}
          </Button>

          <p className="text-xs text-gray-500 text-center">
            Paiement sécurisé par Stripe. Aucun abonnement récurrent.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}