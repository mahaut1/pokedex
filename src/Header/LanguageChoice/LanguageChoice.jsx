import React from 'react';

function LanguageChoice({ selectedLanguage, onLanguageChange }) {
    const handleLanguageChange = (event) => {
        const language = event.target.value;
        onLanguageChange(language); // Appel de la fonction de changement de langue
    };

    return (
        <div>
            <p id="language">LanguageChoice</p>
            <select name="language" id="language-select" onChange={handleLanguageChange} value={selectedLanguage}>
                <option value="Fr">Fr</option>
                <option value="De">De</option>
                <option value="En">En</option>
                <option value="Es">Es</option>
                <option value="Ja">Ja</option>
            </select>
        </div>
    );
}

export default LanguageChoice;
