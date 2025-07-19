import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import PaymentForm from "./payment-form";

export default function PaymentPage() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/5 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Accédez à la formation complète
            </h1>
            <p className="text-lg text-muted-foreground">
              Pour continuer et accéder au dashboard, vous devez débloquer
              l&apos;accès à la formation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-2xl">
                  Formation Patrimoine & Investissement
                </CardTitle>
                <CardDescription>
                  Tout ce dont vous avez besoin pour maîtriser vos finances
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Accès complet aux modules de formation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Vidéos explicatives détaillées</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Ressources téléchargeables</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Suivi de progression personnalisé</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Accès à vie</span>
                  </div>
                </div>

                <div className="border-t pt-4 mt-6">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-medium">Prix total</span>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary">
                        297€
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Paiement unique
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20">
              <CardHeader>
                <CardTitle className="text-xl">Paiement sécurisé</CardTitle>
                <CardDescription>
                  Procédez au paiement pour débloquer l&apos;accès immédiatement
                </CardDescription>
              </CardHeader>
              <CardContent>
                <PaymentForm />
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <div className="flex flex-wrap items-center justify-center gap-8">
              <div className="flex items-center gap-2">
                <svg
                  className="h-5 w-5 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm text-muted-foreground">
                  Paiement sécurisé SSL
                </span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="h-5 w-5 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm text-muted-foreground">
                  Garantie satisfait ou remboursé 30 jours
                </span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="h-5 w-5 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm text-muted-foreground">
                  Accès immédiat
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
