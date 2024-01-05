import React from "react";
import style from "./LandingPage.module.scss";
import LoginButton from "../../components/Buttons/Login/Login";

const LandingPage: React.FC = () => {
  return (
    <div className={style.container}>
      <h2>
        Welcome to the weather forecast web application! Please login with your
        account to use the application and view the weather in your city.
      </h2>
      <LoginButton />
    </div>
  );
};

export default LandingPage;
