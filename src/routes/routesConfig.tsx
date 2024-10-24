import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import { MainLayout, AuthLayout } from "@/layouts";
import { ErrorBounday } from "@/components";
import ProtectedRoute from "./ProtectedRoute";

const HomePage = lazy(() =>
  import("@/pages").then((module) => ({ default: module.HomePage }))
);
const RegisterPage = lazy(() =>
  import("@/pages").then((module) => ({ default: module.RegisterPage }))
);
const LoginPage = lazy(() =>
  import("@/pages").then((module) => ({ default: module.LoginPage }))
);
const NotFoundPage = lazy(() =>
  import("@/pages").then((module) => ({ default: module.NotFoundPage }))
);

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
    children: [
      { path: "register", element: <RegisterPage /> },
      { path: "login", element: <LoginPage /> },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

export default router;
