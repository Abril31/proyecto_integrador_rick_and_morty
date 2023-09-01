
import Card from "../Card/Card";
import { useDispatch, connect } from "react-redux";
import { filterCards, orderCards } from "../redux/actions"
import { useState } from "react";



const Favorites = ({ myFavorites }) => {
    const [aux, setAux] = useState(false)
    const dispatch = useDispatch();
    let handleOrder = (event) => {
        dispatch(orderCards(event.target.value))
        setAux(!aux)
    };
    let handleFilter = (event) =>{
        dispatch(filterCards(event.target.value))
    }
  return (
    <div>
        <select onChange={handleOrder}>
            <option value="A">ASCENDENTE</option>
            <option value="D">DESCENDENTE</option>
        </select>
        <select onChange={handleFilter}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Genderless">Genderless</option>
            <option value="unknown">Unknown</option>
        </select>
      {myFavorites.map((favorite) => {
        return (
          <Card
            key={favorite.id}
            id={favorite.id}
            name={favorite.name}
            status={favorite.status}
            species={favorite.species}
            gender={favorite.gender}
            origin={favorite.origin}
            image={favorite.image}
          />
        );
      })}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, null)(Favorites);
