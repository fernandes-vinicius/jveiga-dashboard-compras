"use client";

import * as React from "react";
import { DateRangePicker } from "@/components/date-range-picker";
import { Skeleton } from "@/components/ui/skeleton";

export function DateRangePickerWithSuspense() {
  return (
    <React.Suspense
      fallback={<Skeleton className="h-8 w-[200px] rounded-md" />}
    >
      <DateRangePicker />
    </React.Suspense>
  );
}
