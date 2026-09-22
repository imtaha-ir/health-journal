import { Box, Toolbar } from "@mui/material";
import type { ReactNode } from "react";

interface PageContainerProps {
  drawerWidth: number;
  children: ReactNode;
}

export default function PageContainer({
  drawerWidth,
  children,
}: PageContainerProps) {
  return (
    <Box
      component="main"
      sx={{
        height: "100vh",
        ml: `${drawerWidth}px`,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Toolbar />
      <Box sx={{ p: 2, flexGrow: 1, overflowX: "hidden", overflowY: "auto" }}>
        {children}
      </Box>
    </Box>
  );
}
