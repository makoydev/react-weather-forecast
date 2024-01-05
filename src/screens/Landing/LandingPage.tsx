import React from "react";
import style from "./LandingPage.module.scss";

const LandingPage: React.FC = () => {
  const handleLogin = () => {
    // Logic for Auth0 login
  };

  return (
    <div className={style.container}>
      <h1>
        Welcome to the weather forecast web application. Please login with your
        Github user to use the application and view the weather in your city.
      </h1>
      <button onClick={handleLogin} className={style.loginButton}>
        Login with GitHub
      </button>
    </div>
  );
};

export default LandingPage;
