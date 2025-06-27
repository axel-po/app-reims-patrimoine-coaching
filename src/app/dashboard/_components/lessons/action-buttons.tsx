import React from "react";
import { Button } from "@/components/ui/button";
import { Check, RotateCcw } from "lucide-react";

interface ActionButtonsProps {
  isCompleted: boolean;
  onMarkCompleted: () => void;
  onMarkIncomplete: () => void;
}

export default function ActionButtons({
  isCompleted,
  onMarkCompleted,
  onMarkIncomplete,
}: ActionButtonsProps) {
  return (
    <div className="flex items-center justify-center gap-4 mb-6">
      {isCompleted ? (
        <Button
          onClick={onMarkIncomplete}
          variant="outline"
          className="flex items-center gap-2 border-slate-200 hover:bg-slate-50"
        >
          <RotateCcw className="h-4 w-4" />
          Marquer comme non terminé
        </Button>
      ) : (
        <Button
          onClick={onMarkCompleted}
          className="flex items-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
        >
          <Check className="h-4 w-4" />
          Marquer comme terminé
        </Button>
      )}
    </div>
  );
}
