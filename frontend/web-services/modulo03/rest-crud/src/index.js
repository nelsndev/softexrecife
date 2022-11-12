const express = require("express");
const AlunoCRUD = require("./crud.js");

const alunoCRUD = new AlunoCRUD();

const app = express();
app.use(express.json()); // para receber body em json
app.listen(3000);

app.get("/alunos", (req, res) => {
  return res.status(200).json(alunoCRUD.readAll());
});

app.get("/alunos/:id", (req, res) => {
  const aluno = alunoCRUD.read(parseInt(req.params.id));
  res.status(200).json(aluno);
});

app.post("/alunos", (req, res) => {
  const { matricula, nome, coeficienteRendimento } = req.body;
  const aluno = {
    matricula: matricula,
    nome: nome,
    coeficienteRendimento: coeficienteRendimento,
  };
  alunoCRUD.create(aluno);
  res.status(201).send();
});

app.put("/alunos/:id", (req, res) => {
  const { matricula, nome, coeficienteRendimento } = req.body;
  const alunoAtualizado = {
    matricula: matricula,
    nome: nome,
    coeficienteRendimento: coeficienteRendimento,
  };
  alunoCRUD.update(parseInt(req.params.id), alunoAtualizado);
  res.status(200).send();
});

app.delete("/alunos/:id", (req, res) => {
  alunoCRUD.delete(parseInt(req.params.id));
  res.status(200).send();
});
