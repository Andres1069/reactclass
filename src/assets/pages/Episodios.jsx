import { useEffect, useState } from "react";
import "./styles/episodios.css";

export default function Episodios() {
  const [episodios, setEpisodios] = useState([]);
  const [pagina, setPagina] = useState(1);
  const [info, setInfo] = useState({});
  const [imagenes, setImagenes] = useState({}); // aquí guardamos las imágenes

  const cargarEpisodios = async (page = 1) => {
    const url = `https://rickandmortyapi.com/api/episode?page=${page}`;
    const res = await fetch(url);
    const data = await res.json();

    setEpisodios(data.results);
    setInfo(data.info);

    // Cargar imagen del primer personaje por episodio
    cargarImagenes(data.results);
  };

  const cargarImagenes = async (lista) => {
    const nuevasImagenes = {};

    // Para cada episodio
    for (let episodio of lista) {
      const personajeURL = episodio.characters[0]; // primer personaje
      const res = await fetch(personajeURL);
      const data = await res.json();
      nuevasImagenes[episodio.id] = data.image; // guardamos la imagen del personaje
    }

    setImagenes(nuevasImagenes);
  };

  useEffect(() => {
    cargarEpisodios(pagina);
  }, [pagina]);

  return (
    <div className="episodios">
      <h1 className="episodios__titulo">Episodios de Rick and Morty</h1>
      <p className="episodios__descripcion">
        Cada episodio muestra la imagen del primer personaje que aparece en él.
      </p>

      {/* GRID */}
      <div className="episodios__grid">
        {episodios.map((ep) => (
          <div key={ep.id} className="episodio__card">
            
            {/* Imagen automática */}
            {imagenes[ep.id] && (
              <img 
                src={imagenes[ep.id]} 
                alt={ep.name} 
                className="episodio__img"
              />
            )}

            <h2>{ep.name}</h2>
            <p><strong>Fecha de emisión:</strong> {ep.air_date}</p>
            <p><strong>Código:</strong> {ep.episode}</p>
          </div>
        ))}
      </div>

      {/* Paginación */}
      <div className="episodios__paginacion">
        <button disabled={!info.prev} onClick={() => setPagina(pagina - 1)}>
          ← Anterior
        </button>

        <span>Página {pagina}</span>

        <button disabled={!info.next} onClick={() => setPagina(pagina + 1)}>
          Siguiente →
        </button>
      </div>
    </div>
  );
}
