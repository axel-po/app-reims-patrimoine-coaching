"use client";

import { create } from "zustand";
import { LessonModel } from "@/data/models/lessons-model";
import { getLessonsByModuleIdService } from "@/services/lessons-service";

interface LessonsState {
  lessons: LessonModel[];
  isLoading: boolean;
  error: string | null;
  fetchLessonsByModuleId: (moduleId: string) => Promise<void>;
}

export const useLessonsStore = create<LessonsState>((set) => ({
  lessons: [],
  isLoading: false,
  error: null,
  fetchLessonsByModuleId: async (moduleId: string) => {
    set({ isLoading: true, error: null });
    try {
      const lessons = await getLessonsByModuleIdService(moduleId);
      set({ lessons, isLoading: false });
    } catch (error) {
      set({
        error:
          error instanceof Error ? error.message : "Failed to fetch lessons",
        isLoading: false,
      });
    }
  },
}));
