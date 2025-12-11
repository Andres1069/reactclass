import { useState } from "react";
import { Link } from "react-router-dom";
import "./styles/navigation.css";

export default function Navigation() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const toggleMenu = () => {
    setMenuAbierto(!menuAbierto);
  };

  const cerrarMenu = () => {
    setMenuAbierto(false);
  };

  return (
    <>
      {/* Botón hamburguesa */}
      <button 
        className={`hamburger ${menuAbierto ? 'active' : ''}`}
        onClick={toggleMenu}
        aria-label="Menú"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Menú de navegación */}
      <nav className={`nav ${menuAbierto ? 'nav--abierto' : ''}`}>
        <ul className="nav-list">
          <li><Link to="/" onClick={cerrarMenu}>Inicio</Link></li>
          <li><Link to="/experiencia" onClick={cerrarMenu}>Experiencia</Link></li>
          <li><Link to="/consumo" onClick={cerrarMenu}>Personajes</Link></li>
          <li><Link to="/envio" onClick={cerrarMenu}>Buscar</Link></li>
          <li><Link to="/episodios" onClick={cerrarMenu}>Episodios</Link></li>
          <li><Link to="/contacto" onClick={cerrarMenu}>Contacto</Link></li>
        </ul>
      </nav>

      {/* Overlay */}
      {menuAbierto && (
        <div className="overlay" onClick={cerrarMenu}></div>
      )}
    </>
  );
}