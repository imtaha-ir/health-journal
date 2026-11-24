import React, { createContext, useContext, useEffect, useState } from "react";
import type { Training } from "../types/training.type";
import { getTrainings } from "../services/training.service";
import { useNotifications } from "./NotificationsContext";
import type { Supplement } from "../types/supplement.type";
import { getSupplements } from "../services/supplement.service";

// data type
export type DataType = {
  trainings: Training[];
  supplements: Supplement[];
  trainingLoading?: boolean;
  supplementLoading?: boolean;
};

// context
const DataContext = createContext<DataType>({
  trainings: [],
  supplements: [],
});

// provider
interface DataProviderProps {
  children: React.ReactNode;
}
export function DataProvider({ children }: DataProviderProps) {
  const [mainState, setMainState] = useState<DataType>({
    trainings: [],
    supplements: [],
  });
  const notify = useNotifications();
  useEffect(() => {
    setMainState((currState) => ({
      ...currState,
      trainingLoading: true,
      supplementLoading: true,
    }));
    getTrainings()
      .then((data) => {
        //   setTrainings(filterTrainingsByDay(data));
        setMainState((currState) => ({ ...currState, trainings: data }));
      })
      .catch((error) => {
        notify.pushNotification(error.message, "error");
      })
      .finally(() => {
        setMainState((currState) => ({ ...currState, trainingLoading: false }));
      });
    getSupplements()
      .then((data) => {
        setMainState((currtState) => ({
          ...currtState,
          supplements: data,
        }));
      })
      .catch((error) => {
        notify.pushNotification(error.message, "error");
      })
      .finally(() => {
        setMainState((currState) => ({
          ...currState,
          supplementLoading: false,
        }));
      });
  }, []);
  return (
    <DataContext.Provider value={mainState}>{children}</DataContext.Provider>
  );
}

// hook
export function useData() {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useData باید داخل DataProvider قرار داشته باشد");
  }
  return context;
}
