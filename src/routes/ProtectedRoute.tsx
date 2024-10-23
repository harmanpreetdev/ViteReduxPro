import { useSelector } from "react-redux";
import { selectUser } from "../features/auth/authSelectors";
import { ReactNode } from "react";

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const user = useSelector(selectUser);

  

  return <>{children}</>;
};

export default ProtectedRoute;
