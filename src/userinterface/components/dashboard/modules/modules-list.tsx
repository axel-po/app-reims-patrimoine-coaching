"use client";

import React, { useEffect } from "react";
import { useModulesViewModel } from "./ModulesViewModel";
import ModuleAccordion from "./module-accordion";

interface ModulesListProps {
  courseId?: string;
}

export default function ModulesList({ courseId }: ModulesListProps) {
  const { modules, isLoading, error, loadModulesByCourseId } =
    useModulesViewModel();

  useEffect(() => {
    if (courseId) {
      loadModulesByCourseId(courseId);
    }
  }, [courseId]);

  // Loading state
  if (isLoading) {
    return (
      <div className="space-y-1">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="animate-pulse">
            <div className="h-12 bg-muted rounded-lg"></div>
          </div>
        ))}
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="p-4 text-center text-destructive">
        <p>Erreur lors du chargement des modules</p>
        <p className="text-sm text-muted-foreground mt-1">{error}</p>
      </div>
    );
  }

  // Empty state
  if (modules.length === 0) {
    return (
      <div className="p-8 text-center text-muted-foreground">
        <p>Aucun module disponible pour ce cours</p>
      </div>
    );
  }

  // Normal state with data
  return (
    <div className="space-y-1">
      {modules.map((module) => (
        <ModuleAccordion key={module.id} module={module} />
      ))}
    </div>
  );
}
