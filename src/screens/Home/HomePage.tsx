import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./HomePage.module.scss";

interface HomePageProps {
  userName: string;
  userGithubUrl: string;
}

const HomePage: React.FC<HomePageProps> = ({ userName, userGithubUrl }) => {
  const [city, setCity] = useState("");
  const navigate = useNavigate();

  const handleCityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCity(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Navigate to Weather screen with the city
    navigate(`/weather/${city}`);
  };

  return (
    <div className={style.container}>
      <h1>Welcome, {userName}</h1>
      <a href={userGithubUrl} target="_blank" rel="noopener noreferrer">
        Visit GitHub Profile
      </a>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={city}
          onChange={handleCityChange}
          placeholder="Enter city"
          className={style.cityInput}
        />
        <button type="submit" className={style.submitButton}>
          Check Weather
        </button>
      </form>
    </div>
  );
};

export default HomePage;
