import { LessonsRepository, Lesson } from "@/domain/models/lessons.interface";
import { db } from "@/infrastructure/database/client";
import { lessons } from "@/infrastructure/database/schemas/lessons.schema";
import { eq, asc } from "drizzle-orm";

export class LessonsRepositoryImpl implements LessonsRepository {
  async getAllLessons(): Promise<{ data: Lesson[]; error?: Error }> {
    try {
      const data = await db
        .select()
        .from(lessons)
        .orderBy(asc(lessons.position));
      return { data };
    } catch (error) {
      console.error("Repository error in getAllLessons:", error);
      return { data: [], error: error as Error };
    }
  }

  async getLessonById(
    id: string
  ): Promise<{ data: Lesson | null; error?: Error }> {
    try {
      const data = await db.select().from(lessons).where(eq(lessons.id, id));

      if (data.length === 0) {
        return {
          data: null,
          error: new Error(`Lesson with id ${id} not found`),
        };
      }

      return { data: data[0] };
    } catch (error) {
      console.error("Repository error in getLessonById:", error);
      return { data: null, error: error as Error };
    }
  }

  async getLessonsByModuleId(
    moduleId: string
  ): Promise<{ data: Lesson[]; error?: Error }> {
    try {
      const data = await db
        .select()
        .from(lessons)
        .where(eq(lessons.moduleId, moduleId))
        .orderBy(asc(lessons.position));

      return { data };
    } catch (error) {
      console.error("Repository error in getLessonsByModuleId:", error);
      return { data: [], error: error as Error };
    }
  }
}

// Factory function for easier dependency injection
export const createLessonsRepository = (): LessonsRepository => {
  return new LessonsRepositoryImpl();
};
