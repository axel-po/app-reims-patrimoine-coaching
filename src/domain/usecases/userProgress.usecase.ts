import { UserProgress, UserProgressRepository } from "@/domain/models/userProgress.interface";

export class UserProgressUseCase {
  constructor(private repository: UserProgressRepository) {}

  async markLessonAsCompleted(
    userId: string,
    lessonId: string
  ): Promise<{ data: UserProgress; error?: Error }> {
    try {
      const result = await this.repository.markLessonAsCompleted(userId, lessonId);
      return result;
    } catch (error) {
      console.error("Error in markLessonAsCompleted usecase:", error);
      return { data: {} as UserProgress, error: error as Error };
    }
  }

  async markLessonAsIncomplete(
    userId: string,
    lessonId: string
  ): Promise<{ data: UserProgress; error?: Error }> {
    try {
      const result = await this.repository.markLessonAsIncomplete(userId, lessonId);
      return result;
    } catch (error) {
      console.error("Error in markLessonAsIncomplete usecase:", error);
      return { data: {} as UserProgress, error: error as Error };
    }
  }

  async getUserProgressByUserAndLesson(
    userId: string,
    lessonId: string
  ): Promise<{ data: UserProgress | null; error?: Error }> {
    try {
      const result = await this.repository.getUserProgressByUserAndLesson(userId, lessonId);
      return result;
    } catch (error) {
      console.error("Error in getUserProgressByUserAndLesson usecase:", error);
      return { data: null, error: error as Error };
    }
  }

  async getUserCompletedLessons(
    userId: string
  ): Promise<{ data: UserProgress[]; error?: Error }> {
    try {
      const result = await this.repository.getUserCompletedLessons(userId);
      return result;
    } catch (error) {
      console.error("Error in getUserCompletedLessons usecase:", error);
      return { data: [], error: error as Error };
    }
  }
}