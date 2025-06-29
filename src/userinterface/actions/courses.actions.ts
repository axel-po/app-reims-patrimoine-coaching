"use server";

import { getCoursesUseCase } from "@/di/courses.ioc";

export async function getAllCoursesAction() {
  const useCase = getCoursesUseCase();
  return await useCase.getAllCourses();
}

export async function getCourseByIdAction(id: string) {
  const useCase = getCoursesUseCase();
  return await useCase.getCourseById(id);
}
