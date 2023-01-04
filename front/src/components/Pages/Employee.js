import React, { useEffect, useState } from "react";
import axios from "../../axios";
import { useLocation } from "react-router-dom";

import img from "../../assets/image/gallery-mod.webp";
import "./employee.css";
const Employee = () => {
  const location = useLocation();
  // const [emp, setEmp] = useState([]);
  const employee = location.state?.data;
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
    <div className="empcontainer">
      <div className="employee">
        <div className="card-header">
          <div className="agence">
            <img className="avatarDetail" src={img} alt="" />
          </div>
          <div className="name_back_card">
            <h2>{employee.name}</h2>
            <h2>{employee.surname}</h2>
          </div>
        </div>

        <div className="card-content">
          <p>Nom : {employee.name}</p>
          <p>Prenom : {employee.surname}</p>
          <p>Email : {employee.email}</p>
          <p>Mobile : {employee.mobile}</p>
          <p>Direction : {direction && direction?.name}</p>
          <p>Service : {service && service?.name}</p>
          <p>Pilotage : {pilotage && pilotage.name}</p>
          <p>Agency : {agence && agence.city}</p>
        </div>
      </div>
    </div>
  );
};

export default Employee;
