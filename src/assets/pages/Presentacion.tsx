import "./styles/presentacion.css";
import foto from "../img/foto.png";

export default function Presentacion() {
  return (
    <section className="presentacion">
      <div className="presentacion__container">

        {/* FOTO */}
        <div className="presentacion__imagen-wrapper">
          <img
            src={foto}
            alt="Foto de Raul Gonzalez"
            className="presentacion__imagen"
          />
        </div>

        {/* TEXTO */}
        <div className="presentacion__texto">
          <h1 className="presentacion__titulo">
            Hola, soy <span>Raul Gonzalez</span> 👋
          </h1>

          <h3 className="presentacion__subtitulo">
            Análisis de Datos • Mejora de Procesos • SQL • Python • Excel
          </h3>

          <p className="presentacion__descripcion">
            Soy estudiante de ADSO con experiencia en operaciones, logística y
            seguridad. Aplico mis conocimientos en SQL, MySQL y Power BI para
            transformar datos en soluciones que optimizan procesos y mejoran la
            eficiencia.
          </p>

          <div className="presentacion__botones">
            <a href="https://linkedin.com" className="btn btn-blue">LinkedIn</a>
            <a href="https://github.com" className="btn btn-dark">GitHub</a>
            <a href="#" className="btn btn-blue">Portafolio</a>
          </div>
        </div>
      </div>
    </section>
  );
}
