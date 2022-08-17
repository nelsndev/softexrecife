function exibe() {
  const nome = "fulano";
  const sobrenome = "de tal";
  console.log(`${concatena(nome, sobrenome)} tem ou fará ${calculaIdade(1970)} anos.`);
}

function concatena(nome, sobrenome) {
  return (nome + " " + sobrenome).toLocaleUpperCase();
}

const calculaIdade = (anoNascimento) => {
  return new Date().getFullYear() - anoNascimento;
};

exibe();
