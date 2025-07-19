"use client";

import React, { useState, Suspense } from "react";
import { Button } from "@/components/ui/button";
import { useSearchParams } from "next/navigation";
import { toast } from "sonner";

function PaymentFormContent() {
  const [isLoading, setIsLoading] = useState(false);
  const searchParams = useSearchParams();
  
  const redirectUrl = searchParams.get("redirect");

  const handlePayment = async () => {
    setIsLoading(true);
    
    try {
      const response = await fetch("/api/payments/create-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          redirect: redirectUrl
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Erreur lors de la création de la session");
      }

      if (data.url) {
        // Rediriger vers Stripe Checkout
        window.location.href = data.url;
      } else {
        throw new Error("URL de paiement non reçue");
      }
    } catch (error) {
      console.error("Erreur paiement:", error);
      toast.error(
        error instanceof Error 
          ? error.message 
          : "Une erreur est survenue lors du paiement"
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div className="flex items-center gap-3 p-4 bg-primary/5 rounded-lg">
          <svg className="h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
          </svg>
          <div>
            <div className="font-medium text-sm">Paiement sécurisé par Stripe</div>
            <div className="text-xs text-muted-foreground">Vos données sont protégées</div>
          </div>
        </div>

        <div className="space-y-2">
          <div className="text-sm font-medium">Méthodes de paiement acceptées:</div>
          <div className="flex gap-2">
            <div className="px-3 py-1 bg-muted rounded text-xs">💳 Carte bancaire</div>
            <div className="px-3 py-1 bg-muted rounded text-xs">🏦 Virement</div>
            <div className="px-3 py-1 bg-muted rounded text-xs">📱 Apple Pay</div>
          </div>
        </div>
      </div>

      <Button
        onClick={handlePayment}
        disabled={isLoading}
        className="w-full group relative overflow-hidden rounded-full py-6 text-lg font-semibold transition-all duration-500 hover:shadow-2xl hover:shadow-primary/25 hover:scale-105"
        size="lg"
      >
        <span className="relative z-10 flex items-center justify-center gap-2">
          {isLoading ? (
            <>
              <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Redirection en cours...
            </>
          ) : (
            <>
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
              Procéder au paiement - 297€
              <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </>
          )}
        </span>
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 transition-all duration-500 group-hover:from-primary/90 group-hover:to-primary/70" />
      </Button>

      <div className="text-center text-xs text-muted-foreground">
        En procédant au paiement, vous acceptez nos{" "}
        <a href="#" className="text-primary hover:underline">
          conditions d&apos;utilisation
        </a>{" "}
        et notre{" "}
        <a href="#" className="text-primary hover:underline">
          politique de confidentialité
        </a>
        .
      </div>
    </div>
  );
}

export default function PaymentForm() {
  return (
    <Suspense fallback={<div className="text-center">Chargement...</div>}>
      <PaymentFormContent />
    </Suspense>
  );
}