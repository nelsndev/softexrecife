import logo from "./logo.svg";
import "./Home.css";
import Mensagem from "./Mensagem";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="Home">
      <header className="Home-header">
        <img src={logo} className="Home-logo" alt="logo" />
        <Mensagem titulo="Bem-vind@ ao React!" />
        <div className="Home-link-container">
        <Link className="Home-link" to="/contagem">Contagem</Link>
      </div>
      </header>
    </div>
  );
}

export default Home;
