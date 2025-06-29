import { create } from "zustand";
import { Course } from "@/domain/models/courses.interface";
import {
  getAllCoursesAction,
  getCourseByIdAction,
} from "@/userinterface/actions/courses.actions";

interface CoursesState {
  courses: Course[];
  isLoading: boolean;
  error: string | null;
}

interface CoursesPresenterState extends CoursesState {
  // Actions
  fetchCourses: () => Promise<void>;
  getCourseById: (id: string) => Promise<Course | null>;
  refreshCourses: () => Promise<void>;
  clearError: () => void;
  reset: () => void;
}

const initialState: CoursesState = {
  courses: [],
  isLoading: false,
  error: null,
};

export const useCoursesPresenter = create<CoursesPresenterState>((set) => ({
  ...initialState,

  fetchCourses: async () => {
    set({ isLoading: true, error: null });

    try {
      const result = await getAllCoursesAction();

      if (result.error) {
        set({
          isLoading: false,
          error: result.error.message,
        });
        return;
      }

      set({
        courses: result.data,
        isLoading: false,
      });
    } catch (error) {
      set({
        isLoading: false,
        error:
          error instanceof Error ? error.message : "Failed to fetch courses",
      });
    }
  },

  getCourseById: async (id) => {
    try {
      const result = await getCourseByIdAction(id);

      if (result.error) {
        set({ error: result.error.message });
        return null;
      }

      return result.data;
    } catch (error) {
      set({
        error: error instanceof Error ? error.message : "Failed to get course",
      });
      return null;
    }
  },

  refreshCourses: async () => {
    set({ error: null });

    try {
      const result = await getAllCoursesAction();

      if (result.error) {
        set({ error: result.error.message });
        return;
      }

      set({ courses: result.data });
    } catch (error) {
      set({
        error:
          error instanceof Error ? error.message : "Failed to refresh courses",
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
