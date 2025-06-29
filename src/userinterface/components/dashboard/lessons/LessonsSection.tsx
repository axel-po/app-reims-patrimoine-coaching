"use client";

import { LessonsListContainer } from "@/userinterface/components/lessons/LessonsListContainer";

interface LessonsSectionProps {
  moduleId?: string;
}

export function LessonsSection({ moduleId }: LessonsSectionProps) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-sm border">
      <LessonsListContainer moduleId={moduleId} />
    </div>
  );
}
