"use server";

import { getModulesByCourseId } from "@/data/repositories/modules-repository";

export async function getModulesByCourseIdService(courseId: string) {
  return getModulesByCourseId(courseId);
}
