import logo from "./logo.svg";
import "./App.css";
import Mensagem from "./Mensagem";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Mensagem/>
      </header>
    </div>
  );
}

export default App;
