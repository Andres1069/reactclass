import { useEffect, useState } from "react";
import "./styles/episodios.css";

interface Episode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
}

interface Info {
  prev: string | null;
  next: string | null;
}

export default function Episodios() {
  const [episodios, setEpisodios] = useState<Episode[]>([]);
  const [pagina, setPagina] = useState<number>(1);
  const [info, setInfo] = useState<Info | null>(null);
  const [imagenes, setImagenes] = useState<Record<number, string>>({});

  const cargarImagenes = async (lista: Episode[]): Promise<void> => {
    const nuevasImagenes: Record<number, string> = {};

    for (const episodio of lista) {
      if (episodio.characters && episodio.characters.length > 0) {
        const personajeURL = episodio.characters[0];
        try {
          const res = await fetch(personajeURL);
          const data = await res.json();
          nuevasImagenes[episodio.id] = data.image;
        } catch (error) {
          console.error(`Error al cargar personaje para episodio ${episodio.id}:`, error);
        }
      }
    }

    setImagenes(nuevasImagenes);
  };

  const cargarEpisodios = async (page: number = 1): Promise<void> => {
    try {
      const url = `https://rickandmortyapi.com/api/episode?page=${page}`;
      const res = await fetch(url);
      const data = await res.json();

      setEpisodios(data.results);
      setInfo(data.info);

      await cargarImagenes(data.results);
    } catch (error) {
      console.error("Error al cargar episodios:", error);
    }
  };

  useEffect(() => {
    cargarEpisodios(pagina);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pagina]);

  return (
    <div className="episodios">
      <h1 className="episodios__titulo">Episodios de Rick and Morty</h1>
      <p className="episodios__descripcion">
        Cada episodio muestra la imagen del primer personaje que aparece en él.
      </p>

      <div className="episodios__grid">
        {episodios.map((ep) => (
          <div key={ep.id} className="episodio__card">
            
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

      {info && (
        <div className="episodios__paginacion">
          <button disabled={!info.prev} onClick={() => setPagina(pagina - 1)}>
            ← Anterior
          </button>

          <span>Página {pagina}</span>

          <button disabled={!info.next} onClick={() => setPagina(pagina + 1)}>
            Siguiente →
          </button>
        </div>
      )}
    </div>
  );
}