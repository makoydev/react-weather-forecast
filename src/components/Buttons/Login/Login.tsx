import { useAuth0 } from "@auth0/auth0-react";
import style from "./Login.module.scss";

function LoginButton() {
  const { isAuthenticated, loginWithRedirect, error } = useAuth0();

  const handleLogin = () => {
    loginWithRedirect();
  };

  if (error) {
    console.error("Auth0 Login Error:", error);
  }

  return (
    <>
      {!isAuthenticated && (
        <button className={style.loginBtn} onClick={handleLogin}>
          Log in
        </button>
      )}
      {error && <p>Error during login: {error.message}</p>}{" "}
    </>
  );
}

export default LoginButton;
