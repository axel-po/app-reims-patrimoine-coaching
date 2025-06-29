import React from "react";
import { LessonModel } from "@/data/models/lessons-model";

interface Module {
  id: string;
  title: string;
  duration: string;
  lessons: LessonModel[];
}

interface CourseProgressProps {
  modules: Module[];
  className?: string;
}

export default function CourseProgress({
  modules,
  className = "",
}: CourseProgressProps) {
  const totalLessons = modules.reduce(
    (total, module) => total + module.lessons.length,
    0
  );

  const completedLessons = modules.reduce(
    (total, module) =>
      total + module.lessons.filter((lesson) => lesson.isFree).length,
    0
  );

  const progressPercentage =
    totalLessons > 0 ? (completedLessons / totalLessons) * 100 : 0;

  return (
    <div className={`space-y-2 ${className}`}>
      <div className="flex items-center justify-between text-sm">
        <span className="text-slate-600">Progression du cours</span>
        <span className="text-slate-900 font-medium">
          {completedLessons}/{totalLessons} leçons
        </span>
      </div>
      <div className="relative h-2 w-full overflow-hidden rounded-full bg-slate-100">
        <div
          className="h-full bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-300 ease-in-out"
          style={{ width: `${progressPercentage}%` }}
        />
      </div>
      <div className="text-xs text-slate-500">
        {Math.round(progressPercentage)}% terminé
      </div>
    </div>
  );
}
