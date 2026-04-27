import { CountUp } from "@/components/count-up";
import { Card } from "@/components/ui/card";
import { KpiCard } from "./kpi-card";

const cards = [
  {
    id: "1",
    title: "Vendas no período",
    value: 9,
    prefix: undefined,
    suffix: undefined,
    sub: "+12% vs período anterior",
  },
  {
    id: "2",
    title: "VGV Real (período)",
    value: 3.2,
    prefix: "R$ ",
    suffix: "mi",
    sub: "Valor total contratado",
  },
  {
    id: "3",
    title: "VGV Real Médio",
    value: 355,
    prefix: "R$ ",
    suffix: "mil",
    sub: "Ticket médio",
  },
  {
    id: "4",
    title: "Preço por m²",
    value: 4_820,
    prefix: "R$ ",
    suffix: undefined,
    sub: "Médio no período",
  },
  {
    id: "5",
    title: "Pró-Soluto (R$)",
    value: 890,
    prefix: "R$ ",
    suffix: "mil",
    sub: "Financiado pela JDV",
  },
  {
    id: "6",
    title: "Pró-Soluto (%)",
    value: 27.8,
    prefix: undefined,
    suffix: "%",
    sub: "do VGV Real total",
  },
];

export function PKICards() {
  return (
    <Card className="grid grid-cols-2 gap-0 divide-x divide-border overflow-hidden p-0 lg:grid-cols-3 xl:grid-cols-6">
      {cards.map((card) => (
        <KpiCard key={card.id}>
          <KpiCard.Value>
            <CountUp
              end={card.value ?? 0}
              prefix={card.prefix}
              suffix={card.suffix}
              // decimals={1}
            />
          </KpiCard.Value>
          <KpiCard.Title>{card.title}</KpiCard.Title>
          <KpiCard.Sub>{card.sub}</KpiCard.Sub>
        </KpiCard>
      ))}
    </Card>
  );
}
