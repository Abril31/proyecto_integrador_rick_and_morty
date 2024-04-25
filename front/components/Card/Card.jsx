import "./Card-css/Card.css";
import "./Card-css/Buttons.css";

import { NavLink } from "react-router-dom";
import { addFav, removeFav } from "../redux/actions";
import { connect } from "react-redux";
import { useState, useEffect } from "react";

export function Card({
  id,
  name,
  status,
  species,
  gender,
  origin,
  image,
  onClose,
  addFav,
  removeFav,
  myFavorites,
}) {
  const [isFav, setIsFav] = useState(false);
  const handleFavorite = () => {
    isFav
      ? removeFav(id)
      : addFav({ id, name, status, species, gender, origin, image, onClose });
    setIsFav(!isFav);
  };

  useEffect(() => {
    myFavorites.forEach((favorite) => {
      if (favorite.id === id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);

  return (
    <div className="card">
      <div className="love-cont">
        {isFav ? (
          <button className="love-btn" onClick={handleFavorite}>
            ❤️
          </button>
        ) : (
          <button className="love-btn" onClick={handleFavorite}>
            🤍
          </button>
        )}
      </div>
      <div className="cont-btn">
        <button className="close-btn" onClick={() => onClose(id)}>
          X
        </button>
      </div>
      <NavLink className="nav-link" to={`/detail/${id}`}>
        <h3>Name: {name}</h3>
      </NavLink>
      <h2>Status: {status}</h2>
      {/* <h3>Species: {species}</h3> */}
      {/* <h3>Gender: {gender}</h3> */}
      {/* <h3>Origin: {origin}</h3> */}
      <img className="img-base" src={image} alt="Rick" />
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => dispatch(addFav(character)),
    removeFav: (id) => dispatch(removeFav(id)),
  };
};
const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Card);

//Esta es la plantilla que se reutiliza para generar las demás cards.
