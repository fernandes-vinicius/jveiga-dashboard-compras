import { Page } from "@/components/page";
import { RealtorsCounts } from "./_components/realtors-counts";
import { RealtorsKpiCards } from "./_components/realtors-kpi-cards";
import { RealtorsTable } from "./_components/realtors-table";

export default function RealtorsPage() {
  return (
    <Page>
      <Page.Header>
        <Page.Tagline>Performance Individual</Page.Tagline>
        <Page.Title>Gestão dos Corretores</Page.Title>
        <Page.Description>
          JV vs Parceria · plantão e ativos · visitas, indicações, vendas,
          conversão e retorno por corretor
        </Page.Description>
      </Page.Header>
      <Page.Content>
        <RealtorsCounts />
        <RealtorsKpiCards />
        <RealtorsTable />
      </Page.Content>
    </Page>
  );
}