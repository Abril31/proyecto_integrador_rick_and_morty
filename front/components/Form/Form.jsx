import "./Form.css";
import { useState } from "react";
import validation from "../Validation/Validation";
import { useNavigate } from "react-router-dom";

const Form = ({ login }) => {
  const navigate = useNavigate();
  const [newGuest, setNewGuest] = useState(false);
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const handleChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
    setErrors(
      validation({
        ...userData,
        [event.target.name]: event.target.value,
      })
    );
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
  };
  const handleGuest = () => {
    setNewGuest(true);
    navigate("/home");
  };
  return (
    <div className="login-background">
      <div className="cont">
        <div className="cont-form field">
          <form onSubmit={handleSubmit}>
            {/* <img src="../public/images/header1.jpg" /> */}
            <div className="data">
              <label htmlFor="email">EMAIL</label>
              <input
                className="input"
                placeholder="Ingresa tu correo electrónico..."
                type="email"
                name="email"
                autoComplete="given-email"
                value={userData.email}
                onChange={handleChange}
              />
              {errors.email && <p className="error1">{errors.email}</p>}

              <label htmlFor="password">PASSWORD</label>
              <input
                className="input"
                placeholder="Ingresa tu contraseña..."
                type="password"
                name="password"
                autoComplete="off"
                value={userData.password}
                onChange={handleChange}
              />
              {errors.password && <p className="error2">{errors.password}</p>}
              <div className="btn-cont">
                <button className="btn-guest" onClick={handleGuest}>
                  Enter as a guest
                </button>
                <button className="btn-submit" type="submit">
                  SUBMIT
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
