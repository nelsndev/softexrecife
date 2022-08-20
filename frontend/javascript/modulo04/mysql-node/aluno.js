const sz = require("sequelize");
const database = require("./db");

const aluno = database.define("aluno", {
  id: {
    type: sz.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },

  nome: {
    type: sz.STRING,
    allowNull: false,
  },

  matricula: {
    type: sz.STRING,
    allowNull: false,
    unique: true,
  },

  media: {
    type: sz.DOUBLE,
  },
});

module.exports = aluno;
