"use client";

import Link from "next/link";
import { DateRangePicker } from "@/components/date-range-picker";
import { PanelLeftIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useSidebar } from "@/components/ui/sidebar";

export function Header() {
  const { toggleSidebar } = useSidebar();

  return (
    <header className="sticky top-0 z-50 flex w-full items-center border-b bg-background">
      <div className="flex h-(--header-height) w-full items-center gap-2 px-4">
        <Button variant="ghost" size="icon-sm" onClick={toggleSidebar}>
          <PanelLeftIcon />
        </Button>
        <Separator
          orientation="vertical"
          className="mr-2 data-vertical:h-4 data-vertical:self-auto"
        />

        {/* Logo & Site name */}
        <div className="flex shrink-0 items-center gap-1.5">
          <Link href="/" aria-label="Ir para a página inicial">
            <span className="font-heading font-semibold text-[clamp(1.125rem,2.5vw,2rem)] text-primary leading-none tracking-tighter transition-colors hover:text-muted-foreground">
              jdv
            </span>
          </Link>
          <span
            aria-hidden="true"
            className="hidden size-1.5 rounded-full bg-primary transition-colors sm:block"
          />
          <span className="sr-only text-muted-foreground text-xs tracking-tighter sm:not-sr-only">
            Dashboard
          </span>
        </div>

        <div className="ml-auto sm:mx-auto">
          <DateRangePicker />
        </div>
      </div>
    </header>
  );
}
