"use client";

import * as React from "react";

import { NavDocuments } from "../nav/nav-documents";
import { NavMain } from "../nav/nav-main";
import { NavSecondary } from "../nav/nav-secondary";

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
import { sidebarConfig } from "./config";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
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
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={sidebarConfig.navMain} />
        <NavDocuments items={sidebarConfig.documents} />
        <NavSecondary items={sidebarConfig.navSecondary} className="mt-auto" />
      </SidebarContent>
    </Sidebar>
  );
}
