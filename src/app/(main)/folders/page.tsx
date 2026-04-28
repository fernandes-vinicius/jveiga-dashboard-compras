import { Page } from "@/components/page";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FolderStatusTable } from "./_components/folder-status-table";
import { FoldersByRealtorTable } from "./_components/folders-by-realtor-table";
import { FoldersKpiCards } from "./_components/folders-kpi-cards";

export default function FoldersPage() {
  return (
    <Page>
      <Page.Header>
        <Page.Tagline>Gestão de Pastas</Page.Tagline>
        <Page.Title>Pastas de Venda</Page.Title>
        <Page.Description>
          Situação das pastas, aprovações e distratos por imobiliária
        </Page.Description>
      </Page.Header>
      <Page.Content>
        <FoldersKpiCards />
        <div className="grid grid-flow-row grid-cols-1 gap-4 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Situação das pastas</CardTitle>
              <CardDescription>42 total</CardDescription>
            </CardHeader>
            <CardContent>
              <FolderStatusTable />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Pastas por imobiliária</CardTitle>
              <CardDescription className="sr-only">
                Tabela com as pastas agrupadas por imobiliária
              </CardDescription>
            </CardHeader>
            <CardContent>
              <FoldersByRealtorTable />
            </CardContent>
          </Card>
        </div>
      </Page.Content>
    </Page>
  );
}
