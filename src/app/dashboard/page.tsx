"use client";

import React from "react";
import { useQueryState } from "nuqs";
import { LessonDetailView } from "@/userinterface/components/dashboard/lessons/LessonDetailView";

export default function Dashboard() {
  const [selectedLessonId] = useQueryState("lessonId");

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="flex">
        <div className="flex-1 flex flex-col h-[calc(100vh-73px)]">
          <div className="flex-1 flex flex-col p-8">
            {selectedLessonId ? (
              <LessonDetailView lessonId={selectedLessonId} />
            ) : (
              <div className="flex-1 flex items-center justify-center">
                <div className="text-center">
                  <h2 className="text-2xl font-semibold text-slate-700 mb-2">
                    Sélectionnez une leçon
                  </h2>
                  <p className="text-slate-500">
                    Cliquez sur une leçon dans la barre latérale pour commencer
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
