import { AppBar, Divider, Toolbar, Typography } from "@mui/material";

interface TopBarProps {
  drawerWidth: number;
}

export default function TopBar({ drawerWidth }: TopBarProps) {
  return (
    <AppBar
      position="fixed"
      sx={{
        width: `calc(100% - ${drawerWidth}px)`,
        ml: `${drawerWidth}px`,
        backgroundColor: "rgba(255, 255, 255, 0.45)",
        //   backdropFilter: "blur(4px)",
        //   WebkitBackdropFilter: "blur(4px)",
        color: "gray",
        boxShadow: "none",
        //   borderBottom: "1px solid rgba(255, 255, 255, 0.45)",
      }}
    >
      <Toolbar>
        <Typography variant="h6" component="div">
          خانه
        </Typography>
      </Toolbar>
      <Divider />
    </AppBar>
  );
}
