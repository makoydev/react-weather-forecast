import React, { useState, useEffect } from "react";
import style from "./WeatherPage.module.scss";
import WeatherPageTable from "./WeatherPageTable";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading";

interface WeatherPageProps {}

// Interface for the weather data
interface WeatherData {
  list: {
    dt: number; // Unix timestamp for the date and time of the forecast
    main: {
      temp: number; // Temperature in Kelvin
      pressure: number;
      humidity: number;
    };
    weather: [
      {
        main: string; // Main weather condition (e.g., Clear, Rain)
        description: string; // Weather condition description
      }
    ];
    dt_txt: string; // Date and time in text format
  }[];
}

const WeatherPage: React.FC<WeatherPageProps> = () => {
  const { city } = useParams<{ city: string }>();
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchWeatherData = async () => {
      setLoading(true);
      setError("");
      try {
        const apiKey = "501c4b908ff4d059601b9ee49760ed30";
        const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;
        const response = await fetch(url);
        if (!response.ok) throw new Error("Weather data not found");
        const data: WeatherData = await response.json();
        setWeatherData(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchWeatherData();
  }, [city]);

  if (loading) return <Loading />;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className={style.container}>
      <h1>Weather in {city}</h1>
      {weatherData && <WeatherPageTable weatherData={weatherData} />}
    </div>
  );
};

export default WeatherPage;
