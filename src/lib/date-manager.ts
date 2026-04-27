import {
  differenceInDays,
  format,
  formatDistanceToNow,
  isToday,
  isValid,
  isYesterday,
  parse,
  startOfMonth,
  startOfWeek,
  subMonths,
} from "date-fns";
import { ptBR } from "date-fns/locale";
import { toZonedTime } from "date-fns-tz";

// ---------------------------------------------
// CONFIG
// ---------------------------------------------

const DEFAULT_TIMEZONE = "America/Sao_Paulo";
const DEFAULT_LOCALE = ptBR;

// ---------------------------------------------
// TYPES
// ---------------------------------------------

export type DateInput = Date | string | number;

// ---------------------------------------------
// PUBLIC API
// ---------------------------------------------

export const toDate = (date: DateInput) => {
  if (date instanceof Date) return date;

  // try parse first to ISO
  const parsed = new Date(date);

  if (isValid(parsed)) return parsed;

  // fallback optional (custom string)
  return parse(date as string, "dd/MM/yyyy", new Date());
};

const toZoned = (date: DateInput) => {
  return toZonedTime(toDate(date), DEFAULT_TIMEZONE);
};

export const now = () => toZoned(new Date());

export const startOfWeekSafe = (date: DateInput) =>
  startOfWeek(toZoned(date), {
    locale: ptBR,
    weekStartsOn: 1, // Monday
  });

export const startOfMonthSafe = (date: DateInput) =>
  startOfMonth(toZoned(date));

export const subMonthsSafe = (date: DateInput, amount: number) =>
  subMonths(toZoned(date), amount);

// API-friendly (YYYY-MM-DD)
export const formatISODate = (date: DateInput) =>
  format(toZoned(date), "yyyy-MM-dd");

export const formatDate = (date: DateInput, pattern = "dd/MM/yyyy") => {
  return format(toZoned(date), pattern, { locale: DEFAULT_LOCALE });
};

export const formatDateTime = (date: DateInput) => {
  return format(toZoned(date), "dd/MM/yyyy HH:mm", { locale: DEFAULT_LOCALE });
};

export const fromNow = (date: DateInput) => {
  return formatDistanceToNow(toZoned(date), {
    locale: DEFAULT_LOCALE,
    addSuffix: true,
  });
};

export const isTodayDate = (date: DateInput) => {
  return isToday(toZoned(date));
};

export const isYesterdayDate = (date: DateInput) => {
  return isYesterday(toZoned(date));
};

export const diffInDays = (start: DateInput, end: DateInput = new Date()) => {
  return differenceInDays(toZoned(end), toZoned(start));
};

export const formatRange = (start: DateInput, end?: DateInput) => {
  const startFormatted = format(toZoned(start), "dd MMM, yyyy", {
    locale: DEFAULT_LOCALE,
  });

  if (!end) return `${startFormatted} — Até o momento`;

  const endFormatted = format(toZoned(end), "dd MMM, yyyy", {
    locale: DEFAULT_LOCALE,
  });

  return `${startFormatted} — ${endFormatted}`;
};
