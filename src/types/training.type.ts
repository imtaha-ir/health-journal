export interface Training {
  id: number;
  type: "cardio" | "strength" | "meditation";
  title: string;
  description: string;
  days_of_week: number[];
  time: string;
}
