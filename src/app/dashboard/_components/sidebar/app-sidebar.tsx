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

export async function AppSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
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
          title={"Investissement & Patrimoine"}
          description={
            "Maîtrisez la gestion de patrimoine et l'investissement de A à Z"
          }
          duration={"6h 15min"}
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

          <div className="space-y-1">
            <ModuleAccordion
              key={1}
              module={{
                id: 1,
                title: "01: Les Fondamentaux",
                duration: "45min",
                lessons: [],
              }}
            />
          </div>
        </div>

        <Author />
      </SidebarContent>
    </Sidebar>
  );
}
