import React, { useState, useEffect } from 'react';
import Logo from './Logo'; // Composant du logo
import LanguageChoice from './LanguageChoice'; // Composant de sélection de langues
import SearchBar from './SearchBar'; // Composant de barre de recherche
import PokemonList from './PokemonList'; // Composant de liste de Pokémon
import Loader from './Loader'; // Composant de chargement

const Homepage = () => {
    const [pokemons, setPokemons] = useState([]);
    const [types, setTypes] = useState([]);
    const [filteredPokemons, setFilteredPokemons] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedLanguage, setSelectedLanguage] = useState('English'); // Langue par défaut
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
       
        fetch("https://pokedex-jgabriele.vercel.app/pokemons.json")
            .then((response) => response.json())
            .then((data) => {
                setPokemons(data || []);
                setFilteredPokemons(data || []);
                setIsLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching Pokemon data:", error);
                setIsLoading(false);
            });

       
        fetch("https://pokedex-jgabriele.vercel.app/types.json")
            .then((response) => response.json())
            .then((data) => setTypes(data || []))
            .catch((error) => console.error("Error fetching Types data:", error));
    }, []);

    useEffect(() => {
        
        if (types.length > 0) {
            updateTypesNames(selectedLanguage);
        }
    }, [selectedLanguage, types]);

    useEffect(() => {
        const filtered = pokemons.filter((pokemon) =>
            pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredPokemons(filtered);
    }, [pokemons, searchTerm]);

    const handleLanguageChange = (language) => {
        setSelectedLanguage(language);
    };

    const updateTypesNames = (language) => {
        const languageKey = language.toLowerCase(); 
        const updatedTypes = types.map((type) => {
            return {
                ...type,
                name: type.names[languageKey], 
            };
        });
        setTypes(updatedTypes);
    };

    return (
        <div className="homepage">
            <Logo />
         
            <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
            {isLoading ? (
                <Loader />
            ) : (
                <PokemonList pokemons={filteredPokemons} types={types} />
            )}
        </div>
    );
};

export default Homepage;
