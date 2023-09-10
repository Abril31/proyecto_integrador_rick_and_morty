const initialState = {
  myFavorites: [],
  allCharactersFav: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_FAV":
      return {
        ...state,
        myFavorites: [...state.allCharactersFav, action.payload],
        allCharactersFav: [...state.allCharactersFav, action.payload]
      };
    case "REMOVE_FAV":
      const filteredFav = state.myFavoritesmyFavorites.filter(
        (favorite) => favorite.id !== Number(action.payload)
      );
      return {
        ...state,
        myFavorites: filteredFav,
      };
      case "FILTER":
        const allCharFiltered = state.allCharactersFav.filter((character)=>
        character.gender === action.payload)
        return{
          ...state,
          myFavorites: allCharFiltered
        };
        case "ORDER":
          const allCharactersFavCopy = [...state.allCharactersFav];
          return {
            ...state,
            myFavorites: 
            action.payload === "A" ? allCharactersFavCopy.sort((a, b)=> a.id - b.id)
            : allCharactersFavCopy.sort((a, b)=> b.id - a.id)
          }

    default:
      return { ...state };
  }
};

export default reducer;