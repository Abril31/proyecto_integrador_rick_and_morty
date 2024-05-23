import "./Nav.css";
import SearchBar from "../SearchBar/SearchBar";
import { NavLink } from "react-router-dom";

const Nav = ({ onSearch, setAccess, newGuest }) => {
  const handleLogOut = () => {
    setAccess(false);
  };
  return (
    <div className="container-header">
      <nav>
        <SearchBar onSearch={onSearch} />
        {newGuest && (
          <button className="lo-boton" onClick={handleLogOut}>
            Salir
          </button>
        )}
        <div className="cont-two">
          <NavLink to="/home" className="nav-button" activeClassName="active">
            Inicio
          </NavLink>
          <NavLink
            className="nav-button"
            to="/favorites"
            activeClassName="active"
          >
            Favoritos
          </NavLink>
        </div>
      </nav>
    </div>
  );
};
export default Nav;
