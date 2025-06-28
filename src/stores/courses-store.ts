"use client";

import { create } from "zustand";
import { CourseModel } from "@/data/models/courses-model";
import { getAllCoursesService } from "@/services/courses-service";

interface CoursesState {
  courses: CourseModel[];
  isLoading: boolean;
  error: string | null;
  fetchCourses: () => Promise<void>;
}

export const useCoursesStore = create<CoursesState>((set) => ({
  courses: [],
  isLoading: false,
  error: null,
  fetchCourses: async () => {
    set({ isLoading: true, error: null });
    try {
      const courses = await getAllCoursesService();
      set({ courses, isLoading: false });
    } catch (error) {
      set({
        error:
          error instanceof Error ? error.message : "Failed to fetch courses",
        isLoading: false,
      });
    }
  },
}));
