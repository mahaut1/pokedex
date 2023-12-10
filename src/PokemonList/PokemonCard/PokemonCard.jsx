// PokemonCard.jsx

import React from 'react';

const PokemonCard = ({ pokemon }) => {
    const { id, name, image, height, weight } = pokemon;

    return (
        <div className="pokemon-card">
          
            <p>{id}</p>
            <p>{name.fr}</p>
            <img src={image} alt={name} />
            <p>{height}m</p>
            <p>{weight}kg</p>
        </div>
    );
};

export default PokemonCard;
