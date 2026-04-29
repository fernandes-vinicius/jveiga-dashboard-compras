"use client";

import type { ReactElement, SVGProps } from "react";
import type { SankeyLinkProps, SankeyNodeProps } from "recharts";
import { Sankey } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { type ChartConfig, ChartContainer } from "@/components/ui/chart";

const NODE_COLORS: Record<string, string> = {
  Inbound: "#2563eb",
  Outbound: "#8b5cf6",
  "OB Indicação": "#14b8a6",
  Visitou: "#f59e0b",
  "Não visitou": "#94a3b8",
  Pastas: "#f59e0b",
  "Sem pasta": "#94a3b8",
  Vendas: "#10b981",
  "Não fechou": "#94a3b8",
};

const LOSS_NODES = new Set(["Não visitou", "Sem pasta", "Não fechou"]);
const LAST_COL = new Set(["Vendas", "Não fechou"]);

// Fluxo: Origens → Visitas → Pastas → Vendas
// Inbound (480): 96 visitaram, 384 não visitaram
// Outbound (120): 36 visitaram, 84 não visitaram
// OB Indicação (46): entram diretamente na visita
// Visitou (178): 60 abriram pasta, 118 não abriram
// Pastas (60): 3 vendas, 57 não fecharam
const sankeyData = {
  nodes: [
    { name: "Inbound" },
    { name: "Outbound" },
    { name: "OB Indicação" },
    { name: "Visitou" },
    { name: "Não visitou" },
    { name: "Pastas" },
    { name: "Sem pasta" },
    { name: "Vendas" },
    { name: "Não fechou" },
  ],
  links: [
    { source: 0, target: 3, value: 96 },
    { source: 0, target: 4, value: 384 },
    { source: 1, target: 3, value: 36 },
    { source: 1, target: 4, value: 84 },
    { source: 2, target: 3, value: 46 },
    { source: 3, target: 5, value: 60 },
    { source: 3, target: 6, value: 118 },
    { source: 5, target: 7, value: 3 },
    { source: 5, target: 8, value: 57 },
  ],
};

function SankeyNodeRenderer({
  x,
  y,
  width,
  height,
  index,
  payload,
}: SankeyNodeProps) {
  const name = payload.name;
  const value = payload.value as number;
  const color = NODE_COLORS[name] ?? "#94a3b8";
  const isLast = LAST_COL.has(name);
  const isLoss = LOSS_NODES.has(name);
  const textX = isLast ? x + width + 8 : x - 8;
  const anchor = isLast ? "start" : "end";

  return (
    <g key={`node-${index}`}>
      <rect x={x} y={y} width={width} height={height} fill={color} rx={2} />
      <text
        x={textX}
        y={y + height / 2 - (isLoss || height < 20 ? 0 : 7)}
        textAnchor={anchor}
        dominantBaseline="central"
        fontSize={10}
        fontWeight={600}
        className="fill-foreground"
      >
        {name}
      </text>
      {!isLoss && height >= 20 && (
        <text
          x={textX}
          y={y + height / 2 + 7}
          textAnchor={anchor}
          dominantBaseline="central"
          fontSize={10}
          className="fill-muted-foreground"
        >
          {value}
        </text>
      )}
    </g>
  );
}

function SankeyLinkRenderer({
  sourceX,
  targetX,
  sourceY,
  targetY,
  sourceControlX,
  targetControlX,
  linkWidth,
  index,
  payload,
}: SankeyLinkProps): ReactElement<SVGProps<SVGPathElement>> {
  const sourceName = payload.source.name;
  const targetName = payload.target.name;
  const isLoss = LOSS_NODES.has(targetName);
  const fill = isLoss ? "#94a3b8" : (NODE_COLORS[sourceName] ?? "#94a3b8");
  const half = linkWidth / 2;

  return (
    <path
      key={`link-${index}`}
      d={`M${sourceX},${sourceY - half} C${sourceControlX},${sourceY - half} ${targetControlX},${targetY - half} ${targetX},${targetY - half} L${targetX},${targetY + half} C${targetControlX},${targetY + half} ${sourceControlX},${sourceY + half} ${sourceX},${sourceY + half} Z`}
      fill={fill}
      stroke="none"
      opacity={0.4}
    />
  );
}

const chartConfig = {} satisfies ChartConfig;

const LEGEND = [
  { color: "#2563eb", label: "Inbound" },
  { color: "#8b5cf6", label: "Outbound" },
  { color: "#14b8a6", label: "OB Indicação" },
  { color: "#94a3b8", label: "Perdas" },
];

export function SankeyFlow() {
  return (
    <Card className="gap-0">
      <CardHeader>
        <CardTitle>🌊 Fluxo Sankey</CardTitle>
        <CardDescription>
          Diagrama completo: origem → lead → visita → pasta → venda + perdas
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <ChartContainer
            config={chartConfig}
            className="h-95 w-full min-w-150 overflow-visible"
          >
            <Sankey
              data={sankeyData}
              nodePadding={20}
              nodeWidth={14}
              margin={{ top: 20, right: 110, bottom: 20, left: 90 }}
              node={SankeyNodeRenderer}
              link={SankeyLinkRenderer}
            />
          </ChartContainer>
        </div>
      </CardContent>
      <CardFooter>
        <div className="mt-3 flex flex-wrap gap-4">
          {LEGEND.map(({ color, label }) => (
            <div
              key={label}
              className="flex items-center gap-1.5 text-muted-foreground text-xs"
            >
              <span
                className="inline-block size-2.5 rounded-full"
                style={{ background: color }}
              />
              {label}
            </div>
          ))}
        </div>
      </CardFooter>
    </Card>
  );
}
