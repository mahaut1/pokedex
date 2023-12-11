// PokemonListPage.jsx

import React, { useState, useEffect } from 'react';
import '../PokemonList/PokemonList.css';
import PokemonList from '../PokemonList/PokemonList';
import SearchBar from '../SearchBar/SearchBar';

const PokemonListPage = () => {
    const [rows, setRows] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch("https://pokedex-jgabriele.vercel.app/pokemons.json")
            .then((data) => data.json())
            .then((json) => {
                setRows(json || []);
                setIsLoading(false); // Met à jour l'état de chargement une fois que les données sont chargées
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
                setIsLoading(false); // Met à jour l'état de chargement en cas d'erreur de requête
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
                <PokemonList filteredPokemons={filteredPokemons} />
            )}
        </div>
    );
};

export default PokemonListPage;
