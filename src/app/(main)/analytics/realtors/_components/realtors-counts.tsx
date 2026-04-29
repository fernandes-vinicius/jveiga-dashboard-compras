import { Card, CardContent } from "@/components/ui/card";

type GroupData = {
  title: string;
  icon: string;
  colorClass: string;
  cadastrados: number;
  plantao: number;
  ativos: number;
};

const groups: GroupData[] = [
  {
    title: "Corretores JV (Internos)",
    icon: "🏢",
    colorClass: "text-blue-600 dark:text-blue-400",
    cadastrados: 7,
    plantao: 4,
    ativos: 6,
  },
  {
    title: "Corretores Parcerias",
    icon: "🤝",
    colorClass: "text-violet-600 dark:text-violet-400",
    cadastrados: 19,
    plantao: 5,
    ativos: 12,
  },
];

export function RealtorsCounts() {
  return (
    <div className="flex flex-col gap-3">
      <span className="font-bold text-lg">
        👥 Corretores no Plantão e Ativos
      </span>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {groups.map((g) => (
          <Card key={g.title}>
            <CardContent className="pt-4">
              <p className={`mb-3 font-semibold text-sm ${g.colorClass}`}>
                {g.icon} {g.title}
              </p>
              <div className="grid grid-cols-3 gap-2 text-center">
                {(
                  [
                    ["Cadastrados", g.cadastrados],
                    ["No Plantão", g.plantao],
                    ["Ativos (mês)", g.ativos],
                  ] as const
                ).map(([label, val]) => (
                  <div key={label} className="flex flex-col gap-0.5">
                    <span
                      className={`font-bold text-2xl leading-tight ${g.colorClass}`}
                    >
                      {val}
                    </span>
                    <span className="text-muted-foreground text-xs">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
