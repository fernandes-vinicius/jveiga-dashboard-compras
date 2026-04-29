import { KpiCards } from "@/components/kpi-cards";

export function VsoKpiCards() {
  return (
    <KpiCards className="grid-cols-3">
      <KpiCards.Item colorClassName="text-blue-600 dark:text-blue-400">
        <KpiCards.Value end={61.8} decimals={1} suffix="%" />
        <KpiCards.Label>VSO Previsto</KpiCards.Label>
        <KpiCards.Sub>curva ideal acumulada</KpiCards.Sub>
      </KpiCards.Item>
      <KpiCards.Item
        colorClassName="text-amber-600 dark:text-amber-400"
        className="bg-amber-50/60 dark:bg-amber-950/20"
      >
        <KpiCards.Value end={33.0} decimals={1} suffix="%" />
        <KpiCards.Label>VSO Realizado</KpiCards.Label>
        <KpiCards.Sub>posição atual</KpiCards.Sub>
      </KpiCards.Item>
      <KpiCards.Item
        colorClassName="text-rose-600 dark:text-rose-400"
        className="bg-rose-50/60 dark:bg-rose-950/20"
      >
        <span className="font-extrabold text-[clamp(1.5rem,3vw,1.5rem)] text-rose-600 leading-none tracking-tighter dark:text-rose-400">
          -28.8pp
        </span>
        <KpiCards.Label>Desvio (Spread)</KpiCards.Label>
        <KpiCards.Sub>meta H1: spread ≤ 2pp</KpiCards.Sub>
      </KpiCards.Item>
    </KpiCards>
  );
}
