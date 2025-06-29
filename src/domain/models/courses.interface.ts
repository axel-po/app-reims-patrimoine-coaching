import { CourseModel } from "@/infrastructure/database/schemas/courses.schema";

// Use the inferred type from Drizzle schema
export type Course = CourseModel;

export interface CoursesRepository {
  getAllCourses(): Promise<{ data: Course[]; error?: Error }>;
  getCourseById(id: string): Promise<{ data: Course | null; error?: Error }>;
}
