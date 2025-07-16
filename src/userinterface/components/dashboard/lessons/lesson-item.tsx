"use client";

import React from "react";
import { Circle, CheckCircle2, Lock } from "lucide-react";
import { Lesson } from "@/domain/models/lessons.interface";
import { useQueryState } from "nuqs";

interface LessonItemProps {
  lesson: Lesson;
  isSelected: boolean;
  isCompleted?: boolean;
  isLocked?: boolean;
}

export default function LessonItem({ lesson, isSelected, isCompleted = false, isLocked = false }: LessonItemProps) {
  const [, setLessonId] = useQueryState("lessonId");

  const handleClick = () => {
    if (!isLocked) {
      setLessonId(lesson.id);
    }
  };

  return (
    <button
      onClick={handleClick}
      disabled={isLocked}
      className={`w-full text-left py-2 px-3 rounded-lg text-sm transition-all duration-200 ${
        isLocked
          ? "text-slate-400 cursor-not-allowed bg-slate-50 opacity-60"
          : isSelected
          ? "bg-gradient-to-r from-purple-50 to-blue-50 text-purple-700 font-medium border border-purple-200"
          : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
      } ${isCompleted ? "opacity-75" : ""}`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {isLocked ? (
            <Lock className="h-4 w-4 text-slate-400 shrink-0" />
          ) : isCompleted ? (
            <CheckCircle2 className="h-4 w-4 text-green-500 shrink-0" />
          ) : (
            <Circle className="h-4 w-4 text-slate-300 shrink-0" />
          )}

          <span className={`truncate ${isCompleted ? "line-through text-slate-500" : ""} ${isLocked ? "text-slate-400" : ""}`}>
            {lesson.title}
          </span>
        </div>
        <span className="text-xs text-slate-400 ml-2">{lesson.duration}</span>
      </div>
    </button>
  );
}
