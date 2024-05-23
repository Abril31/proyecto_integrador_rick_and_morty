import "./SearchBar.css";
import { useState } from "react";

export default function SearchBar({ onSearch }) {
  let [id, setId] = useState("");

  let handleChange = (event) => {
    setId(event.target.value);
  };
  const addRandom = () => {
    const randomId = Math.floor(Math.random() * 826) + 1;
    onSearch(randomId);
  };
  return (
    <div className="search-bar">
      <input
        className="search-input"
        type="search"
        value={id}
        onChange={handleChange}
        placeholder="Buscar..."
      />
      <button
        className="search-btn"
        onClick={() => {
          onSearch(id);
          setId("");
        }}
      >
        Agregar
      </button>
      {/* //se ejecuta recién cuando se hace click en el botón, para eso se necesita un callback, 
            un paso previo antes de que se ejecute onSearch. */}
      <button onClick={addRandom} className="random-btn">
        Random
      </button>
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
