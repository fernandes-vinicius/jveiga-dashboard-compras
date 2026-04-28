import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { now } from "@/lib/date-manager";
import { cn } from "@/lib/utils";

type DailyValue = number | null;

interface MetricConfig {
  id: string;
  label: string;
  textClass: string;
  bgClass: string;
  dotClass: string;
  values: DailyValue[];
  total: number;
}

const weekdays = ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"];

const metrics: MetricConfig[] = [
  {
    id: "leads",
    label: "Leads",
    textClass: "text-blue-600 dark:text-blue-400",
    bgClass: "bg-blue-50 dark:bg-blue-950/40",
    dotClass: "bg-blue-600 dark:bg-blue-400",
    values: [null, null, null, null, null, null, null],
    total: 0,
  },
  {
    id: "visitas",
    label: "Visitas",
    textClass: "text-sky-500 dark:text-sky-400",
    bgClass: "bg-sky-50 dark:bg-sky-950/40",
    dotClass: "bg-sky-500 dark:bg-sky-400",
    values: [null, null, null, null, null, null, null],
    total: 0,
  },
  {
    id: "pastas-abertas",
    label: "Pastas abertas",
    textClass: "text-amber-500 dark:text-amber-400",
    bgClass: "bg-amber-50 dark:bg-amber-950/40",
    dotClass: "bg-amber-500 dark:bg-amber-400",
    values: [null, null, null, null, null, null, null],
    total: 0,
  },
  {
    id: "vendas-fechadas",
    label: "Vendas fechadas",
    textClass: "text-emerald-500 dark:text-emerald-400",
    bgClass: "bg-emerald-50 dark:bg-emerald-950/40",
    dotClass: "bg-emerald-500 dark:bg-emerald-400",
    values: [null, null, null, null, null, null, null],
    total: 0,
  },
  {
    id: "corretores-jv",
    label: "Corretores JV",
    textClass: "text-slate-900 dark:text-slate-100",
    bgClass: "bg-slate-100 dark:bg-slate-800/40",
    dotClass: "bg-slate-900 dark:bg-slate-100",
    values: [null, null, null, null, null, null, null],
    total: 0,
  },
  {
    id: "corretores-parceria",
    label: "Corretores Parceria",
    textClass: "text-rose-500 dark:text-rose-400",
    bgClass: "bg-rose-50 dark:bg-rose-950/40",
    dotClass: "bg-rose-500 dark:bg-rose-400",
    values: [null, null, null, null, null, null, null],
    total: 0,
  },
];

// now().getDay(): 0=Sun, 1=Mon, ..., 6=Sat
// Week array: Mon=0, Tue=1, ..., Sat=5, Sun=6
function getTodayIndex(): number {
  return (now().getDay() + 6) % 7;
}

export function TrackingTable() {
  const todayIndex = getTodayIndex();

  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="min-w-40" />
            {weekdays.map((day, i) => (
              <TableHead
                key={day}
                className={cn(
                  "text-center",
                  i === todayIndex
                    ? "border-b-2 border-b-blue-600 text-blue-600 dark:border-b-blue-400 dark:text-blue-400"
                    : "text-muted-foreground",
                )}
              >
                {day.toUpperCase()}
              </TableHead>
            ))}
            <TableHead className="border-l text-right text-xs uppercase tracking-wider">
              Total
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {metrics.map((metric) => (
            <TableRow key={metric.id}>
              <TableCell
                className={cn(
                  "font-semibold text-sm",
                  metric.textClass,
                  metric.bgClass,
                )}
              >
                <span className="flex items-center gap-2">
                  <span
                    className={cn(
                      "inline-block size-2 shrink-0 rounded-full",
                      metric.dotClass,
                    )}
                  />
                  {metric.label}
                </span>
              </TableCell>
              {metric.values.map((value, i) => (
                <TableCell
                  key={weekdays[i]}
                  className={cn(
                    "text-center text-muted-foreground tabular-nums",
                    i === todayIndex && "bg-blue-50/60 dark:bg-blue-950/20",
                  )}
                >
                  {value === null ? "—" : value}
                </TableCell>
              ))}
              <TableCell
                className={cn(
                  "border-l text-right font-bold tabular-nums",
                  metric.textClass,
                )}
              >
                {metric.total}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <TableFooter className="flex flex-wrap gap-4 px-4 py-3">
        {metrics.map((metric) => (
          <span
            key={metric.id}
            className="flex items-center gap-1.5 text-muted-foreground text-xs"
          >
            <span
              className={cn(
                "inline-block size-2 shrink-0 rounded-full",
                metric.dotClass,
              )}
            />
            {metric.label}
          </span>
        ))}
      </TableFooter>
    </div>
  );
}
