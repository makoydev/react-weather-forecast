import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const AuthRedirect = () => {
  const { isAuthenticated, isLoading } = useAuth0();
  const navigate = useNavigate();
  const [hasRedirected, setHasRedirected] = useState(false);

  useEffect(() => {
    if (!isLoading && isAuthenticated && !hasRedirected) {
      navigate("/home");
      setHasRedirected(true); // Mark that redirection has occurred
    }
  }, [isAuthenticated, isLoading, navigate, hasRedirected]);

  return null;
};

export default AuthRedirect;
