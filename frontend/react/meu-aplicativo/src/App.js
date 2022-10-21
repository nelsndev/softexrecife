import logo from "./logo.svg";
import "./App.css";
import Mensagem from "./Mensagem";
import Contador from "./Contador";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Mensagem titulo="Bem-vind@ ao React!" />
        <Contador />
      </header>
    </div>
  );
}

export default App;
