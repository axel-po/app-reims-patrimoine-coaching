"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface UserStatus {
  id: string;
  email: string;
  name: string;
  hasPaid: boolean;
  subscriptionStatus: string | null;
}

interface PaymentProtectionState {
  isLoading: boolean;
  isAuthenticated: boolean;
  hasPaid: boolean;
  user: UserStatus | null;
  error: string | null;
}

export function usePaymentProtection() {
  const [state, setState] = useState<PaymentProtectionState>({
    isLoading: true,
    isAuthenticated: false,
    hasPaid: false,
    user: null,
    error: null,
  });
  
  const router = useRouter();

  useEffect(() => {
    const checkPaymentStatus = async () => {
      try {
        const response = await fetch("/api/user/status");
        
        if (response.status === 401) {
          // Non authentifié -> redirection vers login
          const currentUrl = window.location.pathname + window.location.search;
          router.replace(`/login?redirect=${encodeURIComponent(currentUrl)}`);
          return;
        }
        
        if (!response.ok) {
          throw new Error("Erreur lors de la vérification du statut");
        }
        
        const data = await response.json();
        const user = data.user;
        
        setState({
          isLoading: false,
          isAuthenticated: true,
          hasPaid: user.hasPaid,
          user,
          error: null,
        });
        
        // Si l'utilisateur n'a pas payé -> redirection vers payment
        if (!user.hasPaid) {
          const currentUrl = window.location.pathname + window.location.search;
          router.replace(`/payment?redirect=${encodeURIComponent(currentUrl)}`);
        }
        
      } catch (error) {
        console.error("Erreur vérification paiement:", error);
        setState({
          isLoading: false,
          isAuthenticated: false,
          hasPaid: false,
          user: null,
          error: error instanceof Error ? error.message : "Erreur inconnue",
        });
      }
    };

    checkPaymentStatus();
  }, [router]);

  return state;
}