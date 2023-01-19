module.exports = {
  HOST: "localhost", //process.env.MYSQL_HOST_IP
  PORT: 3306,
  USER: "root", //process.env.MYSQL_USER
  PASSWORD: "Zipzip12309", //process.env.MYSQL_PASSWORD,
  DB: "trombinoscope", //process.env.MYSQL_DATABASE,
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
