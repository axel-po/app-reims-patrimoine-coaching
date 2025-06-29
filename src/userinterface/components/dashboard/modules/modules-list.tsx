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

  if (isLoading) {
    return (
      <div className="space-y-4">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="animate-pulse">
            <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
            <div className="h-3 bg-gray-200 rounded w-1/2"></div>
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 bg-red-50 border border-red-200 rounded-md">
        <p className="text-red-600">Error: {error}</p>
      </div>
    );
  }

  if (modules.length === 0) {
    return (
      <div className="p-4 bg-gray-50 border border-gray-200 rounded-md">
        <p className="text-gray-600">No modules found.</p>
      </div>
    );
  }

  return (
    <div className="space-y-1">
      {modules.map((module) => (
        <ModuleAccordion key={module.id} module={module} />
      ))}
    </div>
  );
}
