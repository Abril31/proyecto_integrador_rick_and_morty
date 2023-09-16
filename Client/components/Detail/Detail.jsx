import "./Detail.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Detail = () => {
  let { id } = useParams();
  let [character, setCharacter] = useState({});

  useEffect(() => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      }
    );
    return setCharacter({});
  }, [id]);

  return (
    <section className="card-cont">
      <div className="info-char">
        <div className="column">
          <h3 className="text">NAME: {character?.name}</h3>
          <h3 className="text">STATUS: {character?.status}</h3>
          <h3 className="text">SPECIES: {character?.species}</h3>
        </div>
        <div className="column">
          <h3 className="text">GENDER: {character?.gender}</h3>
          <h3 className="text">ORIGIN: {character?.origin}</h3>
        </div>
        {/* <h3>LOCATION: {character?.origin?.name}</h3> */}
      </div>
      <img
        className="img-detail"
        src={character?.image}
        alt={character?.name}
      />
    </section>
  );
};
export default Detail;
