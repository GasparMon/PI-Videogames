import { useEffect, useState } from "react";
import "../css/options.modules.css";
import { useSelector } from "react-redux";

import CardOptions from "./CardOptions";
import putUser from "../Handlers/putUser";



export default function Options() {
  const [newInfo, setnewInfo] = useState({
    updatedEmail: "",
    updatedPassword: "",
    avatar: "",
  });

  const handleFill = (event) => {
    const { name, value } = event.target;
    setnewInfo({
      ...newInfo,
      [name]: value,
    });
  };

  const handleChange = async () => {

    try{

      setnewInfo({
        ...newInfo,
        id: userData.id
      })

      const response = await putUser(newInfo)

      console.log(response)

    }catch(error){
      alert(error.message)
    }
  }

  const userData = useSelector((state) => state.userData);
  const UserGames = userData.DataCopy.filter(
    (element) => element.id.length > 10
  );

  return (
    <div className="options_container">
      <div className="options_section">
        <div className="options_title">
          <h2>Account Settings</h2>
        </div>
        <div className="settings_container">
          <div className="user_settings">
            <div className="user_settings_title">
              <h3>User Settings</h3>
            </div>
            <div className="user_settings_container">
              <div className="user_settins_name">
                <label>Current User Name :</label>
                <h3>{userData.username}</h3>
              </div>
              <div className="user_settins_mail">
                <label>Current Email :</label>
                <h3>{userData.email}</h3>
              </div>
              <div className="user_settins_password">
                <label>New Email :</label>
                <input
                  type="email"
                  name="updatedEmail"
                  placeholder="You must enter your New Email"
                  onChange={handleFill}
                  value={newInfo.updatedEmail}
                ></input>
                <label>New Password:</label>
                <input
                  type="password"
                  name="updatedPassword"
                  placeholder="You must enter your New Password"
                  value={newInfo.updatedPassword}
                  onChange={handleFill}
                ></input>
              </div>

              <div className="user_settins_avatar">
                <label>New Avatar:</label>
                <div className="avatar_container">
                  <div class="radio-inputs">
                    <label>
                      <input
                        class="radio-input"
                        type="radio"
                        name="avatar"
                        onChange={handleFill}
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
                        onChange={handleFill}
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
                        onChange={handleFill}
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
                        onChange={handleFill}
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
                        onChange={handleFill}
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
              <div className="user_setting_save">
                <button onClick={handleChange}>Save Settings</button>
              </div>
            </div>
          </div>
          <div className="game_settings">
            <div className="game_settings_title">
              <h3>Videogame Settings</h3>
            </div>
            <div className="game_settings_container">
              {UserGames.map((element) => (
                <CardOptions
                  key={element.id}
                  id={element.id}
                  name={element.name}
                  background_image={element.background_image}
                  rating={element.rating}
                  released={element.released}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
