import React from "react";
import { Clock } from "lucide-react";

interface CourseInfoProps {
  title: string;
  description: string;
  duration: string;
}

export default function CourseInfo({
  title,
  description,
  duration,
}: CourseInfoProps) {
  return (
    <div className="px-3 pb-4 border-b border-slate-100">
      <div className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900">{title}</h2>
        <p className="text-sm text-slate-600">{description}</p>

        <div className="flex items-center gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            <span>{duration}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
