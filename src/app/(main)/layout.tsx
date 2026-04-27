import * as React from "react";
import { AppSidebar } from "@/components/app-sidebar";
import { Header } from "@/components/header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import type { LayoutProps } from "@/types";

export default function MainLayout({ children }: LayoutProps) {
  return (
    <div className="[--header-height:calc(--spacing(14))]">
      <SidebarProvider className="flex flex-col">
        <Header />
        <div className="flex flex-1">
          <AppSidebar />
          <SidebarInset>
            <React.Suspense fallback={null}>{children}</React.Suspense>
          </SidebarInset>
        </div>
      </SidebarProvider>
    </div>
  );
}
