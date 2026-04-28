import { KpiCards } from "@/components/kpi-cards";

export function VisitsKpiCards() {
  return (
    <KpiCards>
      <KpiCards.Item>
        <KpiCards.Value end={227} />
        <KpiCards.Label>Total de visitas</KpiCards.Label>
        <KpiCards.Sub>No período selecionado</KpiCards.Sub>
      </KpiCards.Item>
      <KpiCards.Item>
        <KpiCards.Value end={32.4} decimals={1} />
        <KpiCards.Label>Visitas / dia (média)</KpiCards.Label>
        <KpiCards.Sub>Últimos 7 dias</KpiCards.Sub>
      </KpiCards.Item>
      <KpiCards.Item
        colorClassName="text-emerald-600 dark:text-emerald-400"
        className="bg-emerald-50/60 dark:bg-emerald-950/20"
      >
        <KpiCards.Value end={3.96} decimals={2} suffix="%" />
        <KpiCards.Label>Conversão visita → venda</KpiCards.Label>
        <KpiCards.Sub>9 vendas de 227 visitas</KpiCards.Sub>
      </KpiCards.Item>
    </KpiCards>
  );
}
