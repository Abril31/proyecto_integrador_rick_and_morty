import "./Detail.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import male from "/icons/male.svg";
import female from "/icons/female.svg";
import unknown from "/icons/question.svg";

const Detail = () => {
  let { id } = useParams();
  let [character, setCharacter] = useState({});

  useEffect(() => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacter(data);
          console.log(data);
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
        <div className="text-cont">
          <h3 className="text">STATUS: {character?.status}</h3>
          <h3 className="text">SPECIES: {character?.species}</h3>

          <h3 className="text">ORIGIN: {character?.origin}</h3>
        </div>
      </div>
      <div>
        <img
          className="img-detail"
          src={character?.image}
          alt={character?.name}
        />
        <div className="text-under">
          <h3 className="text-name">{character?.name}</h3>
          <h3 className="text-name">
            {character?.gender === "Male" ? (
              <img src={male} alt="Male" />
            ) : character?.gender === "Female" ? (
              <img src={female} alt="Female" />
            ) : (
              <img src={unknown} alt="Unknown" />
            )}
          </h3>
        </div>
      </div>
    </section>
  );
};
export default Detail;
