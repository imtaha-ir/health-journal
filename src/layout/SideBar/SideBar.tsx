import { SpaOutlined } from "@mui/icons-material";
import {
  Box,
  Divider,
  Drawer,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";

interface SideBarProps {
  drawerWidth: number;
}

export default function SideBar({ drawerWidth }: SideBarProps) {
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Box sx={{ display: "flex", p: 2 }}>
        <SpaOutlined style={{ fontSize: "300%" }} />
        <Box>
          <Stack sx={{ ml: 2, flexGrow: 1 }}>
            <Typography variant="h5">دفترچه سلامت</Typography>
            <Typography variant="subtitle1">سلامت جسم، ذهن، زندگی</Typography>
          </Stack>
        </Box>
      </Box>
    </Drawer>
  );
}
