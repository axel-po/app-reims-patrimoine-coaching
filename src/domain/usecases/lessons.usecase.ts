import { Lesson, LessonsRepository } from "@/domain/models/lessons.interface";

export class LessonsUseCase {
  constructor(private repository: LessonsRepository) {}

  async getAllLessons(): Promise<{ data: Lesson[]; error?: Error }> {
    try {
      const result = await this.repository.getAllLessons();

      return result;
    } catch (error) {
      console.error("Error in getAllLessons usecase:", error);
      return { data: [], error: error as Error };
    }
  }

  async getLessonById(
    id: string
  ): Promise<{ data: Lesson | null; error?: Error }> {
    try {
      const result = await this.repository.getLessonById(id);

      if (result.data) {
        return { data: result.data, error: result.error };
      }

      return result;
    } catch (error) {
      console.error("Error in getLessonById usecase:", error);
      return { data: null, error: error as Error };
    }
  }

  async getLessonsByModuleId(
    moduleId: string
  ): Promise<{ data: Lesson[]; error?: Error }> {
    try {
      const result = await this.repository.getLessonsByModuleId(moduleId);

      return result;
    } catch (error) {
      console.error("Error in getLessonsByModuleId usecase:", error);
      return { data: [], error: error as Error };
    }
  }
}
