import { useState } from "react";
import "../css/submit.modules.css";
import { Link, useNavigate } from "react-router-dom";
import createUser from "../Handlers/submitUser";
import validation from "../utils/validations";

export default function Submit(props) {
  const navigate = useNavigate();
  const [submitUser, setSubmitUser] = useState({
    username: "",
    email: "",
    password: "",
    avatar: null,
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
    emailValidation:false,
    passwordValidation:false,
  })

  const handleChange = (event) => {
    const { name, value } = event.target;

    setSubmitUser({
      ...submitUser,
      [name]: value,
    });

    setErrors(validation(
      {
        ...submitUser,
        [name] : value,
      }
    ))
  };

  const handleSubmit = async (event) => {
    try{

      event.preventDefault();

    const isUserCreated = await createUser(submitUser);

    if (isUserCreated) {
      setSubmitUser({
        username: "",
        email: "",
        password: "",
        avatar: null,
        
      });

      alert("User has been Created")
    }

    }catch(error){
      alert(error.message)
    }
  };

  return (
    <div className="submit_main_container">
      <div className="submit_container">
        <div>
          <div className="main_title_container">
            <img src="./img/logo_game.png"></img>
            <h1>Game Room App</h1>
          </div>
        </div>
        <div>
          <div className="submit">
            <div className="submit_title">
              <h2>Submit</h2>
            </div>
            <div className="submit_user">
              <h3>Username </h3>
              <input
                type="text"
                name="username"
                placeholder="You must enter an username"
                onChange={handleChange}
                value={submitUser.username}
              />
            </div>
            <div className="submit_mail">
              <h3>Email </h3>
              <input
                type="email"
                name="email"
                placeholder="You must enter an email"
                onChange={handleChange}
                value={submitUser.email}
              />

            </div>
            <div className="submit_error">
              <p>
              {!errors.email
                ?"You must enter a email."
                : errors.email
              }
              </p>
            </div>
            <div className="submit_password">
              <h3>Password </h3>
              <input
                type="password"
                name="password"
                placeholder="You must enter a password"
                onChange={handleChange}
                value={submitUser.password}
              />
            </div>
            <div className="submit_error">
              <p>
                {!errors.password
                ?"Password must include at least one uppercase letter and one digit."
                : errors.password
              }
              </p>
            </div>
            <h3>Avatar </h3>

            <div className="submit_avatar">
              <div className="avatar_container">
                <div class="radio-inputs">
                  <label>
                    <input
                      class="radio-input"
                      type="radio"
                      name="avatar"
                      onClick={handleChange}
                      value="a1"
                    />
                    <div class="radio-tile">
                      <div class="radio-icon">
                        <img src="./img/av_01.png" />
                      </div>
                    </div>
                  </label>
                </div>

                <div class="radio-inputs">
                  <label>
                    <input
                      class="radio-input"
                      type="radio"
                      name="avatar"
                      onClick={handleChange}
                      value="a2"
                    />
                    <div class="radio-tile">
                      <div class="radio-icon">
                        <img src="./img/av_02.png" />
                      </div>
                    </div>
                  </label>
                </div>

                <div class="radio-inputs">
                  <label>
                    <input
                      class="radio-input"
                      type="radio"
                      name="avatar"
                      onClick={handleChange}
                      value="a3"
                    />
                    <div class="radio-tile">
                      <div class="radio-icon">
                        <img src="./img/av_03.png" />
                      </div>
                    </div>
                  </label>
                </div>

                <div class="radio-inputs">
                  <label>
                    <input
                      class="radio-input"
                      type="radio"
                      name="avatar"
                      onClick={handleChange}
                      value="a4"
                    />
                    <div class="radio-tile">
                      <div class="radio-icon">
                        <img src="./img/av_04.png" />
                      </div>
                    </div>
                  </label>
                </div>

                <div class="radio-inputs">
                  <label>
                    <input
                      class="radio-input"
                      type="radio"
                      name="avatar"
                      onClick={handleChange}
                      value="a5"
                    />
                    <div class="radio-tile">
                      <div class="radio-icon">
                        <img src="./img/av_05.png" />
                      </div>
                    </div>
                  </label>
                </div>
              </div>
            </div>

            <div className="submit_buttons">
              <button 
              className="submit_button" 
              onClick={handleSubmit}
              disabled={!errors.emailValidation || !errors.passwordValidation || !submitUser.username || !submitUser.avatar}
              >
                Submit
              </button>
              <button className="back_button" onClick={()=> navigate("/")}>
            
                  Go back
              
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="img_container"></div>
    </div>
  );
}
