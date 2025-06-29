"use client";

import React from "react";
import { Clock, AlertCircle, RefreshCw } from "lucide-react";
import { useCoursesViewModel } from "@/userinterface/components/dashboard/courses/CoursesViewModel";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";

export default function CourseInfo() {
  const {
    courses,
    isLoading,
    error,
    hasError,
    isEmpty,
    hasData,
    handleRefresh,
    handleClearError,
    handleRetry,
  } = useCoursesViewModel();

  // Loading state
  if (isLoading) {
    return (
      <>
        <div className="px-3 pb-4 border-b border-slate-100">
          <div className="space-y-3">
            <Skeleton className="h-6 w-3/4" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-2/3" />
            <div className="flex items-center gap-4">
              <Skeleton className="h-3 w-16" />
            </div>
          </div>
        </div>
      </>
    );
  }

  // Error state
  if (hasError) {
    return (
      <>
        <div className="px-3 pb-4 border-b border-slate-100">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-red-600">
              <AlertCircle className="w-4 h-4" />
              <span className="text-sm font-medium">Erreur de chargement</span>
            </div>
            <p className="text-sm text-slate-600">
              {error ||
                "Une erreur s&apos;est produite lors du chargement du cours"}
            </p>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={handleRetry}
                className="flex items-center gap-1"
              >
                <RefreshCw className="w-3 h-3" />
                Réessayer
              </Button>
              <Button variant="ghost" size="sm" onClick={handleClearError}>
                Ignorer
              </Button>
            </div>
          </div>
        </div>
      </>
    );
  }

  // Empty state
  if (isEmpty || !hasData) {
    return (
      <>
        <div className="px-3 pb-4 border-b border-slate-100">
          <div className="space-y-3">
            <div className="text-center text-slate-500">
              <p className="text-sm">Aucun cours disponible</p>
              <Button
                variant="outline"
                size="sm"
                onClick={handleRefresh}
                className="mt-2"
              >
                Actualiser
              </Button>
            </div>
          </div>
        </div>
      </>
    );
  }

  const currentCourse = courses[0];

  return (
    <>
      <div className="px-3 pb-4 border-b border-slate-100">
        <div className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900">
            {currentCourse?.title}
          </h2>
          <p className="text-sm text-slate-600">{currentCourse?.description}</p>

          <div className="flex items-center gap-4 text-xs text-slate-500">
            <div className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              <span>N/A</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
