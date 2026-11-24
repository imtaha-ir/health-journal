import { Box, Card, CardContent, Stack, Typography } from "@mui/material";
import type { Training } from "../../types/training.type";
import Schedule from "../schedule/Schedule";
import { getTrainingIcon } from "../../utils/icon.utils";

interface TrainingCardProps {
  training: Training;
}

export default function TrainingCard({ training }: TrainingCardProps) {
  return (
    <Card>
      <CardContent>
        <Box sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
          <Box>{getTrainingIcon(training)}</Box>
          <Box>
            <Typography variant="h5" component="h3">
              <Typography
                variant="subtitle1"
                color="textDisabled"
                sx={{ fontStyle: "italic" }}
              >
                {training.title ? training.title : "تمرین ورزشی بدون عنوان"}
              </Typography>
            </Typography>
            <Typography variant="body1" component="p">
              {training.description}
            </Typography>
          </Box>
        </Box>
        <Schedule daysOfWeek={training.days_of_week} time={training.time} />
      </CardContent>
    </Card>
  );
}
