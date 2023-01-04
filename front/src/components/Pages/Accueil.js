import React, { useEffect, useState } from "react";
import axios from "../../axios";
import User from "../Card/User";
import { Box } from "@mui/material";

const Home = () => {
  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    axios.get("/employees").then((res) => setEmployees(res.data));
  }, []);

  const empceo = employees.filter((emp) => emp.ServicesActiviteId === 17);
  const emppilotage = employees.filter((emp) => emp.PilotageId !== null);
  const empchief = employees.filter((emp) => emp.ServicesActiviteId === 18);

  return (
    <Box>
      <Box
        sx={{
          backgroundColor: "primary.contrastText",
          minHeight: "calc(100vh - 80px)",
          p: 3,
        }}
        component={"div"}
      >
        <div className="usercontainer ceo">
          {empceo?.map((employee) => {
            return <User key={employee.id} employee={employee} />;
          })}
        </div>
        <div className="usercontainer pilotage">
          {emppilotage?.map((employee) => {
            return <User key={employee.id} employee={employee} />;
          })}
        </div>
        <div className="usercontainer pilotage">
          {empchief?.map((employee) => {
            return <User key={employee.id} employee={employee} />;
          })}
        </div>
      </Box>
    </Box>
  );
};
export default Home;
