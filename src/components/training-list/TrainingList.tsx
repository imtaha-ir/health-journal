import { Stack } from "@mui/material";
import type { Training } from "../../types/training.type";
import TrainingCard from "../training-card/TrainingCard";

interface TrainingListProps {
  trainings: Training[];
}

export default function TrainingList({ trainings }: TrainingListProps) {
  return (
    <Stack sx={{ gap: 2 }}>
      {trainings.map((item) => (
        <TrainingCard training={item} key={item.id} />
      ))}
    </Stack>
  );
}
