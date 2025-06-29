import { useState, useEffect } from "react";
import { useLessonsPresenter } from "@/infrastructure/presenters/lessons.presenter";
import { Lesson } from "@/domain/models/lessons.interface";

export function useLessonsViewModel() {
  const {
    lessons,
    isLoading,
    error,
    fetchLessons,
    getLessonsByModuleId,
    refreshLessons,
    clearError,
  } = useLessonsPresenter();

  const loadAllLessons = async () => {
    await fetchLessons();
  };

  const loadLessonsByModuleId = async (moduleId: string) => {
    await getLessonsByModuleId(moduleId);
  };

  const handleRefresh = async () => {
    await refreshLessons();
  };

  const handleClearError = () => {
    clearError();
  };

  const handleRetry = async () => {
    clearError();
    await fetchLessons();
  };

  return {
    lessons,
    isLoading,
    error,
    hasError: !!error,
    isEmpty: lessons.length === 0 && !isLoading && !error,
    hasData: lessons.length > 0,
    loadAllLessons,
    loadLessonsByModuleId,
    handleRefresh,
    handleClearError,
    handleRetry,
  };
}

export function useLessonViewModel(lessonId: string | null) {
  const { getLessonById } = useLessonsPresenter();
  const [state, setState] = useState<{
    lesson: Lesson | null;
    isLoading: boolean;
    error: string | null;
  }>({
    lesson: null,
    isLoading: false,
    error: null,
  });

  const loadLesson = async (id: string) => {
    setState((prev) => ({ ...prev, isLoading: true, error: null }));

    try {
      const lesson = await getLessonById(id);

      setState({
        lesson,
        isLoading: false,
        error: null,
      });
    } catch (error) {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: error instanceof Error ? error.message : "Unknown error",
      }));
    }
  };

  useEffect(() => {
    if (lessonId) {
      loadLesson(lessonId);
    }
  }, [lessonId]);

  return {
    ...state,
    loadLesson,
  };
}
