import "./Card.css";

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
  showCloseButton,
}) {
  const [isFav, setIsFav] = useState(false);
  const handleFavorite = () => {
    isFav
      ? removeFav(id)
      : addFav({ id, name, status, species, gender, origin, image });
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
      <div>
        {showCloseButton && (
          <button className="close-btn" onClick={() => onClose(id)}>
            <span className="text-x">X</span>
          </button>
        )}
        <img src={image} alt="Picture" />
      </div>
      <div className="info">
        <div className="btn-container">
          {isFav ? (
            <button className="love-btn" onClick={handleFavorite}>
              <span className="heart">❤️</span>
            </button>
          ) : (
            <button className="love-btn" onClick={handleFavorite}>
              <span className="heart">🤍</span>
            </button>
          )}
        </div>
        <NavLink className="nav-link" to={`/detail/${id}`}>
          <h3>{name.length > 12 ? `${name.slice(0, 10)}...` : name}</h3>
          <h4>
            {species.length > 10 ? `${species.slice(0, 10)}...` : species}
          </h4>
        </NavLink>
      </div>
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
