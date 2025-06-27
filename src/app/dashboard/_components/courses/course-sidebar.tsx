"use client";

import * as React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.png";

import { courseData } from "../../fakeData";
import { useLessonContext } from "../context/lesson-context";
import Author from "../author/author";
import CourseInfo from "./course-info";
import ModuleAccordion from "./module-accordion";
import CourseProgress from "./course-progress";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { currentLesson, lessons, selectLesson } = useLessonContext();

  return (
    <Sidebar
      collapsible="offcanvas"
      className="bg-white border-r border-slate-200 w-92"
      {...props}
    >
      <SidebarHeader className="bg-white border-b border-slate-100">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-2 data-[slot=sidebar-menu-button]:!h-auto"
            >
              <Link href="/dashboard">
                <Image
                  src={logo}
                  alt="Reims Patrimoine Coaching"
                  width={140}
                  height={100}
                  className="object-contain"
                />
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>

        <CourseInfo
          title={courseData.title}
          description={courseData.description}
          duration={courseData.duration}
          rating={courseData.rating}
          enrolled={courseData.enrolled}
        />

        <div className="px-3 py-3">
          <CourseProgress modules={lessons} />
        </div>
      </SidebarHeader>

      <SidebarContent className="bg-white">
        <div className="px-3 py-4">
          <h3 className="text-sm font-semibold text-slate-900 mb-4">
            Course content
          </h3>

          <div className="space-y-1">
            {lessons.map((module) => (
              <ModuleAccordion
                key={module.id}
                module={module}
                currentLesson={currentLesson}
                selectLesson={selectLesson}
                defaultOpen={module.id === 1}
              />
            ))}
          </div>
        </div>

        <Author />
      </SidebarContent>
    </Sidebar>
  );
}
