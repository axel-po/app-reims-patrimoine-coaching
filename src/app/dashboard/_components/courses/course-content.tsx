import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CheckCircle2, Circle } from "lucide-react";

import { Lesson } from "../../fakeData";

interface Module {
  id: number;
  title: string;
  duration: string;
  lessons: Lesson[];
}

interface CoursesContentProps {
  lessons: Module[];
  currentLesson: Lesson;
  selectLesson: (lesson: Lesson) => void;
}

export default function CoursesContent({
  lessons,
  currentLesson,
  selectLesson,
}: CoursesContentProps) {
  return (
    <div className="flex-1 overflow-y-auto">
      <div className="p-4">
        <h3 className="text-sm font-semibold text-slate-900 mb-4">
          Course content
        </h3>

        <div className="space-y-1">
          {lessons.map((module) => (
            <div key={module.id}>
              <Accordion
                type="multiple"
                defaultValue={["module-1"]}
                className="w-full"
              >
                <AccordionItem
                  value={`module-${module.id}`}
                  className="border-none"
                >
                  <AccordionTrigger className="hover:no-underline py-3 px-3 rounded-lg hover:bg-slate-50 text-sm font-medium text-slate-700 [&[data-state=open]]:bg-slate-50">
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center gap-3">
                        <div className="w-1 h-6 bg-gradient-to-b from-purple-500 to-blue-500 rounded-full" />
                        <span>{module.title}</span>
                      </div>
                      <span className="text-xs text-slate-500 mr-4">
                        {module.duration}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-2">
                    <div className="ml-4 space-y-1">
                      {module.lessons.map((lesson) => (
                        <button
                          key={lesson.id}
                          onClick={() => selectLesson(lesson)}
                          className={`w-full text-left py-2 px-3 rounded-lg text-sm transition-all duration-200 ${
                            currentLesson.id === lesson.id
                              ? "bg-gradient-to-r from-purple-50 to-blue-50 text-purple-700 font-medium border border-purple-200"
                              : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              {lesson.completed ? (
                                <CheckCircle2 className="h-4 w-4 text-green-500 shrink-0" />
                              ) : (
                                <Circle className="h-4 w-4 text-slate-300 shrink-0" />
                              )}
                              <span className="truncate">{lesson.title}</span>
                            </div>
                            <span className="text-xs text-slate-400 ml-2">
                              {lesson.duration}
                            </span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
