export interface Training {
  id: number;
  type:
    | "cardio"
    | "strength"
    | "meditation"
    | "other"
    | "mindfulness"
    | "flexibility";
  title: string;
  description: string;
  days_of_week: number[];
  time: string;
}
