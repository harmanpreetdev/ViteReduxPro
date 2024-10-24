import { lazy } from "react";
import { RouterProvider } from "react-router-dom";
import ErrorBounday from "../components/ErrorBoundary";
import router from "./routesConfig";

const NotFoundPage = lazy(() => import("../pages/NotFoundPage"));

const AppRoutes = () => {
  return (
    <ErrorBounday fallback={<NotFoundPage />}>
      <RouterProvider router={router} />
    </ErrorBounday>
  );
};

export default AppRoutes;
