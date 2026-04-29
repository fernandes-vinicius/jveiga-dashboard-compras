import { KpiCards } from "@/components/kpi-cards";
import { cn } from "@/lib/utils";
import type { kpis, TabKey } from "./funnel-overview";

export function KpiStrip({ data }: { data: (typeof kpis)[TabKey] }) {
  const { leads, visitas, pastas, vendas } = data;
  const hasLeads = leads !== null;
  const visitaSub = hasLeads
    ? `${Math.round((visitas / (leads as number)) * 100)}% dos leads`
    : "100% do topo";
  const pastaSub = `${Math.round((pastas / visitas) * 100)}% das visitas`;
  const vendaSub = `${((vendas / (pastas || 1)) * 100).toFixed(1).replace(".", ",")}% das pastas`;

  return (
    <KpiCards
      className={cn(hasLeads ? "grid-cols-2 md:grid-cols-4" : "grid-cols-3")}
    >
      {hasLeads && (
        <KpiCards.Item colorClassName="text-blue-600 dark:text-blue-400">
          <KpiCards.Value end={leads as number} />
          <KpiCards.Label>Leads</KpiCards.Label>
          <KpiCards.Sub>100% do topo</KpiCards.Sub>
        </KpiCards.Item>
      )}
      <KpiCards.Item colorClassName="text-blue-500 dark:text-blue-300">
        <KpiCards.Value end={visitas} />
        <KpiCards.Label>Visitas realizadas</KpiCards.Label>
        <KpiCards.Sub>{visitaSub}</KpiCards.Sub>
      </KpiCards.Item>
      <KpiCards.Item
        colorClassName="text-indigo-600 dark:text-indigo-400"
        className="bg-indigo-50/50 dark:bg-indigo-950/20"
      >
        <KpiCards.Value end={pastas} />
        <KpiCards.Label>Pastas abertas</KpiCards.Label>
        <KpiCards.Sub>{pastaSub}</KpiCards.Sub>
      </KpiCards.Item>
      <KpiCards.Item
        colorClassName="text-emerald-600 dark:text-emerald-400"
        className="bg-emerald-50/60 dark:bg-emerald-950/20"
      >
        <KpiCards.Value end={vendas} />
        <KpiCards.Label>Vendas fechadas</KpiCards.Label>
        <KpiCards.Sub>{vendaSub}</KpiCards.Sub>
      </KpiCards.Item>
    </KpiCards>
  );
}
