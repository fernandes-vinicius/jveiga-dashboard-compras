import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type PipelineRow = {
  empreendimento: string;
  precoMedio: string;
  visitasRealizadas: number;
  leadToVisita: number;
  visitaToSale: number;
  valorPipeline: string;
  dataFechamento: string;
  status: "Atrasado" | "No prazo" | "Pendente";
};

const STATUS_CLASSES: Record<PipelineRow["status"], string> = {
  Atrasado: "bg-rose-100 text-rose-700 dark:bg-rose-950/40 dark:text-rose-400",
  "No prazo":
    "bg-emerald-100 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400",
  Pendente:
    "bg-amber-100 text-amber-700 dark:bg-amber-950/40 dark:text-amber-400",
};

const rows: PipelineRow[] = [
  {
    empreendimento: "Samba",
    precoMedio: "R$ 300k",
    visitasRealizadas: 1,
    leadToVisita: 16,
    visitaToSale: 15,
    valorPipeline: "R$ 90k",
    dataFechamento: "11/03/2026",
    status: "Atrasado",
  },
];

export function PipelineTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Empreendimento</TableHead>
          <TableHead className="text-center">Preço Médio</TableHead>
          <TableHead className="text-center">Visitas Real.</TableHead>
          <TableHead className="text-center">L→V (dias)</TableHead>
          <TableHead className="text-center">V→S (dias)</TableHead>
          <TableHead className="text-center">Valor Pipeline</TableHead>
          <TableHead className="text-center">Data Fech.</TableHead>
          <TableHead className="text-center">Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {rows.map((row) => (
          <TableRow key={row.empreendimento}>
            <TableCell className="font-medium">{row.empreendimento}</TableCell>
            <TableCell className="text-center text-muted-foreground">
              {row.precoMedio}
            </TableCell>
            <TableCell className="text-center tabular-nums">
              {row.visitasRealizadas}
            </TableCell>
            <TableCell className="text-center tabular-nums">
              {row.leadToVisita}
            </TableCell>
            <TableCell className="text-center tabular-nums">
              {row.visitaToSale}
            </TableCell>
            <TableCell className="text-center font-medium tabular-nums">
              {row.valorPipeline}
            </TableCell>
            <TableCell className="text-center text-muted-foreground tabular-nums">
              {row.dataFechamento}
            </TableCell>
            <TableCell className="text-center">
              <span
                className={`rounded-full px-2.5 py-0.5 font-semibold text-xs ${STATUS_CLASSES[row.status]}`}
              >
                {row.status}
              </span>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableCaption>
        <span className="text-[0.62rem]">
          Fonte: 06_03_26 SalesStrategy H1 2026 V3 — taxa V→S de 30% aplicada
          (média JV+Parceria) · ticket médio consolidado R$ 300k
        </span>
      </TableCaption>
    </Table>
  );
}
