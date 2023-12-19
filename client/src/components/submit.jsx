import { useState } from "react";
import "../css/submit.modules.css";
import { Link } from "react-router-dom";
import createUser from "../Handlers/submitUser";

export default function Submit(props) {
  const [submitUser, setSubmitUser] = useState({
    username: "",
    email: "",
    password: "",
    avatar: null,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setSubmitUser({
      ...submitUser,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const isUserCreated = await createUser(submitUser);

    if (isUserCreated) {
      setSubmitUser({
        username: "",
        email: "",
        password: "",
        avatar: null,
      });
    }
  };

  return (
    <div className="main_container">
      <div className="submit_container">
        <div className="main_title_container">
          <div>
            <h1>My Game Room App</h1>
          </div>
        </div>
        <div className="form_container">
          <div className="submit">
            <div className="submit_title">
              <h1>Submit</h1>
              <span className="material-symbols-outlined">loyalty</span>
            </div>
            <div className="submit_user">
              <h1>Username </h1>
              <input
                type="text"
                name="username"
                placeholder="You must enter an username"
                onChange={handleChange}
                value={submitUser.username}
              />
            </div>
            <div className="submit_mail">
              <h1>Email </h1>
              <input
                type="email"
                name="email"
                placeholder="You must enter an email"
                onChange={handleChange}
                value={submitUser.email}
              />
            </div>
            <div className="submit_password">
              <h1>Password </h1>
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
                Password must include at least one uppercase letter & one digit
              </p>
            </div>
            <div className="submit_avatar">
              <h1>Avatar </h1>
              <div className="avatar_container">
                <div class="radio-inputs">
                  <label>
                    <input
                      class="radio-input"
                      type="radio"
                      name="avatar"
                      onClick={handleChange}
                      value="1"
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
                      value="2"
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
                      value="3"
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
                      value="4"
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
                      value="5"
                    />
                    <div class="radio-tile">
                      <div class="radio-icon">
                        <img src="./img/av_05.png" />
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
                      value="6"
                    />
                    <div class="radio-tile">
                      <div class="radio-icon">
                        <img src="./img/av_06.png" />
                      </div>
                    </div>
                  </label>
                </div>
              </div>
            </div>
            <div className="sublogin_buttons">
              <button className="log_buttons" onClick={handleSubmit}>
                Submit
              </button>
              <Link to="/">
                <button className="sign_buttons">Go back</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="img_container"></div>
    </div>
  );
}
