import React from 'react';
import './PokemonList.css';
import PokemonCard from './PokemonCard/PokemonCard';

const PokemonList = ({ filteredPokemons, selectedLanguage }) => {
    console.log("filteredPokemons in PokemonList:", filteredPokemons);

    return (
        <div className='Pokemonitems'>
            {filteredPokemons && filteredPokemons.map((pokemon, key) => (
                <PokemonCard pokemon={pokemon} key={key} selectedLanguage={selectedLanguage} />
            ))}
        </div>
    );
};

export default PokemonList;

/* export const PokemonList = () => {
    const [rows, setRows] = React.useState([]);
    
    React.useEffect(() => {
        fetch("https://pokedex-jgabriele.vercel.app/pokemons.json")
            .then((data) => data.json())
            .then((json) => setRows(json || []));
    }, []);

    return (
        <>
            <div className='Pokemonitems'>
                {rows.map((row, key) => (
                    <PokemonCard pokemon={row} key={key} />
                ))}
            </div>
        </>
    );
};
export default PokemonList; // Exporting PokemonList as default */

// SearchBar.jsx




/* function PokemonList(){
    const Pokemons = PokemonJSON.map(pokemon => {
        return (
            <PokemonCard
                key={pokemon.id} 
                name={pokemon.names.fr}
                image={pokemon.image}
                type={pokemon.types}
            />
        );
    });
 return(
 <div class="Pokemonitems">
    {Pokemons}
    </div>
    )
}

export default PokemonList */