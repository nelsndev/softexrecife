const prompt = require("prompt-sync")();

const valor1 = parseInt(prompt("Valor1: "));
const valor2 = parseInt(prompt("Valor2: "));
const operador = prompt("Operador(+ - * /): ");

let resultado = 0;

switch (operador) {
  case "+":
    resultado = valor1 + valor2;
    break;
  case "-":
    resultado = valor1 - valor2;
    break;
  case "*":
    resultado = valor1 * valor2;
    break;
  case "/":
    resultado = divisao(valor1, valor2);
    break;
  default:
    resultado = "Operador inválido.";
    break;
}

function divisao(primeiroValor, segundoValor) {
  if (segundoValor === 0) return "Operação inválida. [divisão por 0]";

  if (primeiroValor % segundoValor === 0) {
    return primeiroValor / segundoValor;
  } else {
    const resultado = parseInt(primeiroValor / segundoValor);
    return `Resultado: ${resultado}; Sobra: ${primeiroValor % segundoValor}`;
  }
}

console.log(resultado);
