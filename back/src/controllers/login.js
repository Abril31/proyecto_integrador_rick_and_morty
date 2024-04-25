const { User } = require("../DB_connection");
const login = async (req, res) => {
  const { email, password } = req.query;
  try {
    // Validar que se recibieron ambos campos
    if (!email || !password) {
      return res.status(400).json({ message: "Faltan datos" });
    }

    // Buscar un usuario con el email proporcionado
    const user = await User.findOne({ where: { email } });

    // Si no se encuentra el usuario, responder con 404
    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    // Comparar la contraseña proporcionada con la contraseña almacenada en la base de datos
    if (user.password !== password) {
      return res.status(403).json({ message: "Contraseña incorrecta" });
    }

    // Si las contraseñas coinciden, responder con acceso exitoso
    return res.status(200).json({ access: true });
  } catch (error) {
    console.error("Error al iniciar sesión:", error);
    return res.status(500).json({ message: "Error interno del servidor" });
  }
};

module.exports = login;
