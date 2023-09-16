const { Router } = require("express");
const login = require("../controllers/handleLogin");
const getCharById = require("../controllers/get.CharById");
const { postFav, deleteFav } = require("../controllers/handleFavorites");

const mainRouter = Router();

mainRouter.get("/character/:id", getCharById);
mainRouter.get("/login", login);
mainRouter.post("/fav", postFav);
mainRouter.delete("/fav/:id", deleteFav);

module.exports = mainRouter;
