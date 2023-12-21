import { Link } from "react-router-dom";
import "../css/login.modules.css";
import { useState } from "react";

export default function Login(props) {
  const { logIn } = props;

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleFill = (event) => {
    const { name, value } = event.target;

    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const hadleSubmit = (event) => {
    event.preventDefault();

    logIn(userData);
  };

  return (
    <div className="main_container">
      <div className="login_container">
        <div className="main_title_container">
          <div>
            <h1>My Game Room App</h1>
          </div>
        </div>
        <div className="log_container">
          <div className="login">
            <div className="login_title">
              <h1>Sign In</h1>
              <img src="./img/login.png"/>
            </div>
            <div className="input_mail">
              <h1>Email </h1>
              <input
                type="email"
                name="email"
                value={userData.email}
                onChange={handleFill}
                placeholder="Enter your Email"
              />
            </div>
            <div className="input_password">
              <h1>Password </h1>
              <input
                type="password"
                name="password"
                value={userData.password}
                onChange={handleFill}
                placeholder="Enter your Password"
              />
            </div>
            <div className="login_buttons">
              <button className="log_buttons" onClick={hadleSubmit}>
                Login
              </button>
              <Link to="/submit">
                <button className="sign_buttons">Sign Up</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="img_container"></div>
    </div>
  );
}
