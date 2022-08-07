const prompt = require("prompt-sync")();

const OPCAO_INVALIDA = 0;
const OPERACAO_SUCESSO = 1;

const repositorio = new Map(); // Onde ficarão armazenados os contatos

const geradorDeId = {
  id: 1,
  gera: function() {
    let id = this.id;
    this.id++;
    return id;
  }
};

let continua = true;
while (continua) {
  switch (cabecalho()) {
    case 1:
      adiciona(criaContato());
      mensagem(OPERACAO_SUCESSO);
      break;
    case 2:
      le(id());
      mensagem();
      break;
    case 3:
      atualiza(id(), criaContato());
      mensagem(OPERACAO_SUCESSO);
      break;
    case 4:
      deleta(id());
      mensagem(OPERACAO_SUCESSO);
      break;
    case 0:
      continua = false;
      break;
    default:
      mensagem(OPCAO_INVALIDA);
  }
}

function cabecalho() {
  console.log("\n1. Adicionar");
  console.log("2. Ler");
  console.log("3. Atualizar");
  console.log("4. Deletar");
  console.log("0. Sair\n");
  return parseInt(prompt("Opção: "));
}

// CREATE
function adiciona(contato) {
  repositorio.set(geradorDeId.gera(), contato);
}

function criaContato() {
  console.log();
  const nome = prompt("Nome: ");
  const celular = prompt("Celular: ");
  const email = prompt("Email: ");

  const contato = {
    nome: nome,
    celular: celular,
    email: email,
  };

  return contato;
}

// READ
function le(id) {
  const contato = repositorio.get(id);
  console.log(`\nContato[id=${id}]`);
  console.log("  Nome: " + contato.nome);
  console.log("  Celular: " + contato.celular);
  console.log("  Email: " + contato.email);
}

function id() {
  console.log();
  let id = parseInt(prompt("Id: "));

  while (!repositorio.has(id)) {
    console.log(`\nO id informado [${id}] não existe. Informe um id válido.\n`);
    id = parseInt(prompt("Id: "));
  }

  return id;
}

// UPDATE
function atualiza(id, contato) {
  repositorio.set(id, contato);
}

// DELETE
function deleta(id) {
  repositorio.delete(id);
}

function mensagem(...codigo) {
  console.log();

  frasePadrao = "Pressione ENTER para continuar... ";
  fraseSucesso = "Operação realizada com sucesso. ";
  fraseInvalida = "Opção inválida. ";

  if (codigo[0] === 0) {
    prompt(fraseInvalida + frasePadrao);
  } else if (codigo[0] === 1) {
    prompt(fraseSucesso + frasePadrao);
  } else {
    prompt(frasePadrao);
  }

  console.clear();
}
