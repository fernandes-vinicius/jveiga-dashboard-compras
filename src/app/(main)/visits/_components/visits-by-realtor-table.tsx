import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const realtorItems = [
  { id: 1, name: "Imob. Alpha", visits: 148, pct: "29%" },
  { id: 2, name: "Vendas Mais", visits: 130, pct: "25%" },
  { id: 3, name: "Grupo Lar", visits: 110, pct: "21%" },
  { id: 4, name: "Ideal Imóveis", visits: 85, pct: "16%" },
  { id: 5, name: "Casa Nova", visits: 44, pct: "9%" },
];

export function VisitsByRealtorTable() {
  return (
    <Table>
      <TableCaption className="sr-only">
        Visits grouped by real estate agency
      </TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-10">#</TableHead>
          <TableHead>Real estate agency</TableHead>
          <TableHead className="text-center">Visits</TableHead>
          <TableHead className="text-center">% Total</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {realtorItems.map((item) => (
          <TableRow key={item.id}>
            <TableCell className="font-medium text-muted-foreground">
              {item.id}
            </TableCell>
            <TableCell>{item.name}</TableCell>
            <TableCell className="text-center tabular-nums">
              {item.visits}
            </TableCell>
            <TableCell className="text-center text-muted-foreground tabular-nums">
              {item.pct}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
