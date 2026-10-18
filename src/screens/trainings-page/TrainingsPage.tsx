import { useEffect, useState } from "react";
import TrainingCard from "../../components/training-card/TrainingCard";
import TrainingList from "../../components/lists/TrainingList";
import { type Training } from "../../types/training.type";
import { getTrainings } from "../../services/training.service";
import { Fab } from "@mui/material";
import { Add } from "@mui/icons-material";

export default function TrainingsPage() {
  const [trainings, setTrainings] = useState<Training[]>([]);
  const handleAddClick = () => {
    // TODO: reserved to implement add function
    console.log("Add clicked");
  };
  useEffect(() => {
    setTrainings(getTrainings());
  }, []);
  return (
    <>
      <TrainingList trainings={trainings} />
      <Fab
        color="primary"
        aria-label="add"
        size="medium"
        sx={{ position: "fixed", right: 32, bottom: 32 }}
        onClick={handleAddClick}
      >
        <Add />
      </Fab>
    </>
  );
}
