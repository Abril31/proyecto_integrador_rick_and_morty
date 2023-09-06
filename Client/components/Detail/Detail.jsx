import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";


const Detail = ()=>{
    let { id } = useParams();
    let [character, setCharacter] = useState({})

    useEffect(() => {
        axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);
  
    return (
        <div>
            <h3>{character?.name}</h3>
            <h3>{character?.status}</h3>
            <h3>{character?.species}</h3>
            <h3>{character?.gender}</h3>
            <h3>{character?.origin?.name}</h3>
            <img src={character?.image} alt={character?.name}/>
        </div>
    )
}
export default Detail;