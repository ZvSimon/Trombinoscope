import React, { useEffect, useState } from "react";
import axios from "../../axios";
import Card from "../Card";
import {Box} from "@mui/material";
const Accueil = () => {
  const [employees, setEmployees] = useState([]);
  const [updated, setupdated] = useState(0)
  useEffect(() => {
    axios.get("/employees").then((res) => setEmployees(res.data));
  }, [updated]);

  const activeemp = employees.filter((emp) => emp.active === true);

  return (
    <Box sx={{
      backgroundColor: "primary.contrastText",
      display: "flex",
      justifyContent: "center",
      minHeight: "calc(100vh - 80px)",
      p: 3,
  }} component={"div"}>
    <div className="our_cart">
      {activeemp?.map((employee) => {
        return <Card setupdated={setupdated} key={employee.id} employee={employee} />;
      })}
    </div>
    </Box>
  );
};
export default Accueil;
