"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckIcon, LoaderIcon } from "lucide-react";

export default function PaywallPage() {
  const [isLoading, setIsLoading] = useState(false);

  const handlePurchase = async () => {
    try {
      setIsLoading(true);

      const response = await fetch("/api/stripe/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      if (data.url) {
        window.location.href = data.url;
      } else {
        console.error("No checkout URL received");
      }
    } catch (error) {
      console.error("Error creating checkout session:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">
            Accès Premium Requis
          </CardTitle>
          <CardDescription>
            Débloquez l&apos;accès à vie au dashboard de coaching patrimoine
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">290€</div>
            <Badge variant="secondary">Paiement unique - Accès à vie</Badge>
            <p className="text-sm text-muted-foreground mt-2">
              Payable en plusieurs fois
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <CheckIcon className="h-5 w-5 text-green-500 flex-shrink-0" />
              <span className="text-sm">Accès à vie au dashboard</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckIcon className="h-5 w-5 text-green-500 flex-shrink-0" />
              <span className="text-sm">Tous les modules de formation</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckIcon className="h-5 w-5 text-green-500 flex-shrink-0" />
              <span className="text-sm">Suivi personnalisé de progression</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckIcon className="h-5 w-5 text-green-500 flex-shrink-0" />
              <span className="text-sm">Support prioritaire</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckIcon className="h-5 w-5 text-green-500 flex-shrink-0" />
              <span className="text-sm">
                Paiement en plusieurs fois disponible
              </span>
            </div>
          </div>

          <Button
            onClick={handlePurchase}
            disabled={isLoading}
            className="w-full"
            size="lg"
          >
            {isLoading ? (
              <>
                <LoaderIcon className="mr-2 h-4 w-4 animate-spin" />
                Redirection...
              </>
            ) : (
              "Acheter maintenant"
            )}
          </Button>

          <p className="text-xs text-muted-foreground text-center">
            Paiement sécurisé par Stripe. Paiement en plusieurs fois disponible.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
