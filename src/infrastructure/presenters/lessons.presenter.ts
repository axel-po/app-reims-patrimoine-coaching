import { create } from "zustand";
import { Lesson } from "@/domain/models/lessons.interface";
import {
  getAllLessonsAction,
  getLessonByIdAction,
  getLessonsByModuleIdAction,
} from "@/userinterface/actions/lessons.actions";

interface LessonsState {
  lessons: Lesson[];
  isLoading: boolean;
  error: string | null;
}

interface LessonsPresenterState extends LessonsState {
  // Actions
  fetchLessons: () => Promise<void>;
  getLessonById: (id: string) => Promise<Lesson | null>;
  getLessonsByModuleId: (moduleId: string) => Promise<void>;
  refreshLessons: () => Promise<void>;
  clearError: () => void;
  reset: () => void;
}

const initialState: LessonsState = {
  lessons: [],
  isLoading: false,
  error: null,
};

export const useLessonsPresenter = create<LessonsPresenterState>((set) => ({
  ...initialState,

  fetchLessons: async () => {
    set({ isLoading: true, error: null });

    try {
      const result = await getAllLessonsAction();

      if (result.error) {
        set({
          isLoading: false,
          error: result.error.message,
        });
        return;
      }

      set({
        lessons: result.data,
        isLoading: false,
      });
    } catch (error) {
      set({
        isLoading: false,
        error:
          error instanceof Error ? error.message : "Failed to fetch lessons",
      });
    }
  },

  getLessonById: async (id) => {
    try {
      const result = await getLessonByIdAction(id);

      if (result.error) {
        set({ error: result.error.message });
        return null;
      }

      return result.data;
    } catch (error) {
      set({
        error: error instanceof Error ? error.message : "Failed to get lesson",
      });
      return null;
    }
  },

  getLessonsByModuleId: async (moduleId) => {
    set({ isLoading: true, error: null });

    try {
      const result = await getLessonsByModuleIdAction(moduleId);

      if (result.error) {
        set({
          isLoading: false,
          error: result.error.message,
        });
        return;
      }

      set({
        lessons: result.data,
        isLoading: false,
      });
    } catch (error) {
      set({
        isLoading: false,
        error:
          error instanceof Error
            ? error.message
            : "Failed to fetch lessons by module",
      });
    }
  },

  refreshLessons: async () => {
    set({ error: null });

    try {
      const result = await getAllLessonsAction();

      if (result.error) {
        set({ error: result.error.message });
        return;
      }

      set({ lessons: result.data });
    } catch (error) {
      set({
        error:
          error instanceof Error ? error.message : "Failed to refresh lessons",
      });
    }
  },

  clearError: () => {
    set({ error: null });
  },

  reset: () => {
    set(initialState);
  },
}));
