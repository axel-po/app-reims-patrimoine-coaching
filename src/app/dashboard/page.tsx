"use client";

import React from "react";
import VideoPlayer from "./_components/videos/video-player";
import ActionButtons from "./_components/lessons/action-buttons";
import WrittenContent from "./_components/lessons/written-content";
import LessonInfo from "./_components/lessons/lesson-info";

export default function Dashboard() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="flex">
        <div className="flex-1 flex flex-col h-[calc(100vh-73px)]">
          <div className="flex-1 flex flex-col p-8">
            <LessonInfo
              lesson={[
                {
                  id: 1,
                  title: "test",
                  completed: false,
                  duration: "10min",
                },
              ]}
              courseTitle={"Investissement & Patrimoine"}
              enrolled={248}
              rating={4.9}
            />

            <VideoPlayer />

            <ActionButtons
              isCompleted={false}
              onMarkCompleted={() => {}}
              onMarkIncomplete={() => {}}
            />

            <WrittenContent content={undefined} />
          </div>
        </div>
      </div>
    </div>
  );
}
