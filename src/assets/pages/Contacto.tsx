import "./styles/contacto.css";
import { FaInstagram, FaLinkedin, FaTwitterSquare } from "react-icons/fa";

export default function Contacto() {
  return (
    <section className="contacto-container">
      <h2 className="contacto-title">Contacto</h2>

      <div className="contacto-card">

        <h1 className="hola">
          Hola, <span>bienvenido 🌍</span>
        </h1>

        <p className="descripcion">
          Aquí encontrarás mis datos y redes personales. ¡Estoy disponible para oportunidades
          profesionales, proyectos y colaboraciones!
        </p>

        {/* Redes Sociales ------------------------------------------------- */}
        <div className="contacto-icons">
          <a href="https://www.instagram.com" target="_blank">
            <FaInstagram className="icon" />
          </a>

          <a href="https://www.linkedin.com/in/raul-gonzalez-73426b275" target="_blank">
            <FaLinkedin className="icon" />
          </a>

          <a href="https://twitter.com" target="_blank">
            <FaTwitterSquare className="icon" />
          </a>
        </div>

        {/* Información ---------------------------------------------------- */}
        <p className="info">
          📍 Bogotá, Colombia  
          <br />
          📧 raulandresgonzalezcifuentes@gmail.com  
          <br />
          📱 324 431 4271
        </p>

        {/* Botón CV -------------------------------------------------------- */}
        <a download href="#">
          <button className="btn-cv">Descargar CV</button>
        </a>

      </div>
    </section>
  );
}
