import type { Training } from "../types/training.type";
import { apiGet } from "./api.service";

export async function getTrainings(): Promise<Training[]> {
  const trainings: Training[] = await apiGet("/trainings");
  return trainings;
}
