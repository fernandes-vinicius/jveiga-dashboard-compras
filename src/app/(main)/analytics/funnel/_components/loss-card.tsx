import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { lossStages } from "./loss-analysis";

function fmt(n: number) {
  return n.toFixed(1).replace(".", ",");
}

export function LossCard({ stage }: { stage: (typeof lossStages)[number] }) {
  const { title, from, lost, converted, convertedPct, lostPct, severity } =
    stage;

  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-sm">⚠️ {title}</CardTitle>
            <p className="text-muted-foreground text-xs">perda da etapa</p>
          </div>
          <span
            className={cn(
              "rounded-full px-2.5 py-0.5 font-semibold text-xs",
              severity === "warn"
                ? "bg-amber-100 text-amber-700 dark:bg-amber-950/40 dark:text-amber-400"
                : "bg-red-100 text-red-700 dark:bg-red-950/40 dark:text-red-400",
            )}
          >
            {Math.round(lostPct)}% perdido
          </span>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        <div className="flex items-center justify-around text-center">
          <div>
            <p className="font-bold text-xl">{from.value}</p>
            <p className="text-muted-foreground text-xs">{from.label}</p>
          </div>
          <span className="text-muted-foreground text-sm opacity-50">▶</span>
          <div>
            <p className="font-bold text-red-500 text-xl dark:text-red-400">
              {lost.value}
            </p>
            <p className="text-muted-foreground text-xs">{lost.label}</p>
          </div>
          <span className="text-muted-foreground text-sm opacity-50">▶</span>
          <div>
            <p className="font-bold text-emerald-600 text-xl dark:text-emerald-400">
              {converted.value}
            </p>
            <p className="text-muted-foreground text-xs">{converted.label}</p>
          </div>
        </div>
        <div className="flex h-3 overflow-hidden rounded-full">
          <div
            className="bg-emerald-500 dark:bg-emerald-600"
            style={{ width: `${convertedPct}%` }}
          />
          <div
            className={cn(
              severity === "bad"
                ? "bg-red-400 dark:bg-red-500"
                : "bg-amber-400 dark:bg-amber-500",
            )}
            style={{ width: `${lostPct}%` }}
          />
        </div>
        <div className="flex justify-between text-xs">
          <span className="font-medium text-emerald-600 dark:text-emerald-400">
            {fmt(convertedPct)}% converteu ({converted.value})
          </span>
          <span
            className={cn(
              "font-medium",
              severity === "bad"
                ? "text-red-500 dark:text-red-400"
                : "text-amber-600 dark:text-amber-400",
            )}
          >
            {fmt(lostPct)}% perdeu ({lost.value})
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
