import type { MenuItem } from "../types/menuItem.type";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import FitnessCenterOutlinedIcon from "@mui/icons-material/FitnessCenterOutlined";
import MedicationLiquidOutlinedIcon from "@mui/icons-material/MedicationLiquidOutlined";
import LocalDiningOutlinedIcon from "@mui/icons-material/LocalDiningOutlined";
import EqualizerOutlinedIcon from "@mui/icons-material/EqualizerOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

const menuItems: MenuItem[] = [
  {
    label: "برنامه روزانه",
    icon: HomeOutlinedIcon,
  },
  {
    label: "تمرینات",
    icon: FitnessCenterOutlinedIcon,
  },
  {
    label: "خوراک",
    icon: LocalDiningOutlinedIcon,
  },
  {
    label: "مکمل‌ها",
    icon: MedicationLiquidOutlinedIcon,
  },
  {
    label: "گزارشات",
    icon: EqualizerOutlinedIcon,
  },
  {
    label: "تنظیمات",
    icon: SettingsOutlinedIcon,
  },
];

export default menuItems;
