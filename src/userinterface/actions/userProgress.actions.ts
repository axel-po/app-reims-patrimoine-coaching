"use server";

import { getUserProgressUseCase } from "@/di/userProgress.ioc";
import { getSession } from "@/lib/auth-server";

export async function markLessonAsCompletedAction(lessonId: string) {
  try {
    const session = await getSession();
    
    if (!session?.user?.id) {
      return { data: null, error: new Error("User not authenticated") };
    }

    const useCase = getUserProgressUseCase();
    return await useCase.markLessonAsCompleted(session.user.id, lessonId);
  } catch (error) {
    console.error("Error in markLessonAsCompletedAction:", error);
    return { data: null, error: error as Error };
  }
}

export async function markLessonAsIncompleteAction(lessonId: string) {
  try {
    const session = await getSession();
    
    if (!session?.user?.id) {
      return { data: null, error: new Error("User not authenticated") };
    }

    const useCase = getUserProgressUseCase();
    return await useCase.markLessonAsIncomplete(session.user.id, lessonId);
  } catch (error) {
    console.error("Error in markLessonAsIncompleteAction:", error);
    return { data: null, error: error as Error };
  }
}

export async function getUserProgressByUserAndLessonAction(lessonId: string) {
  try {
    const session = await getSession();
    
    if (!session?.user?.id) {
      return { data: null, error: new Error("User not authenticated") };
    }

    const useCase = getUserProgressUseCase();
    return await useCase.getUserProgressByUserAndLesson(session.user.id, lessonId);
  } catch (error) {
    console.error("Error in getUserProgressByUserAndLessonAction:", error);
    return { data: null, error: error as Error };
  }
}

export async function getUserCompletedLessonsAction() {
  try {
    const session = await getSession();
    
    if (!session?.user?.id) {
      return { data: [], error: new Error("User not authenticated") };
    }

    const useCase = getUserProgressUseCase();
    return await useCase.getUserCompletedLessons(session.user.id);
  } catch (error) {
    console.error("Error in getUserCompletedLessonsAction:", error);
    return { data: [], error: error as Error };
  }
}