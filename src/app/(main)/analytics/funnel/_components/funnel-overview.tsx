"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { KpiStrip } from "./kpi-strip";
import { OriginFunnelCard } from "./origin-funnel-card";

export type TabKey = "consolidado" | "inbound" | "outbound" | "indicacao";

export const kpis: Record<
  TabKey,
  {
    leads: number | null;
    visitas: number;
    pastas: number;
    vendas: number;
    convRate: string;
  }
> = {
  consolidado: {
    leads: 600,
    visitas: 178,
    pastas: 60,
    vendas: 3,
    convRate: "0,50%",
  },
  inbound: {
    leads: 480,
    visitas: 96,
    pastas: 36,
    vendas: 2,
    convRate: "0,42%",
  },
  outbound: {
    leads: 120,
    visitas: 36,
    pastas: 14,
    vendas: 1,
    convRate: "0,83%",
  },
  indicacao: {
    leads: null,
    visitas: 46,
    pastas: 10,
    vendas: 0,
    convRate: "0,00%",
  },
};

export function FunnelOverview() {
  const [tab, setTab] = useState<TabKey>("consolidado");
  const data = kpis[tab];

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
        <span className="font-bold text-lg">Funis por Origem</span>
        <span className="text-muted-foreground text-xs">
          Compare a performance de Inbound · Outbound · OB Indicação
        </span>
      </div>

      <Tabs value={tab} onValueChange={(v) => setTab(v as TabKey)}>
        <div className="w-full overflow-x-auto">
          <TabsList>
            <TabsTrigger value="consolidado">Consolidado</TabsTrigger>
            <TabsTrigger value="inbound">Inbound</TabsTrigger>
            <TabsTrigger value="outbound">Outbound</TabsTrigger>
            <TabsTrigger value="indicacao">OB Indicação</TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="consolidado">
          <KpiStrip data={data} />
          <div className="grid grid-cols-1 gap-0 lg:grid-cols-3">
            <OriginFunnelCard origin="inbound" />
            <OriginFunnelCard origin="outbound" />
            <OriginFunnelCard origin="indicacao" />
          </div>
        </TabsContent>
        <TabsContent value="inbound">
          <KpiStrip data={data} />
          <OriginFunnelCard origin="inbound" />
        </TabsContent>
        <TabsContent value="outbound">
          <KpiStrip data={data} />
          <OriginFunnelCard origin="outbound" />
        </TabsContent>
        <TabsContent value="indicacao">
          <KpiStrip data={data} />
          <OriginFunnelCard origin="indicacao" />
        </TabsContent>
      </Tabs>

      <div className="flex items-center justify-center gap-6 py-8">
        <div className="h-0.5 w-16 bg-linear-to-r from-primary to-background" />
        <div className="space-y-1 text-center">
          <p className="font-bold text-[clamp(1.6rem,3vw,2.2rem)] text-primary tracking-tight">
            {data.convRate}
          </p>
          <p className="font-semibold text-muted-foreground text-xs uppercase">
            Conversão Lead → Venda
          </p>
        </div>
        <div className="h-0.5 w-16 bg-linear-to-r from-background to-primary" />
      </div>
    </div>
  );
}
