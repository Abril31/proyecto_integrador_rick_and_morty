const initialState = {
  myFavorites: [],
  allCharactersFav: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_FAV":
      return {
        ...state,
        myFavorites: action.payload,
        allCharactersFav: action.payload,
      };

    case "REMOVE_FAV":
      return { ...state, myFavorites: action.payload };

    case "FILTER":
      const allCharFiltered = state.allCharactersFav.filter(
        (character) => character.gender === action.payload
      );
      console.log("Despues del filtrado: ", allCharFiltered);
      return {
        ...state,
        myFavorites: allCharFiltered,
      };

    case "ORDER":
      const allCharactersFavCopy = [...state.allCharactersFav];
      return {
        ...state,
        myFavorites:
          action.payload === "A"
            ? allCharactersFavCopy.sort((a, b) => a.id - b.id)
            : allCharactersFavCopy.sort((a, b) => b.id - a.id),
      };
    case "CLEAR":
      return {
        ...state,
        myFavorites: state.allCharactersFav,
      };

    default:
      return { ...state };
  }
};

export default reducer;
