"use server";

import { getLessonsUseCase } from "@/di/lessons.ioc";

export async function getAllLessonsAction() {
  const useCase = getLessonsUseCase();
  return await useCase.getAllLessons();
}

export async function getLessonByIdAction(id: string) {
  const useCase = getLessonsUseCase();
  return await useCase.getLessonById(id);
}

export async function getLessonsByModuleIdAction(moduleId: string) {
  const useCase = getLessonsUseCase();
  return await useCase.getLessonsByModuleId(moduleId);
}
