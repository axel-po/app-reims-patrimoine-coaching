"use client";

import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import ModuleHeader from "./module-header";
import LessonItem from "./lesson-item";
import { LessonModel } from "@/data/models/lessons-model";
import { useLessonsStore } from "@/stores/lessons-store";
import { useActiveLessonStore } from "@/stores";

interface Module {
  id: string;
  title: string;
  duration: string;
  lessons: LessonModel[];
}

interface ModuleAccordionProps {
  module: Module;
  defaultOpen?: boolean;
}

export default function ModuleAccordion({
  module,
  defaultOpen = false,
}: ModuleAccordionProps) {
  const {
    lessons,
    isLoading: lessonsLoading,
    error: lessonsError,
    fetchLessonsByModuleId,
  } = useLessonsStore();

  const { activeLesson } = useActiveLessonStore();
  const [selectedLessonId, setSelectedLessonId] = useState<string | null>(
    activeLesson?.id || null
  );

  const handleLessonSelect = (lesson: LessonModel) => {
    setSelectedLessonId(lesson.id);
  };

  const handleAccordionValueChange = (value: string[]) => {
    if (value.includes(`module-${module.id}`)) {
      fetchLessonsByModuleId(module.id);
    }
  };
  return (
    <Accordion
      type="multiple"
      defaultValue={defaultOpen ? [`module-${module.id}`] : []}
      className="w-full"
      onValueChange={handleAccordionValueChange}
    >
      <AccordionItem value={`module-${module.id}`} className="border-none">
        <AccordionTrigger className="hover:no-underline py-3 px-3 rounded-lg hover:bg-slate-50 text-sm font-medium text-slate-700 [&[data-state=open]]:bg-slate-50">
          <ModuleHeader title={module.title} duration={module.duration} />
        </AccordionTrigger>
        <AccordionContent className="pb-2">
          <div className="ml-4 space-y-1">
            {lessonsLoading ? (
              <div className="text-sm text-slate-500">Loading lessons...</div>
            ) : lessonsError ? (
              <div className="text-sm text-red-500">Error: {lessonsError}</div>
            ) : (
              lessons.map((lesson) => (
                <LessonItem
                  key={lesson.id}
                  lesson={lesson}
                  isSelected={selectedLessonId === lesson.id}
                  onSelect={handleLessonSelect}
                />
              ))
            )}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
