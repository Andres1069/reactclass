import { Link } from "react-router-dom";
import "./styles/navigation.css";

export default function Navigation() {
  return (
    <nav className="nav">
      <ul className="nav-list">
        <li><Link to="/">Presentación</Link></li>
        <li><Link to="/experiencia">Experiencia</Link></li>
        <li><Link to="/contacto">Contacto</Link></li>
        <li><Link to="/consumo">Consumo</Link></li>
        <li><Link to="/Envio">Envio</Link></li>
        <li><Link to="/episodios">Episodios</Link></li>
      </ul>
    </nav>
  );
}
