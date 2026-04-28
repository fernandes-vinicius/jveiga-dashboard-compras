import { KpiCards } from "@/components/kpi-cards";

export function FoldersKpiCards() {
  return (
    <KpiCards>
      <KpiCards.Item>
        <KpiCards.Value end={42} />
        <KpiCards.Label>Total de pastas</KpiCards.Label>
        <KpiCards.Sub>No período selecionado</KpiCards.Sub>
      </KpiCards.Item>
      <KpiCards.Item
        colorClassName="text-emerald-600 dark:text-emerald-400"
        className="bg-emerald-50/60 dark:bg-emerald-950/20"
      >
        <KpiCards.Value end={6} />
        <KpiCards.Label>Aprovadas</KpiCards.Label>
        <KpiCards.Sub>14,3% do total</KpiCards.Sub>
      </KpiCards.Item>
      <KpiCards.Item
        colorClassName="text-destructive"
        className="bg-destructive/5"
      >
        <KpiCards.Value end={10} />
        <KpiCards.Label>Distratadas / Recusadas</KpiCards.Label>
        <KpiCards.Sub>23,8% do total</KpiCards.Sub>
      </KpiCards.Item>
    </KpiCards>
  );
}
