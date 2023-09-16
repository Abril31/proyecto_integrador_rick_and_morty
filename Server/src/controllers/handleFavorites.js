let myFavorites = [];

const postFav = (req, res) => {
  // Obtener el personaje recibido en el cuerpo de la solicitud
  const character = req.body;
  myFavorites.push(character);
  //Devolver la lista en formato Json
  res.status(200).json(myFavorites);
};

function deleteFav(req, res) {
  // Obtener el ID del personaje que se desea eliminar de los parámetros de la solicitud
  const { id } = req.params;

  // Filtrar la lista de favoritos para eliminar el personaje con el mismo ID
  myFavorites = myFavorites.filter((character) => character.id !== Number(id));

  // Devolver la lista de favoritos actualizada en formato JSON
  res.status(200).json(myFavorites);
}

module.exports = {
  postFav,
  deleteFav,
};
