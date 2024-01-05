import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TablePagination from "@mui/material/TablePagination";
import { formatDate } from "../../../utils/dateFormatter";
import { kelvinToFahrenheit } from "../../../utils/temperatureConverter";

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
  const rowsPerPageOptions = [10]; // Options for rows per page
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(rowsPerPageOptions[0]);

  const handleChangePage = (_: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0); // Reset to the first page
  };

  const rowsToShow = weatherData.list.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <>
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
            {rowsToShow.map((item, index) => (
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
      <TablePagination
        rowsPerPageOptions={rowsPerPageOptions}
        component="div"
        count={weatherData.list.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  );
};

export default WeatherPageTable;
