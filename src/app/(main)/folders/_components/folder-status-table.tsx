import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";

const statusItems = [
  { id: 1, situation: "LPJR — Aprovação", qty: 8, color: "amber" },
  { id: 2, situation: "Habilitação", qty: 7, color: "blue" },
  { id: 3, situation: "Aprovada", qty: 6, color: "green" },
  { id: 4, situation: "Distratada", qty: 5, color: "red" },
  { id: 5, situation: "Análise Correspondente", qty: 4, color: "amber" },
  { id: 6, situation: "Gerada", qty: 4, color: "gray" },
  { id: 7, situation: "Distrato", qty: 3, color: "red" },
  { id: 8, situation: "Pagamento Pendente", qty: 3, color: "amber" },
  { id: 9, situation: "Recusada", qty: 2, color: "red" },
];

const colorStyles: Record<string, string> = {
  amber: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
  blue: "bg-primary/10 text-primary",
  green: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
  red: "bg-destructive/10 text-destructive",
  gray: "bg-muted text-muted-foreground",
};

export function FolderStatusTable() {
  return (
    <Table>
      <TableCaption className="sr-only">
        Tabela com a situação das pastas de venda
      </TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-10">#</TableHead>
          <TableHead>Situação</TableHead>
          <TableHead className="text-center">Qtd</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {statusItems.map((item) => (
          <TableRow key={item.id}>
            <TableCell className="font-medium text-muted-foreground">
              {item.id}
            </TableCell>
            <TableCell>{item.situation}</TableCell>
            <TableCell className="text-center">
              <span
                className={cn(
                  "inline-flex min-w-8 items-center justify-center rounded-md px-2 py-0.5 font-semibold text-xs tabular-nums",
                  colorStyles[item.color],
                )}
              >
                {item.qty}
              </span>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
