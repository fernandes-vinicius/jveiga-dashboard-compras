"use client";

import { parseAsString, useQueryState } from "nuqs";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const parser = parseAsString
  .withDefault("all")
  .withOptions({ history: "replace", shallow: false });

export function ModuleSelect() {
  const [module, setModule] = useQueryState("module", parser);

  return (
    <Select value={module} onValueChange={setModule}>
      <SelectTrigger className="w-full sm:max-w-40">
        <SelectValue placeholder="Etapa / Módulo" />
      </SelectTrigger>
      <SelectContent align="center" side="bottom">
        <SelectGroup>
          <SelectLabel>Etapa / Módulo</SelectLabel>
          <SelectItem value="all">Todos os módulos</SelectItem>
          <SelectItem value="block-a">Bloco A</SelectItem>
          <SelectItem value="block-b">Bloco B</SelectItem>
          <SelectItem value="block-c">Bloco C</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
