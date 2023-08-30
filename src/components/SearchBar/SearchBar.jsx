import './SearchBar.css'
import { useState } from "react";

export default function SearchBar({onSearch}) {
let [id, setId] = useState('')

let handleChange = (event) =>{
   setId(event.target.value)
}
   return (
      <div className="search-bar">
         <input type='search' 
         value={id} 
         onChange={handleChange}
         placeholder="Buscar..."
         />
         <button onClick={() => {onSearch(id); setId("")}}>Agregar</button> 
         {/* //se ejecuta recién cuando se hace click en el botón, para eso se necesita un callback, 
            un paso previo antes de que se ejecute onSearch. */}
      </div>
   );
}

// let changeHandle = (event) => {
//    const newValue = event.target.value;
//    const existingCharacter = characters.some(
//       character => character.id === newValue
//    );
//    if (!existingCharacter) {
//       setId(newValue);
//    }
// }