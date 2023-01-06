const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    port: dbConfig.PORT,
    dialect: dbConfig.dialect,
    operatorsAliases: 0,

    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle,
    },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.agences = require("./Agences.model.js")(sequelize, Sequelize);
db.directions = require("./Directions.model.js")(sequelize, Sequelize);
db.employees = require("./Employees.model.js")(sequelize, Sequelize);
db.pilotages = require("./Pilotages.model.js")(sequelize, Sequelize);
db.services = require("./Services.model.js")(
    sequelize,
    Sequelize
);
db.employees.hasOne(db.agences);
db.agences.hasMany(db.employees);

db.employees.belongsTo(db.services);
db.employees.belongsTo(db.pilotages);
db.pilotages.hasMany(db.employees);
db.employees.belongsTo(db.directions);
db.directions.hasMany(db.employees);
db.directions.hasMany(db.services);
db.services.belongsTo(db.directions);
db.pilotages.belongsToMany(db.services, {
    through: "Associer" /* options */,
});
db.services.belongsToMany(db.pilotages, {
    through: "Associer" /* options */,
});

db.employees.hasOne(db.directions, {
    through: "Attacher" /* options */,
});
db.directions.belongsToMany(db.employees, {
    through: "Attacher" /* options */,
});

db.directions.hasOne(db.employees);
module.exports = db;
