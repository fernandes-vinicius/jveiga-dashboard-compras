import {
  CalendarIcon,
  ClipboardClockIcon,
  EyeIcon,
  FolderIcon,
  FunnelIcon,
  RefreshCcwIcon,
  TargetIcon,
  TrendingUpIcon,
  UsersIcon,
} from "@/components/icons";

export const nav = {
  main: [
    {
      path: "/",
      name: "Vendas",
      icon: TrendingUpIcon,
    },
    {
      path: "/folders",
      name: "Pastas",
      icon: FolderIcon,
    },
    {
      path: "/visits",
      name: "Visitas",
      icon: EyeIcon,
    },
    {
      path: "/tracking",
      name: "Acompanhamento",
      icon: ClipboardClockIcon,
    },
    {
      path: "/weekly-actions",
      name: "Ações da semana",
      icon: TargetIcon,
    },
  ],
  secondary: [
    {
      path: "/analytics/funnel",
      name: "Funil",
      icon: FunnelIcon,
    },
    {
      path: "/analytics/sales-cycle",
      name: "Ciclo de vendas",
      icon: RefreshCcwIcon,
    },
    {
      path: "/analytics/vso-curve",
      name: "Curva VSO",
      icon: TrendingUpIcon,
    },
    {
      path: "/analytics/realtors",
      name: "Corretores",
      icon: UsersIcon,
    },
    {
      path: "/analytics/simulator",
      name: "Simulador",
      icon: TargetIcon,
    },
    {
      path: "/analytics/planning",
      name: "Planejamento",
      icon: CalendarIcon,
    },
  ],
};

export type NavItem = (typeof nav.main)[number];
