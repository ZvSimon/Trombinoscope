module.exports = (db) => {
  db.agences
    .bulkCreate([
      { id: 1, city: "DMAX SUD-OUEST (TOULOUSE)" },
      { id: 2, city: "DMAX HDF (ST AMAND)" },
      { id: 3, city: "DMAX IDF (CLICHY) " },
      { id: 4, city: "DMAX IDF (ELANCOURT et CONCHES)" },
      { id: 5, city: "DMAX SUD OUEST (MARSEILLE)" },
      { id: 6, city: "DMAX IDF (LYON)" },
      { id: 7, city: "DMAX SUD OUEST (AGEN)" },
      { id: 8, city: "DMAX SUD OUEST (GRENOBLE)" },
      { id: 9, city: "DMAX SUD OUEST (GRENADE)" },
      { id: 10, city: "DMAX SUD OUEST (MONTPELLIER et PACA)" },
    ])
    .then(() => console.log("Agences data have been saved"));

  db.directions
    .bulkCreate([
      {
        id: 1,
        name: "Direction administrative et financière France ",
      },
      { id: 2, name: "Direction commerciale France" },
      { id: 3, name: "Direction des opérations France" },
      { id: 4, name: "Direction des RHFrance" },
    ])
    .then(() => console.log("Directions data have been saved"));

  db.pilotages
    .bulkCreate([
      {
        id: 1,
        name: "Direction  ",
      },
      { id: 2, name: "DAF" },
      { id: 3, name: "QHSE" },
      { id: 4, name: "Systèmes d’informations" },
      { id: 5, name: "Commerce" },
      { id: 6, name: "Infrast. & Envir. de travail" },
      { id: 7, name: "Exploitation" },
      { id: 8, name: "Ressources Humaines" },
    ])
    .then(() => console.log("Pilotages data have been saved"));

  db.services
    .bulkCreate([
      { id: 1, name: "Resp. comptable groupe " },
      { id: 2, name: "Gestionnaires ADV" },
      { id: 3, name: "Contrôleurs de gestion" },
      { id: 4, name: "Directeur Achats " },
      { id: 5, name: "DSI " },
      { id: 6, name: "Commerciaux DMAX IDF/AURA,  DMAX SO et DMAX HDF" },
      { id: 7, name: "Responsables d’exploitations" },
      { id: 8, name: "Coordinateurs" },
      { id: 9, name: "Chefs d’équipes / Contremaîtres" },
      { id: 10, name: "Déménageurs" },
      { id: 11, name: "Chargée SIAE" },
      { id: 12, name: "Gestionnaires RH" },
      { id: 13, name: "Responsable paie" },
      { id: 14, name: "Responsable QHSE" },
      { id: 15, name: "Gestionnaire parc roulant" },
      { id: 16, name: "Gestion immobilière" },
      { id: 17, name: "PDG DMAX France" },
      { id: 18, name: "Chef" },
    ])
    .then(() => console.log("Services data have been saved"));
};
