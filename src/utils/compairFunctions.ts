import type { AgendaItem } from "../types/agenda.type";

export function timeCompare(
  time1: string,
  time2: string,
  order?: "asc" | "desc",
) {
  if (order === "desc") {
    return time2.localeCompare(time1);
  }
  return time1.localeCompare(time2);
}

export function agendaItemTimeCompare(item1: AgendaItem, item2: AgendaItem) {
  return timeCompare(item1.time, item2.time);
}
