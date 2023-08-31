import { Link } from "react-router-dom";
import { addFav, removeFav } from "../redux/actions";
import { connect } from "react-redux";

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
  removeFav
}) {
  return (
    <div className="Card">
      <button onClick={() => onClose(id)}>X</button>
      <Link to={`/detail/${id}`}>
        <h3>Name: {name}</h3>
      </Link>
      <h3>Status: {status}</h3>
      <h3>Species: {species}</h3>
      <h3>Gender: {gender}</h3>
      <h3>Origin: {origin}</h3>
      <img src={image} alt="Rick" />
    </div>
  );
  };

  const mapDispatchToProps = (dispatch) =>{
    return {
      addFav: (character)=> dispatch(addFav(character)),
      removeFav: (id) => dispatch(removeFav(id))
    }

  };

export default connect( null, mapDispatchToProps)(Card)


//Esta es la plantilla que se reutiliza para generar las demás cards.
