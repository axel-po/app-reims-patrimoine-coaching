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

import Author from "../author/author";
import CourseInfo from "../courses/course-info";
import ModuleAccordion from "../courses/module-accordion";
import CourseProgress from "../courses/course-progress";
import { getAllCoursesWithContent } from "@/services/courses-service";

export async function AppSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  const courses = await getAllCoursesWithContent();

  const modules = courses.data?.[0]?.modules;

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
          title={courses?.data?.[0]?.title}
          description={courses?.data?.[0]?.description}
          duration={"6h 15min"}
        />

        <div className="px-3 py-3">
          <CourseProgress modules={courses?.data?.[0]?.modules} />
        </div>
      </SidebarHeader>

      <SidebarContent className="bg-white">
        <div className="px-3 py-4">
          <h3 className="text-sm font-semibold text-slate-900 mb-4">
            Course content
          </h3>

          <div className="space-y-1">
            {modules.map((module) => (
              <ModuleAccordion
                key={module.id}
                module={module}
                // currentLesson={currentLesson}
                // selectLesson={selectLesson}
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
