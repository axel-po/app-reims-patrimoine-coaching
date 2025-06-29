import React from "react";

export default function Dashboard() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="flex">
        <div className="flex-1 flex flex-col h-[calc(100vh-73px)]">
          <div className="flex-1 flex flex-col p-8">
            {/* <LessonInfo
              lesson={{
                id: activeLesson?.id || 1,
                title: lessonTitle,
                completed: activeLesson?.isFree || false,
                duration: lessonDuration,
              }}
              courseTitle={"Investissement & Patrimoine"}
              enrolled={248}
              rating={4.9}
            /> */}

            {/* <VideoPlayer videoUrl={videoUrl} videoTitle={lessonTitle} /> */}

            {/* <ActionButtons
              isCompleted={activeLesson?.isFree || false}
              onMarkCompleted={() => {}}
              onMarkIncomplete={() => {}}
            />

            <WrittenContent content={textContent} /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
