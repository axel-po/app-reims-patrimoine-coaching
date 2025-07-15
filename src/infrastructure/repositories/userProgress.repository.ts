import { eq, and } from "drizzle-orm";
import { db } from "@/infrastructure/database/client";
import { userProgress } from "@/infrastructure/database/schemas/userProgress.schema";
import { UserProgress, UserProgressRepository } from "@/domain/models/userProgress.interface";

export class UserProgressRepositoryImpl implements UserProgressRepository {
  async getUserProgressByUserAndLesson(
    userId: string,
    lessonId: string
  ): Promise<{ data: UserProgress | null; error?: Error }> {
    try {
      const result = await db
        .select()
        .from(userProgress)
        .where(and(eq(userProgress.userId, userId), eq(userProgress.lessonId, lessonId)))
        .limit(1);

      const progressData = result[0] || null;
      return { data: progressData };
    } catch (error) {
      console.error("Error getting user progress:", error);
      return { data: null, error: error as Error };
    }
  }

  async createUserProgress(
    userId: string,
    lessonId: string
  ): Promise<{ data: UserProgress; error?: Error }> {
    try {
      const result = await db
        .insert(userProgress)
        .values({
          userId,
          lessonId,
          completed: false,
          completedAt: null,
        })
        .returning();

      return { data: result[0] };
    } catch (error) {
      console.error("Error creating user progress:", error);
      return { data: {} as UserProgress, error: error as Error };
    }
  }

  async markLessonAsCompleted(
    userId: string,
    lessonId: string
  ): Promise<{ data: UserProgress; error?: Error }> {
    try {
      const existingProgress = await this.getUserProgressByUserAndLesson(userId, lessonId);
      
      if (existingProgress.data) {
        const result = await db
          .update(userProgress)
          .set({
            completed: true,
            completedAt: new Date(),
          })
          .where(and(eq(userProgress.userId, userId), eq(userProgress.lessonId, lessonId)))
          .returning();

        return { data: result[0] };
      } else {
        const result = await db
          .insert(userProgress)
          .values({
            userId,
            lessonId,
            completed: true,
            completedAt: new Date(),
          })
          .returning();

        return { data: result[0] };
      }
    } catch (error) {
      console.error("Error marking lesson as completed:", error);
      return { data: {} as UserProgress, error: error as Error };
    }
  }

  async markLessonAsIncomplete(
    userId: string,
    lessonId: string
  ): Promise<{ data: UserProgress; error?: Error }> {
    try {
      const result = await db
        .update(userProgress)
        .set({
          completed: false,
          completedAt: null,
        })
        .where(and(eq(userProgress.userId, userId), eq(userProgress.lessonId, lessonId)))
        .returning();

      if (result.length === 0) {
        const newResult = await this.createUserProgress(userId, lessonId);
        return newResult;
      }

      return { data: result[0] };
    } catch (error) {
      console.error("Error marking lesson as incomplete:", error);
      return { data: {} as UserProgress, error: error as Error };
    }
  }

  async getUserCompletedLessons(
    userId: string
  ): Promise<{ data: UserProgress[]; error?: Error }> {
    try {
      const result = await db
        .select()
        .from(userProgress)
        .where(and(eq(userProgress.userId, userId), eq(userProgress.completed, true)));

      return { data: result };
    } catch (error) {
      console.error("Error getting user completed lessons:", error);
      return { data: [], error: error as Error };
    }
  }
}