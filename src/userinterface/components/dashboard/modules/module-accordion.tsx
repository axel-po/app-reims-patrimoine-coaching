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
import { useModuleLessonsViewModel } from "@/userinterface/components/dashboard/lessons/LessonsViewModel";
import { getUserCompletedLessonsAction } from "@/userinterface/actions/userProgress.actions";
import { getModuleAccessInfoAction } from "@/userinterface/actions/modules.actions";
import { useAuth } from "@/lib/auth/useAuth";
import { ModuleAccessInfo } from "@/domain/usecases/moduleAccess.useCase";

interface ModuleAccordionProps {
  module: ModulePresentation;
  defaultOpen?: boolean;
}

export default function ModuleAccordion({
  module,
  defaultOpen = false,
}: ModuleAccordionProps) {
  const [selectedLessonId] = useQueryState("lessonId");
  const [openValues, setOpenValues] = useState<string[]>([]);
  const [completedLessons, setCompletedLessons] = useState<Set<string>>(
    new Set()
  );
  const [moduleAccess, setModuleAccess] = useState<ModuleAccessInfo | null>(null);
  const { user } = useAuth();

  // Use ViewModel for lessons management
  const { lessons, isLoading, error, hasLessonWithId } =
    useModuleLessonsViewModel(module.id);

  // Load completed lessons and module access
  useEffect(() => {
    const loadData = async () => {
      if (!user?.id) return;

      try {
        // Load completed lessons
        const result = await getUserCompletedLessonsAction();
        if (result.data) {
          const completedIds = new Set(
            result.data.map((progress) => progress.lessonId)
          );
          setCompletedLessons(completedIds);
        }

        // Load module access info
        const accessResult = await getModuleAccessInfoAction(user.id, module.id);
        if (accessResult.data) {
          setModuleAccess(accessResult.data);
        }
      } catch (error) {
        console.error("Error loading data:", error);
      }
    };

    loadData();

    // Listen for lesson completion events
    const handleLessonCompleted = async (event: CustomEvent) => {
      const { lessonId } = event.detail;
      setCompletedLessons((prev) => new Set([...prev, lessonId]));
      
      // Refresh module access info after lesson completion
      if (user?.id) {
        const accessResult = await getModuleAccessInfoAction(user.id, module.id);
        if (accessResult.data) {
          setModuleAccess(accessResult.data);
        }
      }
    };

    window.addEventListener(
      "lessonCompleted",
      handleLessonCompleted as unknown as EventListener
    );

    return () => {
      window.removeEventListener(
        "lessonCompleted",
        handleLessonCompleted as unknown as EventListener
      );
    };
  }, [user?.id, module.id]);

  // Check if the selected lesson belongs to this module
  const hasSelectedLesson =
    selectedLessonId && hasLessonWithId(selectedLessonId);

  // Update accordion state based on selected lesson or defaultOpen
  useEffect(() => {
    const moduleKey = `module-${module.id}`;

    if (hasSelectedLesson) {
      // Keep accordion open if it contains the selected lesson
      if (!openValues.includes(moduleKey)) {
        setOpenValues((prev) => [...prev, moduleKey]);
      }
    } else if (defaultOpen && !openValues.includes(moduleKey)) {
      // Open if defaultOpen is true and not already open
      setOpenValues((prev) => [...prev, moduleKey]);
    }
  }, [hasSelectedLesson, defaultOpen, module.id, openValues]);

  const handleAccordionChange = (value: string[]) => {
    const moduleKey = `module-${module.id}`;

    // If the module contains the selected lesson, prevent closing
    if (hasSelectedLesson && !value.includes(moduleKey)) {
      return; // Don't allow closing when it contains selected lesson
    }

    setOpenValues(value);
  };

  return (
    <Accordion
      type="multiple"
      value={openValues}
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
              lessons.map((lesson) => {
                const isUnlocked = moduleAccess?.unlockedLessons.includes(lesson.id) ?? false;
                return (
                  <LessonItem
                    key={lesson.id}
                    lesson={lesson}
                    isSelected={selectedLessonId === lesson.id}
                    isCompleted={completedLessons.has(lesson.id)}
                    isLocked={!isUnlocked}
                  />
                );
              })
            )}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
