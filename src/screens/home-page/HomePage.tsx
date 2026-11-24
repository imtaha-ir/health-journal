import { MedicationOutlined } from "@mui/icons-material";
import { useData } from "../../contexts/DataContext";
import { getTrainingIcon } from "../../utils/icon.utils";
import { useMemo } from "react";
import { Box, Typography } from "@mui/material";
import { agendaItemTimeCompare } from "../../utils/compairFunctions";
import type { AgendaItem } from "../../types/agenda.type";

export default function HomePage() {
  const appData = useData();
  const dayNumber = 0;

  const agenda = useMemo(() => {
    const agendaList: AgendaItem[] = appData.trainings
      .filter((item) => item.days_of_week.includes(dayNumber))
      .map((training) => ({
        icon: getTrainingIcon(training),
        title: training.title,
        description: training.description,
        time: training.time,
      }))
      .concat(
        appData.supplements
          .filter((item) => item.days_of_week.includes(dayNumber))
          .map((supplement) => ({
            icon: <MedicationOutlined fontSize="large" />,
            title: supplement.name,
            description: supplement.dose_note,
            time: supplement.time ?? "12:00",
          })),
      );
    agendaList.sort(agendaItemTimeCompare);
    return agendaList;
  }, [dayNumber, appData]);

  return agenda.map((item) => (
    <Box>
      {item.icon}
      <Typography variant="caption">{item.time}</Typography>
      <Typography variant="h5">{item.title}</Typography>
      <Typography variant="subtitle1">{item.description}</Typography>
    </Box>
  ));
}
