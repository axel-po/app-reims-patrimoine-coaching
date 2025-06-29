import { useState, useEffect } from "react";
import { useLessonsPresenter } from "@/infrastructure/presenters/lessons.presenter";
import { Lesson } from "@/domain/models/lessons.interface";
import { getLessonsByModuleIdAction } from "@/userinterface/actions/lessons.actions";

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

// Hook specialized for module-specific lessons without affecting global state
export function useModuleLessonsViewModel(moduleId: string) {
  const [state, setState] = useState<{
    lessons: Lesson[];
    isLoading: boolean;
    error: string | null;
  }>({
    lessons: [],
    isLoading: false,
    error: null,
  });

  const loadLessons = async () => {
    // Don't load if already loaded
    if (state.lessons.length > 0) return;

    setState((prev) => ({ ...prev, isLoading: true, error: null }));

    try {
      const result = await getLessonsByModuleIdAction(moduleId);

      if (result.error) {
        setState((prev) => ({
          ...prev,
          isLoading: false,
          error: result.error?.message || "Unknown error",
        }));
      } else {
        setState({
          lessons: result.data || [],
          isLoading: false,
          error: null,
        });
      }
    } catch (err) {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: err instanceof Error ? err.message : "Error loading lessons",
      }));
    }
  };

  const hasLessonWithId = (lessonId: string) => {
    return state.lessons.some((lesson) => lesson.id === lessonId);
  };

  useEffect(() => {
    if (moduleId) {
      loadLessons();
    }
  }, [moduleId]);

  return {
    ...state,
    hasData: state.lessons.length > 0,
    isEmpty: state.lessons.length === 0 && !state.isLoading && !state.error,
    hasError: !!state.error,
    loadLessons,
    hasLessonWithId,
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
