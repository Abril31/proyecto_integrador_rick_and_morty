import "./Form.css";
import { useState } from "react";
import validation from "../Validation/Validation";

const Form = ({ login }) => {
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
  return (
    <div className="cont">
      <img src="../public/images/rm.png" alt="rickandmorty" />
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">EMAIL</label>
        <input
          className="input"
          type="email"
          name="email"
          autoComplete="given-email"
          value={userData.email}
          onChange={handleChange}
        />
        {errors.email && <p>{errors.email}</p>}

        <label htmlFor="password">PASSWORD</label>
        <input
          className="input"
          type="password"
          name="password"
          autoComplete="off"
          value={userData.password}
          onChange={handleChange}
        />
        {errors.password && <p>{errors.password}</p>}

        <button className="btn-submit" type="submit">
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default Form;
