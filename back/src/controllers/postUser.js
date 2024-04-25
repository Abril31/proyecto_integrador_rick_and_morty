const { User } = require("../DB_connection");

const postUser = async (req, res) => {
  const { email, password } = req.body;
  if (!email && !password) {
    res.status(400).send("Faltan datos");
  }
  try {
    // Buscar o crear el usuario en la base de datos
    const [user, created] = await User.findOrCreate({
      where: { email }, // Buscar por email
      defaults: { password }, // Establecer la contraseña si el usuario es nuevo
    });

    if (!created) {
      return res.status(200).json({ message: "Usuario ya existe", user });
    }

    // Usuario creado exitosamente
    return res
      .status(201)
      .json({ message: "Usuario creado exitosamente", user });
  } catch (error) {
    console.error("Error al crear el usuario:", error);
    return res.status(500).json({ message: "Error interno del servidor" });
  }
};

module.exports = postUser;
