import { useEffect, useState } from "react";
import { getTrainings } from "../../services/training.service";
import type { Training } from "../../types/training.type";
import { Fab, Tab, Tabs } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import TrainingList from "../../components/lists/TrainingList";
import { useParams } from "react-router";
import ROUTE from "../../constants/route.const";
import LoadingState from "../../components/loading-state/LoadingState";

export default function TrainingsPage() {
  const { day } = useParams();
  const [trainings, setTrainings] = useState<Training[]>([]);
  const [loading, setLoading] = useState(false);
  const onAddHandler = () => {
    // TODO: Add a training
    console.log("Add Clicked");
  };
  const filterTrainingsByDay = (allTraining: Training[]) => {
    if (!day) return allTraining;
    const dayNumber = Number(day);
    if (isNaN(dayNumber) || dayNumber < 0 || dayNumber > 6) return allTraining;
    return allTraining.filter((item) => item.days_of_week.includes(dayNumber));
  };

  useEffect(() => {
    setLoading(true);
    getTrainings()
      .then((data) => {
        setTrainings(filterTrainingsByDay(data));
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <LoadingState />;
  }
  return (
    <>
      <Tabs value={day} aria-label="فیلتر بر اساس روزهای هفته">
        {[
          "شنبه",
          "یکشنبه",
          "دوشنبه",
          "سه‌شنبه",
          "چهارشنبه",
          "پنجشنبه",
          "جمعه",
        ].map((weekDay, dayIndex) => (
          <Tab
            label={weekDay}
            value={String(dayIndex)}
            href={`${ROUTE.TRAININGS}/${dayIndex}`}
            aria-label="شنبه"
          />
        ))}
      </Tabs>
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
