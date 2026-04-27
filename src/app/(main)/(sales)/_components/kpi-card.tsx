import type * as React from "react";

import { cn } from "@/lib/utils";

type KpiCardRootProps = React.ComponentProps<"div">;

function KpiCardRoot({ className, ...props }: KpiCardRootProps) {
  return (
    <div
      data-slot="kpi-card"
      className={cn(
        "flex flex-col items-center justify-center gap-1.5 py-8 text-center",
        className,
      )}
      {...props}
    />
  );
}

function KpiCardValue({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="kpi-card-value"
      className={cn(
        "font-extrabold text-[clamp(1.5rem,3vw,1.5rem)] leading-none tracking-tighter",
        className,
      )}
      {...props}
    />
  );
}

function KpiCardTitle({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="kpi-card-title"
      className={cn("font-normal text-foreground text-xs", className)}
      {...props}
    />
  );
}

function KpiCardSub({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="kpi-card-sub"
      className={cn("font-normal text-muted-foreground text-xs", className)}
      {...props}
    />
  );
}

export const KpiCard = Object.assign(KpiCardRoot, {
  Value: KpiCardValue,
  Title: KpiCardTitle,
  Sub: KpiCardSub,
});
