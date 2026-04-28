"use client";

import { useState } from "react";
import { DatePicker } from "@/components/date-picker";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent } from "@/components/ui/card";
import { Field, FieldTitle } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const actionGroups = [
  {
    label: "Ações de Campo",
    options: [
      "Captação Ativa",
      "Mini Evento",
      "Carro de Som",
      "Vídeos/Fotos",
      "Blitz Digital",
      "Evento Stand",
      "Mutirão Reativação",
      "Celebração",
      "Corujão",
      "Panfletagem",
    ],
  },
  {
    label: "Treinamentos",
    options: [
      "Batalha de Pitch",
      "Alvo do Dia",
      "Caça ao Tesouro",
      "Sino do Dia",
      "Desafio Conhecimento",
      "Duelos Relâmpago",
      "1 Minuto de Ouro",
      "Roleplay Objeções",
    ],
  },
  {
    label: "Premiações",
    options: ["Premiação Indicações", "Premiação Pastas", "Premiação Vendas"],
  },
  {
    label: "Outros",
    options: ["Parceria", "Digital", "Outro"],
  },
];

export function WeeklyActionsCard() {
  const [actionType, setActionType] = useState("Captação Ativa");
  const [date, setDate] = useState("");
  const [objective, setObjective] = useState("");
  const [description, setDescription] = useState("");

  function handleAdd() {
    setActionType("Captação Ativa");
    setDate("");
    setObjective("");
    setDescription("");
  }

  return (
    <Card>
      <CardContent className="flex flex-col gap-6 py-6">
        <Tabs defaultValue="current">
          <TabsList>
            <TabsTrigger value="current">Semana Atual</TabsTrigger>
            <TabsTrigger value="previous">Semana Anterior</TabsTrigger>
          </TabsList>
          <TabsContent value="current">
            <div className="py-8 text-center text-muted-foreground text-sm">
              Selecione um único empreendimento para gerenciar ações
            </div>
          </TabsContent>
          <TabsContent value="previous">
            <div className="py-8 text-center text-muted-foreground text-sm">
              Selecione um único empreendimento para ver as ações
            </div>
          </TabsContent>
        </Tabs>

        <Separator />

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <Field>
            <FieldTitle>Tipo de ação</FieldTitle>
            <Select value={actionType} onValueChange={setActionType}>
              <SelectTrigger className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent align="center">
                {actionGroups.map((group) => (
                  <SelectGroup key={group.label}>
                    <SelectLabel>{group.label}</SelectLabel>
                    {group.options.map((option) => (
                      <SelectItem key={option} value={option}>
                        {option}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                ))}
              </SelectContent>
            </Select>
          </Field>

          <Field>
            <FieldTitle>Data</FieldTitle>
            {/* <Input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            /> */}
            <DatePicker />
          </Field>

          <Field>
            <FieldTitle>Objetivo</FieldTitle>
            <Input
              type="text"
              placeholder="Ex: 30 leads, 10 visitas"
              value={objective}
              onChange={(e) => setObjective(e.target.value)}
            />
          </Field>

          <Field className="md:col-span-2">
            <FieldTitle>Descrição da ação</FieldTitle>
            <Input
              type="text"
              placeholder="Ex: Captação no Shopping Vila Olímpia com 3 promotoras..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Field>

          <div className="flex items-end">
            <Button className="w-full" onClick={handleAdd}>
              Adicionar Ação
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
