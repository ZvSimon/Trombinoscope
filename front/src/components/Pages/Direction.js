import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Employees from "../Card/Employees";
import { NavLink } from "react-router-dom";
import axios from "../../axios";
import "./direction.css";
import "../Card/emp.css"
const Direction = () => {
  const directionbyservice = [
    {
      id: 1,
      name: "Direction administrative et financière France ",
      services: [
        { id: 1, name: "Resp. comptable groupe " },
        { id: 2, name: "Gestionnaires ADV" },
        { id: 3, name: "Contrôleurs de gestion" },
        { id: 4, name: "Directeur Achats " },
        { id: 5, name: "DSI " },
      ],
    },
    {
      id: 2,
      name: "Direction commerciale France",
      services: [
        { id: 6, name: "Commerciaux DMAX IDF/AURA,  DMAX SO et DMAX HDF" },
      ],
    },
    {
      id: 3,
      name: "Direction des opérations France ",
      services: [
        { id: 7, name: "Responsables d’exploitations" },
        { id: 8, name: "Coordinateurs" },
        { id: 9, name: "Chefs d’équipes / Contremaîtres" },
        { id: 10, name: "Déménageurs" },
      ],
    },
    {
      id: 4,
      name: "Direction des RH France",
      services: [
        { id: 11, name: "Chargée SIAE" },
        { id: 12, name: "Gestionnaires RH" },
        { id: 13, name: "Responsable paie" },
        { id: 14, name: "Responsable QHSE" },
        { id: 15, name: "Gestionnaire parc roulant" },
        { id: 16, name: "Gestion immobilière" },
      ],
    },
  ];
  const [direction, setDirection] = useState([]);
  const location = useLocation();
  // const [emp, setEmp] = useState([]);
  const did = location.state?.data;
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axios.get("/employees").then((res) => setEmployees(res.data));

    axios.get("/directions/" + did).then((res) => setDirection(res.data));
  }, [did]);

  const dirandservicelist = directionbyservice.filter((e) => e.id === did);
  const diremp = employees.filter((demp)=>demp.DirectionId);
  const dirchief = diremp.filter((dchief)=>dchief.ServicesActiviteId === 18 );
   const servicelist = dirandservicelist.map((d) =>
    d.services.map((aaa) => aaa)
  );

  return (
    <div className="directionpage">
      <div className="direction-head">
        <h3>{direction.name} </h3>
        <NavLink to="/">
               Go Back
        </NavLink>
      </div>
      <div className="diremplist">
         {dirchief.map((ce)=>(
           <div className="emp">
           <div className="empimg">
               <img src={`http://localhost:8080/${ce.image}`} alt="" />
           </div>
           <h4>{ce.name}</h4>
           <p>Chief</p>
   
            <NavLink to="/employee" state={{ data: ce }}>
               Fiche détaillée
           </NavLink>
          
         </div>
         ))}
      </div>
      {servicelist.map((e) =>
        e.map((data) => (
          <>
            <div className="servicename">
              <h2>{data.name}</h2>
            </div>
            <Employees sid={data.id} />
          </>
        ))
      )}
    </div>
  );
};

export default Direction;
