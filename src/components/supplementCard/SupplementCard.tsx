import { Box, Card, CardContent, Typography } from "@mui/material";
import FitnessCenterOutlinedIcon from "@mui/icons-material/FitnessCenterOutlined";
import SelfImprovementOutlinedIcon from "@mui/icons-material/SelfImprovementOutlined";
import DirectionsRunOutlinedIcon from "@mui/icons-material/DirectionsRunOutlined";
import NotInterestedOutlinedIcon from "@mui/icons-material/NotInterestedOutlined";
import Schedule from "../training-card/Schedule";
import type { Supplement } from "../../types/supplement.type";
import { MedicationOutlined } from "@mui/icons-material";

interface SupplementCardProps {
  supplement: Supplement;
}

export default function SupplementCard({ supplement }: SupplementCardProps) {
  return (
    <Card>
      <CardContent>
        <Box sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
          <Box>
            <MedicationOutlined fontSize="large" />
          </Box>
          <Box>
            <Typography variant="h5" component="h3">
              {supplement.name}
              {supplement.name === "" && (
                <Typography
                  variant="subtitle1"
                  color="textDisabled"
                  sx={{ fontStyle: "italic" }}
                >
                  بدون عنوان
                </Typography>
              )}
            </Typography>
            <Typography variant="body1" component="p">
              {supplement.dose_note}
            </Typography>
          </Box>
        </Box>
        <Schedule daysOfWeek={supplement.days_of_week} time={supplement.time} />
      </CardContent>
    </Card>
  );
}
