"use client";

import { useState } from "react";
import { ChevronsUpDownIcon, LayoutDashboardIcon } from "@/components/icons";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

type Build = {
  id: string;
  name: string;
};

const builds: Build[] = [
  { id: "samba", name: "Samba" },
  { id: "super-california", name: "Super California / Duo London" },
];

export function BuildSelect() {
  const { isMobile } = useSidebar();

  const [selectedBuilds, setSelectedBuilds] = useState<Build[]>(builds);

  const handleSelectAll = () => {
    setSelectedBuilds(builds);
  };

  const handleSelect = (build: Build) => {
    setSelectedBuilds((prevSelected) => {
      const isSelected = prevSelected.some((b) => b.name === build.name);

      if (isSelected) {
        if (prevSelected.length === 1) return builds;
        return prevSelected.filter((b) => b.name !== build.name);
      } else {
        return [...prevSelected, build];
      }
    });
  };

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                <LayoutDashboardIcon className="size-4" />
              </div>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-medium">Empreendimentos</span>
                {selectedBuilds.length === builds.length && (
                  <span className="truncate text-xs">Todos</span>
                )}
                {selectedBuilds.length !== builds.length && (
                  <span className="truncate text-xs">
                    {selectedBuilds.length === 1
                      ? selectedBuilds[0].name
                      : `${selectedBuilds.length} selecionados`}
                  </span>
                )}
              </div>
              <ChevronsUpDownIcon className="ml-auto" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
            align="start"
            side={isMobile ? "bottom" : "right"}
            sideOffset={4}
          >
            <DropdownMenuLabel className="text-muted-foreground text-xs">
              Empreendimentos
            </DropdownMenuLabel>
            <DropdownMenuItem onClick={handleSelectAll}>
              Selecionar todos
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            {builds.map((build) => {
              const isSelected = selectedBuilds.some(
                (b) => b.name === build.name,
              );

              return (
                <DropdownMenuCheckboxItem
                  key={build.name}
                  checked={isSelected}
                  onCheckedChange={() => handleSelect(build)}
                  onSelect={(event) => {
                    // Keep dropdown open when select single options
                    event.preventDefault();
                  }}
                >
                  <span className="capitalize">{build.name}</span>
                </DropdownMenuCheckboxItem>
              );
            })}
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
