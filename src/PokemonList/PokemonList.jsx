import React from 'react';
import './PokemonList.css';
import PokemonCard from './PokemonCard/PokemonCard';
import { Link } from 'react-router-dom';

const PokemonList = ({ filteredPokemons, selectedLanguage, pokemonTypes }) => {
    console.log("filteredPokemons in PokemonList:", filteredPokemons);

    return (
        <div className='Pokemonitems'>
          {filteredPokemons && filteredPokemons.map((pokemon, key) => (
            <Link to={`/pokemon/${pokemon.id}`} key={key}>
              <PokemonCard pokemon={pokemon} selectedLanguage={selectedLanguage} />
            </Link>
          ))}
        </div>
      );
};

export default PokemonList;