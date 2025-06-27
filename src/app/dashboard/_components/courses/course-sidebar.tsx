import React from "react";
import { Clock, Star } from "lucide-react";
import CoursesContent from "./course-content";
import Author from "../author/author";
import { Lesson } from "../../fakeData";

interface Module {
  id: number;
  title: string;
  duration: string;
  lessons: Lesson[];
}

interface CourseSidebarProps {
  courseData: {
    title: string;
    description: string;
    duration: string;
    rating: number;
    enrolled: number;
  };
  lessons: Module[];
  currentLesson: Lesson;
  selectLesson: (lesson: Lesson) => void;
}

export default function CourseSidebar({
  courseData,
  lessons,
  currentLesson,
  selectLesson,
}: CourseSidebarProps) {
  return (
    <div className="w-80 bg-white border-r border-slate-200 h-screen flex flex-col">
      <div className="p-6 border-b border-slate-100">
        <div className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900">
            {courseData.title}
          </h2>
          <p className="text-sm text-slate-600">{courseData.description}</p>

          <div className="flex items-center gap-4 text-xs text-slate-500">
            <div className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              <span>{courseData.duration}</span>
            </div>
            <div className="flex items-center gap-1">
              <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
              <span>
                {courseData.rating} ({courseData.enrolled} reviews)
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Course Content */}
      <CoursesContent
        lessons={lessons}
        currentLesson={currentLesson}
        selectLesson={selectLesson}
      />

      {/* Author Section */}
      <Author />
    </div>
  );
}
