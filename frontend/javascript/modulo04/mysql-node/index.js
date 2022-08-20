(async () => {
  const database = require("./db");

  try {
    await database.sync();
    console.log("Banco de dados conectado com sucesso.")
  } catch (error) {
    console.log("Erro: falha ao conectar o banco de dados.")
  }
})();
