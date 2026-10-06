import { AppBar, Box, Divider, Toolbar, Typography } from "@mui/material";

interface TopBarProps {
  drawerWidth: number;
  currentDate: Date;
}

export default function TopBar({ drawerWidth, currentDate }: TopBarProps) {
  const formatter = new Intl.DateTimeFormat("fa-IR", {
    calendar: "persian",
    weekday: "long",
    day: "2-digit",
    month: "long",
  });
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
        <Box
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h5" component="h2">
            خانه
          </Typography>
          <Typography
            variant="caption"
            component="time"
            dateTime={currentDate.toISOString()}
          >
            {formatter.format(currentDate)}
          </Typography>
        </Box>
      </Toolbar>
      <Divider />
    </AppBar>
  );
}
