// ListaDePersonajes.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../css/index.css";

const ListaDePersonajes = ({ searchTerm }) => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5001/simpsons');
        setCharacters(response.data);
      } catch (error) {
        console.error('Error al obtener datos:', error);
      }
    };

    fetchData();
  }, []);

  const filteredCharacters = characters.filter((character) =>
    character.nombre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='container-lista-personajes'>
      <div className="lista-personajes">
        <h1>Lista de personajes</h1>
        <ul>
          {filteredCharacters.map((character) => (
            <li key={character._id} className="personaje">
              <img className='img-lista-personajes' src={character.foto} alt="imagen de simpson" />
              {character.nombre} {character.apellido}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ListaDePersonajes;

