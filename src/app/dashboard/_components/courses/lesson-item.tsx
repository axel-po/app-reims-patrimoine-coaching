import React from "react";
import { CheckCircle2, Circle } from "lucide-react";
import { LessonModel } from "@/data/models/lessons-model";
import { useActiveLessonStore } from "@/stores";

interface LessonItemProps {
  lesson: LessonModel;
  isSelected: boolean;
  onSelect: (lesson: LessonModel) => void;
}

export default function LessonItem({
  lesson,
  isSelected,
  onSelect,
}: LessonItemProps) {
  const { setActiveLesson } = useActiveLessonStore();

  const handleSelect = () => {
    setActiveLesson(lesson);
    onSelect(lesson);
  };

  return (
    <button
      onClick={handleSelect}
      className={`w-full text-left py-2 px-3 rounded-lg text-sm transition-all duration-200 ${
        isSelected
          ? "bg-gradient-to-r from-purple-50 to-blue-50 text-purple-700 font-medium border border-purple-200"
          : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {lesson.isFree ? (
            <CheckCircle2 className="h-4 w-4 text-green-500 shrink-0" />
          ) : (
            <Circle className="h-4 w-4 text-slate-300 shrink-0" />
          )}
          <span className="truncate">{lesson.title}</span>
        </div>
        <span className="text-xs text-slate-400 ml-2">{lesson.duration}</span>
      </div>
    </button>
  );
}
