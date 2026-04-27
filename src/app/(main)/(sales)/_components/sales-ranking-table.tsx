import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { formatCurrency } from "@/lib/formatter";

const salesByRealEstateMock = [
  {
    id: 1,
    rank: 1,
    realEstate: "Imob. Alpha",
    sales: 312,
    vgv: 1400000,
    vgvFormatted: "R$ 1,4 mi",
  },
  {
    id: 2,
    rank: 2,
    realEstate: "Vendas Mais",
    sales: 287,
    vgv: 1200000,
    vgvFormatted: "R$ 1,2 mi",
  },
  {
    id: 3,
    rank: 3,
    realEstate: "Grupo Lar",
    sales: 251,
    vgv: 980000,
    vgvFormatted: "R$ 980 mil",
  },
  {
    id: 4,
    rank: 4,
    realEstate: "Ideal Imóveis",
    sales: 198,
    vgv: 720000,
    vgvFormatted: "R$ 720 mil",
  },
  {
    id: 5,
    rank: 5,
    realEstate: "Casa Nova",
    sales: 143,
    vgv: 510000,
    vgvFormatted: "R$ 510 mil",
  },
];

export function SalesRankingTable() {
  return (
    <Table>
      <TableCaption className="sr-only">
        Uma tabela de ranking de vendas por imobiliária
      </TableCaption>

      <TableHeader>
        <TableRow>
          <TableHead className="w-25">#</TableHead>
          <TableHead>Imobiliária</TableHead>
          <TableHead>Vendas</TableHead>
          <TableHead className="text-right">VGV</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {salesByRealEstateMock.map((item) => (
          <TableRow key={item.id}>
            <TableCell className="font-medium">{item.rank}</TableCell>
            <TableCell>{item.realEstate}</TableCell>
            <TableCell>{item.sales}</TableCell>
            <TableCell className="text-right">
              {formatCurrency(item.vgv)}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
