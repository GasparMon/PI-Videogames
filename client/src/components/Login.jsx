import { Link, useNavigate } from "react-router-dom";
import "../css/login.modules.css";
import { useState } from "react";
import validation from "../utils/validations";


export default function Login(props) {
  const navigate = useNavigate()
  const { logIn } = props;

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
    emailValidation:false,
    passwordValidation:false,
  })

  const handleFill = (event) => {
    const { name, value } = event.target;

    setUserData({
      ...userData,
      [name]: value,
    });

    setErrors(validation(
      {
        ...userData,
        [name] : value,
      }
    ))
  };

  const hadleSubmit = (event) => {
    event.preventDefault();

    logIn(userData);
  };

  return (
    <div className="login_main_container">
      <div className="login_container">
        <div>
          <div className="main_title_container">
            <img src="../../../img/logo_game.png"></img>
            <h1>Game Room App</h1>
          </div>
        </div>
        <div>
          <div className="login">
            <div className="login_title">
              <h2>Sign In</h2>
            </div>
            <div className="login_inputs">
              <h3>Email </h3>
              <input
                type="email"
                name="email"
                value={userData.email}
                onChange={handleFill}
                placeholder="Enter your Email"
              />
            </div>
            <div className="login_inputs">
              <h3>Password </h3>
              <input
                type="password"
                name="password"
                value={userData.password}
                onChange={handleFill}
                placeholder="Enter your Password"
              />
            </div>
            <div className="login_buttons">
              <button
                type="submit"
                className="login_button"
                onClick={hadleSubmit}
                disabled={!errors.emailValidation || !errors.passwordValidation}
              >
                Login
              </button>
              <button className="signin_button" onClick={()=>navigate("/submit")}>
                Sign In
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="img_container"></div>
    </div>
  );
}
