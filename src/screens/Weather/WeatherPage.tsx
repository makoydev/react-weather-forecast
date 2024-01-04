import React, { useState, useEffect } from "react";
import style from "./WeatherPage.module.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { kelvinToFahrenheit } from "../../utils/TemperatureConverter";
import { formatDate } from "../../utils/dateFormatter";

interface WeatherPageProps {
  city: string;
}

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

const WeatherPage: React.FC<WeatherPageProps> = ({ city }) => {
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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className={style.container}>
      <h1>Weather in {city}</h1>
      {weatherData && (
        <TableContainer component={Paper}>
          <Table aria-label="weather data table">
            <TableHead>
              <TableRow>
                <TableCell>Date (mm/dd/yyyy)</TableCell>
                <TableCell align="right">Temp (°F)</TableCell>
                <TableCell align="right">Description</TableCell>
                <TableCell align="right">Main</TableCell>
                <TableCell align="right">Pressure (hPa)</TableCell>
                <TableCell align="right">Humidity (%)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {weatherData.list.map((item, index) => (
                <TableRow key={index}>
                  <TableCell component="th" scope="row">
                    {formatDate(item.dt)}
                  </TableCell>
                  <TableCell align="right">
                    {kelvinToFahrenheit(item.main.temp).toFixed(2)}
                  </TableCell>
                  <TableCell align="right">
                    {item.weather[0].description}
                  </TableCell>
                  <TableCell align="right">{item.weather[0].main}</TableCell>
                  <TableCell align="right">{item.main.pressure}</TableCell>
                  <TableCell align="right">{item.main.humidity}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
};

export default WeatherPage;
