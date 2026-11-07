import type { Supplement } from "../types/supplement.type";
import { apiGet } from "./api.service";

export async function getSupplements() {
  const supplements: Supplement[] = await apiGet("/supplements");

  return supplements;
}
