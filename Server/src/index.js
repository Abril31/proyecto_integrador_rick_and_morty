const express = require("express");
const server = express();
const mainRouter = require("./routes/mainRouter");
const morgan = require("morgan");

const PORT = 3001;

server.use(morgan("dev"));

server.listen(PORT, () => {
  console.log("Server raised in port: " + PORT);
});

server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

server.use(express.json());
//Agrega el prefijo rickandmorty a todas las rutas
server.use("/rickandmorty", mainRouter);
