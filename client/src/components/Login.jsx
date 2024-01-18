import { Link, useNavigate } from "react-router-dom";
import "../css/login.modules.css";
import { useEffect, useState } from "react";
import validation from "../utils/validations";
import getConection from "../Handlers/getConnection";

export default function Login(props) {
  const navigate = useNavigate();
  const { logIn } = props;

  const [connection, setConnection] = useState(false);

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
    emailValidation: false,
    passwordValidation: false,
  });

  useEffect(() => {
    const fecthConnection = async () => {
      const data = await getConection();

      if (data) {
        setConnection(true);
      }
    };

    fecthConnection();
  }, []);

  const handleFill = (event) => {
    const { name, value } = event.target;

    setUserData({
      ...userData,
      [name]: value,
    });

    setErrors(
      validation({
        ...userData,
        [name]: value,
      })
    );
  };

  const hadleSubmit = (event) => {
    event.preventDefault();

    logIn(userData);
  };

  const loginRender = () => {
    if(!connection){
        return (
          <div className="login_main_container">
            <div className="login_container">
              <div>
                <div className="main_title_container">
                  <img src="/img/logo_game.png"></img>
                  <h1>Game Room App</h1>
                </div>
              </div>
              <div>
                <div className="login">
                  <div className="login_title">
                    <h2>Loading...</h2>
                  </div>
                  <svg class="pl" width="240" height="240" viewBox="0 0 240 240">
                    <circle
                      class="pl__ring pl__ring--a"
                      cx="120"
                      cy="120"
                      r="105"
                      fill="none"
                      stroke="#000"
                      stroke-width="20"
                      stroke-dasharray="0 660"
                      stroke-dashoffset="-330"
                      stroke-linecap="round"
                    ></circle>
                    <circle
                      class="pl__ring pl__ring--b"
                      cx="120"
                      cy="120"
                      r="35"
                      fill="none"
                      stroke="#000"
                      stroke-width="20"
                      stroke-dasharray="0 220"
                      stroke-dashoffset="-110"
                      stroke-linecap="round"
                    ></circle>
                    <circle
                      class="pl__ring pl__ring--c"
                      cx="85"
                      cy="120"
                      r="70"
                      fill="none"
                      stroke="#000"
                      stroke-width="20"
                      stroke-dasharray="0 440"
                      stroke-linecap="round"
                    ></circle>
                    <circle
                      class="pl__ring pl__ring--d"
                      cx="155"
                      cy="120"
                      r="70"
                      fill="none"
                      stroke="#000"
                      stroke-width="20"
                      stroke-dasharray="0 440"
                      stroke-linecap="round"
                    ></circle>
                  </svg>
                </div>
              </div>
            </div>
            <div className="img_container"></div>
          </div>
        );
    }else{
      return (
        <div className="login_main_container">
          <div className="login_container">
            <div>
              <div className="main_title_container">
                <img src="/img/logo_game.png"></img>
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
                  <button
                    className="signin_button"
                    onClick={() => navigate("/submit")}
                  >
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
  }

  return (
   <>
   {loginRender()}
   </>
  );
}
