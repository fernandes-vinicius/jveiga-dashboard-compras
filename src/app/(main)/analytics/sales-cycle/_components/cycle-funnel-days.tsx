import { KpiCards } from "@/components/kpi-cards";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

type StageData = {
  name: string;
  value: number;
  sub: string;
  color: string;
};

type ArrowData = {
  days: number;
  meta: number;
  label: string;
};

const stages: StageData[] = [
  {
    name: "Leads",
    value: 510,
    sub: "topo do funil",
    color: "text-blue-600 dark:text-blue-400",
  },
  {
    name: "Visitas Agendadas",
    value: 204,
    sub: "40% dos leads",
    color: "text-sky-500 dark:text-sky-400",
  },
  {
    name: "Visitas Realizadas",
    value: 148,
    sub: "73% das agendadas",
    color: "text-sky-400 dark:text-sky-300",
  },
  {
    name: "Pastas",
    value: 60,
    sub: "41% das visitas",
    color: "text-indigo-600 dark:text-indigo-400",
  },
  {
    name: "Vendas",
    value: 3,
    sub: "5,0% das pastas",
    color: "text-emerald-600 dark:text-emerald-400",
  },
];

const arrows: ArrowData[] = [
  { days: 7, meta: 5, label: "Lead → Vis. Ag." },
  { days: 7, meta: 5, label: "Vis. Ag. → Real." },
  { days: 5, meta: 3, label: "Vis. Real. → Pasta" },
  { days: 9, meta: 7, label: "Pasta → Venda" },
];

function Stage({ name, value, sub, color }: StageData) {
  return (
    <KpiCards.Item
      className="min-w-44 flex-1 border"
      colorClassName="text-primary"
    >
      <KpiCards.Value end={value} suffix="" />
      <KpiCards.Label>{name}l</KpiCards.Label>
      <KpiCards.Sub>{sub}</KpiCards.Sub>
    </KpiCards.Item>
  );
}

function Arrow({ days, meta, label }: ArrowData) {
  const overMeta = days > meta;
  return (
    <div className="flex min-w-[80px] flex-1 flex-col items-center gap-0.5 px-1">
      <span
        className={cn(
          "font-bold text-sm",
          overMeta
            ? "text-rose-500 dark:text-rose-400"
            : "text-emerald-600 dark:text-emerald-400",
        )}
      >
        {days}d
      </span>
      <span className="text-[0.6rem] text-muted-foreground">meta: {meta}d</span>
      <div className="flex w-full items-center gap-0.5">
        <div className="h-px flex-1 bg-border" />
        <span className="text-[0.6rem] text-muted-foreground">▶</span>
      </div>
      <span className="text-center text-[0.6rem] text-muted-foreground">
        {label}
      </span>
    </div>
  );
}

export function CycleFunnelDays() {
  return (
    <Card>
      <CardHeader>
        <CardTitle> ⏱ Funil em Dias — Lead até Venda</CardTitle>
        <CardDescription>Tempo médio entre etapas</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-2 overflow-x-auto">
          {stages.map((stage, i) => (
            <div key={stage.name} className="flex flex-1 items-center">
              <Stage {...stage} />
              {i < arrows.length && <Arrow {...arrows[i]} />}
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <div className="flex flex-wrap gap-x-4 gap-y-1 text-[0.65rem] text-muted-foreground sm:items-center">
          <span className="flex gap-1 sm:items-center">
            <span className="font-bold text-rose-500">●</span> Tempo atual entre
            etapas
          </span>
          <span className="flex gap-1 sm:items-center">
            <span className="font-bold text-emerald-600">●</span> Meta H1 2026
          </span>
          <span className="ml-auto">
            Fonte: 06_03_26 SalesStrategy H1 2026 V3
          </span>
        </div>
      </CardFooter>
    </Card>
  );
}
