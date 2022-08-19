const aluno = {
  nome: "Nelson",
  matricula: "12345",
  media: 3.5,
};

const frutas = ["banana", "laranja", "maçã"];

function listaPropriedades(objeto) {
  const propriedades = [];
  for (const propriedade in objeto) propriedades.push(propriedade);
  return propriedades;
}

const listaElementos = (array) => {
  const elementos = [];
  for (const elemento of array) elementos.push(elemento);
  return elementos;
};
