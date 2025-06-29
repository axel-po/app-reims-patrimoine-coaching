"use client";

import { useEffect } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ModuleHeader from "./module-header";
import LessonItem from "@/userinterface/components/dashboard/lessons/lesson-item";
import { ModulePresentation } from "@/infrastructure/presenters/modules.presenter";
import { useLessonsViewModel } from "@/userinterface/components/dashboard/lessons/LessonsViewModel";
import { useQueryState } from "nuqs";

interface ModuleAccordionProps {
  module: ModulePresentation;
  defaultOpen?: boolean;
}

export default function ModuleAccordion({
  module,
  defaultOpen = false,
}: ModuleAccordionProps) {
  const [selectedLessonId] = useQueryState("lessonId");

  const {
    lessons,
    isLoading: lessonsLoading,
    error: lessonsError,
    loadLessonsByModuleId,
  } = useLessonsViewModel();

  const handleAccordionChange = (value: string[]) => {
    const isOpen = value.includes(`module-${module.id}`);
    if (isOpen) {
      loadLessonsByModuleId(module.id);
    }
  };

  // Load lessons if defaultOpen is true
  useEffect(() => {
    if (defaultOpen) {
      loadLessonsByModuleId(module.id);
    }
  }, [defaultOpen, module.id]);

  return (
    <Accordion
      type="multiple"
      defaultValue={defaultOpen ? [`module-${module.id}`] : []}
      className="w-full"
      onValueChange={handleAccordionChange}
    >
      <AccordionItem value={`module-${module.id}`} className="border-none">
        <AccordionTrigger className="hover:no-underline py-3 px-3 rounded-lg hover:bg-slate-50 text-sm font-medium text-slate-700 [&[data-state=open]]:bg-slate-50">
          <ModuleHeader
            title={module.title}
            duration={module.duration || "N/A"}
          />
        </AccordionTrigger>
        <AccordionContent className="pb-2">
          <div className="ml-4 space-y-1">
            {lessonsLoading ? (
              <div className="text-sm text-slate-500">Loading lessons...</div>
            ) : lessonsError ? (
              <div className="text-sm text-red-500">Error: {lessonsError}</div>
            ) : lessons.length === 0 ? (
              <div className="text-sm text-slate-500">No lessons found</div>
            ) : (
              lessons.map((lesson) => (
                <LessonItem
                  key={lesson.id}
                  lesson={lesson}
                  isSelected={selectedLessonId === lesson.id}
                />
              ))
            )}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
