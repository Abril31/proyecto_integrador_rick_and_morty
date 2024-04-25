const { FavoriteModel } = require("../DB_connection");

const deleteFav = async (req, res) => {
  const { id } = req.params;

  try {
    // Eliminar el personaje favorito por su ID
    const deletedRows = await FavoriteModel.destroy({
      where: { id },
    });

    if (deletedRows > 0) {
      // Si se eliminó al menos una fila, se considera exitoso
      const allFavorites = await FavoriteModel.findAll();
      return res.status(200).json(allFavorites);
    } else {
      // Si no se encontró el personaje para eliminar, responde con 404
      return res.status(404).json({ message: "Personaje no encontrado" });
    }
  } catch (error) {
    console.error("Error al eliminar el personaje favorito:", error);
    return res.status(500).json({ message: "Error interno del servidor" });
  }
};

module.exports = deleteFav;
