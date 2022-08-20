const sz = require("sequelize");
const sequelize = new sz("db", "nelson", "1234", {
  dialect: "mysql",
  host: "192.168.0.150", // ip máquina virtual [Ubuntu Server 22.04]
});

module.exports = sequelize;
