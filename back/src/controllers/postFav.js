const { Favorite } = require("../DB_connection");

const postFav = async (req, res) => {
  const { id, name, status, image, species, gender, origin } = req.body;
  if (!id || !name || !status || !image || !species || !gender || !origin) {
    res.status(401).send("Faltan datos");
  }
  try {
    await Favorite.findOrCreate({
      where: { id, name, status, image, species, gender, origin },
    });

    const allFavorites = await Favorite.findAll();
    console.log(allFavorites);
    return res.status(200).json(allFavorites);
  } catch (error) {
    console.error("Error al guardar el personaje:", error);
    return res
      .status(500)
      .json({ message: "Error interno del servidor", error: error.message });
  }
};

module.exports = postFav;
