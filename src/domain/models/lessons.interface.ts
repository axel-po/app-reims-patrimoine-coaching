import { LessonModel } from "@/infrastructure/database/schemas/lessons.schema";

// Use the inferred type from Drizzle schema
export type Lesson = LessonModel;

export interface LessonsRepository {
  getAllLessons(): Promise<{ data: Lesson[]; error?: Error }>;
  getLessonById(id: string): Promise<{ data: Lesson | null; error?: Error }>;
  getLessonsByModuleId(
    moduleId: string
  ): Promise<{ data: Lesson[]; error?: Error }>;
}
