import { useEffect } from "react";
import { useCoursesPresenter } from "@/infrastructure/presenters/courses.presenter";

export function useCoursesViewModel() {
  const {
    courses,
    isLoading,
    error,
    fetchCourses,
    refreshCourses,
    clearError,
  } = useCoursesPresenter();

  // Auto-fetch courses on mount
  useEffect(() => {
    if (courses.length === 0 && !isLoading && !error) {
      fetchCourses();
    }
  }, [courses.length, isLoading, error]);

  const handleRefresh = async () => {
    await refreshCourses();
  };

  const handleClearError = () => {
    clearError();
  };

  const handleRetry = async () => {
    clearError();
    await fetchCourses();
  };

  return {
    // State
    courses,
    isLoading,
    error,
    hasError: !!error,
    isEmpty: courses.length === 0 && !isLoading && !error,
    hasData: courses.length > 0,

    // Actions
    handleRefresh,
    handleClearError,
    handleRetry,
  };
}

// ViewModel for individual course operations
export function useCourseViewModel(courseId?: string) {
  const { getCourseById } = useCoursesPresenter();

  const handleGetCourse = async () => {
    if (!courseId) return null;
    return await getCourseById(courseId);
  };

  return {
    handleGetCourse,
  };
}
