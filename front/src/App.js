import "./App.css";
import Navbar from "./components/NavBar";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./components/Pages/Home";
import Ajouter from "./components/Pages/Ajouter";
// import Accueil from "./components/Pages/Accueil";
import Employees from "./components/Pages/Employees";
// import Box from "@mui/material/Box";
import Login from "./components/Pages/Login";
import Direction from "./components/Pages/Direction";
import Employee from "./components/Pages/Employee";

const App = () => {
    return (
        <Router>
            <Navbar/>
            <div sx={{
                backgroundColor: "primary.contrastText",
                // display: "flex",
                // justifyContent: "center",
                minHeight: "calc(100vh - 80px)",
                p: 3,
            }} component={"div"}>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/Accueil" element={<Home/>}/>
                    <Route path="/Ajouter" element={<Ajouter/>}/>
                    <Route path="/Rechercher" element={<Employees/>}/>
                    <Route path="/direction" element={<Direction/>}/>
                    <Route path="/employee" element={<Employee/>}/>
                    <Route path="/Login" element={<Login/>}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
