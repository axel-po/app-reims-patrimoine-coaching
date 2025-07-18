"use client";

import React, { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { useRouter } from "next/navigation";

interface UserStatus {
  id: string;
  email: string;
  name: string;
  hasPaid: boolean;
  subscriptionStatus: string | null;
}

export default function PaymentStatusBadge() {
  const [userStatus, setUserStatus] = useState<UserStatus | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchUserStatus = async () => {
      try {
        const response = await fetch("/api/user/status");
        
        if (response.ok) {
          const data = await response.json();
          setUserStatus(data.user);
        } else if (response.status === 401) {
          // Utilisateur non authentifié
          setUserStatus(null);
        }
      } catch (error) {
        console.error("Erreur récupération statut:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserStatus();
  }, []);

  if (loading) {
    return (
      <Badge variant="outline" className="animate-pulse">
        <div className="w-16 h-4 bg-muted rounded"></div>
      </Badge>
    );
  }

  if (!userStatus) {
    return null; // Pas d'utilisateur connecté
  }

  const handlePaymentClick = () => {
    router.push("/payment");
  };

  if (userStatus.hasPaid) {
    return (
      <Badge variant="default" className="bg-green-500 hover:bg-green-600 text-white">
        <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
        Premium
      </Badge>
    );
  }

  return (
    <Badge 
      variant="secondary" 
      className="bg-orange-100 hover:bg-orange-200 text-orange-800 cursor-pointer transition-colors"
      onClick={handlePaymentClick}
    >
      <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.414-1.414L11 9.586V6z" clipRule="evenodd" />
      </svg>
      Gratuit - Passer au Premium
    </Badge>
  );
}