import { Card, CardContent } from "@/components/ui/card";
import { PipelineSummaryCards } from "./pipeline-summary-cards";
import { PipelineTable } from "./pipeline-table";

export function PipelineProjection() {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
        <span className="font-bold text-lg">📈 Projeção do Pipeline</span>
        <span className="text-muted-foreground text-xs">
          Baseada no ciclo atual L→V (16d) + V→S (15d)
        </span>
      </div>
      <PipelineSummaryCards />
      <Card>
        <CardContent className="pt-4">
          <p className="mb-3 font-medium text-sm">Detalhe por empreendimento</p>
          <PipelineTable />
        </CardContent>
      </Card>
    </div>
  );
}
