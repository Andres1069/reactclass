import "./styles/envio.css";
import React, { useState } from "react";

export default function Envio() {
  const [id, setId] = useState("");
  const [character, setCharacter] = useState(null);
  const [error, setError] = useState("");

  const fetchCharacter = async () => {
    setError("");

    const parsedId = Number(id);
    if (!parsedId || parsedId <= 0) {
      setError("Por favor ingresa un ID válido (número mayor a 0).");
      setCharacter(null);
      return;
    }

    try {
      const url = `https://rickandmortyapi.com/api/character/${parsedId}`;
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`No se encontró el personaje con ID ${parsedId}.`);
      }

      const data = await response.json();
      setCharacter(data);
    } catch (err) {
      setError(err.message);
      setCharacter(null);
    }
  };

  return (
    <div className="envio">
      <h1 className="envio__titulo">Buscar personaje por ID</h1>
      <p className="envio__descripcion">Ingresa un número y presiona "Buscar".</p>

      <div className="envio__busqueda">
        <input
          type="number"
          value={id}
          onChange={(e) => setId(e.target.value)}
          className="envio__input"
          placeholder="Ej: 1"
        />
        <button onClick={fetchCharacter} className="envio__boton">Buscar</button>
      </div>

      {error && <p className="envio__error">{error}</p>}

      {character && (
        <div className="envio__card">
          <h2>{character.name}</h2>
          <img src={character.image} alt={character.name} className="envio__img" />

          <ul className="envio__lista">
            <li><strong>Estado:</strong> {character.status}</li>
            <li><strong>Especie:</strong> {character.species}</li>
            <li><strong>Género:</strong> {character.gender}</li>
            <li><strong>Origen:</strong> {character.origin?.name}</li>
            <li><strong>Ubicación:</strong> {character.location?.name}</li>
          </ul>
        </div>
      )}
    </div>
  );
}
