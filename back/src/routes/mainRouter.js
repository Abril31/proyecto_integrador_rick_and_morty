const { Router } = require("express");
const login = require("../controllers/login");
const getCharById = require("../controllers/get.CharById");
const postFav = require("../controllers/postFav");
const deleteFav = require("../controllers/deleteFav");
const postUser = require("../controllers/postUser");

const mainRouter = Router();

mainRouter.get("/character/:id", getCharById);
mainRouter.get("/login", login);
mainRouter.post("/fav", postFav);
mainRouter.post("/user", postUser);
mainRouter.delete("/fav/:id", deleteFav);

module.exports = mainRouter;
