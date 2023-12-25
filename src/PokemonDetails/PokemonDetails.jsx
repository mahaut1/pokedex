// PokemonDetails.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const PokemonDetails = ({ filteredPokemons }) => {
  const { id } = useParams();
  const pokemon = filteredPokemons.find(pokemon => pokemon.id === parseInt(id));

  if (!pokemon) {
    return <div>Pokemon not found</div>;
  }

  const { name, weight, height, moves, image, types } = pokemon;

  const handleShowMoves = () => {
    console.log('Moves:', moves);
  };

  return (
    <div className="pokemon-details">
      <p>ID: {id}</p>
      <p>Name: {name}</p>
      <p>Weight: {weight}</p>
      <p>Height: {height}</p>
      <img src={image} alt={name} />
      <p>{types.join(', ')}</p>
      <button onClick={handleShowMoves}>Show Moves</button>
    </div>
  );
};

export default PokemonDetails;
