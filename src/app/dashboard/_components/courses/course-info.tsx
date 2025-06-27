import React from "react";
import { Clock, Star } from "lucide-react";

interface CourseInfoProps {
  title: string;
  description: string;
  duration: string;
  rating: number;
  enrolled: number;
}

export default function CourseInfo({
  title,
  description,
  duration,
  rating,
  enrolled,
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
          <div className="flex items-center gap-1">
            <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
            <span>
              {rating} ({enrolled} reviews)
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
