import { Box, CircularProgress, Stack, Typography } from "@mui/material";

export default function LoadingState() {
  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <CircularProgress aria-label="Loading…" />
      <Typography variant="caption">Loading</Typography>
    </Box>
  );
}
