import { SpaOutlined } from "@mui/icons-material";
import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import menuItems from "../../constants/menuItems.const";
import { useLocation, useNavigate } from "react-router";

interface SideBarProps {
  drawerWidth: number;
}

export default function SideBar({ drawerWidth }: SideBarProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const handleMenuClick = (path: string) => {
    navigate(path);
  };

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
      <Box sx={{ display: "flex", p: 2, flexDirection: "column" }}>
        <SpaOutlined style={{ fontSize: "300%" }} />
        <Box>
          <Stack sx={{ ml: 2, flexGrow: 1 }}>
            <Typography variant="h5">دفترچه سلامت</Typography>
            <Typography variant="subtitle1">سلامت جسم، ذهن، زندگی</Typography>
          </Stack>
        </Box>
        <Box>
          <List sx={{ mt: 4 }}>
            {menuItems.map((item, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton
                  onClick={() => {
                    handleMenuClick(item.path);
                  }}
                  selected={location.pathname.startsWith(item.path)}
                >
                  <ListItemIcon>
                    <item.icon />
                  </ListItemIcon>
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </Drawer>
  );
}
