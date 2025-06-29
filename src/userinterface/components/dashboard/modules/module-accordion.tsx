"use client";

import { useEffect, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ModuleHeader from "./module-header";
import LessonItem from "@/userinterface/components/dashboard/lessons/lesson-item";
import { ModulePresentation } from "@/infrastructure/presenters/modules.presenter";
import { useQueryState } from "nuqs";
import { Lesson } from "@/domain/models/lessons.interface";
import { getLessonsByModuleIdAction } from "@/userinterface/actions/lessons.actions";

interface ModuleAccordionProps {
  module: ModulePresentation;
  defaultOpen?: boolean;
}

export default function ModuleAccordion({
  module,
  defaultOpen = false,
}: ModuleAccordionProps) {
  const [selectedLessonId] = useQueryState("lessonId");

  // Local state for this module only
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadLessons = async (moduleId: string) => {
    // Don't load if already loaded
    if (lessons.length > 0) return;

    setIsLoading(true);
    setError(null);

    try {
      const result = await getLessonsByModuleIdAction(moduleId);

      if (result.error) {
        setError(result.error.message);
      } else {
        setLessons(result.data);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error loading lessons");
    } finally {
      setIsLoading(false);
    }
  };

  const handleAccordionChange = (value: string[]) => {
    const isOpen = value.includes(`module-${module.id}`);
    if (isOpen) {
      loadLessons(module.id);
    }
  };

  // Load lessons if defaultOpen is true
  useEffect(() => {
    if (defaultOpen) {
      loadLessons(module.id);
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
            {isLoading ? (
              <div className="text-sm text-slate-500">Loading lessons...</div>
            ) : error ? (
              <div className="text-sm text-red-500">Error: {error}</div>
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
