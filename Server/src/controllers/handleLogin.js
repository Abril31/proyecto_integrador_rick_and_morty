
const data = require("../utils/users");

let handleLogin = (req, res) => {
  //obtener los datos q recibo por query
    const { email, password } = req.query;
    // Verificamos si hay un usuario que coincida con las credenciales proporcionadas
    const found = data.find(
      (user) => user.email === email && user.password === password
    );
    if (found) {
      // Si se encuentra un usuario que coincide, respondemos con status 200 y access: true
      res.status(200).json({ access: true });
    } else {
      // Si no se encuentra un usuario que coincida, respondemos con status 200 y access: false
      res.status(200).json({ access: false });
    }
  }
  // Configuramos la ruta /login para que utilice la función login
  server.get("/login", handleLogin);

module.exports = {
  handleLogin,
};
