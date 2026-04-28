import type { CountUpProps } from "react-countup";
import { CountUp } from "@/components/count-up";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

function KpiCardsRoot({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <Card
      data-slot="kpi-cards"
      className={cn(
        "grid grid-cols-3 gap-0 divide-x divide-border overflow-hidden p-0",
        className,
      )}
      {...props}
    />
  );
}

interface KpiCardsItemProps extends React.ComponentProps<"div"> {
  colorClassName?: string;
}

function KpiCardsItem({
  className,
  colorClassName = "text-primary",
  children,
  ...props
}: KpiCardsItemProps) {
  return (
    <div
      data-slot="kpi-cards-item"
      className={cn(
        "relative flex flex-col items-center justify-center gap-1.5 py-8 text-center",
        colorClassName,
        className,
      )}
      {...props}
    >
      <div className="absolute inset-x-0 top-0 h-1 bg-current" />
      {children}
    </div>
  );
}

type KpiCardsValueProps = Pick<
  CountUpProps,
  "end" | "decimals" | "suffix" | "duration"
> & { className?: string };

function KpiCardsValue({ className, ...countUpProps }: KpiCardsValueProps) {
  return (
    <span
      data-slot="kpi-cards-value"
      className={cn(
        "font-extrabold text-[clamp(1.5rem,3vw,1.5rem)] leading-none tracking-tighter",
        className,
      )}
    >
      <CountUp {...countUpProps} />
    </span>
  );
}

function KpiCardsLabel({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="kpi-cards-label"
      className={cn("font-normal text-foreground text-xs", className)}
      {...props}
    />
  );
}

function KpiCardsSub({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="kpi-cards-sub"
      className={cn("font-normal text-muted-foreground text-xs", className)}
      {...props}
    />
  );
}

export const KpiCards = Object.assign(KpiCardsRoot, {
  Item: KpiCardsItem,
  Value: KpiCardsValue,
  Label: KpiCardsLabel,
  Sub: KpiCardsSub,
});
