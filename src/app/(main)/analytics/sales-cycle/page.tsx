import { Page } from "@/components/page";
import { CvWorkflow } from "./_components/cv-workflow";
import { CycleFunnelDays } from "./_components/cycle-funnel-days";
import { CycleKpiCards } from "./_components/cycle-kpi-cards";
import { PipelineProjection } from "./_components/pipeline-projection";

export default function SalesCyclePage() {
  return (
    <Page>
      <Page.Header>
        <Page.Tagline>Velocidade Comercial</Page.Tagline>
        <Page.Title>Ciclo de Venda</Page.Title>
        <Page.Description>
          Tempo entre cada etapa do funil · workflow da pasta no CV · projeção
          de fechamento do pipeline
        </Page.Description>
      </Page.Header>
      <Page.Content>
        <CycleKpiCards />
        <CycleFunnelDays />
        <CvWorkflow />
        <PipelineProjection />
      </Page.Content>
    </Page>
  );
}
