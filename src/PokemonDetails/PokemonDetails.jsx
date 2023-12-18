import React from 'react';
import { useParams } from 'react-router-dom';

const PokemonDetails = ({ pokemon }) => {
  const {  name, weight, height, moves } = pokemon;
  const { id } = useParams(); 
  const handleShowMoves = () => {
    // Gérer l'affichage des moves du Pokémon
    console.log('Moves:', moves);
  };

  return (
    <div className="pokemon-details">
      <p>ID: {id}</p>
      <p>Name: {name}</p>
      <p>Weight: {weight}</p>
      <p>Height: {height}</p>
      <button onClick={handleShowMoves}>Show Moves</button>
    </div>
  );
};

export default PokemonDetails;
