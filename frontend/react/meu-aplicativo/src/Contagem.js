import logo from "./logo.svg";
import { Link } from "react-router-dom";
import Contador from "./Contador";
import "./Contagem.css";

function Contagem() {
  return (
    <div className="Contagem">
      <header className="Contagem-header">
        <img src={logo} className="Contagem-logo" alt="logo" />
        <Contador />
        <div className="Contagem-link-container">
          <Link className="Contagem-link" to="/">
            Página Inicial
          </Link>
        </div>
      </header>
    </div>
  );
}

export default Contagem;
