module.exports = {
  HOST: "localhost", //process.env.MYSQL_HOST_IP
  PORT: 3306,
  USER: "app_name", //process.env.MYSQL_USER
  PASSWORD: "superSecretPassword!123", //process.env.MYSQL_PASSWORD,
  DB: "trombinoscope", //process.env.MYSQL_DATABASE,
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
