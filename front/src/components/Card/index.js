import { useEffect, useState } from "react";
import { Avatar,  IconButton, Typography } from "@mui/material";
import axios from "../../axios";
import {
   Edit,
  ExpandLess,
  ExpandMore,
} from "@mui/icons-material";
import EditCard from "../EditCard";
import DeleteIcon from "@mui/icons-material/Delete";
 import "./card.css";

const Card = ({ employee, setActif, setupdated }) => {
  const isadmin = localStorage.getItem("logsuccess");
  const [service, setService] = useState(employee?.service);
  const [editMode, setEditMode] = useState(false);
  const [collapse, setCollapse] = useState(true);
  const [agence, setAgence] = useState(employee?.agence);
  const [direction, setDirection] = useState(employee?.direction);
  const [active, setactive] = useState(true);
  const [theid, settheid] = useState(0);
  useEffect(() => {
    if(employee.ServicesActiviteId){
      axios
      .get("/services/" + employee.ServicesActiviteId)
      .then((res) => setService(res.data));
    }
    if(employee.AgenceId){
      axios
      .get("/agences/" + employee.AgenceId)
      .then((res) => setAgence(res.data));
    }
   
    // axios.get("/actif/" + employee.ActifId).then((res) => setActif(res.data));
  }, [employee]);
  useEffect(() => {
    if (service != null && service.DirectionId != null) {
      axios
        .get("/directions/" + service.DirectionId)
        .then((res) => setDirection(res.data));
    }
  }, [service]);

  if (editMode)
    return (
      <EditCard
        setupdated={setupdated}
        employee={employee}
        setEditMode={setEditMode}
      />
    );
  const updateactive = (id) => {
    axios
      .put("/employees/" + id, {
        active: false,
      })
      .then((res) => {
        setactive(false);
        settheid(id);
        console.log(res);
      })
      .catch((e) => console.log(e));
  };
 
  return (
    <>
      {employee.id !== theid && active === true && (
        <div className="cart">
          <div className="back">
            <div className="cart_img">
              <Avatar
                color={"primary"}
                sx={{
                  height: "100px",
                  width: "100px",
                  backgroundColor: "primary.main",
                  color: "primary.contrastText",
                }}
                src={`http://localhost:8080/${employee.image}`}
              >
                <Typography variant={"h4"}>
                  {employee.image === null &&
                    employee.name[0] + employee.surname[0]}
                </Typography>
              </Avatar>
            </div>
            <div>
              <h2>{employee.surname + " " + employee.name}</h2>
            </div>
            <div className={`our_icon ${!isadmin && "ouriconcenter"}`}>
              {isadmin && (
                <IconButton size={"large"} onClick={() => setEditMode(true)}>
                  <Edit fontSize={"inherit"} />
                </IconButton>
              )}

              <IconButton size={"large"} onClick={() => setCollapse(!collapse)}>
                {collapse ? (
                  <ExpandMore fontSize={"inherit"} />
                ) : (
                  <ExpandLess fontSize={"inherit"} />
                )}
              </IconButton>
              {isadmin && (
                <IconButton
                  size={"large"}
                  onClick={() => updateactive(employee.id)}
                >
                  <DeleteIcon fontSize={"inherit"} />
                </IconButton>
              )}
            </div>
          </div>
          {!collapse && (
            <div className="show_data">
              <Typography>{employee.email}</Typography>
              <Typography>Fixe: {employee.mobilefixe}</Typography>
              <Typography>Mobile: {employee.mobile}</Typography>
              <Typography>Agence: {agence?.city}</Typography>
              <Typography>Service: {service?.name}</Typography>
            </div>
          )}
        </div>
      )}
 
    </>
  );
};

export default Card;
