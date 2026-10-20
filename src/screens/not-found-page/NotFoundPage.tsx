import { Box, Stack, Typography } from "@mui/material";
import BrowserNotSupportedIcon from "@mui/icons-material/BrowserNotSupported";
import menuItems from "../../constants/menuItems.const";
import { NavLink } from "react-router";

export default function NotFoundPage() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Stack spacing={2.5}>
        <Box>
          <BrowserNotSupportedIcon sx={{ fontSize: 96, color: "gray" }} />
        </Box>

        <Typography
          component="h1"
          sx={{
            fontSize: 96,
            color: "gray",
          }}
        >
          404
        </Typography>

        <Typography variant="h4" component="h2">
          اینجا چیزی پیدا نشد
        </Typography>

        <Typography variant="body1">
          به نظر می‌رسد آدرس واردشده اشتباه است یا این صفحه دیگر وجود ندارد.
          نگران نباشید، می‌توانیم شما را به مسیر درست برگردانیم.
        </Typography>
        <Stack>
          {menuItems.map((item, index) => (
            <NavLink to={item.path} key={index}>
              {item.label}
            </NavLink>
          ))}
        </Stack>
        <Typography variant="caption">
          اگر فکر می‌کنید مشکلی وجود دارد، آدرس صفحه را بررسی کنید.
        </Typography>
      </Stack>
    </Box>
  );
}
