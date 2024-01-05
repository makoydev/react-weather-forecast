import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import LandingPage from "./screens/Landing/LandingPage";
import HomePage from "./screens/Home/HomePage";
import WeatherPage from "./screens/Weather/WeatherPage";
import AuthRedirect from "./components/AuthRedirect";
import style from "./App.module.scss";
import { CityProvider } from "./context/useCityContext";

const App = () => {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>; // Display loading message while authenticating
  }

  return (
    <div className={style.container}>
      <CityProvider>
        <BrowserRouter>
          <AuthRedirect />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route
              path="/home"
              element={
                <HomePage
                  userName="User Name"
                  userGithubUrl="https://github.com/username"
                />
              }
            />
            <Route path="/weather/:city" element={<WeatherPage />} />
          </Routes>
        </BrowserRouter>
      </CityProvider>
    </div>
  );
};

export default App;
