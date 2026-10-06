import { SpaOutlined } from "@mui/icons-material";
import {
  AppBar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  Toolbar,
  Typography,
} from "@mui/material";
import TopBar from "./TopBar/TopBar";
import SideBar from "./SideBar/SideBar";
import PageContainer from "./PageContainer/PageContainer";

// interface MainLayoutProps {
//   children?: ReactNode;
// }

export default function MainLayout() {
  const drawerWidth = 300;
  return (
    <Box style={{ minHeight: "100vh" }}>
      <CssBaseline />
      <TopBar drawerWidth={drawerWidth} currentDate={new Date("2026-06-16")} />
      <SideBar drawerWidth={drawerWidth} />
      <PageContainer drawerWidth={drawerWidth}>test</PageContainer>
    </Box>
  );
}
