import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import MainLayout from "@/layouts/MainLayout";
import AuthLayout from "@/layouts/AuthLayout";
import ErrorBounday from "@/components/ErrorBoundary";

const HomePage = lazy(() => import("../pages/HomePage"));
const LoginPage = lazy(() => import("../pages/LoginPage"));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),
    children: [{ index: true, element: <HomePage /> }],
  },
  {
    path: "/auth",
    element: (
      <ErrorBounday fallback={<p>Something went wrong!</p>}>
        <AuthLayout />
      </ErrorBounday>
    ),
    children: [{ path: "login", element: <LoginPage /> }],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

export default router;
