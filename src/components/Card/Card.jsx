import { Link } from "react-router-dom";

export default function Card({
  id,
  name,
  status,
  species,
  gender,
  origin,
  image,
  onClose,
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
}
//Esta es la plantilla que se reutiliza para generar las demás cards.
