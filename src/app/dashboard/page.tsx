"use client";

import React, { useState } from "react";
import { courseData, Lesson } from "./fakeData";
import CourseSidebar from "./_components/courses/course-sidebar";
import LessonInfo from "./_components/lessons/lesson-info";
import VideoPlayer from "./_components/videos/video-player";
import ActionButtons from "./_components/lessons/action-buttons";
import WrittenContent from "./_components/lessons/written-content";

export default function Dashboard() {
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="flex">
        <CourseSidebar
          courseData={courseData}
          lessons={lessons}
          currentLesson={currentLesson}
          selectLesson={selectLesson}
        />

        <div className="flex-1 flex flex-col h-[calc(100vh-73px)]">
          <div className="flex-1 flex flex-col p-8">
            <LessonInfo
              lesson={currentLesson}
              courseTitle={courseData.title}
              enrolled={courseData.enrolled}
              rating={courseData.rating}
            />

            <VideoPlayer />

            <ActionButtons
              isCompleted={currentLesson.completed}
              onMarkCompleted={markAsCompleted}
              onMarkIncomplete={markAsIncomplete}
            />

            <WrittenContent content={currentLesson.content} />
          </div>
        </div>
      </div>
    </div>
  );
}
