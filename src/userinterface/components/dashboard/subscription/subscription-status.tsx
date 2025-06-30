"use client";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckCircleIcon, CreditCardIcon } from "lucide-react";

interface PaymentStatusProps {
  subscriptionStatus: string | null;
}

export function SubscriptionStatus({ subscriptionStatus }: PaymentStatusProps) {
  const getStatusBadge = () => {
    switch (subscriptionStatus) {
      case "paid":
        return (
          <Badge variant="default" className="bg-green-500">
            Payé - Accès à vie
          </Badge>
        );
      default:
        return <Badge variant="outline">Non payé</Badge>;
    }
  };

  const isPaid = subscriptionStatus === "paid";

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <CreditCardIcon className="h-5 w-5" />
          Statut du paiement
        </CardTitle>
        <CardDescription>
          Votre accès au dashboard de coaching patrimoine
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">Statut :</span>
          {getStatusBadge()}
        </div>

        {isPaid && (
          <div className="flex items-center gap-2 p-3 bg-green-50 dark:bg-green-950 rounded-lg">
            <CheckCircleIcon className="h-4 w-4 text-green-600" />
            <span className="text-sm text-green-800 dark:text-green-200">
              Vous avez un accès à vie au dashboard complet !
            </span>
          </div>
        )}

        {!isPaid && (
          <div className="p-3 bg-orange-50 dark:bg-orange-950 rounded-lg">
            <span className="text-sm text-orange-800 dark:text-orange-200">
              Effectuez le paiement pour débloquer l&apos;accès complet.
            </span>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
