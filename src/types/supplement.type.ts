export interface Supplement {
  id: number;
  name: string;
  dose_note: string;
  days_of_week: number[];
  time?: string;
}
