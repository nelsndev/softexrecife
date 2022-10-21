import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Contagem from "./Contagem";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contagem" element={<Contagem />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
