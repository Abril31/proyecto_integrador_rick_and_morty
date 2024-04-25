require("dotenv").config();
const { Sequelize } = require("sequelize");
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;
const UserModel = require("./models/User");
const FavoriteModel = require("./models/Favorite");

// EJERCICIO 03
// A la instancia de Sequelize le falta la URL de conexión. ¡Agrégala!
// Recuerda pasarle la información de tu archivo '.env'.

// URL ----> postgres://DB_USER:DB_PASSWORD@DB_HOST/rickandmorty
const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
  { logging: false, native: false }
);

UserModel(sequelize);
FavoriteModel(sequelize);

const { User, Favorite } = sequelize.models;
User.belongsToMany(Favorite, { through: "user_favorite" });
Favorite.belongsToMany(User, { through: "user_favorite" });
sequelize
  .sync({ alter: false })
  .then(() => {
    console.log("Tablas creadas en la base de datos");
  })
  .catch((err) => {
    console.error("Error al sincronizar las tablas:", err);
  });
module.exports = {
  User,
  Favorite,
  conn: sequelize,
};
