"use client";

import { usePathname } from "next/navigation";
import { BuildSelect } from "@/components/build-select";
import { NavMain } from "@/components/nav-main";
import { NavSecondary } from "@/components/nav-secondary";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { nav } from "@/config/nav";

export function AppSidebar() {
  const pathname = usePathname();

  const activePath = [...nav.main, ...nav.secondary].find((item) => {
    if (item.path === "/") return pathname === "/";
    return pathname.startsWith(item.path);
  })?.path;

  return (
    <Sidebar className="top-(--header-height) h-[calc(100svh-var(--header-height))]!">
      <SidebarHeader>
        <BuildSelect />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={nav.main} activePath={activePath} />
        <NavSecondary items={nav.secondary} activePath={activePath} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
    </Sidebar>
  );
}
