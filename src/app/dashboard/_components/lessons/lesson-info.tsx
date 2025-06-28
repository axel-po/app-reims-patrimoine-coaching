import React from "react";
import { Clock, Users, Star } from "lucide-react";

interface LessonInfoProps {
  lesson: {
    id: string | number;
    title: string;
    completed: boolean;
    duration: string;
  };
  courseTitle: string;
  enrolled: number;
  rating: number;
}

export default function LessonInfo({
  lesson,
  courseTitle,
  enrolled,
  rating,
}: LessonInfoProps) {
  return (
    <div className="mb-6">
      <div className="flex items-center gap-2 text-sm text-slate-500 mb-2">
        <span>Finance & Patrimoine</span>
        <span>/</span>
        <span>{courseTitle}</span>
      </div>
      <h1 className="text-2xl font-bold text-slate-900 mb-2">{lesson.title}</h1>
      <div className="flex items-center gap-4 text-sm text-slate-500">
        <div className="flex items-center gap-1">
          <Clock className="w-4 h-4" />
          <span>{lesson.duration}</span>
        </div>
        <div className="flex items-center gap-1">
          <Users className="w-4 h-4" />
          <span>{enrolled} enrolled</span>
        </div>
        <div className="flex items-center gap-1">
          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          <span>
            {rating} ({enrolled} reviews)
          </span>
        </div>
      </div>
    </div>
  );
}
