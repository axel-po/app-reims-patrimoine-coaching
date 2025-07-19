"use client";

import React, { useEffect } from "react";
import { useModulesViewModel } from "./ModulesViewModel";
import ModuleAccordion from "./module-accordion";
import { useQueryState } from "nuqs";
import { getLessonsByModuleIdAction } from "@/userinterface/actions/lessons.actions";

interface ModulesListProps {
  courseId?: string;
}

export default function ModulesList({ courseId }: ModulesListProps) {
  const { modules, isLoading, error, loadModulesByCourseId } =
    useModulesViewModel();
  const [selectedLessonId, setSelectedLessonId] = useQueryState("lessonId");

  useEffect(() => {
    if (courseId) {
      loadModulesByCourseId(courseId);
    }
  }, [courseId, loadModulesByCourseId]);

  // Auto-select first lesson of first module when modules are loaded
  useEffect(() => {
    const selectFirstLesson = async () => {
      // Only if modules are loaded, no lesson is selected, and we have modules
      if (!isLoading && !selectedLessonId && modules.length > 0) {
        const firstModule = modules[0];

        try {
          const result = await getLessonsByModuleIdAction(firstModule.id);

          if (!result.error && result.data.length > 0) {
            const firstLesson = result.data[0];
            setSelectedLessonId(firstLesson.id);
          }
        } catch (error) {
          console.error("Error loading first lesson:", error);
        }
      }
    };

    selectFirstLesson();
  }, [modules, isLoading, selectedLessonId, setSelectedLessonId]);

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
