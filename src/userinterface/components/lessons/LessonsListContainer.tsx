"use client";

import { useEffect } from "react";
import { LessonsList } from "./LessonsList";
import { useLessonsViewModel } from "./LessonsViewModel";

interface LessonsListContainerProps {
  moduleId?: string;
}

export function LessonsListContainer({ moduleId }: LessonsListContainerProps) {
  const {
    lessons,
    isLoading,
    error,
    loadAllLessons,
    loadLessonsByModuleId,
    handleRefresh,
    handleClearError,
    handleRetry,
    hasError,
    isEmpty,
    hasData,
  } = useLessonsViewModel();

  useEffect(() => {
    if (moduleId) {
      loadLessonsByModuleId(moduleId);
    } else {
      loadAllLessons();
    }
  }, [moduleId]);

  if (hasError) {
    return (
      <div className="p-4 bg-red-50 border border-red-200 rounded-md">
        <div className="flex justify-between items-center mb-3">
          <div className="text-red-800">Error: {error}</div>
          <button
            onClick={handleClearError}
            className="text-red-600 hover:text-red-800 text-sm"
          >
            Clear
          </button>
        </div>
        <button
          onClick={handleRetry}
          className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
        >
          Retry
        </button>
      </div>
    );
  }

  if (isEmpty) {
    return (
      <div className="text-center p-8">
        <div className="text-gray-600 mb-4">
          {moduleId ? "No lessons found for this module" : "No lessons found"}
        </div>
        <button
          onClick={handleRefresh}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Refresh
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">
          Lessons {hasData && `(${lessons.length})`}
        </h2>
        <button
          onClick={handleRefresh}
          className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
        >
          Refresh
        </button>
      </div>

      <LessonsList lessons={lessons} isLoading={isLoading} error={error} />
    </div>
  );
}
