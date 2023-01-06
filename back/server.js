const express = require("express");
const cors = require("cors");

const app = express();

const db = require("./models");

db.sequelize
  .sync()
  .then(() => {
    console.log("Synced db.");
    // require("./models/init")(db);
    // console.log("init finished");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });
const corsOptions = {
  origin: "*",
  methods: ["POST", "GET", "DELETE", "UPDATE", "PUT"],
};
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions));
app.use(express.static(__dirname + "public"));
app.use("/public/uploads", express.static("./public/uploads"));
app.get("/", (req, res) => {
  res.json({ message: "Hey, it is workin'" });
});
require("./routes/Employees.routes")(app);
require("./routes/Agences.routes")(app);
require("./routes/Services.routes.Js")(app);
require("./routes/Directions.routes")(app);
require("./routes/Pilotages.routes")(app);

const PORT = process.env.REACT_APP_SERVER_PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
