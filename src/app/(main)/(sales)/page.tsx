import { Page } from "@/components/page";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { GoalProgressCard } from "./_components/goal-progress-card";
import { InventoryOverviewCard } from "./_components/inventory-overview-card";
import { PKICards } from "./_components/kpi-cards";
import { SalesRankingTable } from "./_components/sales-ranking-table";

export default function HomePage() {
  return (
    <Page>
      <Page.Header>
        <Page.Tagline>Performance Comercial</Page.Tagline>
        <Page.Title>Painel de Vendas</Page.Title>
        <Page.Description>
          Vendas, VGV, ticket médio e estoque — todos os empreendimentos
        </Page.Description>
      </Page.Header>
      <Page.Content>
        <GoalProgressCard />
        <PKICards />
        <div className="grid grid-flow-row grid-cols-1 gap-4 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Vendas por imobiliária</CardTitle>
              <CardDescription className="sr-only">
                Tabela com as vendas por imobiliária
              </CardDescription>
            </CardHeader>
            <CardContent>
              <SalesRankingTable />
            </CardContent>
          </Card>
          <InventoryOverviewCard />
        </div>
      </Page.Content>
    </Page>
  );
}
