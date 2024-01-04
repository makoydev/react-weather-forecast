import React from "react";
import style from "./LandingPage.module.scss";

const LandingPage: React.FC = () => {
  const handleLogin = () => {
    // Logic for Auth0 login
  };

  return (
    <div className={style.container}>
      <h1>Welcome to Our Weather App</h1>
      <button onClick={handleLogin} className={style.loginButton}>
        Login with GitHub
      </button>
    </div>
  );
};

export default LandingPage;
