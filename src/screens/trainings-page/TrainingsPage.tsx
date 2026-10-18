import { useState } from "react";
import { getTrainings } from "../../services/training.service";
import type { Training } from "../../types/training.type";
import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import TrainingList from "../../components/lists/TrainingList";

export default function TrainingsPage() {
  const [trainings, setTrainings] = useState<Training[]>(getTrainings());
  const onAddHandler = () => {
    // TODO: Add a training
    console.log("Add Clicked");
  };

  return (
    <>
      <TrainingList trainings={trainings} />
      <Fab
        color="primary"
        aria-label="اضافه کردن"
        sx={{ position: "fixed", bottom: 32, insetInlineEnd: 32 }}
        onClick={onAddHandler}
      >
        <AddIcon />
      </Fab>
    </>
  );
}
