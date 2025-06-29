"use client";

import { useEffect } from "react";
import { ModulesList } from "./ModulesList";
import { useModulesViewModel } from "./ModulesViewModel";

interface ModulesListContainerProps {
  courseId?: string;
}

export function ModulesListContainer({ courseId }: ModulesListContainerProps) {
  const { modules, isLoading, error, loadAllModules, loadModulesByCourseId } =
    useModulesViewModel();

  useEffect(() => {
    if (courseId) {
      loadModulesByCourseId(courseId);
    } else {
      loadAllModules();
    }
  }, [courseId]);

  return <ModulesList modules={modules} isLoading={isLoading} error={error} />;
}
