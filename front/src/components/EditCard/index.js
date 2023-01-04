import { useEffect, useState } from "react";
import { Button, Grid, TextField } from "@mui/material";
import { Save } from "@mui/icons-material";
import axios from "../../axios";
import Autocomplete from "@mui/material/Autocomplete";
import "./editcard.css";

const EditCard = ({ employee, setEditMode, setupdated }) => {
  const [name, setName] = useState(employee.name);
  const [surname, setSurname] = useState(employee.surname);
  const [email, setEmail] = useState(employee.email);
  const [mobilefixe, setMobilefixe] = useState(employee.mobilefixe);
  const [mobile, setMobile] = useState(employee.mobile);
  const [image, setImage] = useState(employee.image);
  const [inputAgence, setInputAgence] = useState(employee?.agence?.city);
  const [inputService, setInputService] = useState(employee?.service?.name);
  const [inputPilotage, setInputPilotage] = useState(employee?.pilotage?.name);
  const [inputDirection, setInputDirection] = useState(
    employee?.direction?.name
  );

  const [agence, setAgence] = useState(employee?.agence);
  const [service, setService] = useState(employee?.service);
  const [pilotage, setPilotage] = useState(employee?.pilotage);
  const [direction, setDirection] = useState(employee?.direction);
  const [agences, setAgences] = useState([]);
  const [services, setServices] = useState([]);
  const [pilotages, setPilotages] = useState([]);
  const [directions, setDirections] = useState([]);

  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .put("/employees/" + employee.id, {
        name: name,
        surname: surname,
        email: email,
        mobilefixe: mobilefixe,
        mobile: mobile,
        AgenceId: agence?.id ?? "",
        PilotageId: pilotage?.id ?? "",
        DirectionId: direction?.id ?? "",
        ServicesActiviteId: service?.id ?? "",

        image: image,
        actif: true,
      })
      .then((res) => {
        console.log("Updated");
        setupdated((prev) => prev + 1);
      })
      .catch((e) => console.log(e));
    setEditMode(false);
  };

  useEffect(() => {
    axios.get("/agences").then((res) => setAgences(res.data));

    axios.get("/services").then((res) => setServices(res.data));
    axios.get("/pilotages").then((res) => setPilotages(res.data));

    axios.get("/directions").then((res) => setDirections(res.data));
  }, []);
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
      .then((res) => setService(res.data));
  }, [employee]);

  return (
    <div className="popup">
      <div className="popup_box">
        <Grid
          container
          spacing={2}
          sx={{ borderRadius: 3, p: 2, pl: 1, backgroundColor: "#ffffff" }}
        >
          <Grid item xs={12}>
            <TextField
              type="surname"
              placeholder="Entrez le Prénom"
              label="Prénom"
              variant="outlined"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              type="name"
              placeholder="Entrez le Nom"
              label="Nom"
              variant="outlined"
              value={name}
              onChange={(e) => setName(e.target.value)}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              type="email"
              placeholder="Entrez l'email "
              label="Email"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              type="tel"
              placeholder="Entrez le numéro de téléphone fixe"
              label="Numéro fixe"
              variant="outlined"
              value={mobilefixe}
              onChange={(e) => setMobilefixe(e.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              type="tel"
              placeholder="Entrez le numéro mobile "
              label="Numéro mobile"
              variant="outlined"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              fullWidth
            />
          </Grid>

          <Grid item xs={12}>
            <Autocomplete
              value={agence}
              onChange={(e, nv) => setAgence(nv)}
              inputValue={inputAgence}
              onInputChange={(e, nv) => setInputAgence(nv)}
              disablePortal
              options={agences?.map((a) => {
                return { label: a.city, ...a };
              })}
              renderInput={(params) => <TextField {...params} label="Agence" />}
            />
          </Grid>
          <Grid item xs={12}>
            <Autocomplete
              value={pilotage}
              onChange={(e, nv) => setPilotage(nv)}
              inputValue={inputPilotage}
              onInputChange={(e, nv) => setInputPilotage(nv)}
              disablePortal
              options={pilotages?.map((s) => {
                return { label: s.name, ...s };
              })}
              renderInput={(params) => (
                <TextField {...params} label="Pilotage" />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Autocomplete
              value={direction}
              onChange={(e, nv) => setDirection(nv)}
              inputValue={inputDirection}
              onInputChange={(e, nv) => setInputDirection(nv)}
              disablePortal
              options={directions?.map((s) => {
                return { label: s.name, ...s };
              })}
              renderInput={(params) => (
                <TextField {...params} label="Direction" />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Autocomplete
              value={service}
              onChange={(e, nv) => setService(nv)}
              inputValue={inputService}
              onInputChange={(e, nv) => setInputService(nv)}
              disablePortal
              options={services?.map((s) => {
                return { label: s.name, ...s };
              })}
              renderInput={(params) => (
                <TextField {...params} label="Service" />
              )}
            />
          </Grid>

          {/* <Grid item xs={12}>
                <input
                    name="upload-photo"
                    type="file"
                    placeholder="Entrez le lien de l'image"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                />
            </Grid> */}

          <Grid item xs={6}>
            <Button
              onClick={onSubmit}
              variant="contained"
              endIcon={<Save fontSize={"inherit"} />}
            >
              Mettre à jour
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button onClick={() => setEditMode(false)} variant="contained">
              Close
            </Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default EditCard;
