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
  db.tags
    .bulkCreate([
      { id: 1, name: "Téléphonie" },
      { id: 2, name: "Route" },
      { id: 3, name: "Grand Compte" },
      // { id: 4, name: "Téléphonie 1" },
      // { id: 5, name: "Route 1" },
      // { id: 6, name: "Grand Compte 1" },
      // { id: 7, name: "Téléphonie 2" },
      // { id: 8, name: "Route 2" },
      // { id: 9, name: "Grand Compte 2" },
    ])
    .then(() => console.log("Tag data have been saved"));

  db.employees
  .bulkCreate([
    {id:1,name:"CHOUKROUNA",surname:"Simona",email: "simochou@live.fr",mobilefixe:"0666472258",mobile:"0666472258",image:"Adli_Dounia-1674503020806.jpeg",active:1,AgenceId:1,ServicesActiviteId:18,PilotageId:null,DirectionId : 1},
    {id:2,name:"CHOUKROUNZ",surname:"Simonz",email: "sionchou@live.fr",mobilefixe:"0666472258",mobile:"0666472258",image:"Adli_Dounia-1674503020806.jpeg",active:1,AgenceId:1,ServicesActiviteId:18,PilotageId:null,DirectionId : 2},
    {id:3,name:"CHOUKROUNE",surname:"Simone",email: "smonchou@live.fr",mobilefixe:"0666472258",mobile:"0666472258",image:"Adli_Dounia-1674503020806.jpeg",active:1,AgenceId:1,ServicesActiviteId:18,PilotageId:null,DirectionId : 3},
    {id:4,name:"CHOUKROUNR",surname:"Simonr",email: "imonchou@live.fr",mobilefixe:"0666472258",mobile:"0666472258",image:"Adli_Dounia-1674503020806.jpeg",active:1,AgenceId:1,ServicesActiviteId:18,PilotageId:null,DirectionId : 4},
    {id:5,name:"CHOUKROUNT",surname:"Simont",email: "simnchou@live.fr",mobilefixe:"0666472258",mobile:"0666472258",image:"Adli_Dounia-1674503020806.jpeg",active:1,AgenceId:1,ServicesActiviteId:17,PilotageId:null,DirectionId : null},
    {id:6,name:"CHOUKROUNY",surname:"Simony",email: "simnchou@live.fr",mobilefixe:"0666472258",mobile:"0666472258",image:"Adli_Dounia-1674503020806.jpeg",active:1,AgenceId:1,ServicesActiviteId:null,PilotageId:1,DirectionId : null},
    {id:7,name:"CHOUKROUNU",surname:"Simonu",email: "simonhou@live.fr",mobilefixe:"0666472258",mobile:"0666472258",image:"Adli_Dounia-1674503020806.jpeg",active:1,AgenceId:1,ServicesActiviteId:null,PilotageId:2,DirectionId : null},
    {id:8,name:"CHOUKROUNI",surname:"Simoni",email: "simonchu@live.fr",mobilefixe:"0666472258",mobile:"0666472258",image:"Adli_Dounia-1674503020806.jpeg",active:1,AgenceId:1,ServicesActiviteId:null,PilotageId:3,DirectionId : null},
    {id:9,name:"CHOUKROUNO",surname:"Simono",email: "simoncho@live.fr",mobilefixe:"0666472258",mobile:"0666472258",image:"Adli_Dounia-1674503020806.jpeg",active:1,AgenceId:1,ServicesActiviteId:null,PilotageId:4,DirectionId : null},
    {id:10,name:"CHOUKROUNP",surname:"Simonp",email: "simoncho@live.fr",mobilefixe:"0666472258",mobile:"0666472258",image:"Adli_Dounia-1674503020806.jpeg",active:1,AgenceId:1,ServicesActiviteId:1,PilotageId:5,DirectionId : 1},
    {id:11,name:"CHOUKROUNQ",surname:"Simonq",email: "simonchu@live.fr",mobilefixe:"0666472258",mobile:"0666472258",image:"Adli_Dounia-1674503020806.jpeg",active:1,AgenceId:1,ServicesActiviteId:2,PilotageId:null,DirectionId : 1},
    {id:12,name:"CHOUKROUNR",surname:"Simons",email: "simonhou@live.fr",mobilefixe:"0666472258",mobile:"0666472258",image:"Adli_Dounia-1674503020806.jpeg",active:1,AgenceId:1,ServicesActiviteId:3,PilotageId:null,DirectionId : 1},
    {id:13,name:"CHOUKROUNS",surname:"Simond",email: "simnchou@live.fr",mobilefixe:"0666472258",mobile:"0666472258",image:"Adli_Dounia-1674503020806.jpeg",active:1,AgenceId:1,ServicesActiviteId:4,PilotageId:null,DirectionId : 1},

  ])
  .then(() => console.log("Employee data have been saved"));
  db.services_direction
  .bulkCreate([
      {id:1,DirectionId:1,ServicesActiviteId:18},
      {id:2,DirectionId:2,ServicesActiviteId:18},
      {id:3,DirectionId:3,ServicesActiviteId:18},
      {id:4,DirectionId:4,ServicesActiviteId:18},
      {id:6,DirectionId:1,ServicesActiviteId:1},
      {id:7,DirectionId:1,ServicesActiviteId:2},
      {id:8,DirectionId:1,ServicesActiviteId:3},
      {id:9,DirectionId:1,ServicesActiviteId:4},
      
      {id:10,DirectionId:1,ServicesActiviteId:6},
      {id:11,DirectionId:2,ServicesActiviteId:7},
      {id:12,DirectionId:3,ServicesActiviteId:8},
      {id:13,DirectionId:3,ServicesActiviteId:9},
      {id:14,DirectionId:3,ServicesActiviteId:10},
      {id:15,DirectionId:3,ServicesActiviteId:11},
      
      {id:16,DirectionId:4,ServicesActiviteId:12},
      {id:17,DirectionId:4,ServicesActiviteId:13},
      {id:18,DirectionId:4,ServicesActiviteId:14},
      {id:19,DirectionId:4,ServicesActiviteId:15},
      {id:20,DirectionId:4,ServicesActiviteId:16},
      {id:21,DirectionId:1,ServicesActiviteId:5},
  ])
  .then(() => console.log("Services_Directions data have been saved"));

  
};
