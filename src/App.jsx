import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav";
import { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import Form from "./components/Form/Form";
import Favorites from "./components/Favorites/Favorites";


const email = 'bix@gmail.com'
const password = '123zxc'

function App() {
  
  const location = useLocation();
  const navigate = useNavigate();
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);
  
  function login (userData){
    if(userData.email === email && userData.password === password){
      setAccess(true);
      navigate('/home'); 
    }
  }
  useEffect(() => {
    !access && navigate('/'); }, [access]);
  
  
  let onSearch = (id) => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (
          data.name &&
          !characters.find((character) => character.id === data.id)
        ) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert(
            "¡No hay personajes con este ID o el personaje ya fue agregado!"
          );
        }
      }
    );
  };

  let onClose = (id) => {
    let filterCharacters = (character) => character.id !== Number(id);
    let filteredCharacters = characters.filter(filterCharacters);
    setCharacters(filteredCharacters);
  };
 
  

  return (
    <div className="App">
     {
       location.pathname !== '/' && 
       <Nav onSearch={onSearch} 
       setAccess={setAccess} /> 
             
     }
      
      <Routes>
        
        <Route path='/' element={<Form login={login}/>} />
        <Route path='/home' element={<Cards characters={characters} onClose={onClose} />} />
        <Route path='/about' element={<About />} />
        <Route path='/detail/:id' element={<Detail />} />
        <Route path='/favorites' element={<Favorites />} />

       
      </Routes>
      
    </div>
  );
}

export default App;
