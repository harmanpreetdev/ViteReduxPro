import { RouterProvider } from "react-router-dom";
import router from "./routesConfig";

const AppRoutes = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;
