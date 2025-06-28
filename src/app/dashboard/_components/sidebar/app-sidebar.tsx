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
import { useCoursesStore } from "@/stores/courses-store";
import { useModulesStore } from "@/stores/modules-store";

import Author from "../author/author";
import CourseInfo from "../courses/course-info";
import ModuleAccordion from "../courses/module-accordion";
import CourseProgress from "../courses/course-progress";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { courses, isLoading, error, fetchCourses } = useCoursesStore();
  const {
    modules,
    isLoading: modulesLoading,
    error: modulesError,
    fetchModulesByCourseId,
  } = useModulesStore();

  // GET ALL COURSES FROM THE DATABASE
  React.useEffect(() => {
    fetchCourses();
  }, [fetchCourses]);

  // If later we have multiple courses, we will need to change this
  React.useEffect(() => {
    if (courses[0]?.id) {
      fetchModulesByCourseId(courses[0].id);
    }
  }, [courses, fetchModulesByCourseId]);

  // GET THE FIRST COURSE
  const currentCourse = courses[0];

  if (error) {
    return <div>Error loading courses: {error}</div>;
  }

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
          title={currentCourse.title}
          description={currentCourse.description || ""}
          duration={"N/A"}
        />

        <div className="px-3 py-3">
          <CourseProgress modules={[]} />
        </div>
      </SidebarHeader>

      <SidebarContent className="bg-white">
        <div className="px-3 py-4">
          <h3 className="text-sm font-semibold text-slate-900 mb-4">
            Course content
          </h3>

          {isLoading || modulesLoading ? (
            <div>Loading...</div>
          ) : modulesError ? (
            <div>Error loading modules: {modulesError}</div>
          ) : (
            <div className="space-y-1">
              {modules.map((module, index) => (
                <ModuleAccordion
                  key={module.id}
                  module={{
                    id: index + 1,
                    title: module.title,
                    duration: module.duration || "N/A",
                    lessons: [],
                  }}
                />
              ))}
            </div>
          )}
        </div>

        <Author />
      </SidebarContent>
    </Sidebar>
  );
}
