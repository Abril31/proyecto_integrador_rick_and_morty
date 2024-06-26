import "./App.css";
import Cards from "../components/Cards/Cards.jsx";
import Nav from "../components/Nav/Nav";
import { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Detail from "../components/Detail/Detail";
import Form from "../components/Form/Form";
import Favorites from "../components/Favorites/Favorites";

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);
  const [showCloseButton, setShowCloseButton] = useState(true);
  const [newGuest, setNewGuest] = useState(false);
  async function login(userData) {
    try {
      const { email, password } = userData;
      const URL = "http://localhost:3001/rickandmorty/login/";
      const { data } = await axios(
        URL + `?email=${email}&password=${password}`
      );
      const { access } = data;
      setAccess(access);
      setNewGuest(true);
      access && navigate("/home");
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    !access && navigate("/");
  }, [access]);
  useEffect(() => {
    // Verificar la ruta actual y establecer el valor de showCloseButton
    if (location.pathname === "/home") {
      setShowCloseButton(true);
    } else if (location.pathname === "/favorites") {
      setShowCloseButton(false);
    }
  }, [location.pathname]);
  let onSearch = async (id) => {
    try {
      if (id > 826) {
        alert("No existe el personaje");
        return;
      }
      const response = await axios.get(
        `http://localhost:3001/rickandmorty/character/${id}`
      );
      const data = response.data;

      if (data.name) {
        if (characters.some((character) => character.id === Number(id))) {
          alert("El personaje ya fue agregado");
        } else {
          setCharacters((characters) => [...characters, data]);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  let onClose = (id) => {
    let filterCharacters = (character) => character.id !== Number(id);
    let filteredCharacters = characters.filter(filterCharacters);
    setCharacters(filteredCharacters);
  };

  return (
    <div>
      {location.pathname !== "/" && (
        <Nav onSearch={onSearch} setAccess={setAccess} newGuest={newGuest} />
      )}

      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route
          path="/home"
          element={
            <Cards
              characters={characters}
              onClose={onClose}
              showCloseButton={true}
            />
          }
        />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;
