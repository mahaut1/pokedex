import React from 'react';
import './PokemonList.css';
import PokemonCard from './PokemonCard/PokemonCard';

const PokemonList = ({ filteredPokemons, selectedLanguage, pokemonTypes }) => {
    console.log("filteredPokemons in PokemonList:", filteredPokemons);

    return (
        <div className='Pokemonitems'>
            {filteredPokemons && filteredPokemons.map((pokemon, key) => (
                <PokemonCard pokemon={pokemon} key={key} selectedLanguage={selectedLanguage} pokemonTypes={pokemonTypes} />
            ))}
        </div>
      );
};

export default PokemonList;