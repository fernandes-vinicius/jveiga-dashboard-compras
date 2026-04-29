import { KpiCards } from "@/components/kpi-cards";

export function RealtorsKpiCards() {
  return (
    <KpiCards className="grid-cols-2 md:grid-cols-4">
      <KpiCards.Item colorClassName="text-blue-600 dark:text-blue-400">
        <KpiCards.Value end={1.5} decimals={1} />
        <KpiCards.Label>Vendas/Corretor JV (mês)</KpiCards.Label>
        <KpiCards.Sub>Meta: 2,23 · base: 0,6</KpiCards.Sub>
      </KpiCards.Item>
      <KpiCards.Item
        colorClassName="text-violet-600 dark:text-violet-400"
        className="bg-violet-50/60 dark:bg-violet-950/20"
      >
        <KpiCards.Value end={1.4} decimals={1} />
        <KpiCards.Label>Vendas/Corretor Parc. (mês)</KpiCards.Label>
        <KpiCards.Sub>Meta: 2,23 · base: 0,76</KpiCards.Sub>
      </KpiCards.Item>
      <KpiCards.Item colorClassName="text-sky-600 dark:text-sky-400">
        <KpiCards.Value end={3.4} decimals={1} />
        <KpiCards.Label>Visitas/Corretor (sem)</KpiCards.Label>
        <KpiCards.Sub>Média geral</KpiCards.Sub>
      </KpiCards.Item>
      <KpiCards.Item
        colorClassName="text-emerald-600 dark:text-emerald-400"
        className="bg-emerald-50/60 dark:bg-emerald-950/20"
      >
        <KpiCards.Value end={10.7} decimals={1} suffix="%" />
        <KpiCards.Label>Taxa Conv. Média</KpiCards.Label>
        <KpiCards.Sub>Visita → Venda · meta: 35%</KpiCards.Sub>
      </KpiCards.Item>
    </KpiCards>
  );
}
