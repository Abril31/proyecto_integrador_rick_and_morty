const initialState = {
  myFavorites: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_FAV":
      return {
        ...state,
        myFavorites: [...state.myFavorites, action.payload],
      };
    case "REMOVE_FAV":
      const filteredFav = state.myFavoritesmyFavorites.filter(
        (favorite) => favorite.id !== Number(action.payload)
      );
      return {
        ...state,
        myFavorites: filteredFav,
      };
    default:
      return { ...state };
  }
};

export default reducer;
