// Header.js or Header.tsx

import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate, useLocation } from "react-router-dom";
import style from "./Header.module.scss"; // Ensure your styles are set up correctly

const Header = () => {
  const { isAuthenticated, logout } = useAuth0();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    logout({
      logoutParams: {
        returnTo: window.location.origin,
      },
    });
  };

  const handleBack = () => {
    navigate("/home");
  };

  const isWeatherPage = location.pathname.includes("/weather/"); // Checks if the pathname includes '/weather/'

  return (
    <header className={style.header}>
      <div className={style.logo}>Weather App</div>
      <nav className={style.navigation}>
        {isWeatherPage && (
          <button className={style.backBtn} onClick={handleBack}>
            Back
          </button>
        )}
        {isAuthenticated && (
          <button className={style.logoutBtn} onClick={handleLogout}>
            Logout
          </button>
        )}
      </nav>
    </header>
  );
};

export default Header;
