"use client";

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Lesson } from "../../fakeData";
import ModuleHeader from "./module-header";
import LessonItem from "./lesson-item";

interface Module {
  id: number;
  title: string;
  duration: string;
  lessons: Lesson[];
}

interface ModuleAccordionProps {
  module: Module;
  // currentLesson: Lesson;
  // selectLesson: (lesson: Lesson) => void;
  defaultOpen?: boolean;
}

export default function ModuleAccordion({
  module,
  // currentLesson,
  // selectLesson,
  defaultOpen = false,
}: ModuleAccordionProps) {
  return (
    <Accordion
      type="multiple"
      defaultValue={defaultOpen ? [`module-${module.id}`] : []}
      className="w-full"
    >
      <AccordionItem value={`module-${module.id}`} className="border-none">
        <AccordionTrigger className="hover:no-underline py-3 px-3 rounded-lg hover:bg-slate-50 text-sm font-medium text-slate-700 [&[data-state=open]]:bg-slate-50">
          <ModuleHeader title={module.title} duration={module.duration} />
        </AccordionTrigger>
        <AccordionContent className="pb-2">
          <div className="ml-4 space-y-1">
            {module.lessons.map((lesson) => (
              <LessonItem
                key={lesson.id}
                lesson={lesson}
                // isSelected={currentLesson.id === lesson.id}
                // onSelect={selectLesson}
              />
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
