import { createContext, useCallback, useContext, useState } from "react";

// 1: Data Type
type NotificationType = "error" | "success" | "warning";
export interface NotificationItem {
  message: string;
  type: NotificationType;
}
type NotificationsContextType = {
  notificationsQueue: NotificationItem[];
  pushNotification: (message: string, type?: NotificationType) => void;
};

// 2: Context creation
const NotificationContext = createContext<NotificationsContextType>({
  notificationsQueue: [],
  pushNotification: (msg: string) => {},
});

// 3: Provider
interface NotificationProviderProps {
  children: React.ReactNode;
}
export function NotificationsProvider({ children }: NotificationProviderProps) {
  const [queue, setQueue] = useState<NotificationItem[]>([]);
  const removeNotification = () => {
    const newQueue = [...queue];
    newQueue.shift();
    setQueue(newQueue);
  };
  const pushNotification = (message: string, type?: NotificationType) => {
    setQueue([...queue, { message, type: type ?? "success" }]);
    setTimeout(() => {
      removeNotification();
    }, 3000);
  };
  return (
    <NotificationContext.Provider
      value={{ notificationsQueue: queue, pushNotification }}
    >
      {children}
    </NotificationContext.Provider>
  );
}

// 4: Hook
export function useNotifications() {
  const notifContext = useContext(NotificationContext);
  if (!notifContext) {
    throw new Error(
      "useNotifications باید داخل NotificationsProvider قرار داشته باشد",
    );
  }
  return notifContext;
}
