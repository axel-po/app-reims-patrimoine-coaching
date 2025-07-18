"use client";

import React from "react";
import { usePaymentProtection } from "@/hooks/usePaymentProtection";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface PaymentProtectionProps {
  children: React.ReactNode;
  showDebug?: boolean;
}

export default function PaymentProtection({ children, showDebug = false }: PaymentProtectionProps) {
  const { isLoading, isAuthenticated, hasPaid, user, error } = usePaymentProtection();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
          <p className="text-muted-foreground">Vérification des accès...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card className="max-w-md">
          <CardHeader>
            <CardTitle className="text-red-600">Erreur d'accès</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">{error}</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="animate-pulse">
            <p className="text-muted-foreground">Redirection vers la connexion...</p>
          </div>
        </div>
      </div>
    );
  }

  if (!hasPaid) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="animate-pulse">
            <p className="text-muted-foreground">Redirection vers le paiement...</p>
          </div>
        </div>
      </div>
    );
  }

  // L'utilisateur a payé, on affiche le contenu
  return (
    <div>
      {showDebug && user && (
        <div className="fixed top-4 right-4 z-50">
          <Card className="w-64">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm">🔍 Debug Protection</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-xs">
              <div>
                <strong>Email:</strong> {user.email}
              </div>
              <div className="flex items-center gap-1">
                <strong>Payé:</strong>
                <Badge variant={user.hasPaid ? "default" : "destructive"} className="text-xs">
                  {user.hasPaid ? "✅" : "❌"}
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
      {children}
    </div>
  );
}