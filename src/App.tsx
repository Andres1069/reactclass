import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./assets/components/Header";
import Presentacion from "./assets/pages/Presentacion";
import Experiencia from "./assets/pages/Experiencia";
import Contacto from "./assets/pages/Contacto";
import Consumo from "./assets/pages/Consumo";
import Envio from "./assets/pages/Envio";
import Episodios from "./assets/pages/Episodios";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      {/* Header fijo en todas las páginas */}
      <Header />

      <main className="main-container">
        <Routes>
          <Route path="/" element={<Presentacion />} />
          <Route path="/experiencia" element={<Experiencia />} />
          <Route path="/contacto" element={<Contacto />} />

          {/* Nueva ruta para el consumo de la API */}
          <Route path="/consumo" element={<Consumo />} />
          <Route path="/Envio" element={<Envio />} />
          <Route path="/episodios" element={<Episodios />} />

          {/* Ruta 404 */}
          <Route path="*" element={<h2>Página no encontrada</h2>} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
