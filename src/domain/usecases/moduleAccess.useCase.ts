import { ModulesRepository } from "@/domain/models/modules.interface";
import { LessonsRepository } from "@/domain/models/lessons.interface";
import { UserProgressRepository } from "@/domain/models/userProgress.interface";

export interface ModuleAccessInfo {
  moduleId: string;
  isUnlocked: boolean;
  unlockedLessons: string[];
  nextLessonToUnlock: string | null;
}

export interface LessonAccessInfo {
  lessonId: string;
  isUnlocked: boolean;
  position: number;
}

export class ModuleAccessUseCase {
  constructor(
    private moduleRepository: ModulesRepository,
    private lessonRepository: LessonsRepository,
    private userProgressRepository: UserProgressRepository
  ) {}

  async getModuleAccessInfo(
    userId: string,
    moduleId: string
  ): Promise<{ data: ModuleAccessInfo; error?: Error }> {
    try {
      const lessonsResult = await this.lessonRepository.getLessonsByModuleId(
        moduleId
      );
      if (lessonsResult.error) {
        return { data: {} as ModuleAccessInfo, error: lessonsResult.error };
      }

      const lessons = lessonsResult.data.sort(
        (a, b) => a.position - b.position
      );

      const userProgressResult =
        await this.userProgressRepository.getUserCompletedLessons(userId);
      if (userProgressResult.error) {
        return {
          data: {} as ModuleAccessInfo,
          error: userProgressResult.error,
        };
      }

      const completedLessonIds = new Set(
        userProgressResult.data.map((progress) => progress.lessonId)
      );

      const unlockedLessons: string[] = [];
      let nextLessonToUnlock: string | null = null;

      for (const lesson of lessons) {
        if (unlockedLessons.length === 0) {
          unlockedLessons.push(lesson.id);
          if (!completedLessonIds.has(lesson.id)) {
            nextLessonToUnlock = lesson.id;
          }
        } else {
          const previousLesson = lessons[lessons.indexOf(lesson) - 1];
          if (completedLessonIds.has(previousLesson.id)) {
            unlockedLessons.push(lesson.id);
            if (
              !completedLessonIds.has(lesson.id) &&
              nextLessonToUnlock === null
            ) {
              nextLessonToUnlock = lesson.id;
            }
          }
        }
      }

      const isUnlocked = unlockedLessons.length > 0;

      return {
        data: {
          moduleId,
          isUnlocked,
          unlockedLessons,
          nextLessonToUnlock,
        },
      };
    } catch (error) {
      console.error("Error in getModuleAccessInfo usecase:", error);
      return { data: {} as ModuleAccessInfo, error: error as Error };
    }
  }

  async getLessonAccessInfo(
    userId: string,
    lessonId: string
  ): Promise<{ data: LessonAccessInfo; error?: Error }> {
    try {
      const lessonResult = await this.lessonRepository.getLessonById(lessonId);
      if (lessonResult.error) {
        return { data: {} as LessonAccessInfo, error: lessonResult.error };
      }

      const lesson = lessonResult.data;
      if (!lesson) {
        return {
          data: {} as LessonAccessInfo,
          error: new Error("Lesson not found"),
        };
      }
      const moduleId = lesson.moduleId;

      const moduleAccessResult = await this.getModuleAccessInfo(
        userId,
        moduleId
      );
      if (moduleAccessResult.error) {
        return {
          data: {} as LessonAccessInfo,
          error: moduleAccessResult.error,
        };
      }

      const isUnlocked =
        moduleAccessResult.data.unlockedLessons.includes(lessonId);

      return {
        data: {
          lessonId,
          isUnlocked,
          position: lesson.position,
        },
      };
    } catch (error) {
      console.error("Error in getLessonAccessInfo usecase:", error);
      return { data: {} as LessonAccessInfo, error: error as Error };
    }
  }

  async isLessonUnlocked(userId: string, lessonId: string): Promise<boolean> {
    const result = await this.getLessonAccessInfo(userId, lessonId);
    return result.data?.isUnlocked ?? false;
  }

  async getNextUnlockedLesson(
    userId: string,
    currentLessonId: string
  ): Promise<{ data: string | null; error?: Error }> {
    try {
      const currentLessonResult = await this.lessonRepository.getLessonById(
        currentLessonId
      );
      if (currentLessonResult.error) {
        return { data: null, error: currentLessonResult.error };
      }

      const currentLesson = currentLessonResult.data;
      if (!currentLesson) {
        return { data: null, error: new Error("Lesson not found") };
      }
      const moduleId = currentLesson.moduleId;

      const moduleAccessResult = await this.getModuleAccessInfo(
        userId,
        moduleId
      );
      if (moduleAccessResult.error) {
        return { data: null, error: moduleAccessResult.error };
      }

      return {
        data: moduleAccessResult.data.nextLessonToUnlock,
      };
    } catch (error) {
      console.error("Error in getNextUnlockedLesson usecase:", error);
      return { data: null, error: error as Error };
    }
  }
}
