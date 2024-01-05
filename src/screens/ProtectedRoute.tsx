/* eslint-disable @typescript-eslint/no-explicit-any */
import { useAuth0 } from "@auth0/auth0-react";
import Loading from "../components/Loading";
import RequireAuthNotice from "../components/RequireAuth";

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

  return isAuthenticated ? <Component {...props} /> : <RequireAuthNotice />;
};

export default ProtectedRoute;
