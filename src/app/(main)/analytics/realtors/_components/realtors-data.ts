export type RealtorTipo = "JV" | "Parceria";
export type RealtorNivel = "Soldado" | "Capitão" | "General" | "Lenda";

export type Realtor = {
  nome: string;
  initials: string;
  tipo: RealtorTipo;
  plantao: number;
  treinos: number;
  acoes: number;
  visitas: number;
  indicacoes: number;
  pastas: number;
  vendas: number;
  convPct: number;
  retornoK: number;
  pts: number;
};

export const REALTORS: Realtor[] = [
  { nome: "Mariana Silva", initials: "MS", tipo: "JV", plantao: 10, treinos: 1, acoes: 2, visitas: 13, indicacoes: 3, pastas: 2, vendas: 2, convPct: 15.4, retornoK: 662, pts: 249 },
  { nome: "Carlos Mendes", initials: "CM", tipo: "JV", plantao: 9, treinos: 0, acoes: 4, visitas: 11, indicacoes: 2, pastas: 2, vendas: 2, convPct: 18.2, retornoK: 551, pts: 248 },
  { nome: "Imob. Alpha — João", initials: "IA", tipo: "Parceria", plantao: 5, treinos: 0, acoes: 1, visitas: 15, indicacoes: 4, pastas: 3, vendas: 2, convPct: 13.3, retornoK: 772, pts: 237 },
  { nome: "Vendas Mais — Patrícia", initials: "VM", tipo: "Parceria", plantao: 5, treinos: 2, acoes: 1, visitas: 13, indicacoes: 3, pastas: 2, vendas: 2, convPct: 15.4, retornoK: 551, pts: 224 },
  { nome: "Grupo Lar — Marcelo", initials: "GL", tipo: "Parceria", plantao: 4, treinos: 3, acoes: 0, visitas: 12, indicacoes: 3, pastas: 2, vendas: 2, convPct: 16.7, retornoK: 551, pts: 216 },
  { nome: "Juliana Costa", initials: "JC", tipo: "JV", plantao: 8, treinos: 4, acoes: 4, visitas: 10, indicacoes: 2, pastas: 2, vendas: 1, convPct: 10.0, retornoK: 441, pts: 210 },
  { nome: "Thiago Souza", initials: "TS", tipo: "JV", plantao: 11, treinos: 6, acoes: 4, visitas: 6, indicacoes: 1, pastas: 1, vendas: 1, convPct: 16.7, retornoK: 221, pts: 196 },
  { nome: "Ana Beatriz", initials: "AB", tipo: "JV", plantao: 8, treinos: 6, acoes: 1, visitas: 7, indicacoes: 2, pastas: 1, vendas: 1, convPct: 14.3, retornoK: 221, pts: 170 },
  { nome: "Ideal Imóveis — Sandra", initials: "II", tipo: "Parceria", plantao: 5, treinos: 2, acoes: 1, visitas: 11, indicacoes: 2, pastas: 2, vendas: 1, convPct: 9.1, retornoK: 441, pts: 161 },
  { nome: "Roberto Lima", initials: "RL", tipo: "JV", plantao: 9, treinos: 1, acoes: 2, visitas: 8, indicacoes: 1, pastas: 1, vendas: 1, convPct: 12.5, retornoK: 331, pts: 155 },
  { nome: "Pedro Almeida", initials: "PA", tipo: "JV", plantao: 7, treinos: 3, acoes: 3, visitas: 5, indicacoes: 1, pastas: 1, vendas: 1, convPct: 20.0, retornoK: 221, pts: 149 },
  { nome: "Casa Nova — Diego", initials: "CN", tipo: "Parceria", plantao: 5, treinos: 0, acoes: 1, visitas: 9, indicacoes: 2, pastas: 2, vendas: 1, convPct: 11.1, retornoK: 331, pts: 141 },
  { nome: "TopLar — Adriana", initials: "T—", tipo: "Parceria", plantao: 3, treinos: 2, acoes: 2, visitas: 7, indicacoes: 2, pastas: 1, vendas: 1, convPct: 14.3, retornoK: 331, pts: 130 },
  { nome: "Fernanda Rocha", initials: "FR", tipo: "JV", plantao: 11, treinos: 4, acoes: 0, visitas: 6, indicacoes: 1, pastas: 1, vendas: 0, convPct: 0, retornoK: 110, pts: 126 },
  { nome: "Imob. Sul — Ricardo", initials: "IS", tipo: "Parceria", plantao: 6, treinos: 1, acoes: 2, visitas: 5, indicacoes: 1, pastas: 1, vendas: 1, convPct: 20.0, retornoK: 221, pts: 121 },
  { nome: "Lar Plus — Beatriz", initials: "LP", tipo: "Parceria", plantao: 1, treinos: 2, acoes: 0, visitas: 8, indicacoes: 2, pastas: 1, vendas: 1, convPct: 12.5, retornoK: 331, pts: 119 },
  { nome: "Vivenda — Marcos P.", initials: "V—", tipo: "Parceria", plantao: 3, treinos: 2, acoes: 2, visitas: 5, indicacoes: 1, pastas: 1, vendas: 1, convPct: 20.0, retornoK: 221, pts: 117 },
  { nome: "Premium — Rafael", initials: "P—", tipo: "Parceria", plantao: 1, treinos: 2, acoes: 0, visitas: 8, indicacoes: 1, pastas: 1, vendas: 1, convPct: 12.5, retornoK: 331, pts: 116 },
  { nome: "Camila Dias", initials: "CD", tipo: "JV", plantao: 7, treinos: 6, acoes: 2, visitas: 4, indicacoes: 1, pastas: 1, vendas: 0, convPct: 0, retornoK: 110, pts: 114 },
  { nome: "Larissa Oliveira", initials: "LO", tipo: "JV", plantao: 11, treinos: 3, acoes: 2, visitas: 3, indicacoes: 0, pastas: 1, vendas: 0, convPct: 0, retornoK: 110, pts: 113 },
  { nome: "Brasil Imóveis — Igor", initials: "BI", tipo: "Parceria", plantao: 3, treinos: 0, acoes: 2, visitas: 6, indicacoes: 1, pastas: 1, vendas: 1, convPct: 16.7, retornoK: 221, pts: 112 },
  { nome: "Lar Real — Cristina", initials: "LR", tipo: "Parceria", plantao: 3, treinos: 0, acoes: 2, visitas: 6, indicacoes: 1, pastas: 1, vendas: 1, convPct: 16.7, retornoK: 221, pts: 112 },
  { nome: "Renata Carvalho", initials: "RC", tipo: "JV", plantao: 11, treinos: 4, acoes: 5, visitas: 2, indicacoes: 0, pastas: 0, vendas: 0, convPct: 0, retornoK: 0, pts: 108 },
  { nome: "Imob. Norte — Helena", initials: "IN", tipo: "Parceria", plantao: 3, treinos: 0, acoes: 2, visitas: 5, indicacoes: 1, pastas: 1, vendas: 1, convPct: 20.0, retornoK: 221, pts: 107 },
  { nome: "Casa & Cia — Vanessa", initials: "C&", tipo: "Parceria", plantao: 5, treinos: 0, acoes: 1, visitas: 4, indicacoes: 1, pastas: 1, vendas: 1, convPct: 25.0, retornoK: 221, pts: 103 },
  { nome: "Lucas Ferreira", initials: "LF", tipo: "JV", plantao: 10, treinos: 1, acoes: 0, visitas: 4, indicacoes: 0, pastas: 1, vendas: 0, convPct: 0, retornoK: 110, pts: 95 },
  { nome: "Bruno Martins", initials: "BM", tipo: "JV", plantao: 8, treinos: 2, acoes: 0, visitas: 4, indicacoes: 0, pastas: 1, vendas: 0, convPct: 0, retornoK: 0, pts: 94 },
  { nome: "Habitar — Gustavo", initials: "H—", tipo: "Parceria", plantao: 5, treinos: 0, acoes: 1, visitas: 4, indicacoes: 1, pastas: 1, vendas: 0, convPct: 0, retornoK: 110, pts: 73 },
  { nome: "Felipe Araújo", initials: "FA", tipo: "JV", plantao: 9, treinos: 3, acoes: 2, visitas: 2, indicacoes: 0, pastas: 0, vendas: 0, convPct: 0, retornoK: 0, pts: 72 },
  { nome: "Lar Sonho — Antônio", initials: "LS", tipo: "Parceria", plantao: 4, treinos: 3, acoes: 0, visitas: 3, indicacoes: 0, pastas: 1, vendas: 0, convPct: 0, retornoK: 110, pts: 72 },
  { nome: "Imob. Leste — Roberto P.", initials: "IL", tipo: "Parceria", plantao: 2, treinos: 3, acoes: 1, visitas: 3, indicacoes: 0, pastas: 1, vendas: 0, convPct: 0, retornoK: 110, pts: 71 },
  { nome: "Morada — Paula", initials: "M—", tipo: "Parceria", plantao: 2, treinos: 1, acoes: 1, visitas: 4, indicacoes: 0, pastas: 1, vendas: 0, convPct: 0, retornoK: 110, pts: 66 },
  { nome: "Predial — Aline", initials: "P—", tipo: "Parceria", plantao: 5, treinos: 0, acoes: 1, visitas: 3, indicacoes: 0, pastas: 1, vendas: 0, convPct: 0, retornoK: 110, pts: 65 },
  { nome: "Imob. ABC — Eduardo", initials: "IA", tipo: "Parceria", plantao: 6, treinos: 3, acoes: 2, visitas: 2, indicacoes: 0, pastas: 0, vendas: 0, convPct: 0, retornoK: 110, pts: 53 },
  { nome: "Imob. Capital — Luiz", initials: "IC", tipo: "Parceria", plantao: 6, treinos: 3, acoes: 2, visitas: 2, indicacoes: 0, pastas: 0, vendas: 0, convPct: 0, retornoK: 0, pts: 53 },
  { nome: "Lar Forte — Wagner", initials: "LF", tipo: "Parceria", plantao: 6, treinos: 3, acoes: 2, visitas: 1, indicacoes: 0, pastas: 0, vendas: 0, convPct: 0, retornoK: 0, pts: 48 },
  { nome: "Lar Você — Daniela", initials: "LV", tipo: "Parceria", plantao: 6, treinos: 1, acoes: 2, visitas: 2, indicacoes: 0, pastas: 0, vendas: 0, convPct: 0, retornoK: 0, pts: 43 },
  { nome: "Predial Ouro — Sônia", initials: "PO", tipo: "Parceria", plantao: 6, treinos: 1, acoes: 2, visitas: 1, indicacoes: 0, pastas: 0, vendas: 0, convPct: 0, retornoK: 0, pts: 38 },
  { nome: "Imob. Vista — Carla", initials: "IV", tipo: "Parceria", plantao: 6, treinos: 1, acoes: 2, visitas: 1, indicacoes: 0, pastas: 0, vendas: 0, convPct: 0, retornoK: 0, pts: 38 },
  { nome: "CasaShow — Mônica", initials: "C—", tipo: "Parceria", plantao: 4, treinos: 3, acoes: 0, visitas: 2, indicacoes: 0, pastas: 0, vendas: 0, convPct: 0, retornoK: 110, pts: 37 },
  { nome: "Imob. Plus — Tatiana", initials: "IP", tipo: "Parceria", plantao: 4, treinos: 3, acoes: 0, visitas: 1, indicacoes: 0, pastas: 0, vendas: 0, convPct: 0, retornoK: 0, pts: 32 },
  { nome: "Casa Sim — Otávio", initials: "CS", tipo: "Parceria", plantao: 4, treinos: 3, acoes: 0, visitas: 1, indicacoes: 0, pastas: 0, vendas: 0, convPct: 0, retornoK: 0, pts: 32 },
  { nome: "Lar Total — Silvia", initials: "LT", tipo: "Parceria", plantao: 2, treinos: 3, acoes: 1, visitas: 1, indicacoes: 0, pastas: 0, vendas: 0, convPct: 0, retornoK: 0, pts: 31 },
  { nome: "Construir — Fábio", initials: "C—", tipo: "Parceria", plantao: 3, treinos: 0, acoes: 2, visitas: 2, indicacoes: 0, pastas: 0, vendas: 0, convPct: 0, retornoK: 110, pts: 29 },
  { nome: "Casa Top — Vera", initials: "CT", tipo: "Parceria", plantao: 4, treinos: 1, acoes: 0, visitas: 2, indicacoes: 0, pastas: 0, vendas: 0, convPct: 0, retornoK: 110, pts: 27 },
  { nome: "Imob. Express — Hélio", initials: "IE", tipo: "Parceria", plantao: 5, treinos: 0, acoes: 1, visitas: 1, indicacoes: 0, pastas: 0, vendas: 0, convPct: 0, retornoK: 0, pts: 25 },
  { nome: "Predial JV — Marta", initials: "PJ", tipo: "Parceria", plantao: 3, treinos: 0, acoes: 2, visitas: 1, indicacoes: 0, pastas: 0, vendas: 0, convPct: 0, retornoK: 0, pts: 24 },
];

export function getNivel(pts: number): RealtorNivel {
  if (pts >= 150) return "Lenda";
  if (pts >= 100) return "General";
  if (pts >= 50) return "Capitão";
  return "Soldado";
}

export const NIVEL_EMOJI: Record<RealtorNivel, string> = {
  Lenda: "🟡",
  General: "🟣",
  Capitão: "🔵",
  Soldado: "🟢",
};
