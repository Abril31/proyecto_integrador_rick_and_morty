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
        <button className="lo-boton"onClick={handleLogOut}>LOG OUT</button>

        <button className="nav-button">
          <Link to="/favorites">FAVORITES</Link>
        </button>

        <button className="nav-button">
          <Link to="/about">ABOUT</Link>
        </button>

        <button className="nav-button">
          <Link to="/home">HOME</Link>
        </button>
      </nav>
    </div>
  );
};
export default Nav;
