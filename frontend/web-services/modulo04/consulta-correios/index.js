console.log("\n\n############ Consulta CEP ############\n");
const { consultarCep } = require("correios-brasil");
const cep = "50030310";
consultarCep(cep).then((res) => {
  console.log(res);
});

console.log("\n\n############ Calcula Preço ############\n");
const { calcularPrecoPrazo } = require("correios-brasil");
const args = {
  sCepOrigem: "81200100",
  sCepDestino: "21770200",
  nVlPeso: "1",
  nCdFormato: "1",
  nVlComprimento: "20",
  nVlAltura: "20",
  nVlLargura: "20",
  nCdServico: ["04014", "04510"],
  nVlDiametro: "0",
};
calcularPrecoPrazo(args).then((res) => {
  console.log(res);
});

console.log("\n\n############ Rastreamento ############\n");
const { rastrearEncomendas } = require("correios-brasil");
const codRastreio = ["NA338343825BR"];
rastrearEncomendas(codRastreio).then((res) => {
  console.log(res[0].eventos.reverse());
});
