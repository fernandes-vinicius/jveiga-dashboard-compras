import { BarChart3Icon } from "@/components/icons";
import { Page } from "@/components/page";
import { Badge } from "@/components/ui/badge";
import { WeeklyActionsCard } from "./_components/weekly-actions-card";

export default function WeeklyActionsPage() {
  return (
    <Page>
      <Page.Header className="flex-row items-start justify-between">
        <div className="flex flex-col gap-1.5">
          <Page.Tagline>Planejamento Semanal</Page.Tagline>
          <Page.Title>Ações da Semana</Page.Title>
          <Page.Description>
            Ações planejadas, status de execução e comparativo com semana
            anterior
          </Page.Description>
        </div>
        <Badge variant="outline" className="shrink-0 gap-1.5">
          <BarChart3Icon size={12} />
          Pendente
        </Badge>
      </Page.Header>
      <Page.Content>
        <WeeklyActionsCard />
      </Page.Content>
    </Page>
  );
}
