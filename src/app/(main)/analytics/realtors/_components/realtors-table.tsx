"use client";

import { useMemo, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { getNivel, NIVEL_EMOJI, REALTORS, type Realtor } from "./realtors-data";

type FilterKey = "todos" | "jv" | "parc" | "ativos" | "treinados" | "acoes";
type SortKey =
  | "pontos"
  | "vendas"
  | "conv"
  | "visitas"
  | "indic"
  | "presencas"
  | "treinos"
  | "acoes"
  | "retorno";

const NIVEL_CLASSES = {
  Lenda: "bg-amber-100 text-amber-700 dark:bg-amber-950/40 dark:text-amber-300",
  General:
    "bg-violet-100 text-violet-700 dark:bg-violet-950/40 dark:text-violet-300",
  Capitão: "bg-blue-100 text-blue-700 dark:bg-blue-950/40 dark:text-blue-300",
  Soldado:
    "bg-emerald-100 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300",
};

const TIPO_CLASSES = {
  JV: "bg-blue-100 text-blue-700 dark:bg-blue-950/40 dark:text-blue-300",
  Parceria:
    "bg-violet-100 text-violet-700 dark:bg-violet-950/40 dark:text-violet-300",
};

function convClass(pct: number) {
  if (pct === 0) return "bg-rose-400";
  if (pct < 25) return "bg-amber-400";
  return "bg-emerald-500";
}

function sortRealtors(list: Realtor[], key: SortKey): Realtor[] {
  const sorters: Record<SortKey, (a: Realtor, b: Realtor) => number> = {
    pontos: (a, b) => b.pts - a.pts,
    vendas: (a, b) => b.vendas - a.vendas || b.pts - a.pts,
    conv: (a, b) => b.convPct - a.convPct,
    visitas: (a, b) => b.visitas - a.visitas,
    indic: (a, b) => b.indicacoes - a.indicacoes,
    presencas: (a, b) => b.plantao - a.plantao,
    treinos: (a, b) => b.treinos - a.treinos,
    acoes: (a, b) => b.acoes - a.acoes,
    retorno: (a, b) => b.retornoK - a.retornoK,
  };
  return [...list].sort(sorters[key]);
}

function filterRealtors(list: Realtor[], key: FilterKey): Realtor[] {
  switch (key) {
    case "jv":
      return list.filter((r) => r.tipo === "JV");
    case "parc":
      return list.filter((r) => r.tipo === "Parceria");
    case "ativos":
      return list.filter((r) => r.vendas > 0);
    case "treinados":
      return list.filter((r) => r.treinos > 0);
    case "acoes":
      return list.filter((r) => r.acoes > 0);
    default:
      return list;
  }
}

export function RealtorsTable() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<FilterKey>("todos");
  const [sort, setSort] = useState<SortKey>("pontos");

  const rows = useMemo(() => {
    let list = filterRealtors(REALTORS, filter);
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter((r) => r.nome.toLowerCase().includes(q));
    }
    return sortRealtors(list, sort);
  }, [search, filter, sort]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>📊 Performance Individual por Corretor</CardTitle>
      </CardHeader>
      <CardContent>
        {/* Controls */}
        <div className="flex flex-wrap gap-3 border-b pb-4">
          <div className="relative min-w-[220px] flex-1">
            <span className="-translate-y-1/2 absolute top-1/2 left-3 text-muted-foreground text-sm">
              🔍
            </span>
            <Input
              placeholder="Buscar corretor por nome..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-8"
            />
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-muted-foreground text-xs">Filtrar:</span>
            <Select
              value={filter}
              onValueChange={(v) => setFilter(v as FilterKey)}
            >
              <SelectTrigger className="h-9 w-[180px] text-xs">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="todos">Todos os corretores</SelectItem>
                <SelectItem value="jv">Apenas JV</SelectItem>
                <SelectItem value="parc">Apenas Parcerias</SelectItem>
                <SelectItem value="ativos">
                  Apenas Ativos (com vendas)
                </SelectItem>
                <SelectItem value="treinados">
                  Participaram de treinos
                </SelectItem>
                <SelectItem value="acoes">Participaram de ações</SelectItem>
              </SelectContent>
            </Select>
            <span className="text-muted-foreground text-xs">Ordenar por:</span>
            <Select value={sort} onValueChange={(v) => setSort(v as SortKey)}>
              <SelectTrigger className="h-9 w-[180px] text-xs">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="pontos">Pontos (ranking)</SelectItem>
                <SelectItem value="vendas">Vendas (maior)</SelectItem>
                <SelectItem value="conv">Taxa de Conversão</SelectItem>
                <SelectItem value="visitas">Visitas</SelectItem>
                <SelectItem value="indic">Indicações</SelectItem>
                <SelectItem value="presencas">Plantões</SelectItem>
                <SelectItem value="treinos">Treinamentos</SelectItem>
                <SelectItem value="acoes">Ações de campo</SelectItem>
                <SelectItem value="retorno">Retorno R$</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Points legend */}
        <div className="flex flex-wrap gap-x-4 gap-y-1 border-b bg-muted/30 py-2.5 text-[0.6rem] text-muted-foreground">
          <strong className="text-foreground uppercase tracking-wider">
            Sistema de Pontos:
          </strong>
          <span>
            Plantão: <strong>3pt</strong> + bônus 10 (≥8)
          </span>
          <span>
            Treino: <strong>5pt</strong>
          </span>
          <span>
            Ação: <strong>5pt</strong> + bônus 10 (≥3)
          </span>
          <span>
            Indic.: <strong>3pt</strong>
          </span>
          <span>
            Visita: <strong>5pt</strong>
          </span>
          <span>
            Pasta: <strong>10pt</strong> · Aprov.: <strong>20pt</strong>
          </span>
          <span>
            Venda: <strong>30pt</strong>
          </span>
          <span className="ml-auto">
            Níveis: 🟢 Soldado &lt;50 · 🔵 Capitão ≥50 · 🟣 General ≥100 · 🟡
            Lenda ≥150
          </span>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-8 text-center">#</TableHead>
                <TableHead>Corretor</TableHead>
                <TableHead className="text-center">Tipo</TableHead>
                <TableHead className="text-center" title="Plantões no mês">
                  🪑 Plant.
                </TableHead>
                <TableHead className="text-center" title="Treinamentos">
                  🏋️ Treinos
                </TableHead>
                <TableHead className="text-center" title="Ações de campo">
                  🎪 Ações
                </TableHead>
                <TableHead className="text-center">Visitas</TableHead>
                <TableHead className="text-center">Indic.</TableHead>
                <TableHead className="text-center">Pastas</TableHead>
                <TableHead className="text-center">Vendas</TableHead>
                <TableHead className="text-center">Conv. V→S</TableHead>
                <TableHead className="text-center">Retorno</TableHead>
                <TableHead className="text-center">Pontos</TableHead>
                <TableHead className="text-center">Nível</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {rows.map((r, i) => {
                const nivel = getNivel(r.pts);
                const plantaoBônus = r.plantao >= 8;
                const acoesBônus = r.acoes >= 3;
                return (
                  <TableRow key={r.nome}>
                    <TableCell className="text-center text-muted-foreground text-xs tabular-nums">
                      {i + 1}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <div
                          className={cn(
                            "flex size-7 shrink-0 items-center justify-center rounded-full font-bold text-[0.6rem] text-white",
                            r.tipo === "JV" ? "bg-blue-600" : "bg-violet-600",
                          )}
                        >
                          {r.initials}
                        </div>
                        <span className="text-sm">{r.nome}</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-center">
                      <span
                        className={cn(
                          "rounded-full px-2 py-0.5 font-semibold text-[0.65rem]",
                          TIPO_CLASSES[r.tipo],
                        )}
                      >
                        {r.tipo}
                      </span>
                    </TableCell>
                    <TableCell className="text-center text-xs tabular-nums">
                      {r.plantao}
                      {plantaoBônus && <span className="ml-0.5">⭐</span>}
                    </TableCell>
                    <TableCell
                      className={cn(
                        "text-center text-xs tabular-nums",
                        r.treinos === 0 && "text-muted-foreground/50",
                      )}
                    >
                      {r.treinos}
                    </TableCell>
                    <TableCell className="text-center text-xs tabular-nums">
                      {r.acoes}
                      {acoesBônus && <span className="ml-0.5">⭐</span>}
                    </TableCell>
                    <TableCell className="text-center text-xs tabular-nums">
                      {r.visitas}
                    </TableCell>
                    <TableCell className="text-center text-xs tabular-nums">
                      {r.indicacoes}
                    </TableCell>
                    <TableCell className="text-center text-xs tabular-nums">
                      {r.pastas}
                    </TableCell>
                    <TableCell className="text-center">
                      <strong
                        className={cn(
                          "text-sm tabular-nums",
                          r.vendas > 0
                            ? "text-blue-600 dark:text-blue-400"
                            : "text-muted-foreground",
                        )}
                      >
                        {r.vendas}
                      </strong>
                    </TableCell>
                    <TableCell className="text-center">
                      <div className="flex items-center gap-1.5">
                        <div className="h-1.5 w-12 overflow-hidden rounded-full bg-muted">
                          <div
                            className={cn(
                              "h-full rounded-full",
                              convClass(r.convPct),
                            )}
                            style={{ width: `${Math.min(r.convPct, 100)}%` }}
                          />
                        </div>
                        <span className="text-xs tabular-nums">
                          {r.convPct.toFixed(1)}%
                        </span>
                      </div>
                    </TableCell>
                    <TableCell className="text-center">
                      <strong className="text-emerald-600 text-xs dark:text-emerald-400">
                        R$ {r.retornoK}k
                      </strong>
                    </TableCell>
                    <TableCell className="text-center font-bold text-sm tabular-nums">
                      {r.pts}
                    </TableCell>
                    <TableCell className="text-center">
                      <span
                        className={cn(
                          "rounded-full px-2 py-0.5 font-semibold text-[0.65rem]",
                          NIVEL_CLASSES[nivel],
                        )}
                      >
                        {NIVEL_EMOJI[nivel]} {nivel}
                      </span>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>

        {rows.length === 0 && (
          <p className="py-8 text-center text-muted-foreground text-sm">
            Nenhum corretor encontrado.
          </p>
        )}
      </CardContent>
    </Card>
  );
}
