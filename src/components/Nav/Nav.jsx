import './Nav.css'
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";

const Nav = ({ onSearch, setAccess }) => {

  const handleLogOut = ()=> {
    setAccess(false);
    
}
  return (
    <nav className="nav-buttons">
      
      <SearchBar onSearch={onSearch} />

      <button className="nav-button">
        <Link to='/about' >ABOUT</Link>
      </button>

      <button className="nav-button">
        <Link to='/home' >HOME</Link>     
      </button>

       <button onClick={handleLogOut}>LOG OUT</button>

    </nav> 
  )
}
export default Nav;
