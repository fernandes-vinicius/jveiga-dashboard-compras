import { Page } from "@/components/page";
import { VsoChart } from "./_components/vso-chart";
import { VsoKpiCards } from "./_components/vso-kpi-cards";

export default function VsoCurvePage() {
  return (
    <Page>
      <Page.Header>
        <Page.Tagline>Velocidade de Vendas sobre Oferta</Page.Tagline>
        <Page.Title>Curva VSO — Previsto vs Realizado</Page.Title>
        <Page.Description>
          Acompanhamento mês a mês desde o lançamento · spread permite
          identificar atraso ou aceleração
        </Page.Description>
      </Page.Header>
      <Page.Content>
        <VsoKpiCards />
        <VsoChart />
      </Page.Content>
    </Page>
  );
}
