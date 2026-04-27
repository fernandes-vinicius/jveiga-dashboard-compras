"use client";

import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { CalendarIcon, ChevronDownIcon } from "lucide-react";
import * as React from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { useDateRange } from "@/hooks/use-date-range";
import { useIsMobile } from "@/hooks/use-mobile";

const PRESETS = [
  { value: "week", label: "Esta semana" },
  { value: "month", label: "Este mês" },
  { value: "quarter", label: "Último trimestre" },
] as const;

type PresetValue = (typeof PRESETS)[number]["value"];

export function DateRangePicker() {
  const isMobile = useIsMobile();
  const { dateRange, setDateRange, preset, setPreset } = useDateRange();
  const [open, setOpen] = React.useState(false);

  const presetLabel = React.useMemo(() => {
    if (preset === "custom") return "Personalizado";
    return PRESETS.find((p) => p.value === preset)?.label ?? "Período";
  }, [preset]);

  const displayText = React.useMemo(() => {
    if (!dateRange.from) return isMobile ? "Data" : "Selecionar período";
    const from = format(dateRange.from, "dd/MM", { locale: ptBR });
    if (dateRange.to) {
      return `${from} - ${format(dateRange.to, "dd/MM", { locale: ptBR })}`;
    }
    return from;
  }, [dateRange, isMobile]);

  const handlePreset = (value: PresetValue) => {
    setPreset(value);
    setOpen(false);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button type="button" variant="default" size="sm">
          <CalendarIcon />
          <span className="flex items-center gap-4">
            {!isMobile && (
              <>
                <span>{presetLabel}</span>
                <Separator orientation="vertical" className="h-3.5" />
              </>
            )}
            <span>{displayText}</span>
          </span>
          <ChevronDownIcon />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="w-screen sm:w-auto"
        align="center"
        sideOffset={11}
      >
        <div className="flex flex-col sm:flex-row">
          <div className="-mx-2 flex shrink-0 flex-row flex-nowrap gap-1 overflow-x-auto border-b px-2 sm:mx-0 sm:flex-col sm:overflow-visible sm:border-r sm:border-b-0 sm:px-0 sm:pr-2">
            {PRESETS.map((option) => (
              <Button
                key={option.value}
                type="button"
                variant={preset === option.value ? "default" : "ghost"}
                size="sm"
                className="shrink-0 justify-start whitespace-nowrap"
                onClick={() => handlePreset(option.value)}
              >
                {option.label}
              </Button>
            ))}
          </div>
          <div className="w-full p-0">
            <Calendar
              mode="range"
              defaultMonth={dateRange.from}
              selected={dateRange}
              onSelect={(range) =>
                range && setDateRange({ from: range.from, to: range.to })
              }
              numberOfMonths={isMobile ? 1 : 2}
              lang="pt-BR"
              locale={ptBR}
              className="w-full"
              classNames={{ root: "w-full" }}
            />
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
