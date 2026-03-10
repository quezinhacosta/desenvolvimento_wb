import './App.css'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Atividade210 from "./pasta1/Atividade210";
import Atividade231 from "./pasta2/Atividade231";
import Atividade246 from "./pasta3/Atividade246";
import Atividade263 from "./pasta4/Atividade263";

function App() {
  return (
    <BrowserRouter>

      <h1>atividade</h1>
      <h2>Fundo e Bordas / Margem, padding, largura e altura / Fontes / Transp.</h2>

      <hr />

      <div className="botoes">
        <Link to="/210">atividade 210</Link>
        <Link to="/231">atividade 231</Link>
        <Link to="/246">atividade 246</Link>
        <Link to="/263">atividade 263</Link>
      </div>

      <hr />

      <Routes>
        <Route path="/" element={<h3>Escolha uma atividade</h3>} />
        <Route path="/210" element={<Atividade210 />} />
        <Route path="/231" element={<Atividade231 />} />
        <Route path="/246" element={<Atividade246 />} />
        <Route path="/263" element={<Atividade263 />} />
      </Routes>

      <footer>
        feito integralmente pela aluna <strong>Quezia Costa</strong>
      </footer>

    </BrowserRouter>
  )
}

export default App