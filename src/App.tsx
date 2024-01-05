import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./screens/Landing/LandingPage";
import HomePage from "./screens/Home/HomePage";
import WeatherPage from "./screens/Weather/WeatherPage";

const App = () => {
  return (
    <BrowserRouter>
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
  );
};

export default App;
