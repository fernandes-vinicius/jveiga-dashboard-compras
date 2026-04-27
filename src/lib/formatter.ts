export function formatCurrency(v: number, options?: Intl.NumberFormatOptions) {
  const formattedValue = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    notation: "compact",
    ...options,
  });

  return formattedValue.format(v);
}
