import { Bar, BarChart, Cell, LabelList, XAxis, YAxis } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { type ChartConfig, ChartContainer } from "@/components/ui/chart";

type Stage = { stage: string; value: number };

type OriginConfig = {
  title: string;
  colors: readonly string[];
  note?: string;
  stages: Stage[];
};

const ORIGIN_CONFIGS: Record<
  "inbound" | "outbound" | "indicacao",
  OriginConfig
> = {
  inbound: {
    title: "Inbound",
    colors: ["#1e40af", "#2563eb", "#4f46e5", "#059669"],
    stages: [
      { stage: "Leads", value: 480 },
      { stage: "Visitas", value: 96 },
      { stage: "Pastas", value: 36 },
      { stage: "Vendas", value: 2 },
    ],
  },
  outbound: {
    title: "Outbound",
    colors: ["#4c1d95", "#7c3aed", "#8b5cf6", "#059669"],
    stages: [
      { stage: "Leads", value: 120 },
      { stage: "Visitas", value: 36 },
      { stage: "Pastas", value: 14 },
      { stage: "Vendas", value: 1 },
    ],
  },
  indicacao: {
    title: "OB Indicação",
    note: "Leads OB Indicação não passam pelo topo — entram direto na visita",
    colors: ["#0f766e", "#0d9488", "#059669"],
    stages: [
      { stage: "Visitas", value: 46 },
      { stage: "Pastas", value: 10 },
      { stage: "Vendas", value: 0 },
    ],
  },
};

const chartConfig = { value: { label: "Quantidade" } } satisfies ChartConfig;

export function OriginFunnelCard({
  origin,
}: {
  origin: keyof typeof ORIGIN_CONFIGS;
}) {
  const { title, stages, colors, note } = ORIGIN_CONFIGS[origin];
  const maxVal = stages[0].value || 1;

  return (
    <Card>
      <CardHeader className="pb-0">
        <CardTitle className="text-sm">{title}</CardTitle>
        {note && (
          <p className="text-[0.68rem] text-muted-foreground italic">{note}</p>
        )}
      </CardHeader>
      <CardContent className="pt-2 pb-3">
        <ChartContainer
          config={chartConfig}
          className="h-[150px] w-full"
          initialDimension={{ width: 300, height: 150 }}
        >
          <BarChart
            layout="vertical"
            data={stages}
            margin={{ top: 4, right: 40, bottom: 4, left: 0 }}
          >
            <XAxis type="number" domain={[0, maxVal]} hide />
            <YAxis
              type="category"
              dataKey="stage"
              axisLine={false}
              tickLine={false}
              width={52}
              tick={{ fontSize: 11 }}
            />
            <Bar dataKey="value" radius={[0, 4, 4, 0]} maxBarSize={22}>
              <LabelList
                dataKey="value"
                position="right"
                style={{ fontSize: 11, fontWeight: 600 }}
              />
              {stages.map((s, i) => (
                <Cell
                  key={s.stage}
                  fill={colors[i] ?? colors[colors.length - 1]}
                />
              ))}
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
