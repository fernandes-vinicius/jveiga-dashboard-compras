import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LossCard } from "./loss-card";
import { LossReasonRow } from "./loss-reason-row";

export type LossReason = { name: string; pct: number; count: number };

export const lossStages = [
  {
    id: "visita-pasta",
    title: "Visitas → Pasta",
    from: { label: "Visitas", value: 178 },
    lost: { label: "Sem pasta", value: 118 },
    converted: { label: "Abriram pasta", value: 60 },
    convertedPct: 33.7,
    lostPct: 66.3,
    severity: "warn" as const,
    reasons: [
      { name: "Não retornou contato", pct: 35, count: 41 },
      { name: "Sem capacidade financeira", pct: 22, count: 26 },
      { name: "Comprou em outro lugar", pct: 14, count: 17 },
      { name: "Aguardando decisão familiar", pct: 10, count: 12 },
      { name: "Empreendimento não atendeu", pct: 9, count: 11 },
      { name: "Não respondeu / sumiu", pct: 10, count: 12 },
    ] as LossReason[],
  },
  {
    id: "pasta-venda",
    title: "Pasta → Venda",
    from: { label: "Pastas", value: 60 },
    lost: { label: "Não fechou", value: 57 },
    converted: { label: "Vendas", value: 3 },
    convertedPct: 5.0,
    lostPct: 95.0,
    severity: "bad" as const,
    reasons: [
      { name: "Reprovado pelo banco", pct: 32, count: 18 },
      { name: "Distrato cliente", pct: 20, count: 11 },
      { name: "Documentação irregular", pct: 18, count: 10 },
      { name: "Recusou condições finais", pct: 13, count: 7 },
      { name: "Score insuficiente", pct: 10, count: 6 },
      { name: "Outros", pct: 7, count: 4 },
    ] as LossReason[],
  },
];

export function LossAnalysis() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
        <span className="font-bold text-lg">⚠️ Onde Estamos Perdendo</span>
        <span className="text-muted-foreground text-xs">
          Visitas que não viraram pasta · pastas que não viraram venda
        </span>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {lossStages.map((stage) => (
          <LossCard key={stage.id} stage={stage} />
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-sm">
            🔍 Motivos prováveis de perda{" "}
            <span className="font-normal text-[0.62rem] text-muted-foreground">
              (estimativa baseada em distribuição típica — refinar com dados do
              CV)
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 lg:grid-cols-2">
            {lossStages.map((stage) => {
              const maxPct = Math.max(...stage.reasons.map((r) => r.pct));
              return (
                <div key={stage.id} className="flex flex-col gap-2">
                  <p className="font-semibold text-muted-foreground text-xs">
                    ⚠️ {stage.title} — {stage.lost.value} perdidas
                  </p>
                  {stage.reasons.map((r) => (
                    <LossReasonRow key={r.name} reason={r} maxPct={maxPct} />
                  ))}
                </div>
              );
            })}
          </div>
        </CardContent>
        <CardFooter>
          <div className="flex items-start gap-2 rounded-md bg-muted/50 text-muted-foreground text-xs">
            <span className="text-sm">📡</span>
            <p>
              <strong className="text-foreground">Fonte planejada:</strong> CV
              CRM — situação da pasta + motivo de distrato/reprovação · Esses
              dados serão integrados via BigQuery (job diário de snapshot do
              histórico do lead, conforme plano da Auditoria BQ)
            </p>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
