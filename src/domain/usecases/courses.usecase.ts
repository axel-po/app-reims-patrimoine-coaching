import { Course, CoursesRepository } from "@/domain/models/courses.interface";

export class CoursesUseCase {
  constructor(private repository: CoursesRepository) {}

  async getAllCourses(): Promise<{ data: Course[]; error?: Error }> {
    try {
      const result = await this.repository.getAllCourses();

      return result;
    } catch (error) {
      console.error("Error in getAllCourses usecase:", error);
      return { data: [], error: error as Error };
    }
  }

  async getCourseById(
    id: string
  ): Promise<{ data: Course | null; error?: Error }> {
    try {
      const result = await this.repository.getCourseById(id);

      if (result.data) {
        return { data: result.data, error: result.error };
      }

      return result;
    } catch (error) {
      console.error("Error in getCourseById usecase:", error);
      return { data: null, error: error as Error };
    }
  }
}
