"use client";

import { create } from "zustand";
import { ModuleModel } from "@/data/models/modules-model";
import { getModulesByCourseIdService } from "@/services/modules-service";

interface ModulesState {
  modules: ModuleModel[];
  isLoading: boolean;
  error: string | null;
  fetchModulesByCourseId: (courseId: string) => Promise<void>;
}

export const useModulesStore = create<ModulesState>((set) => ({
  modules: [],
  isLoading: false,
  error: null,
  fetchModulesByCourseId: async (courseId: string) => {
    set({ isLoading: true, error: null });
    try {
      const modules = await getModulesByCourseIdService(courseId);
      set({ modules, isLoading: false });
    } catch (error) {
      set({
        error:
          error instanceof Error ? error.message : "Failed to fetch modules",
        isLoading: false,
      });
    }
  },
}));
