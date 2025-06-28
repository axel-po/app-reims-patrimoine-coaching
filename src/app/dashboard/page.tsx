"use client";

import React from "react";
import VideoPlayer from "./_components/videos/video-player";
import ActionButtons from "./_components/lessons/action-buttons";
import WrittenContent from "./_components/lessons/written-content";
import LessonInfo from "./_components/lessons/lesson-info";
import { useActiveLessonStore } from "@/stores";

export default function Dashboard() {
  const { activeLesson } = useActiveLessonStore();

  // Valeurs par défaut si aucune leçon n'est sélectionnée
  const lessonTitle = activeLesson?.title || "Sélectionnez une leçon";
  const lessonDuration = activeLesson?.duration || "N/A";
  const videoUrl = activeLesson?.videoUrl || undefined;
  const textContent = activeLesson?.textContent || undefined;

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="flex">
        <div className="flex-1 flex flex-col h-[calc(100vh-73px)]">
          <div className="flex-1 flex flex-col p-8">
            <LessonInfo
              lesson={{
                id: activeLesson?.id || 1,
                title: lessonTitle,
                completed: activeLesson?.isFree || false,
                duration: lessonDuration,
              }}
              courseTitle={"Investissement & Patrimoine"}
              enrolled={248}
              rating={4.9}
            />

            <VideoPlayer videoUrl={videoUrl} videoTitle={lessonTitle} />

            <ActionButtons
              isCompleted={activeLesson?.isFree || false}
              onMarkCompleted={() => {}}
              onMarkIncomplete={() => {}}
            />

            <WrittenContent content={textContent} />
          </div>
        </div>
      </div>
    </div>
  );
}
