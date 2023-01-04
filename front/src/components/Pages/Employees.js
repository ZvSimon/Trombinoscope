import React, { useEffect, useState } from "react";
import axios from "../../axios";
import Card from "../Card";

import {
  Box,
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import { Search } from "@mui/icons-material";

const Employees = () => {
  const [query, setQuery] = useState("");
  const [employees, setEmployees] = useState(null);

  useEffect(() => {
    const initialRequests = [
      axios.get("/employees"),
      axios.get("/services/"),
      axios.get("/agences/"),
      axios.get("/directions"),
    ];
    Promise.all(initialRequests).then((responses) => {
      const temp = [];
      const values = responses.map((value) => value.data);
      for (const employee of values[0]) {
        if (employee.ServicesActiviteId) {
          employee.service = values[1].find(
            (s) => s.id === employee.ServicesActiviteId
          );
        }
        if (employee.AgenceId) {
          employee.agence = values[2].find((a) => a.id === employee.AgenceId);
        }
        if (employee.service.DirectionId) {
          employee.direction = values[3].find(
            (d) => d.id === employee.service.DirectionId
          );
        }
        temp.push(employee);
      }
      setEmployees(temp);
    });
  });

  return (
    <Box
      sx={{
        backgroundColor: "primary.contrastText",
        display: "flex",
        justifyContent: "center",
        minHeight: "calc(100vh - 80px)",
        p: 3,
      }}
      component={"div"}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          width: "100%",
          mx: 5,
        }}
      >
        <FormControl sx={{ m: 1, width: "20rem" }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            Recherche
          </InputLabel>
          <OutlinedInput
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            endAdornment={
              <InputAdornment position="end">
                <Search aria-label="toggle password visibility" edge="end" />
              </InputAdornment>
            }
            label="Recherche"
          />
        </FormControl>
        <Grid container spacing={2} mt={1}>
          {employees
            ?.filter((employee) => {
              const searchFields = [
                employee.surname,
                employee.name,
                employee.surname + " " + employee.name,
                employee.service.name,
                employee?.direction?.name,
                employee.agence.city,
              ]
                .filter((item) => item != null)
                .map((str) => str.toLowerCase());
              for (const searchField of searchFields) {
                if (searchField.includes(query.toLowerCase())) {
                  return true;
                }
              }
              return false;
            })
            .map((employee) => (
              <Grid key={employee.id} item xs={12} sm={6} md={3}>
                <Card key={employee.id} employee={employee} />
              </Grid>
            ))}
        </Grid>
      </Box>
    </Box>
  );
};
export default Employees;
