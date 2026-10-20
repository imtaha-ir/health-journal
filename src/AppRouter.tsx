import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import MainLayout from "./layout/MainLayout";
import HomePage from "./screens/home-page/HomePage";
import TrainingsPage from "./screens/trainings-page/TrainingsPage";
import SupplementsPage from "./screens/supplements-page/SupplementsPage";
import MealsPage from "./screens/meals-page/MealsPage";
import StatisticsPage from "./screens/statistics-page/StatisticsPage";
import SettingsPage from "./screens/settings-page/SettingsPage";
import ROUTE from "./constants/route.const";
import NotFoundPage from "./screens/not-found-page/NotFoundPage";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Navigate to={ROUTE.HOME} replace />} />
          <Route path={ROUTE.HOME} element={<HomePage />} />
          <Route path={ROUTE.TRAININGS} element={<TrainingsPage />} />
          <Route path={ROUTE.TRAININGS + "/:day"} element={<TrainingsPage />} />
          <Route path={ROUTE.MEALS} element={<MealsPage />} />
          <Route path={ROUTE.SUPPLEMENTS} element={<SupplementsPage />} />
          <Route
            path={ROUTE.SUPPLEMENTS + "/:day"}
            element={<SupplementsPage />}
          />
          <Route path={ROUTE.STATISTICS} element={<StatisticsPage />} />
          <Route path={ROUTE.SETTINGS} element={<SettingsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
