let validation = (userData) => {
  let errors = {};
  let valEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
  let valPassword = /^(?=.*\d).+$/;

  if (!valEmail.test(userData.email)) {
    errors.email = "*No es válido el email";
  }
  if (userData.email === "") {
    errors.email = "*Debe ingresar un email";
  }
  if (userData.email.length > 35) {
    errors.email = "El email no debe tener más de 35 caracteres";
  }
  if (!valPassword.test(userData.password)) {
    errors.password = "*La contraseña debe tener al menos un número";
  }
  if (!(userData.password.length >= 6 && userData.password.length <= 10)) {
    errors.password = "*La contraseña debe tener entre 6 y 10 caracteres";
  }

  return errors;
};

export default validation;
