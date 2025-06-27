"use client";

import React from "react";
import { courseData } from "./fakeData";
import LessonInfo from "./_components/lessons/lesson-info";
import VideoPlayer from "./_components/videos/video-player";
import ActionButtons from "./_components/lessons/action-buttons";
import WrittenContent from "./_components/lessons/written-content";
import { useLessonContext } from "./_components/context/lesson-context";

export default function Dashboard() {
  const { currentLesson, markAsCompleted, markAsIncomplete } =
    useLessonContext();

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        background: `linear-gradient(to bottom, var(--background), color-mix(in oklch, var(--background) 95%, var(--muted) 5%))`,
      }}
    >
      <div className="flex">
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
