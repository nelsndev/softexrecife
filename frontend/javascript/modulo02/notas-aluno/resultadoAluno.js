const prompt = require("prompt-sync")();

const nota1 = parseFloat(prompt("Nota1: "));
const nota2 = parseFloat(prompt("Nota2: "));
const nota3 = parseFloat(prompt("Nota3: "));

const media = (nota1 + nota2 + nota3) / 3;
const resultado = (media >= 7.0) ? "Aprovado" : "Reprovado";
console.log(resultado);
