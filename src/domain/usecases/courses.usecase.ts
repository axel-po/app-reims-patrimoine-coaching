import { Course, CoursesRepository } from "@/domain/models/courses.interface";

// Debug flags - set to true to simulate states
const DEBUG_SIMULATE_LOADING = false; // Change to true to simulate long loading
const DEBUG_SIMULATE_ERROR = false; // Change to true to simulate error
const DEBUG_LOADING_DELAY = 3000; // 3 seconds delay

export class CoursesUseCase {
  constructor(private repository: CoursesRepository) {}

  async getAllCourses(): Promise<{ data: Course[]; error?: Error }> {
    try {
      // Simulate loading delay
      if (DEBUG_SIMULATE_LOADING) {
        await new Promise((resolve) =>
          setTimeout(resolve, DEBUG_LOADING_DELAY)
        );
      }

      // Simulate error
      if (DEBUG_SIMULATE_ERROR) {
        throw new Error("Erreur simulée - impossible de charger les cours");
      }

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
      // Simulate loading delay
      if (DEBUG_SIMULATE_LOADING) {
        await new Promise((resolve) =>
          setTimeout(resolve, DEBUG_LOADING_DELAY)
        );
      }

      // Simulate error
      if (DEBUG_SIMULATE_ERROR) {
        throw new Error("Erreur simulée - cours non trouvé");
      }

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
