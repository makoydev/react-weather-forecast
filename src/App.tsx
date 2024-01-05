import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import LandingPage from "./screens/Landing/LandingPage";
import HomePage from "./screens/Home/HomePage";
import WeatherPage from "./screens/Weather/WeatherPage";
import AuthRedirect from "./components/AuthRedirect";
import style from "./App.module.scss";
import { CityProvider } from "./context/useCityContext";
import { useEffect } from "react";
import ProtectedRoute from "./screens/ProtectedRoute";
import Header from "./components/Header";
import Loading from "./components/Loading";

const App = () => {
  const { isLoading, user, isAuthenticated } = useAuth0();

  useEffect(() => {
    console.log("Is Authenticated:", isAuthenticated);
    console.log("User:", user);
  }, [isAuthenticated, user]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className={style.container}>
      <CityProvider>
        <BrowserRouter>
          <Header />
          <AuthRedirect />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route
              path="/home"
              element={
                <ProtectedRoute
                  component={HomePage}
                  userName={user?.name || "User Name"}
                  userGithubUrl={
                    user?.nickname
                      ? `https://github.com/makoydev`
                      : "https://github.com/username"
                  }
                />
              }
            />
            <Route
              path="/weather/:city"
              element={<ProtectedRoute component={WeatherPage} />}
            />
          </Routes>
        </BrowserRouter>
      </CityProvider>
    </div>
  );
};

export default App;
