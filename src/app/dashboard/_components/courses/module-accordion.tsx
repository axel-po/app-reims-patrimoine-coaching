"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import ModuleHeader from "./module-header";

interface ModuleAccordionProps {
  defaultOpen?: boolean;
}

export default function ModuleAccordion({
  module,
  defaultOpen = false,
}: ModuleAccordionProps) {
  return (
    <Accordion
      type="multiple"
      defaultValue={defaultOpen ? [`module-${module.id}`] : []}
      className="w-full"
      onValueChange={() => {}}
    >
      <AccordionItem value={`module-${module.id}`} className="border-none">
        <AccordionTrigger className="hover:no-underline py-3 px-3 rounded-lg hover:bg-slate-50 text-sm font-medium text-slate-700 [&[data-state=open]]:bg-slate-50">
          <ModuleHeader title={module.title} duration={module.duration} />
        </AccordionTrigger>
        <AccordionContent className="pb-2">
          {/* <div className="ml-4 space-y-1">
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
          </div> */}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
