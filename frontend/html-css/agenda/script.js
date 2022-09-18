const geradorId = {
  id: 0,
  gera: function () {
    return ++this.id;
  },
};

document.getElementById("btn-adicionar").onclick = () => {
  const id = String(geradorId.gera());

  const colId = document.createElement("td");
  colId.textContent = id;
  
  const colNome = document.createElement("td");
  colNome.textContent = document.getElementById("nome").value;
  
  const colEmail = document.createElement("td");
  colEmail.textContent = document.getElementById("email").value;
  
  const colTel = document.createElement("td");
  colTel.textContent = document.getElementById("tel").value;
  
  const colPro = document.createElement("td");
  colPro.textContent = document.getElementById("profissao").value;
  
  const colBotao = document.createElement("button");
  colBotao.textContent = "Remover";
  colBotao.onclick = () => {
    const linha = document.getElementById(id);
    document.querySelector("table").removeChild(linha);
  };

  const linha = document.createElement("tr");
  linha.setAttribute("id", id);
  linha.appendChild(colId);
  linha.appendChild(colNome);
  linha.appendChild(colEmail);
  linha.appendChild(colTel);
  linha.appendChild(colPro);
  linha.appendChild(colBotao);

  const table = document.querySelector("table");
  table.appendChild(linha);
};
