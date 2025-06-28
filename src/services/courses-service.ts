"use server";

import { getAllCourses } from "@/data/repositories/courses-repository";

export async function getAllCoursesService() {
  return getAllCourses();
}
