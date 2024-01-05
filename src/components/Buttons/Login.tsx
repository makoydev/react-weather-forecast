import { useAuth0 } from "@auth0/auth0-react";

function LoginButton() {
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  const handleLogin = () => {
    loginWithRedirect();
  };

  return !isAuthenticated && <button onClick={handleLogin}>Log in</button>;
}

export default LoginButton;
