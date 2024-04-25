import "./Nav.css";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";

const Nav = ({ onSearch, setAccess }) => {
  const handleLogOut = () => {
    setAccess(false);
  };
  return (
    <div className="container-header">
      <nav className="nav-buttons">
        <SearchBar onSearch={onSearch} />
        <button className="lo-boton" onClick={handleLogOut}>
          Log Out
        </button>

        <button className="nav-button">
          <Link to="/favorites">Favorites</Link>
        </button>

        <button className="nav-button">
          <Link to="/about">About</Link>
        </button>

        <button className="nav-button">
          <Link to="/home">Home</Link>
        </button>
      </nav>
    </div>
  );
};
export default Nav;
