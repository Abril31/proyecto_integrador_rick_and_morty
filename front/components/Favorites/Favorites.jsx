import "./Favorites.css";
import Card from "../Card/Card";
import { useDispatch, connect } from "react-redux";
import { clearFilters, filterCards, orderCards } from "../redux/actions";
import { useState } from "react";

const Favorites = ({ myFavorites }) => {
  const [aux, setAux] = useState(false);
  const dispatch = useDispatch();
  let handleOrder = (event) => {
    dispatch(orderCards(event.target.value));
    setAux(!aux);
  };
  let handleFilter = (event) => {
    dispatch(filterCards(event.target.value));
  };
  let clearFilter = () => {
    dispatch(clearFilters());
  };
  console.log("Estos son mis favoritos: ", myFavorites);

  return (
    <div className="cont-central">
      <div className="filters">
        <select className="select" onChange={handleOrder}>
          <option value="A">Ascendente</option>
          <option value="D">Descendente</option>
        </select>
        <select className="select" onChange={handleFilter}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">Unknown</option>
        </select>
        <button onClick={clearFilter}>Clear</button>
      </div>
      <div className="favs-list">
        {myFavorites.map((favorite) => {
          return (
            <div className="container-fav" key={favorite.id}>
              <Card
                id={favorite.id}
                name={favorite.name}
                status={favorite.status}
                species={favorite.species}
                gender={favorite.gender}
                origin={favorite.origin}
                image={favorite.image}
                showCloseButton={false}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
    allCharactersFav: state.allCharactersFav,
  };
};

export default connect(mapStateToProps, null)(Favorites);
