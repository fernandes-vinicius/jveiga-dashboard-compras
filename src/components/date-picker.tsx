"use client";

import { ChevronDownIcon } from "lucide-react";
import * as React from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { formatDate } from "@/lib/date-manager";

type DatePickerProps = {
  placeholder?: string;
  value?: Date;
  onChange?: (date?: Date) => void;
};

export function DatePicker(props: DatePickerProps) {
  const { placeholder = "DD/MM/YYYY", value, onChange } = props;

  const [date, setDate] = React.useState<Date>();

  React.useEffect(() => {
    setDate(value);
  }, [value]);

  const handleDateChange = (newDate: Date | undefined) => {
    setDate(newDate);
    onChange?.(newDate);
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          data-empty={!date}
          className="w-full justify-between text-left font-normal data-[empty=true]:text-muted-foreground"
        >
          {date ? formatDate(date, "PPP") : <span>{placeholder}</span>}
          <ChevronDownIcon />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="w-[--radix-popover-trigger-width] p-0"
        align="center"
      >
        <Calendar
          mode="single"
          selected={date}
          onSelect={handleDateChange}
          defaultMonth={date}
          className="w-full"
          classNames={{ root: "w-full" }}
        />
      </PopoverContent>
    </Popover>
  );
}
