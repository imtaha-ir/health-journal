import { Alert, Box, Snackbar } from "@mui/material";
import { useNotifications } from "../../contexts/NotificationsContext";

export default function NotificationStack() {
  const notifications = useNotifications();
  return (
    <Box
      sx={{
        position: "fixed",
        top: 50,
        right: 50,
        gap: 1,
        display: "flex",
        flexDirection: "column",
      }}
      id="Notif-stack"
    >
      {notifications.notificationsQueue.map((notif, index) => (
        <Alert key={index} color={notif.type}>
          {notif.message}
        </Alert>
      ))}
    </Box>
  );
}
