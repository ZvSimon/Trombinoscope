import React, { useEffect, useState } from "react";
import axios from "../../axios";
import { NavLink } from "react-router-dom";

import img from "../../assets/image/gallery-mod.webp";
import "./user.css";
const User = ({ employee, setActif, setupdated }) => {
  const [service, setService] = useState(employee?.service);
  const [pilotage, setPilotage] = useState(employee?.pilotage);

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
  console.log("The service is : " + service);
  return (
    <NavLink to="/direction" state={{ data: employee.DirectionId }}>
      <div className="user">
        <p>{service?.name}</p>
        <p>{pilotage?.name}</p>
        <h4>{employee.name}</h4>
        <p>{direction?.name}</p>
        <div className="userimg">
          <img src={img} alt="" />
        </div>
      </div>
    </NavLink>
  );
};

export default User;
