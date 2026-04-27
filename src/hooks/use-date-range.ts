"use client";

import { parseAsString, parseAsStringLiteral, useQueryState } from "nuqs";
import {
  formatISODate,
  now,
  startOfMonthSafe,
  startOfWeekSafe,
  subMonthsSafe,
  toDate,
} from "@/lib/date-manager";

const stringParser = parseAsString.withOptions({
  history: "replace",
  shallow: false,
});

const PRESETS = ["week", "month", "quarter", "custom"] as const;

type Preset = (typeof PRESETS)[number];

type DateRange = {
  from: Date | undefined;
  to: Date | undefined;
};

export function useDateRange() {
  const [startDate, setStartDate] = useQueryState("startDate", stringParser);
  const [endDate, setEndDate] = useQueryState("endDate", stringParser);
  const [preset, setPreset] = useQueryState(
    "datePreset",
    parseAsStringLiteral(PRESETS)
      .withDefault("month")
      .withOptions({ history: "replace", shallow: false }),
  );

  const dateRange: DateRange = (() => {
    if (startDate || endDate) {
      return {
        from: startDate ? toDate(startDate) : undefined,
        to: endDate ? toDate(endDate) : undefined,
      };
    }

    if (preset === "custom") return { from: undefined, to: undefined };

    const current = now();
    let from: Date;

    switch (preset) {
      case "week":
        from = startOfWeekSafe(current);
        break;
      case "month":
        from = startOfMonthSafe(current);
        break;
      case "quarter":
        from = subMonthsSafe(current, 3);
        break;
    }

    return { from, to: current };
  })();

  const setDateRange = (range: DateRange) => {
    setStartDate(range.from ? formatISODate(range.from) : null);
    setEndDate(range.to ? formatISODate(range.to) : null);
    setPreset("custom");
  };

  const applyPreset = (newPreset: Preset) => {
    setPreset(newPreset);

    const current = now();
    let from: Date;
    const to = current;

    switch (newPreset) {
      case "week":
        from = startOfWeekSafe(current);
        break;
      case "month":
        from = startOfMonthSafe(current);
        break;
      case "quarter":
        from = subMonthsSafe(current, 3);
        break;
      default:
        return;
    }

    setStartDate(formatISODate(from));
    setEndDate(formatISODate(to));
  };

  return { dateRange, setDateRange, preset, setPreset: applyPreset };
}

export type { Preset };
