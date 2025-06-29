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

import CourseInfo from "../courses/course-info";
import Author from "@/app/dashboard/_components/author/author";
import ModulesList from "../modules/modules-list";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
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

        {/* Course Info */}
        <CourseInfo />

        <div className="px-3 py-3">{/* <CourseProgress modules={[]} /> */}</div>
      </SidebarHeader>

      <SidebarContent className="bg-white">
        <div className="px-3 py-4">
          <h3 className="text-sm font-semibold text-slate-900 mb-4">
            Course content
          </h3>

          <ModulesList courseId={"cb4fbfd3-a94e-46c4-ba57-338844f6b5b9"} />
        </div>

        <Author />
      </SidebarContent>
    </Sidebar>
  );
}
