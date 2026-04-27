import { CountUp } from "@/components/count-up";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Field, FieldLabel } from "@/components/ui/field";
import { Progress } from "@/components/ui/progress";

export function GoalProgressCard() {
  return (
    <Card size="sm">
      <CardHeader className="grid-cols-1 gap-2 sm:grid-cols-[1fr_auto] sm:gap-3">
        <CardTitle className="text-[clamp(1rem,2.2vw,1.125rem)]">
          Objetivo do período — 20 vendas
        </CardTitle>
        <CardDescription className="text-xs sm:text-sm">
          <span className="inline-flex flex-wrap items-center gap-1.5">
            <span className="size-1.5 shrink-0 animate-pulse rounded-full bg-primary" />
            <span className="whitespace-nowrap">Meta via Google Sheets</span>
            <span className="xs:inline hidden">—</span>
            <span className="xs:inline hidden">atualizada automaticamente</span>
          </span>
        </CardDescription>
        <CardAction className="col-start-1 row-span-1 row-start-3 mt-1 w-full sm:col-start-2 sm:row-span-2 sm:row-start-1 sm:mt-0 sm:w-auto sm:justify-self-end">
          <div className="flex flex-wrap items-center justify-start gap-1.5 sm:justify-end">
            <span className="text-muted-foreground text-sm sm:text-base">
              <span className="font-semibold text-[clamp(1.75rem,5vw,2.5rem)] text-foreground tracking-tighter">
                <CountUp end={9} />
              </span>{" "}
              <span className="text-base">/</span>{" "}
              <span className="font-medium text-lg">20</span>{" "}
              <span className="text-xs">vendas</span>
            </span>
            <Badge variant="destructive" className="text-xs">
              45%
            </Badge>
          </div>
        </CardAction>
      </CardHeader>

      <CardContent>
        <Field className="w-full">
          <FieldLabel htmlFor="progress-goal">
            <span>45% concluído</span>
            <span className="ml-auto">Faltam 11 vendas</span>
          </FieldLabel>
          <Progress value={66} id="progress-goal" />
        </Field>
      </CardContent>
    </Card>
  );
}
