"use client";

import { useState, useEffect, useCallback } from "react";
import { useQueryState } from "nuqs";
import { Lesson } from "@/domain/models/lessons.interface";
import { Module } from "@/domain/models/modules.interface";

interface LessonNavigationHook {
  nextLesson: Lesson | null;
  previousLesson: Lesson | null;
  goToNextLesson: () => void;
  goToPreviousLesson: () => void;
  hasNext: boolean;
  hasPrevious: boolean;
  isLoading: boolean;
}

export function useLessonNavigation(
  currentLessonId: string,
  lessons: Lesson[] = [],
  modules: Module[] = []
): LessonNavigationHook {
  const [, setLessonId] = useQueryState("lessonId");
  const [nextLesson, setNextLesson] = useState<Lesson | null>(null);
  const [previousLesson, setPreviousLesson] = useState<Lesson | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const findNavigationLessons = useCallback(() => {
    if (!currentLessonId || lessons.length === 0) {
      setNextLesson(null);
      setPreviousLesson(null);
      setIsLoading(false);
      return;
    }

    const allLessonsFlat: Lesson[] = [];

    const sortedModules = [...modules].sort(
      (a, b) => (a.position || 0) - (b.position || 0)
    );

    sortedModules.forEach((module) => {
      const moduleLessons = lessons
        .filter((lesson) => lesson.moduleId === module.id)
        .sort((a, b) => (a.position || 0) - (b.position || 0));

      allLessonsFlat.push(...moduleLessons);
    });

    const currentIndex = allLessonsFlat.findIndex(
      (lesson) => lesson.id === currentLessonId
    );

    if (currentIndex === -1) {
      setNextLesson(null);
      setPreviousLesson(null);
      setIsLoading(false);
      return;
    }

    setPreviousLesson(
      currentIndex > 0 ? allLessonsFlat[currentIndex - 1] : null
    );
    setNextLesson(
      currentIndex < allLessonsFlat.length - 1
        ? allLessonsFlat[currentIndex + 1]
        : null
    );
    setIsLoading(false);
  }, [currentLessonId, lessons, modules]);

  useEffect(() => {
    findNavigationLessons();
  }, [findNavigationLessons]);

  const goToNextLesson = useCallback(() => {
    if (nextLesson) {
      setLessonId(nextLesson.id);
    }
  }, [nextLesson, setLessonId]);

  const goToPreviousLesson = useCallback(() => {
    if (previousLesson) {
      setLessonId(previousLesson.id);
    }
  }, [previousLesson, setLessonId]);

  return {
    nextLesson,
    previousLesson,
    goToNextLesson,
    goToPreviousLesson,
    hasNext: nextLesson !== null,
    hasPrevious: previousLesson !== null,
    isLoading,
  };
}
