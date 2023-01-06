import axios from "axios";

export default axios.create({
  // baseURL: `http://localhost:${process.env.REACT_APP_SERVER_PORT}/api`,
  // baseURL: "https://orca-app-vnzb3.ondigitalocean.app/api",
  baseURL: "http://localhost:8080/api",
  headers: {
    "Content-type": "application/json",
  },
});
