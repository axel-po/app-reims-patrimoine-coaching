export interface UserProgress {
  id: number;
  userId: string;
  lessonId: string;
  completed: boolean;
  completedAt: Date | null;
}

export interface UserProgressRepository {
  getUserProgressByUserAndLesson(
    userId: string,
    lessonId: string
  ): Promise<{ data: UserProgress | null; error?: Error }>;

  createUserProgress(
    userId: string,
    lessonId: string
  ): Promise<{ data: UserProgress; error?: Error }>;

  markLessonAsCompleted(
    userId: string,
    lessonId: string
  ): Promise<{ data: UserProgress; error?: Error }>;

  markLessonAsIncomplete(
    userId: string,
    lessonId: string
  ): Promise<{ data: UserProgress; error?: Error }>;

  getUserCompletedLessons(
    userId: string
  ): Promise<{ data: UserProgress[]; error?: Error }>;
}
