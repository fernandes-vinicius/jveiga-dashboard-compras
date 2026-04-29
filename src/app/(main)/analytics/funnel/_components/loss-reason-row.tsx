import type { LossReason } from "./loss-analysis";

type LossReasonRowProps = {
  reason: LossReason;
  maxPct: number;
};

export function LossReasonRow({ reason, maxPct }: LossReasonRowProps) {
  return (
    <div className="flex items-center gap-2">
      <span className="w-44 shrink-0 truncate text-muted-foreground text-xs">
        {reason.name}
      </span>
      <div className="h-2 flex-1 overflow-hidden rounded-full bg-muted">
        <div
          className="h-full rounded-full bg-primary/60"
          style={{ width: `${(reason.pct / maxPct) * 100}%` }}
        />
      </div>
      <span className="w-7 text-right font-medium text-muted-foreground text-xs">
        {reason.pct}%
      </span>
      <span className="w-5 text-right font-semibold text-xs">
        {reason.count}
      </span>
    </div>
  );
}
