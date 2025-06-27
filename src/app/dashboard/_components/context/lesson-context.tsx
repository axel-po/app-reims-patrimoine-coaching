"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { courseData, Lesson } from "../../fakeData";

interface Module {
  id: number;
  title: string;
  duration: string;
  lessons: Lesson[];
}

interface LessonContextType {
  currentLesson: Lesson;
  lessons: Module[];
  selectLesson: (lesson: Lesson) => void;
  toggleLessonCompletion: (lessonId: number) => void;
  markAsCompleted: () => void;
  markAsIncomplete: () => void;
}

const LessonContext = createContext<LessonContextType | undefined>(undefined);

export function LessonProvider({ children }: { children: ReactNode }) {
  const [currentLesson, setCurrentLesson] = useState<Lesson>(
    courseData.modules[0].lessons[1]
  );
  const [lessons, setLessons] = useState(courseData.modules);

  const selectLesson = (lesson: Lesson) => {
    setCurrentLesson(lesson);
  };

  const toggleLessonCompletion = (lessonId: number) => {
    setLessons((prevModules) =>
      prevModules.map((module) => ({
        ...module,
        lessons: module.lessons.map((lesson) =>
          lesson.id === lessonId
            ? { ...lesson, completed: !lesson.completed }
            : lesson
        ),
      }))
    );

    if (currentLesson.id === lessonId) {
      setCurrentLesson((prev) => ({ ...prev, completed: !prev.completed }));
    }
  };

  const markAsCompleted = () => {
    toggleLessonCompletion(currentLesson.id);
  };

  const markAsIncomplete = () => {
    toggleLessonCompletion(currentLesson.id);
  };

  const value = {
    currentLesson,
    lessons,
    selectLesson,
    toggleLessonCompletion,
    markAsCompleted,
    markAsIncomplete,
  };

  return (
    <LessonContext.Provider value={value}>{children}</LessonContext.Provider>
  );
}

export function useLessonContext() {
  const context = useContext(LessonContext);
  if (context === undefined) {
    throw new Error("useLessonContext must be used within a LessonProvider");
  }
  return context;
}
