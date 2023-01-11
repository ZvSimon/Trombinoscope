import React, { useEffect, useState } from "react";
import axios from "../../axios";
import { useLocation, useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  useEffect(() => {
    if (employee.ServicesActiviteId) {
      axios
        .get("/services/" + employee.ServicesActiviteId)
        .then((res) => setService(res.data));
    }
    if (employee.AgenceId) {
      axios
        .get("/agences/" + employee.AgenceId)
        .then((res) => setAgence(res.data));
    }

    if (employee.PilotageId) {
      axios
        .get("/pilotages/" + employee.PilotageId)
        .then((res) => setPilotage(res.data));
    }
    if (employee.DirectionId) {
      axios
        .get("/directions/" + employee.DirectionId)
        .then((res) => setDirection(res.data));
    }
  }, [
    employee.ServicesActiviteId,
    employee.AgenceId,
    employee.PilotageId,
    employee.DirectionId,
  ]);
  return (
    <div className="empcontainer">
      <button className="gobackbutton" onClick={() => navigate(-1)}>
        Go back
      </button>
      <div className="employee">
        <div className="card-header">
          <div className="agence">
            <img
              className="avatarDetail"
              src={`http://localhost:8080/${employee.image}`}
              alt=""
            />
          </div>
          <div className="name_back_card">
            <h2>{employee.name}</h2>
            <h2>{employee.surname}</h2>
          </div>
        </div>

        <div className="card-content">
          <p>Name: {employee.name}</p>
          <p>Prenom : {employee.surname}</p>
          <p>Email : {employee.email}</p>
          <p>Mobile : {employee.mobile}</p>
          <p>Direction : {direction && direction?.name}</p>
          <p>Service : {service && service?.name}</p>
          <p>Pilotage : {pilotage && pilotage.name}</p>
          <p>Agence : {agence && agence.city}</p>
        </div>
      </div>
    </div>
  );
};

export default Employee;
