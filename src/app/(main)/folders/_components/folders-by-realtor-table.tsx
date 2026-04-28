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

type FolderStatus = "ok" | "pending" | "attention";

const realEstateItems: {
  id: number;
  name: string;
  folders: number;
  status: FolderStatus;
}[] = [
  { id: 1, name: "Imob. Alpha", folders: 12, status: "ok" },
  { id: 2, name: "Vendas Mais", folders: 9, status: "ok" },
  { id: 3, name: "Grupo Lar", folders: 8, status: "pending" },
  { id: 4, name: "Ideal Imóveis", folders: 7, status: "ok" },
  { id: 5, name: "Casa Nova", folders: 6, status: "attention" },
];

const statusConfig: Record<FolderStatus, { label: string; className: string }> =
  {
    ok: {
      label: "OK",
      className: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
    },
    pending: {
      label: "Pend.",
      className: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
    },
    attention: {
      label: "Atenção",
      className: "bg-destructive/10 text-destructive",
    },
  };

export function FoldersByRealtorTable() {
  return (
    <Table>
      <TableCaption className="sr-only">
        Tabela com as pastas agrupadas por imobiliária
      </TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-10">#</TableHead>
          <TableHead>Imobiliária</TableHead>
          <TableHead className="text-center">Pastas</TableHead>
          <TableHead className="text-center">Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {realEstateItems.map((item) => {
          const status = statusConfig[item.status];
          return (
            <TableRow key={item.id}>
              <TableCell className="font-medium text-muted-foreground">
                {item.id}
              </TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell className="text-center tabular-nums">
                {item.folders}
              </TableCell>
              <TableCell className="text-center">
                <span
                  className={cn(
                    "inline-flex items-center justify-center rounded-md px-2 py-0.5 font-semibold text-xs",
                    status.className,
                  )}
                >
                  {status.label}
                </span>
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}
