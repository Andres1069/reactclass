import { useEffect, useState } from "react";
import "./styles/consumo.css";

// Define la interfaz del personaje
interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  image: string;
}

// Primero defines el componente PersonajesLista
function PersonajesLista() {
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => setCharacters(data.results))
      .catch((error) => console.error("Error al cargar personajes:", error));
  }, []);

  return (
    <div className="cards-container">
      {characters.map((c) => (
        <div key={c.id} className="card">
          <img src={c.image} alt={c.name} className="card__img" />

          <div className="card__contenido">
            <h3>{c.name}</h3>
            <p><strong>Estado:</strong> {c.status}</p>
            <p><strong>Especie:</strong> {c.species}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

// Luego defines el componente principal que lo usa
export default function Consumo() {
  return (
    <div className="consumo">
      <h1 className="consumo__titulo">Personajes de Rick and Morty</h1>

      <p className="consumo__descripcion">
        Esta sección consume la API oficial de Rick and Morty y muestra información en tiempo real.
      </p>

      <PersonajesLista />
    </div>
  );
}