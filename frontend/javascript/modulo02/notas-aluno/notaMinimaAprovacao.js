const prompt = require("prompt-sync")();

const nota1 = parseFloat(prompt("Nota1: "));
const nota2 = parseFloat(prompt("Nota2: "));

const notaMinima = 21.0 - nota1 - nota2;

console.log("Nota mínima necessária para aprovação: " + notaMinima.toFixed(2));
