import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { formatDate } from "../../../utils/dateFormatter";
import { kelvinToFahrenheit } from "../../../utils/temperatureConverter";
import style from "./WeatherPageTable.module.scss"; // Ensure you have the SCSS file

interface WeatherData {
  list: {
    dt: number;
    main: {
      temp: number;
      pressure: number;
      humidity: number;
    };
    weather: [{ main: string; description: string }];
  }[];
}

interface WeatherPageTableProps {
  weatherData: WeatherData;
}

const WeatherPageTable: React.FC<WeatherPageTableProps> = ({ weatherData }) => {
  const firstItem = weatherData.list[0];

  return (
    <TableContainer component={Paper}>
      <Table aria-label="weather data table">
        <TableHead>
          <TableRow>
            <TableCell>Date (mm/dd/yyyy)</TableCell>
            <TableCell align="right">Temp (°F)</TableCell>
            {/* Add class names for hiding in mobile view */}
            <TableCell align="right" className={style.hideOnMobile}>
              Description
            </TableCell>
            <TableCell align="right" className={style.hideOnMobile}>
              Main
            </TableCell>
            <TableCell align="right" className={style.hideOnMobile}>
              Pressure (hPa)
            </TableCell>
            <TableCell align="right" className={style.hideOnMobile}>
              Humidity (%)
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell component="th" scope="row">
              {formatDate(firstItem.dt)}
            </TableCell>
            <TableCell align="right">
              {kelvinToFahrenheit(firstItem.main.temp).toFixed(2)}
            </TableCell>
            {/* Hide these cells on mobile */}
            <TableCell align="right" className={style.hideOnMobile}>
              {firstItem.weather[0].description}
            </TableCell>
            <TableCell align="right" className={style.hideOnMobile}>
              {firstItem.weather[0].main}
            </TableCell>
            <TableCell align="right" className={style.hideOnMobile}>
              {firstItem.main.pressure}
            </TableCell>
            <TableCell align="right" className={style.hideOnMobile}>
              {firstItem.main.humidity}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default WeatherPageTable;
