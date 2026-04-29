import { Page } from "@/components/page";
import { FunnelOverview } from "./_components/funnel-overview";
import { LossAnalysis } from "./_components/loss-analysis";
import { SankeyFlow } from "./_components/sankey-flow";

export default function FunnelPage() {
  return (
    <Page>
      <Page.Header className="border-b pb-4">
        <Page.Title>Funil de Conversão</Page.Title>
        <Page.Description>
          Funis por origem · fluxo geral · análise de perdas
        </Page.Description>
      </Page.Header>
      <Page.Content>
        <FunnelOverview />
        <SankeyFlow />
        <LossAnalysis />
      </Page.Content>
    </Page>
  );
}
