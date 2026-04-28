import { Page } from "@/components/page";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { VisitsByOriginTable } from "./_components/visits-by-origin-table";
import { VisitsByRealtorTable } from "./_components/visits-by-realtor-table";
import { VisitsKpiCards } from "./_components/visits-kpi-cards";

export default function VisitsPage() {
  return (
    <Page>
      <Page.Header>
        <Page.Tagline>Fluxo de Visitas</Page.Tagline>
        <Page.Title>Visitas ao Stand</Page.Title>
        <Page.Description>
          Volume, origem e conversão de visitas por imobiliária
        </Page.Description>
      </Page.Header>
      <Page.Content>
        <VisitsKpiCards />
        <div className="grid grid-flow-row grid-cols-1 gap-4 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Visitas por origem</CardTitle>
              <CardDescription>227 total</CardDescription>
            </CardHeader>
            <CardContent>
              <VisitsByOriginTable />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Visitas por imobiliária</CardTitle>
              <CardDescription className="sr-only">
                Tabela com as visitas agrupadas por imobiliária
              </CardDescription>
            </CardHeader>
            <CardContent>
              <VisitsByRealtorTable />
            </CardContent>
          </Card>
        </div>
      </Page.Content>
    </Page>
  );
}
