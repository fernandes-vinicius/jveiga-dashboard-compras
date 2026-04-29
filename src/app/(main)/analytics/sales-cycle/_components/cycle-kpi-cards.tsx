import { KpiCards } from "@/components/kpi-cards";

export function CycleKpiCards() {
  return (
    <KpiCards className="grid-cols-2 md:grid-cols-4">
      <KpiCards.Item colorClassName="text-blue-600 dark:text-blue-400">
        <KpiCards.Value end={28} suffix=" dias" />
        <KpiCards.Label>Ciclo Total</KpiCards.Label>
        <KpiCards.Sub>Lead → Venda · meta H1: 20d</KpiCards.Sub>
      </KpiCards.Item>
      <KpiCards.Item colorClassName="text-blue-500 dark:text-blue-300">
        <KpiCards.Value end={14} suffix=" dias" />
        <KpiCards.Label>Lead → Visita</KpiCards.Label>
        <KpiCards.Sub>Meta: 10 dias</KpiCards.Sub>
      </KpiCards.Item>
      <KpiCards.Item
        colorClassName="text-indigo-600 dark:text-indigo-400"
        className="bg-indigo-50/50 dark:bg-indigo-950/20"
      >
        <KpiCards.Value end={14} suffix=" dias" />
        <KpiCards.Label>Visita → Venda</KpiCards.Label>
        <KpiCards.Sub>Meta: 10 dias</KpiCards.Sub>
      </KpiCards.Item>
      <KpiCards.Item
        colorClassName="text-emerald-600 dark:text-emerald-400"
        className="bg-emerald-50/60 dark:bg-emerald-950/20"
      >
        <KpiCards.Value end={0.09} decimals={2} prefix="R$ " suffix=" mi" />
        <KpiCards.Label>Pipeline Aberto</KpiCards.Label>
        <KpiCards.Sub>30 visitas projetadas</KpiCards.Sub>
      </KpiCards.Item>
    </KpiCards>
  );
}
