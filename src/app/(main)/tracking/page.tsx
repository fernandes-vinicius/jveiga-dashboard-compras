import { BarChart3Icon } from "@/components/icons";
import { Page } from "@/components/page";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { TrackingTable } from "./_components/tracking-table";

export default function TrackingPage() {
  return (
    <Page>
      <Page.Header className="flex-row items-start justify-between">
        <div className="flex flex-col gap-1.5">
          <Page.Tagline>Acompanhamento Semanal</Page.Tagline>
          <Page.Title>Tracking Diário</Page.Title>
          <Page.Description>
            Leads, visitas, pastas, vendas e corretores — dia a dia ·{" "}
            <strong>atual / semana anterior</strong>
          </Page.Description>
        </div>
        <Badge variant="outline" className="shrink-0 gap-1.5">
          <BarChart3Icon size={12} />
          Visão geral
        </Badge>
      </Page.Header>
      <Page.Content>
        <Card className="overflow-hidden p-0">
          <TrackingTable />
        </Card>
      </Page.Content>
    </Page>
  );
}
