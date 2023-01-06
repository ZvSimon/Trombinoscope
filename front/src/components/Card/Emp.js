import React, { useEffect, useState } from "react";
import axios from "../../axios";
import { NavLink } from "react-router-dom";

import img from "../../assets/image/gallery-mod.webp";
import "./emp.css";
const Emp = ({ employee }) => {
  const [service, setService] = useState(employee?.service);
  const [pilotage, setPilotage] = useState(employee?.agence);
  const [agence, setAgence] = useState(employee?.agence);
  const [direction, setDirection] = useState(employee?.direction);
  useEffect(() => {
    axios
      .get("/services/" + employee.ServicesActiviteId)
      .then((res) => setService(res.data));
    axios
      .get("/agences/" + employee.AgenceId)
      .then((res) => setAgence(res.data));
    axios
      .get("/pilotages/" + employee.PilotageId)
      .then((res) => setPilotage(res.data));
    axios
      .get("/directions/" + employee.DirectionId)
      .then((res) => setDirection(res.data));
  }, []);
  console.log(agence);
  return (
    <div className="emp">
      <div className="empimg">
        <img
          src={`http://localhost:8080/${employee.image && employee.image}`}
          alt=""
        />
      </div>
      <h4>{employee.name}</h4>

      <p>{agence?.city}</p>
      <NavLink to="/employee" state={{ data: employee }}>
        Fiche détaillée
      </NavLink>
    </div>
  );
};

export default Emp;
