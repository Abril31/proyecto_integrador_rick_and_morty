const { FavoriteModel } = require("../DB_connection");

const postFav = async (req, res) => {
  const { name, origin, status, image, species, gender } = req.body;
  if (!name || !origin || !status || !image || !species || !gender) {
    res.status(401).send("Faltan datos");
  }
  try {
    const [favorite, created] = await Favorite.findOrCreate({
      where: { name },
      defaults: { origin, status, image, species, gender },
    });

    const allFavorites = await FavoriteModel.findAll();
    return res.status(200).json(allFavorites);
  } catch (error) {
    console.error("Error al guardar el personaje:", error);
    return res.status(500).json({ message: "Error interno del servidor" });
  }
};

module.exports = postFav;
