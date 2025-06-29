"use client";

import { useCoursesViewModel } from "./CoursesViewModel";

export function CoursesList() {
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

  if (isLoading) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="text-gray-600">Loading courses...</div>
      </div>
    );
  }

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
        <div className="text-gray-600 mb-4">No courses found</div>
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
        <h2 className="text-2xl font-bold">Courses ({courses.length})</h2>
        <button
          onClick={handleRefresh}
          className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
        >
          Refresh
        </button>
      </div>

      {hasData && (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <div
              key={course.id}
              className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-semibold">{course.title}</h3>
                {course.isRecent && (
                  <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">
                    Recent
                  </span>
                )}
              </div>

              {course.description && (
                <p className="text-gray-600 mb-3 line-clamp-3">
                  {course.description}
                </p>
              )}

              <div className="text-sm text-gray-500">
                Created: {course.createdAt?.toLocaleDateString() || "Unknown"}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
