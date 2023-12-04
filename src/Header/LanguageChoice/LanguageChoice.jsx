import react from 'react'

function LanguageChoice(){
    return(<div><p id="language">LanguageChoice</p>
        <select name="language" id="manguage-select">
  <option value="French">Fr</option>
  <option value="Deutsch">De</option>
  <option value="English">En</option>
  <option value="Espana">Es</option>
  <option value="Japon">Ja</option>
</select>
    </div>)
}

export default LanguageChoice