const alunos = require("./alunos");
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("<a href='/matriculados'>Matriculados</a> <span>&#x1F448;</span>");
});

app.get("/matriculados", (req, res) => {
  const matriculadosJSON = JSON.stringify(alunos.matriculados);
  res.send(matriculadosJSON);
});

const porta = 5000;

app.listen(porta);
