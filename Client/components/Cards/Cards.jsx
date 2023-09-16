import Card from "../Card/Card";
import "./Cards.css";
export default function Cards({ characters, onClose }) {
  return (
    <div>
      {characters.map(
        ({ id, name, status, species, gender, origin, image }) => {
          //por cada personaje que recorro devuelvo una card. Character es un objeto así q se puede hacer destructuring en el map.
          return (
            <Card
              key={id} //Key es única y ayuda q react idenfique la card si neceista hacer cambios
              id={id}
              name={name}
              status={status}
              species={species}
              gender={gender}
              origin={origin}
              image={image}
              onClose={onClose}
            />
          );
        }
      )}
    </div>
  );
}
