import React, { useState, useEffect } from 'react';
import '../PokemonList/PokemonList.css';
import PokemonList from '../PokemonList/PokemonList';
import SearchBar from '../SearchBar/SearchBar';

const PokemonListPage = ({ selectedLanguage }) => {
    const [rows, setRows] = useState([]);
    const [types, setTypes] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch("https://pokedex-jgabriele.vercel.app/pokemons.json")
            .then((data) => data.json())
            .then((json) => {
                setRows(json || []);
                setIsLoading(false);

                // Une fois les données des pokemons chargées, on effectue un nouveau fetch pour les types
                fetch("https://pokedex-jgabriele.vercel.app/types.json")
                    .then((data) => data.json())
                    .then((typesJson) => {
                        setTypes(typesJson || []);
                    })
                    .catch((error) => {
                        console.error("Error fetching types data:", error);
                    });
            })
            .catch((error) => {
                console.error("Error fetching pokemon data:", error);
                setIsLoading(false);
            });
    }, []);

    const filteredPokemons = rows.filter((pokemon) =>
        pokemon.names.fr.toLowerCase().includes(searchTerm.toLowerCase())
       
    );

    return (
        <div>
            <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <PokemonList
                    filteredPokemons={filteredPokemons}
                    selectedLanguage={selectedLanguage}
                    types={types} 
                />
                
            )}
        </div>
    );
};

export default PokemonListPage;
