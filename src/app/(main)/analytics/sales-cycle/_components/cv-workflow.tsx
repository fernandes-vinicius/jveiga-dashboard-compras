import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

type ChipType = "inicio" | "pendencia" | "externo" | "aprovado" | "reprovado";

type WorkflowChipData = {
  name: string;
  days?: string;
  count: number;
  type: ChipType;
};

type WorkflowPhaseData = {
  label: string;
  color: string;
  swim: string;
  chips: WorkflowChipData[];
};

const CHIP_CLASSES: Record<ChipType, string> = {
  inicio:
    "bg-violet-50 text-violet-700 border-violet-200 dark:bg-violet-950/30 dark:text-violet-300 dark:border-violet-800",
  pendencia:
    "bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950/30 dark:text-amber-300 dark:border-amber-800",
  externo:
    "bg-sky-50 text-sky-700 border-sky-200 dark:bg-sky-950/30 dark:text-sky-300 dark:border-sky-800",
  aprovado:
    "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/30 dark:text-emerald-300 dark:border-emerald-800",
  reprovado:
    "bg-red-50 text-red-700 border-red-200 dark:bg-red-950/30 dark:text-red-300 dark:border-red-800",
};

const LEGEND_ITEMS = [
  { color: "#7c3aed", label: "Início (Reserva/Avaliação)" },
  { color: "#d97706", label: "Em análise / pendência (interno)" },
  { color: "#0ea5e9", label: "Análise externa (Banco/Correspondente)" },
  { color: "#10b981", label: "Aprovação" },
  { color: "#dc2626", label: "Reprovação / Cancelamento" },
];

const phases: WorkflowPhaseData[] = [
  {
    label: "1️⃣ ABERTURA & FORMULÁRIOS",
    color: "#7c3aed",
    swim: "CV / Cliente",
    chips: [
      { name: "EM RESERVA", count: 14, type: "inicio" },
      { name: "NOVA AVALIAÇÃO", days: "~1d", count: 11, type: "inicio" },
      { name: "GERAR FORMULÁRIOS", days: "~2d", count: 8, type: "inicio" },
      { name: "FORMULÁRIOS GERADOS", days: "~1d", count: 7, type: "inicio" },
    ],
  },
  {
    label: "2️⃣ ANÁLISE INTERNA",
    color: "#d97706",
    swim: "JV (Gestão)",
    chips: [
      { name: "ANÁLISE GESTOR", days: "~2d", count: 6, type: "pendencia" },
      { name: "REGULARIZANDO PEND.", days: "~3d", count: 5, type: "pendencia" },
      { name: "AJUSTES", days: "~2d", count: 4, type: "pendencia" },
    ],
  },
  {
    label: "3️⃣ ANÁLISE EXTERNA (BANCO)",
    color: "#0ea5e9",
    swim: "Banco / Correspondente",
    chips: [
      {
        name: "ANÁLISE CORRESPONDENTE",
        days: "~4d",
        count: 9,
        type: "externo",
      },
      { name: "CONDICIONADO", days: "~3d", count: 3, type: "externo" },
      { name: "INTERNALIZADO AGÊNCIA", days: "~5d", count: 5, type: "externo" },
    ],
  },
  {
    label: "4️⃣ APROVAÇÃO & FECHAMENTO",
    color: "#10b981",
    swim: "CV / Banco",
    chips: [
      { name: "APROVADO", days: "~1d", count: 8, type: "aprovado" },
      { name: "APROVADO EXCEÇÃO", days: "~1d", count: 2, type: "aprovado" },
      {
        name: "AGUARDANDO LANÇAMENTO",
        days: "~2d",
        count: 6,
        type: "aprovado",
      },
    ],
  },
  {
    label: "❌ ENCERRAMENTO NEGATIVO",
    color: "#dc2626",
    swim: "Cliente",
    chips: [
      { name: "REPROVADO", count: 3, type: "reprovado" },
      { name: "CANCELADA", count: 2, type: "reprovado" },
    ],
  },
];

function WorkflowChip({ chip }: { chip: WorkflowChipData }) {
  return (
    <div
      className={cn(
        "flex items-center gap-1.5 rounded border px-2 py-1 font-semibold text-[0.65rem] uppercase tracking-wide",
        CHIP_CLASSES[chip.type],
      )}
    >
      <span>{chip.name}</span>
      {chip.days && <span className="opacity-60">{chip.days}</span>}
      <span className="rounded-full bg-black/10 px-1.5 font-bold dark:bg-white/10">
        {chip.count}
      </span>
    </div>
  );
}

export function CvWorkflow() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>📋 Workflow da Pasta no CV</CardTitle>
        <CardDescription>
          Tempo médio entre cada status — Visita Realizada → Pasta → Venda
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-4">
        <div className="space-y-5 overflow-x-auto">
          {phases.map((phase) => (
            <div
              key={phase.label}
              className="grid min-w-[600px] grid-cols-[auto_auto_1fr] items-start gap-x-4"
            >
              <div className="flex items-center gap-1.5 pt-1">
                <span
                  className="size-2 shrink-0 rounded-full"
                  style={{ background: phase.color }}
                />
                <span
                  className="whitespace-nowrap font-semibold text-[0.65rem]"
                  style={{ color: phase.color }}
                >
                  {phase.label}
                </span>
              </div>
              <div
                className="whitespace-nowrap rounded border px-2 py-1 font-medium text-[0.65rem]"
                style={{ borderColor: phase.color, color: phase.color }}
              >
                {phase.swim}
              </div>
              <div className="flex flex-wrap gap-2">
                {phase.chips.map((chip) => (
                  <WorkflowChip key={chip.name} chip={chip} />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 border-t pt-4">
          <div className="text-center">
            <p className="font-bold text-xl">88</p>
            <p className="text-muted-foreground text-xs">Pastas em fluxo</p>
          </div>
          <div className="h-px w-10 bg-gradient-to-r from-blue-500 to-sky-400" />
          <div className="text-center">
            <p className="font-bold text-emerald-600 text-xl dark:text-emerald-400">
              16
            </p>
            <p className="text-muted-foreground text-xs">Aprovadas</p>
          </div>
          <div className="h-px w-10 bg-gradient-to-r from-emerald-400 to-rose-400" />
          <div className="text-center">
            <p className="font-bold text-rose-500 text-xl dark:text-rose-400">
              5
            </p>
            <p className="text-muted-foreground text-xs">
              Reprovadas / Canceladas
            </p>
          </div>
          <div className="h-px w-10 bg-gradient-to-r from-rose-400 to-blue-400" />
          <div className="text-center">
            <p className="font-bold text-xl">18,2%</p>
            <p className="text-muted-foreground text-xs">Taxa Aprovação</p>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1.5 border-t pt-4">
          {LEGEND_ITEMS.map(({ color, label }) => (
            <span
              key={label}
              className="flex items-center gap-1.5 text-[0.65rem] text-muted-foreground"
            >
              <span
                className="size-2 rounded-full"
                style={{ background: color }}
              />
              {label}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
