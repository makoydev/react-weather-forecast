/* eslint-disable @typescript-eslint/no-explicit-any */
import { Navigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Loading from "../components/Loading";

interface ProtectedRouteProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: React.ComponentType<any>; // Allow any component with any props
  [key: string]: any; // Allow any additional props
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  component: Component,
  ...props
}) => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }

  return isAuthenticated ? <Component {...props} /> : <Navigate to="/" />;
};

export default ProtectedRoute;
