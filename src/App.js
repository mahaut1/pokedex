import React, { useState } from 'react';
import './App.css';
import Header from './Header/Header';
import PokemonListPage from './PokemonListPage/PokemonListPage';

function App() {
  const [selectedLanguage, setSelectedLanguage] = useState('English'); // Langue par défaut

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
  };

  return (
    <div>
      <Header selectedLanguage={selectedLanguage} onLanguageChange={handleLanguageChange} />
      <PokemonListPage selectedLanguage={selectedLanguage} />
    </div>
  );
}

export default App;


