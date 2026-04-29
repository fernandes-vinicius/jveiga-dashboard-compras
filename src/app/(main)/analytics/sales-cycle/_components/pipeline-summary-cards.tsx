import { KpiCards } from "@/components/kpi-cards";

export function PipelineSummaryCards() {
  return (
    <KpiCards className="grid-cols-2 md:grid-cols-4">
      <KpiCards.Item colorClassName="text-blue-600 dark:text-blue-400">
        <KpiCards.Value end={1} />
        <KpiCards.Label>Visitas Projetadas</KpiCards.Label>
        <KpiCards.Sub>no pipeline atual</KpiCards.Sub>
      </KpiCards.Item>
      <KpiCards.Item
        colorClassName="text-emerald-600 dark:text-emerald-400"
        className="bg-emerald-50/60 dark:bg-emerald-950/20"
      >
        <KpiCards.Value end={0} />
        <KpiCards.Label>Vendas Esperadas</KpiCards.Label>
        <KpiCards.Sub>à taxa V→S de 30%</KpiCards.Sub>
      </KpiCards.Item>
      <KpiCards.Item
        colorClassName="text-amber-600 dark:text-amber-400"
        className="bg-amber-50/60 dark:bg-amber-950/20"
      >
        <KpiCards.Value end={0.09} decimals={2} prefix="R$ " suffix=" mi" />
        <KpiCards.Label>Valor Pipeline</KpiCards.Label>
        <KpiCards.Sub>com ticket médio R$ 300k</KpiCards.Sub>
      </KpiCards.Item>
      <KpiCards.Item
        colorClassName="text-rose-600 dark:text-rose-400"
        className="bg-rose-50/60 dark:bg-rose-950/20"
      >
        <span className="font-extrabold text-[clamp(1.5rem,3vw,1.5rem)] leading-none tracking-tighter">
          11/03
        </span>
        <KpiCards.Label>Próximo Fechamento</KpiCards.Label>
        <KpiCards.Sub>Samba</KpiCards.Sub>
      </KpiCards.Item>
    </KpiCards>
  );
}
