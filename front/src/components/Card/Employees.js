import React, { useEffect, useState } from "react";
import axios from "../../axios";
import "./employees.css";
import Emp from "./Emp";
const Employees = ({ sid }) => {
    const [employees, setEmployees] = useState([]);
    useEffect(() => {
        axios.get("/employees").then((res) => setEmployees(res.data));
    }, []);
    const empdata = employees.filter((emp)=>emp.ServicesActiviteId === sid);
  return (
        <>
        <div className="diremplist">
            {empdata.map((semp,index)=>(
              <Emp key={index} employee={semp}/>
            ))}
        </div>
        </>

       
   );
};

export default Employees;
