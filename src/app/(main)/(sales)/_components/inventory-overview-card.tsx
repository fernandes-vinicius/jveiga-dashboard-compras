import { CountUp } from "@/components/count-up";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Field, FieldLabel } from "@/components/ui/field";
import { Progress } from "@/components/ui/progress";
import { ModuleSelect } from "./module-select";

const cards = [
  { id: 1, title: "Total", value: 1_200 },
  { id: 2, title: "Disponível", value: 180 },
  { id: 3, title: "Vendido", value: 1_020 },
  { id: 4, title: "VSO", value: 85.0, suffix: "%" },
];

export function InventoryOverviewCard() {
  return (
    <Card>
      <CardHeader className="grid-cols-1 gap-3 sm:grid-cols-[1fr_auto]">
        <CardTitle>Estoque</CardTitle>
        <CardAction className="col-start-1 row-span-1 row-start-2 justify-self-stretch sm:col-start-2 sm:row-span-2 sm:row-start-1 sm:justify-self-end">
          <ModuleSelect />
        </CardAction>
      </CardHeader>

      <CardContent>
        <div className="grid grid-flow-row grid-cols-2 gap-1.5 xl:grid-cols-4">
          {cards.map((card) => (
            <Card key={card.id} size="sm">
              <CardHeader>
                <CardDescription>{card.title}</CardDescription>
                <CardTitle>
                  <CountUp
                    end={card.value}
                    duration={1.5}
                    separator="."
                    suffix={card.suffix}
                    decimals={card.suffix === "%" ? 1 : 0}
                  />
                </CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>
      </CardContent>

      <CardFooter className="flex-col items-start gap-4">
        <p className="font-medium tracking-tight">VSO — Vendas sobre Oferta</p>
        <Field className="w-full">
          <FieldLabel htmlFor="progress-sales-off">
            <span>80.7% vendido</span>
            <span className="ml-auto">5.368 de 6.650 un.</span>
          </FieldLabel>
          <Progress value={66} id="progress-sales-off" />
        </Field>
      </CardFooter>
    </Card>
  );
}
