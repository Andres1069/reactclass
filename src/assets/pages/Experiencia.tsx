import "./styles/experiencia.css";

export default function Experiencia() {
  return (
    <section className="experiencia-container">

      <h2 className="title">Experiencia Profesional</h2>

      {/* Tarjeta ContactPoint 360 */}
      <div className="card">
        <h3>Administrative Assistant – ContactPoint 360</h3>
        <span className="date">Abril 2024 – Actualidad</span>

        <ul className="list">
          <li>Lideré el control de accesos, permisos y flujos de personal en dos instalaciones simultáneamente.</li>
          <li>Administré el ciclo completo de paz y salvo y recuperación de activos.</li>
          <li>Coordiné logística de transporte nocturno con proveedores clave.</li>
          <li>Desarrollé proyecciones de personal y elementos de acceso para nuevos ingresos.</li>
          <li>Gestioné presupuesto de transporte y optimización de costos.</li>
          <li>Supervisé legalización de facturas y gestión de proveedores.</li>
          <li>Participé en la implementación de políticas internas relacionadas con transporte.</li>
        </ul>
      </div>

      {/* Tarjeta Aprendiz */}
      <div className="card">
        <h3>Aprendiz en Prácticas – ContactPoint 360</h3>
        <span className="date">Julio 2023 – Abril 2024</span>

        <ul className="list">
          <li>Instalación y preparación de equipos para teletrabajo (WFH).</li>
          <li>Control de activos e inactivos de la compañía.</li>
          <li>Gestión de permisos y accesos para la apertura de un nuevo site.</li>
          <li>Control del parqueadero en dos sedes de la compañía.</li>
        </ul>
      </div>

    </section>
  );
}
