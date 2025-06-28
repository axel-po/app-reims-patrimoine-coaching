"use client";

import { create } from "zustand";
import { LessonModel } from "@/data/models/lessons-model";

interface ActiveLessonState {
  activeLesson: LessonModel | null;
  setActiveLesson: (lesson: LessonModel) => void;
  clearActiveLesson: () => void;
}

export const useActiveLessonStore = create<ActiveLessonState>((set) => ({
  activeLesson: null,
  setActiveLesson: (lesson: LessonModel) => set({ activeLesson: lesson }),
  clearActiveLesson: () => set({ activeLesson: null }),
}));
