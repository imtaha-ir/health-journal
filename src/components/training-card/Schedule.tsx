import { AccessTime, CalendarMonth } from "@mui/icons-material";
import { Box, Stack, Typography } from "@mui/material";

interface ScheduleProps {
  daysOfWeek: number[];
  time?: string;
}

export default function Schedule({ daysOfWeek, time }: ScheduleProps) {
  const getDaysOfWeek = () => {
    const stringArrayOfDays: string[] = daysOfWeek.map((numberOfDay) => {
      switch (numberOfDay) {
        case 0:
          return "شنبه";
        case 1:
          return "یکشنبه";
        case 2:
          return "دوشنبه";
        case 3:
          return "سه‌شنبه";
        case 4:
          return "چهارشنبه";
        case 5:
          return "پنجشنبه";
        case 6:
          return "جمعه";
        default:
          return "";
      }
    });
    if (daysOfWeek.length === 7) {
      return "هر روز";
    }
    if (daysOfWeek.length === 0) {
      return "هیچ روزی انتخاب نشده";
    }
    return "روزها: " + stringArrayOfDays.join("، ");
  };
  return (
    <Stack spacing={0} sx={{ alignItems: "flex-end" }}>
      <Box>
        <Typography variant="caption">{getDaysOfWeek()}</Typography>
        <CalendarMonth fontSize="small" />
      </Box>
      <Box>
        <Typography variant="caption">
          ساعت: {time ? time : "نامشخص"}
        </Typography>

        <AccessTime fontSize="small" />
      </Box>
    </Stack>
  );
}
