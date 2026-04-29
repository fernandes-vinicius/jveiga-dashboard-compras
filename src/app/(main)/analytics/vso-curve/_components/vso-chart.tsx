"use client";

import type { DotProps } from "recharts";
import {
  CartesianGrid,
  Line,
  LineChart,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

type VsoDataPoint = {
  mes: string;
  previsto: number | null;
  realizado: number | null;
};

// VSO acumulado (%) mês a mês desde o lançamento
// Previsto: curva S ideal de 0% → ~100% em 18 meses
// Realizado: acompanha previsto nos primeiros meses, depois desacelera
const data: VsoDataPoint[] = [
  { mes: "Jan/25", previsto: 0, realizado: 0 },
  { mes: "Fev/25", previsto: 4.2, realizado: 3.8 },
  { mes: "Mar/25", previsto: 9.1, realizado: 8.5 },
  { mes: "Abr/25", previsto: 15.4, realizado: 14.2 },
  { mes: "Mai/25", previsto: 22.8, realizado: 20.1 },
  { mes: "Jun/25", previsto: 31.0, realizado: 26.4 },
  { mes: "Jul/25", previsto: 39.5, realizado: 30.7 },
  { mes: "Ago/25", previsto: 47.6, realizado: 32.2 },
  { mes: "Set/25", previsto: 54.9, realizado: 32.8 },
  { mes: "Out/25", previsto: 59.3, realizado: 33.0 },
  { mes: "Nov/25", previsto: 61.8, realizado: null },
  { mes: "Dez/25", previsto: 67.2, realizado: null },
  { mes: "Jan/26", previsto: 74.5, realizado: null },
  { mes: "Fev/26", previsto: 82.1, realizado: null },
  { mes: "Mar/26", previsto: 88.6, realizado: null },
  { mes: "Abr/26", previsto: 93.4, realizado: null },
  { mes: "Mai/26", previsto: 96.8, realizado: null },
  { mes: "Jun/26", previsto: 100.0, realizado: null },
];

// Índice do último mês com realizado
const CURRENT_IDX = data.findLastIndex((d) => d.realizado !== null);
const CURRENT_MES = data[CURRENT_IDX].mes;

function CurrentDot(props: DotProps & { value?: number; index?: number }) {
  const { cx, cy, index } = props;
  if (index !== CURRENT_IDX || cx == null || cy == null) return null;
  return (
    <g>
      <circle
        cx={cx}
        cy={cy}
        r={7}
        fill="#f43f5e"
        stroke="white"
        strokeWidth={2}
      />
      <circle cx={cx} cy={cy} r={13} fill="#f43f5e" fillOpacity={0.18} />
    </g>
  );
}

export function VsoChart() {
  return (
    <Card>
      <CardContent>
        <div className="overflow-x-auto">
          <ResponsiveContainer width="100%" height={400} minWidth={700}>
            <LineChart
              data={data}
              margin={{ top: 16, right: 24, bottom: 8, left: 0 }}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="hsl(var(--border))"
                vertical={false}
              />
              <XAxis
                dataKey="mes"
                tick={{ fontSize: 11, fill: "currentColor" }}
                tickLine={false}
                axisLine={false}
                interval={1}
              />
              <YAxis
                tickFormatter={(v) => `${v}%`}
                tick={{ fontSize: 11, fill: "currentColor" }}
                tickLine={false}
                axisLine={false}
                domain={[0, 100]}
                width={42}
              />
              <Tooltip
                formatter={(value, name) => [
                  typeof value === "number" ? `${value.toFixed(1)}%` : value,
                  name === "previsto" ? "Previsto" : "Realizado",
                ]}
                contentStyle={{
                  fontSize: 12,
                  borderRadius: 8,
                  border: "1px solid hsl(var(--border))",
                  background: "hsl(var(--card))",
                  color: "hsl(var(--foreground))",
                }}
              />
              <ReferenceLine
                x={CURRENT_MES}
                stroke="currentColor"
                strokeDasharray="4 4"
                strokeOpacity={0.5}
                label={{
                  value: "hoje",
                  position: "top",
                  fontSize: 10,
                  fill: "currentColor",
                }}
              />
              <Line
                type="monotone"
                dataKey="previsto"
                stroke="#2563eb"
                strokeWidth={2}
                dot={false}
                connectNulls
              />
              <Line
                type="monotone"
                dataKey="realizado"
                stroke="#d97706"
                strokeWidth={2.5}
                connectNulls
                dot={<CurrentDot />}
                activeDot={{ r: 5, fill: "#d97706" }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>

      <CardFooter>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[0.68rem] text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <span className="inline-block h-0.5 w-5 rounded-full bg-blue-600" />
            Previsto (curva ideal)
          </span>
          <span className="flex items-center gap-1.5">
            <span className="inline-block h-0.5 w-5 rounded-full bg-amber-500" />
            Realizado (atual)
          </span>
          <span className="flex items-center gap-1.5">
            <span className="inline-block size-2 rounded-full bg-rose-500" />
            Posição atual
          </span>
          <span className="ml-auto">Meta H1 2026: spread acumulado ≤ 2pp</span>
        </div>
      </CardFooter>
    </Card>
  );
}
