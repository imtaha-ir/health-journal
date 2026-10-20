import { useEffect, useState } from "react";
import { type Supplement } from "../../types/supplement.type";
import { getSupplements } from "../../services/supplement.service";
import { Fab, Tab, Tabs } from "@mui/material";
import { Add } from "@mui/icons-material";
import SupplementList from "../../components/lists/SupplementList";
import { useParams } from "react-router";
import ROUTE from "../../constants/route.const";

export default function SupplementsPage() {
  const { day } = useParams();
  const [supplements, setSupplements] = useState<Supplement[]>(() => {
    const allSuplement = getSupplements();
    if (!day) return allSuplement;
    const dayNumber = Number(day);
    if (isNaN(dayNumber) || dayNumber < 0 || dayNumber > 6) return allSuplement;
    return allSuplement.filter((item) => item.days_of_week.includes(dayNumber));
  });

  const handleAddClick = () => {
    // TODO: reserved to implement add function
    console.log("Add clicked");
  };

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
            href={`${ROUTE.SUPPLEMENTS}/${dayIndex}`}
            aria-label="شنبه"
          />
        ))}
      </Tabs>
      <SupplementList supplements={supplements} />
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
