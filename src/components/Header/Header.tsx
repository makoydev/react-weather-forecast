// Header.js or Header.tsx if you're using TypeScript

import { useAuth0 } from "@auth0/auth0-react";
import style from "./Header.module.scss"; // Assume you have a separate SCSS file for styling

const Header = () => {
  const { isAuthenticated, logout } = useAuth0();

  const handleLogout = () => {
    logout({ logoutParams: { returnTo: window.location.origin } });
  };

  return (
    <header className={style.header}>
      <div className={style.logo}>Weather App</div>
      <nav className={style.navigation}>
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
