// PokemonCard.jsx

import React from 'react';

const PokemonCard = ({ pokemon, selectedLanguage }) => {
    const { id, name, image,types } = pokemon;

    return (
        <div className="pokemon-card">
          
            <p>NO.{id}</p>
            <p>{pokemon.names[selectedLanguage]}</p>
            <img src={image} alt={name} />
            <p>{types.join(', ')}</p>
           
        </div>
    );
};

export default PokemonCard;
