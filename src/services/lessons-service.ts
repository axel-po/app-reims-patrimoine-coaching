"use server";

import { getLessonsByModuleId } from "@/data/repositories/lessons-repository";

export async function getLessonsByModuleIdService(moduleId: string) {
  return getLessonsByModuleId(moduleId);
}
