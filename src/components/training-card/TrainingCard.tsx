import { Box, Card, CardContent, Stack, Typography } from "@mui/material";
import type { Training } from "../../types/training.type";
import FitnessCenterOutlinedIcon from "@mui/icons-material/FitnessCenterOutlined";
import SelfImprovementOutlinedIcon from "@mui/icons-material/SelfImprovementOutlined";
import DirectionsRunOutlinedIcon from "@mui/icons-material/DirectionsRunOutlined";
import NotInterestedOutlinedIcon from "@mui/icons-material/NotInterestedOutlined";
import Schedule from "./Schedule";

interface TrainingCardProps {
  training: Training;
}

export default function TrainingCard({ training }: TrainingCardProps) {
  const getTrainingIcon = () => {
    switch (training.type) {
      case "strength":
        return <FitnessCenterOutlinedIcon fontSize="large" />;
      case "cardio":
        return <DirectionsRunOutlinedIcon fontSize="large" />;
      case "meditation":
        return <SelfImprovementOutlinedIcon fontSize="large" />;
      default:
        return <NotInterestedOutlinedIcon fontSize="large" />;
    }
  };

  return (
    <Card>
      <CardContent>
        <Box sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
          <Box>{getTrainingIcon()}</Box>
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
