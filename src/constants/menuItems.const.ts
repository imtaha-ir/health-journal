import type { MenuItem } from "../types/menuItem.type";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import FitnessCenterOutlinedIcon from "@mui/icons-material/FitnessCenterOutlined";
import MedicationLiquidOutlinedIcon from "@mui/icons-material/MedicationLiquidOutlined";
import LocalDiningOutlinedIcon from "@mui/icons-material/LocalDiningOutlined";
import EqualizerOutlinedIcon from "@mui/icons-material/EqualizerOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import ROUTE from "./route.const";

const menuItems: MenuItem[] = [
  {
    label: "برنامه روزانه",
    icon: HomeOutlinedIcon,
    path: ROUTE.HOME,
  },
  {
    label: "تمرینات",
    icon: FitnessCenterOutlinedIcon,
    path: ROUTE.TRAININGS,
  },
  {
    label: "خوراک",
    icon: LocalDiningOutlinedIcon,
    path: ROUTE.MEALS,
  },
  {
    label: "مکمل‌ها",
    icon: MedicationLiquidOutlinedIcon,
    path: ROUTE.SUPPLEMENTS,
  },
  {
    label: "گزارشات",
    icon: EqualizerOutlinedIcon,
    path: ROUTE.STATISTICS,
  },
  {
    label: "تنظیمات",
    icon: SettingsOutlinedIcon,
    path: ROUTE.SETTINGS,
  },
];

export default menuItems;
