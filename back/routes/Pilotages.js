module.exports = (app) => {
    const Pilotages = require("../controllers/Pilotages.controller.js");
    const router = require("express").Router();
    router.post("/", Pilotages.create);
    router.get("/", Pilotages.findAll);
    router.get("/published", Pilotages.findAllPublished);
    router.get("/:id", Pilotages.findOne);
    router.put("/:id", Pilotages.update);
    router.delete("/:id", Pilotages.delete);
    router.delete("/", Pilotages.deleteAll);
    app.use("/api/pilotages", router);
};
