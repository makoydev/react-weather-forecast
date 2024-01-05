import React from "react";
import { useNavigate } from "react-router-dom";
import style from "./HomePage.module.scss";
import { useCity } from "../../context/useCityContext";
import SearchIcon from "@mui/icons-material/Search";

interface HomePageProps {
  userName: string;
  userGithubUrl: string;
}

const HomePage: React.FC<HomePageProps> = ({ userName, userGithubUrl }) => {
  const { city, setCity } = useCity();
  const navigate = useNavigate();

  const handleCityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCity(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmedCity = city.trim();

    if (trimmedCity) {
      navigate(`/weather/${trimmedCity}`);
    } else {
      alert("Please enter a city name");
    }
  };

  return (
    <div className={style.container}>
      <h1>
        Welcome, <br />
        {userName}!
      </h1>
      <a href={userGithubUrl} target="_blank" rel="noopener noreferrer">
        {userGithubUrl}
      </a>
      <form onSubmit={handleSubmit} className={style.form}>
        <div className={style.searchInputContainer}>
          <input
            type="text"
            name="city"
            value={city}
            onChange={handleCityChange}
            placeholder="Enter city"
            className={style.cityInput}
          />
          <SearchIcon className={style.searchIcon} />
        </div>
        <button type="submit" className={style.submitButton}>
          Check Weather
        </button>
      </form>
    </div>
  );
};

export default HomePage;
