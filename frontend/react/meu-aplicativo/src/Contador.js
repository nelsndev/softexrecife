import { useState } from "react";
import "./Contador.css";

function Contador() {
  let [contador, setContador] = useState(0);
  return (
    <>
      <p className="Contador-paragrafo">
        Contagem: <span className="Contador-contagem">{contador}</span>
      </p>
      <button
        className="Contador-botao"
        onClick={() => setContador(++contador)}
      >
        Contar
      </button>
    </>
  );
}

export default Contador;
