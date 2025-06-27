"use client";

import * as React from "react";
import { Clock, Star, CheckCircle2, Circle } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { IconInnerShadowTop } from "@tabler/icons-react";

import { courseData } from "../../fakeData";
import { useLessonContext } from "../context/lesson-context";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { currentLesson, lessons, selectLesson } = useLessonContext();

  const currentCourseData = {
    title: courseData.title,
    description: courseData.description,
    duration: courseData.duration,
    rating: courseData.rating,
    enrolled: courseData.enrolled,
  };

  return (
    <Sidebar
      collapsible="offcanvas"
      className="bg-white border-r border-slate-200"
      {...props}
    >
      <SidebarHeader className="bg-white border-b border-slate-100">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <Link href="/dashboard">
                <IconInnerShadowTop className="!size-5" />
                <span className="text-base font-semibold">MindTrack AI</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>

        {/* Course Info Section */}
        <div className="px-3 py-4 border-b border-slate-100">
          <div className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">
              {currentCourseData.title}
            </h2>
            <p className="text-sm text-slate-600">
              {currentCourseData.description}
            </p>

            <div className="flex items-center gap-4 text-xs text-slate-500">
              <div className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                <span>{currentCourseData.duration}</span>
              </div>
              <div className="flex items-center gap-1">
                <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                <span>
                  {currentCourseData.rating} ({currentCourseData.enrolled}{" "}
                  reviews)
                </span>
              </div>
            </div>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent className="bg-white">
        <div className="px-3 py-4">
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
                              currentLesson?.id === lesson.id
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

        <div className="px-6 py-6 border-t border-slate-100 bg-white">
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-slate-900">Author</h4>
            <div className="flex items-center gap-3">
              <Avatar className="h-10 w-10">
                <AvatarImage src="" />
                <AvatarFallback className="bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm">
                  CL
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <p className="text-sm font-medium text-slate-900">
                    {courseData.instructor}
                  </p>
                  <Badge
                    variant="secondary"
                    className="text-xs px-2 py-0.5 bg-blue-100 text-blue-700"
                  >
                    <Star className="w-3 h-3 mr-1 fill-current" />
                    {courseData.rating}
                  </Badge>
                </div>
                <p className="text-xs text-slate-500">
                  Conseillère en Gestion de Patrimoine
                </p>
              </div>
            </div>
          </div>
        </div>
      </SidebarContent>
    </Sidebar>
  );
}
