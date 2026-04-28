import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const originItems = [
  { id: 1, origin: "Portal online", visits: 84, pct: "37%" },
  { id: 2, origin: "Indicação", visits: 61, pct: "27%" },
  { id: 3, origin: "Mídias sociais", visits: 41, pct: "18%" },
  { id: 4, origin: "Panfletagem", visits: 25, pct: "11%" },
  { id: 5, origin: "Outros", visits: 16, pct: "7%" },
];

export function VisitsByOriginTable() {
  return (
    <Table>
      <TableCaption className="sr-only">Visits grouped by origin</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-10">#</TableHead>
          <TableHead>Origin</TableHead>
          <TableHead className="text-center">Visits</TableHead>
          <TableHead className="text-center">% Total</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {originItems.map((item) => (
          <TableRow key={item.id}>
            <TableCell className="font-medium text-muted-foreground">
              {item.id}
            </TableCell>
            <TableCell>{item.origin}</TableCell>
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
